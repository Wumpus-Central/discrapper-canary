n.d(t, {
    A: () => L,
    Z: () => x
}),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(46973),
    s = n(570140),
    o = n(861687),
    l = n(437263),
    u = n(924557),
    c = n(435064),
    d = n(631053),
    f = n(581567),
    _ = n(594190),
    p = n(314897),
    h = n(592125),
    m = n(131951),
    g = n(866960),
    E = n(19780),
    v = n(936349),
    y = n(704806),
    I = n(626135),
    T = n(756315),
    b = n(569545),
    S = n(297733),
    A = n(981631),
    N = n(65154);
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
let R = 10,
    O = 1500000,
    D = 1500000;
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
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: i, numViewers: r, goLiveModalDurationMs: a }) {
        C(this, 'streamRegion', void 0), C(this, 'streamApplication', void 0), C(this, 'streamSourceType', void 0), C(this, 'actionContext', void 0), C(this, 'maxViewers', void 0), C(this, 'nativePickerStyleUsed', void 0), C(this, 'startTime', void 0), C(this, 'endTime', void 0), C(this, 'goLiveModalDurationMs', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = i), (this.maxViewers = r), (this.goLiveModalDurationMs = a);
    }
}
class x extends o.Z {
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
            var n, i;
            let { duration: r, avg_bitrate: a, avg_fps: s, avg_resolution: o, inbound_bitrate_estimate_percentile99: l } = this.isOwner ? (null !== (n = t.getOutboundStats()[0]) && void 0 !== n ? n : {}) : null !== (i = t.getInboundStats(e)) && void 0 !== i ? i : {};
            return {
                duration: r,
                avg_bitrate: a,
                avg_fps: s,
                avg_resolution: o,
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
        var t, n, i, a, s, o, l, u, c, d, f, _;
        let p;
        let h = !this.isOwner && (null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.getUserID()) != null,
            m = void 0 !== this._goliveCurrentMaxResolution && (this._goliveCurrentMaxResolution.height > 720 || 0 === this._goliveCurrentMaxResolution.height),
            g = 'unknown',
            E = null === (n = e.find((e) => e.connection === this._connection)) || void 0 === n ? void 0 : n.stats;
        if (null != E && h) {
            let e = E.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > R && this._bandwidthSamples.shift(), this._bandwidthSamples.length === R && ((p = r().mean(this._bandwidthSamples)) > D ? (g = 'HQ') : p < O && (g = 'LQ')));
        }
        let v = null !== (a = null === (i = this._goLiveQualityManager) || void 0 === i ? void 0 : i.isDowngraded()) && void 0 !== a && a;
        if (('HQ' === g && v ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(p)), null === (s = this._goLiveQualityManager) || void 0 === s || s.setGoLiveStreamDowngraded(!1)) : 'LQ' === g && !v && m && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(p)), null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!0)), h)) {
            let e = !(null === (l = this._goLiveQualityManager) || void 0 === l ? void 0 : l.senderSupportsSimulcast()) || (null === (u = this._goLiveQualityManager) || void 0 === u ? void 0 : u.isDowngraded()) === !1;
            null === (c = this._videoQuality) || void 0 === c || c.setViewedSimulcastQuality(e);
            let t = null !== (_ = null === (d = this._goLiveQualityManager) || void 0 === d ? void 0 : d.isOneToOneCall()) && void 0 !== _ && _,
                n = m && 'LQ' === g && !t;
            null === (f = this._videoQuality) || void 0 === f || f.setEligibleSimulcastQuality(!n);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(l.z.State, (e, t, n) => {
            if (
                (s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_STATE',
                        state: e,
                        ...t,
                        ...n,
                        streamKey: this._streamKey
                    })
                ),
                e === A.hes.RTC_CONNECTED)
            ) {
                var i;
                null === (i = this._connection) ||
                    void 0 === i ||
                    i.on(a.Sh.ScreenshareFinish, (e, t, n, i, r, a, s, o, l, u, c, d, p, h, m, g) => {
                        let E = this.getMediaSessionId(),
                            v = this.getRTCConnectionId(),
                            T = this.getGoLiveSource();
                        (0, y.q)().then((y) => {
                            var b, S, C;
                            let R = null;
                            if (null != y) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: i, gpu_memory: r } = y;
                                R = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: i,
                                    gpu_memory: r
                                };
                            }
                            let O = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != r ? r : 0) + (null != a ? a : 0) + (null != u ? u : 0) + (null != g ? g : 0) + (null != m ? m : 0),
                                D = (null == T ? void 0 : null === (b = T.desktopSource) || void 0 === b ? void 0 : b.sourcePid) != null ? _.ZP.getGameForPID(T.desktopSource.sourcePid) : null,
                                { gameName: L, gameId: x, exe: P, distributor: w } = (0, f.G8)(D);
                            I.default.track(A.rMx.SCREENSHARE_FINISHED, {
                                screenshare_frames: e,
                                videohook_frames: t,
                                hybrid_dxgi_frames: n,
                                hybrid_gdi_frames: i,
                                hybrid_videohook_frames: r,
                                hybrid_graphics_capture_frames: a,
                                hybrid_capture_method_switches: s,
                                hybrid_gdi_bitblt_frames: o,
                                hybrid_gdi_printwindow_frames: l,
                                quartz_frames: u,
                                screencapturekit_frames: g,
                                go_live_camera_frames: m,
                                total_frames: O,
                                desktop_capturer_type: c,
                                media_session_id: E,
                                rtc_connection_id: v,
                                context: N.Yn.STREAM,
                                screens: d,
                                windows: p,
                                activity: h,
                                soundshare_session: null !== (C = null == T ? void 0 : null === (S = T.desktopSource) || void 0 === S ? void 0 : S.soundshareSession) && void 0 !== C ? C : void 0,
                                share_game_name: L,
                                share_game_id: x,
                                share_game_exe: P,
                                share_game_distributor: w,
                                picker_type_used: null != this.analyticsContext.nativePickerStyleUsed ? 'native' : 'internal',
                                duration: this.analyticsContext.getDuration(),
                                ...R
                            });
                        });
                    });
            }
        }),
            this.on(l.z.Video, (t, n, i, r, a) => {
                let s = (0, b.my)(this._streamKey);
                s.guildId === t && s.channelId === n && s.ownerId === i && (null == this.getMediaSessionId() || e || (this._trackVideoStartStats(), (e = !0)), this._updateVideoStreamId(r, a));
            }),
            this.on(l.z.VideoSourceQualityChanged, (e, t, n, i, r, a) => {
                var o;
                n === (null === (o = this._goLiveQualityManager) || void 0 === o ? void 0 : o.getUserID()) && (this._goliveCurrentMaxResolution = i),
                    s.Z.wait(() =>
                        s.Z.dispatch({
                            type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
                            guildId: e,
                            channelId: t,
                            senderUserId: n,
                            maxResolution: i,
                            maxFrameRate: r,
                            context: a
                        })
                    );
            }),
            this.on(l.z.SecureFramesUpdate, () => {
                s.Z.wait(() => {
                    s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
                });
            }),
            this.on(l.z.RosterMapUpdate, (e) => {
                s.Z.wait(() => {
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                        userIds: e
                    });
                });
            });
    }
    _getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: i } = this.analyticsContext,
            { ownerId: r, guildId: a } = this._streamContext,
            s = v.Z.getRegion(E.Z.getHostname()),
            { gameName: o, gameId: l, exe: u, distributor: c } = (0, f.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: r,
            context: N.Yn.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: s,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: o,
            share_application_id: l,
            share_application_executable: u,
            share_application_distributor: c,
            video_layout: this._videoStreamStats.getLayout(),
            client_event_source: i,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _trackVideoStartStats() {
        let e = this.isOwner ? (0, S.Z)() : null;
        I.default.track(A.rMx.VIDEO_STREAM_STARTED, {
            ...this._getStreamAnalyticsProperties(),
            ...e,
            connection_type: g.Z.getType(),
            effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
            service_provider: g.Z.getServiceProvider(),
            duration_go_live_modal: this.analyticsContext.goLiveModalDurationMs
        });
    }
    _trackVideoEndStats(e) {
        let t = h.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: i } = this._streamContext,
            r = null,
            a = null,
            s = this._videoQuality;
        if (null == s) return;
        (r = s.getNetworkStats()), (a = this.isOwner ? s.getCodecUsageStats('streamer', this.userId) : s.getCodecUsageStats('receiver', i));
        let o = null,
            l = (0, u.ln)(),
            f = c.Z.getSettings(),
            _ = this.isOwner
                ? {
                      clips_enabled: f.clipsEnabled && l,
                      clips_buffer_length: f.clipsLength
                  }
                : {},
            p = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        s.getOutboundStats().forEach((t) => {
            var i;
            (null !== (i = t.num_frames) && void 0 !== i ? i : 0) > 0 &&
                I.default.track(A.rMx.VIDEO_STREAM_ENDED, {
                    ...a,
                    ...r,
                    ...o,
                    ...this._videoStreamStats.getStats(),
                    ...t,
                    ...this._soundshareStats.getStats(),
                    ...this._getStreamAnalyticsProperties(),
                    ..._,
                    ...p,
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: m.Z.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, d.Z)() : null
                });
        }),
            s.getInboundParticipants().forEach((t) => {
                var i;
                let l = s.getInboundStats(t);
                (null !== (i = null == l ? void 0 : l.num_frames) && void 0 !== i ? i : 0) > 0 &&
                    I.default.track(A.rMx.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...r,
                        ...o,
                        ...this._videoStreamStats.getStats(),
                        ...l,
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ..._,
                        ...p,
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: m.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, d.Z)() : null
                    });
            });
    }
    _getExtraConnectionOptions() {
        return { streamUserId: (0, b.my)(this._streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: t, serverId: n, initialLayout: i, analyticsContext: a, isStreamer: o, parentMediaSessionId: l }) {
        let u = (0, b.my)(t),
            { guildId: c, channelId: d } = u;
        super({
            userId: p.default.getId(),
            sessionId: e,
            guildId: c,
            channelId: d,
            context: N.Yn.STREAM,
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
            (this._streamContext = u),
            (this._streamKey = t),
            (this._isStreamer = o),
            (this._videoStreamStats = new T.Z(i, this.isOwner)),
            (this.analyticsContext = a),
            (this._updateVideoStreamId = r().debounce((e, t) => {
                let { guildId: n, channelId: i, ownerId: r } = (0, b.my)(this._streamKey);
                s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_VIDEO',
                        guildId: n,
                        channelId: i,
                        userId: r,
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
