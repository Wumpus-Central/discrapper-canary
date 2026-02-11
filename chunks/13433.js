"use strict";
n.d(t, { A: () => V, t: () => F }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(205693),
    s = n(499979),
    o = n(451988),
    l = n(73153),
    u = n(767065),
    c = n(507821),
    d = n(202460),
    _ = n(274372),
    f = n(572164),
    h = n(680725),
    p = n(973522),
    g = n(929921),
    E = n(961350),
    A = n(734057),
    I = n(877717),
    T = n(430452),
    y = n(544180),
    S = n(383501),
    v = n(873985),
    C = n(851581),
    b = n(954571),
    N = n(353835),
    R = n(927813),
    O = n(934560),
    D = n(652896),
    L = n(540305),
    w = n(6542),
    x = n(652215),
    P = n(731854);
let M = 10,
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
        goLiveModalDurationMs: a,
        analyticsLocations: s,
    }) {
        (this.streamRegion = e),
            (this.streamApplication = t),
            (this.streamApplicationHistory = [t]),
            (this.streamSourceType = n),
            (this.actionContext = r),
            (this.maxViewers = i),
            (this.goLiveModalDurationMs = a),
            (this.numViewers = i),
            (this.analyticsLocations = s ?? []);
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
        analyticsContext: a,
        parentMediaSessionId: s,
        channelId: o,
    }) {
        const u = (0, D.Iy)(t),
            { guildId: c, channelId: d } = u;
        super({
            userId: E.default.getId(),
            sessionId: e,
            guildId: c,
            channelId: d,
            context: P.x.STREAM,
            streamServerId: n,
            streamChannelId: o,
            parentMediaSessionId: s,
            joinVoiceId: null,
        }),
            (this.streamContext = u),
            (this.streamKey = t),
            (this.videoStreamStats = new O.A(r, this.isOwner)),
            (this.analyticsContext = a),
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
                    context: P.x.STREAM,
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
                avg_resolution: a,
                inbound_bitrate_estimate_percentile99: s,
            } = this.isOwner ? (t.getOutboundStats()[0] ?? {}) : (t.getInboundStats(e) ?? {});
            return {
                duration: n,
                avg_bitrate: r,
                avg_fps: i,
                avg_resolution: a,
                inbound_bitrate_estimate_percentile99: s,
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
            a = "unknown",
            s = e.find((e) => e.mediaEngineConnectionId === this._connection?.mediaEngineConnectionId)?.stats;
        if (null != s && n) {
            let e = s.transport.inboundBitrateEstimate;
            null != e &&
                e < 1e8 &&
                (this.bandwidthSamples.push(e),
                this.bandwidthSamples.length > M && this.bandwidthSamples.shift(),
                this.bandwidthSamples.length === M &&
                    ((t = i().mean(this.bandwidthSamples)) > U ? (a = "HQ") : t < k && (a = "LQ")));
        }
        let o = this._goLiveQualityManager?.isDowngraded() ?? !1;
        if (
            ("HQ" === a && o
                ? (this.logger.info(`Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ${t}`),
                  this._goLiveQualityManager?.setGoLiveStreamDowngraded(!1))
                : "LQ" === a &&
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
                n = r && "LQ" === a && !t;
            this._videoQuality?.setEligibleSimulcastQuality(!n);
        }
    }
    initializeEvents() {
        let e = !1;
        this.on(c.q.State, (e, t, n) => {
            l.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n, streamKey: this.streamKey }),
                e === x.S7L.RTC_CONNECTED &&
                    (this._connection?.on(
                        a.yq.ScreenshareFinish,
                        (e, t, n, r, i, a, s, o, l, u, c, d, _, f, h, g, E, A, I) => {
                            let T = this.analyticsContext.getStreamApplicationFromHistory(
                                this.screenshareFinishedCount,
                            );
                            this.screenshareFinishedCount++;
                            let { gameName: y, gameId: S, exe: v, distributor: N } = (0, p.wH)(T),
                                R = this.getMediaSessionId(),
                                O = this.getRTCConnectionId();
                            (0, C.w)().then((p) => {
                                let T = null;
                                if (null != p) {
                                    let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = p;
                                    T = { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i };
                                }
                                let C =
                                        (e ?? 0) +
                                        (t ?? 0) +
                                        (n ?? 0) +
                                        (r ?? 0) +
                                        (i ?? 0) +
                                        (a ?? 0) +
                                        (h ?? 0) +
                                        (I ?? 0) +
                                        (A ?? 0),
                                    D = (u ?? 0) + (c ?? 0) + (d ?? 0) + (_ ?? 0) + (f ?? 0);
                                b.default.track(x.HAw.SCREENSHARE_FINISHED, {
                                    screenshare_frames: e,
                                    videohook_frames: t,
                                    hybrid_dxgi_frames: n,
                                    hybrid_gdi_frames: r,
                                    hybrid_videohook_frames: i,
                                    hybrid_graphics_capture_frames: a,
                                    hybrid_capture_method_switches: s,
                                    hybrid_gdi_bitblt_frames: o,
                                    hybrid_gdi_printwindow_frames: l,
                                    hybrid_graphics_capture_frames_unique: u,
                                    hybrid_dxgi_frames_unique: c,
                                    hybrid_videohook_frames_unique: d,
                                    hybrid_gdi_bitblt_frames_unique: _,
                                    hybrid_gdi_printwindow_frames_unique: f,
                                    quartz_frames: h,
                                    screencapturekit_frames: I,
                                    go_live_camera_frames: A,
                                    total_frames: C,
                                    total_frames_unique: D,
                                    desktop_capturer_type: g,
                                    media_session_id: R,
                                    rtc_connection_id: O,
                                    context: P.x.STREAM,
                                    activity: E,
                                    soundshare_session: this.soundshareStats.getStats().soundshare_last_session,
                                    picker_type_used:
                                        null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
                                    duration: this.analyticsContext.getDuration(),
                                    share_game_name: y,
                                    share_game_id: S,
                                    share_game_exe: v,
                                    share_game_distributor: N,
                                    ...T,
                                });
                            });
                        },
                    ),
                    this._connection?.on(a.yq.SoundshareAttached, () => {
                        let e = T.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            b.default.track(x.HAw.SOUNDSHARE_ATTACHED, {
                                ...(0, L.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            });
                    }),
                    this._connection?.on(a.yq.SoundshareFailed, (e) => {
                        let { failureCode: t, failureReason: n, willRetry: r } = e,
                            i = T.Ay.getGoLiveSource();
                        this.reportSoundshareFailure(i?.desktopSource, t, n, r);
                    }),
                    this._connection?.on(a.yq.SoundshareSpeaking, () => {
                        let e = T.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            (b.default.track(x.HAw.SOUNDSHARE_TRANSMITTING, {
                                ...(0, L.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            }),
                            null != I.A.getHookError(x.LU7.SOUND) &&
                                l.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                    }),
                    this._connection?.on(a.yq.SoundshareTrace, (e) => {
                        let t = T.Ay.getGoLiveSource();
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
                    this._connection?.on(a.yq.FirstFrameStats, (e) => {
                        if (this._firstFrameDelivered) return;
                        this._firstFrameDelivered = !0;
                        let t = this.getStreamAnalyticsProperties();
                        b.default.track(x.HAw.RECEIVER_FIRST_FRAME_DELIVERED, {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            rtc_connection_id: t.rtc_connection_id,
                            media_session_id: t.media_session_id,
                            parent_media_session_id: t.parent_media_session_id,
                            num_viewers: this.analyticsContext.numViewers,
                            time_connected_to_first_frame_delivered: this.getDuration(),
                            time_total_to_first_frame: (0, s.tB)() - this.getCreatedTime(),
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
                    this._connection?.on(a.yq.FirstFrameEncryptedStats, (e) => {
                        let t = this.getStreamAnalyticsProperties();
                        b.default.track(x.HAw.STREAMER_FIRST_FRAME_ENCRYPTED, {
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
                    this._connection?.on(a.yq.Destroy, () => {
                        this.errorTimer.stop();
                    }));
        }),
            this.on(c.q.Video, (t, n, r, i, a) => {
                let s = (0, D.Iy)(this.streamKey);
                s.guildId === t &&
                    s.channelId === n &&
                    s.ownerId === r &&
                    (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), (e = !0)),
                    this.updateVideoStreamId(i, a));
            }),
            this.on(c.q.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
                n === this._goLiveQualityManager?.getUserID() && (this.goliveCurrentMaxResolution = r),
                    l.h.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                        guildId: e,
                        channelId: t,
                        senderUserId: n,
                        maxResolution: r,
                        maxFrameRate: i,
                        context: a,
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
        let a = null != t && !this.soundshareFailuresReported[i].has(t);
        a && this.soundshareFailuresReported[i].add(t),
            (null == t || a) &&
                b.default.track(x.HAw.SOUNDSHARE_FAILED, {
                    soundshare_failure_code: t,
                    soundshare_failure_reason: n,
                    soundshare_failure_will_retry: r,
                    ...(0, L.A)(e),
                    ...this.getSoundshareAnalyticsProperties(),
                });
    }
    getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: a } = this.streamContext,
            s = v.A.getRegion(S.A.getHostname()),
            { gameName: o, gameId: l, exe: u, distributor: c, sku: d, gameMetadata: _ } = (0, p.wH)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: P.x.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: s,
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
            soundshare_experimental: T.Ay.getExperimentalSoundshare(),
        };
    }
    trackVideoStartStats() {
        let e = this.isOwner ? (0, w.A)() : null;
        b.default.track(x.HAw.VIDEO_STREAM_STARTED, {
            ...this.getStreamAnalyticsProperties(),
            ...e,
            connection_type: y.A.getType(),
            effective_connection_speed: y.A.getEffectiveConnectionSpeed(),
            service_provider: y.A.getServiceProvider(),
            duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
            source_location_stack: this.analyticsContext.analyticsLocations,
        });
    }
    trackVideoEndStats(e) {
        let t = A.A.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this.streamContext,
            i = null,
            a = null,
            s = this._videoQuality;
        if (null == s) return;
        (i = s.getNetworkStats()),
            (a = this.isOwner ? s.getCodecUsageStats("streamer", this.userId) : s.getCodecUsageStats("receiver", r));
        let o = null,
            l = _.A.getSettings(),
            u = this.isOwner ? { clips_enabled: (0, f.TD)(), clips_buffer_length: l.clipsLength } : {},
            c = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        s.getOutboundStats().forEach((t) => {
            (t.num_frames ?? 0) > 0 &&
                b.default.track(x.HAw.VIDEO_STREAM_ENDED, {
                    ...a,
                    ...i,
                    ...o,
                    ...this.videoStreamStats.getStats(),
                    ...t,
                    ...this.soundshareStats.getStats(),
                    ...this.getStreamAnalyticsProperties(),
                    ...u,
                    ...c,
                    app_hardware_acceleration_enabled: N.A.getAppHardwareAccelerationEnabled(),
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: T.Ay.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, h.A)() : null,
                    soundshare_experimental: T.Ay.getExperimentalSoundshare(),
                    quality_preset: g.A.getState().preset,
                });
        }),
            s.getInboundParticipants().forEach((t) => {
                let r = s.getInboundStats(t);
                (r?.num_frames ?? 0) > 0 &&
                    b.default.track(x.HAw.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...i,
                        ...o,
                        ...this.videoStreamStats.getStats(),
                        ...r,
                        ...this.soundshareStats.getStats(),
                        ...this.getStreamAnalyticsProperties(),
                        ...u,
                        ...c,
                        app_hardware_acceleration_enabled: N.A.getAppHardwareAccelerationEnabled(),
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: T.Ay.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, h.A)() : null,
                    });
            });
    }
    getExtraConnectionOptions() {
        return { streamUserId: (0, D.Iy)(this.streamKey).ownerId };
    }
}
