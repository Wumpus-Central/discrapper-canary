n.d(t, {
    A: () => eR,
}),
    n(747238),
    n(321073),
    n(896048),
    n(457529),
    n(65821),
    n(492834);
var r = n(824120),
    i = n.n(r),
    a = n(111956),
    s = n.n(a),
    o = n(181370),
    l = n.n(o),
    c = n(835245),
    u = n(158390),
    d = n(665260),
    f = n(972347),
    p = n(205693),
    _ = n(499979),
    h = n(73153),
    m = n(157559),
    g = n(827343),
    E = n(233545),
    y = n(894539),
    b = n(124838),
    O = n(626584),
    v = n(655087),
    A = n(680725),
    I = n(892038),
    S = n(461285),
    T = n(641967),
    C = n(747809),
    N = n(835498),
    w = n(525286),
    R = n(624694),
    P = n(204912),
    D = n(226210),
    x = n(276006),
    L = n(559633),
    j = n(714763),
    M = n(961350),
    k = n(734057),
    U = n(430452),
    G = n(383501),
    V = n(412780),
    F = n(873985),
    B = n(287809),
    H = n(954571),
    Y = n(353835),
    W = n(209489),
    K = n(723702),
    z = n(728458),
    q = n(998218),
    Z = n(77729),
    X = n(257506),
    Q = n(507821),
    J = n(531184),
    $ = n(351185),
    ee = n(710966),
    et = n(499954),
    en = n(591186),
    er = n(738586),
    ei = n(426978),
    ea = n(200458),
    es = n(128587),
    eo = n(808180),
    el = n(652215),
    ec = n(396574),
    eu = n(731854),
    ed = n(985018);

function ef(e, t, n) {
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

function ep(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}

function e_(e, t) {
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

function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e_(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let em = /^https/.test("https:") ? "wss:" : "ws:",
    eg = 200,
    eE = 20,
    ey = 500,
    eb = 250,
    eO = 10,
    ev = 5,
    eA = "1",
    eI = 0;

function eS(e) {
    return e;
}
let eT = 0,
    eC = [],
    eN = 50;

function ew() {
    let e = [],
        t = (0, _.tB)();
    for (let n of eC)
        e.push(
            eh(ep({}, n), {
                t: t - n.t,
            }),
        );
    return JSON.stringify(e);
}
class eR extends f.A {
    recordEvent(e) {
        for (
            eC.push(
                eh(ep({}, e), {
                    t: (0, _.tB)(),
                    n: this._connectionSerial,
                }),
            );
            eC.length > eN;
        )
            eC.shift();
    }
    get quality() {
        let e = this.getLastPing();
        return this.state !== el.S7L.RTC_CONNECTED || void 0 === e
            ? el.bFR.UNKNOWN
            : e > ey || (null != this._outboundLossRate && this._outboundLossRate > eO)
              ? el.bFR.BAD
              : e > eb || (null != this._outboundLossRate && this._outboundLossRate > ev)
                ? el.bFR.AVERAGE
                : el.bFR.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (
            (this.recordEvent({
                c: 6,
                e: null != e,
            }),
            null == e)
        )
            (this._endpoint = null), (this.hostname = null);
        else {
            var t;
            e = "".concat(em, "//").concat(e);
            let { hostname: n, port: r } = null != (t = q.A.toURLSafe(e)) ? t : {},
                i = null != r ? parseInt(r) : NaN;
            null != n && (80 === i || 443 === i) && (e = "".concat(em, "//").concat(n)),
                (this._endpoint = e + "/"),
                (this.hostname = n);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
        this.recordEvent({
            c: 2,
            e: null != e,
            h: null != t,
        }),
            this._backoff.cancel();
        let { endpoint: n, token: r } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || r !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, c.A)()),
                    h.h.dispatch({
                        type: "RTC_CONNECTION_UPDATE_ID",
                        connection: this,
                    }))),
            null == this.endpoint)
        )
            return void this.setState(el.S7L.AWAITING_ENDPOINT);
        let i = this._socket;
        null != i && this._cleanupSocket(),
            null != this._nextChannelId && ((this._channelId = this._nextChannelId), (this._nextChannelId = void 0)),
            (i = this._socket = new $.Ay(this.endpoint, this.context)).on(
                $.yg.Connecting,
                this._handleConnecting.bind(this, i),
            ),
            i.on($.yg.Connect, this._handleConnect.bind(this, i)),
            i.on($.yg.Disconnect, this._handleDisconnect.bind(this, i)),
            i.on($.yg.Resuming, this._handleResuming.bind(this, i)),
            i.on($.yg.Ready, this._handleReady.bind(this, i)),
            i.on($.yg.Speaking, this._handleSpeaking.bind(this, i)),
            i.on($.yg.Video, this._handleVideo.bind(this, i)),
            i.on($.yg.Ping, this._handleControlPing.bind(this)),
            i.on($.yg.ClientDisconnect, this._handleClientDisconnect.bind(this)),
            i.on($.yg.ClientConnect, this._handleClientConnect.bind(this)),
            i.on($.yg.Codecs, this._handleCodecs.bind(this)),
            i.on($.yg.MediaSessionId, this._handleMediaSessionId.bind(this)),
            i.on($.yg.MediaSinkWants, this._handleMediaSinkWants.bind(this)),
            i.on($.yg.VoiceBackendVersion, this._handleCodeVersion.bind(this)),
            i.on($.yg.KeyframeInterval, this._handleKeyframeInterval.bind(this)),
            i.on($.yg.Flags, this.handleFlags.bind(this)),
            i.on($.yg.Platform, this.handlePlatform.bind(this)),
            i.on($.yg.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)),
            i.on($.yg.SecureFramesInit, this._handleSecureFramesInit.bind(this)),
            i.on($.yg.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)),
            i.on($.yg.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)),
            i.on($.yg.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)),
            i.on($.yg.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)),
            i.on($.yg.MLSProposals, this._handleMLSProposals.bind(this, i)),
            i.on($.yg.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)),
            i.on($.yg.MLSWelcome, this._handleMLSWelcome.bind(this)),
            i.on($.yg.ReceiveMessage, this._recordMessageEvent.bind(this, 4)),
            i.on($.yg.SendMessage, this._recordMessageEvent.bind(this, 5)),
            (this._connectStartTime = (0, _.tB)()),
            this._connectCount++,
            (this._connecting = !0),
            null != i &&
                this._socket === i &&
                (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    _recordMessageEvent(e, t) {
        this.recordEvent({
            c: e,
            o: t,
        });
    }
    destroy() {
        var e, t, n, r, i, a, s, o;
        if (
            (this.logger.info("Destroy RTCConnection"),
            W.A.removeOnlineCallback(this._handleNetworkOnline),
            W.A.removeOfflineCallback(this._handleNetworkOffline),
            (0, K.isDesktop)() && (null == (s = (o = this).powerMonitorListener) || s.call(o)),
            this.recordEvent({
                c: 1,
            }),
            eo.X.off(eo.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eo.X.off(eo.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            this._backoff.cancel(),
            this._cleanupSocket(),
            null == (e = this._voiceQuality) || e.stop(),
            null == (t = this._voiceQuality) || t.removeAllListeners(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            null == (n = this._systemResponsiveness) || n.stop(),
            (this._systemResponsiveness = null),
            (this._noiseCancellationError = 0),
            null == (r = this._voiceDuration) || r.stop(),
            (this._voiceDuration = null),
            null == (i = this._videoQuality) || i.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._secureFramesState = null),
            null == (a = this._localMediaSinkWantsManager) || a.reset(),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, K.isWeb)()) return !0;
        let n = (0, d.Lt)(e, eu.ME.PRIORITY),
            r = (0, d.Lt)(this._lastSentSpeakingStatus, eu.ME.PRIORITY);
        return (
            (this._lastSentSSRC !== t || n !== r) &&
            (void 0 !== this._lastSentSSRC || e !== eu.ME.NONE) &&
            (this._lastSentSSRC === t || e !== eu.ME.NONE) &&
            ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0)
        );
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = U.A.getPacketDelay();
        n.speaking(e, r, t);
    }
    sendVideo(e, t, n, r) {
        let i = this._socket;
        null != i && (0 !== t && (this._sentVideo = !0), this._sentVideo && i.video(e, t, n, r));
    }
    getPings() {
        return this._pings;
    }
    getAveragePing() {
        let e = this._pings.slice(0, Math.min(this._pings.length, eE));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
    }
    getLastPing() {
        var e;
        return null == (e = this._pings[this._pings.length - 1]) ? void 0 : e.value;
    }
    getOutboundLossRate() {
        return this._outboundLossRate;
    }
    getMediaSessionId() {
        return this._mediaSessionId;
    }
    getVoiceParticipantType() {}
    getRTCConnectionId() {
        return this._rtcConnectionId;
    }
    getMediaEngineConnectionId() {
        return this._mediaEngineConnectionId;
    }
    getVoiceVersion() {
        return this.voiceVersion;
    }
    getRtcWorkerVersion() {
        return this.rtcWorkerVersion;
    }
    getDuration() {
        let e = this._connectCompletedTime > 0 ? (0, _.tB)() - this._connectCompletedTime : 0;
        return e > 0 ? e : 0;
    }
    getDurationSeconds() {
        return this.getDuration() / 1e3;
    }
    getVoiceFilterSpeakingDurationMs() {
        return null == this._voiceDuration ? null : this._voiceDuration.getVoiceFilterSpeakingDurationMs();
    }
    getPacketStats() {
        var e;
        return null == (e = this._voiceQuality) ? void 0 : e.getPacketStats();
    }
    getCreatedTime() {
        return this._createdTime;
    }
    getSecureFramesState() {
        return this._secureFramesState;
    }
    getSecureFramesRosterMap() {
        return this._secureFramesRosterMap;
    }
    getUserIds() {
        return this._userIds;
    }
    getIsUserConnected(e) {
        return this._userIds.has(e);
    }
    getVideoHealthManager() {
        return this._videoHealthManager;
    }
    getBandwidthEstimationExperiment() {
        return this._bandwidthEstimationExperiment;
    }
    hasActiveRemoteWants() {
        return Object.entries(this._remoteVideoSinkWants).some((e) => {
            let [t, n] = e;
            return Number.isInteger(t)
                ? 0 !== n
                : "any" !== t && ("pixelCounts" === t ? Object.values(n).some((e) => 0 !== e) : void 0);
        });
    }
    pauseStatsCollectionForUser(e, t) {
        let n = this.getOrCreateVideoQuality();
        null == n
            ? this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.")
            : t
              ? n.addUserToStatsCollectionPausedSet(e)
              : n.removeUserFromStatsCollectionPausedSet(e);
    }
    getOutboundStats() {
        let e = this.getOrCreateVideoQuality();
        return null != e ? e.getOutboundStats() : null;
    }
    getInboundStats(e) {
        let t = this.getOrCreateVideoQuality();
        return null != t ? t.getInboundStats(e) : null;
    }
    setState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.recordEvent({
            c: 8,
            s: e,
        }),
            this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                Q.q.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context,
                },
                t,
            );
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._socket;
        null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel();
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = this._socket;
        null != t && t.resetBackoff(e) && this._backoff.cancel();
    }
    setSelectedParticipant(e) {
        var t;
        null == (t = this._localMediaSinkWantsManager) || t.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        var t;
        null == (t = this._localMediaSinkWantsManager) || t.setPipOpen(e);
    }
    setClipRecordUser(e, t, n) {
        var r, i;
        null == (i = this._connection) || null == (r = i.setClipRecordUser) || r.call(i, e, t, n);
    }
    setNoiseCancellationEnabled(e) {
        var t;
        this._numNoiseCancellationChanges++, null == (t = this._voiceDuration) || t.setNoiseCancellationEnabled(e);
    }
    setSimulcastDebugOverride(e, t, n) {
        var r, i;
        t === this.context &&
            (t === eu.x.DEFAULT
                ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n)
                : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        var r, i;
        null == t ||
            (0, K.isAndroid)() ||
            (0, K.isIOS)() ||
            null == (i = this._localMediaSinkWantsManager) ||
            i.setVideoSize(e, t.width * t.height),
            null == (r = this._goLiveQualityManager) || r.setVideoSize(e, t, n);
    }
    clearJoinVoiceId() {
        this.joinVoiceId = null;
    }
    setNextChannelId(e) {
        this.recordEvent({
            c: 9,
        });
        let t = k.A.getChannel(this.channelId),
            n = null == t ? void 0 : t.type;
        this.logger.info("Updating channel: ".concat(e, "(").concat(n, ")")),
            (this._nextChannelId = e),
            this.channelIds.add(e);
    }
    getNextChannelId() {
        var e;
        return null != (e = this._nextChannelId) ? e : this._channelId;
    }
    get channelId() {
        return this._channelId;
    }
    get trueServerId() {
        var e, t;
        return null != (e = null != (t = this.streamServerId) ? t : this.guildId) ? e : this.channelId;
    }
    get trueChannelId() {
        return null == this.streamServerId
            ? this.channelId
            : null != this.streamChannelId
              ? this.streamChannelId
              : i()(this.streamServerId).prev().toString();
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        if (
            (this._recordingEnabled && t.push("connection_log"),
            U.A.supports(eu.O5.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"),
            0 !== this._supportedBandwidthEstimationExperiments.length)
        ) {
            let e = w.A.workerExperimentString();
            null != e && t.push(e);
        }
        this.context === eu.x.DEFAULT && (0, S.I)("RtcConnection").enabled && t.push("audio_transport_cc");
        let { enabled: n } = (0, b.r)({
            location: "_chooseExperiments",
        });
        n && t.push("should_analyze_user_voice_volume"),
            t.push("keyframe_on_join"),
            P.A.getCurrentConfig(
                {
                    location: "_chooseExperiments",
                },
                {
                    autoTrackExposure: !0,
                },
            ).enabled && t.push("network_aware_socket");
        let r = C.A.getCurrentConfig(
            {
                location: "_chooseExperiments",
            },
            {
                disable: !(0, K.isWindows)(),
                autoTrackExposure: !0,
            },
        );
        r.prewarm && t.push("prewarm_cuda_cache"),
            r.clear && t.push("clear_cuda_cache"),
            (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = k.A.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info(
                "Connecting to RTC server "
                    .concat(this.endpoint, ", rtc-connection-id: ")
                    .concat(this.getRTCConnectionId(), ", channel: ")
                    .concat(this.channelId, "(")
                    .concat(t, ")"),
            );
        }
        this.setState(el.S7L.CONNECTING);
    }
    _handleConnect(e) {
        let t = this.token;
        if (((this.reconnecting = !1), null == t)) throw Error("RTCConnection._handleConnect(...): Token is missing.");
        this.logger.info("Connected to RTC server."),
            this._fetchAsyncResourcesPromise.finally(() => {
                e.identify({
                    serverId: this.trueServerId,
                    channelId: this.trueChannelId,
                    userId: this.userId,
                    sessionId: this.sessionId,
                    token: t,
                    maxDaveProtocolVersion: U.A.getSupportedSecureFramesProtocolVersion(),
                    video: U.A.supports(eu.O5.VIDEO),
                    streamParameters: U.A.getVideoStreamParameters(this.context),
                }),
                    this.setState(el.S7L.AUTHENTICATING);
            });
    }
    _handleDisconnect(e, t, n, r) {
        var i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, y, b, O, v, I, S, T;
        this.logger.info(
            "Disconnected from RTC server, clean: "
                .concat(t, ", code: ")
                .concat(n, ", reason: ")
                .concat(r, ", state: ")
                .concat(this.state),
        ),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (H.default.track(
                    el.HAw.VOICE_CONNECTION_SOCKET_FAILURE,
                    eh(ep({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r,
                    }),
                ),
                (this._encountered_socket_failure = !0)),
            G.A.getRemoteDisconnectVoiceChannelId() === this.channelId &&
                (null == (l = this._connection) || l.wasRemoteDisconnected());
        let C = "Force Close" !== r;
        if (C) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn(
                "Disconnect was not clean! reason="
                    .concat(r, ". Reconnecting in ")
                    .concat((e / 1e3).toFixed(2), " seconds."),
            );
        }
        if (this.state !== el.S7L.DISCONNECTED) {
            let e = this._videoQuality;
            if (null != e && this.context === eu.x.DEFAULT) {
                if ((e.stop(), this._sentVideo)) {
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null != (n = t.num_frames) ? n : 0) > 0 &&
                            H.default.track(
                                el.HAw.VIDEO_STREAM_ENDED,
                                eh(
                                    ep(
                                        eh(ep({}, this._getAnalyticsProperties()), {
                                            app_hardware_acceleration_enabled: Y.A.getAppHardwareAccelerationEnabled(),
                                            media_session_id: this.getMediaSessionId(),
                                            sender_user_id: this.userId,
                                            reason: r,
                                            participant_type: "sender",
                                            guild_region: F.A.getRegion(this.hostname),
                                            hostname: this.hostname,
                                            hardware_enabled: U.A.getHardwareEncoding(),
                                        }),
                                        t,
                                        e.getNetworkStats(),
                                        e.getCodecUsageStats("sender", this.userId),
                                    ),
                                    {
                                        device_performance_class: (0, A.A)(),
                                    },
                                ),
                            );
                    });
                    let t = e.getCameraDurationStats();
                    null != t &&
                        t.camera_enabled_duration > 0 &&
                        H.default.track(
                            el.HAw.VIDEO_CALL_ENDED,
                            eh(ep({}, t), {
                                media_session_id: this.getMediaSessionId(),
                            }),
                        );
                }
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null != (n = null == i ? void 0 : i.num_frames) ? n : 0) > 0 &&
                        H.default.track(
                            el.HAw.VIDEO_STREAM_ENDED,
                            ep(
                                eh(ep({}, this._getAnalyticsProperties()), {
                                    app_hardware_acceleration_enabled: Y.A.getAppHardwareAccelerationEnabled(),
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t,
                                    reason: r,
                                    participant_type: "receiver",
                                    guild_region: F.A.getRegion(this.hostname),
                                    hostname: this.hostname,
                                    hardware_enabled: U.A.getHardwareEncoding(),
                                }),
                                i,
                                e.getNetworkStats(),
                                e.getCodecUsageStats("receiver", t),
                            ),
                        );
                });
            }
            let t = this.getMediaSessionId();
            U.A.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders)
                        throw Error("codec survey is not available");
                    H.default.track(
                        el.HAw.VOICE_CODEC_DETECTED,
                        eh(ep({}, n), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: t,
                        }),
                    );
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures({
                    recovered: !1,
                    downgraded: !1,
                });
            let n = F.A.shouldIncludePreferredRegion() ? F.A.getPreferredRegion() : null,
                i = U.A.getSettings(),
                a = k.A.getChannel(this.channelId),
                s =
                    null == (u = R.A.getConnectionStats(this.getMediaEngineConnectionId())) ||
                    null == (c = u.stats.rtp.outbound.find((e) => "audio" === e.type))
                        ? void 0
                        : c.sampleRateMismatchPercent,
                o = eh(
                    ep(
                        eh(ep({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: C,
                            reason: r,
                            duration: this.getDuration(),
                        }),
                        G.A.getUserVoiceSettingsStats(this.context),
                        null == (d = this._voiceQuality) ? void 0 : d.getMosStats(),
                        null == (f = this._voiceQuality) ? void 0 : f.getPacketStats(),
                        null == (p = this._voiceQuality) ? void 0 : p.getBytesStats(),
                        null == (_ = this._voiceQuality) ? void 0 : _.getBufferStats(),
                        null == (h = this._voiceQuality) ? void 0 : h.getNetworkStats(),
                        null == (m = this._voiceQuality) ? void 0 : m.getSystemResourceStats(),
                        null == (g = this._voiceQuality) ? void 0 : g.getFrameOpStats(),
                        null == (E = this._voiceQuality) ? void 0 : E.getDurationStats(),
                        null == (y = this._voiceQuality) ? void 0 : y.getTransportStats(),
                        null == (b = this._voiceQuality) ? void 0 : b.getE2EEStats(),
                        null == (O = this._voiceQuality) ? void 0 : O.getAudioDeviceStats(),
                        null == (v = this._voiceQuality) ? void 0 : v.getAudioLevelStats(),
                        null == (I = this._voiceDuration) ? void 0 : I.getDurationStats(),
                        N.A.getUsageStats(),
                        this.getAudioDeviceStates(),
                        null == (S = this._systemResponsiveness) ? void 0 : S.getPttQueueLatencyStats(),
                    ),
                    {
                        num_noise_cancellation_changes: this._numNoiseCancellationChanges,
                        media_session_id: this.getMediaSessionId(),
                        channel_bitrate: null != a ? a.bitrate : null,
                        cloudflare_best_region: n,
                        connect_count: this._connectCount,
                        ping_average: Math.round(this.getAveragePing()),
                        ping_bad_count: this._pingBadCount,
                        ping_timeout: this._pingTimeouts.length,
                        input_detected: this._inputDetected,
                        no_input_detected_notice: U.A.getNoInputDetectedNotice(),
                        audio_input_mode: i.mode,
                        automatic_audio_input_sensitivity_enabled: i.modeOptions.autoThreshold,
                        audio_input_sensitivity: i.modeOptions.threshold,
                        echo_cancellation_enabled: i.echoCancellation,
                        sidechain_compression_enabled: i.sidechainCompression,
                        noise_suppression_enabled: i.noiseSuppression,
                        noise_cancellation_enabled: i.noiseCancellation,
                        noise_canceller_error: this._noiseCancellationError,
                        automatic_gain_control_enabled: i.automaticGainControl,
                        voice_output_volume: i.outputVolume,
                        voice_input_volume: i.inputVolume,
                        encryption_mode: this._encryptionMode,
                        channel_count: this.channelIds.size,
                        device_performance_class: (0, A.A)(),
                        num_fast_udp_reconnects:
                            null != this._connection
                                ? null == (T = this._connection)
                                    ? void 0
                                    : T.getNumFastUdpReconnects()
                                : null,
                        parent_media_session_id: this.parentMediaSessionId,
                        audio_subsystem: U.A.getMediaEngine().getAudioSubsystem(),
                        audio_layer: U.A.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: i.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType(),
                        audio_capture_sample_rate_mismatch_percent: s,
                        krisp_sdk_version: U.A.getState().krispVersion,
                        secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                        secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                        secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                        vad_use_advanced_voice_activity: i.modeOptions.vadUseKrisp,
                        soundshare_experimental: U.A.getExperimentalSoundshare(),
                        join_voice_id: this.joinVoiceId,
                        bypass_system_input_processing: i.bypassSystemInputProcessing,
                        system_microphone_mode: U.A.getSystemMicrophoneMode(),
                    },
                );
            Promise.all([
                (async () => {
                    var e, t;
                    return null != (e = await (null == (t = this._systemResources) ? void 0 : t.getBatteryLevelStats()))
                        ? e
                        : {
                              batteryUsageRounded: null,
                          };
                })(),
                L.A.getKrispModel(),
                U.A.getKrispEnableStats() ? U.A.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null),
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n, r] = e;
                H.default.track(
                    el.HAw.VOICE_DISCONNECT,
                    eh(ep({}, o), {
                        battery_usage: t,
                        krisp_nc_model: n,
                        duration_low_noise_detected_ms: null == r ? void 0 : r.lowNoiseMs,
                        duration_medium_noise_detected_ms: null == r ? void 0 : r.mediumNoiseMs,
                        duration_high_noise_detected_ms: null == r ? void 0 : r.highNoiseMs,
                        duration_noise_cancellation_voice_detected_ms: null == r ? void 0 : r.talkTimeMs,
                    }),
                );
            }),
                this._trackRemainingSecureFrameTransitions();
        }
        if (
            ((this._pingTimeouts = []),
            (this._pings = []),
            (this._connectCompletedTime = 0),
            (this._pingBadCount = 0),
            (this._inputDetected = !1),
            (this._mediaSessionId = null),
            null == (i = this._voiceQuality) || i.stop(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._numNoiseCancellationChanges = 0),
            null == (a = this._voiceDuration) || a.stop(),
            (this._voiceDuration = null),
            null == (s = this._videoQuality) || s.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            null == (o = this._localMediaSinkWantsManager) || o.reset(),
            (this._secureFramesState = null),
            (this._userIds = new Set([this.userId])),
            this._secureFramesRosterMap.clear(),
            this._secureFramesTransitionStates.clear(),
            (this._secureFramesNextTransitionState = void 0),
            (this._secureFramesMaxConcurrentTransitions = 0),
            (this._secureFramesTransitionPrepareCount = 0),
            (this._secureFramesTransitionExecuteCount = 0),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), e.destroy(this.reconnecting);
        }
        this.setState(el.S7L.DISCONNECTED, {
            willReconnect: C,
        });
    }
    _handleResuming(e) {
        var t, n;
        null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, a, s) {
        var o;
        this.setState(el.S7L.RTC_CONNECTING),
            (this.port = n),
            this._chooseExperiments(null != s ? s : []),
            0 === a.length &&
                a.push({
                    type: eu.mI.VIDEO,
                    rid: "100",
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1,
                });
        let l = U.A.getMediaEngine(),
            c = j.A.getPersistentCodesEnabled(),
            u = null != (o = M.default.getStaticAuthSessionId()) ? o : void 0,
            d = (0, _.tB)(),
            f = l.connect(
                this.context,
                this.userId,
                ep(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: a,
                        qosEnabled: U.A.getQoS(),
                        signingKeyId: c ? u : void 0,
                    },
                    this.getExtraConnectionOptions(),
                ),
            ),
            m = (0, _.tB)() - d;
        (0, K.isWeb)() && !ec.PF && z.A.captureMessage("Browser does not support Unified Plan"),
            f.setUseElectronVideo(l.supports(eu.O5.ELECTRON_VIDEO)),
            U.A.supports(eu.O5.IMAGE_QUALITY_MEASUREMENT) &&
                f.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
        let E = ["unk"];
        if (this.context === eu.x.STREAM) E.push("nvRelaxRc=250"), E.push("nvNewPresets");
        else {
            let { vbvBufferSize: e } = (0, D.N)("handleReady");
            e > 0 && (E.push("nvRelaxRc=".concat(e)), E.push("nvNewPresets"));
        }
        U.A.getUseVaapiEncoder() && E.push("vaapi"),
            this.context === eu.x.STREAM &&
                "streamer" === this.getVoiceParticipantType() &&
                (0, x.b)("handleReady").enabled &&
                E.push("useCaptureDeviceForEncode"),
            f.setVideoEncoderExperiments(E.join(",")),
            f.on(p.yq.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(Q.q.Speaking, eS(e), t);
            }),
            f.on(p.yq.ToggleMuteFromNative, () => {
                this.context === eu.x.DEFAULT &&
                    g.A.toggleSelfMute({
                        playSoundEffect: !1,
                    });
            }),
            f.on(p.yq.NativeMuteChanged, (e) => {
                this.context === eu.x.DEFAULT && y.A.nativeMuteChanged(e);
            }),
            f.on(p.yq.Video, (e, t, n, r, i, a) => {
                this._handleVideoStreamId({
                    userId: eS(e),
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != r ? r : 0,
                    rtxSsrc: i,
                    videoStreamParameters: a,
                }),
                    this.userId === e &&
                        (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a),
                        null == a ||
                            a.forEach((t) => {
                                100 === t.quality &&
                                    this.emit(
                                        Q.q.VideoSourceQualityChanged,
                                        this.guildId,
                                        this.channelId,
                                        eS(e),
                                        t.maxResolution,
                                        t.maxFrameRate,
                                        this.context,
                                    );
                            }));
            }),
            f.on(p.yq.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager &&
                    (this._localMediaSinkWantsManager.setFirstFrameReceived(t),
                    this.emit(Q.q.Video, this.guildId, this.channelId, eS(e), n, this.streamServerId)),
                    null != this._goLiveQualityManager &&
                        (this._goLiveQualityManager.setFirstFrameReceived(t),
                        this.emit(Q.q.Video, this.guildId, this.channelId, eS(e), n, this.streamServerId));
            }),
            f.on(p.yq.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            f.on(p.yq.Connected, (r, i) => {
                if ((this.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== this._socket))
                    return void this.logger.warn("Socket mismatch, disconnecting");
                switch (
                    ((this._voiceQuality = new es.A(f)),
                    this._voiceQuality.start(),
                    this._voiceQuality.on(es.w.InputDeviceSampleRateChanged, (e) => {
                        h.h.dispatch({
                            type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED",
                            sampleRate: e,
                        });
                    }),
                    (this._voiceQualityPeriodicStatsSequenceId = 0),
                    (this._voiceQualityPeriodicStatsInterval = setInterval(
                        this._handleVoiceQualityPeriodicsStats,
                        3e5,
                    )),
                    (this._systemResponsiveness = new en.A(f)),
                    this._systemResponsiveness.start(),
                    (this._systemResources = new et.A()),
                    this._systemResources.setLastBattery(),
                    (this._noiseCancellationError = 0),
                    (this._voiceDuration = new ea.A(this.userId, f)),
                    this._voiceDuration.start(f.getSelfMute(), f.getSelfDeaf(), f.getVoiceFilterId()),
                    (this.protocol = r),
                    r)
                ) {
                    case "udp":
                        this.logger.info("Sending UDP info to RTC server.", i, this._selectedExperiments),
                            e.once($.yg.Encryption, (e, t) => {
                                f === this._connection && (f.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case "webrtc":
                        this.logger.info("Sending local SDP to RTC server."),
                            e.once($.yg.SDP, this._handleSDP.bind(this)),
                            e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error("Unable to determine protocol.");
                        return;
                }
                this._backoff.succeed();
            }),
            f.on(p.yq.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    "The originally selected video encoder is not working, fallback to the other available encoders: ".concat(
                        n,
                    ),
                ),
                    e.updateSession({
                        codecs: t,
                    });
            }),
            f.on(p.yq.VideoDecoderFallback, (t) => {
                let n = k.A.getChannel(this.channelId),
                    r = (null == n ? void 0 : n.type) === el.rbe.GUILD_STAGE_VOICE;
                if (!U.A.isVideoDecoderFallbackEnabled() || r) {
                    if (!this._videoDecoderFallbackSuppressed) {
                        let e = U.A.isVideoDecoderFallbackEnabled() ? "stage channel" : "not in fallback treatment";
                        this.logger.info("Suppressing video decoder fallback: ".concat(e)),
                            (this._videoDecoderFallbackSuppressed = !0);
                    }
                    return;
                }
                let i = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    "The originally selected video decoder is not working, fallback to the other available decoders: ".concat(
                        i,
                    ),
                ),
                    e.updateSession({
                        codecs: t,
                    });
            }),
            f.on(p.yq.Error, (t) => {
                if (e !== this._socket) return;
                let n = F.A.shouldIncludePreferredRegion() ? F.A.getPreferredRegion() : null;
                this.logger.error("Error occurred while connecting to RTC server: ".concat(t)),
                    H.default.track(
                        el.HAw.VOICE_CONNECTION_FAILURE,
                        eh(ep({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: this._connectCount,
                            join_voice_id: this.joinVoiceId,
                        }),
                    );
            }),
            f.on(p.yq.ConnectionStateChange, (t) => {
                if (
                    (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)),
                    e !== this._socket)
                )
                    return;
                let n = this.state;
                switch (t) {
                    case eu.$I.DISCONNECTED:
                        this.setState(el.S7L.RTC_DISCONNECTED);
                        break;
                    case eu.$I.CONNECTING:
                        this.setState(el.S7L.RTC_CONNECTING);
                        break;
                    case eu.$I.CONNECTED:
                        this.setState(el.S7L.RTC_CONNECTED);
                        break;
                    case eu.$I.NO_ROUTE:
                        this.setState(el.S7L.NO_ROUTE);
                        break;
                    case eu.$I.ICE_CHECKING:
                        this.setState(el.S7L.ICE_CHECKING);
                        break;
                    case eu.$I.DTLS_CONNECTING:
                        this.setState(el.S7L.DTLS_CONNECTING);
                }
                if (
                    (n === el.S7L.RTC_CONNECTING && this.state === el.S7L.RTC_DISCONNECTED
                        ? this.reconnect()
                        : this.state === el.S7L.NO_ROUTE &&
                          (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)),
                    this.state === el.S7L.RTC_CONNECTED)
                ) {
                    var r, i, a, s, o, l, c, u, d, p, h, g, E, y;
                    let e = F.A.shouldIncludePreferredRegion() ? F.A.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = U.A.getSettings(),
                            n = this._getAnalyticsProperties();
                        H.default.track(
                            el.HAw.VOICE_CONNECTION_SUCCESS,
                            ep(
                                eh(ep({}, n), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time:
                                        (0, _.tB)() - (this._connected ? this._connectStartTime : this._createdTime),
                                    connect_count: this._connectCount,
                                    audio_subsystem: U.A.getMediaEngine().getAudioSubsystem(),
                                    audio_layer: U.A.getMediaEngine().getAudioLayer(),
                                    automatic_audio_subsystem: t.automaticAudioSubsystem,
                                    media_session_id: this.getMediaSessionId(),
                                    participant_type: this.getVoiceParticipantType(),
                                    join_voice_id: this.joinVoiceId,
                                    is_camera_enabled:
                                        U.A.getMediaEngine().getVideoInputDeviceId() !== eu.qe &&
                                        f.context === eu.x.DEFAULT,
                                }),
                                this.stateHistory.getVoiceConnectionSuccessStats(),
                            ),
                        );
                        let r = performance.now(),
                            i = (e, t) => (null == e || null == t ? null : e - t);
                        H.default.track(el.HAw.VOICE_CONNECTION_TTC_COLLECTED, {
                            rtc_connection_id: n.rtc_connection_id,
                            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
                            time_2_media_engine_connect: m,
                            time_3_media_engine_create_native_connection:
                                null == (a = f.transportInfo) ? void 0 : a.createConnectionTime,
                            time_4_media_engine_connect_to_socket:
                                null == (s = f.transportInfo) ? void 0 : s.connectTime,
                            time_5_scheduling_connected_callback: i(
                                null == (o = this._connection) ? void 0 : o.onConnectCallbackAt,
                                null == (c = this._connection) || null == (l = c.transportInfo)
                                    ? void 0
                                    : l.connectCallbackScheduledMs,
                            ),
                            time_6_state_connected_to_end_measure: i(
                                r,
                                null == (u = this._connection) ? void 0 : u.onConnectCallbackAt,
                            ),
                            connect_count: this._connectCount,
                            rtc_connecting_native_connect: i(
                                null == (d = this._connection) ? void 0 : d.onConnectCallbackAt,
                                null == (p = this._connection) ? void 0 : p.beginInitializeAt,
                            ),
                            rtc_connecting_native_codecs: i(
                                null == (h = this._connection) ? void 0 : h.onVideoCodecsCallbackAt,
                                null == (g = this._connection) ? void 0 : g.onConnectCallbackAt,
                            ),
                            rtc_connecting_native_crypto_modes: i(
                                null == (E = this._connection) ? void 0 : E.onEncryptionModesCallbackAt,
                                null == (y = this._connection) ? void 0 : y.onVideoCodecsCallbackAt,
                            ),
                        });
                    }
                    null == (r = this._localMediaSinkWantsManager) || r.setConnection(f),
                        null == (i = this._goLiveQualityManager) || i.update(),
                        (this._connectCompletedTime = (0, _.tB)()),
                        (this._connected = !0),
                        (this._connecting = !1),
                        (this._encountered_socket_failure = !1);
                } else n === el.S7L.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            f.on(p.yq.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(Q.q.SecureFramesUpdate);
            }),
            f.on(p.yq.Ping, this._handlePing.bind(this)),
            f.on(p.yq.PingTimeout, this._handlePingTimeout.bind(this)),
            f.on(p.yq.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            f.on(p.yq.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            f.on(p.yq.Stats, X.A.create()),
            f.on(p.yq.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            f.on(p.yq.UsersMerged, this.handleUsersMerged.bind(this)),
            f.on(p.yq.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            f.on(p.yq.MLSFailure, this._handleMLSFailure.bind(this)),
            f.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = f),
            (this._mediaEngineConnectionId = f.mediaEngineConnectionId);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var a;
            r !== eu.ME.NONE && i.createUser(t, n),
                null == (a = this._localMediaSinkWantsManager) || a.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(Q.q.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(Q.q.Platform, e, t, this.channelId);
    }
    handleUsersMerged(e) {
        this.emit(
            Q.q.UsersMerged,
            e.map((e) => e.id),
            this.context,
        );
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new ei.X(this._connection)),
                this._videoQuality.updateCallUserIdsCount(this._userIds.size),
                this._videoQuality.start();
            let {
                featureEnabled: e,
                windowLength: t,
                allowedPoorFpsRatio: n,
                fpsThreshold: r,
                backoffTimeSec: i,
            } = er.V.defaultConfig;
            if (e) {
                (this._videoHealthManager = new er.V(t, n, r, i)),
                    null != this._localMediaSinkWantsManager &&
                        (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null == (r = this._localMediaSinkWantsManager) ? void 0 : r.shouldReceiveFromUser(e)) &&
                        (null == (i = this._videoHealthManager) || i.updateFps(e, t, n));
                };
                this._videoQuality.on(ei.F.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: a, streamId: s, videoSsrc: o, videoStreamParameters: l } = e;
        if (
            (this.emit(Q.q.Video, this.guildId, this.channelId, a, s, this.streamServerId),
            null != s &&
                null == this.getOrCreateVideoQuality() &&
                this.logger.error("_handleVideoStreamId: Unable to create videoQuality."),
            null != this._videoQuality &&
                this.userId === a &&
                l.forEach((e) => {
                    var t, n;
                    let r = null != (t = e.ssrc) ? t : 0;
                    r > 0 && !0 === e.active && (null == (n = this._videoQuality) || n.setOutboundSsrc(r));
                }),
            this.userId !== a)
        ) {
            let e = 0 === o && null === s;
            (!e || (e && (null == (t = this._videoQuality) ? void 0 : t.getInboundParticipants().includes(a)))) &&
                (null == (n = this._videoQuality) || n.setInboundUser(a, o),
                null == (r = this._videoHealthManager) || r.createUser(a));
        }
        null != this._connection &&
            this.userId !== a &&
            (null != this._localMediaSinkWantsManager
                ? this._localMediaSinkWantsManager.setStreamId(a, s)
                : null != this._goLiveQualityManager &&
                  this._goLiveQualityManager.getUserID() === a &&
                  (null == (i = this._goLiveQualityManager) || i.setStreamId(s)));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) return void this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
            n.setUserVideoDisabled(eS(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, _.tB)() - this._connectStartTime;
        H.default.track(
            el.HAw.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            eh(ep({}, this._getAnalyticsProperties()), {
                number_of_users: e,
                duration_ms: t,
            }),
        );
    }
    _handleVideo(e, t, n, r, i) {
        if (null != this._connection && this.userId !== t) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                let e = i.map((e) => ({
                    type: eu.mI.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0,
                }));
                0 === e.length &&
                    e.push({
                        type: eu.mI.VIDEO,
                        rid: "100",
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0,
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                var a, s, o;
                let e = [];
                for (let t of i)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({
                            ssrc: t.ssrc,
                            quality: t.quality,
                            active: null == (o = t.active) || o,
                        });
                null == (a = this._goLiveQualityManager) || a.setUserID(t),
                    null == (s = this._goLiveQualityManager) || s.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality &&
                        this.emit(
                            Q.q.VideoSourceQualityChanged,
                            this.guildId,
                            this.channelId,
                            t,
                            e.maxResolution,
                            e.maxFrameRate,
                            this.context,
                        );
                });
        }
    }
    _handleControlPing(e) {
        U.A.supports(eu.O5.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e,
                });
                this._pings.length >= eg;
            )
                this._pings.shift();
            e > ey && this._pingBadCount++, this.emit(Q.q.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 &&
            this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 &&
            this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 &&
            this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(Q.q.OutboundLossRate, e);
    }
    _getAnalyticsProperties() {
        let e = k.A.getChannel(this.channelId),
            t = null == e ? void 0 : e.type;
        return {
            guild_id: this.guildId,
            channel_id: this.channelId,
            channel_type: t,
            rtc_connection_id: this.getRTCConnectionId(),
            context: this.context,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion,
        };
    }
    _handleClientConnect(e) {
        var t, n, r;
        e.forEach((e) => {
            var t;
            this._userIds.add(e), null == (t = this._connection) || t.createUser(e, 0);
        }),
            this.emit(Q.q.ClientConnect, e),
            null == (t = this._videoQuality) || t.updateCallUserIdsCount(this._userIds.size),
            null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds),
            null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, a, s;
        let o = this._videoQuality;
        if (null != o && this.context === eu.x.DEFAULT) {
            let t = o.getInboundStats(e),
                n = null != (a = null == t ? void 0 : t.num_frames) ? a : 0;
            null != t &&
                n > 0 &&
                (H.default.track(
                    el.HAw.VIDEO_STREAM_ENDED,
                    ep(
                        eh(ep({}, this._getAnalyticsProperties()), {
                            app_hardware_acceleration_enabled: Y.A.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: e,
                            reason: "User disconnected",
                            participant_type: "receiver",
                            guild_region: F.A.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: U.A.getHardwareEncoding(),
                        }),
                        t,
                        o.getNetworkStats(),
                        o.getCodecUsageStats("receiver", e),
                    ),
                ),
                o.destroyUser(e),
                null == (s = this._videoHealthManager) || s.deleteUser(e));
        }
        let l = this._connection;
        null != l && l.destroyUser(e),
            null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e),
            this._userIds.delete(e),
            this.emit(Q.q.ClientDisconnect, e),
            null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds),
            null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds),
            null == (i = this._videoQuality) || i.updateCallUserIdsCount(this._userIds.size),
            1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, _.tB)());
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol
            ? n.setCodecs(null != e && "" !== e ? e : eu.UK.OPUS, null != t && "" !== t ? t : eu.UK.H264, this.context)
            : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol
            ? t.setSDP(e)
            : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e),
            this.logger.info(
                "Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(this.getRTCConnectionId()),
            );
        let t = v.A.getRawThermalState();
        H.default.track(
            el.HAw.MEDIA_SESSION_JOINED,
            eh(ep({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                raw_thermal_state: t,
            }),
        ),
            h.h.dispatch({
                type: "MEDIA_SESSION_JOINED",
                mediaSessionId: this.getMediaSessionId(),
                context: this.context,
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))),
            (this._remoteVideoSinkWants = e),
            h.h.dispatch({
                type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS",
                context: this.context,
                wants: e,
                channelId: this.channelId,
                guildId: this.guildId,
                userId: this.userId,
            }),
            null == t || t.setRemoteVideoSinkWants(e);
    }
    _handleCodeVersion(e, t) {
        (this.voiceVersion = e), (this.rtcWorkerVersion = t);
    }
    _handleKeyframeInterval(e) {
        let t = this._connection;
        null != t && null != this.protocol
            ? t.setKeyframeInterval(e)
            : this.logger.warn("Cannot set keyframe interval on connection with protocol:", this.protocol);
    }
    _handleBandwidthEstimationExperiment(e) {
        this._bandwidthEstimationExperiment = e;
        let t = T.A.getMediaEngineExperiments(e);
        if (null !== t && 0 !== t.length) {
            var n;
            null == (n = this._connection) || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e) {
        let t = this._secureFramesTransitionStates.get(e);
        if (null == t) return;
        let n = this._secureFramesTransitionStates.size;
        this._secureFramesTransitionStates.delete(e);
        let r = (e, t) => (null != e && null != t ? e - t : void 0);
        H.default.track(
            el.HAw.SECURE_FRAMES_TRANSITION,
            eh(ep({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: t.protocolVersion,
                start_to_init_duration: r(t.initReceivedTime, this._connectStartTime),
                init_duration: r(t.initFinishedTime, t.initReceivedTime),
                first_proposals_duration: r(t.firstProposalsFinishedTime, t.firstProposalsReceivedTime),
                last_proposals_duration: r(t.lastProposalsFinishedTime, t.lastProposalsReceivedTime),
                duration_between_proposals: r(t.lastProposalsReceivedTime, t.firstProposalsReceivedTime),
                total_proposals_size: t.totalProposalsSize,
                total_commit_welcome_size: t.totalCommitWelcomeSize,
                welcome_wait_duration: r(t.welcomeReceivedTime, t.initFinishedTime),
                welcome_duration: r(t.welcomeFinishedTime, t.welcomeReceivedTime),
                welcome_size: t.welcomeSize,
                welcome_error: t.welcomeError,
                commit_wait_duration: r(t.commitReceivedTime, t.lastProposalsFinishedTime),
                commit_duration: r(t.commitFinishedTime, t.commitReceivedTime),
                commit_size: t.commitSize,
                commit_error: t.commitError,
                prepare_wait_duration: r(t.prepareReceivedTime, this._secureFramesLastBecameAloneTime),
                prepare_duration: r(t.prepareFinishedTime, t.prepareReceivedTime),
                execute_wait_duration: r(t.executeReceivedTime, t.readyTime),
                execute_duration: r(t.executeFinishedTime, t.executeReceivedTime),
                execute_error: t.executeError,
                incomplete: t.incomplete,
                active_transition_count: n,
                time_since_creation: (0, _.tB)() - t.creationTime,
                users_added_count: t.usersAdded,
                users_removed_count: t.usersRemoved,
                roster_size_after: t.rosterSizeAfter,
                init_to_finish_duration: r(t.executeFinishedTime, t.initReceivedTime),
            }),
        ),
            e === eI && this._trackRemainingSecureFrameTransitions();
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            (e.incomplete = !0), this._trackSecureFrameTransition(t);
        });
    }
    _storeSecureFrameNextTransitionData(e) {
        return (
            null == this._secureFramesNextTransitionState &&
                (this._secureFramesNextTransitionState = {
                    creationTime: (0, _.tB)(),
                }),
            (this._secureFramesNextTransitionState = ep({}, this._secureFramesNextTransitionState, e))
        );
    }
    _storeSecureFrameTransitionData(e, t) {
        let n = this._secureFramesTransitionStates.get(e);
        null == n &&
            ((n = this._storeSecureFrameNextTransitionData({})), (this._secureFramesNextTransitionState = void 0)),
            this._secureFramesTransitionStates.set(e, ep({}, n, t)),
            (this._secureFramesMaxConcurrentTransitions = Math.max(
                this._secureFramesMaxConcurrentTransitions,
                this._secureFramesTransitionStates.size,
            ));
    }
    _handleSecureFramesInit(e) {
        var t, n;
        let r = (0, _.tB)();
        this.recordEvent({
            c: 11,
            v: e,
        }),
            e > 0
                ? (this.logger.info("DAVE protocol init with protocol version: ".concat(e)),
                  (this._mlsInitReceivedTime = r),
                  null == (t = this._connection) || t.prepareSecureFramesEpoch(eA, e, this.trueChannelId),
                  this._sendMLSKeyPackage(),
                  this._storeSecureFrameNextTransitionData({
                      initReceivedTime: r,
                      initFinishedTime: (0, _.tB)(),
                      protocolVersion: e,
                  }),
                  this.recordEvent({
                      c: 10,
                  }))
                : null == (n = this._connection) ||
                  n.prepareSecureFramesTransition(eI, e, () => {
                      let t = !1;
                      try {
                          var n;
                          null == (n = this._connection) || n.executeSecureFramesTransition(eI);
                      } catch (e) {
                          (t = !0), z.A.captureException(e);
                      }
                      this._storeSecureFrameTransitionData(eI, {
                          initReceivedTime: r,
                          initFinishedTime: (0, _.tB)(),
                          protocolVersion: e,
                          executeError: t,
                      }),
                          this._trackSecureFrameTransition(eI);
                  });
    }
    _handleSecureFramesRosterChange(e, t) {
        let n = [],
            r = 0,
            i = 0;
        Object.entries(e).forEach((e) => {
            let [t, a] = e;
            n.push(eS(t)),
                null == a || 0 === a.byteLength
                    ? (i++, this._secureFramesRosterMap.delete(eS(t)))
                    : (r++, this._secureFramesRosterMap.set(eS(t), a));
        }),
            this._storeSecureFrameTransitionData(t, {
                usersAdded: r,
                usersRemoved: i,
                rosterSizeAfter: this._secureFramesRosterMap.size,
            }),
            this.emit(Q.q.RosterMapUpdate, n);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info("Preparing DAVE protocol transition: ".concat(e, ", protocol version: ").concat(t)),
            this._secureFramesTransitionPrepareCount++;
        let r = (0, _.tB)();
        0 === t &&
            this._trackMLSFailures({
                recovered: !0,
                downgraded: !0,
            }),
            null == (n = this._connection) ||
                n.prepareSecureFramesTransition(e, t, () => {
                    this._maybeSendSecureFramesTransitionReady(e),
                        this._storeSecureFrameTransitionData(e, {
                            protocolVersion: t,
                            prepareReceivedTime: r,
                            prepareFinishedTime: (0, _.tB)(),
                        });
                });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info("Preparing DAVE protocol epoch: ".concat(e, ", protocol version: ").concat(t));
        let r = e.toString();
        null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId),
            r === eA &&
                ((this._mlsInitReceivedTime = (0, _.tB)()),
                this._sendMLSKeyPackage(),
                this.recordEvent({
                    c: 10,
                }));
    }
    _sendMLSKeyPackage() {
        var e;
        null == (e = this._connection) ||
            e.getMLSKeyPackage((e) => {
                var t;
                this.logger.info("Got MLS key package, sending to RTC server"),
                    null == (t = this._socket) || t.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== eI) {
            var t;
            this.logger.info("Sending DAVE protocol ready for transition ID ".concat(e)),
                null == (t = this._socket) || t.secureFramesReadyForTransition(e),
                this._storeSecureFrameTransitionData(e, {
                    readyTime: (0, _.tB)(),
                });
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        this.logger.info("Executing DAVE protocol transition: ".concat(e)), this._secureFramesTransitionExecuteCount++;
        let t = (0, _.tB)(),
            n = !1;
        try {
            var r;
            null == (r = this._connection) || r.executeSecureFramesTransition(e);
        } catch (e) {
            (n = !0), z.A.captureException(e);
        }
        this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, _.tB)(),
            executeError: n,
        }),
            this._trackSecureFrameTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info("Received MLS external sender package"),
            null == (t = this._connection) || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        let r = (0, _.tB)();
        this.logger.info("Received MLS proposals"),
            null == (n = this._connection) ||
                n.processMLSProposals(t, (n) => {
                    var i, a, s;
                    let o = (0, _.tB)();
                    this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(n);
                    let l =
                        null != (i = this._secureFramesNextTransitionState)
                            ? i
                            : this._storeSecureFrameNextTransitionData({
                                  firstProposalsReceivedTime: r,
                                  firstProposalsFinishedTime: o,
                              });
                    (l.lastProposalsReceivedTime = r),
                        (l.lastProposalsFinishedTime = o),
                        (l.totalProposalsSize = (null != (a = l.totalProposalsSize) ? a : 0) + t.byteLength),
                        (l.totalCommitWelcomeSize = (null != (s = l.totalCommitWelcomeSize) ? s : 0) + n.byteLength);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info("Received MLS commit for transition ID ".concat(e));
        let r = (0, _.tB)();
        null == (n = this._connection) ||
            n.prepareMLSCommitTransition(e, t, (n, i, a) => {
                n
                    ? (this._trackMLSFailures({
                          recovered: !0,
                          downgraded: !1,
                      }),
                      (this._mlsSessionResetStartTime = void 0),
                      this._handleSecureFramesRosterChange(a, e),
                      this._maybeSendSecureFramesTransitionReady(e))
                    : (this.logger.warn("Failed to process MLS commit for transition ID ".concat(e)),
                      (this._mlsSessionResetStartTime = (0, _.tB)()),
                      this._flagMLSInvalidCommitWelcome(e),
                      this._handleSecureFramesInit(i)),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        commitReceivedTime: r,
                        commitFinishedTime: (0, _.tB)(),
                        commitSize: t.byteLength,
                        commitError: !n,
                    });
            });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info("Received MLS welcome for transition ID ".concat(e));
        let r = (0, _.tB)();
        null == (n = this._connection) ||
            n.processMLSWelcome(e, t, (n, i, a) => {
                n
                    ? (this._trackMLSFailures({
                          recovered: !0,
                          downgraded: !1,
                      }),
                      (this._mlsSessionResetStartTime = void 0),
                      this._handleSecureFramesRosterChange(a, e),
                      this._maybeSendSecureFramesTransitionReady(e))
                    : ((this._mlsSessionResetStartTime = (0, _.tB)()),
                      this._flagMLSInvalidCommitWelcome(e),
                      this._sendMLSKeyPackage()),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        welcomeReceivedTime: r,
                        welcomeFinishedTime: (0, _.tB)(),
                        welcomeSize: t.byteLength,
                        welcomeError: !n,
                    });
            });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null == (r = this._connection) || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        this.logger.info("Flagging invalid MLS commit/welcome for transition ID ".concat(e)),
            null == (t = this._socket) || t.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, t) {
        let n = (0, _.tB)(),
            r = this._nextFailureId++;
        this.recordEvent({
            c: 3,
            i: r,
        }),
            this._mlsFailures.push({
                id: r,
                source: e,
                reason: t,
                count: 1,
                countDuringReset: +(null != this._mlsSessionResetStartTime),
                firstOccurrence: n,
                timeSinceInit: null != this._mlsInitReceivedTime ? n - this._mlsInitReceivedTime : void 0,
                eventLog: ew(),
            }),
            e.includes("GetPersistedKeyPair")
                ? m.A.show({
                      title: ed.intl.string(ed.t.fJUioH),
                      body: ed.intl.string(ed.t.CQLWvo),
                  })
                : this._alertMLSFailureDebouced(e, t);
    }
    _trackMLSFailures(e) {
        let { recovered: t, downgraded: n } = e,
            r = (0, _.tB)(),
            i = this.getMediaSessionId(),
            a = null != this._mlsSessionResetStartTime ? r - this._mlsSessionResetStartTime : void 0;
        for (let {
            id: e,
            source: s,
            reason: o,
            count: l,
            countDuringReset: c,
            firstOccurrence: u,
            timeSinceInit: d,
            eventLog: f,
        } of this._mlsFailures)
            H.default.track(
                el.HAw.MLS_FAILURES,
                eh(ep({}, this._getAnalyticsProperties()), {
                    media_session_id: i,
                    parent_media_session_id: this.parentMediaSessionId,
                    failure_id: e,
                    failure_time: u - this._createdTime,
                    failure_source: s,
                    failure_reason: o,
                    failure_count: l,
                    failure_was_recovered: t,
                    failure_cleared_by_downgrade: n,
                    time_since_first_occurrence: r - u,
                    time_since_last_reset: a,
                    failure_count_during_reset: c,
                    time_since_init: d,
                    event_history: f,
                    connection_serial: this._connectionSerial,
                }),
            );
        this._mlsFailures = [];
    }
    _alertMLSFailure(e, t) {
        let n = B.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            m.A.show({
                title: "MLS Error in ".concat(e),
                body: "Error: ".concat(
                    t,
                    "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!",
                ),
            });
    }
    getExtraConnectionOptions() {
        return {};
    }
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        return null != t && l().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        var e;
        let t = U.A.getInputDeviceId();
        return null == (e = U.A.getInputDevices()[t]) ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = U.A.getOutputDeviceId();
        return null == (e = U.A.getOutputDevices()[t]) ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = U.A.getVideoDeviceId();
        return null == (e = U.A.getVideoDevices()[t]) ? void 0 : e.name;
    }
    getInputDeviceSampleRate() {
        var e, t;
        return null !=
            (e = null == (t = this._voiceQuality) ? void 0 : t.getAudioDeviceStats().input_device_session_sample_rate)
            ? e
            : null;
    }
    constructor({
        userId: e,
        sessionId: t,
        guildId: n,
        channelId: r,
        context: i = eu.x.DEFAULT,
        streamServerId: a,
        streamChannelId: o,
        parentMediaSessionId: l,
        joinVoiceId: d,
    }) {
        super(),
            ef(this, "context", void 0),
            ef(this, "userId", void 0),
            ef(this, "sessionId", void 0),
            ef(this, "guildId", void 0),
            ef(this, "parentMediaSessionId", void 0),
            ef(this, "hostname", void 0),
            ef(this, "state", void 0),
            ef(this, "_videoQuality", void 0),
            ef(this, "logger", void 0),
            ef(this, "streamServerId", void 0),
            ef(this, "streamChannelId", void 0),
            ef(this, "_channelId", void 0),
            ef(this, "_nextChannelId", void 0),
            ef(this, "joinVoiceId", void 0),
            ef(this, "channelIds", void 0),
            ef(this, "_endpoint", void 0),
            ef(this, "port", void 0),
            ef(this, "token", void 0),
            ef(this, "protocol", void 0),
            ef(this, "voiceVersion", void 0),
            ef(this, "rtcWorkerVersion", void 0),
            ef(this, "_socket", void 0),
            ef(this, "_backoff", void 0),
            ef(this, "_destroyed", void 0),
            ef(this, "_pings", void 0),
            ef(this, "_pingBadCount", void 0),
            ef(this, "_pingTimeouts", void 0),
            ef(this, "_mediaSessionId", void 0),
            ef(this, "_voiceQuality", void 0),
            ef(this, "_voiceQualityPeriodicStatsInterval", void 0),
            ef(this, "_voiceQualityPeriodicStatsSequenceId", void 0),
            ef(this, "_systemResponsiveness", void 0),
            ef(this, "_systemResources", void 0),
            ef(this, "_noiseCancellationError", void 0),
            ef(this, "_voiceDuration", void 0),
            ef(this, "_videoHealthManager", void 0),
            ef(this, "_sentVideo", void 0),
            ef(this, "_videoDecoderFallbackSuppressed", void 0),
            ef(this, "_outboundLossRate", void 0),
            ef(this, "_recordingEnabled", void 0),
            ef(this, "_selectedExperiments", void 0),
            ef(this, "_localMediaSinkWantsManager", void 0),
            ef(this, "_goLiveQualityManager", void 0),
            ef(this, "_remoteVideoSinkWants", void 0),
            ef(this, "_connection", void 0),
            ef(this, "_mediaEngineConnectionId", void 0),
            ef(this, "_createdTime", void 0),
            ef(this, "_connectStartTime", void 0),
            ef(this, "_connectCompletedTime", void 0),
            ef(this, "_rtcConnectionId", void 0),
            ef(this, "_connectCount", void 0),
            ef(this, "_connectionSerial", void 0),
            ef(this, "_connected", void 0),
            ef(this, "_connecting", void 0),
            ef(this, "_encountered_socket_failure", void 0),
            ef(this, "_inputDetected", void 0),
            ef(this, "_encryptionMode", void 0),
            ef(this, "stateHistory", void 0),
            ef(this, "_supportedBandwidthEstimationExperiments", void 0),
            ef(this, "_bandwidthEstimationExperiment", void 0),
            ef(this, "_secureFramesState", void 0),
            ef(this, "_userIds", void 0),
            ef(this, "_secureFramesRosterMap", new Map()),
            ef(this, "reconnecting", !1),
            ef(this, "_nextFailureId", 0),
            ef(this, "_mlsFailures", []),
            ef(this, "_secureFramesTransitionStates", new Map()),
            ef(this, "_secureFramesNextTransitionState", void 0),
            ef(this, "_secureFramesMaxConcurrentTransitions", 0),
            ef(this, "_secureFramesTransitionPrepareCount", 0),
            ef(this, "_secureFramesTransitionExecuteCount", 0),
            ef(this, "_secureFramesLastBecameAloneTime", void 0),
            ef(this, "_mlsSessionResetStartTime", void 0),
            ef(this, "_mlsInitReceivedTime", void 0),
            ef(this, "_numNoiseCancellationChanges", 0),
            ef(this, "_fetchAsyncResourcesPromise", void 0),
            ef(this, "_lastSentSpeakingStatus", void 0),
            ef(this, "_lastSentSSRC", void 0),
            ef(this, "powerMonitorListener", void 0),
            ef(this, "reconnect", () => {
                this.recordEvent({
                    c: 7,
                });
                let e = this._socket;
                null != e &&
                    (this._connected && (this._connectStartTime = (0, _.tB)()),
                    this._connecting ||
                        (this._trackVoiceConnectionConnecting(),
                        (this._connecting = !0),
                        (this._encountered_socket_failure = !1)),
                    this._connectCount++,
                    (this.reconnecting = !0),
                    e.close(),
                    e.connect());
            }),
            ef(this, "_alertMLSFailureDebouced", s()(this._alertMLSFailure, 100)),
            ef(this, "_handleNetworkOnline", () => {
                this.expeditedHeartbeat(5e3, "network detected online.");
            }),
            ef(this, "_handleNetworkOffline", () => {
                this.expeditedHeartbeat(15e3, "network detected offline.", !1);
            }),
            ef(this, "_handleNoRoute", () => {
                var e;
                null == (e = this._socket) || e.noRoute();
            }),
            ef(this, "_handlePowerResume", () => {
                this.expeditedHeartbeat(5e3, "power monitor resumed");
            }),
            ef(this, "_handleVoiceQualityPeriodicsStats", () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            H.default.track(
                                el.HAw.VOICE_QUALITY_PERIODIC_STATS,
                                eh(ep({}, this._getAnalyticsProperties()), {
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t.userId,
                                    hostname: this.hostname,
                                    frame_op_silent: t.silent,
                                    frame_op_normal: t.normal,
                                    frame_op_merged: t.merged,
                                    frame_op_expanded: t.expanded,
                                    frame_op_accelerated: t.accelerated,
                                    frame_op_preemptive_expanded: t.preemptiveExpanded,
                                    frame_op_cng: t.cng,
                                    accelerate_rate: t.accelerateRate,
                                    expand_rate: t.expandRate,
                                    preemptive_expand_rate: t.preemptiveExpandRate,
                                    speech_expand_rate: t.speechExpandRate,
                                    duration_ms: t.durationMs,
                                    sequence_id: this._voiceQualityPeriodicStatsSequenceId,
                                    input_device: this.getInputDeviceName(),
                                    output_device: this.getOutputDeviceName(),
                                    ping_average: Math.round(this.getAveragePing()),
                                    ping_bad_count: this._pingBadCount,
                                    parent_media_session_id: this.parentMediaSessionId,
                                }),
                            );
                    this._voiceQualityPeriodicStatsSequenceId++;
                }
            }),
            ef(this, "getAudioDeviceStates", () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(U.A.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(U.A.getOutputDevices()).length,
            })),
            ef(this, "getVideoDeviceStates", () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(U.A.getVideoDevices()).length,
            })),
            ef(this, "_trackVoiceConnectionConnecting", () => {
                let e = k.A.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                H.default.track(
                    el.HAw.VOICE_CONNECTION_CONNECTING,
                    eh(ep({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t,
                        participant_type: this.getVoiceParticipantType(),
                        is_muted: U.A.isMute(),
                        join_voice_id: this.joinVoiceId,
                        connection_serial: this._connectionSerial,
                    }),
                );
            }),
            ef(this, "incomingVideoEnabledChanged", (e) => {
                var t, n;
                null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e),
                    null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e);
            }),
            ef(this, "windowVisibilityChanged", (e) => {
                var t;
                null == (t = this._videoQuality) || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            this.recordEvent({
                c: 0,
            }),
            (this._fetchAsyncResourcesPromise = U.A.fetchAsyncResources().catch((e) => {
                z.A.captureException(e);
            })),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.streamServerId = a),
            (this.streamChannelId = o),
            (this.parentMediaSessionId = l),
            (this.joinVoiceId = d),
            (this._connectionSerial = eT++),
            (this.logger = new O.A("RTCConnection(".concat(this.trueServerId, ", ").concat(this.context, ")"))),
            this.logger.enableNativeLogger(!0),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = el.S7L.AWAITING_ENDPOINT),
            (this.stateHistory = new J.M(this.state)),
            (this._socket = null),
            (this._backoff = new u.A(1e3, 1e4)),
            (this._destroyed = !1),
            (this._pings = []),
            (this._pingBadCount = 0),
            (this._pingTimeouts = []),
            (this._mediaSessionId = null),
            (this._voiceQuality = null),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._systemResponsiveness = null),
            (this._noiseCancellationError = 0),
            (this._voiceDuration = null),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._sentVideo = !1),
            (this._videoDecoderFallbackSuppressed = !1),
            (this._outboundLossRate = null),
            (this._createdTime = (0, _.tB)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, c.A)()),
            (this._connectCount = 0),
            (this._connected = !1),
            (this._connecting = !1),
            (this._encountered_socket_failure = !1),
            (this._inputDetected = !1),
            (this._selectedExperiments = []),
            (this._secureFramesState = null),
            (this._userIds = new Set([e])),
            this._secureFramesRosterMap.clear(),
            (this._mlsFailures = []),
            (this._nextFailureId = 0),
            (this._mediaEngineConnectionId = null),
            (this.reconnecting = !1),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0);
        const f = U.A.supports(eu.O5.FIRST_FRAME_CALLBACK) && U.A.supports(eu.O5.REMOTE_USER_MULTI_STREAM);
        if (i === eu.x.DEFAULT) {
            var p;
            const t = (null == (p = k.A.getChannel(this.channelId)) ? void 0 : p.type) === el.rbe.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new ee.Ay(e, t, f)),
                this._localMediaSinkWantsManager.on(ee.Nb.Update, (e) => {
                    if (this.state === el.S7L.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info("Media sink wants: ".concat(JSON.stringify(e))),
                            this._socket.mediaSinkWants(e),
                            null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(ee.Nb.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                });
        } else
            i === eu.x.STREAM &&
                ((this._goLiveQualityManager = new I.A(!0)),
                this._goLiveQualityManager.on(I.j.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(I.j.RequestedStreamsUpdate, (e) => {
                    if (this.state === el.S7L.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info("Go Live Media sink wants: ".concat(JSON.stringify(e))),
                            this._socket.mediaSinkWants(e),
                            null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = ee.AE),
            eo.X.on(eo.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eo.X.on(eo.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            V.Ay.shouldRecordNextConnection()
                ? ((this._recordingEnabled = !0), E.Et(!1))
                : (this._recordingEnabled = !1),
            W.A.addOnlineCallback(this._handleNetworkOnline),
            W.A.addOfflineCallback(this._handleNetworkOffline),
            (0, K.isDesktop)() &&
                (this.powerMonitorListener = Z.A.remotePowerMonitor.on("resume", this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            U.A.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
