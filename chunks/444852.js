(n.d(t, {
    A: () => B,
    Z: () => V
}),
    n(539854),
    n(388685));
var r = n(392711),
    i = n.n(r),
    a = n(46973),
    o = n(846519),
    s = n(570140),
    l = n(861687),
    c = n(437263),
    u = n(924557),
    d = n(435064),
    _ = n(631053),
    f = n(581567),
    p = n(594190),
    h = n(314897),
    m = n(592125),
    g = n(858340),
    E = n(131951),
    b = n(866960),
    y = n(19780),
    O = n(936349),
    v = n(704806),
    I = n(626135),
    T = n(12647),
    S = n(70956),
    A = n(756315),
    N = n(569545),
    C = n(502286),
    R = n(297733),
    P = n(981631),
    w = n(65154);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            }));
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 10,
    j = 1500000,
    U = 1500000,
    G = 5 * S.Z.Millis.SECOND;
class B {
    setActionContext(e) {
        this.actionContext = e;
    }
    trackViewerCount(e) {
        ((this.maxViewers = Math.max(e, this.maxViewers)), (this.numViewers = e));
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
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r, numViewers: i, goLiveModalDurationMs: a }) {
        (D(this, 'streamRegion', void 0), D(this, 'streamApplication', void 0), D(this, 'streamSourceType', void 0), D(this, 'actionContext', void 0), D(this, 'maxViewers', void 0), D(this, 'nativePickerStyleUsed', void 0), D(this, 'startTime', void 0), D(this, 'endTime', void 0), D(this, 'goLiveModalDurationMs', void 0), D(this, 'numViewers', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = r), (this.maxViewers = i), (this.goLiveModalDurationMs = a), (this.numViewers = i));
    }
}
class V extends l.Z {
    get isOwner() {
        let { ownerId: e } = this.streamContext;
        return h.default.getId() === e;
    }
    destroy(e) {
        (this.videoStreamStats.stop(), this.trackVideoEndStats(e), this.updateVideoStreamId.cancel(), this.updateVideoStreamId(null, null), this.updateVideoStreamId.flush(), this.errorTimer.stop(), super.destroy());
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
            let { duration: i, avg_bitrate: a, avg_fps: o, avg_resolution: s, inbound_bitrate_estimate_percentile99: l } = this.isOwner ? (null != (n = t.getOutboundStats()[0]) ? n : {}) : null != (r = t.getInboundStats(e)) ? r : {};
            return {
                duration: i,
                avg_bitrate: a,
                avg_fps: o,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: l
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
        return this.isOwner ? 'streamer' : 'receiver';
    }
    updateStats(e) {
        var t, n, r, a, o, s, l, c, u, d, _, f;
        let p,
            h = !this.isOwner && (null == (t = this._goLiveQualityManager) ? void 0 : t.getUserID()) != null,
            m = void 0 !== this.goliveCurrentMaxResolution && (this.goliveCurrentMaxResolution.height > 720 || 0 === this.goliveCurrentMaxResolution.height),
            g = 'unknown',
            E =
                null ==
                (n = e.find((e) => {
                    var t;
                    return e.mediaEngineConnectionId === (null == (t = this._connection) ? void 0 : t.mediaEngineConnectionId);
                }))
                    ? void 0
                    : n.stats;
        if (null != E && h) {
            let e = E.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this.bandwidthSamples.push(e), this.bandwidthSamples.length > k && this.bandwidthSamples.shift(), this.bandwidthSamples.length === k && ((p = i().mean(this.bandwidthSamples)) > U ? (g = 'HQ') : p < j && (g = 'LQ')));
        }
        let b = null != (a = null == (r = this._goLiveQualityManager) ? void 0 : r.isDowngraded()) && a;
        if (('HQ' === g && b ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(p)), null == (o = this._goLiveQualityManager) || o.setGoLiveStreamDowngraded(!1)) : 'LQ' === g && !b && m && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(p)), null == (s = this._goLiveQualityManager) || s.setGoLiveStreamDowngraded(!0)), h)) {
            let e = !(null == (l = this._goLiveQualityManager) ? void 0 : l.senderSupportsSimulcast()) || (null == (c = this._goLiveQualityManager) ? void 0 : c.isDowngraded()) === !1;
            null == (u = this._videoQuality) || u.setViewedSimulcastQuality(e);
            let t = null != (f = null == (d = this._goLiveQualityManager) ? void 0 : d.isOneToOneCall()) && f,
                n = m && 'LQ' === g && !t;
            null == (_ = this._videoQuality) || _.setEligibleSimulcastQuality(!n);
        }
    }
    initializeEvents() {
        let e = !1;
        (this.on(c.z.State, (e, t, n) => {
            if (
                (s.Z.dispatch(
                    M(
                        L(
                            {
                                type: 'RTC_CONNECTION_STATE',
                                state: e
                            },
                            t,
                            n
                        ),
                        { streamKey: this.streamKey }
                    )
                ),
                e === P.hes.RTC_CONNECTED)
            ) {
                var r, i, o, l, c, u;
                (null == (r = this._connection) ||
                    r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, o, s, l, c, u, d, _, h, m, g) => {
                        let E = this.getMediaSessionId(),
                            b = this.getRTCConnectionId(),
                            y = this.getGoLiveSource();
                        (0, v.q)().then((O) => {
                            var v, T, S;
                            let A = null;
                            if (null != O) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = O;
                                A = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i
                                };
                            }
                            let N = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != c ? c : 0) + (null != g ? g : 0) + (null != m ? m : 0),
                                C = (null == y || null == (v = y.desktopSource) ? void 0 : v.sourcePid) != null ? p.ZP.getGameForPID(y.desktopSource.sourcePid) : null,
                                { gameName: R, gameId: D, exe: x, distributor: M } = (0, f.G8)(C);
                            I.default.track(
                                P.rMx.SCREENSHARE_FINISHED,
                                L(
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
                                        screencapturekit_frames: g,
                                        go_live_camera_frames: m,
                                        total_frames: N,
                                        desktop_capturer_type: u,
                                        media_session_id: E,
                                        rtc_connection_id: b,
                                        context: w.Yn.STREAM,
                                        screens: d,
                                        windows: _,
                                        activity: h,
                                        soundshare_session: null != (S = null == y || null == (T = y.desktopSource) ? void 0 : T.soundshareSession) ? S : void 0,
                                        share_game_name: R,
                                        share_game_id: D,
                                        share_game_exe: x,
                                        share_game_distributor: M,
                                        picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? 'native' : 'internal',
                                        duration: this.analyticsContext.getDuration()
                                    },
                                    A
                                )
                            );
                        });
                    }),
                    null == (i = this._connection) ||
                        i.on(a.Sh.SoundshareAttached, () => {
                            let e = this.getGoLiveSource();
                            (null == e ? void 0 : e.desktopSource) != null && I.default.track(P.rMx.SOUNDSHARE_ATTACHED, L({}, (0, C.Z)(null == e ? void 0 : e.desktopSource), this.getSoundshareAnalyticsProperties()));
                        }),
                    null == (o = this._connection) ||
                        o.on(a.Sh.SoundshareFailed, (e) => {
                            let { failureCode: t, failureReason: n, willRetry: r } = e,
                                i = this.getGoLiveSource();
                            this.reportSoundshareFailure(null == i ? void 0 : i.desktopSource, t, n, r);
                        }),
                    null == (l = this._connection) ||
                        l.on(a.Sh.SoundshareSpeaking, () => {
                            let e = this.getGoLiveSource();
                            (null == e ? void 0 : e.desktopSource) != null && (I.default.track(P.rMx.SOUNDSHARE_TRANSMITTING, L({}, (0, C.Z)(null == e ? void 0 : e.desktopSource), this.getSoundshareAnalyticsProperties())), null != g.Z.getHookError(P.K3D.SOUND) && s.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' }));
                        }),
                    null == (c = this._connection) ||
                        c.on(a.Sh.SoundshareTrace, (e) => {
                            let t = this.getGoLiveSource();
                            switch (e.type) {
                                case 'soundshare_attach_requested':
                                    this.errorTimer.start(G, () => {
                                        s.Z.dispatch({
                                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                            errorMessage: 'Sound Hook Failed'
                                        });
                                    });
                                    break;
                                case 'soundshare_recv_failed':
                                    let n = e.reason,
                                        r = e.code,
                                        i = e.retry;
                                    (null == t ? void 0 : t.desktopSource) != null &&
                                        (this.reportSoundshareFailure(null == t ? void 0 : t.desktopSource, r, n, i),
                                        i ||
                                            (this.errorTimer.stop(),
                                            s.Z.dispatch({
                                                type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                                errorMessage: n,
                                                errorCode: r
                                            })));
                                    break;
                                case 'soundshare_state_transition':
                                    4 === e.newState && (this.errorTimer.stop(), s.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' }));
                            }
                        }),
                    null == (u = this._connection) ||
                        u.on(a.Sh.Destroy, () => {
                            this.errorTimer.stop();
                        }));
            }
        }),
            this.on(c.z.Video, (t, n, r, i, a) => {
                let o = (0, N.my)(this.streamKey);
                o.guildId === t && o.channelId === n && o.ownerId === r && (null == this.getMediaSessionId() || e || (this.trackVideoStartStats(), (e = !0)), this.updateVideoStreamId(i, a));
            }),
            this.on(c.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
                var o;
                (n === (null == (o = this._goLiveQualityManager) ? void 0 : o.getUserID()) && (this.goliveCurrentMaxResolution = r),
                    s.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
                        guildId: e,
                        channelId: t,
                        senderUserId: n,
                        maxResolution: r,
                        maxFrameRate: i,
                        context: a
                    }));
            }),
            this.on(c.z.SecureFramesUpdate, () => {
                s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            }),
            this.on(c.z.RosterMapUpdate, (e) => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            }));
    }
    reportSoundshareFailure(e, t, n, r) {
        var i;
        let a = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
        null == this.soundshareFailuresReported[a] && (this.soundshareFailuresReported[a] = new Set());
        let o = null != t && !this.soundshareFailuresReported[a].has(t);
        (o && this.soundshareFailuresReported[a].add(t),
            (null == t || o) &&
                I.default.track(
                    P.rMx.SOUNDSHARE_FAILED,
                    L(
                        {
                            soundshare_failure_code: t,
                            soundshare_failure_reason: n,
                            soundshare_failure_will_retry: r
                        },
                        (0, C.Z)(e),
                        this.getSoundshareAnalyticsProperties()
                    )
                ));
    }
    getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: a } = this.streamContext,
            o = O.Z.getRegion(y.Z.getHostname()),
            { gameName: s, gameId: l, exe: c, distributor: u, sku: d, gameMetadata: _ } = (0, f.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: w.Yn.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: o,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: s,
            share_application_id: l,
            share_application_executable: c,
            share_application_distributor: u,
            share_application_distributor_game_id: d,
            share_application_game_metadata: _,
            video_layout: this.videoStreamStats.getLayout(),
            client_event_source: r,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    getSoundshareAnalyticsProperties() {
        return {
            rtc_connection_id: this.getRTCConnectionId(),
            soundshare_experimental: E.Z.getExperimentalSoundshare()
        };
    }
    trackVideoStartStats() {
        let e = this.isOwner ? (0, R.Z)() : null;
        I.default.track(
            P.rMx.VIDEO_STREAM_STARTED,
            M(L({}, this.getStreamAnalyticsProperties(), e), {
                connection_type: b.Z.getType(),
                effective_connection_speed: b.Z.getEffectiveConnectionSpeed(),
                service_provider: b.Z.getServiceProvider(),
                duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs
            })
        );
    }
    trackVideoEndStats(e) {
        let t = m.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this.streamContext,
            i = null,
            a = null,
            o = this._videoQuality;
        if (null == o) return;
        ((i = o.getNetworkStats()), (a = this.isOwner ? o.getCodecUsageStats('streamer', this.userId) : o.getCodecUsageStats('receiver', r)));
        let s = null,
            l = (0, u.ln)(),
            c = d.Z.getSettings(),
            f = this.isOwner
                ? {
                      clips_enabled: c.clipsEnabled && l,
                      clips_buffer_length: c.clipsLength
                  }
                : {},
            p = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        (o.getOutboundStats().forEach((t) => {
            var r;
            (null != (r = t.num_frames) ? r : 0) > 0 &&
                I.default.track(
                    P.rMx.VIDEO_STREAM_ENDED,
                    M(L({}, a, i, s, this.videoStreamStats.getStats(), t, this._soundshareStats.getStats(), this.getStreamAnalyticsProperties(), f, p), {
                        app_hardware_acceleration_enabled: T.Z.getAppHardwareAccelerationEnabled(),
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: E.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, _.Z)() : null,
                        soundshare_experimental: E.Z.getExperimentalSoundshare()
                    })
                );
        }),
            o.getInboundParticipants().forEach((t) => {
                var r;
                let l = o.getInboundStats(t);
                (null != (r = null == l ? void 0 : l.num_frames) ? r : 0) > 0 &&
                    I.default.track(
                        P.rMx.VIDEO_STREAM_ENDED,
                        M(L({}, a, i, s, this.videoStreamStats.getStats(), l, this._soundshareStats.getStats(), this.getStreamAnalyticsProperties(), f, p), {
                            app_hardware_acceleration_enabled: T.Z.getAppHardwareAccelerationEnabled(),
                            channel_type: n,
                            reason: e,
                            max_viewers: this.analyticsContext.maxViewers,
                            hostname: this.hostname,
                            hardware_enabled: E.Z.getHardwareEncoding(),
                            device_performance_class: this.isOwner ? (0, _.Z)() : null
                        })
                    );
            }));
    }
    getExtraConnectionOptions() {
        return { streamUserId: (0, N.my)(this.streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: t, serverId: n, initialLayout: r, analyticsContext: a, isStreamer: l, parentMediaSessionId: c, channelId: u }) {
        let d = (0, N.my)(t),
            { guildId: _, channelId: f } = d;
        (super({
            userId: h.default.getId(),
            sessionId: e,
            guildId: _,
            channelId: f,
            context: w.Yn.STREAM,
            streamServerId: n,
            streamChannelId: u,
            parentMediaSessionId: c
        }),
            D(this, 'analyticsContext', void 0),
            D(this, 'videoStreamStats', void 0),
            D(this, 'streamContext', void 0),
            D(this, 'streamKey', void 0),
            D(this, 'isStreamer', void 0),
            D(this, 'updateVideoStreamId', void 0),
            D(this, 'bandwidthSamples', []),
            D(this, 'goliveCurrentMaxResolution', void 0),
            D(this, 'soundshareFailuresReported', {}),
            D(this, 'errorTimer', new o.V7()),
            (this.streamContext = d),
            (this.streamKey = t),
            (this.isStreamer = l),
            (this.videoStreamStats = new A.Z(r, this.isOwner)),
            (this.analyticsContext = a),
            (this.updateVideoStreamId = i().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, N.my)(this.streamKey);
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: n,
                    channelId: r,
                    userId: i,
                    streamId: e,
                    rtcServerId: t,
                    mediaEngineConnectionId: this.getMediaEngineConnectionId(),
                    context: w.Yn.STREAM
                });
            }, 200)),
            this.videoStreamStats.start(),
            this.initializeEvents());
    }
}
