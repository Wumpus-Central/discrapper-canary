"use strict";
n.d(t, { A: () => V, t: () => F }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(205693),
    a = n(499979),
    o = n(451988),
    l = n(73153),
    u = n(767065),
    c = n(507821),
    d = n(202460),
    _ = n(274372),
    f = n(572164),
    p = n(680725),
    h = n(973522),
    m = n(929921),
    E = n(961350),
    g = n(734057),
    A = n(877717),
    I = n(430452),
    T = n(544180),
    S = n(383501),
    y = n(873985),
    v = n(851581),
    N = n(954571),
    C = n(353835),
    R = n(927813),
    O = n(837921),
    b = n(934560),
    D = n(652896),
    L = n(540305),
    w = n(6542),
    M = n(652215),
    x = n(731854);
let P = 10,
    k = 15e5,
    U = 15e5,
    G = 5 * R.A.Millis.SECOND;
class F {
    streamRegion;
    streamApplication;
    streamApplicationHistory;
    streamSourceType;
    actionContext;
    maxViewers;
    nativePickerStyleUsed;
    startTime;
    endTime;
    goLiveModalDurationMs;
    numViewers;
    analyticsLocations;
    constructor({
        streamRegion: e,
        streamApplication: t,
        streamSourceType: n,
        actionContext: r,
        numViewers: i,
        goLiveModalDurationMs: s,
        analyticsLocations: a,
    }) {
        (this.streamRegion = e),
            (this.streamApplication = t),
            (this.streamApplicationHistory = [t]),
            (this.streamSourceType = n),
            (this.actionContext = r),
            (this.maxViewers = i),
            (this.goLiveModalDurationMs = s),
            (this.numViewers = i),
            (this.analyticsLocations = a ?? []);
    }
    setActionContext(e) {
        this.actionContext = e;
    }
    updateStreamApplication(e) {
        (this.streamApplication = e), (this.streamApplicationHistory = [...this.streamApplicationHistory, e]);
    }
    setAnalyticsLocations(e) {
        this.analyticsLocations = e;
    }
    trackViewerCount(e) {
        (this.maxViewers = Math.max(e, this.maxViewers)), (this.numViewers = e);
    }
    setNativePickerStyleUsed(e) {
        this.nativePickerStyleUsed = e;
    }
    trackStart() {
        this.startTime = performance.now();
    }
    trackEnd() {
        this.endTime = performance.now();
    }
    getStreamApplicationFromHistory(e) {
        return this.streamApplicationHistory[e];
    }
    getDuration() {
        if (null == this.startTime) return null;
        let e = performance.now();
        return (this.endTime ?? e) - this.startTime;
    }
}
class V extends u.A {
    analyticsContext;
    videoStreamStats;
    streamContext;
    streamKey;
    soundshareStats = new d.A();
    updateVideoStreamId;
    bandwidthSamples = [];
    goliveCurrentMaxResolution;
    _firstFrameDelivered = !1;
    screenshareFinishedCount = 0;
    soundshareFailuresReported = {};
    errorTimer = new o.Ep();
    constructor({
        sessionId: e,
        streamKey: t,
        serverId: n,
        initialLayout: r,
        analyticsContext: s,
        parentMediaSessionId: a,
        channelId: o,
    }) {
        const u = (0, D.Iy)(t),
            { guildId: c, channelId: d } = u;
        super({
            userId: E.default.getId(),
            sessionId: e,
            guildId: c,
            channelId: d,
            context: x.x.STREAM,
            streamServerId: n,
            streamChannelId: o,
            parentMediaSessionId: a,
            joinVoiceId: null,
        }),
            (this.streamContext = u),
            (this.streamKey = t),
            (this.videoStreamStats = new b.A(r, this.isOwner)),
            (this.analyticsContext = s),
            (this.updateVideoStreamId = i().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, D.Iy)(this.streamKey);
                l.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: n,
                    channelId: r,
                    userId: i,
                    streamId: e,
                    rtcServerId: t,
                    mediaEngineConnectionId: this.getMediaEngineConnectionId(),
                    context: x.x.STREAM,
                });
            }, 200)),
            this.videoStreamStats.start(),
            this.initializeEvents();
    }
    get isOwner() {
        let { ownerId: e } = this.streamContext;
        return E.default.getId() === e;
    }
    destroy(e) {
        this.videoStreamStats.stop(),
            this.trackVideoEndStats(e),
            this.updateVideoStreamId.cancel(),
            this.updateVideoStreamId(null, null),
            this.updateVideoStreamId.flush(),
            this.errorTimer.stop(),
            super.destroy();
    }
    streamUpdate(e) {
        let t = this._videoQuality;
        null != t && (e ? t.pause() : t.resume());
    }
    layoutChange(e) {
        this.videoStreamStats.layoutChange(e);
    }
    autoQualityChange() {
        this.videoStreamStats.autoQualityChange();
    }
    getVideoStats() {
        let { ownerId: e } = this.streamContext,
            t = this._videoQuality;
        if (null != t) {
            let {
                duration: n,
                avg_bitrate: r,
                avg_fps: i,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: a,
            } = this.isOwner ? (t.getOutboundStats()[0] ?? {}) : (t.getInboundStats(e) ?? {});
            return {
                duration: n,
                avg_bitrate: r,
                avg_fps: i,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: a,
            };
        }
        return null;
    }
    getRegion() {
        return this.analyticsContext.streamRegion;
    }
    getMaxViewers() {
        return this.analyticsContext.maxViewers;
    }
    getVoiceParticipantType() {
        return this.isOwner ? "streamer" : "receiver";
    }
    updateStats(e) {
        let t,
            n = !this.isOwner && this._goLiveQualityManager?.getUserID() != null,
            r =
                void 0 !== this.goliveCurrentMaxResolution &&
                (this.goliveCurrentMaxResolution.height > 720 || 0 === this.goliveCurrentMaxResolution.height),
            s = "unknown",
            a = e.find((e) => e.mediaEngineConnectionId === this._connection?.mediaEngineConnectionId)?.stats;
        if (null != a && n) {
            let e = a.transport.inboundBitrateEstimate;
            null != e &&
                e < 1e8 &&
                (this.bandwidthSamples.push(e),
                this.bandwidthSamples.length > P && this.bandwidthSamples.shift(),
                this.bandwidthSamples.length === P &&
                    ((t = i().mean(this.bandwidthSamples)) > U ? (s = "HQ") : t < k && (s = "LQ")));
        }
        let o = this._goLiveQualityManager?.isDowngraded() ?? !1;
        if (
            ("HQ" === s && o
                ? (this.logger.info(`Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ${t}`),
                  this._goLiveQualityManager?.setGoLiveStreamDowngraded(!1))
                : "LQ" === s &&
                  !o &&
                  r &&
                  (this.logger.info(`Attempting to downgrade to LQ simulcast stream, bandwidth estimate: ${t}`),
                  this._goLiveQualityManager?.setGoLiveStreamDowngraded(!0)),
            n)
        ) {
            let e =
                !this._goLiveQualityManager?.senderSupportsSimulcast() ||
                this._goLiveQualityManager?.isDowngraded() === !1;
            this._videoQuality?.setViewedSimulcastQuality(e);
            let t = this._goLiveQualityManager?.isOneToOneCall() ?? !1,
                n = r && "LQ" === s && !t;
            this._videoQuality?.setEligibleSimulcastQuality(!n);
        }
    }
    initializeEvents() {
        let e = !1;
        this.on(c.q.State, (e, t, n) => {
            l.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n, streamKey: this.streamKey }),
                e === M.S7L.RTC_CONNECTED &&
                    (this._connection?.on(
                        s.yq.ScreenshareFinish,
                        (e, t, n, r, i, s, a, o, l, u, c, d, _, f, p, m, E, g, A, I, T, S) => {
                            let y = this.analyticsContext.getStreamApplicationFromHistory(
                                this.screenshareFinishedCount,
                            );
                            this.screenshareFinishedCount++;
                            let { gameName: C, gameId: R, exe: b, distributor: D } = (0, h.wH)(y),
                                L = this.getMediaSessionId(),
                                w = this.getRTCConnectionId();
                            (0, v.w)().then((h) => {
                                let y = null;
                                if (null != h) {
                                    let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = h;
                                    y = { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i };
                                }
                                let v =
                                        (e ?? 0) +
                                        (t ?? 0) +
                                        (n ?? 0) +
                                        (r ?? 0) +
                                        (i ?? 0) +
                                        (s ?? 0) +
                                        (m ?? 0) +
                                        (I ?? 0) +
                                        (A ?? 0),
                                    P = (u ?? 0) + (c ?? 0) + (d ?? 0) + (_ ?? 0) + (f ?? 0);
                                N.default.track(M.HAw.SCREENSHARE_FINISHED, {
                                    screenshare_frames: e,
                                    videohook_frames: t,
                                    hybrid_dxgi_frames: n,
                                    hybrid_gdi_frames: r,
                                    hybrid_videohook_frames: i,
                                    hybrid_graphics_capture_frames: s,
                                    hybrid_capture_method_switches: a,
                                    hybrid_gdi_bitblt_frames: o,
                                    hybrid_gdi_printwindow_frames: l,
                                    hybrid_graphics_capture_frames_unique: u,
                                    hybrid_dxgi_frames_unique: c,
                                    hybrid_videohook_frames_unique: d,
                                    hybrid_gdi_bitblt_frames_unique: _,
                                    hybrid_gdi_printwindow_frames_unique: f,
                                    skip_history_json: p,
                                    quartz_frames: m,
                                    screencapturekit_frames: I,
                                    go_live_camera_frames: A,
                                    total_frames: v,
                                    total_frames_unique: P,
                                    desktop_capturer_type: E,
                                    media_session_id: L,
                                    rtc_connection_id: w,
                                    context: x.x.STREAM,
                                    activity: g,
                                    soundshare_session: this.soundshareStats.getStats().soundshare_last_session,
                                    picker_type_used:
                                        null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
                                    duration: this.analyticsContext.getDuration(),
                                    share_game_name: C,
                                    share_game_id: R,
                                    share_game_exe: b,
                                    share_game_distributor: D,
                                    hdr_frames_capable: T,
                                    hdr_frames: S,
                                    discord_is_elevated: O.Ay.getDiscordIsElevated(),
                                    ...y,
                                });
                            });
                        },
                    ),
                    this._connection?.on(s.yq.SoundshareAttached, () => {
                        let e = I.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            N.default.track(M.HAw.SOUNDSHARE_ATTACHED, {
                                ...(0, L.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            });
                    }),
                    this._connection?.on(s.yq.SoundshareFailed, (e) => {
                        let { failureCode: t, failureReason: n, willRetry: r } = e,
                            i = I.Ay.getGoLiveSource();
                        this.reportSoundshareFailure(i?.desktopSource, t, n, r);
                    }),
                    this._connection?.on(s.yq.SoundshareSpeaking, () => {
                        let e = I.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            (N.default.track(M.HAw.SOUNDSHARE_TRANSMITTING, {
                                ...(0, L.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            }),
                            null != A.A.getHookError(M.LU7.SOUND) &&
                                l.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                    }),
                    this._connection?.on(s.yq.SoundshareTrace, (e) => {
                        let t = I.Ay.getGoLiveSource();
                        switch ((this.soundshareStats.traceEvent(t?.desktopSource?.soundshareSession, e), e.type)) {
                            case "soundshare_attach_requested":
                                this.errorTimer.start(G, () => {
                                    l.h.dispatch({
                                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                        errorMessage: "Sound Hook Failed",
                                    });
                                });
                                break;
                            case "soundshare_recv_failed":
                                let n = e.reason,
                                    r = e.code,
                                    i = e.retry;
                                t?.desktopSource != null &&
                                    (this.reportSoundshareFailure(t?.desktopSource, r, n, i),
                                    i ||
                                        (this.errorTimer.stop(),
                                        l.h.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: n,
                                            errorCode: r,
                                        })));
                                break;
                            case "soundshare_state_transition":
                                4 === e.newState &&
                                    (this.errorTimer.stop(),
                                    l.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                        }
                    }),
                    this._connection?.on(s.yq.FirstFrameStats, (e) => {
                        if (this._firstFrameDelivered) return;
                        this._firstFrameDelivered = !0;
                        let t = this.getStreamAnalyticsProperties();
                        N.default.track(M.HAw.RECEIVER_FIRST_FRAME_DELIVERED, {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            rtc_connection_id: t.rtc_connection_id,
                            media_session_id: t.media_session_id,
                            parent_media_session_id: t.parent_media_session_id,
                            num_viewers: this.analyticsContext.numViewers,
                            time_connected_to_first_frame_delivered: this.getDuration(),
                            time_total_to_first_frame: (0, a.tB)() - this.getCreatedTime(),
                            time_remote_user_to_video_stream_created:
                                void 0 !== e.remoteVideoStreamCreatedTimestamp &&
                                void 0 !== e.remoteUserCreatedTimestamp
                                    ? Number(e.remoteVideoStreamCreatedTimestamp - e.remoteUserCreatedTimestamp)
                                    : null,
                            time_video_stream_created_to_video_data_received:
                                void 0 !== e.videoDataReceivedTimestamp &&
                                void 0 !== e.remoteVideoStreamCreatedTimestamp
                                    ? Number(e.videoDataReceivedTimestamp - e.remoteVideoStreamCreatedTimestamp)
                                    : null,
                            time_video_data_received_to_video_source_delivered_frame:
                                void 0 !== e.videoSourceDeliveredFrameTimestamp &&
                                void 0 !== e.videoDataReceivedTimestamp
                                    ? Number(e.videoSourceDeliveredFrameTimestamp - e.videoDataReceivedTimestamp)
                                    : null,
                            time_remote_user_to_mls_external_sender_updated:
                                void 0 !== e.updateMLSExternalSenderTimestamp && void 0 !== e.remoteUserCreatedTimestamp
                                    ? Number(e.updateMLSExternalSenderTimestamp - e.remoteUserCreatedTimestamp)
                                    : null,
                            time_remote_user_to_secure_frame_remote_key_ratchet_set:
                                void 0 !== e.setRemoteSecureFrameKeyRatchetTimestamp &&
                                void 0 !== e.remoteUserCreatedTimestamp
                                    ? Number(e.setRemoteSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp)
                                    : null,
                            time_remote_user_to_secure_frame_local_key_ratchet_set:
                                void 0 !== e.setLocalSecureFrameKeyRatchetTimestamp &&
                                void 0 !== e.remoteUserCreatedTimestamp
                                    ? Number(e.setLocalSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp)
                                    : null,
                            time_remote_user_to_first_frame_decrypted:
                                void 0 !== e.firstFrameDecryptedTimestamp && void 0 !== e.remoteUserCreatedTimestamp
                                    ? Number(e.firstFrameDecryptedTimestamp - e.remoteUserCreatedTimestamp)
                                    : null,
                        });
                    }),
                    this._connection?.on(s.yq.FirstFrameEncryptedStats, (e) => {
                        let t = this.getStreamAnalyticsProperties();
                        N.default.track(M.HAw.STREAMER_FIRST_FRAME_ENCRYPTED, {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            rtc_connection_id: t.rtc_connection_id,
                            media_session_id: t.media_session_id,
                            parent_media_session_id: t.parent_media_session_id,
                            time_local_user_to_video_receivers_set:
                                void 0 !== e.videoReceiversSetTimestamp && void 0 !== e.localUserCreatedTimestamp
                                    ? Number(e.videoReceiversSetTimestamp - e.localUserCreatedTimestamp)
                                    : null,
                            time_local_user_to_mls_external_sender_updated:
                                void 0 !== e.updateMLSExternalSenderTimestamp && void 0 !== e.localUserCreatedTimestamp
                                    ? Number(e.updateMLSExternalSenderTimestamp - e.localUserCreatedTimestamp)
                                    : null,
                            time_local_user_to_secure_frame_remote_key_ratchet_set:
                                void 0 !== e.setRemoteSecureFrameKeyRatchetTimestamp &&
                                void 0 !== e.localUserCreatedTimestamp
                                    ? Number(e.setRemoteSecureFrameKeyRatchetTimestamp - e.localUserCreatedTimestamp)
                                    : null,
                            time_local_user_to_secure_frame_local_key_ratchet_set:
                                void 0 !== e.setLocalSecureFrameKeyRatchetTimestamp &&
                                void 0 !== e.localUserCreatedTimestamp
                                    ? Number(e.setLocalSecureFrameKeyRatchetTimestamp - e.localUserCreatedTimestamp)
                                    : null,
                            time_local_user_to_first_frame_encrypted:
                                void 0 !== e.firstFrameEncryptedTimestamp && void 0 !== e.localUserCreatedTimestamp
                                    ? Number(e.firstFrameEncryptedTimestamp - e.localUserCreatedTimestamp)
                                    : null,
                        });
                    }),
                    this._connection?.on(s.yq.Destroy, () => {
                        this.errorTimer.stop();
                    }));
        }),
            this.on(c.q.Video, (t, n, r, i, s) => {
                let a = (0, D.Iy)(this.streamKey);
                a.guildId === t &&
                    a.channelId === n &&
                    a.ownerId === r &&
                    (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), (e = !0)),
                    this.updateVideoStreamId(i, s));
            }),
            this.on(c.q.VideoSourceQualityChanged, (e, t, n, r, i, s) => {
                n === this._goLiveQualityManager?.getUserID() && (this.goliveCurrentMaxResolution = r),
                    l.h.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                        guildId: e,
                        channelId: t,
                        senderUserId: n,
                        maxResolution: r,
                        maxFrameRate: i,
                        context: s,
                    });
            }),
            this.on(c.q.SecureFramesUpdate, () => {
                l.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            }),
            this.on(c.q.RosterMapUpdate, (e) => {
                l.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
    }
    reportSoundshareFailure(e, t, n, r) {
        let i = e?.soundshareSession ?? "";
        null == this.soundshareFailuresReported[i] && (this.soundshareFailuresReported[i] = new Set());
        let s = null != t && !this.soundshareFailuresReported[i].has(t);
        s && this.soundshareFailuresReported[i].add(t),
            (null == t || s) &&
                N.default.track(M.HAw.SOUNDSHARE_FAILED, {
                    soundshare_failure_code: t,
                    soundshare_failure_reason: n,
                    soundshare_failure_will_retry: r,
                    ...(0, L.A)(e),
                    ...this.getSoundshareAnalyticsProperties(),
                });
    }
    getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: s } = this.streamContext,
            a = y.A.getRegion(S.A.getHostname()),
            { gameName: o, gameId: l, exe: u, distributor: c, sku: d, gameMetadata: _ } = (0, h.wH)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: x.x.STREAM,
            guild_id: s,
            stream_region: e,
            stream_source_type: n,
            guild_region: a,
            participant_type: this.isOwner ? "streamer" : "receiver",
            share_application_name: o,
            share_application_id: l,
            share_application_executable: u,
            share_application_distributor: c,
            share_application_distributor_game_id: d,
            share_application_game_metadata: _,
            video_layout: this.videoStreamStats.getLayout(),
            client_event_source: r,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion,
        };
    }
    getSoundshareAnalyticsProperties() {
        return {
            rtc_connection_id: this.getRTCConnectionId(),
            soundshare_experimental: I.Ay.getExperimentalSoundshare(),
        };
    }
    trackVideoStartStats() {
        let e = this.isOwner ? (0, w.A)() : null;
        N.default.track(M.HAw.VIDEO_STREAM_STARTED, {
            ...this.getStreamAnalyticsProperties(),
            ...e,
            connection_type: T.A.getType(),
            effective_connection_speed: T.A.getEffectiveConnectionSpeed(),
            service_provider: T.A.getServiceProvider(),
            duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
            source_location_stack: this.analyticsContext.analyticsLocations,
        });
    }
    trackVideoEndStats(e) {
        let t = g.A.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this.streamContext,
            i = null,
            s = null,
            a = this._videoQuality;
        if (null == a) return;
        (i = a.getNetworkStats()),
            (s = this.isOwner ? a.getCodecUsageStats("streamer", this.userId) : a.getCodecUsageStats("receiver", r));
        let o = null,
            l = _.A.getSettings(),
            u = this.isOwner ? { clips_enabled: (0, f.TD)(), clips_buffer_length: l.clipsLength } : {},
            c = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        a.getOutboundStats().forEach((t) => {
            (t.num_frames ?? 0) > 0 &&
                N.default.track(M.HAw.VIDEO_STREAM_ENDED, {
                    ...s,
                    ...i,
                    ...o,
                    ...this.videoStreamStats.getStats(),
                    ...t,
                    ...this.soundshareStats.getStats(),
                    ...this.getStreamAnalyticsProperties(),
                    ...u,
                    ...c,
                    app_hardware_acceleration_enabled: C.A.getAppHardwareAccelerationEnabled(),
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: I.Ay.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, p.A)() : null,
                    soundshare_experimental: I.Ay.getExperimentalSoundshare(),
                    quality_preset: m.A.getState().preset,
                    discord_is_elevated: O.Ay.getDiscordIsElevated(),
                });
        }),
            a.getInboundParticipants().forEach((t) => {
                let r = a.getInboundStats(t);
                (r?.num_frames ?? 0) > 0 &&
                    N.default.track(M.HAw.VIDEO_STREAM_ENDED, {
                        ...s,
                        ...i,
                        ...o,
                        ...this.videoStreamStats.getStats(),
                        ...r,
                        ...this.soundshareStats.getStats(),
                        ...this.getStreamAnalyticsProperties(),
                        ...u,
                        ...c,
                        app_hardware_acceleration_enabled: C.A.getAppHardwareAccelerationEnabled(),
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: I.Ay.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, p.A)() : null,
                    });
            });
    }
    getExtraConnectionOptions() {
        return { streamUserId: (0, D.Iy)(this.streamKey).ownerId };
    }
}
