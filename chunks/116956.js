"use strict";
let i;
n.d(t, { A: () => es });
var r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(17928),
    d = n(205693),
    _ = n(228366),
    u = n(328153),
    c = n(499979),
    E = n(451988),
    h = n(952462),
    m = n(507821);
class f {
    _report;
    _pids;
    constructor() {
        (this._report = {
            soundshare_attach_requested_count: 0,
            soundshare_capturing_count: 0,
            soundshare_capture_stopped_count: 0,
            soundshare_hooked_count: 0,
            soundshare_recv_connect_count: 0,
            soundshare_recv_disconnect_count: 0,
            soundshare_recv_started_count: 0,
            soundshare_recv_stopped_count: 0,
            soundshare_recv_failed_count: 0,
            soundshare_recv_format_count: 0,
            soundshare_send_announce_count: 0,
            soundshare_send_start_count: 0,
            soundshare_send_stop_count: 0,
            soundshare_malformed_trace_count: 0,
            soundshare_audio_detected_count: 0,
            soundshare_state_transition_detached_count: 0,
            soundshare_state_transition_waiting_count: 0,
            soundshare_state_transition_attached_count: 0,
            soundshare_state_transition_started_count: 0,
            soundshare_state_transition_playing_count: 0,
            soundshare_state_transition_silence_count: 0,
            soundshare_unknown_event_count: 0,
            soundshare_first_pid: 0,
            soundshare_last_pid: 0,
            soundshare_unique_pids: 0,
            soundshare_first_session: null,
            soundshare_last_session: null,
        }),
            (this._pids = new Set());
    }
    traceEvent(e, t) {
        let n,
            i = this._report;
        void 0 !==
        i[
            (n =
                "soundshare_state_transition" === t.type
                    ? `soundshare_state_transition_${["detached", "waiting", "attached", "started", "playing", "silence"][t.newState]}_count`
                    : `${t.type}_count`)
        ]
            ? i[n] < 32767 && i[n]++
            : i.soundshare_unknown_event_count++,
            "pid" in t &&
                (0 === i.soundshare_first_pid && (i.soundshare_first_pid = t.pid),
                (i.soundshare_last_pid = t.pid),
                this._pids.add(t.pid)),
            null != e &&
                (null == i.soundshare_first_session && (i.soundshare_first_session = e),
                (i.soundshare_last_session = e));
    }
    getStats() {
        return { ...this._report, soundshare_unique_pids: this._pids.size };
    }
}
var g = n(274372),
    p = n(572164),
    A = n(680725),
    I = n(973522),
    T = n(967347),
    S = n(929921),
    N = n(495544),
    C = n(734057),
    R = n(877717),
    O = n(969341),
    y = n(544180),
    v = n(763827),
    D = n(873985),
    L = n(954571),
    b = n(353835),
    w = n(927813),
    P = n(652215);
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class M {
    _statInterval;
    _isSender;
    _streamEnd;
    _targetResolution = 0;
    _targetFPS = 0;
    _streamSettingsChanged = !1;
    _lastLayout;
    _lastLayoutChanged = 0;
    _layoutChanges = 0;
    _layoutBuckets;
    _automaticQualityChanges = 0;
    constructor(e, t) {
        (this._isSender = t), (this._statInterval = new E.IX()), (this._lastLayout = e), (this._layoutBuckets = {});
    }
    start() {
        let { resolution: e, fps: t } = S.A.getState();
        (this._targetResolution = e),
            (this._targetFPS = t),
            this._statInterval.start(1e3, this._sampleStats),
            (this._lastLayoutChanged = (0, c.tB)());
    }
    stop() {
        this._statInterval.stop(),
            (this._streamEnd = (0, c.tB)()),
            this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3);
    }
    autoQualityChange() {
        this._automaticQualityChanges += 1;
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd) return;
        let t = (0, c.tB)();
        this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3),
            this._layoutChanges++,
            (this._lastLayout = e),
            (this._lastLayoutChanged = t);
    }
    _incrementLayout = (e, t) => {
        null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), (this._layoutBuckets[e] += t);
    };
    getLayout() {
        return this._lastLayout;
    }
    getStats() {
        let e = {
            num_layout_changes: this._layoutChanges,
            duration_layout_fullscreen: k(this._layoutBuckets[P.SO9.FULL_SCREEN]),
            duration_layout_theatre: k(this._layoutBuckets[P.SO9.THEATRE]),
            duration_layout_pip: k(this._layoutBuckets[P.SO9.PIP]),
            duration_layout_popout: k(this._layoutBuckets[P.SO9.POPOUT]),
            duration_layout_portrait: k(this._layoutBuckets[P.SO9.PORTRAIT]),
            duration_layout_landscape: k(this._layoutBuckets[P.SO9.LANDSCAPE]),
            duration_layout_minimized: k(this._layoutBuckets[P.SO9.MINIMIZED]),
        };
        return this._isSender
            ? {
                  ...e,
                  target_fps: this._targetFPS,
                  target_resolution_height: this._targetResolution,
                  stream_settings_changed: this._streamSettingsChanged,
                  num_auto_quality_changes: this._automaticQualityChanges,
              }
            : e;
    }
    _sampleStats = () => {
        let { resolution: e, fps: t } = S.A.getState();
        this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS;
    };
}
var U = n(652896),
    x = n(540305);
let G = n(815706).p;
var V = n(731854);
let F = 5 * w.A.Millis.SECOND;
class B {
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
        actionContext: i,
        numViewers: r,
        goLiveModalDurationMs: s,
        analyticsLocations: a,
    }) {
        (this.streamRegion = e),
            (this.streamApplication = t),
            (this.streamApplicationHistory = [t]),
            (this.streamSourceType = n),
            (this.actionContext = i),
            (this.maxViewers = r),
            (this.goLiveModalDurationMs = s),
            (this.numViewers = r),
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
class H extends h.A {
    analyticsContext;
    videoStreamStats;
    streamContext;
    streamKey;
    soundshareStats = new f();
    updateVideoStreamId;
    _firstFrameDelivered = !1;
    screenshareFinishedCount = 0;
    soundshareFailuresReported = {};
    errorTimer = new E.Ep();
    constructor({
        sessionId: e,
        streamKey: t,
        serverId: n,
        initialLayout: i,
        analyticsContext: r,
        parentMediaSessionId: s,
        channelId: a,
    }) {
        const l = (0, U.Iy)(t),
            { guildId: d, channelId: u } = l;
        super({
            userId: N.default.getId(),
            sessionId: e,
            guildId: d,
            channelId: u,
            context: V.x.STREAM,
            streamServerId: n,
            streamChannelId: a,
            parentMediaSessionId: s,
            joinVoiceId: null,
        }),
            (this.streamContext = l),
            (this.streamKey = t),
            (this.videoStreamStats = new M(i, this.isOwner)),
            (this.analyticsContext = r),
            (this.updateVideoStreamId = o().debounce((e, t) => {
                let { guildId: n, channelId: i, ownerId: r } = (0, U.Iy)(this.streamKey);
                _.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: n,
                    channelId: i,
                    userId: r,
                    streamId: e,
                    rtcServerId: t,
                    mediaEngineConnectionId: this.getMediaEngineConnectionId(),
                    context: V.x.STREAM,
                });
            }, 200)),
            this.videoStreamStats.start(),
            this.initializeEvents();
    }
    get isOwner() {
        let { ownerId: e } = this.streamContext;
        return N.default.getId() === e;
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
                avg_bitrate: i,
                avg_fps: r,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: a,
            } = this.isOwner ? (t.getOutboundStats()[0] ?? {}) : (t.getInboundStats(e) ?? {});
            return {
                duration: n,
                avg_bitrate: i,
                avg_fps: r,
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
    initializeEvents() {
        let e = !1;
        this.on(m.q.State, (e, t, n) => {
            _.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n, streamKey: this.streamKey }),
                e === P.S7L.RTC_CONNECTED &&
                    (this._connection?.on(
                        d.yq.ScreenshareFinish,
                        (e, t, n, i, r, s, a, o, l, d, _, u, c, E, h, m, f, g, p, A, S, N, C) => {
                            let R = this.analyticsContext.getStreamApplicationFromHistory(
                                this.screenshareFinishedCount,
                            );
                            this.screenshareFinishedCount++;
                            let { gameName: O, gameId: y, exe: v, distributor: D } = (0, I.wH)(R),
                                w = this.getMediaSessionId(),
                                k = this.getRTCConnectionId();
                            (0, T.w)().then((I) => {
                                let T =
                                        null != I
                                            ? {
                                                  cpu_brand: I.cpu_brand,
                                                  cpu_vendor: I.cpu_vendor,
                                                  cpu_memory: I.cpu_memory,
                                                  gpu_brand: I.gpu_brand,
                                                  gpu_memory: I.gpu_memory,
                                              }
                                            : null,
                                    R =
                                        (e ?? 0) +
                                        (t ?? 0) +
                                        (n ?? 0) +
                                        (i ?? 0) +
                                        (r ?? 0) +
                                        (s ?? 0) +
                                        (m ?? 0) +
                                        (A ?? 0) +
                                        (p ?? 0),
                                    M = (d ?? 0) + (_ ?? 0) + (u ?? 0) + (c ?? 0) + (E ?? 0);
                                L.default.track(P.HAw.SCREENSHARE_FINISHED, {
                                    screenshare_frames: e,
                                    videohook_frames: t,
                                    hybrid_dxgi_frames: n,
                                    hybrid_gdi_frames: i,
                                    hybrid_videohook_frames: r,
                                    hybrid_graphics_capture_frames: s,
                                    hybrid_capture_method_switches: a,
                                    hybrid_gdi_bitblt_frames: o,
                                    hybrid_gdi_printwindow_frames: l,
                                    hybrid_graphics_capture_frames_unique: d,
                                    hybrid_dxgi_frames_unique: _,
                                    hybrid_videohook_frames_unique: u,
                                    hybrid_gdi_bitblt_frames_unique: c,
                                    hybrid_gdi_printwindow_frames_unique: E,
                                    skip_history_json: h,
                                    quartz_frames: m,
                                    screencapturekit_frames: A,
                                    go_live_camera_frames: p,
                                    total_frames: R,
                                    total_frames_unique: M,
                                    desktop_capturer_type: f,
                                    media_session_id: w,
                                    rtc_connection_id: k,
                                    context: V.x.STREAM,
                                    activity: g,
                                    soundshare_session: this.soundshareStats.getStats().soundshare_last_session,
                                    picker_type_used:
                                        null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
                                    duration: this.analyticsContext.getDuration(),
                                    share_game_name: O,
                                    share_game_id: y,
                                    share_game_exe: v,
                                    share_game_distributor: D,
                                    hdr_frames_capable: S,
                                    hdr_frames: N,
                                    discord_is_elevated: b.A.getDiscordIsElevated(),
                                    target_window_elevated: C,
                                    ...T,
                                });
                            });
                        },
                    ),
                    this._connection?.on(d.yq.SoundshareAttached, () => {
                        let e = O.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            L.default.track(P.HAw.SOUNDSHARE_ATTACHED, {
                                ...(0, x.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            });
                    }),
                    this._connection?.on(d.yq.SoundshareFailed, (e) => {
                        let { failureCode: t, failureReason: n, willRetry: i } = e,
                            r = O.Ay.getGoLiveSource();
                        this.reportSoundshareFailure(r?.desktopSource, t, n, i);
                    }),
                    this._connection?.on(d.yq.SoundshareSpeaking, () => {
                        let e = O.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            (L.default.track(P.HAw.SOUNDSHARE_TRANSMITTING, {
                                ...(0, x.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            }),
                            null != R.A.getHookError(P.LU7.SOUND) &&
                                _.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                    }),
                    this._connection?.on(d.yq.SoundshareTrace, (e) => {
                        let t = O.Ay.getGoLiveSource();
                        switch ((this.soundshareStats.traceEvent(t?.desktopSource?.soundshareSession, e), e.type)) {
                            case "soundshare_attach_requested":
                                this.errorTimer.start(F, () => {
                                    _.h.dispatch({
                                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                        errorMessage: "Sound Hook Failed",
                                    });
                                });
                                break;
                            case "soundshare_recv_failed":
                                let n = e.reason,
                                    i = e.code,
                                    r = e.retry;
                                t?.desktopSource != null &&
                                    (this.reportSoundshareFailure(t?.desktopSource, i, n, r),
                                    r ||
                                        (this.errorTimer.stop(),
                                        _.h.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: n,
                                            errorCode: i,
                                        })));
                                break;
                            case "soundshare_state_transition":
                                4 === e.newState &&
                                    (this.errorTimer.stop(),
                                    _.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                        }
                    }),
                    this._connection?.on(d.yq.FirstFrameStats, (e) => {
                        if (this._firstFrameDelivered) return;
                        this._firstFrameDelivered = !0;
                        let t = this.getStreamAnalyticsProperties();
                        L.default.track(P.HAw.RECEIVER_FIRST_FRAME_DELIVERED, {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            rtc_connection_id: t.rtc_connection_id,
                            media_session_id: t.media_session_id,
                            parent_media_session_id: t.parent_media_session_id,
                            num_viewers: this.analyticsContext.numViewers,
                            time_connected_to_first_frame_delivered: this.getDuration(),
                            time_total_to_first_frame: (0, c.tB)() - this.getCreatedTime(),
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
                    this._connection?.on(d.yq.FirstFrameEncryptedStats, (e) => {
                        let t = this.getStreamAnalyticsProperties();
                        L.default.track(P.HAw.STREAMER_FIRST_FRAME_ENCRYPTED, {
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
                    this._connection?.on(d.yq.Destroy, () => {
                        this.errorTimer.stop();
                    }));
        }),
            this.on(m.q.Video, (t, n, i, r, s) => {
                let a = (0, U.Iy)(this.streamKey);
                a.guildId === t &&
                    a.channelId === n &&
                    a.ownerId === i &&
                    (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), (e = !0)),
                    this.updateVideoStreamId(r, s));
            }),
            this.on(m.q.VideoSourceQualityChanged, (e, t, n, i, r, s) => {
                _.h.dispatch({
                    type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                    guildId: e,
                    channelId: t,
                    senderUserId: n,
                    maxResolution: i,
                    maxFrameRate: r,
                    context: s,
                });
            }),
            this.on(m.q.SecureFramesUpdate, () => {
                _.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            }),
            this.on(m.q.RosterMapUpdate, (e) => {
                _.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
    }
    reportSoundshareFailure(e, t, n, i) {
        let r = e?.soundshareSession ?? "";
        null == this.soundshareFailuresReported[r] && (this.soundshareFailuresReported[r] = new Set());
        let s = null != t && !this.soundshareFailuresReported[r].has(t);
        s && this.soundshareFailuresReported[r].add(t),
            (null == t || s) &&
                L.default.track(P.HAw.SOUNDSHARE_FAILED, {
                    soundshare_failure_code: t,
                    soundshare_failure_reason: n,
                    soundshare_failure_will_retry: i,
                    ...(0, x.A)(e),
                    ...this.getSoundshareAnalyticsProperties(),
                });
    }
    getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: i } = this.analyticsContext,
            { ownerId: r, guildId: s } = this.streamContext,
            a = D.A.getRegion(v.A.getHostname()),
            { gameName: o, gameId: l, exe: d, distributor: _, sku: u, gameMetadata: c } = (0, I.wH)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: r,
            context: V.x.STREAM,
            guild_id: s,
            stream_region: e,
            stream_source_type: n,
            guild_region: a,
            participant_type: this.isOwner ? "streamer" : "receiver",
            share_application_name: o,
            share_application_id: l,
            share_application_executable: d,
            share_application_distributor: _,
            share_application_distributor_game_id: u,
            share_application_game_metadata: c,
            video_layout: this.videoStreamStats.getLayout(),
            client_event_source: i,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion,
        };
    }
    getSoundshareAnalyticsProperties() {
        return {
            rtc_connection_id: this.getRTCConnectionId(),
            soundshare_experimental: O.Ay.getExperimentalSoundshare(),
        };
    }
    trackVideoStartStats() {
        let e = this.isOwner ? G() : null;
        L.default.track(P.HAw.VIDEO_STREAM_STARTED, {
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
        let t = C.A.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: i } = this.streamContext,
            r = null,
            s = null,
            a = this._videoQuality;
        if (null == a) return;
        (r = a.getNetworkStats()),
            (s = this.isOwner ? a.getCodecUsageStats("streamer", this.userId) : a.getCodecUsageStats("receiver", i));
        let o = g.A.getSettings(),
            l = this.isOwner ? { clips_enabled: (0, p.TD)(), clips_buffer_length: o.clipsLength } : {},
            d = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        a.getOutboundStats().forEach((t) => {
            (t.num_frames ?? 0) > 0 &&
                L.default.track(P.HAw.VIDEO_STREAM_ENDED, {
                    ...s,
                    ...r,
                    ...null,
                    ...this.videoStreamStats.getStats(),
                    ...t,
                    ...this.soundshareStats.getStats(),
                    ...this.getStreamAnalyticsProperties(),
                    ...l,
                    ...d,
                    app_hardware_acceleration_enabled: b.A.getAppHardwareAccelerationEnabled(),
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: O.Ay.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, A.A)() : null,
                    soundshare_experimental: O.Ay.getExperimentalSoundshare(),
                    quality_preset: S.A.getState().preset,
                    discord_is_elevated: b.A.getDiscordIsElevated(),
                });
        }),
            a.getInboundParticipants().forEach((t) => {
                let i = a.getInboundStats(t);
                (i?.num_frames ?? 0) > 0 &&
                    L.default.track(P.HAw.VIDEO_STREAM_ENDED, {
                        ...s,
                        ...r,
                        ...null,
                        ...this.videoStreamStats.getStats(),
                        ...i,
                        ...this.soundshareStats.getStats(),
                        ...this.getStreamAnalyticsProperties(),
                        ...l,
                        ...d,
                        app_hardware_acceleration_enabled: b.A.getAppHardwareAccelerationEnabled(),
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: O.Ay.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, A.A)() : null,
                    });
            });
    }
    getExtraConnectionOptions() {
        return { streamUserId: (0, U.Iy)(this.streamKey).ownerId };
    }
}
var j = n(834757),
    W = n(254057),
    Y = n(723702),
    K = n(290863),
    z = n(325278);
let $ = {},
    q = {},
    X = {},
    Z = {},
    Q = {},
    J = {},
    ee = P.SO9.THEATRE,
    et = {};
function en() {
    o().forEach(et, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete et[t], delete J[t];
    });
}
function ei() {
    return !0;
}
class er extends l.Ay.Store {
    initialize() {
        this.waitFor(N.default, O.Ay, v.A, u.Ay);
    }
    static displayName = "StreamRTCConnectionStore";
    getRTCConnections() {
        return et;
    }
    getAllActiveStreamKeys() {
        return Object.keys(et);
    }
    getRTCConnection(e) {
        return et[e];
    }
    getQuality(e) {
        return (0, W.A)(O.Ay) && null != e ? (et[e]?.quality ?? P.bFR.UNKNOWN) : P.bFR.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = et[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = et[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = et[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return "";
        let t = et[e];
        return null != t && null != t.hostname ? t.hostname : "";
    }
    getRegion(e) {
        if (null == e) return null;
        let t = et[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = et[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return Z[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return J[e];
    }
    getUserIds(e) {
        let t = et[e];
        return t?.getUserIds();
    }
    isUserConnected(e, t) {
        let n = et[e];
        return n?.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = et[e];
        return t?.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = et[e],
            i = n?.getSecureFramesRosterMap();
        return i?.get(t);
    }
}
let es = new er(
    _.h,
    !O.Ay.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  (i = e.sessionId), en();
              },
              CONNECTION_CLOSED: function () {
                  (i = null), en();
              },
              RTC_CONNECTION_STATE: ei,
              RTC_CONNECTION_PING: ei,
              RTC_CONNECTION_LOSS_RATE: ei,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return o().some(et, (t) => t === e.connection);
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: ei,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n, userId: i, guildId: r, channelId: s } = e,
                      a = (0, U._z)({
                          streamType: null == r ? z.U4.CALL : z.U4.GUILD,
                          guildId: r,
                          channelId: s,
                          ownerId: i,
                      });
                  if (
                      t !== d.x.STREAM ||
                      null == et[a] ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  J[a] = performance.now();
              },
              STREAM_START: function (e) {
                  let {
                          streamType: t,
                          guildId: n,
                          channelId: i,
                          appContext: r,
                          pid: s,
                          sourceId: a,
                          sourcePid: l,
                          nativePickerStyleUsed: d,
                          goLiveModalDurationMs: _,
                          analyticsLocations: c,
                      } = e,
                      E = (0, U._z)({ streamType: t, guildId: n, channelId: i, ownerId: N.default.getId() });
                  if (
                      (($[E] = { appContext: r, analyticsLocations: c }),
                      o().forEach(et, (e) => {
                          let { analyticsContext: t, isOwner: n } = e;
                          t.setActionContext(r), t.setNativePickerStyleUsed(d), n && t.trackStart();
                      }),
                      null == s && (s = l),
                      (Z[E] = a),
                      (X[E] = s),
                      null != s)
                  ) {
                      let e = u.Ay.getGameForPID(s);
                      null != e &&
                          (q[E] = {
                              name: e.name,
                              id: e.id,
                              exe: e.exeName,
                              distributor: e.distributor,
                              sku: e.sku,
                              gameMetadata: e.gameMetadata,
                          }),
                          et[E]?.analyticsContext.updateStreamApplication(q[E]);
                  } else et[E]?.analyticsContext.updateStreamApplication(null);
                  null != _ ? (Q[E] = _) : delete Q[E];
              },
              STREAM_STOP: function (e) {
                  let { appContext: t, streamKey: n } = e;
                  ($[n] = { appContext: t, analyticsLocations: void 0 }),
                      o().forEach(et, (e) => {
                          let { analyticsContext: n, isOwner: i } = e;
                          n.setActionContext(t), i && n.trackEnd();
                      }),
                      (Z[n] = null),
                      (X[n] = null),
                      delete Q[n];
              },
              STREAM_CREATE: function (e) {
                  let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: a, viewerIds: o } = e,
                      l = et[t],
                      d = (0, U.Iy)(t);
                  if (null == l && null != n) {
                      null == X[t] && (q[t] = null), null == q[t] && null == Z[t] && (q[t] = (0, j.Ee)(d, K.A));
                      let e = new B({
                          streamRegion: a,
                          streamApplication: q[t],
                          streamSourceType: (function (e) {
                              if (null == e) return "unknown";
                              if (Y.isPlatformEmbedded || platform?.name === "Chrome") {
                                  if (e.startsWith("web-contents-media-stream:")) return "tab";
                                  else if (e.startsWith("window:")) return "window";
                                  else if (e.startsWith("screen:")) return "screen";
                              } else if (platform?.name === "Firefox")
                                  if ("" !== e) return "window";
                                  else return "screen";
                              else if (platform?.name === "Safari") return "window";
                              return "unknown";
                          })(Z[t]),
                          actionContext: $[t]?.appContext,
                          numViewers: null != o ? o.length : 0,
                          goLiveModalDurationMs: Q[t],
                          analyticsLocations: $[t]?.analyticsLocations,
                      });
                      s()(null != i, "Creating RTCConnection without session."),
                          (l = new H({
                              sessionId: i,
                              streamKey: t,
                              serverId: n,
                              channelId: r,
                              initialLayout: ee,
                              analyticsContext: e,
                              parentMediaSessionId: v.A.getMediaSessionId(),
                          })),
                          (et[t] = l);
                  }
                  delete J[t],
                      _.h.dispatch({
                          type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
                          mediaEngineConnectionId: l.getMediaEngineConnectionId(),
                      });
              },
              STREAM_SERVER_UPDATE: function (e) {
                  let t = et[e.streamKey];
                  if (null == t) return !1;
                  t.connect(e.endpoint, e.token);
              },
              STREAM_UPDATE: function (e) {
                  let { streamKey: t, viewerIds: n, paused: i } = e,
                      r = et[t];
                  if (null == r) return !1;
                  null != n && r.analyticsContext.trackViewerCount(n.length), r.streamUpdate(i);
              },
              STREAM_DELETE: function (e) {
                  let { streamKey: t } = e,
                      n = et[t];
                  if (null == n) return !1;
                  _.h.dispatch({
                      type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
                      mediaEngineConnectionId: n.getMediaEngineConnectionId(),
                  }),
                      n.destroy("stream-end"),
                      delete et[t];
              },
              STREAM_LAYOUT_UPDATE: function (e) {
                  let { layout: t } = e;
                  (ee = t), Object.values(et).forEach((e) => e.layoutChange(t));
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: i } = e;
                  o().forEach(et, (e) => {
                      e?.setVideoSize(t, n, i);
                  });
              },
          },
);
