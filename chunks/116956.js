"use strict";
let i;
n.d(t, { A: () => ea });
var r = n(284009),
    a = n.n(r),
    s = n(735438),
    l = n.n(s),
    o = n(17928),
    d = n(459838),
    c = n(228366),
    u = n(952818),
    _ = n(499979),
    E = n(451988),
    A = n(483883),
    h = n(507821);
class I {
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
var f = n(274372),
    p = n(572164),
    T = n(680725),
    m = n(973522),
    g = n(967347),
    S = n(929921),
    N = n(280450),
    C = n(734057),
    R = n(877717),
    O = n(451409),
    L = n(544180),
    D = n(763827),
    y = n(873985),
    v = n(174459),
    b = n(353835),
    M = n(927813),
    P = n(652215);
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class w {
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
            (this._lastLayoutChanged = (0, _.tB)());
    }
    stop() {
        this._statInterval.stop(),
            (this._streamEnd = (0, _.tB)()),
            this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3);
    }
    autoQualityChange() {
        this._automaticQualityChanges += 1;
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd) return;
        let t = (0, _.tB)();
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
            duration_layout_fullscreen: U(this._layoutBuckets[P.SO9.FULL_SCREEN]),
            duration_layout_theatre: U(this._layoutBuckets[P.SO9.THEATRE]),
            duration_layout_pip: U(this._layoutBuckets[P.SO9.PIP]),
            duration_layout_popout: U(this._layoutBuckets[P.SO9.POPOUT]),
            duration_layout_portrait: U(this._layoutBuckets[P.SO9.PORTRAIT]),
            duration_layout_landscape: U(this._layoutBuckets[P.SO9.LANDSCAPE]),
            duration_layout_minimized: U(this._layoutBuckets[P.SO9.MINIMIZED]),
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
var G = n(652896),
    x = n(540305);
let k = n(815706).p;
var F = n(731854);
let V = 5 * M.A.Millis.SECOND;
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
        goLiveModalDurationMs: a,
        analyticsLocations: s,
    }) {
        (this.streamRegion = e),
            (this.streamApplication = t),
            (this.streamApplicationHistory = [t]),
            (this.streamSourceType = n),
            (this.actionContext = i),
            (this.maxViewers = r),
            (this.goLiveModalDurationMs = a),
            (this.numViewers = r),
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
class H extends A.A {
    analyticsContext;
    videoStreamStats;
    streamContext;
    streamKey;
    soundshareStats = new I();
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
        parentMediaSessionId: a,
        channelId: s,
    }) {
        const o = (0, G.Iy)(t),
            { guildId: d, channelId: u } = o;
        super({
            userId: N.default.getId(),
            sessionId: e,
            guildId: d,
            channelId: u,
            context: F.x.STREAM,
            streamServerId: n,
            streamChannelId: s,
            parentMediaSessionId: a,
            joinVoiceId: null,
        }),
            (this.streamContext = o),
            (this.streamKey = t),
            (this.videoStreamStats = new w(i, this.isOwner)),
            (this.analyticsContext = r),
            (this.updateVideoStreamId = l().debounce((e, t) => {
                let { guildId: n, channelId: i, ownerId: r } = (0, G.Iy)(this.streamKey);
                c.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: n,
                    channelId: i,
                    userId: r,
                    streamId: e,
                    rtcServerId: t,
                    mediaEngineConnectionId: this.getMediaEngineConnectionId(),
                    context: F.x.STREAM,
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
                avg_resolution: a,
                inbound_bitrate_estimate_percentile99: s,
            } = this.isOwner ? (t.getOutboundStats()[0] ?? {}) : (t.getInboundStats(e) ?? {});
            return {
                duration: n,
                avg_bitrate: i,
                avg_fps: r,
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
    initializeEvents() {
        let e = !1;
        this.on(h.q.State, (e, t, n) => {
            c.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n, streamKey: this.streamKey }),
                e === P.S7L.RTC_CONNECTED &&
                    (this._connection?.on(
                        d.yq.ScreenshareFinish,
                        (e, t, n, i, r, a, s, l, o, d, c, u, _, E, A, h, I, f, p, T, S, N, C, R, O, L) => {
                            let D = this.analyticsContext.getStreamApplicationFromHistory(
                                this.screenshareFinishedCount,
                            );
                            this.screenshareFinishedCount++;
                            let { gameName: y, gameId: M, exe: U, distributor: w } = (0, m.wH)(D),
                                G = this.getMediaSessionId(),
                                x = this.getRTCConnectionId(),
                                k = (d ?? 0) + (c ?? 0) + (u ?? 0) + (_ ?? 0) + (E ?? 0);
                            (0, g.w)().then((m) => {
                                let g =
                                        null != m
                                            ? {
                                                  cpu_brand: m.cpu_brand,
                                                  cpu_vendor: m.cpu_vendor,
                                                  cpu_memory: m.cpu_memory,
                                                  gpu_brand: m.gpu_brand,
                                                  gpu_memory: m.gpu_memory,
                                              }
                                            : null,
                                    D =
                                        (e ?? 0) +
                                        (t ?? 0) +
                                        (n ?? 0) +
                                        (i ?? 0) +
                                        (r ?? 0) +
                                        (a ?? 0) +
                                        (h ?? 0) +
                                        (T ?? 0) +
                                        (p ?? 0) +
                                        (O ?? 0) +
                                        (R ?? 0);
                                v.default.track(P.HAw.SCREENSHARE_FINISHED, {
                                    screenshare_frames: e,
                                    videohook_frames: t,
                                    hybrid_dxgi_frames: n,
                                    hybrid_gdi_frames: i,
                                    hybrid_videohook_frames: r,
                                    hybrid_graphics_capture_frames: a,
                                    hybrid_capture_method_switches: s,
                                    hybrid_gdi_bitblt_frames: l,
                                    hybrid_gdi_printwindow_frames: o,
                                    hybrid_graphics_capture_frames_unique: d,
                                    hybrid_dxgi_frames_unique: c,
                                    hybrid_videohook_frames_unique: u,
                                    hybrid_gdi_bitblt_frames_unique: _,
                                    hybrid_gdi_printwindow_frames_unique: E,
                                    skip_history_json: A,
                                    quartz_frames: h,
                                    screencapturekit_frames: T,
                                    go_live_camera_frames: p,
                                    total_frames: D,
                                    total_frames_unique: k,
                                    desktop_capturer_type: I,
                                    media_session_id: G,
                                    rtc_connection_id: x,
                                    context: F.x.STREAM,
                                    activity: f,
                                    soundshare_session: this.soundshareStats.getStats().soundshare_last_session,
                                    picker_type_used:
                                        null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
                                    duration: this.analyticsContext.getDuration(),
                                    share_game_name: y,
                                    share_game_id: M,
                                    share_game_exe: U,
                                    share_game_distributor: w,
                                    hdr_frames_capable: S,
                                    hdr_frames: N,
                                    discord_is_elevated: b.A.getDiscordIsElevated(),
                                    target_window_elevated: C,
                                    pipewire_frames: R,
                                    x11_frames: O,
                                    videohook_backend: L,
                                    ...g,
                                });
                            });
                        },
                    ),
                    this._connection?.on(d.yq.SoundshareAttached, () => {
                        let e = O.Ay.getGoLiveSource();
                        e?.desktopSource != null &&
                            v.default.track(P.HAw.SOUNDSHARE_ATTACHED, {
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
                            (v.default.track(P.HAw.SOUNDSHARE_TRANSMITTING, {
                                ...(0, x.A)(e?.desktopSource),
                                ...this.getSoundshareAnalyticsProperties(),
                            }),
                            null != R.A.getHookError(P.LU7.SOUND) &&
                                c.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                    }),
                    this._connection?.on(d.yq.SoundshareTrace, (e) => {
                        let t = O.Ay.getGoLiveSource();
                        switch ((this.soundshareStats.traceEvent(t?.desktopSource?.soundshareSession, e), e.type)) {
                            case "soundshare_attach_requested":
                                this.errorTimer.start(V, () => {
                                    c.h.dispatch({
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
                                        c.h.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: n,
                                            errorCode: i,
                                        })));
                                break;
                            case "soundshare_state_transition":
                                4 === e.newState &&
                                    (this.errorTimer.stop(),
                                    c.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                        }
                    }),
                    this._connection?.on(d.yq.FirstFrameStats, (e) => {
                        if (this._firstFrameDelivered) return;
                        this._firstFrameDelivered = !0;
                        let t = this.getStreamAnalyticsProperties();
                        v.default.track(P.HAw.RECEIVER_FIRST_FRAME_DELIVERED, {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            rtc_connection_id: t.rtc_connection_id,
                            media_session_id: t.media_session_id,
                            parent_media_session_id: t.parent_media_session_id,
                            num_viewers: this.analyticsContext.numViewers,
                            time_connected_to_first_frame_delivered: this.getDuration(),
                            time_total_to_first_frame: (0, _.tB)() - this.getCreatedTime(),
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
                        v.default.track(P.HAw.STREAMER_FIRST_FRAME_ENCRYPTED, {
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
            this.on(h.q.Video, (t, n, i, r, a) => {
                let s = (0, G.Iy)(this.streamKey);
                s.guildId === t &&
                    s.channelId === n &&
                    s.ownerId === i &&
                    (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), (e = !0)),
                    this.updateVideoStreamId(r, a));
            }),
            this.on(h.q.VideoSourceQualityChanged, (e, t, n, i, r, a) => {
                c.h.dispatch({
                    type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                    guildId: e,
                    channelId: t,
                    senderUserId: n,
                    maxResolution: i,
                    maxFrameRate: r,
                    context: a,
                });
            }),
            this.on(h.q.SecureFramesUpdate, () => {
                c.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            }),
            this.on(h.q.RosterMapUpdate, (e) => {
                c.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
    }
    reportSoundshareFailure(e, t, n, i) {
        let r = e?.soundshareSession ?? "";
        null == this.soundshareFailuresReported[r] && (this.soundshareFailuresReported[r] = new Set());
        let a = null != t && !this.soundshareFailuresReported[r].has(t);
        a && this.soundshareFailuresReported[r].add(t),
            (null == t || a) &&
                v.default.track(P.HAw.SOUNDSHARE_FAILED, {
                    soundshare_failure_code: t,
                    soundshare_failure_reason: n,
                    soundshare_failure_will_retry: i,
                    ...(0, x.A)(e),
                    ...this.getSoundshareAnalyticsProperties(),
                });
    }
    getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: i } = this.analyticsContext,
            { ownerId: r, guildId: a } = this.streamContext,
            s = y.A.getRegion(D.A.getHostname()),
            { gameName: l, gameId: o, exe: d, distributor: c, sku: u, gameMetadata: _ } = (0, m.wH)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: r,
            context: F.x.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: s,
            participant_type: this.isOwner ? "streamer" : "receiver",
            share_application_name: l,
            share_application_id: o,
            share_application_executable: d,
            share_application_distributor: c,
            share_application_distributor_game_id: u,
            share_application_game_metadata: _,
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
        let e = this.isOwner ? k() : null;
        v.default.track(P.HAw.VIDEO_STREAM_STARTED, {
            ...this.getStreamAnalyticsProperties(),
            ...e,
            connection_type: L.A.getType(),
            effective_connection_speed: L.A.getEffectiveConnectionSpeed(),
            service_provider: L.A.getServiceProvider(),
            duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
            source_location_stack: this.analyticsContext.analyticsLocations,
        });
    }
    trackVideoEndStats(e) {
        let t = C.A.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: i } = this.streamContext,
            r = null,
            a = null,
            s = this._videoQuality;
        if (null == s) return;
        (r = s.getNetworkStats()),
            (a = this.isOwner ? s.getCodecUsageStats("streamer", this.userId) : s.getCodecUsageStats("receiver", i));
        let l = f.Ay.getSettings(),
            o = this.isOwner ? { clips_enabled: (0, p.TD)(), clips_buffer_length: l.clipsLength } : {},
            d = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        s.getOutboundStats().forEach((t) => {
            (t.num_frames ?? 0) > 0 &&
                v.default.track(P.HAw.VIDEO_STREAM_ENDED, {
                    ...a,
                    ...r,
                    ...null,
                    ...this.videoStreamStats.getStats(),
                    ...t,
                    ...this.soundshareStats.getStats(),
                    ...this.getStreamAnalyticsProperties(),
                    ...o,
                    ...d,
                    app_hardware_acceleration_enabled: b.A.getAppHardwareAccelerationEnabled(),
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: O.Ay.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, T.A)() : null,
                    soundshare_experimental: O.Ay.getExperimentalSoundshare(),
                    quality_preset: S.A.getState().preset,
                    discord_is_elevated: b.A.getDiscordIsElevated(),
                });
        }),
            s.getInboundParticipants().forEach((t) => {
                let i = s.getInboundStats(t);
                (i?.num_frames ?? 0) > 0 &&
                    v.default.track(P.HAw.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...r,
                        ...null,
                        ...this.videoStreamStats.getStats(),
                        ...i,
                        ...this.soundshareStats.getStats(),
                        ...this.getStreamAnalyticsProperties(),
                        ...o,
                        ...d,
                        app_hardware_acceleration_enabled: b.A.getAppHardwareAccelerationEnabled(),
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: O.Ay.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, T.A)() : null,
                    });
            });
    }
    getExtraConnectionOptions() {
        return { streamUserId: (0, G.Iy)(this.streamKey).ownerId };
    }
    getMediaStreamKey() {
        return this.streamKey;
    }
}
var j = n(834757),
    W = n(254057),
    Y = n(723702),
    K = n(290863),
    $ = n(325278);
let z = {},
    q = {},
    Z = {},
    X = {},
    Q = {},
    J = {},
    ee = P.SO9.THEATRE,
    et = {};
function en() {
    l().forEach(et, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete et[t], delete J[t];
    });
}
function ei() {
    return !0;
}
class er extends o.Ay.Store {
    initialize() {
        this.waitFor(N.default, O.Ay, D.A, u.Ay);
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
        return X[e];
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
let ea = new er(
    c.h,
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
                  return l().some(et, (t) => t === e.connection);
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: ei,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n, userId: i, guildId: r, channelId: a } = e,
                      s = (0, G._z)({
                          streamType: null == r ? $.U4.CALL : $.U4.GUILD,
                          guildId: r,
                          channelId: a,
                          ownerId: i,
                      });
                  if (
                      t !== d.x.STREAM ||
                      null == et[s] ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  J[s] = performance.now();
              },
              STREAM_START: function (e) {
                  let {
                          streamType: t,
                          guildId: n,
                          channelId: i,
                          appContext: r,
                          pid: a,
                          sourceId: s,
                          sourcePid: o,
                          nativePickerStyleUsed: d,
                          goLiveModalDurationMs: c,
                          analyticsLocations: _,
                      } = e,
                      E = (0, G._z)({ streamType: t, guildId: n, channelId: i, ownerId: N.default.getId() });
                  if (
                      ((z[E] = { appContext: r, analyticsLocations: _ }),
                      l().forEach(et, (e) => {
                          let { analyticsContext: t, isOwner: n } = e;
                          t.setActionContext(r), t.setNativePickerStyleUsed(d), n && t.trackStart();
                      }),
                      null == a && (a = o),
                      (X[E] = s),
                      (Z[E] = a),
                      null != a)
                  ) {
                      let e = u.Ay.getGameForPID(a);
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
                  null != c ? (Q[E] = c) : delete Q[E];
              },
              STREAM_STOP: function (e) {
                  let { appContext: t, streamKey: n } = e;
                  (z[n] = { appContext: t, analyticsLocations: void 0 }),
                      l().forEach(et, (e) => {
                          let { analyticsContext: n, isOwner: i } = e;
                          n.setActionContext(t), i && n.trackEnd();
                      }),
                      (X[n] = null),
                      (Z[n] = null),
                      delete Q[n];
              },
              STREAM_CREATE: function (e) {
                  let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: s, viewerIds: l } = e,
                      o = et[t],
                      d = (0, G.Iy)(t);
                  if (null == o && null != n) {
                      null == Z[t] && (q[t] = null), null == q[t] && null == X[t] && (q[t] = (0, j.Ee)(d, K.A));
                      let e = new B({
                          streamRegion: s,
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
                          })(X[t]),
                          actionContext: z[t]?.appContext,
                          numViewers: null != l ? l.length : 0,
                          goLiveModalDurationMs: Q[t],
                          analyticsLocations: z[t]?.analyticsLocations,
                      });
                      a()(null != i, "Creating RTCConnection without session."),
                          (o = new H({
                              sessionId: i,
                              streamKey: t,
                              serverId: n,
                              channelId: r,
                              initialLayout: ee,
                              analyticsContext: e,
                              parentMediaSessionId: D.A.getMediaSessionId(),
                          })),
                          (et[t] = o);
                  }
                  delete J[t],
                      c.h.dispatch({
                          type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
                          mediaEngineConnectionId: o.getMediaEngineConnectionId(),
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
                  c.h.dispatch({
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
                  l().forEach(et, (e) => {
                      e?.setVideoSize(t, n, i);
                  });
              },
          },
);
