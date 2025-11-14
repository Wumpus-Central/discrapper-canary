n.d(t, {
    A: () => F,
    Z: () => V,
}),
    n(539854),
    n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(46973),
    o = n(379649),
    s = n(846519),
    l = n(570140),
    c = n(861687),
    u = n(437263),
    d = n(435064),
    f = n(341569),
    _ = n(631053),
    p = n(581567),
    h = n(594190),
    m = n(361291),
    g = n(314897),
    E = n(592125),
    b = n(858340),
    y = n(131951),
    O = n(866960),
    v = n(19780),
    I = n(936349),
    T = n(704806),
    S = n(626135),
    A = n(12647),
    C = n(70956),
    N = n(756315),
    R = n(569545),
    P = n(502286),
    D = n(297733),
    w = n(981631),
    x = n(65154);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = 10,
    G = 1500000,
    B = 1500000,
    Z = 5 * C.Z.Millis.SECOND;
class F {
    setActionContext(e) {
        this.actionContext = e;
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
    getDuration() {
        var e;
        if (null == this.startTime) return null;
        let t = performance.now();
        return (null != (e = this.endTime) ? e : t) - this.startTime;
    }
    constructor({
        streamRegion: e,
        streamApplication: t,
        streamSourceType: n,
        actionContext: r,
        numViewers: i,
        goLiveModalDurationMs: a,
        analyticsLocations: o,
    }) {
        L(this, "streamRegion", void 0),
            L(this, "streamApplication", void 0),
            L(this, "streamSourceType", void 0),
            L(this, "actionContext", void 0),
            L(this, "maxViewers", void 0),
            L(this, "nativePickerStyleUsed", void 0),
            L(this, "startTime", void 0),
            L(this, "endTime", void 0),
            L(this, "goLiveModalDurationMs", void 0),
            L(this, "numViewers", void 0),
            L(this, "analyticsLocations", void 0),
            (this.streamRegion = e),
            (this.streamApplication = t),
            (this.streamSourceType = n),
            (this.actionContext = r),
            (this.maxViewers = i),
            (this.goLiveModalDurationMs = a),
            (this.numViewers = i),
            (this.analyticsLocations = null != o ? o : []);
    }
}
class V extends c.Z {
    get isOwner() {
        let { ownerId: e } = this.streamContext;
        return g.default.getId() === e;
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
    getVideoStats() {
        let { ownerId: e } = this.streamContext,
            t = this._videoQuality;
        if (null != t) {
            var n, r;
            let {
                duration: i,
                avg_bitrate: a,
                avg_fps: o,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: l,
            } = this.isOwner
                ? null != (n = t.getOutboundStats()[0])
                    ? n
                    : {}
                : null != (r = t.getInboundStats(e))
                  ? r
                  : {};
            return {
                duration: i,
                avg_bitrate: a,
                avg_fps: o,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: l,
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
        var t, n, r, a, o, s, l, c, u, d, f, _;
        let p,
            h = !this.isOwner && (null == (t = this._goLiveQualityManager) ? void 0 : t.getUserID()) != null,
            m =
                void 0 !== this.goliveCurrentMaxResolution &&
                (this.goliveCurrentMaxResolution.height > 720 || 0 === this.goliveCurrentMaxResolution.height),
            g = "unknown",
            E =
                null ==
                (n = e.find((e) => {
                    var t;
                    return (
                        e.mediaEngineConnectionId ===
                        (null == (t = this._connection) ? void 0 : t.mediaEngineConnectionId)
                    );
                }))
                    ? void 0
                    : n.stats;
        if (null != E && h) {
            let e = E.transport.inboundBitrateEstimate;
            null != e &&
                e < 100000000 &&
                (this.bandwidthSamples.push(e),
                this.bandwidthSamples.length > U && this.bandwidthSamples.shift(),
                this.bandwidthSamples.length === U &&
                    ((p = i().mean(this.bandwidthSamples)) > B ? (g = "HQ") : p < G && (g = "LQ")));
        }
        let b = null != (a = null == (r = this._goLiveQualityManager) ? void 0 : r.isDowngraded()) && a;
        if (
            ("HQ" === g && b
                ? (this.logger.info("Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ".concat(p)),
                  null == (o = this._goLiveQualityManager) || o.setGoLiveStreamDowngraded(!1))
                : "LQ" === g &&
                  !b &&
                  m &&
                  (this.logger.info("Attempting to downgrade to LQ simulcast stream, bandwidth estimate: ".concat(p)),
                  null == (s = this._goLiveQualityManager) || s.setGoLiveStreamDowngraded(!0)),
            h)
        ) {
            let e =
                !(null == (l = this._goLiveQualityManager) ? void 0 : l.senderSupportsSimulcast()) ||
                (null == (c = this._goLiveQualityManager) ? void 0 : c.isDowngraded()) === !1;
            null == (u = this._videoQuality) || u.setViewedSimulcastQuality(e);
            let t = null != (_ = null == (d = this._goLiveQualityManager) ? void 0 : d.isOneToOneCall()) && _,
                n = m && "LQ" === g && !t;
            null == (f = this._videoQuality) || f.setEligibleSimulcastQuality(!n);
        }
    }
    initializeEvents() {
        let e = !1;
        this.on(u.z.State, (e, t, n) => {
            if (
                (l.Z.dispatch(
                    j(
                        M(
                            {
                                type: "RTC_CONNECTION_STATE",
                                state: e,
                            },
                            t,
                            n,
                        ),
                        { streamKey: this.streamKey },
                    ),
                ),
                e === w.hes.RTC_CONNECTED)
            ) {
                var r, i, s, c, u, d, f, _;
                null == (r = this._connection) ||
                    r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, o, s, l, c, u, d, f, _) => {
                        let m = this.getMediaSessionId(),
                            g = this.getRTCConnectionId(),
                            E = this.getGoLiveSource();
                        (0, T.q)().then((b) => {
                            var y, O, v;
                            let I = null;
                            if (null != b) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = b;
                                I = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i,
                                };
                            }
                            let T =
                                    (null != e ? e : 0) +
                                    (null != t ? t : 0) +
                                    (null != n ? n : 0) +
                                    (null != r ? r : 0) +
                                    (null != i ? i : 0) +
                                    (null != a ? a : 0) +
                                    (null != c ? c : 0) +
                                    (null != _ ? _ : 0) +
                                    (null != f ? f : 0),
                                A =
                                    (null == E || null == (y = E.desktopSource) ? void 0 : y.sourcePid) != null
                                        ? h.ZP.getGameForPID(E.desktopSource.sourcePid)
                                        : null,
                                { gameName: C, gameId: N, exe: R, distributor: P } = (0, p.G8)(A);
                            S.default.track(
                                w.rMx.SCREENSHARE_FINISHED,
                                M(
                                    {
                                        screenshare_frames: e,
                                        videohook_frames: t,
                                        hybrid_dxgi_frames: n,
                                        hybrid_gdi_frames: r,
                                        hybrid_videohook_frames: i,
                                        hybrid_graphics_capture_frames: a,
                                        hybrid_capture_method_switches: o,
                                        hybrid_gdi_bitblt_frames: s,
                                        hybrid_gdi_printwindow_frames: l,
                                        quartz_frames: c,
                                        screencapturekit_frames: _,
                                        go_live_camera_frames: f,
                                        total_frames: T,
                                        desktop_capturer_type: u,
                                        media_session_id: m,
                                        rtc_connection_id: g,
                                        context: x.Yn.STREAM,
                                        activity: d,
                                        soundshare_session:
                                            null !=
                                            (v =
                                                null == E || null == (O = E.desktopSource)
                                                    ? void 0
                                                    : O.soundshareSession)
                                                ? v
                                                : void 0,
                                        share_game_name: C,
                                        share_game_id: N,
                                        share_game_exe: R,
                                        share_game_distributor: P,
                                        picker_type_used:
                                            null != this.analyticsContext.nativePickerStyleUsed ? "native" : "internal",
                                        duration: this.analyticsContext.getDuration(),
                                    },
                                    I,
                                ),
                            );
                        });
                    }),
                    null == (i = this._connection) ||
                        i.on(a.Sh.SoundshareAttached, () => {
                            let e = this.getGoLiveSource();
                            (null == e ? void 0 : e.desktopSource) != null &&
                                S.default.track(
                                    w.rMx.SOUNDSHARE_ATTACHED,
                                    M(
                                        {},
                                        (0, P.Z)(null == e ? void 0 : e.desktopSource),
                                        this.getSoundshareAnalyticsProperties(),
                                    ),
                                );
                        }),
                    null == (s = this._connection) ||
                        s.on(a.Sh.SoundshareFailed, (e) => {
                            let { failureCode: t, failureReason: n, willRetry: r } = e,
                                i = this.getGoLiveSource();
                            this.reportSoundshareFailure(null == i ? void 0 : i.desktopSource, t, n, r);
                        }),
                    null == (c = this._connection) ||
                        c.on(a.Sh.SoundshareSpeaking, () => {
                            let e = this.getGoLiveSource();
                            (null == e ? void 0 : e.desktopSource) != null &&
                                (S.default.track(
                                    w.rMx.SOUNDSHARE_TRANSMITTING,
                                    M(
                                        {},
                                        (0, P.Z)(null == e ? void 0 : e.desktopSource),
                                        this.getSoundshareAnalyticsProperties(),
                                    ),
                                ),
                                null != b.Z.getHookError(w.K3D.SOUND) &&
                                    l.Z.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                        }),
                    null == (u = this._connection) ||
                        u.on(a.Sh.SoundshareTrace, (e) => {
                            let t = this.getGoLiveSource();
                            switch (e.type) {
                                case "soundshare_attach_requested":
                                    this.errorTimer.start(Z, () => {
                                        l.Z.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: "Sound Hook Failed",
                                        });
                                    });
                                    break;
                                case "soundshare_recv_failed":
                                    let n = e.reason,
                                        r = e.code,
                                        i = e.retry;
                                    (null == t ? void 0 : t.desktopSource) != null &&
                                        (this.reportSoundshareFailure(null == t ? void 0 : t.desktopSource, r, n, i),
                                        i ||
                                            (this.errorTimer.stop(),
                                            l.Z.dispatch({
                                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                                errorMessage: n,
                                                errorCode: r,
                                            })));
                                    break;
                                case "soundshare_state_transition":
                                    4 === e.newState &&
                                        (this.errorTimer.stop(),
                                        l.Z.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" }));
                            }
                        }),
                    null == (d = this._connection) ||
                        d.on(a.Sh.FirstFrameStats, (e) => {
                            if (this._firstFrameDelivered) return;
                            this._firstFrameDelivered = !0;
                            let t = this.getStreamAnalyticsProperties();
                            S.default.track(w.rMx.RECEIVER_FIRST_FRAME_DELIVERED, {
                                guild_id: t.guild_id,
                                channel_id: t.channel_id,
                                rtc_connection_id: t.rtc_connection_id,
                                media_session_id: t.media_session_id,
                                parent_media_session_id: t.parent_media_session_id,
                                num_viewers: this.analyticsContext.numViewers,
                                time_connected_to_first_frame_delivered: this.getDuration(),
                                time_total_to_first_frame: (0, o.zO)() - this.getCreatedTime(),
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
                                    void 0 !== e.updateMLSExternalSenderTimestamp &&
                                    void 0 !== e.remoteUserCreatedTimestamp
                                        ? Number(e.updateMLSExternalSenderTimestamp - e.remoteUserCreatedTimestamp)
                                        : null,
                                time_remote_user_to_secure_frame_remote_key_ratchet_set:
                                    void 0 !== e.setRemoteSecureFrameKeyRatchetTimestamp &&
                                    void 0 !== e.remoteUserCreatedTimestamp
                                        ? Number(
                                              e.setRemoteSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp,
                                          )
                                        : null,
                                time_remote_user_to_secure_frame_local_key_ratchet_set:
                                    void 0 !== e.setLocalSecureFrameKeyRatchetTimestamp &&
                                    void 0 !== e.remoteUserCreatedTimestamp
                                        ? Number(
                                              e.setLocalSecureFrameKeyRatchetTimestamp - e.remoteUserCreatedTimestamp,
                                          )
                                        : null,
                                time_remote_user_to_first_frame_decrypted:
                                    void 0 !== e.firstFrameDecryptedTimestamp && void 0 !== e.remoteUserCreatedTimestamp
                                        ? Number(e.firstFrameDecryptedTimestamp - e.remoteUserCreatedTimestamp)
                                        : null,
                            });
                        }),
                    null == (f = this._connection) ||
                        f.on(a.Sh.FirstFrameEncryptedStats, (e) => {
                            let t = this.getStreamAnalyticsProperties();
                            S.default.track(w.rMx.STREAMER_FIRST_FRAME_ENCRYPTED, {
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
                                    void 0 !== e.updateMLSExternalSenderTimestamp &&
                                    void 0 !== e.localUserCreatedTimestamp
                                        ? Number(e.updateMLSExternalSenderTimestamp - e.localUserCreatedTimestamp)
                                        : null,
                                time_local_user_to_secure_frame_remote_key_ratchet_set:
                                    void 0 !== e.setRemoteSecureFrameKeyRatchetTimestamp &&
                                    void 0 !== e.localUserCreatedTimestamp
                                        ? Number(
                                              e.setRemoteSecureFrameKeyRatchetTimestamp - e.localUserCreatedTimestamp,
                                          )
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
                    null == (_ = this._connection) ||
                        _.on(a.Sh.Destroy, () => {
                            this.errorTimer.stop();
                        });
            }
        }),
            this.on(u.z.Video, (t, n, r, i, a) => {
                let o = (0, R.my)(this.streamKey);
                o.guildId === t &&
                    o.channelId === n &&
                    o.ownerId === r &&
                    (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), (e = !0)),
                    this.updateVideoStreamId(i, a));
            }),
            this.on(u.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
                var o;
                n === (null == (o = this._goLiveQualityManager) ? void 0 : o.getUserID()) &&
                    (this.goliveCurrentMaxResolution = r),
                    l.Z.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                        guildId: e,
                        channelId: t,
                        senderUserId: n,
                        maxResolution: r,
                        maxFrameRate: i,
                        context: a,
                    });
            }),
            this.on(u.z.SecureFramesUpdate, () => {
                l.Z.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            }),
            this.on(u.z.RosterMapUpdate, (e) => {
                l.Z.dispatch({
                    type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
                    userIds: e,
                });
            });
    }
    reportSoundshareFailure(e, t, n, r) {
        var i;
        let a = null != (i = null == e ? void 0 : e.soundshareSession) ? i : "";
        null == this.soundshareFailuresReported[a] && (this.soundshareFailuresReported[a] = new Set());
        let o = null != t && !this.soundshareFailuresReported[a].has(t);
        o && this.soundshareFailuresReported[a].add(t),
            (null == t || o) &&
                S.default.track(
                    w.rMx.SOUNDSHARE_FAILED,
                    M(
                        {
                            soundshare_failure_code: t,
                            soundshare_failure_reason: n,
                            soundshare_failure_will_retry: r,
                        },
                        (0, P.Z)(e),
                        this.getSoundshareAnalyticsProperties(),
                    ),
                );
    }
    getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: a } = this.streamContext,
            o = I.Z.getRegion(v.Z.getHostname()),
            { gameName: s, gameId: l, exe: c, distributor: u, sku: d, gameMetadata: f } = (0, p.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: x.Yn.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: o,
            participant_type: this.isOwner ? "streamer" : "receiver",
            share_application_name: s,
            share_application_id: l,
            share_application_executable: c,
            share_application_distributor: u,
            share_application_distributor_game_id: d,
            share_application_game_metadata: f,
            video_layout: this.videoStreamStats.getLayout(),
            client_event_source: r,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion,
        };
    }
    getSoundshareAnalyticsProperties() {
        return {
            rtc_connection_id: this.getRTCConnectionId(),
            soundshare_experimental: y.Z.getExperimentalSoundshare(),
        };
    }
    trackVideoStartStats() {
        let e = this.isOwner ? (0, D.Z)() : null;
        S.default.track(
            w.rMx.VIDEO_STREAM_STARTED,
            j(M({}, this.getStreamAnalyticsProperties(), e), {
                connection_type: O.Z.getType(),
                effective_connection_speed: O.Z.getEffectiveConnectionSpeed(),
                service_provider: O.Z.getServiceProvider(),
                duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs,
                source_location_stack: this.analyticsContext.analyticsLocations,
            }),
        );
    }
    trackVideoEndStats(e) {
        let t = E.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this.streamContext,
            i = null,
            a = null,
            o = this._videoQuality;
        if (null == o) return;
        (i = o.getNetworkStats()),
            (a = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", r));
        let s = null,
            l = d.Z.getSettings(),
            c = this.isOwner
                ? {
                      clips_enabled: (0, f.LI)(),
                      clips_buffer_length: l.clipsLength,
                  }
                : {},
            u = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        o.getOutboundStats().forEach((t) => {
            var r;
            (null != (r = t.num_frames) ? r : 0) > 0 &&
                S.default.track(
                    w.rMx.VIDEO_STREAM_ENDED,
                    j(
                        M(
                            {},
                            a,
                            i,
                            s,
                            this.videoStreamStats.getStats(),
                            t,
                            this._soundshareStats.getStats(),
                            this.getStreamAnalyticsProperties(),
                            c,
                            u,
                        ),
                        {
                            app_hardware_acceleration_enabled: A.Z.getAppHardwareAccelerationEnabled(),
                            channel_type: n,
                            reason: e,
                            max_viewers: this.analyticsContext.maxViewers,
                            hostname: this.hostname,
                            hardware_enabled: y.Z.getHardwareEncoding(),
                            device_performance_class: this.isOwner ? (0, _.Z)() : null,
                            soundshare_experimental: y.Z.getExperimentalSoundshare(),
                            quality_preset: m.Z.getState().preset,
                        },
                    ),
                );
        }),
            o.getInboundParticipants().forEach((t) => {
                var r;
                let l = o.getInboundStats(t);
                (null != (r = null == l ? void 0 : l.num_frames) ? r : 0) > 0 &&
                    S.default.track(
                        w.rMx.VIDEO_STREAM_ENDED,
                        j(
                            M(
                                {},
                                a,
                                i,
                                s,
                                this.videoStreamStats.getStats(),
                                l,
                                this._soundshareStats.getStats(),
                                this.getStreamAnalyticsProperties(),
                                c,
                                u,
                            ),
                            {
                                app_hardware_acceleration_enabled: A.Z.getAppHardwareAccelerationEnabled(),
                                channel_type: n,
                                reason: e,
                                max_viewers: this.analyticsContext.maxViewers,
                                hostname: this.hostname,
                                hardware_enabled: y.Z.getHardwareEncoding(),
                                device_performance_class: this.isOwner ? (0, _.Z)() : null,
                            },
                        ),
                    );
            });
    }
    getExtraConnectionOptions() {
        return { streamUserId: (0, R.my)(this.streamKey).ownerId };
    }
    constructor({
        sessionId: e,
        streamKey: t,
        serverId: n,
        initialLayout: r,
        analyticsContext: a,
        isStreamer: o,
        parentMediaSessionId: c,
        channelId: u,
    }) {
        let d = (0, R.my)(t),
            { guildId: f, channelId: _ } = d;
        super({
            userId: g.default.getId(),
            sessionId: e,
            guildId: f,
            channelId: _,
            context: x.Yn.STREAM,
            streamServerId: n,
            streamChannelId: u,
            parentMediaSessionId: c,
            joinVoiceId: null,
        }),
            L(this, "analyticsContext", void 0),
            L(this, "videoStreamStats", void 0),
            L(this, "streamContext", void 0),
            L(this, "streamKey", void 0),
            L(this, "isStreamer", void 0),
            L(this, "updateVideoStreamId", void 0),
            L(this, "bandwidthSamples", []),
            L(this, "goliveCurrentMaxResolution", void 0),
            L(this, "_firstFrameDelivered", !1),
            L(this, "soundshareFailuresReported", {}),
            L(this, "errorTimer", new s.V7()),
            (this.streamContext = d),
            (this.streamKey = t),
            (this.isStreamer = o),
            (this.videoStreamStats = new N.Z(r, this.isOwner)),
            (this.analyticsContext = a),
            (this.updateVideoStreamId = i().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, R.my)(this.streamKey);
                l.Z.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: n,
                    channelId: r,
                    userId: i,
                    streamId: e,
                    rtcServerId: t,
                    mediaEngineConnectionId: this.getMediaEngineConnectionId(),
                    context: x.Yn.STREAM,
                });
            }, 200)),
            this.videoStreamStats.start(),
            this.initializeEvents();
    }
}
