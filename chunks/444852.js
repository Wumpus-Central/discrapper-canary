n.d(t, {
    A: () => M,
    Z: () => k
}),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(46973),
    a = n(570140),
    s = n(861687),
    l = n(437263),
    c = n(924557),
    u = n(435064),
    d = n(631053),
    f = n(581567),
    _ = n(594190),
    p = n(314897),
    h = n(592125),
    m = n(131951),
    g = n(866960),
    E = n(19780),
    b = n(936349),
    y = n(704806),
    v = n(626135),
    O = n(12647),
    I = n(756315),
    S = n(569545),
    T = n(297733),
    N = n(981631),
    A = n(65154);
function C(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 10,
    L = 1500000,
    x = 1500000;
class M {
    setActionContext(e) {
        this.actionContext = e;
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
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r, numViewers: i, goLiveModalDurationMs: o }) {
        C(this, 'streamRegion', void 0), C(this, 'streamApplication', void 0), C(this, 'streamSourceType', void 0), C(this, 'actionContext', void 0), C(this, 'maxViewers', void 0), C(this, 'nativePickerStyleUsed', void 0), C(this, 'startTime', void 0), C(this, 'endTime', void 0), C(this, 'goLiveModalDurationMs', void 0), C(this, 'numViewers', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = r), (this.maxViewers = i), (this.goLiveModalDurationMs = o), (this.numViewers = i);
    }
}
class k extends s.Z {
    get isOwner() {
        let { ownerId: e } = this._streamContext;
        return p.default.getId() === e;
    }
    destroy(e) {
        this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy();
    }
    streamUpdate(e) {
        let t = this._videoQuality;
        null != t && (e ? t.pause() : t.resume());
    }
    layoutChange(e) {
        this._videoStreamStats.layoutChange(e);
    }
    getVideoStats() {
        let { ownerId: e } = this._streamContext,
            t = this._videoQuality;
        if (null != t) {
            var n, r;
            let { duration: i, avg_bitrate: o, avg_fps: a, avg_resolution: s, inbound_bitrate_estimate_percentile99: l } = this.isOwner ? (null != (n = t.getOutboundStats()[0]) ? n : {}) : null != (r = t.getInboundStats(e)) ? r : {};
            return {
                duration: i,
                avg_bitrate: o,
                avg_fps: a,
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
        var t, n, r, o, a, s, l, c, u, d, f, _;
        let p,
            h = !this.isOwner && (null == (t = this._goLiveQualityManager) ? void 0 : t.getUserID()) != null,
            m = void 0 !== this._goliveCurrentMaxResolution && (this._goliveCurrentMaxResolution.height > 720 || 0 === this._goliveCurrentMaxResolution.height),
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
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > D && this._bandwidthSamples.shift(), this._bandwidthSamples.length === D && ((p = i().mean(this._bandwidthSamples)) > x ? (g = 'HQ') : p < L && (g = 'LQ')));
        }
        let b = null != (o = null == (r = this._goLiveQualityManager) ? void 0 : r.isDowngraded()) && o;
        if (('HQ' === g && b ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(p)), null == (a = this._goLiveQualityManager) || a.setGoLiveStreamDowngraded(!1)) : 'LQ' === g && !b && m && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(p)), null == (s = this._goLiveQualityManager) || s.setGoLiveStreamDowngraded(!0)), h)) {
            let e = !(null == (l = this._goLiveQualityManager) ? void 0 : l.senderSupportsSimulcast()) || (null == (c = this._goLiveQualityManager) ? void 0 : c.isDowngraded()) === !1;
            null == (u = this._videoQuality) || u.setViewedSimulcastQuality(e);
            let t = null != (_ = null == (d = this._goLiveQualityManager) ? void 0 : d.isOneToOneCall()) && _,
                n = m && 'LQ' === g && !t;
            null == (f = this._videoQuality) || f.setEligibleSimulcastQuality(!n);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(l.z.State, (e, t, n) => {
            if (
                (a.Z.wait(() =>
                    a.Z.dispatch(
                        w(
                            R(
                                {
                                    type: 'RTC_CONNECTION_STATE',
                                    state: e
                                },
                                t,
                                n
                            ),
                            { streamKey: this._streamKey }
                        )
                    )
                ),
                e === N.hes.RTC_CONNECTED)
            ) {
                var r;
                null == (r = this._connection) ||
                    r.on(o.Sh.ScreenshareFinish, (e, t, n, r, i, o, a, s, l, c, u, d, p, h, m, g) => {
                        let E = this.getMediaSessionId(),
                            b = this.getRTCConnectionId(),
                            O = this.getGoLiveSource();
                        (0, y.q)().then((y) => {
                            var I, S, T;
                            let C = null;
                            if (null != y) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = y;
                                C = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i
                                };
                            }
                            let P = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != o ? o : 0) + (null != c ? c : 0) + (null != g ? g : 0) + (null != m ? m : 0),
                                w = (null == O || null == (I = O.desktopSource) ? void 0 : I.sourcePid) != null ? _.ZP.getGameForPID(O.desktopSource.sourcePid) : null,
                                { gameName: D, gameId: L, exe: x, distributor: M } = (0, f.G8)(w);
                            v.default.track(
                                N.rMx.SCREENSHARE_FINISHED,
                                R(
                                    {
                                        screenshare_frames: e,
                                        videohook_frames: t,
                                        hybrid_dxgi_frames: n,
                                        hybrid_gdi_frames: r,
                                        hybrid_videohook_frames: i,
                                        hybrid_graphics_capture_frames: o,
                                        hybrid_capture_method_switches: a,
                                        hybrid_gdi_bitblt_frames: s,
                                        hybrid_gdi_printwindow_frames: l,
                                        quartz_frames: c,
                                        screencapturekit_frames: g,
                                        go_live_camera_frames: m,
                                        total_frames: P,
                                        desktop_capturer_type: u,
                                        media_session_id: E,
                                        rtc_connection_id: b,
                                        context: A.Yn.STREAM,
                                        screens: d,
                                        windows: p,
                                        activity: h,
                                        soundshare_session: null != (T = null == O || null == (S = O.desktopSource) ? void 0 : S.soundshareSession) ? T : void 0,
                                        share_game_name: D,
                                        share_game_id: L,
                                        share_game_exe: x,
                                        share_game_distributor: M,
                                        picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? 'native' : 'internal',
                                        duration: this.analyticsContext.getDuration()
                                    },
                                    C
                                )
                            );
                        });
                    });
            }
        }),
            this.on(l.z.Video, (t, n, r, i, o) => {
                let a = (0, S.my)(this._streamKey);
                a.guildId === t && a.channelId === n && a.ownerId === r && (null == this.getMediaSessionId() || e || (this._trackVideoStartStats(), (e = !0)), this._updateVideoStreamId(i, o));
            }),
            this.on(l.z.VideoSourceQualityChanged, (e, t, n, r, i, o) => {
                var s;
                n === (null == (s = this._goLiveQualityManager) ? void 0 : s.getUserID()) && (this._goliveCurrentMaxResolution = r),
                    a.Z.wait(() =>
                        a.Z.dispatch({
                            type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
                            guildId: e,
                            channelId: t,
                            senderUserId: n,
                            maxResolution: r,
                            maxFrameRate: i,
                            context: o
                        })
                    );
            }),
            this.on(l.z.SecureFramesUpdate, () => {
                a.Z.wait(() => {
                    a.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
                });
            }),
            this.on(l.z.RosterMapUpdate, (e) => {
                a.Z.wait(() => {
                    a.Z.dispatch({
                        type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                        userIds: e
                    });
                });
            });
    }
    _getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: o } = this._streamContext,
            a = b.Z.getRegion(E.Z.getHostname()),
            { gameName: s, gameId: l, exe: c, distributor: u } = (0, f.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: A.Yn.STREAM,
            guild_id: o,
            stream_region: e,
            stream_source_type: n,
            guild_region: a,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: s,
            share_application_id: l,
            share_application_executable: c,
            share_application_distributor: u,
            video_layout: this._videoStreamStats.getLayout(),
            client_event_source: r,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _trackVideoStartStats() {
        let e = this.isOwner ? (0, T.Z)() : null;
        v.default.track(
            N.rMx.VIDEO_STREAM_STARTED,
            w(R({}, this._getStreamAnalyticsProperties(), e), {
                connection_type: g.Z.getType(),
                effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
                service_provider: g.Z.getServiceProvider(),
                duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs
            })
        );
    }
    _trackVideoEndStats(e) {
        let t = h.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this._streamContext,
            i = null,
            o = null,
            a = this._videoQuality;
        if (null == a) return;
        (i = a.getNetworkStats()), (o = this.isOwner ? a.getCodecUsageStats('streamer', this.userId) : a.getCodecUsageStats('receiver', r));
        let s = null,
            l = (0, c.ln)(),
            f = u.Z.getSettings(),
            _ = this.isOwner
                ? {
                      clips_enabled: f.clipsEnabled && l,
                      clips_buffer_length: f.clipsLength
                  }
                : {},
            p = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        a.getOutboundStats().forEach((t) => {
            var r;
            (null != (r = t.num_frames) ? r : 0) > 0 &&
                v.default.track(
                    N.rMx.VIDEO_STREAM_ENDED,
                    w(R({}, o, i, s, this._videoStreamStats.getStats(), t, this._soundshareStats.getStats(), this._getStreamAnalyticsProperties(), _, p), {
                        app_hardware_acceleration_enabled: O.Z.getAppHardwareAccelerationEnabled(),
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: m.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, d.Z)() : null
                    })
                );
        }),
            a.getInboundParticipants().forEach((t) => {
                var r;
                let l = a.getInboundStats(t);
                (null != (r = null == l ? void 0 : l.num_frames) ? r : 0) > 0 &&
                    v.default.track(
                        N.rMx.VIDEO_STREAM_ENDED,
                        w(R({}, o, i, s, this._videoStreamStats.getStats(), l, this._soundshareStats.getStats(), this._getStreamAnalyticsProperties(), _, p), {
                            app_hardware_acceleration_enabled: O.Z.getAppHardwareAccelerationEnabled(),
                            channel_type: n,
                            reason: e,
                            max_viewers: this.analyticsContext.maxViewers,
                            hostname: this.hostname,
                            hardware_enabled: m.Z.getHardwareEncoding(),
                            device_performance_class: this.isOwner ? (0, d.Z)() : null
                        })
                    );
            });
    }
    _getExtraConnectionOptions() {
        return { streamUserId: (0, S.my)(this._streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: t, serverId: n, initialLayout: r, analyticsContext: o, isStreamer: s, parentMediaSessionId: l }) {
        let c = (0, S.my)(t),
            { guildId: u, channelId: d } = c;
        super({
            userId: p.default.getId(),
            sessionId: e,
            guildId: u,
            channelId: d,
            context: A.Yn.STREAM,
            rtcServerId: n,
            parentMediaSessionId: l
        }),
            C(this, 'analyticsContext', void 0),
            C(this, '_videoStreamStats', void 0),
            C(this, '_streamContext', void 0),
            C(this, '_streamKey', void 0),
            C(this, '_isStreamer', void 0),
            C(this, '_updateVideoStreamId', void 0),
            C(this, '_bandwidthSamples', []),
            C(this, '_goliveCurrentMaxResolution', void 0),
            (this._streamContext = c),
            (this._streamKey = t),
            (this._isStreamer = s),
            (this._videoStreamStats = new I.Z(r, this.isOwner)),
            (this.analyticsContext = o),
            (this._updateVideoStreamId = i().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, S.my)(this._streamKey);
                a.Z.wait(() =>
                    a.Z.dispatch({
                        type: 'RTC_CONNECTION_VIDEO',
                        guildId: n,
                        channelId: r,
                        userId: i,
                        streamId: e,
                        rtcServerId: t,
                        context: A.Yn.STREAM
                    })
                );
            }, 200)),
            this._videoStreamStats.start(),
            this._initializeEvents();
    }
}
