n.d(t, {
    A: () => L,
    Z: () => M
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
    p = n(594190),
    _ = n(314897),
    h = n(592125),
    m = n(131951),
    g = n(866960),
    E = n(19780),
    v = n(936349),
    b = n(704806),
    y = n(626135),
    O = n(756315),
    S = n(569545),
    I = n(297733),
    T = n(981631),
    N = n(65154);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 10,
    D = 1500000,
    x = 1500000;
class L {
    setActionContext(e) {
        this.actionContext = e;
    }
    trackViewerCount(e) {
        this.maxViewers = Math.max(e, this.maxViewers);
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
        return (null !== (e = this.endTime) && void 0 !== e ? e : t) - this.startTime;
    }
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r, numViewers: i, goLiveModalDurationMs: o }) {
        A(this, 'streamRegion', void 0), A(this, 'streamApplication', void 0), A(this, 'streamSourceType', void 0), A(this, 'actionContext', void 0), A(this, 'maxViewers', void 0), A(this, 'nativePickerStyleUsed', void 0), A(this, 'startTime', void 0), A(this, 'endTime', void 0), A(this, 'goLiveModalDurationMs', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = r), (this.maxViewers = i), (this.goLiveModalDurationMs = o);
    }
}
class M extends s.Z {
    get isOwner() {
        let { ownerId: e } = this._streamContext;
        return _.default.getId() === e;
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
            let { duration: i, avg_bitrate: o, avg_fps: a, avg_resolution: s, inbound_bitrate_estimate_percentile99: l } = this.isOwner ? (null !== (n = t.getOutboundStats()[0]) && void 0 !== n ? n : {}) : null !== (r = t.getInboundStats(e)) && void 0 !== r ? r : {};
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
        var t, n, r, o, a, s, l, c, u, d, f, p;
        let _;
        let h = !this.isOwner && (null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.getUserID()) != null,
            m = void 0 !== this._goliveCurrentMaxResolution && (this._goliveCurrentMaxResolution.height > 720 || 0 === this._goliveCurrentMaxResolution.height),
            g = 'unknown',
            E = null === (n = e.find((e) => e.connection === this._connection)) || void 0 === n ? void 0 : n.stats;
        if (null != E && h) {
            let e = E.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > w && this._bandwidthSamples.shift(), this._bandwidthSamples.length === w && ((_ = i().mean(this._bandwidthSamples)) > x ? (g = 'HQ') : _ < D && (g = 'LQ')));
        }
        let v = null !== (o = null === (r = this._goLiveQualityManager) || void 0 === r ? void 0 : r.isDowngraded()) && void 0 !== o && o;
        if (('HQ' === g && v ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(_)), null === (a = this._goLiveQualityManager) || void 0 === a || a.setGoLiveStreamDowngraded(!1)) : 'LQ' === g && !v && m && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(_)), null === (s = this._goLiveQualityManager) || void 0 === s || s.setGoLiveStreamDowngraded(!0)), h)) {
            let e = !(null === (l = this._goLiveQualityManager) || void 0 === l ? void 0 : l.senderSupportsSimulcast()) || (null === (c = this._goLiveQualityManager) || void 0 === c ? void 0 : c.isDowngraded()) === !1;
            null === (u = this._videoQuality) || void 0 === u || u.setViewedSimulcastQuality(e);
            let t = null !== (p = null === (d = this._goLiveQualityManager) || void 0 === d ? void 0 : d.isOneToOneCall()) && void 0 !== p && p,
                n = m && 'LQ' === g && !t;
            null === (f = this._videoQuality) || void 0 === f || f.setEligibleSimulcastQuality(!n);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(l.z.State, (e, t, n) => {
            if (
                (a.Z.wait(() =>
                    a.Z.dispatch(
                        P(
                            C(
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
                e === T.hes.RTC_CONNECTED)
            ) {
                var r;
                null === (r = this._connection) ||
                    void 0 === r ||
                    r.on(o.Sh.ScreenshareFinish, (e, t, n, r, i, o, a, s, l, c, u, d, _, h, m, g) => {
                        let E = this.getMediaSessionId(),
                            v = this.getRTCConnectionId(),
                            O = this.getGoLiveSource();
                        (0, b.q)().then((b) => {
                            var S, I, A;
                            let R = null;
                            if (null != b) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = b;
                                R = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i
                                };
                            }
                            let P = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != o ? o : 0) + (null != c ? c : 0) + (null != g ? g : 0) + (null != m ? m : 0),
                                w = (null == O ? void 0 : null === (S = O.desktopSource) || void 0 === S ? void 0 : S.sourcePid) != null ? p.ZP.getGameForPID(O.desktopSource.sourcePid) : null,
                                { gameName: D, gameId: x, exe: L, distributor: M } = (0, f.G8)(w);
                            y.default.track(
                                T.rMx.SCREENSHARE_FINISHED,
                                C(
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
                                        rtc_connection_id: v,
                                        context: N.Yn.STREAM,
                                        screens: d,
                                        windows: _,
                                        activity: h,
                                        soundshare_session: null !== (A = null == O ? void 0 : null === (I = O.desktopSource) || void 0 === I ? void 0 : I.soundshareSession) && void 0 !== A ? A : void 0,
                                        share_game_name: D,
                                        share_game_id: x,
                                        share_game_exe: L,
                                        share_game_distributor: M,
                                        picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? 'native' : 'internal',
                                        duration: this.analyticsContext.getDuration()
                                    },
                                    R
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
                n === (null === (s = this._goLiveQualityManager) || void 0 === s ? void 0 : s.getUserID()) && (this._goliveCurrentMaxResolution = r),
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
            a = v.Z.getRegion(E.Z.getHostname()),
            { gameName: s, gameId: l, exe: c, distributor: u } = (0, f.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: N.Yn.STREAM,
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
        let e = this.isOwner ? (0, I.Z)() : null;
        y.default.track(
            T.rMx.VIDEO_STREAM_STARTED,
            P(C({}, this._getStreamAnalyticsProperties(), e), {
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
            p = this.isOwner
                ? {
                      clips_enabled: f.clipsEnabled && l,
                      clips_buffer_length: f.clipsLength
                  }
                : {},
            _ = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        a.getOutboundStats().forEach((t) => {
            var r;
            (null !== (r = t.num_frames) && void 0 !== r ? r : 0) > 0 &&
                y.default.track(
                    T.rMx.VIDEO_STREAM_ENDED,
                    P(C({}, o, i, s, this._videoStreamStats.getStats(), t, this._soundshareStats.getStats(), this._getStreamAnalyticsProperties(), p, _), {
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
                (null !== (r = null == l ? void 0 : l.num_frames) && void 0 !== r ? r : 0) > 0 &&
                    y.default.track(
                        T.rMx.VIDEO_STREAM_ENDED,
                        P(C({}, o, i, s, this._videoStreamStats.getStats(), l, this._soundshareStats.getStats(), this._getStreamAnalyticsProperties(), p, _), {
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
            userId: _.default.getId(),
            sessionId: e,
            guildId: u,
            channelId: d,
            context: N.Yn.STREAM,
            rtcServerId: n,
            parentMediaSessionId: l
        }),
            A(this, 'analyticsContext', void 0),
            A(this, '_videoStreamStats', void 0),
            A(this, '_streamContext', void 0),
            A(this, '_streamKey', void 0),
            A(this, '_isStreamer', void 0),
            A(this, '_updateVideoStreamId', void 0),
            A(this, '_bandwidthSamples', []),
            A(this, '_goliveCurrentMaxResolution', void 0),
            (this._streamContext = c),
            (this._streamKey = t),
            (this._isStreamer = s),
            (this._videoStreamStats = new O.Z(r, this.isOwner)),
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
                        context: N.Yn.STREAM
                    })
                );
            }, 200)),
            this._videoStreamStats.start(),
            this._initializeEvents();
    }
}
