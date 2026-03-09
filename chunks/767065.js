"use strict";
n.d(t, { A: () => eN }), n(321073);
var r = n(824120),
    i = n.n(r),
    s = n(111956),
    a = n.n(s),
    o = n(181370),
    l = n.n(o),
    u = n(835245),
    c = n(158390),
    d = n(665260),
    _ = n(972347),
    f = n(205693),
    p = n(499979),
    h = n(73153),
    m = n(157559),
    E = n(233545),
    g = n(894539),
    A = n(124838),
    I = n(626584),
    T = n(655087),
    S = n(680725),
    y = n(892038),
    v = n(641967),
    N = n(747809),
    C = n(835498),
    R = n(525286),
    O = n(624694),
    b = n(204912),
    D = n(390391),
    L = n(276006),
    w = n(559633),
    M = n(714763),
    x = n(34135),
    P = n(961350),
    k = n(734057),
    U = n(430452),
    G = n(383501),
    F = n(412780),
    V = n(873985),
    B = n(287809),
    H = n(954571),
    j = n(353835),
    Y = n(209489),
    W = n(723702),
    K = n(728458),
    $ = n(998218),
    z = n(77729),
    q = n(257506),
    Z = n(507821),
    X = n(531184),
    Q = n(351185),
    J = n(710966),
    ee = n(499954),
    et = n(591186),
    en = n(738586),
    er = n(426978),
    ei = n(200458),
    es = n(128587),
    ea = n(808180),
    eo = n(652215),
    el = n(396574),
    eu = n(731854),
    ec = n(985018);
let ed = /^https/.test("https:") ? "wss:" : "ws:",
    e_ = 200,
    ef = 20,
    ep = 500,
    eh = 250,
    em = 10,
    eE = 5,
    eg = "1",
    eA = 0;
function eI(e) {
    return e;
}
let eT = 0,
    eS = [],
    ey = 50;
function ev() {
    let e = [],
        t = (0, p.tB)();
    for (let n of eS) e.push({ ...n, t: t - n.t });
    return JSON.stringify(e);
}
class eN extends _.A {
    context;
    userId;
    sessionId;
    guildId;
    parentMediaSessionId;
    hostname;
    state;
    _videoQuality;
    logger;
    streamServerId;
    streamChannelId;
    _channelId;
    _nextChannelId;
    joinVoiceId;
    channelIds;
    _endpoint;
    port;
    token;
    protocol;
    voiceVersion;
    rtcWorkerVersion;
    _socket;
    _backoff;
    _destroyed;
    _pings;
    _pingBadCount;
    _pingTimeouts;
    _mediaSessionId;
    _voiceQuality;
    _voiceQualityPeriodicStatsInterval;
    _voiceQualityPeriodicStatsSequenceId;
    _systemResponsiveness;
    _systemResources;
    _noiseCancellationError;
    _voiceDuration;
    _videoHealthManager;
    _sentVideo;
    _videoDecoderFallbackSuppressed;
    _outboundLossRate;
    _recordingEnabled;
    _selectedExperiments;
    _localMediaSinkWantsManager;
    _goLiveQualityManager;
    _remoteVideoSinkWants;
    _connection;
    _mediaEngineConnectionId;
    _createdTime;
    _connectStartTime;
    _connectCompletedTime;
    _rtcConnectionId;
    _connectCount;
    _connectionSerial;
    _connected;
    _connecting;
    _encountered_socket_failure;
    _inputDetected;
    _encryptionMode;
    stateHistory;
    _supportedBandwidthEstimationExperiments;
    _bandwidthEstimationExperiment;
    _secureFramesState;
    _userIds;
    _secureFramesRosterMap = new Map();
    reconnecting = !1;
    _nextFailureId = 0;
    _mlsFailures = [];
    _secureFramesTransitionStates = new Map();
    _secureFramesNextTransitionState;
    _secureFramesMaxConcurrentTransitions = 0;
    _secureFramesTransitionPrepareCount = 0;
    _secureFramesTransitionExecuteCount = 0;
    _secureFramesLastBecameAloneTime;
    _mlsSessionResetStartTime;
    _mlsInitReceivedTime;
    _numNoiseCancellationChanges = 0;
    _fetchAsyncResourcesPromise;
    _lastSentSpeakingStatus;
    _lastSentSSRC;
    powerMonitorListener;
    constructor({
        userId: e,
        sessionId: t,
        guildId: n,
        channelId: r,
        context: i = eu.x.DEFAULT,
        streamServerId: s,
        streamChannelId: a,
        parentMediaSessionId: o,
        joinVoiceId: l,
    }) {
        super(),
            (this.context = i),
            this.recordEvent({ c: 0 }),
            (this._fetchAsyncResourcesPromise = U.Ay.fetchAsyncResources().catch((e) => {
                K.A.captureException(e);
            })),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.streamServerId = s),
            (this.streamChannelId = a),
            (this.parentMediaSessionId = o),
            (this.joinVoiceId = l),
            (this._connectionSerial = eT++),
            (this.logger = new I.A(`RTCConnection(${this.trueServerId}, ${this.context})`)),
            this.logger.enableNativeLogger(!0),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = eo.S7L.AWAITING_ENDPOINT),
            (this.stateHistory = new X.M(this.state)),
            (this._socket = null),
            (this._backoff = new c.A(1e3, 1e4)),
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
            (this._createdTime = (0, p.tB)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, u.A)()),
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
        const d = U.Ay.supports(eu.O5.FIRST_FRAME_CALLBACK) && U.Ay.supports(eu.O5.REMOTE_USER_MULTI_STREAM);
        if (i === eu.x.DEFAULT) {
            const t = k.A.getChannel(this.channelId)?.type === eo.rbe.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new J.Ay(e, t, d)),
                this._localMediaSinkWantsManager.on(J.Nb.Update, (e) => {
                    this.state === eo.S7L.RTC_CONNECTED &&
                        null != this._socket &&
                        (this.logger.info(`Media sink wants: ${JSON.stringify(e)}`),
                        this._socket.mediaSinkWants(e),
                        this._connection?.setLocalVideoSinkWants(e));
                }),
                this._localMediaSinkWantsManager.on(J.Nb.UserSSRCUpdate, (e, t, n) => {
                    this._connection?.createUser(e, t, n);
                });
        } else
            i === eu.x.STREAM &&
                ((this._goLiveQualityManager = new y.A(!0)),
                this._goLiveQualityManager.on(y.j.RequestedSSRCsUpdate, (e, t, n) => {
                    this._connection?.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(y.j.RequestedStreamsUpdate, (e) => {
                    this.state === eo.S7L.RTC_CONNECTED &&
                        null != this._socket &&
                        (this.logger.info(`Go Live Media sink wants: ${JSON.stringify(e)}`),
                        this._socket.mediaSinkWants(e),
                        this._connection?.setLocalVideoSinkWants(e));
                }));
        (this._remoteVideoSinkWants = J.AE),
            ea.X.on(ea.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            ea.X.on(ea.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            F.Ay.shouldRecordNextConnection()
                ? ((this._recordingEnabled = !0), E.Et(!1))
                : (this._recordingEnabled = !1),
            Y.A.addOnlineCallback(this._handleNetworkOnline),
            Y.A.addOfflineCallback(this._handleNetworkOffline),
            (0, W.isDesktop)() && (this.powerMonitorListener = z.A.powerMonitor.on("resume", this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            U.Ay.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
    recordEvent(e) {
        for (eS.push({ ...e, t: (0, p.tB)(), n: this._connectionSerial }); eS.length > ey; ) eS.shift();
    }
    get quality() {
        let e = this.getLastPing();
        return this.state !== eo.S7L.RTC_CONNECTED || void 0 === e
            ? eo.bFR.UNKNOWN
            : e > ep || (null != this._outboundLossRate && this._outboundLossRate > em)
              ? eo.bFR.BAD
              : e > eh || (null != this._outboundLossRate && this._outboundLossRate > eE)
                ? eo.bFR.AVERAGE
                : eo.bFR.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if ((this.recordEvent({ c: 6, e: null != e }), null == e)) (this._endpoint = null), (this.hostname = null);
        else {
            e = `${ed}//${e}`;
            let { hostname: t, port: n } = $.A.toURLSafe(e) ?? {},
                r = null != n ? parseInt(n) : NaN;
            null != t && (80 === r || 443 === r) && (e = `${ed}//${t}`),
                (this._endpoint = e + "/"),
                (this.hostname = t);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
        this.recordEvent({ c: 2, e: null != e, h: null != t }), this._backoff.cancel();
        let { endpoint: n, token: r } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || r !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, u.A)()),
                    h.h.dispatch({ type: "RTC_CONNECTION_UPDATE_ID", connection: this }))),
            null == this.endpoint)
        )
            return void this.setState(eo.S7L.AWAITING_ENDPOINT);
        let i = this._socket;
        null != i && this._cleanupSocket(),
            null != this._nextChannelId && ((this._channelId = this._nextChannelId), (this._nextChannelId = void 0)),
            (i = this._socket = new Q.Ay(this.endpoint, this.context)).on(
                Q.yg.Connecting,
                this._handleConnecting.bind(this, i),
            ),
            i.on(Q.yg.Connect, this._handleConnect.bind(this, i)),
            i.on(Q.yg.Disconnect, this._handleDisconnect.bind(this, i)),
            i.on(Q.yg.Resuming, this._handleResuming.bind(this, i)),
            i.on(Q.yg.Ready, this._handleReady.bind(this, i)),
            i.on(Q.yg.Speaking, this._handleSpeaking.bind(this, i)),
            i.on(Q.yg.Video, this._handleVideo.bind(this, i)),
            i.on(Q.yg.Ping, this._handleControlPing.bind(this)),
            i.on(Q.yg.ClientDisconnect, this._handleClientDisconnect.bind(this)),
            i.on(Q.yg.ClientConnect, this._handleClientConnect.bind(this)),
            i.on(Q.yg.Codecs, this._handleCodecs.bind(this)),
            i.on(Q.yg.MediaSessionId, this._handleMediaSessionId.bind(this)),
            i.on(Q.yg.MediaSinkWants, this._handleMediaSinkWants.bind(this)),
            i.on(Q.yg.VoiceBackendVersion, this._handleCodeVersion.bind(this)),
            i.on(Q.yg.KeyframeInterval, this._handleKeyframeInterval.bind(this)),
            i.on(Q.yg.Flags, this.handleFlags.bind(this)),
            i.on(Q.yg.Platform, this.handlePlatform.bind(this)),
            i.on(Q.yg.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)),
            i.on(Q.yg.SecureFramesInit, this._handleSecureFramesInit.bind(this)),
            i.on(Q.yg.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)),
            i.on(Q.yg.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)),
            i.on(Q.yg.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)),
            i.on(Q.yg.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)),
            i.on(Q.yg.MLSProposals, this._handleMLSProposals.bind(this, i)),
            i.on(Q.yg.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)),
            i.on(Q.yg.MLSWelcome, this._handleMLSWelcome.bind(this)),
            i.on(Q.yg.ReceiveMessage, this._recordMessageEvent.bind(this, 4)),
            i.on(Q.yg.SendMessage, this._recordMessageEvent.bind(this, 5)),
            (this._connectStartTime = (0, p.tB)()),
            this._connectCount++,
            (this._connecting = !0),
            null != i &&
                this._socket === i &&
                (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    _recordMessageEvent(e, t) {
        this.recordEvent({ c: e, o: t });
    }
    reconnect = () => {
        this.recordEvent({ c: 7 });
        let e = this._socket;
        null != e &&
            (this._connected && (this._connectStartTime = (0, p.tB)()),
            this._connecting ||
                (this._trackVoiceConnectionConnecting(),
                (this._connecting = !0),
                (this._encountered_socket_failure = !1)),
            this._connectCount++,
            (this.reconnecting = !0),
            e.close(),
            e.connect());
    };
    destroy() {
        if (
            (this.logger.info("Destroy RTCConnection"),
            Y.A.removeOnlineCallback(this._handleNetworkOnline),
            Y.A.removeOfflineCallback(this._handleNetworkOffline),
            (0, W.isDesktop)() && this.powerMonitorListener?.(),
            this.recordEvent({ c: 1 }),
            ea.X.off(ea.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            ea.X.off(ea.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            this._backoff.cancel(),
            this._cleanupSocket(),
            this._voiceQuality?.stop(),
            this._voiceQuality?.removeAllListeners(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            this._systemResponsiveness?.stop(),
            (this._systemResponsiveness = null),
            (this._noiseCancellationError = 0),
            this._voiceDuration?.stop(),
            (this._voiceDuration = null),
            this._videoQuality?.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._secureFramesState = null),
            this._localMediaSinkWantsManager?.reset(),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, W.isWeb)()) return !0;
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
        let r = U.Ay.getPacketDelay();
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
        let e = this._pings.slice(0, Math.min(this._pings.length, ef));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
    }
    getLastPing() {
        return this._pings[this._pings.length - 1]?.value;
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
        let e = this._connectCompletedTime > 0 ? (0, p.tB)() - this._connectCompletedTime : 0;
        return e > 0 ? e : 0;
    }
    getDurationSeconds() {
        return this.getDuration() / 1e3;
    }
    getVoiceDurationStats() {
        return this._voiceDuration?.getDurationStats() ?? null;
    }
    getPacketStats() {
        return this._voiceQuality?.getPacketStats();
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
        this.recordEvent({ c: 8, s: e }),
            this.logger.info(`RTC connection state: ${this.state} => ${e}`),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                Z.q.State,
                e,
                { hostname: this.hostname, channelId: this.trueChannelId, context: this.context },
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
        this._localMediaSinkWantsManager?.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        this._localMediaSinkWantsManager?.setPipOpen(e);
    }
    setClipRecordUser(e, t, n) {
        this._connection?.setClipRecordUser?.(e, t, n);
    }
    setNoiseCancellationEnabled(e) {
        this._numNoiseCancellationChanges++, this._voiceDuration?.setNoiseCancellationEnabled(e);
    }
    setSimulcastDebugOverride(e, t, n) {
        t === this.context &&
            (t === eu.x.DEFAULT
                ? this._localMediaSinkWantsManager?.setSimulcastDebugOverride(e, n)
                : this._goLiveQualityManager?.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        null == t ||
            (0, W.isAndroid)() ||
            (0, W.isIOS)() ||
            this._localMediaSinkWantsManager?.setVideoSize(e, t.width * t.height),
            this._goLiveQualityManager?.setVideoSize(e, t, n);
    }
    clearJoinVoiceId() {
        this.joinVoiceId = null;
    }
    setNextChannelId(e) {
        this.recordEvent({ c: 9 });
        let t = k.A.getChannel(this.channelId),
            n = t?.type;
        this.logger.info(`Updating channel: ${e}(${n})`), (this._nextChannelId = e), this.channelIds.add(e);
    }
    getNextChannelId() {
        return this._nextChannelId ?? this._channelId;
    }
    get channelId() {
        return this._channelId;
    }
    get trueServerId() {
        return this.streamServerId ?? this.guildId ?? this.channelId;
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
            U.Ay.supports(eu.O5.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"),
            0 !== this._supportedBandwidthEstimationExperiments.length)
        ) {
            let e = R.A.workerExperimentString();
            null != e && t.push(e);
        }
        let { enabled: n, dontEmitVolumeOnlySpeakingEvents: r } = A.A.getConfig({ location: "_chooseExperiments" });
        n && t.push("should_analyze_user_voice_volume"),
            r && t.push("dont_emit_volume_only_speaking_events"),
            t.push("keyframe_on_join"),
            b.A.getCurrentConfig({ location: "_chooseExperiments" }, { autoTrackExposure: !0 }).enabled &&
                t.push("network_aware_socket");
        let i = N.A.getCurrentConfig(
            { location: "_chooseExperiments" },
            { disable: !(0, W.isWindows)(), autoTrackExposure: !0 },
        );
        i.prewarm && t.push("prewarm_cuda_cache"),
            i.clear && t.push("clear_cuda_cache"),
            (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = k.A.getChannel(this.channelId),
                t = e?.type;
            this.logger.info(
                `Connecting to RTC server ${this.endpoint}, rtc-connection-id: ${this.getRTCConnectionId()}, channel: ${this.channelId}(${t})`,
            );
        }
        this.setState(eo.S7L.CONNECTING);
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
                    maxDaveProtocolVersion: U.Ay.getSupportedSecureFramesProtocolVersion(),
                    video: U.Ay.supports(eu.O5.VIDEO),
                    streamParameters: U.Ay.getVideoStreamParameters(this.context),
                }),
                    this.setState(eo.S7L.AUTHENTICATING);
            });
    }
    _handleDisconnect(e, t, n, r) {
        this.logger.info(`Disconnected from RTC server, clean: ${t}, code: ${n}, reason: ${r}, state: ${this.state}`),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (H.default.track(eo.HAw.VOICE_CONNECTION_SOCKET_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: n,
                    reason: r,
                }),
                (this._encountered_socket_failure = !0)),
            G.A.getRemoteDisconnectVoiceChannelId() === this.channelId && this._connection?.wasRemoteDisconnected();
        let i = "Force Close" !== r;
        if (i) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn(`Disconnect was not clean! reason=${r}. Reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
        }
        if (this.state !== eo.S7L.DISCONNECTED) {
            let e = this._videoQuality;
            if (null != e && this.context === eu.x.DEFAULT) {
                if ((e.stop(), this._sentVideo)) {
                    e.getOutboundStats().forEach((t) => {
                        (t.num_frames ?? 0) > 0 &&
                            H.default.track(eo.HAw.VIDEO_STREAM_ENDED, {
                                ...this._getAnalyticsProperties(),
                                app_hardware_acceleration_enabled: j.A.getAppHardwareAccelerationEnabled(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: this.userId,
                                reason: r,
                                participant_type: "sender",
                                guild_region: V.A.getRegion(this.hostname),
                                hostname: this.hostname,
                                hardware_enabled: U.Ay.getHardwareEncoding(),
                                ...t,
                                ...e.getNetworkStats(),
                                ...e.getCodecUsageStats("sender", this.userId),
                                device_performance_class: (0, S.A)(),
                            });
                    });
                    let t = e.getCameraDurationStats();
                    null != t &&
                        t.camera_enabled_duration > 0 &&
                        H.default.track(eo.HAw.VIDEO_CALL_ENDED, { ...t, media_session_id: this.getMediaSessionId() });
                }
                e.getInboundParticipants().forEach((t) => {
                    let n = e.getInboundStats(t);
                    (n?.num_frames ?? 0) > 0 &&
                        H.default.track(eo.HAw.VIDEO_STREAM_ENDED, {
                            ...this._getAnalyticsProperties(),
                            app_hardware_acceleration_enabled: j.A.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: t,
                            reason: r,
                            participant_type: "receiver",
                            guild_region: V.A.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: U.Ay.getHardwareEncoding(),
                            ...n,
                            ...e.getNetworkStats(),
                            ...e.getCodecUsageStats("receiver", t),
                        });
                });
            }
            let t = this.getMediaSessionId();
            U.Ay.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders)
                        throw Error("codec survey is not available");
                    H.default.track(eo.HAw.VOICE_CODEC_DETECTED, {
                        ...n,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: t,
                    });
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures({ recovered: !1, downgraded: !1 });
            let n = V.A.shouldIncludePreferredRegion() ? V.A.getPreferredRegion() : null,
                s = U.Ay.getSettings(),
                a = k.A.getChannel(this.channelId),
                o = O.A.getConnectionStats(this.getMediaEngineConnectionId())?.stats.rtp.outbound.find(
                    (e) => "audio" === e.type,
                )?.sampleRateMismatchPercent,
                l = {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    port: this.port,
                    protocol: this.protocol,
                    reconnect: i,
                    reason: r,
                    duration: this.getDuration(),
                    ...G.A.getUserVoiceSettingsStats(this.context),
                    ...this._voiceQuality?.getMosStats(),
                    ...this._voiceQuality?.getPacketStats(),
                    ...this._voiceQuality?.getBytesStats(),
                    ...this._voiceQuality?.getBufferStats(),
                    ...this._voiceQuality?.getNetworkStats(),
                    ...this._voiceQuality?.getSystemResourceStats(),
                    ...this._voiceQuality?.getFrameOpStats(),
                    ...this._voiceQuality?.getDurationStats(),
                    ...this._voiceQuality?.getTransportStats(),
                    ...this._voiceQuality?.getE2EEStats(),
                    ...this._voiceQuality?.getAudioDeviceStats(),
                    ...this._voiceQuality?.getAudioLevelStats(),
                    ...this._voiceDuration?.getDurationStats(),
                    ...C.A.getUsageStats(),
                    ...this.getAudioDeviceStates(),
                    ...this._systemResponsiveness?.getPttQueueLatencyStats(),
                    num_noise_cancellation_changes: this._numNoiseCancellationChanges,
                    media_session_id: this.getMediaSessionId(),
                    channel_bitrate: null != a ? a.bitrate : null,
                    cloudflare_best_region: n,
                    connect_count: this._connectCount,
                    ping_average: Math.round(this.getAveragePing()),
                    ping_bad_count: this._pingBadCount,
                    ping_timeout: this._pingTimeouts.length,
                    input_detected: this._inputDetected,
                    no_input_detected_notice: U.Ay.getNoInputDetectedNotice(),
                    audio_input_mode: s.mode,
                    automatic_audio_input_sensitivity_enabled: s.modeOptions.autoThreshold,
                    audio_input_sensitivity: s.modeOptions.threshold,
                    echo_cancellation_enabled: s.echoCancellation,
                    sidechain_compression_enabled: s.sidechainCompression,
                    noise_suppression_enabled: s.noiseSuppression,
                    noise_cancellation_enabled: s.noiseCancellation,
                    noise_canceller_error: this._noiseCancellationError,
                    automatic_gain_control_enabled: s.automaticGainControl,
                    voice_output_volume: s.outputVolume,
                    voice_input_volume: s.inputVolume,
                    encryption_mode: this._encryptionMode,
                    channel_count: this.channelIds.size,
                    device_performance_class: (0, S.A)(),
                    num_fast_udp_reconnects:
                        null != this._connection ? this._connection?.getNumFastUdpReconnects() : null,
                    parent_media_session_id: this.parentMediaSessionId,
                    audio_subsystem: U.Ay.getMediaEngine().getAudioSubsystem(),
                    audio_layer: U.Ay.getMediaEngine().getAudioLayer(),
                    automatic_audio_subsystem: s.automaticAudioSubsystem,
                    participant_type: this.getVoiceParticipantType(),
                    audio_capture_sample_rate_mismatch_percent: o,
                    krisp_sdk_version: U.Ay.getState().krispVersion,
                    secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                    secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                    secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                    vad_use_advanced_voice_activity: s.modeOptions.vadUseKrisp,
                    soundshare_experimental: U.Ay.getExperimentalSoundshare(),
                    join_voice_id: this.joinVoiceId,
                    bypass_system_input_processing: s.bypassSystemInputProcessing,
                    system_microphone_mode: U.Ay.getSystemMicrophoneMode(),
                    output_audio_route_type: x.A.getCurrentRouteType(),
                };
            Promise.all([
                (async () => (await this._systemResources?.getBatteryLevelStats()) ?? { batteryUsageRounded: null })(),
                w.A.getKrispModel(),
                U.Ay.getKrispEnableStats() ? U.Ay.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null),
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n, r] = e;
                H.default.track(eo.HAw.VOICE_DISCONNECT, {
                    ...l,
                    battery_usage: t,
                    krisp_nc_model: n,
                    duration_low_noise_detected_ms: r?.lowNoiseMs,
                    duration_medium_noise_detected_ms: r?.mediumNoiseMs,
                    duration_high_noise_detected_ms: r?.highNoiseMs,
                    duration_noise_cancellation_voice_detected_ms: r?.talkTimeMs,
                });
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
            this._voiceQuality?.stop(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._numNoiseCancellationChanges = 0),
            this._voiceDuration?.stop(),
            (this._voiceDuration = null),
            this._videoQuality?.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            this._localMediaSinkWantsManager?.reset(),
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
        this.setState(eo.S7L.DISCONNECTED, { willReconnect: i });
    }
    _handleResuming(e) {
        this._connection?.fastUdpReconnect(), this._connection?.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, s, a) {
        this.setState(eo.S7L.RTC_CONNECTING), (this.port = n), this._chooseExperiments(a ?? []);
        let o = D.e.getConfig({ location: "media_engine_connect" }).boostProcessPriority;
        0 === s.length &&
            s.push({ type: eu.mI.VIDEO, rid: "100", ssrc: i + 1, rtxSsrc: i + 2, quality: 100, active: !1 });
        let l = U.Ay.getMediaEngine(),
            u = M.A.getPersistentCodesEnabled(),
            c = P.default.getStaticAuthSessionId() ?? void 0,
            d = (0, p.tB)(),
            _ = l.connect(this.context, this.userId, {
                ssrc: i,
                address: t,
                port: n,
                modes: r,
                experiments: this._selectedExperiments,
                streamParameters: s,
                qosEnabled: U.Ay.getQoS(),
                signingKeyId: u ? c : void 0,
                boostProcessPriority: o,
                ...this.getExtraConnectionOptions(),
            }),
            m = (0, p.tB)() - d;
        (0, W.isWeb)() && !el.PF && K.A.captureMessage("Browser does not support Unified Plan"),
            _.setUseElectronVideo(l.supports(eu.O5.ELECTRON_VIDEO)),
            U.Ay.supports(eu.O5.IMAGE_QUALITY_MEASUREMENT) &&
                _.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
        let E = ["unk"];
        E.push("nvNewPresets"),
            this.context === eu.x.STREAM ? E.push("nvRelaxRc=250") : E.push("nvRelaxRc=75"),
            U.Ay.getUseVaapiEncoder() && E.push("vaapi"),
            this.context === eu.x.STREAM &&
                "streamer" === this.getVoiceParticipantType() &&
                (0, L.b)("handleReady").enabled &&
                E.push("useCaptureDeviceForEncode"),
            _.setVideoEncoderExperiments(E.join(",")),
            _.on(f.yq.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(Z.q.Speaking, eI(e), t);
            }),
            _.on(f.yq.NativeMuteChanged, (e) => {
                this.context === eu.x.DEFAULT && g.A.nativeMuteChanged(e);
            }),
            _.on(f.yq.Video, (e, t, n, r, i, s) => {
                this._handleVideoStreamId({
                    userId: eI(e),
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: r ?? 0,
                    rtxSsrc: i,
                    videoStreamParameters: s,
                }),
                    this.userId === e &&
                        (this.sendVideo(n ?? 0, r ?? 0, i ?? 0, s),
                        s?.forEach((t) => {
                            100 === t.quality &&
                                this.emit(
                                    Z.q.VideoSourceQualityChanged,
                                    this.guildId,
                                    this.channelId,
                                    eI(e),
                                    t.maxResolution,
                                    t.maxFrameRate,
                                    this.context,
                                );
                        }));
            }),
            _.on(f.yq.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager &&
                    (this._localMediaSinkWantsManager.setFirstFrameReceived(t),
                    this.emit(Z.q.Video, this.guildId, this.channelId, eI(e), n, this.streamServerId)),
                    null != this._goLiveQualityManager &&
                        (this._goLiveQualityManager.setFirstFrameReceived(t),
                        this.emit(Z.q.Video, this.guildId, this.channelId, eI(e), n, this.streamServerId));
            }),
            _.on(f.yq.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            _.on(f.yq.Connected, (r, i) => {
                if ((this.logger.info(`RTC connected to media server: ${t}:${n}`), e !== this._socket))
                    return void this.logger.warn("Socket mismatch, disconnecting");
                switch (
                    ((this._voiceQuality = new es.A(_)),
                    this._voiceQuality.start(),
                    this._voiceQuality.on(es.w.InputDeviceSampleRateChanged, (e) => {
                        h.h.dispatch({ type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate: e });
                    }),
                    (this._voiceQualityPeriodicStatsSequenceId = 0),
                    (this._voiceQualityPeriodicStatsInterval = setInterval(
                        this._handleVoiceQualityPeriodicsStats,
                        3e5,
                    )),
                    (this._systemResponsiveness = new et.A(_)),
                    this._systemResponsiveness.start(),
                    (this._systemResources = new ee.A()),
                    this._systemResources.setLastBattery(),
                    (this._noiseCancellationError = 0),
                    (this._voiceDuration = new ei.A(this.userId, _)),
                    this._voiceDuration.start(_.getSelfMute(), _.getSelfDeaf(), _.getVoiceFilterId()),
                    (this.protocol = r),
                    r)
                ) {
                    case "udp":
                        this.logger.info("Sending UDP info to RTC server.", i, this._selectedExperiments),
                            e.once(Q.yg.Encryption, (e, t) => {
                                _ === this._connection && (_.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case "webrtc":
                        this.logger.info("Sending local SDP to RTC server."),
                            e.once(Q.yg.SDP, this._handleSDP.bind(this)),
                            e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error("Unable to determine protocol.");
                        return;
                }
                this._backoff.succeed();
            }),
            _.on(f.yq.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    `The originally selected video encoder is not working, fallback to the other available encoders: ${n}`,
                ),
                    e.updateSession({ codecs: t });
            }),
            _.on(f.yq.VideoDecoderFallback, (t) => {
                let n = k.A.getChannel(this.channelId);
                if (n?.type === eo.rbe.GUILD_STAGE_VOICE) {
                    this._videoDecoderFallbackSuppressed ||
                        (this.logger.info("Suppressing video decoder fallback: stage channel"),
                        (this._videoDecoderFallbackSuppressed = !0));
                    return;
                }
                let r = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    `The originally selected video decoder is not working, fallback to the other available decoders: ${r}`,
                ),
                    e.updateSession({ codecs: t });
            }),
            _.on(f.yq.Error, (t) => {
                if (e !== this._socket) return;
                let n = V.A.shouldIncludePreferredRegion() ? V.A.getPreferredRegion() : null;
                this.logger.error(`Error occurred while connecting to RTC server: ${t}`),
                    H.default.track(eo.HAw.VOICE_CONNECTION_FAILURE, {
                        ...this._getAnalyticsProperties(),
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        error: t,
                        cloudflare_best_region: n,
                        connect_count: this._connectCount,
                        join_voice_id: this.joinVoiceId,
                    });
            }),
            _.on(f.yq.ConnectionStateChange, (t) => {
                if ((this.logger.info(`RTC media connection state change: ${this.state} => ${t}`), e !== this._socket))
                    return;
                let n = this.state;
                switch (t) {
                    case eu.$I.DISCONNECTED:
                        this.setState(eo.S7L.RTC_DISCONNECTED);
                        break;
                    case eu.$I.CONNECTING:
                        this.setState(eo.S7L.RTC_CONNECTING);
                        break;
                    case eu.$I.CONNECTED:
                        this.setState(eo.S7L.RTC_CONNECTED);
                        break;
                    case eu.$I.NO_ROUTE:
                        this.setState(eo.S7L.NO_ROUTE);
                        break;
                    case eu.$I.ICE_CHECKING:
                        this.setState(eo.S7L.ICE_CHECKING);
                        break;
                    case eu.$I.DTLS_CONNECTING:
                        this.setState(eo.S7L.DTLS_CONNECTING);
                }
                if (
                    (n === eo.S7L.RTC_CONNECTING && this.state === eo.S7L.RTC_DISCONNECTED
                        ? this.reconnect()
                        : this.state === eo.S7L.NO_ROUTE &&
                          (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)),
                    this.state === eo.S7L.RTC_CONNECTED)
                ) {
                    let e = V.A.shouldIncludePreferredRegion() ? V.A.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = U.Ay.getSettings(),
                            n = this._getAnalyticsProperties();
                        H.default.track(eo.HAw.VOICE_CONNECTION_SUCCESS, {
                            ...n,
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            cloudflare_best_region: e,
                            connect_time: (0, p.tB)() - (this._connected ? this._connectStartTime : this._createdTime),
                            connect_count: this._connectCount,
                            audio_subsystem: U.Ay.getMediaEngine().getAudioSubsystem(),
                            audio_layer: U.Ay.getMediaEngine().getAudioLayer(),
                            automatic_audio_subsystem: t.automaticAudioSubsystem,
                            media_session_id: this.getMediaSessionId(),
                            participant_type: this.getVoiceParticipantType(),
                            join_voice_id: this.joinVoiceId,
                            is_camera_enabled:
                                U.Ay.getMediaEngine().getVideoInputDeviceId() !== eu.qe && _.context === eu.x.DEFAULT,
                            ...this.stateHistory.getVoiceConnectionSuccessStats(),
                        });
                        let r = performance.now(),
                            i = (e, t) => (null == e || null == t ? null : e - t);
                        H.default.track(eo.HAw.VOICE_CONNECTION_TTC_COLLECTED, {
                            rtc_connection_id: n.rtc_connection_id,
                            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
                            time_2_media_engine_connect: m,
                            time_3_media_engine_create_native_connection: _.transportInfo?.createConnectionTime,
                            time_4_media_engine_connect_to_socket: _.transportInfo?.connectTime,
                            time_5_scheduling_connected_callback: i(
                                this._connection?.onConnectCallbackAt,
                                this._connection?.transportInfo?.connectCallbackScheduledMs,
                            ),
                            time_6_state_connected_to_end_measure: i(r, this._connection?.onConnectCallbackAt),
                            connect_count: this._connectCount,
                            rtc_connecting_native_connect: i(
                                this._connection?.onConnectCallbackAt,
                                this._connection?.beginInitializeAt,
                            ),
                            rtc_connecting_native_codecs: i(
                                this._connection?.onVideoCodecsCallbackAt,
                                this._connection?.onConnectCallbackAt,
                            ),
                            rtc_connecting_native_crypto_modes: i(
                                this._connection?.onEncryptionModesCallbackAt,
                                this._connection?.onVideoCodecsCallbackAt,
                            ),
                        });
                    }
                    this._localMediaSinkWantsManager?.setConnection(_),
                        this._goLiveQualityManager?.update(),
                        (this._connectCompletedTime = (0, p.tB)()),
                        (this._connected = !0),
                        (this._connecting = !1),
                        (this._encountered_socket_failure = !1);
                } else n === eo.S7L.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            _.on(f.yq.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(Z.q.SecureFramesUpdate);
            }),
            _.on(f.yq.Ping, this._handlePing.bind(this)),
            _.on(f.yq.PingTimeout, this._handlePingTimeout.bind(this)),
            _.on(f.yq.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            _.on(f.yq.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            _.on(f.yq.Stats, q.A.create()),
            _.on(f.yq.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            _.on(f.yq.UsersMerged, this.handleUsersMerged.bind(this)),
            _.on(f.yq.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            _.on(f.yq.MLSFailure, this._handleMLSFailure.bind(this)),
            _.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = _),
            (this._mediaEngineConnectionId = _.mediaEngineConnectionId);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        null != i &&
            this.userId !== t &&
            (r !== eu.ME.NONE && i.createUser(t, n), this._localMediaSinkWantsManager?.setAudioSSRC(t, n));
    }
    handleFlags(e, t) {
        this.emit(Z.q.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(Z.q.Platform, e, t, this.channelId);
    }
    handleUsersMerged(e) {
        this.emit(
            Z.q.UsersMerged,
            e.map((e) => e.id),
            this.context,
        );
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new er.X(this._connection)),
                this._videoQuality.updateCallUserIdsCount(this._userIds.size),
                this._videoQuality.start();
            let {
                featureEnabled: e,
                windowLength: t,
                allowedPoorFpsRatio: n,
                fpsThreshold: r,
                backoffTimeSec: i,
            } = en.V.defaultConfig;
            if (e) {
                (this._videoHealthManager = new en.V(t, n, r, i)),
                    null != this._localMediaSinkWantsManager &&
                        (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    this._localMediaSinkWantsManager?.shouldReceiveFromUser(e) &&
                        this._videoHealthManager?.updateFps(e, t, n);
                };
                this._videoQuality.on(er.F.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        let { userId: t, streamId: n, videoSsrc: r, videoStreamParameters: i } = e;
        if (
            (this.emit(Z.q.Video, this.guildId, this.channelId, t, n, this.streamServerId),
            null != n &&
                null == this.getOrCreateVideoQuality() &&
                this.logger.error("_handleVideoStreamId: Unable to create videoQuality."),
            null != this._videoQuality &&
                this.userId === t &&
                i.forEach((e) => {
                    let t = e.ssrc ?? 0;
                    t > 0 && !0 === e.active && this._videoQuality?.setOutboundSsrc(t);
                }),
            this.userId !== t)
        ) {
            let e = 0 === r && null === n;
            (!e || (e && this._videoQuality?.getInboundParticipants().includes(t))) &&
                (this._videoQuality?.setInboundUser(t, r), this._videoHealthManager?.createUser(t));
        }
        null != this._connection &&
            this.userId !== t &&
            (null != this._localMediaSinkWantsManager
                ? this._localMediaSinkWantsManager.setStreamId(t, n)
                : null != this._goLiveQualityManager &&
                  this._goLiveQualityManager.getUserID() === t &&
                  this._goLiveQualityManager?.setStreamId(n));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) return void this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
            n.setUserVideoDisabled(eI(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, p.tB)() - this._connectStartTime;
        H.default.track(eo.HAw.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
            ...this._getAnalyticsProperties(),
            number_of_users: e,
            duration_ms: t,
        });
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
                    e.push({ type: eu.mI.VIDEO, rid: "100", ssrc: r, rtxSsrc: r + 1, quality: 100, active: r > 0 }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                let e = [];
                for (let t of i)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({ ssrc: t.ssrc, quality: t.quality, active: t.active ?? !0 });
                this._goLiveQualityManager?.setUserID(t),
                    this._goLiveQualityManager?.updateAudioAndVideoStreamInfo(n, e);
            }
            i?.forEach((e) => {
                100 === e.quality &&
                    this.emit(
                        Z.q.VideoSourceQualityChanged,
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
        U.Ay.supports(eu.O5.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (this._pings.push({ time: Date.now(), value: e }); this._pings.length >= e_; ) this._pings.shift();
            e > ep && this._pingBadCount++, this.emit(Z.q.Ping, this._pings, this.quality);
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
        (this._outboundLossRate = e), this.emit(Z.q.OutboundLossRate, e);
    }
    _getAnalyticsProperties() {
        let e = k.A.getChannel(this.channelId),
            t = e?.type;
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
        e.forEach((e) => {
            this._userIds.add(e), this._connection?.createUser(e, 0);
        }),
            this.emit(Z.q.ClientConnect, e),
            this._videoQuality?.updateCallUserIdsCount(this._userIds.size),
            this._goLiveQualityManager?.updateCallUserIds(this._userIds),
            this._localMediaSinkWantsManager?.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        let t = this._videoQuality;
        if (null != t && this.context === eu.x.DEFAULT) {
            let n = t.getInboundStats(e),
                r = n?.num_frames ?? 0;
            null != n &&
                r > 0 &&
                (H.default.track(eo.HAw.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    app_hardware_acceleration_enabled: j.A.getAppHardwareAccelerationEnabled(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: "User disconnected",
                    participant_type: "receiver",
                    guild_region: V.A.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: U.Ay.getHardwareEncoding(),
                    ...n,
                    ...t.getNetworkStats(),
                    ...t.getCodecUsageStats("receiver", e),
                }),
                t.destroyUser(e),
                this._videoHealthManager?.deleteUser(e));
        }
        let n = this._connection;
        null != n && n.destroyUser(e),
            this._localMediaSinkWantsManager?.destroyUser(e),
            this._userIds.delete(e),
            this.emit(Z.q.ClientDisconnect, e),
            this._goLiveQualityManager?.updateCallUserIds(this._userIds),
            this._localMediaSinkWantsManager?.updateCallUserIds(this._userIds),
            this._videoQuality?.updateCallUserIdsCount(this._userIds.size),
            1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, p.tB)());
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
            this.logger.info(`Setting media-session-id: ${e} for rtc-connection-id: ${this.getRTCConnectionId()}`);
        let t = T.A.getRawThermalState();
        H.default.track(eo.HAw.MEDIA_SESSION_JOINED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            raw_thermal_state: t,
        }),
            h.h.dispatch({
                type: "MEDIA_SESSION_JOINED",
                mediaSessionId: this.getMediaSessionId(),
                context: this.context,
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info(`Remote media sink wants: ${JSON.stringify(e)}`),
            (this._remoteVideoSinkWants = e),
            h.h.dispatch({
                type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS",
                context: this.context,
                wants: e,
                channelId: this.channelId,
                guildId: this.guildId,
                userId: this.userId,
            }),
            t?.setRemoteVideoSinkWants(e);
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
        let t = v.A.getMediaEngineExperiments(e);
        null !== t && 0 !== t.length && this._connection?.setBandwidthEstimationExperiments(t);
    }
    _trackSecureFrameTransition(e) {
        let t = this._secureFramesTransitionStates.get(e);
        if (null == t) return;
        let n = this._secureFramesTransitionStates.size;
        this._secureFramesTransitionStates.delete(e);
        let r = (e, t) => (null != e && null != t ? e - t : void 0);
        H.default.track(eo.HAw.SECURE_FRAMES_TRANSITION, {
            ...this._getAnalyticsProperties(),
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
            time_since_creation: (0, p.tB)() - t.creationTime,
            users_added_count: t.usersAdded,
            users_removed_count: t.usersRemoved,
            roster_size_after: t.rosterSizeAfter,
            init_to_finish_duration: r(t.executeFinishedTime, t.initReceivedTime),
        }),
            e === eA && this._trackRemainingSecureFrameTransitions();
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            (e.incomplete = !0), this._trackSecureFrameTransition(t);
        });
    }
    _storeSecureFrameNextTransitionData(e) {
        return (
            null == this._secureFramesNextTransitionState &&
                (this._secureFramesNextTransitionState = { creationTime: (0, p.tB)() }),
            (this._secureFramesNextTransitionState = { ...this._secureFramesNextTransitionState, ...e })
        );
    }
    _storeSecureFrameTransitionData(e, t) {
        let n = this._secureFramesTransitionStates.get(e);
        null == n &&
            ((n = this._storeSecureFrameNextTransitionData({})), (this._secureFramesNextTransitionState = void 0)),
            this._secureFramesTransitionStates.set(e, { ...n, ...t }),
            (this._secureFramesMaxConcurrentTransitions = Math.max(
                this._secureFramesMaxConcurrentTransitions,
                this._secureFramesTransitionStates.size,
            ));
    }
    _handleSecureFramesInit(e) {
        let t = (0, p.tB)();
        this.recordEvent({ c: 11, v: e }),
            e > 0
                ? (this.logger.info(`DAVE protocol init with protocol version: ${e}`),
                  (this._mlsInitReceivedTime = t),
                  this._connection?.prepareSecureFramesEpoch(eg, e, this.trueChannelId),
                  this._sendMLSKeyPackage(),
                  this._storeSecureFrameNextTransitionData({
                      initReceivedTime: t,
                      initFinishedTime: (0, p.tB)(),
                      protocolVersion: e,
                  }),
                  this.recordEvent({ c: 10 }))
                : this._connection?.prepareSecureFramesTransition(eA, e, () => {
                      let n = !1;
                      try {
                          this._connection?.executeSecureFramesTransition(eA);
                      } catch (e) {
                          (n = !0), K.A.captureException(e);
                      }
                      this._storeSecureFrameTransitionData(eA, {
                          initReceivedTime: t,
                          initFinishedTime: (0, p.tB)(),
                          protocolVersion: e,
                          executeError: n,
                      }),
                          this._trackSecureFrameTransition(eA);
                  });
    }
    _handleSecureFramesRosterChange(e, t) {
        let n = [],
            r = 0,
            i = 0;
        Object.entries(e).forEach((e) => {
            let [t, s] = e;
            n.push(eI(t)),
                null == s || 0 === s.byteLength
                    ? (i++, this._secureFramesRosterMap.delete(eI(t)))
                    : (r++, this._secureFramesRosterMap.set(eI(t), s));
        }),
            this._storeSecureFrameTransitionData(t, {
                usersAdded: r,
                usersRemoved: i,
                rosterSizeAfter: this._secureFramesRosterMap.size,
            }),
            this.emit(Z.q.RosterMapUpdate, n);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        this.logger.info(`Preparing DAVE protocol transition: ${e}, protocol version: ${t}`),
            this._secureFramesTransitionPrepareCount++;
        let n = (0, p.tB)();
        0 === t && this._trackMLSFailures({ recovered: !0, downgraded: !0 }),
            this._connection?.prepareSecureFramesTransition(e, t, () => {
                this._maybeSendSecureFramesTransitionReady(e),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: t,
                        prepareReceivedTime: n,
                        prepareFinishedTime: (0, p.tB)(),
                    });
            });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        this.logger.info(`Preparing DAVE protocol epoch: ${e}, protocol version: ${t}`);
        let n = e.toString();
        this._connection?.prepareSecureFramesEpoch(n, t, this.trueChannelId),
            n === eg &&
                ((this._mlsInitReceivedTime = (0, p.tB)()), this._sendMLSKeyPackage(), this.recordEvent({ c: 10 }));
    }
    _sendMLSKeyPackage() {
        this._connection?.getMLSKeyPackage((e) => {
            this.logger.info("Got MLS key package, sending to RTC server"), this._socket?.sendMLSKeyPackage(e);
        });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        e !== eA &&
            (this.logger.info(`Sending DAVE protocol ready for transition ID ${e}`),
            this._socket?.secureFramesReadyForTransition(e),
            this._storeSecureFrameTransitionData(e, { readyTime: (0, p.tB)() }));
    }
    _handleSecureFramesExecuteTransition(e) {
        this.logger.info(`Executing DAVE protocol transition: ${e}`), this._secureFramesTransitionExecuteCount++;
        let t = (0, p.tB)(),
            n = !1;
        try {
            this._connection?.executeSecureFramesTransition(e);
        } catch (e) {
            (n = !0), K.A.captureException(e);
        }
        this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, p.tB)(),
            executeError: n,
        }),
            this._trackSecureFrameTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        this.logger.info("Received MLS external sender package"), this._connection?.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        let n = (0, p.tB)();
        this.logger.info("Received MLS proposals"),
            this._connection?.processMLSProposals(t, (r) => {
                let i = (0, p.tB)();
                this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(r);
                let s =
                    this._secureFramesNextTransitionState ??
                    this._storeSecureFrameNextTransitionData({
                        firstProposalsReceivedTime: n,
                        firstProposalsFinishedTime: i,
                    });
                (s.lastProposalsReceivedTime = n),
                    (s.lastProposalsFinishedTime = i),
                    (s.totalProposalsSize = (s.totalProposalsSize ?? 0) + t.byteLength),
                    (s.totalCommitWelcomeSize = (s.totalCommitWelcomeSize ?? 0) + r.byteLength);
            });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        this.logger.info(`Received MLS commit for transition ID ${e}`);
        let n = (0, p.tB)();
        this._connection?.prepareMLSCommitTransition(e, t, (r, i, s) => {
            r
                ? (this._trackMLSFailures({ recovered: !0, downgraded: !1 }),
                  (this._mlsSessionResetStartTime = void 0),
                  this._handleSecureFramesRosterChange(s, e),
                  this._maybeSendSecureFramesTransitionReady(e))
                : (this.logger.warn(`Failed to process MLS commit for transition ID ${e}`),
                  (this._mlsSessionResetStartTime = (0, p.tB)()),
                  this._flagMLSInvalidCommitWelcome(e),
                  this._handleSecureFramesInit(i)),
                this._storeSecureFrameTransitionData(e, {
                    protocolVersion: i,
                    commitReceivedTime: n,
                    commitFinishedTime: (0, p.tB)(),
                    commitSize: t.byteLength,
                    commitError: !r,
                });
        });
    }
    _handleMLSWelcome(e, t) {
        this.logger.info(`Received MLS welcome for transition ID ${e}`);
        let n = (0, p.tB)();
        this._connection?.processMLSWelcome(e, t, (r, i, s) => {
            r
                ? (this._trackMLSFailures({ recovered: !0, downgraded: !1 }),
                  (this._mlsSessionResetStartTime = void 0),
                  this._handleSecureFramesRosterChange(s, e),
                  this._maybeSendSecureFramesTransitionReady(e))
                : ((this._mlsSessionResetStartTime = (0, p.tB)()),
                  this._flagMLSInvalidCommitWelcome(e),
                  this._sendMLSKeyPackage()),
                this._storeSecureFrameTransitionData(e, {
                    protocolVersion: i,
                    welcomeReceivedTime: n,
                    welcomeFinishedTime: (0, p.tB)(),
                    welcomeSize: t.byteLength,
                    welcomeError: !r,
                });
        });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        this._connection?.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        this.logger.info(`Flagging invalid MLS commit/welcome for transition ID ${e}`),
            this._socket?.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, t) {
        let n = (0, p.tB)(),
            r = this._nextFailureId++;
        this.recordEvent({ c: 3, i: r }),
            this._mlsFailures.push({
                id: r,
                source: e,
                reason: t,
                count: 1,
                countDuringReset: +(null != this._mlsSessionResetStartTime),
                firstOccurrence: n,
                timeSinceInit: null != this._mlsInitReceivedTime ? n - this._mlsInitReceivedTime : void 0,
                eventLog: ev(),
            }),
            e.includes("GetPersistedKeyPair")
                ? m.A.show({ title: ec.intl.string(ec.t.fJUioH), body: ec.intl.string(ec.t.CQLWvo) })
                : this._alertMLSFailureDebouced(e, t);
    }
    _trackMLSFailures(e) {
        let { recovered: t, downgraded: n } = e,
            r = (0, p.tB)(),
            i = this.getMediaSessionId(),
            s = null != this._mlsSessionResetStartTime ? r - this._mlsSessionResetStartTime : void 0;
        for (let {
            id: e,
            source: a,
            reason: o,
            count: l,
            countDuringReset: u,
            firstOccurrence: c,
            timeSinceInit: d,
            eventLog: _,
        } of this._mlsFailures)
            H.default.track(eo.HAw.MLS_FAILURES, {
                ...this._getAnalyticsProperties(),
                media_session_id: i,
                parent_media_session_id: this.parentMediaSessionId,
                failure_id: e,
                failure_time: c - this._createdTime,
                failure_source: a,
                failure_reason: o,
                failure_count: l,
                failure_was_recovered: t,
                failure_cleared_by_downgrade: n,
                time_since_first_occurrence: r - c,
                time_since_last_reset: s,
                failure_count_during_reset: u,
                time_since_init: d,
                event_history: _,
                connection_serial: this._connectionSerial,
            });
        this._mlsFailures = [];
    }
    _alertMLSFailure(e, t) {
        let n = B.default.getCurrentUser();
        (n?.isStaff() || n?.isStaffPersonal()) &&
            m.A.show({
                title: `MLS Error in ${e}`,
                body: `Error: ${t}! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!`,
            });
    }
    _alertMLSFailureDebouced = a()(this._alertMLSFailure, 100);
    _handleNetworkOnline = () => {
        this.expeditedHeartbeat(5e3, "network detected online.");
    };
    _handleNetworkOffline = () => {
        this.expeditedHeartbeat(15e3, "network detected offline.", !1);
    };
    _handleNoRoute = () => {
        this._socket?.noRoute();
    };
    _handlePowerResume = () => {
        this.expeditedHeartbeat(5e3, "power monitor resumed");
    };
    _handleVoiceQualityPeriodicsStats = () => {
        if (null != this._voiceQuality) {
            let e = this._voiceQuality.getPeriodicStats();
            if (this.shouldReportPeriodicStats(e))
                for (let t of e)
                    H.default.track(eo.HAw.VOICE_QUALITY_PERIODIC_STATS, {
                        ...this._getAnalyticsProperties(),
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
                    });
            this._voiceQualityPeriodicStatsSequenceId++;
        }
    };
    getExtraConnectionOptions() {
        return {};
    }
    getAudioDeviceStates = () => ({
        input_device: this.getInputDeviceName(),
        input_device_count: Object.keys(U.Ay.getInputDevices()).length,
        output_device: this.getOutputDeviceName(),
        output_device_count: Object.keys(U.Ay.getOutputDevices()).length,
    });
    getVideoDeviceStates = () => ({
        camera_device: this.getVideoDeviceName(),
        camera_device_count: Object.keys(U.Ay.getVideoDevices()).length,
    });
    _trackVoiceConnectionConnecting = () => {
        let e = k.A.getChannel(this.channelId),
            t = e?.type;
        H.default.track(eo.HAw.VOICE_CONNECTION_CONNECTING, {
            ...this.getAudioDeviceStates(),
            ...this.getVideoDeviceStates(),
            guild_id: this.guildId,
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            hostname: this.hostname,
            connect_count: this._connectCount,
            context: this.context,
            channel_type: t,
            participant_type: this.getVoiceParticipantType(),
            is_muted: U.Ay.isMute(),
            join_voice_id: this.joinVoiceId,
            connection_serial: this._connectionSerial,
        });
    };
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        return null != t && l().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        let e = U.Ay.getInputDeviceId();
        return U.Ay.getInputDevices()[e]?.name;
    }
    getOutputDeviceName() {
        let e = U.Ay.getOutputDeviceId();
        return U.Ay.getOutputDevices()[e]?.name;
    }
    getVideoDeviceName() {
        let e = U.Ay.getVideoDeviceId();
        return U.Ay.getVideoDevices()[e]?.name;
    }
    getInputDeviceSampleRate() {
        return this._voiceQuality?.getAudioDeviceStats().input_device_session_sample_rate ?? null;
    }
    incomingVideoEnabledChanged = (e) => {
        this._goLiveQualityManager?.onIncomingVideoEnabled(e), this._videoQuality?.setOcclusionIncomingVideoEnabled(e);
    };
    windowVisibilityChanged = (e) => {
        this._videoQuality?.setWindowOcclusionState(!e);
    };
}
