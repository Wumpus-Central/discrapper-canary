"use strict";
n.d(t, { A: () => ts }), n(321073);
var i,
    r,
    a,
    s,
    l,
    o = n(824120),
    d = n.n(o),
    c = n(111956),
    u = n.n(c),
    _ = n(181370),
    E = n.n(_),
    A = n(132500),
    h = n(158390),
    I = n(665260),
    f = n(972347),
    p = n(459838),
    T = n(499979),
    m = n(228366),
    g = n(157559),
    S = n(233545),
    N = n(894539),
    C = n(124838);
let R = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-ios-video-stabilization",
    defaultConfig: { mode: "off" },
    variations: { 1: { mode: "standard" }, 2: { mode: "low_latency" } },
});
var O = n(626584),
    L = n(655087),
    D = n(680725),
    y = n(487329),
    v = n(451988),
    b =
        (((i = {}).RequestedSSRCsUpdate = "requested-ssrcs-update"),
        (i.RequestedStreamsUpdate = "requested-streams-update"),
        i);
class M extends f.A {
    logger;
    userId;
    streamId = null;
    resolutionWidth = 0;
    resolutionHeight = 0;
    zoom = 1;
    videoStream;
    audioSSRC = 0;
    incomingVideoEnabled = !0;
    delayedCall;
    constructor() {
        super(),
            (this.logger = new O.A("GoLiveQualityManager")),
            this.logger.enableNativeLogger(!0),
            (this.delayedCall = new v.J_(500, () => {
                this.update();
            }));
    }
    delayedUpdate = () => {
        this.delayedCall.delay();
    };
    setUserID(e) {
        this.userId = e;
    }
    getUserID() {
        return this.userId;
    }
    updateAudioAndVideoStreamInfo(e, t) {
        this.audioSSRC = e;
        let n = t.find((e) => e.active);
        (this.videoStream = n), this.update();
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e &&
            (this.logger.info("onIncomingVideoEnabled", e), (this.incomingVideoEnabled = e), this.update());
    }
    update() {
        null != this.userId &&
            null != this.videoStream &&
            (this.incomingVideoEnabled ? this.requestStream() : this.stopStream());
    }
    requestStream() {
        null != this.videoStream && this.request({ [this.videoStream.ssrc]: 100 }, [this.videoStream.ssrc]);
    }
    stopStream() {
        null != this.videoStream && this.request({ [this.videoStream.ssrc]: 0 }, []);
    }
    request(e, t) {
        void 0 !== this.userId &&
            (t.forEach((t) => {
                null == e.pixelCounts && (e.pixelCounts = {}),
                    e[t] > 0 &&
                        (e.pixelCounts[t] = Math.floor(
                            this.resolutionWidth * this.resolutionHeight * this.zoom * this.zoom,
                        ));
            }),
            this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, t),
            this.emit("requested-streams-update", e));
    }
    setVideoSize(e, t, n) {
        this.streamId === e &&
            (null != t && ((this.resolutionWidth = t.width), (this.resolutionHeight = t.height)),
            null != n && (this.zoom = n),
            this.delayedUpdate());
    }
    setStreamId(e) {
        this.streamId !== e &&
            ((this.streamId = e),
            (this.resolutionWidth = 0),
            (this.resolutionHeight = 0),
            (this.zoom = 1),
            this.delayedUpdate());
    }
}
var P = n(945810);
let U = (0, P.mj)({
        name: "2026-05-av1-bitrate-tuning",
        kind: "user",
        defaultConfig: { bitrate: 35e5 },
        variations: { 1: { bitrate: 3e6 }, 2: { bitrate: 25e5 } },
    }),
    w = (0, n(600975).C)({
        kind: "user",
        id: "2024-06_rtc_pacer__simulcast",
        label: "RTC Pacer & Golive Simulcast",
        defaultConfig: {
            enabled: !0,
            fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
            simulcastEnabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Golive Simulcast without prober 720p@500k",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
                    simulcastEnabled: !0,
                },
            },
            {
                id: 2,
                label: "Golive Simulcast 720p@500k",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
                    simulcastEnabled: !0,
                },
            },
            {
                id: 3,
                label: "Golive with pacing",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer",
                    simulcastEnabled: !1,
                },
            },
            {
                id: 4,
                label: "Golive with pacing and probing",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
                    simulcastEnabled: !1,
                },
            },
            {
                id: 5,
                label: "Golive Simulcast 720p@750k",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k",
                    simulcastEnabled: !0,
                },
            },
            {
                id: 6,
                label: "Golive Simulcast 720p@1000k",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k",
                    simulcastEnabled: !0,
                },
            },
        ],
    }),
    G = {
        getConfig(e, t) {
            let n = w.getCurrentConfig({ location: "e1c55b_1" }, { autoTrackExposure: e });
            return this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) || (n.enabled = !1), n;
        },
        supportsBandwidthEstimationExperimentFullname(e, t) {
            let n = this.getMediaEngineExperiments(e);
            if (null === n) return !1;
            for (let e of n) if (!t.includes(e)) return !1;
            return !0;
        },
        getMediaEngineExperiments(e) {
            let t = e.split("/");
            return 3 !== t.length || "bandwidth_estimation" !== t[0]
                ? null
                : t[1].split(",").filter((e) => 0 !== e.length);
        },
    },
    x = (0, P.mj)({
        name: "2026-04-browser-transceiver-padding-removal",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var k = n(835498),
    F = n(624694),
    V = n(731854);
let B = (0, P.mj)({
        name: "2026-02-process-boost-on-voice",
        kind: "user",
        defaultConfig: { processPriority: V.E6.HIGH, threadPriorityConfiguration: 0 },
        variations: {
            1: { processPriority: V.E6.NORMAL, threadPriorityConfiguration: 0 },
            2: { processPriority: V.E6.NORMAL, threadPriorityConfiguration: 1 },
            3: { processPriority: V.E6.NORMAL, threadPriorityConfiguration: 2 },
            4: { processPriority: V.E6.NORMAL, threadPriorityConfiguration: 3 },
        },
    }),
    H = (0, P.mj)({
        name: "2026-06-server-ladder",
        kind: "user",
        defaultConfig: { bitrate: 9e6, enabled: !1 },
        variations: { 1: { bitrate: 35e5, enabled: !0 } },
    });
var j = n(559633),
    W = n(714763);
n(17928);
var Y = n(280450);
let K = "2026-03-surface-direct-renderer",
    $ = (0, P.mj)({
        kind: "user",
        name: K,
        defaultConfig: { enableSurfaceDirectRenderer: !1 },
        variations: { 1: { enableSurfaceDirectRenderer: !0 } },
    });
var z = n(53857),
    q = n(734057),
    Z = n(71393),
    X = n(451409),
    Q = n(763827),
    J = n(412780),
    ee = n(873985),
    et = n(287809),
    en = n(174459),
    ei = n(353835),
    er = n(209489),
    ea = n(723702),
    es = n(38405),
    el = n(998218),
    eo = n(77729),
    ed = n(735438),
    ec = n.n(ed);
let eu = [];
class e_ {
    bytes = {};
    static create() {
        let e = new e_();
        return eu.push(e), e.record;
    }
    record = (e) => {
        if (null != e) {
            for (let t in e.rtp.inbound)
                for (let n of e.rtp.inbound[t]) {
                    let e = `inbound-${t}-${n.type}`;
                    e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = n.bytesReceived);
                }
            for (let t of e.rtp.outbound) {
                let e = `outbound-${t.type}`;
                e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = t.bytesSent);
            }
        }
    };
    getTotalBytes() {
        return ec().sum(Object.values(this.bytes));
    }
}
var eE = n(507821),
    eA = n(652215);
class eh {
    current = null;
    history = [];
    constructor(e) {
        null != e && this.update(e);
    }
    reset(e) {
        (this.current = null), (this.history = []), null != e && this.update(e);
    }
    update(e) {
        this.current !== e && ((this.current = e), this.history.push({ state: e, startTime: (0, T.tB)() }));
    }
    getVoiceConnectionSuccessStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, T.tB)(),
            t = this.getStateDurations(e);
        function n(e) {
            return ec().sumBy(t, (t) => (t.state === e ? t.durationMs : 0));
        }
        return {
            state_awaiting_endpoint_ms: n(eA.S7L.AWAITING_ENDPOINT),
            state_authenticating_ms: n(eA.S7L.AUTHENTICATING),
            state_connecting_ms: n(eA.S7L.CONNECTING),
            state_disconnected_ms: n(eA.S7L.DISCONNECTED),
            state_ice_checking_ms: n(eA.S7L.ICE_CHECKING),
            state_no_route_ms: n(eA.S7L.NO_ROUTE),
            state_rtc_connecting_ms: n(eA.S7L.RTC_CONNECTING),
            state_rtc_disconnected_ms: n(eA.S7L.RTC_DISCONNECTED),
        };
    }
    getStateDurations(e) {
        if (0 === this.history.length) return [];
        let t = (function (e, t) {
                if (e.length < 2) return [];
                let n = [],
                    i = e[0];
                for (let r = 1; r < e.length; r++) {
                    let a = e[r];
                    n.push(t(i, a)), (i = a);
                }
                return n;
            })(this.history, (e, t) => ({ state: e.state, durationMs: t.startTime - e.startTime })),
            n = () => {
                let t = ec().last(this.history);
                return { state: t.state, durationMs: e - t.startTime };
            };
        return t.push(n()), t;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(938796);
var eI = n(284009),
    ef = n.n(eI),
    ep = n(111162),
    eT = n(927813);
function em() {}
let eg = 20 * eT.A.Millis.SECOND,
    eS = +eT.A.Millis.MINUTE,
    eN = 5 * eT.A.Millis.SECOND;
function eC(e) {
    return e.map((e) => ({
        name: e.name,
        type: e.type,
        priority: 1e3 * e.priority,
        payload_type: e.payloadType,
        rtx_payload_type: e.rtxPayloadType,
        encode: e.encode,
        decode: e.decode,
    }));
}
function eR(e) {
    return e?.map((e) => ({
        type: e.type,
        rid: e.rid,
        ssrc: e.ssrc,
        active: e.active,
        quality: e.quality,
        rtx_ssrc: e.rtxSsrc,
        max_bitrate: e.maxBitrate,
        max_framerate: e.maxFrameRate,
        max_resolution:
            null != e.maxResolution
                ? { type: e.maxResolution.type, width: e.maxResolution.width, height: e.maxResolution.height }
                : void 0,
    }));
}
function eO(e) {
    return (
        e?.map((e) => {
            var t;
            return {
                type:
                    "audio" === (t = e.type)
                        ? V.mI.AUDIO
                        : "test" === t
                          ? V.mI.TEST
                          : "screen" === t
                            ? V.mI.SCREEN
                            : V.mI.VIDEO,
                rid: e.rid,
                ssrc: e.ssrc,
                rtxSsrc: e.rtx_ssrc,
                active: e.active,
                quality: e.quality,
                maxBitrate: e.max_bitrate,
                maxFrameRate: e.max_framerate,
                maxResolution:
                    null != e.max_resolution
                        ? {
                              type: e.max_resolution.type,
                              width: e.max_resolution.width,
                              height: e.max_resolution.height,
                          }
                        : void 0,
            };
        }) ?? []
    );
}
var eL =
    (((r = {}).Connecting = "connecting"),
    (r.Connect = "connect"),
    (r.Disconnect = "disconnect"),
    (r.Resuming = "resuming"),
    (r.Ready = "ready"),
    (r.Speaking = "speaking"),
    (r.Video = "video"),
    (r.Ping = "ping"),
    (r.ClientConnect = "client-connect"),
    (r.ClientDisconnect = "client-disconnect"),
    (r.Codecs = "codecs"),
    (r.MediaSessionId = "media-session-id"),
    (r.MediaSinkWants = "media-sink-wants"),
    (r.VoiceBackendVersion = "voice-backend-version"),
    (r.KeyframeInterval = "keyframe-interval"),
    (r.ChannelOptionsUpdateSecureFramesProtocol = "update-secure-frames-protocol"),
    (r.Flags = "flags"),
    (r.Platform = "platform"),
    (r.SDP = "sdp"),
    (r.Encryption = "encryption"),
    (r.BandwidthEstimationExperiment = "bandwidth-estimation-experiment"),
    (r.SecureFramesInit = "secure-frames-init"),
    (r.SecureFramesPrepareTransition = "secure-frames-prepare-transition"),
    (r.SecureFramesExecuteTransition = "secure-frames-execute-transition"),
    (r.SecureFramesPrepareEpoch = "secure-frames-prepare-epoch"),
    (r.MLSExternalSenderPackage = "mls-external-sender-package"),
    (r.MLSProposals = "mls-proposals"),
    (r.MLSPrepareCommitTransition = "mls-prepare-commit-transition"),
    (r.MLSWelcome = "mls-welcome"),
    (r.ReceiveMessage = "receive-message"),
    (r.SendMessage = "send-message"),
    r);
class eD extends f.A {
    url;
    logger;
    backoff = new h.A(1e3, 5e3);
    webSocket;
    connectionState;
    heartbeatInterval;
    helloTimeout;
    heartbeater;
    lastHeartbeatAckTime;
    expeditedHeartbeatTimeout;
    heartbeatAck;
    heartbeatIntervalModifier;
    connectionStartTime;
    lastRecvSeqNum;
    sessionId;
    serverId;
    channelId;
    token;
    resumable;
    serverVersion = 0;
    constructor(e, t = V.x.DEFAULT) {
        super(),
            (this.url = e),
            (this.logger = new O.A(`RTCControlSocket(${t})`)),
            this.logger.enableNativeLogger(!0),
            (this.webSocket = null),
            (this.connectionState = 0),
            (this.helloTimeout = null),
            (this.lastHeartbeatAckTime = null),
            (this.heartbeatInterval = null),
            (this.heartbeater = null),
            (this.heartbeatAck = !0),
            (this.expeditedHeartbeatTimeout = null),
            (this.heartbeatIntervalModifier = 1),
            (this.connectionStartTime = 0),
            (this.lastRecvSeqNum = null),
            (this.sessionId = null),
            (this.serverId = null),
            (this.channelId = null),
            (this.token = null),
            (this.resumable = !1);
    }
    createWebSocket() {
        this.logger.info(`[CONNECT] ${this.url}`),
            null !== this.webSocket &&
                (this.logger.error("Connect called with already existing websocket"),
                this.cleanupWebSocket((e) => e.close(4e3))),
            (this.connectionStartTime = (0, T.tB)()),
            (this.helloTimeout = setTimeout(() => {
                let e = (0, T.tB)() - this.connectionStartTime;
                this.handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`);
            }, eg));
        let e = (this.webSocket = new WebSocket(`${this.url}?v=9`));
        (e.binaryType = "arraybuffer"),
            (e.onopen = () => {
                1 === this.connectionState
                    ? this.emit("connect")
                    : 5 === this.connectionState && this.doResumeOrClose(),
                    (this.connectionState = 4);
                let e = (0, T.tB)() - this.connectionStartTime;
                this.logger.info(`[CONNECTED] ${this.url} in ${e} ms`), this.emit("ping", Math.round(e / 2));
            }),
            (e.onmessage = (e) => {
                let { op: t, seq: n, d: i } = this.parseWebSocketMessage(e);
                if (
                    (this.emit("receive-message", t, i),
                    n && (this.lastRecvSeqNum = n),
                    ep.default.isLoggingGatewayEvents)
                )
                    if (i instanceof Uint8Array) {
                        let e = [...i].map((e) => e.toString(16).padStart(2, "0")).join("");
                        this.logger.info(`~> ${t}: 0x${e}`);
                    } else this.logger.info(`~> ${t}: ${JSON.stringify(i)}`);
                switch (t) {
                    case 8:
                        this.clearHelloTimeout(), this.handleHello(i);
                        break;
                    case 2:
                        this.handleReady(i);
                        break;
                    case 9:
                        this.handleResumed(i);
                        break;
                    case 4:
                        i.bandwidth_estimation_experiment &&
                            this.emit("bandwidth-estimation-experiment", i.bandwidth_estimation_experiment),
                            this.emit("codecs", i.audio_codec, i.video_codec),
                            i.media_session_id && this.emit("media-session-id", i.media_session_id),
                            i.sdp ? this.emit("sdp", i.sdp) : i.mode && this.emit("encryption", i.mode, i.secret_key),
                            i.keyframe_interval && this.emit("keyframe-interval", i.keyframe_interval),
                            this.emit("secure-frames-init", i.dave_protocol_version || 0),
                            (this.resumable = !0);
                        break;
                    case 5:
                        let r = i.speaking;
                        "boolean" == typeof r && (r = r ? V.ME.VOICE : V.ME.NONE),
                            this.emit("speaking", i.user_id, i.ssrc, r);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(i);
                        break;
                    case 12:
                        this.emit("video", i.user_id, i.audio_ssrc, i.video_ssrc, eO(i.streams));
                        break;
                    case 11:
                        this.emit("client-connect", i.user_ids);
                        break;
                    case 13:
                        this.emit("client-disconnect", i.user_id);
                        break;
                    case 14:
                        (null != i.audio_codec || null != i.video_codec) &&
                            this.emit("codecs", i.audio_codec, i.video_codec),
                            null != i.media_session_id && this.emit("media-session-id", i.media_session_id),
                            i.keyframe_interval && this.emit("keyframe-interval", i.keyframe_interval);
                        break;
                    case 15:
                        this.emit("media-sink-wants", i);
                        break;
                    case 16:
                        null != i.voice &&
                            null != i.rtc_worker &&
                            this.emit("voice-backend-version", i.voice, i.rtc_worker);
                        break;
                    case 18:
                        null != i.flags && null != i.user_id && this.emit("flags", i.user_id, i.flags);
                        break;
                    case 20:
                        null != i.platform && null != i.user_id && this.emit("platform", i.user_id, i.platform);
                        break;
                    case 21:
                        null != i.transition_id &&
                            null != i.protocol_version &&
                            this.emit("secure-frames-prepare-transition", i.transition_id, i.protocol_version);
                        break;
                    case 22:
                        null != i.transition_id && this.emit("secure-frames-execute-transition", i.transition_id);
                        break;
                    case 24:
                        null != i.epoch &&
                            null != i.protocol_version &&
                            this.emit("secure-frames-prepare-epoch", i.epoch, i.protocol_version);
                        break;
                    case 25:
                        this.emit("mls-external-sender-package", i);
                        break;
                    case 27:
                        this.emit("mls-proposals", i);
                        break;
                    case 29: {
                        let e = new DataView(i.buffer, i.byteOffset, 2).getUint16(0, !1),
                            t = i.slice(2);
                        this.emit("mls-prepare-commit-transition", e, t);
                        break;
                    }
                    case 30: {
                        let e = new DataView(i.buffer, i.byteOffset, 2).getUint16(0, !1),
                            t = i.slice(2);
                        this.emit("mls-welcome", e, t);
                        break;
                    }
                    default:
                        this.logger.info(`Unhandled op ${t}`);
                }
            }),
            (e.onerror = () => this.handleClose(!1, 0, "An error with the websocket occurred")),
            (e.onclose = (e) => {
                let { wasClean: t, code: n, reason: i } = e;
                return this.handleClose(t, n, i);
            });
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let i = JSON.stringify({ op: e, d: t });
        ep.default.isLoggingGatewayEvents && this.logger.info(`<~ ${i}`), this.emit("send-message", e, t);
        try {
            n.send(i);
        } catch (e) {}
    }
    sendBinary(e, t) {
        let n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let i = new Uint8Array(t.byteLength + 1);
        (i[0] = e), i.set(t, 1);
        try {
            n.send(i.buffer);
        } catch (e) {}
    }
    doResumeOrClose() {
        let e = (0, T.tB)();
        null !== this.serverId &&
        null !== this.channelId &&
        null !== this.token &&
        null !== this.sessionId &&
        this.resumable &&
        (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= eS)
            ? (this.doResume(), (this.lastHeartbeatAckTime = e))
            : this.disconnect(!1, 4801, "Cannot resume connection.");
    }
    doResume() {
        let e = this.lastRecvSeqNum ?? -1;
        this.logger.info(
            `[RESUME] resuming session. serverId=${this.serverId ?? ""} channelId=${this.channelId ?? ""} sessionId=${this.sessionId ?? ""} seqAck=${e}`,
        ),
            this.emit("resuming"),
            (this.connectionState = 3),
            this.send(7, {
                token: this.token,
                session_id: this.sessionId,
                server_id: this.serverId,
                channel_id: this.channelId,
                seq_ack: e,
            });
    }
    handleHello(e) {
        if (((this.serverVersion = e.v ?? 3), this.serverVersion <= 3)) {
            let t = ea.isPlatformEmbedded ? 0.25 : 0.1;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else
            (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier),
                ea.isPlatformEmbedded || (this.heartbeatInterval = Math.min(eN, this.heartbeatInterval ?? NaN));
        let t = (0, T.tB)() - this.connectionStartTime;
        this.logger.info(
            `[HELLO] heartbeat interval: ${this.heartbeatInterval ?? "??"}, version: ${this.serverVersion}, took ${t} ms`,
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = (0, T.tB)() - this.connectionStartTime;
        this.logger.info(`[READY] took ${t} ms`),
            this.serverVersion >= 6 && this.send(16, {}),
            this.emit("ready", e.ip, e.port, e.modes, e.ssrc, eO(e.streams), e.experiments);
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, t, n) {
        if (
            ((this.connectionState = 0),
            (e = e || !1),
            this.cleanupWebSocket(),
            4004 === t || 4015 === t || 4011 === t || 4006 === t)
        )
            return this.disconnect(e, t, n);
        if (this.backoff.fails > 3)
            this.logger.warn("[WS CLOSED] Backoff exceed. Resetting."), this.disconnect(e, t, n);
        else {
            let i = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn(
                `[WS CLOSED] (clean: ${e.toString()}, code: ${t}, reason: ${n}) retrying in ${(i / 1e3).toFixed(2)} seconds.`,
            );
        }
    }
    disconnect(e, t, n) {
        this.logger.warn(`[DISCONNECT] (${e.toString()}, ${t}, ${n})`),
            this.cleanupWebSocket(),
            this.cleanupState(),
            (this.connectionState = 0),
            this.emit("disconnect", e, t, n);
    }
    reconnect(e, t, n) {
        this.logger.info(`[RECONNECT] wasClean=${e.toString()} code=${t} reason=${n}`),
            this.cleanupWebSocket((e) => e.close(4e3)),
            (this.connectionState = 5),
            this.createWebSocket();
    }
    cleanupWebSocket(e) {
        this.stopHeartbeater(), this.clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = em), (t.onmessage = em), (t.onerror = em), (t.onclose = em), e?.(t)),
            this.backoff.cancel();
    }
    cleanupState() {
        (this.serverId = null),
            (this.channelId = null),
            (this.sessionId = null),
            (this.token = null),
            (this.resumable = !1),
            (this.lastRecvSeqNum = null);
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
        {
            let t = new Uint8Array(e.data),
                n = null;
            this.serverVersion >= 8 && (n = new DataView(t.buffer).getUint16(0, !1));
            let i = 2 * (this.serverVersion >= 8);
            return { op: t[i], seq: n, d: t.subarray(i + 1) };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info("Heartbeat ACK received");
        let t = null;
        (t = this.serverVersion >= 8 ? e.t : e),
            this.emit("ping", (0, T.tB)() - t),
            (this.lastHeartbeatAckTime = (0, T.tB)()),
            (this.heartbeatAck = !0),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = null),
                this.logger.info("Expedited heartbeat succeeded"));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket((e) => e.close(4e3));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, "Heartbeat timeout."));
        this.logger.warn(`[HEARTBEAT ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    startHeartbeater() {
        ef()(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here."),
            this.logger.info(`Starting heartbeat with interval: ${this.heartbeatInterval}`),
            null !== this.heartbeater && clearInterval(this.heartbeater),
            (this.heartbeatAck = !0),
            (this.heartbeater = setInterval(() => {
                this.heartbeatAck
                    ? ((this.heartbeatAck = !1), this.sendHeartbeat())
                    : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
            }, this.heartbeatInterval));
    }
    sendHeartbeat() {
        if (this.serverVersion >= 8) {
            let e = this.lastRecvSeqNum ?? -1;
            this.logger.info(`Sending heartbeat with last received sequence number: ${e}`),
                this.send(3, { t: (0, T.tB)(), seq_ack: e });
        } else this.logger.info("Sending heartbeat"), this.send(3, (0, T.tB)());
    }
    stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    connect() {
        return 0 !== this.connectionState
            ? (this.logger.error("Cannot start a new connection, connection state is not disconnected"), !1)
            : ((this.connectionState = 1), this.createWebSocket(), this.emit("connecting"), !0);
    }
    identify(e) {
        let {
            serverId: t,
            channelId: n,
            userId: i,
            sessionId: r,
            token: a,
            maxDaveProtocolVersion: s,
            video: l = !1,
            streamParameters: o,
        } = e;
        (this.serverId = t),
            (this.channelId = n),
            (this.sessionId = r),
            (this.token = a),
            (this.connectionState = 2),
            this.send(0, {
                server_id: t,
                channel_id: n,
                user_id: i,
                session_id: r,
                token: a,
                max_dave_protocol_version: s,
                video: l,
                streams: eR(o),
            });
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null != this.webSocket)
            this.logger.info(`Performing an expedited heartbeat ${"" !== t ? "reason: " + t : ""}`),
                (this.heartbeatAck = !1),
                this.sendHeartbeat(),
                null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = setTimeout(() => {
                    (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this.handleHeartbeatTimeout();
                }, e));
        else {
            if (n) return this.resetBackoff(t);
            this.logger.info(
                `Expedited heartbeat requested, but is disconnected and a reset was not requested ${"" !== t ? "reason: " + t : ""}`,
            );
        }
        return !1;
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
            this.backoff.fails > 0 &&
            null == this.webSocket &&
            (this.logger.info(`Connection backoff reset ${"" !== e ? "for reason: " + e : ""}`),
            this.backoff.succeed(),
            this.reconnect(!1, 4802, "Reset backoff."),
            !0)
        );
    }
    close() {
        this.logger.info("CLOSE"),
            this.cleanupWebSocket((e) => e.close(4e3)),
            this.cleanupState(),
            (this.connectionState = 0),
            this.emit("disconnect", !0, 1e3, "Force Close");
    }
    destroy() {
        this.close();
    }
    selectProtocol(e, t, n, i) {
        let r,
            a = {};
        null == n
            ? (r = null)
            : "sdp" in n && null != n.sdp && "" !== n.sdp
              ? ((r = n.sdp), (a = { ...n, codecs: eC(n.codecs), rtc_connection_id: t }))
              : "address" in n &&
                null != n.address &&
                "" !== n.address &&
                n.port &&
                null != n.mode &&
                "" !== n.mode &&
                ((r = { address: n.address, port: n.port, mode: n.mode }),
                (a = { ...n, codecs: eC(n.codecs), rtc_connection_id: t, experiments: i })),
            this.send(1, { protocol: e, data: r, ...a });
    }
    updateSession(e) {
        this.send(14, { codecs: eC(e.codecs) });
    }
    speaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, { speaking: this.serverVersion <= 3 ? !!e : e, delay: t, ssrc: n });
    }
    video(e, t, n, i) {
        this.send(12, { audio_ssrc: e, video_ssrc: t, rtx_ssrc: n, streams: eR(i) });
    }
    mediaSinkWants(e) {
        this.serverVersion >= 5 && this.send(15, e);
    }
    secureFramesReadyForTransition(e) {
        this.send(23, { transition_id: e });
    }
    sendMLSKeyPackage(e) {
        this.logger.info("Sending MLS key package"), this.sendBinary(26, new Uint8Array(e));
    }
    sendMLSCommitWelcome(e) {
        this.logger.info("Sending MLS commit + welcome message"), this.sendBinary(28, new Uint8Array(e));
    }
    flagMLSInvalidCommitWelcome(e) {
        this.send(31, { transition_id: e });
    }
    noRoute() {
        this.send(32, {});
    }
    setHeartbeatIntervalModifier(e) {
        this.heartbeatIntervalModifier = e;
    }
}
var ey = n(4511),
    ev = n(52133),
    eb = n(574381);
let eM = (0, P.mj)({
    kind: "user",
    name: "2026-03-browser-inverted-wants",
    defaultConfig: { invertWants: !1 },
    variations: { 1: { invertWants: !0 } },
});
function eP(e) {
    return (0, eb.xl)() ? { invertWants: !1 } : eM.getConfig({ location: e });
}
var eU = n(676279),
    ew = n(935208),
    eG = n(276208);
let ex = { any: 100 },
    ek = { any: 0 },
    eF = 30 * eT.A.Millis.SECOND,
    eV = 120 * eT.A.Millis.SECOND,
    eB = -1 !== (0, eU.EL)();
var eH = (((a = {}).UserSSRCUpdate = "user-ssrc-update"), (a.Update = "update"), a);
function ej(e) {
    let { invertWants: t } = eP("RTCMediaSinkWantsManager.getDefaultWants");
    return t ? { ...ek } : { any: e };
}
class eW extends f.A {
    userId;
    isStageChannel;
    supportsSeamless;
    ladder;
    connection = null;
    audioSsrcs = {};
    videoSsrcs = {};
    remoteVideoSsrcs = {};
    framesReceived = {};
    streamIds = {};
    offscreenUsers = {};
    offscreenDisabledUsers = {};
    streamPixelCounts = {};
    latestWants = ej(100);
    participants = new Set();
    selectedParticipantId = null;
    delayedCall;
    offscreenTimeout;
    pipOpen = !1;
    simulcastDebugOverrides = new Map();
    videoHealthManager = null;
    otherUsers = new Set();
    constructor(e, t, n, i = new ey.r()) {
        super(),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = i),
            (this.delayedCall = new v.J_(100, this.update)),
            (this.offscreenTimeout = new v.Ep()),
            eG.X.on(eG.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(t, e);
    }
    delayedUpdate = () => {
        this.delayedCall.delay();
    };
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        (this.otherUsers = new Set(e)), this.otherUsers.delete(Y.default.getId()), this.update();
    }
    shouldReceiveFromUser(e) {
        let t = !(
            this.connection?.getLocalVideoDisabled(e) ||
            (this.userVideoDisabled(e) &&
                this.videoHealthManager?.getCurrentVideoToggleState(e) !== eA.bb8.AUTO_PROBING)
        );
        return eG.X.isIncomingVideoEnabled() && t;
    }
    addLru = (e, t, n) => {
        if ((n.push(e), n.length <= 3)) return;
        let i = -1,
            r = -1;
        for (let e = 0; e < n.length; e++) {
            let a = n[e],
                s = t - this.offscreenUsers[a];
            s > i && ((i = s), (r = e));
        }
        (this.offscreenDisabledUsers[n[r]] = !0), n.splice(r, 1);
    };
    updateOffscreenUsers = () => {
        if (!this.connection?.getActiveOutputSinkTrackingEnabled()) return;
        let e = Date.now(),
            t = [];
        for (let [n, i] of ew.default.entries(this.streamIds))
            null != i &&
                (this.connection?.getHasActiveVideoOutputSink(i)
                    ? (delete this.offscreenUsers[n], delete this.offscreenDisabledUsers[n])
                    : null == this.offscreenUsers[n]
                      ? ((this.offscreenUsers[n] = e), this.addLru(n, e, t))
                      : this.offscreenDisabledUsers[n] ||
                        (e - this.offscreenUsers[n] >= this.getOffscreenTimeoutMs()
                            ? (this.offscreenDisabledUsers[n] = !0)
                            : this.addLru(n, e, t)));
        if (t.length > 0) {
            let n = e + this.getOffscreenTimeoutMs();
            for (let e of t) n = Math.min(n, this.offscreenUsers[e] + this.getOffscreenTimeoutMs());
            this.offscreenTimeout.start(n - e, this.update);
        } else this.offscreenTimeout.stop();
    };
    handleLocalVideoDisabled = (e, t) => {
        this.update();
    };
    handleLocalMute = (e, t) => {
        this.update();
    };
    invertWants(e, t) {
        for (let n of Object.values(this.videoSsrcs))
            for (let i of n) eB ? (100 !== i.quality ? (e[i.ssrc] = 100) : (e[i.ssrc] = 0)) : (e[i.ssrc] = t);
        for (let t of Object.values(this.audioSsrcs)) e[t] = 100;
    }
    update = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = e.getWantsLevel(),
                i = ej(n),
                r = i;
            eP("RTCMediaSinkWantsManager.update").invertWants && (e.invertWants(i, n), eB && (r = { ...i })),
                e.updateOffscreenUsers();
            let a = (0, ea.isDesktop)() && e.isOneToOneCall() && !e.isStageChannel;
            for (let [r, s] of ew.default.entries(e.videoSsrcs)) {
                let l = [],
                    o = !1,
                    d = e.streamPixelCounts[e.streamIds[r]] ?? 0,
                    c = e.getWantsLevel(d),
                    u = s[0].ssrc;
                if (e.shouldReceiveFromUser(r)) {
                    let t = r === e.selectedParticipantId && 100 !== n && !e.pipOpen;
                    if (s.length > 1) {
                        for (let e of s)
                            100 === e.quality
                                ? t
                                    ? ((i[e.ssrc] = 100), (u = e.ssrc))
                                    : (i[e.ssrc] = 0)
                                : t
                                  ? (i[e.ssrc] = 0)
                                  : (a && (i[e.ssrc] = c), (u = e.ssrc));
                        if (e.supportsSeamless && !e.framesReceived[u])
                            for (let t of ((o = !0), (l = [u]), s))
                                t.ssrc !== u &&
                                    e.framesReceived[t.ssrc] &&
                                    (100 === t.quality ? (i[t.ssrc] = 100) : (i[t.ssrc] = a ? c : n), l.push(t.ssrc));
                    } else t ? (i[u] = 100) : a && (i[u] = c);
                } else for (let e of s) i[e.ssrc] = 0;
                let _ = e.getSimulcastOverrideQuality(r);
                for (let t of (_ === V.r8.HIGH ? (i[u] = 100) : _ === V.r8.LOW && (i[u] = 50),
                (e.supportsSeamless && o) || (l = [u]),
                s))
                    l.includes(t.ssrc) || delete e.framesReceived[t.ssrc];
                (t.includes(r) || (void 0 !== e.remoteVideoSsrcs[r] && !(0, ev.A)(e.remoteVideoSsrcs[r], l))) &&
                    ((e.remoteVideoSsrcs[r] = [...l]), e.emit("user-ssrc-update", r, e.audioSsrcs[r], l));
            }
            let s = eB ? r : i;
            for (let [t, n] of Object.entries(e.audioSsrcs)) e.connection?.getLocalMute(t) && (s[n] = 0);
            return (
                null == e.connection || ec().isEqual(e.latestWants, s) || ((e.latestWants = s), e.emit("update", s)), s
            );
        };
    })();
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this.connection?.removeListener(p.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.removeListener(p.yq.LocalMute, this.handleLocalMute),
            this.connection?.removeListener(p.yq.ActiveSinksChange, this.delayedUpdate),
            (this.connection = e),
            this.connection?.addListener(p.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.addListener(p.yq.LocalMute, this.handleLocalMute),
            this.connection?.addListener(p.yq.ActiveSinksChange, this.delayedUpdate),
            t && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => e.active && (e.ssrc ?? 0) > 0)
            .map((e) => ({ quality: e.quality ?? 100, ssrc: e.ssrc }));
        if (n.length > 0) (this.videoSsrcs[e] = n), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e])
                for (let { ssrc: t } of this.videoSsrcs[e]) delete this.framesReceived[t];
            delete this.remoteVideoSsrcs[e],
                delete this.videoSsrcs[e],
                this.participants.delete(e),
                this.emit("user-ssrc-update", e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, t) {
        return (
            null != t
                ? (this.streamIds[e] = t)
                : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]),
            this.update()
        );
    }
    destroyUser(e) {
        return (
            delete this.audioSsrcs[e],
            delete this.videoSsrcs[e],
            this.participants.delete(e),
            delete this.streamPixelCounts[this.streamIds[e]],
            delete this.streamIds[e],
            this.update(Array.from(this.participants))
        );
    }
    reset() {
        this.setConnection(null, !1),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = ej(100)),
            eG.X.off(eG.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if (
            (null != this.selectedParticipantId &&
                this.selectedParticipantId !== this.userId &&
                t.push(this.selectedParticipantId),
            null != e)
        )
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn(`Participant not found: ${e}`), this.latestWants;
                this.selectedParticipantId = e;
            }
        else this.selectedParticipantId = null;
        return this.update(t.filter((e) => this.videoSsrcs[e]?.length > 1));
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId)
            ? this.update([this.selectedParticipantId])
            : this.latestWants;
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, t) {
        this.simulcastDebugOverrides.set(e, t), this.update();
    }
    setVideoSize(e, t) {
        t > 0 ? (this.streamPixelCounts[e] = t) : delete this.streamPixelCounts[e], this.delayedUpdate();
    }
    getVideoParticipantCount() {
        let e = 0;
        for (let t of Object.keys(this.videoSsrcs)) !this.connection?.getLocalVideoDisabled(t) && e++;
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? eV : eF;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : V.r8.NO_OVERRIDE;
    }
    incomingVideoEnabledChanged = () => {
        this.update();
    };
}
var eY = n(87306),
    eK = n(687658);
class e$ {
    connection;
    pttQueueLatencyHistogram;
    constructor(e) {
        (this.connection = e), (this.pttQueueLatencyHistogram = new eK.d());
    }
    start() {
        this.connection.on(p.yq.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(p.yq.Stats, this.sampleStats);
    }
    getPttQueueLatencyStats() {
        let e = this.pttQueueLatencyHistogram.getReport([50, 95]);
        return {
            ptt_queue_latency_max: e.max,
            ptt_queue_latency_mean: e.mean,
            ptt_queue_latency_p50: e.percentiles["50"],
            ptt_queue_latency_p95: e.percentiles["95"],
            ptt_queue_latency_samples: e.samples,
        };
    }
    sampleStats = (e) => {
        null != e &&
            ec().forEach(e.rtp.outbound, (e) => {
                if ("audio" === e.type)
                    for (let t of e.pttQueueLatencyMicrosSamples ?? []) {
                        let e = t / 1e3;
                        this.pttQueueLatencyHistogram.addSample(e);
                    }
            });
    };
}
var ez = n(681813),
    eq = n(357758),
    eZ = n(544180);
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class eQ {
    _networkStats;
    _lastSampleTimestamp;
    constructor() {
        (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, T.tB)());
    }
    _initStats() {
        let e = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
        return (
            Object.values(eA.wY_).forEach((t) => {
                e.connectionTypeBuckets[t] = 0;
            }),
            Object.values(eA.NKC).forEach((t) => {
                e.effectiveConnectionSpeedBuckets[t] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: eX(e.connectionTypeBuckets[eA.wY_.WIFI]),
            duration_connection_type_cellular: eX(e.connectionTypeBuckets[eA.wY_.CELLULAR]),
            duration_connection_type_ethernet: eX(e.connectionTypeBuckets[eA.wY_.ETHERNET]),
            duration_connection_type_bluetooth: eX(e.connectionTypeBuckets[eA.wY_.BLUETOOTH]),
            duration_connection_type_other: eX(e.connectionTypeBuckets[eA.wY_.OTHER]),
            duration_connection_type_unknown: eX(e.connectionTypeBuckets[eA.wY_.UNKNOWN]),
            duration_connection_type_none: eX(e.connectionTypeBuckets[eA.wY_.NONE]),
            duration_effective_connection_speed_2g: eX(e.effectiveConnectionSpeedBuckets[eA.NKC.TWO_G]),
            duration_effective_connection_speed_3g: eX(e.effectiveConnectionSpeedBuckets[eA.NKC.THREE_G]),
            duration_effective_connection_speed_4g: eX(e.effectiveConnectionSpeedBuckets[eA.NKC.FOUR_G]),
            duration_effective_connection_speed_5g: eX(e.effectiveConnectionSpeedBuckets[eA.NKC.FIVE_G]),
            duration_effective_connection_speed_unknown: eX(e.effectiveConnectionSpeedBuckets[eA.NKC.UNKNOWN]),
        };
    }
    incrementNetworkStats(e) {
        let t = (e - this._lastSampleTimestamp) / 1e3,
            n = eZ.A.getEffectiveConnectionSpeed();
        n === eA.NKC.SLOW_TWO_G && (n = eA.NKC.TWO_G);
        let i = eZ.A.getType();
        i === eA.wY_.WIMAX && (i = eA.wY_.WIFI),
            (this._networkStats.effectiveConnectionSpeedBuckets[n] += t),
            (this._networkStats.connectionTypeBuckets[i] += t),
            (this._lastSampleTimestamp = e);
    }
}
var eJ = n(166929);
function e0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
var e1 = (((s = {}).FpsUpdate = "fps-update"), s);
class e2 extends f.A {
    connection;
    timestampProducer;
    networkQuality = new eQ();
    paused;
    pausedCount = 0;
    zeroReceivers;
    videoStopped;
    videoEffectDuration;
    hqSimulcastStreamEncoded;
    lqSimulcastStreamEncoded;
    bothSimulcastStreamsEncoded;
    hqSimulcastStreamWatched;
    lqSimulcastStreamWatched;
    hqSimulcastStreamEligible;
    lqSimulcastStreamEligible;
    simulcastQualityChanges = 0;
    cameraToggles = 0;
    callUserIdsCount = 0;
    cameraDuration;
    cameraOpportunityDuration;
    cameraSendDuration;
    windowOccluded;
    videoStoppedForOcclusion;
    numWindowOcclusionChanges = 0;
    outboundStats = {};
    inboundStats = {};
    streamStart;
    streamEnd;
    symmetricCodecUpdates = 0;
    asymmetricCodecUpdates = 0;
    bandwidthLimitedFramerate;
    bandwidthLimitedResolution;
    videoEntropy;
    statCollectionPausedUsers = new Set();
    constructor(e, t = T.TF) {
        super(),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.paused = new T.w6(!1, t)),
            (this.zeroReceivers = new T.w6(!1, t)),
            (this.videoStopped = new T.w6(!1, t)),
            (this.videoEffectDuration = new T.w6(!1, t)),
            (this.hqSimulcastStreamEncoded = new T.w6(!1, t)),
            (this.lqSimulcastStreamEncoded = new T.w6(!1, t)),
            (this.bothSimulcastStreamsEncoded = new T.w6(!1, t)),
            (this.hqSimulcastStreamWatched = new T.w6(!1, t)),
            (this.lqSimulcastStreamWatched = new T.w6(!1, t)),
            (this.hqSimulcastStreamEligible = new T.w6(!1, t)),
            (this.lqSimulcastStreamEligible = new T.w6(!1, t)),
            (this.windowOccluded = new T.w6(!1, t)),
            (this.videoStoppedForOcclusion = new T.w6(!1, t)),
            (this.bandwidthLimitedFramerate = new T.w6(!1, t)),
            (this.bandwidthLimitedResolution = new T.w6(!1, t)),
            (this.cameraDuration = new T.w6(!1, t)),
            (this.cameraOpportunityDuration = new T.w6(!1, t)),
            (this.cameraSendDuration = new T.w6(!1, t)),
            (this.videoEntropy = new eK.d());
    }
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(p.yq.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new eJ.ET(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return (
            null == this.inboundStats[e] && (this.inboundStats[e] = new eJ.dg(this.timestampProducer)),
            this.inboundStats[e]
        );
    }
    updateCallUserIdsCount(e) {
        this.callUserIdsCount = e;
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, eJ.iF.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, eJ.iF.ClientSideDisableVideo),
            !t &&
                n.statsWindow.length > 0 &&
                0 === n.statsWindow[0].packets &&
                (n.startTime = this.timestampProducer.now());
    }
    setOcclusionIncomingVideoEnabled(e) {
        this.videoStoppedForOcclusion.value = !e;
    }
    setWindowOcclusionState(e) {
        e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, (this.windowOccluded.value = e);
    }
    pause() {
        !this.paused.value && this.pausedCount++,
            ec().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            ec().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(p.yq.Stats, this.sampleStats),
            (this.streamEnd = this.timestampProducer.now()),
            this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        e !== this.hqSimulcastStreamWatched.value &&
            (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) &&
            this.simulcastQualityChanges++,
            (this.hqSimulcastStreamWatched.value = e),
            (this.lqSimulcastStreamWatched.value = !e);
    }
    setEligibleSimulcastQuality(e) {
        (this.hqSimulcastStreamEligible.value = e), (this.lqSimulcastStreamEligible.value = !e);
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getEncoderUsageStats() {
        let e = new Map();
        for (let t in this.outboundStats) {
            let n = new Map();
            for (let i of this.outboundStats[t].getCodecsUsed()) {
                let r = i.toUpperCase();
                n.set(r, e0(this.outboundStats[t].codecBuckets[r])), e.set(parseInt(t), n);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let t in this.inboundStats) {
            let n = new Map();
            for (let i of this.inboundStats[t].getCodecsUsed()) {
                let r = i.toUpperCase();
                n.set(r, e0(this.inboundStats[t].codecBuckets[r])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        let n = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            i = new Map();
        if ("sender" === e || "streamer" === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                i = e.get(t);
            }
            return {
                codec_asymmetric_session: n,
                codec_h264_encode_duration_sec: i.get(eJ.Wn.H264) ?? 0,
                codec_h265_encode_duration_sec: i.get(eJ.Wn.H265) ?? 0,
                codec_vp8_encode_duration_sec: i.get(eJ.Wn.VP8) ?? 0,
                codec_vp9_encode_duration_sec: i.get(eJ.Wn.VP9) ?? 0,
                codec_av1_encode_duration_sec: i.get(eJ.Wn.AV1) ?? 0,
                codec_unknown_encode_duration_sec: i.get(eJ.Wn.UNKNOWN) ?? 0,
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (i = e.get(t)),
                {
                    codec_asymmetric_session: n,
                    codec_h264_decode_duration_sec: i.get(eJ.Wn.H264) ?? 0,
                    codec_h265_decode_duration_sec: i.get(eJ.Wn.H265) ?? 0,
                    codec_vp8_decode_duration_sec: i.get(eJ.Wn.VP8) ?? 0,
                    codec_vp9_decode_duration_sec: i.get(eJ.Wn.VP9) ?? 0,
                    codec_av1_decode_duration_sec: i.get(eJ.Wn.AV1) ?? 0,
                    codec_unknown_decode_duration_sec: i.get(eJ.Wn.UNKNOWN) ?? 0,
                }
            );
        }
    }
    getCameraDurationStats() {
        return {
            camera_enabled_duration: Math.round(this.cameraDuration.totalDurationSeconds()),
            camera_send_opportunity_duration: Math.round(this.cameraOpportunityDuration.totalDurationSeconds()),
            camera_send_duration: Math.round(this.cameraSendDuration.totalDurationSeconds()),
            num_camera_on_toggles: this.cameraToggles,
        };
    }
    getOutboundStats() {
        let e = [];
        return (
            ec().forEach(this.outboundStats, (t, n) => {
                let i,
                    r = this.connection?.getStreamParameters();
                r.length > 1 &&
                    r.forEach((e) => {
                        parseInt(n) === e.ssrc && (i = e.quality ?? 50);
                    });
                let a = [1, 5, 10, 25, 50, 75],
                    s = [1, 5, 10, 25, 50, 75, 99],
                    l = t.vmafHistogram.getReport(a),
                    o = t.psnrHistogram.getReport(a),
                    d = t.targetBitrateHistogram.getReport(s),
                    c = t.outboundBandwidthSurplus.getReport(s),
                    u = this.videoEntropy.getReport(s),
                    _ = t.aggregationDuration / 1e3,
                    E =
                        (0, ea.isWeb)() || (0, ea.isIOS)() || (0, ea.isAndroid)()
                            ? t.aggregatedProperties.framesCodec
                            : t.aggregatedProperties.screenshareFramesUnique;
                e.push({
                    ...this.getStats(t),
                    target_fps: _ > 0 ? Math.round((t.targetFrames ?? 0) / _) : 0,
                    unique_captured_fps: this.connection?.context === p.x.STREAM && _ > 0 ? E / _ : null,
                    target_bitrate_network: _ > 0 ? Math.round(((t.targetBytesNetwork ?? 0) * 8) / _) : 0,
                    target_bitrate_network_percentile1: d.count > 0 ? d.percentiles[1] : null,
                    target_bitrate_network_percentile5: d.count > 0 ? d.percentiles[5] : null,
                    target_bitrate_network_percentile10: d.count > 0 ? d.percentiles[10] : null,
                    target_bitrate_network_percentile25: d.count > 0 ? d.percentiles[25] : null,
                    target_bitrate_network_percentile50: d.count > 0 ? d.percentiles[50] : null,
                    target_bitrate_network_percentile75: d.count > 0 ? d.percentiles[75] : null,
                    target_bitrate_network_percentile99: d.count > 0 ? d.percentiles[99] : null,
                    target_bitrate_max: _ > 0 ? Math.round(((t.targetBytesMax ?? 0) * 8) / _) : 0,
                    outbound_bandwidth_estimate: _ > 0 ? Math.round(((t.outboundBytesAvailable ?? 0) * 8) / _) : 0,
                    outbound_bandwidth_surplus_percentile1: c.count > 0 ? c.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: c.count > 0 ? c.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: c.count > 0 ? c.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: c.count > 0 ? c.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: c.count > 0 ? c.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: c.count > 0 ? c.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: c.count > 0 ? c.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: e0(t.encoderBuckets[eJ.yo.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: e0(t.encoderBuckets[eJ.yo.NVIDIA_DIRECT_3D]),
                    duration_encoder_nvidia_vulkan: e0(t.encoderBuckets[eJ.yo.NVIDIA_VULKAN]),
                    duration_encoder_openh264: e0(t.encoderBuckets[eJ.yo.OPENH264]),
                    duration_encoder_videotoolbox: e0(t.encoderBuckets[eJ.yo.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: e0(t.encoderBuckets[eJ.yo.AMD_DIRECT_3D]),
                    duration_encoder_amd_vaapi: e0(t.encoderBuckets[eJ.yo.AMD_VAAPI]),
                    duration_encoder_intel: e0(t.encoderBuckets[eJ.yo.INTEL]),
                    duration_encoder_intel_direct3d: e0(t.encoderBuckets[eJ.yo.INTEL_DIRECT_3D]),
                    duration_encoder_intel_vaapi: e0(t.encoderBuckets[eJ.yo.INTEL_VAAPI]),
                    duration_encoder_vp8_libvpx: e0(t.encoderBuckets[eJ.yo.VP8_LIBVPX]),
                    duration_encoder_uncategorized: e0(t.encoderBuckets[eJ.yo.UNCATEGORIZED]),
                    duration_encoder_wmf_chrome: e0(t.encoderBuckets[eJ.yo.WMF_CHROME]),
                    duration_encoder_unknown: e0(t.encoderBuckets[eJ.yo.UNKNOWN]),
                    quality: i,
                    average_encode_time_ms: t.averageEncodeTime,
                    average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: l.count > 0 ? l.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: l.count > 0 ? l.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: l.count > 0 ? l.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: l.count > 0 ? l.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: l.count > 0 ? l.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: l.count > 0 ? l.percentiles[75] : null,
                    average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                    encoder_psnr_db_percentile1: o.count > 0 ? o.percentiles[1] : null,
                    encoder_psnr_db_percentile5: o.count > 0 ? o.percentiles[5] : null,
                    encoder_psnr_db_percentile10: o.count > 0 ? o.percentiles[10] : null,
                    encoder_psnr_db_percentile25: o.count > 0 ? o.percentiles[25] : null,
                    encoder_psnr_db_percentile50: o.count > 0 ? o.percentiles[50] : null,
                    encoder_psnr_db_percentile75: o.count > 0 ? o.percentiles[75] : null,
                    average_outbound_want:
                        t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                    frames_dropped_encoder: t.framesDroppedEncoder,
                    duration_hq_simulcast_stream_encoded: e0(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: e0(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: e0(
                        this.bothSimulcastStreamsEncoded.totalDurationSeconds(),
                    ),
                    duration_fps_bandwidth_limited: e0(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: e0(this.bandwidthLimitedResolution.totalDurationSeconds()),
                    video_entropy_percentile1: u.count > 0 ? u.percentiles[1] : null,
                    video_entropy_percentile5: u.count > 0 ? u.percentiles[5] : null,
                    video_entropy_percentile10: u.count > 0 ? u.percentiles[10] : null,
                    video_entropy_percentile25: u.count > 0 ? u.percentiles[25] : null,
                    video_entropy_percentile50: u.count > 0 ? u.percentiles[50] : null,
                    video_entropy_percentile75: u.count > 0 ? u.percentiles[75] : null,
                    video_entropy_percentile99: u.count > 0 ? u.percentiles[99] : null,
                    duration_encoder_exynos: e0(t.encoderBuckets[eJ.yo.EXYNOS]),
                    duration_encoder_qualcomm: e0(t.encoderBuckets[eJ.yo.QUALCOMM]),
                    duration_encoder_mediatek: e0(t.encoderBuckets[eJ.yo.MEDIATEK]),
                    duration_encoder_wmf_sw: e0(t.encoderBuckets[eJ.yo.WMF_SW]),
                    duration_encoder_wmf_hw: e0(t.encoderBuckets[eJ.yo.WMF_HW]),
                    duration_encoder_wmf_direct3d: e0(t.encoderBuckets[eJ.yo.WMF_DIRECT_3D]),
                });
            }),
            e
        );
    }
    getInboundStats(e) {
        return this.getStats(this.inboundStats[e]);
    }
    destroyUser(e) {
        delete this.inboundStats[e];
    }
    getInboundParticipants() {
        return ew.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused),
            null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && ec().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return null;
        let t = Number(this.streamStart),
            n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
            i = Math.max(e.aggregationDuration, 0) / 1e3,
            r = [1, 5, 10, 25, 50, 75],
            a = e.fpsHistogram.getReport(r),
            s = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            l = e.resolutionHistogram.getReport(r),
            o = e.inboundBitrateEstimateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            d = e.localWantHistogram.getReport([1, 5, 10, 25, 50, 75, 90, 95]),
            c = e.systemResources.getStats(),
            u = {
                duration: Math.floor(n / 1e3),
                duration_aggregation: e0(i),
                duration_stopped_receiving: e0(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: e0(e.bitrateBuckets[8e6]),
                duration_stream_under_7mbps: e0(e.bitrateBuckets[7e6]),
                duration_stream_under_6mbps: e0(e.bitrateBuckets[6e6]),
                duration_stream_under_5mbps: e0(e.bitrateBuckets[5e6]),
                duration_stream_under_4mbps: e0(e.bitrateBuckets[4e6]),
                duration_stream_under_3mbps: e0(e.bitrateBuckets[3e6]),
                duration_stream_under_2mbps: e0(e.bitrateBuckets[2e6]),
                duration_stream_under_1_5mbps: e0(e.bitrateBuckets[15e5]),
                duration_stream_under_1mbps: e0(e.bitrateBuckets[1e6]),
                duration_stream_under_0_5mbps: e0(e.bitrateBuckets[5e5]),
                duration_stream_at_0mbps: e0(e.bitrateBuckets[0]),
                duration_fps_under_60: e0(e.fpsBuckets[60]),
                duration_fps_under_55: e0(e.fpsBuckets[55]),
                duration_fps_under_50: e0(e.fpsBuckets[50]),
                duration_fps_under_45: e0(e.fpsBuckets[45]),
                duration_fps_under_40: e0(e.fpsBuckets[40]),
                duration_fps_under_35: e0(e.fpsBuckets[35]),
                duration_fps_under_30: e0(e.fpsBuckets[30]),
                duration_fps_under_25: e0(e.fpsBuckets[25]),
                duration_fps_under_20: e0(e.fpsBuckets[20]),
                duration_fps_under_15: e0(e.fpsBuckets[15]),
                duration_fps_under_10: e0(e.fpsBuckets[10]),
                duration_fps_under_5: e0(e.fpsBuckets[5]),
                duration_fps_at_0: e0(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                min_resolution_width: e.minWidth ?? null,
                min_resolution_height: e.minHeight ?? null,
                duration_resolution_under_720: e0(e.resolutionBuckets[720]),
                duration_resolution_under_480: e0(e.resolutionBuckets[480]),
                duration_resolution_under_360: e0(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: e0(this.paused.totalDuration() / 1e3),
                duration_zero_receivers: e0(this.zeroReceivers.totalDuration() / 1e3),
                duration_video_stopped: e0(this.videoStopped.totalDuration() / 1e3),
                duration_hq_simulcast_stream_watched: e0(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: e0(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: e0(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: e0(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: e0(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: e0(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: a.percentiles[1],
                fps_percentile5: a.percentiles[5],
                fps_percentile10: a.percentiles[10],
                fps_percentile25: a.percentiles[25],
                fps_percentile50: a.percentiles[50],
                fps_percentile75: a.percentiles[75],
                bitrate_percentile1: s.percentiles[1],
                bitrate_percentile5: s.percentiles[5],
                bitrate_percentile10: s.percentiles[10],
                bitrate_percentile25: s.percentiles[25],
                bitrate_percentile50: s.percentiles[50],
                bitrate_percentile75: s.percentiles[75],
                bitrate_percentile99: s.percentiles[99],
                resolution_percentile1: l.percentiles[1],
                resolution_percentile5: l.percentiles[5],
                resolution_percentile10: l.percentiles[10],
                resolution_percentile25: l.percentiles[25],
                resolution_percentile50: l.percentiles[50],
                resolution_percentile75: l.percentiles[75],
                inbound_bitrate_estimate_percentile1: o.percentiles[1],
                inbound_bitrate_estimate_percentile5: o.percentiles[5],
                inbound_bitrate_estimate_percentile10: o.percentiles[10],
                inbound_bitrate_estimate_percentile25: o.percentiles[25],
                inbound_bitrate_estimate_percentile50: o.percentiles[50],
                inbound_bitrate_estimate_percentile75: o.percentiles[75],
                inbound_bitrate_estimate_percentile99: o.percentiles[99],
                local_want_percentile1: d.percentiles[1],
                local_want_percentile5: d.percentiles[5],
                local_want_percentile10: d.percentiles[10],
                local_want_percentile25: d.percentiles[25],
                local_want_percentile50: d.percentiles[50],
                local_want_percentile75: d.percentiles[75],
                local_want_percentile90: d.percentiles[90],
                local_want_percentile95: d.percentiles[95],
                average_local_want: d.mean,
                duration_video_effect: e0(this.videoEffectDuration.totalDuration() / 1e3),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: e0(e.decoderBuckets[eJ.eq.FFMPEG]),
                duration_decoder_dav1d: e0(e.decoderBuckets[eJ.eq.DAV1D]),
                duration_decoder_vp8_libvpx: e0(e.decoderBuckets[eJ.eq.VP8_LIBVPX]),
                duration_decoder_electron: e0(e.decoderBuckets[eJ.eq.ELECTRON]),
                duration_decoder_videotoolbox: e0(e.decoderBuckets[eJ.eq.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: e0(e.decoderBuckets[eJ.eq.UNCATEGORIZED]),
                duration_decoder_unknown: e0(e.decoderBuckets[eJ.eq.UNKNOWN]),
                duration_decoder_exynos: e0(e.decoderBuckets[eJ.eq.EXYNOS]),
                duration_decoder_webrtc: e0(e.decoderBuckets[eJ.eq.WEBRTC]),
                duration_decoder_qualcomm: e0(e.decoderBuckets[eJ.eq.QUALCOMM]),
                duration_decoder_mediatek: e0(e.decoderBuckets[eJ.eq.MEDIATEK]),
                duration_decoder_d3d11videodecoder: e0(e.decoderBuckets[eJ.eq.D3D11VIDEODECODER]),
                duration_decoder_android: e0(e.decoderBuckets[eJ.eq.ANDROID]),
                ...c,
            },
            {
                bytes: _,
                framesDropped: E,
                framesCodecError: A,
                framesCodec: h,
                framesNetwork: I,
                packets: f,
                packetsLost: p,
                nackCount: T,
                pliCount: m,
                qpSum: g,
                pauseCount: S,
                freezeCount: N,
                totalPausesDuration: C,
                totalFreezesDuration: R,
                totalFramesDuration: O,
                keyframes: L,
                passthroughCount: D,
                cryptorSuccessCount: y,
                cryptorFailureCount: v,
                cryptorDuration: b,
                cryptorAttempts: M,
                cryptorMissingKeyCount: P,
                cryptorInvalidNonceCount: U,
                qualityDecodeErrors: w,
                qualityDecoderReboots: G,
                qualityScoreErrors: x,
                qualityFrameDrops: k,
                qualitySizeMismatches: F,
            } = e.aggregatedProperties,
            V = (v ?? 0) - (e.cryptorFailureBeforeSuccessCount ?? 0);
        return (
            e instanceof eJ.ET
                ? ((u.sender_freeze_count = N),
                  (u.sender_total_freezes_duration = R),
                  (u.sender_total_frames_duration = O),
                  (u.consecutive_static_color_frames_max = e.consecutiveStaticColorFramesMax))
                : ((u.receiver_freeze_count = N),
                  (u.receiver_total_freezes_duration = R),
                  (u.receiver_total_frames_duration = O),
                  (u.receiver_pause_count = S),
                  (u.receiver_total_pauses_duration = C)),
            {
                ...u,
                avg_bitrate: i > 0 ? Math.round(((_ ?? 0) * 8) / i) : 0,
                avg_fps: i > 0 ? Math.round((h ?? 0) / i) : 0,
                num_bytes: _,
                num_packets_lost: p,
                num_packets: f,
                num_frames: I,
                num_frames_codec_error: A,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: E,
                num_nacks: T,
                num_plis: m,
                qp_sum: g,
                num_keyframes: L,
                cryptor_passthrough_count: D,
                cryptor_success_count: y,
                cryptor_failure_count: v,
                cryptor_duration: b,
                cryptor_attempts: M,
                cryptor_missing_key_count: P,
                cryptor_invalid_nonce_count: U,
                cryptor_failure_after_success_count: V,
                encoder_quality_decode_errors: w,
                encoder_quality_decoder_reboots: G,
                encoder_quality_score_errors: x,
                encoder_quality_frame_drops: k,
                encoder_quality_size_mismatches: F,
            }
        );
    }
    receivedStats(e, t, n) {
        let i = t.transport,
            r = (0, ea.isWeb)() ? 1 : (i.receiverReports?.length ?? 0),
            a = new Set(),
            s = new Set();
        this.updateSendState({ receivers: r });
        let l = this.cameraDuration.value;
        (this.cameraDuration.value = this.connection.context === p.x.DEFAULT && null != t.camera),
            (this.cameraOpportunityDuration.value =
                this.connection.context === p.x.DEFAULT && null != t.camera && this.callUserIdsCount > 1),
            (this.cameraSendDuration.value = this.connection.context === p.x.DEFAULT && null != t.camera && r > 0),
            this.cameraDuration.value && !l && this.cameraToggles++;
        let o = ec().max(n.map((e) => e.quality)),
            d = t.rtp.outbound.filter((e) => "video" === e.type && e?.videoEntropy != null)[0],
            c = d?.videoEntropy;
        t.rtp.outbound
            .filter((e) => "video" === e.type)
            .forEach((r) => {
                if (null != r) {
                    let _ = r.ssrc,
                        E = this.outboundStats[_];
                    null == E &&
                        (console.warn(`Unknown outbound video stream with SSRC: ${_}`),
                        (E = new eJ.ET(this.timestampProducer)),
                        (this.outboundStats[_] = E)),
                        null == E.timeToFirstFrame &&
                            (r.framesEncoded > 0 || (r.frameRateInput ?? 0) > 0) &&
                            (E.timeToFirstFrame = Math.max(0, e - E.startTime)),
                        null != c && c >= 0 && this.videoEntropy.addSample(c);
                    let A = n.find((e) => e.ssrc === _);
                    var s,
                        l,
                        d = !0;
                    if (this.connection.context === p.x.STREAM) {
                        var u = this.connection.getRemoteVideoSinkWants(_);
                        (null == u || 0 === u) &&
                            A?.quality === o &&
                            (u = this.connection.getRemoteVideoSinkWants("any")),
                            (d = (u ?? 0) > 0);
                    }
                    let h = this.videoStopped.value || !d;
                    if ((h !== E.isVideoStopped && E.setVideoStopped(h, eJ.iF.SenderStopped), !h)) {
                        let n = eJ.tH.parseOutboundStats(r, e);
                        this.connection.context === p.x.STREAM &&
                            ((s = t.screenshare),
                            (l = n.framesCodec),
                            (n.screenshareFramesUnique =
                                null == s
                                    ? l
                                    : null != s.hybridDxgiFramesUnique ||
                                        null != s.hybridGdiBitBltFramesUnique ||
                                        null != s.hybridGdiPrintWindowFramesUnique ||
                                        null != s.hybridVideohookFramesUnique ||
                                        null != s.hybridGraphicsCaptureFramesUnique
                                      ? (s.hybridDxgiFramesUnique ?? 0) +
                                        (s.hybridGdiBitBltFramesUnique ?? 0) +
                                        (s.hybridGdiPrintWindowFramesUnique ?? 0) +
                                        (s.hybridVideohookFramesUnique ?? 0) +
                                        (s.hybridGraphicsCaptureFramesUnique ?? 0)
                                      : (s.screenshareFrames ?? 0) +
                                        (s.videohookFrames ?? 0) +
                                        (s.quartzFrames ?? 0) +
                                        (s.screenCaptureKitFrames ?? 0) +
                                        (s.x11Frames ?? 0) +
                                        (s.pipewireFrames ?? 0))),
                            E.appendAndIncrementStats(n),
                            null != r.minResolutionWidth &&
                                r.minResolutionWidth > 0 &&
                                (null == E.minWidth || r.minResolutionWidth < E.minWidth) &&
                                (E.minWidth = r.minResolutionWidth),
                            null != r.minResolutionHeight &&
                                r.minResolutionHeight > 0 &&
                                (null == E.minHeight || r.minResolutionHeight < E.minHeight) &&
                                (E.minHeight = r.minResolutionHeight),
                            E.encoderCodec !== eJ.Wn.UNKNOWN && a.add(E.encoderCodec);
                        let o = A?.maxBitrate;
                        E.appendTargetRates(
                            A?.maxFrameRate,
                            r.bitrateTarget ?? Math.min(i.availableOutgoingBitrate ?? 0, o ?? 0),
                            o,
                            i.availableOutgoingBitrate,
                        ),
                            (E.averageEncodeTime = r.averageEncodeTime ?? 0),
                            (E.framesDroppedRateLimiter = r.framesDroppedRateLimiter ?? null),
                            (E.framesDroppedEncoderQueue = r.framesDroppedEncoderQueue ?? null),
                            (E.framesDroppedCongestionWindow = r.framesDroppedCongestionWindow ?? null),
                            (E.framesDroppedEncoder = r.framesDroppedEncoder ?? null),
                            (this.hqSimulcastStreamEncoded.value = r.hqSimulcastStreamEncoded ?? !1),
                            (this.lqSimulcastStreamEncoded.value = r.lqSimulcastStreamEncoded ?? !1),
                            (this.bothSimulcastStreamsEncoded.value =
                                this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value),
                            (this.bandwidthLimitedResolution.value = r.bandwidthLimitedResolution ?? !1),
                            (this.bandwidthLimitedFramerate.value = r.bandwidthLimitedFrameRate ?? !1);
                    }
                }
            }),
            this.paused.value ||
                ec().forEach(t.rtp.inbound, (t, n) => {
                    let r = t.find((e) => "video" === e.type);
                    if (null != r) {
                        let t = this.inboundStats[n];
                        null == t &&
                            (console.warn(`Unknown inbound video stream for user: ${n}`),
                            (t = new eJ.dg(this.timestampProducer)),
                            (this.inboundStats[n] = t));
                        let a = eJ.tH.parseInboundStats(r, e);
                        this.statCollectionPausedUsers.has(n) ||
                            (t.appendAndIncrementStats(a), t.appendTransportStats(i)),
                            null != r.minResolutionWidth &&
                                r.minResolutionWidth > 0 &&
                                (null == t.minWidth || r.minResolutionWidth < t.minWidth) &&
                                (t.minWidth = r.minResolutionWidth),
                            null != r.minResolutionHeight &&
                                r.minResolutionHeight > 0 &&
                                (null == t.minHeight || r.minResolutionHeight < t.minHeight) &&
                                (t.minHeight = r.minResolutionHeight),
                            a.packets > 0 && this.emit("fps-update", n, a.framesCodec, a.timestamp),
                            t.decoderCodec !== eJ.Wn.UNKNOWN && s.add(t.decoderCodec),
                            null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== a.size &&
                0 !== s.size &&
                ((0, eq._)(a, s) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    sampleStats = (e) => {
        if (null == e) return;
        let t = this.timestampProducer.now();
        if (
            (this.networkQuality.incrementNetworkStats(t),
            this.updateSystemResourceStats(),
            this.updateVideoEffectStats(e),
            null == e)
        )
            return;
        let n = this.connection.getStreamParameters();
        this.receivedStats(t, e, n);
    };
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = e?.rtp.outbound.find((e) => "video" === e.type);
        this.videoEffectDuration.value = t?.type === "video" && null != t.filter;
    }
}
var e3 = n(935172);
let e6 = [1, 100, 1e3, 1e4],
    e4 = [100, 500, 1e3, 5e3];
class e5 {
    userId;
    connection;
    timestampProducer;
    listeningUsers = new Set();
    listening;
    speaking;
    participation;
    connected;
    muted;
    deafened;
    noiseCancellation;
    spatialAudio;
    timesUntilSpeakingDurationMilestonesMs = new Map();
    speakingMinimumChunks = new Map();
    speakingMinimumChunkCounts = new Map();
    speechEventCount = 0;
    constructor(e, t, n = T.TF) {
        (this.userId = e),
            (this.connection = t),
            (this.timestampProducer = n),
            (this.listening = new T.W0(this.timestampProducer)),
            (this.speaking = new T.W0(this.timestampProducer)),
            (this.participation = new T.W0(this.timestampProducer)),
            (this.connected = new T.W0(this.timestampProducer)),
            (this.muted = new T.W0(this.timestampProducer)),
            (this.deafened = new T.W0(this.timestampProducer)),
            (this.noiseCancellation = new T.w6(t.getNoiseCancellation(), this.timestampProducer)),
            (this.spatialAudio = new T.w6(t.getSpatialAudioEnabled(), this.timestampProducer));
    }
    start() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.listeningUsers.clear(),
            this.listening.reset(),
            this.speaking.reset(),
            this.participation.reset(),
            this.muted.reset(),
            this.deafened.reset(),
            this.connected.reset(),
            this.noiseCancellation.reset(),
            this.spatialAudio.reset(),
            this.timesUntilSpeakingDurationMilestonesMs.clear(),
            this.speakingMinimumChunks.clear(),
            this.speakingMinimumChunkCounts.clear(),
            (this.speechEventCount = 0),
            this.connected.start(),
            this.connection.on(e3.y.Speaking, (e, t, n) => {
                this.userId === e ? this.onSpeaking(0 !== t) : this.onListening(0 !== t, e);
            }),
            this.onMuted(e),
            this.onDeafened(t),
            this.connection.on(e3.y.Mute, (e) => {
                this.onMuted(e);
            }),
            this.connection.on(e3.y.Deafen, (e) => {
                this.onDeafened(e);
            });
    }
    onSpeaking(e) {
        if (e) this.speaking.start(), this.participation.start(), this.speechEventCount++;
        else {
            let e = this.connected.lastStartTime,
                t = this.speaking.lastStartTime,
                n = this.speaking.lastElapsed;
            this.addSpeechChunk(),
                this.speaking.stop(),
                this.listening.isRunning() || this.participation.stop(),
                this.computeSpeakingDurationMilestones(e, t, n);
        }
    }
    onListening(e, t) {
        e
            ? (this.listeningUsers.add(t), this.listening.start(), this.participation.start())
            : this.listeningUsers.delete(t) &&
              0 === this.listeningUsers.size &&
              (this.listening.stop(), this.speaking.isRunning() || this.participation.stop());
    }
    onMuted(e) {
        e ? this.muted.start() : this.muted.stop();
    }
    onDeafened(e) {
        e ? this.deafened.start() : this.deafened.stop();
    }
    computeSpeakingDurationMilestones(e, t, n) {
        if (null == e || null == t) return;
        let i = this.speaking.elapsed().asMilliseconds();
        e6.filter((e) => !this.timesUntilSpeakingDurationMilestonesMs.has(e))
            .filter((e) => i >= e)
            .forEach((i) => {
                this.timesUntilSpeakingDurationMilestonesMs.set(i, t - e + i - n);
            });
    }
    addSpeechChunk() {
        let e = this.speaking.lastStartTime;
        if (null == e) return;
        let t = this.timestampProducer.now() - e;
        e4.filter((e) => t >= e).forEach((e) => {
            let n = this.speakingMinimumChunks.get(e) ?? 0;
            this.speakingMinimumChunks.set(e, n + t);
            let i = this.speakingMinimumChunkCounts.get(e) ?? 0;
            this.speakingMinimumChunkCounts.set(e, i + 1);
        });
    }
    setNoiseCancellationEnabled(e) {
        this.noiseCancellation.value = e;
    }
    setSpatialAudioEnabled(e) {
        this.spatialAudio.value = e;
    }
    stop() {
        this.addSpeechChunk();
        let e = this.connected.lastStartTime,
            t = this.speaking.lastStartTime,
            n = this.speaking.lastElapsed;
        this.speaking.stop(),
            this.listening.stop(),
            this.participation.stop(),
            this.connected.stop(),
            this.muted.stop(),
            (this.noiseCancellation.value = !1),
            (this.spatialAudio.value = !1),
            this.computeSpeakingDurationMilestones(e, t, n);
    }
    getDurationStats() {
        let e = this.speaking.lastStartTime,
            t = this.timestampProducer.now(),
            n = null != e ? t - e : 0;
        return (
            this.computeSpeakingDurationMilestones(
                this.connected.lastStartTime,
                this.speaking.lastStartTime,
                this.speaking.lastElapsed,
            ),
            {
                duration_listening_ms: this.listening.elapsed().asMilliseconds(),
                duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
                duration_participation_ms: this.participation.elapsed().asMilliseconds(),
                duration_connected_ms: this.connected.elapsed().asMilliseconds(),
                duration_muted_ms: this.muted.elapsed().asMilliseconds(),
                duration_deafened_ms: this.deafened.elapsed().asMilliseconds(),
                duration_noise_cancellation_enabled_ms: this.noiseCancellation.totalDuration(),
                duration_spatial_ms: this.spatialAudio.totalDuration(),
                speech_event_count: this.speechEventCount,
                ...e6
                    .filter((e) => this.timesUntilSpeakingDurationMilestonesMs.has(e))
                    .reduce(
                        (e, t) => ({
                            ...e,
                            [`time_to_first_${t}ms_speech_ms`]: this.timesUntilSpeakingDurationMilestonesMs.get(t),
                        }),
                        {},
                    ),
                ...e4
                    .filter((e) => this.speakingMinimumChunks.has(e) || n >= e)
                    .reduce(
                        (e, t) => ({
                            ...e,
                            [`duration_speaking_gte_${t}ms_ms`]:
                                (this.speakingMinimumChunks.get(t) ?? 0) + (n >= t ? n : 0),
                            [`speech_event_count_gte_${t}ms`]:
                                (this.speakingMinimumChunkCounts.get(t) ?? 0) + +(n >= t),
                        }),
                        {},
                    ),
            }
        );
    }
}
var e7 = (((l = {}).InputDeviceSampleRateChanged = "input-device-sample-rate-changed"), l);
class e8 extends f.A {
    connection;
    inboundStats;
    outboundStats;
    networkQuality;
    systemResources;
    duration;
    decryptionFailures;
    routingFailures;
    periodicInboundStats;
    inputDeviceStats;
    outputDeviceStats;
    constructor(e) {
        super(),
            (this.connection = e),
            (this.networkQuality = new eQ()),
            (this.systemResources = new eY.A()),
            (this.inboundStats = {}),
            (this.outboundStats = {
                packetsSent: 0,
                bytesSent: 0,
                packetsLost: 0,
                passthroughCount: 0,
                encryptSuccessCount: 0,
                encryptFailureCount: 0,
                encryptDuration: 0,
                encryptAttempts: 0,
                encryptMaxAttempts: 0,
                encryptMissingKeyCount: 0,
                bytesAvailable: 0,
                bytesTarget: 0,
                previousTimestampMs: 0,
                aggregationDurationMs: 0,
                speakingAudioLevel: new eK.d(),
            }),
            (this.duration = { listening: 0, speaking: 0, participation: 0, connected: 0 }),
            (this.periodicInboundStats = {}),
            (this.inputDeviceStats = {}),
            (this.outputDeviceStats = {});
    }
    start() {
        this.connection.on(p.yq.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(p.yq.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = ec().reduce(
            this.inboundStats,
            (e, t) => {
                (e.mosSum += t.mosSum), (e.mosCount += t.mosCount);
                for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                return e;
            },
            { mosSum: 0, mosCount: 0, mosBuckets: [0, 0, 0, 0, 0] },
        );
        return {
            mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
            mos_1: e.mosBuckets[1],
            mos_2: e.mosBuckets[2],
            mos_3: e.mosBuckets[3],
            mos_4: e.mosBuckets[4],
        };
    }
    getPacketStats() {
        let e = ec().reduce(
            this.inboundStats,
            (e, t) => (
                (e.packetsReceived += t.packetsReceived),
                (e.packetsReceivedLost += t.packetsLost),
                (e.nackCount += t.nackCount),
                (e.fecPacketsReceived += t.fecPacketsReceived),
                (e.fecPacketsDiscarded += t.fecPacketsDiscarded),
                e
            ),
            { packetsReceived: 0, packetsReceivedLost: 0, nackCount: 0, fecPacketsReceived: 0, fecPacketsDiscarded: 0 },
        );
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            num_nacks_sent: e.nackCount,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded,
        };
    }
    getBytesStats() {
        let e = ec().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0),
            t = this.outboundStats.aggregationDurationMs / 1e3;
        return {
            bytes_sent: this.outboundStats.bytesSent,
            bytes_received: e,
            outbound_bandwidth_estimate: t > 0 ? Math.round((8 * this.outboundStats.bytesAvailable) / t) : 0,
            audio_target_bitrate: t > 0 ? Math.round((8 * this.outboundStats.bytesTarget) / t) : 0,
        };
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getSystemResourceStats() {
        return this.systemResources.getStats();
    }
    getBufferStats() {
        let e = ec().reduce(
                this.inboundStats,
                (e, t) => {
                    let n = null;
                    t.bufferStats.audioJitterBufferHistogram.getSamples() > 0
                        ? (n = t.bufferStats.audioJitterBufferHistogram.getPercentile(75))
                        : null != t.bufferStats.audioJitterBuffer && (n = t.bufferStats.audioJitterBuffer.p75);
                    let i = null;
                    return (
                        null == e
                            ? (i = null)
                            : e.audioJitterBufferHistogram.getSamples() > 0
                              ? (i = e.audioJitterBufferHistogram.getPercentile(75))
                              : null != e.audioJitterBuffer && (i = e.audioJitterBuffer.p75),
                        (null == e || null == i || (null != n && n > i)) && (e = t.bufferStats),
                        e
                    );
                },
                null,
            ),
            t = null;
        null != e &&
            (e.audioJitterBufferHistogram.getSamples() > 0
                ? (t = e.audioJitterBufferHistogram)
                : null != e.audioJitterBuffer && (t = e.audioJitterBuffer));
        let n = null;
        null != e &&
            (e.audioJitterTargetHistogram.getSamples() > 0
                ? (n = e.audioJitterTargetHistogram)
                : null != e.audioJitterTarget && (n = e.audioJitterTarget));
        let i = null;
        return (
            null != e &&
                (e.audioJitterDelayHistogram.getSamples() > 0
                    ? (i = e.audioJitterDelayHistogram)
                    : null != e.audioJitterDelay && (i = e.audioJitterDelay)),
            {
                ...(function (e) {
                    let t = {};
                    for (let n in e) {
                        let i = e[n];
                        if (i instanceof eK.d) {
                            let e = [75, 95, 99],
                                r = i.getReport(e);
                            (t[n + "_mean"] = Math.round(r.mean)),
                                (t[n + "_p75"] = Math.round(r.percentiles[75])),
                                (t[n + "_p95"] = Math.round(r.percentiles[95])),
                                (t[n + "_p99"] = Math.round(r.percentiles[99])),
                                (t[n + "_max"] = Math.round(r.max));
                        } else
                            (t[n + "_mean"] = null != i ? i.mean : 0),
                                (t[n + "_p75"] = null != i ? i.p75 : 0),
                                (t[n + "_p95"] = null != i ? i.p95 : 0),
                                (t[n + "_p99"] = null != i ? i.p99 : 0),
                                (t[n + "_max"] = null != i ? i.max : 0);
                    }
                    return t;
                })({
                    audio_jitter_buffer: t,
                    audio_jitter_target: n,
                    audio_jitter_delay: i,
                    relative_reception_delay: e?.relativeReceptionDelay ?? null,
                    relative_playout_delay: e?.relativePlayoutDelay ?? null,
                }),
            }
        );
    }
    getFrameOpStats() {
        let e = ec().reduce(
            this.inboundStats,
            (e, t) => (
                null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent),
                null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal),
                null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged),
                null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded),
                null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated),
                null != t.frameOpStats.preemptiveExpanded &&
                    (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded),
                null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng),
                e
            ),
            { silent: 0, normal: 0, merged: 0, expanded: 0, accelerated: 0, preemptiveExpanded: 0, cng: 0 },
        );
        return {
            frame_op_silent: e.silent,
            frame_op_normal: e.normal,
            frame_op_merged: e.merged,
            frame_op_expanded: e.expanded,
            frame_op_accelerated: e.accelerated,
            frame_op_preemptive_expanded: e.preemptiveExpanded,
            frame_op_cng: e.cng,
        };
    }
    getDurationStats() {
        return {
            duration_listening: this.duration.listening,
            duration_speaking: this.duration.speaking,
            duration_participation: this.duration.participation,
            duration_connected: this.duration.connected,
        };
    }
    getTransportStats() {
        return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
    }
    getE2EEStats() {
        let e = ec().reduce(
            this.inboundStats,
            (e, t) => (
                (e.passthroughCount += t.passthroughCount ?? 0),
                (e.decryptSuccessCount += t.decryptSuccessCount ?? 0),
                (e.decryptFailureCount += t.decryptFailureCount ?? 0),
                (e.decryptDuration += t.decryptDuration ?? 0),
                (e.decryptAttempts += t.decryptAttempts ?? 0),
                (e.decryptMissingKeyCount += t.decryptMissingKeyCount ?? 0),
                (e.decryptInvalidNonceCount += t.decryptInvalidNonceCount ?? 0),
                (e.decryptFailureAfterSuccessCount +=
                    (t.decryptFailureCount ?? 0) - (t.decryptFailureBeforeSuccessCount ?? 0)),
                e
            ),
            {
                passthroughCount: 0,
                decryptSuccessCount: 0,
                decryptFailureCount: 0,
                decryptDuration: 0,
                decryptAttempts: 0,
                decryptMissingKeyCount: 0,
                decryptInvalidNonceCount: 0,
                decryptFailureAfterSuccessCount: 0,
            },
        );
        return {
            decrypt_passthrough_count: e.passthroughCount,
            decrypt_success_count: e.decryptSuccessCount,
            decrypt_failure_count: e.decryptFailureCount,
            decrypt_duration: e.decryptDuration,
            decrypt_attempts: e.decryptAttempts,
            decrypt_missing_key_count: e.decryptMissingKeyCount,
            decrypt_invalid_nonce_count: e.decryptInvalidNonceCount,
            decrypt_failure_after_success_count: e.decryptFailureAfterSuccessCount,
            encrypt_passthrough_count: this.outboundStats.passthroughCount,
            encrypt_success_count: this.outboundStats.encryptSuccessCount,
            encrypt_failure_count: this.outboundStats.encryptFailureCount,
            encrypt_duration: this.outboundStats.encryptDuration,
            encrypt_attempts: this.outboundStats.encryptAttempts,
            encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
            encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount,
        };
    }
    getAudioDeviceStats() {
        return {
            input_device_restart_count: this.inputDeviceStats.restartCount?.accumulated,
            output_device_restart_count: this.outputDeviceStats.restartCount?.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            input_device_buffer_overfull_count: this.inputDeviceStats.bufferViolations?.accumulated,
            output_device_buffer_underrun_count: this.outputDeviceStats.bufferViolations?.accumulated,
            input_device_session_sample_rate: this.inputDeviceStats.sessionSampleRate,
            output_device_session_sample_rate: this.outputDeviceStats.sessionSampleRate,
            input_device_time_from_connect_to_first_audio_ms: this.inputDeviceStats.timeFromConnectToFirstCallbackMs,
            output_device_time_from_connect_to_first_audio_ms: this.outputDeviceStats.timeFromConnectToFirstCallbackMs,
        };
    }
    getAudioLevelStats() {
        let e = this.outboundStats.speakingAudioLevel.getReport([1, 5, 10, 25, 50, 75, 90, 95, 99]);
        return {
            outbound_audio_level_db_p1: e.percentiles[1],
            outbound_audio_level_db_p5: e.percentiles[5],
            outbound_audio_level_db_p10: e.percentiles[10],
            outbound_audio_level_db_p25: e.percentiles[25],
            outbound_audio_level_db_p50: e.percentiles[50],
            outbound_audio_level_db_p75: e.percentiles[75],
            outbound_audio_level_db_p90: e.percentiles[90],
            outbound_audio_level_db_p95: e.percentiles[95],
            outbound_audio_level_db_p99: e.percentiles[99],
            outbound_audio_level_db_max: e.max,
            outbound_audio_level_db_mean: e.mean,
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [t, n] of Object.entries(this.periodicInboundStats)) {
            let { previous: i, current: r, currentTimestampMs: a, previousTimestampMs: s, numRateSamples: l } = n;
            if (void 0 !== s && a > s) {
                let o = a - s,
                    d = {
                        userId: t,
                        silent: r.silent ?? 0 - (i.silent ?? 0),
                        normal: r.normal ?? 0 - (i.normal ?? 0),
                        merged: r.merged ?? 0 - (i.merged ?? 0),
                        expanded: r.expanded ?? 0 - (i.expanded ?? 0),
                        accelerated: r.accelerated ?? 0 - (i.accelerated ?? 0),
                        preemptiveExpanded: r.preemptiveExpanded ?? 0 - (i.preemptiveExpanded ?? 0),
                        cng: r.cng ?? 0 - (i.cng ?? 0),
                        accelerateRate: n.accelerateRateSum / l,
                        expandRate: n.expandRateSum / l,
                        preemptiveExpandRate: n.preemptiveExpandRateSum / l,
                        speechExpandRate: n.speechExpandRateSum / l,
                        durationMs: o,
                    };
                d.normal + d.merged + d.expanded + d.accelerated + d.preemptiveExpanded > 0 && e.push(d);
            }
            (this.periodicInboundStats[t].accelerateRateSum = 0),
                (this.periodicInboundStats[t].expandRateSum = 0),
                (this.periodicInboundStats[t].preemptiveExpandRateSum = 0),
                (this.periodicInboundStats[t].speechExpandRateSum = 0),
                (this.periodicInboundStats[t].numRateSamples = 0),
                (this.periodicInboundStats[t].previous = r),
                (this.periodicInboundStats[t].previousTimestampMs = a);
        }
        return e;
    }
    sampleAudioDevice = (e, t) => {
        void 0 !== e &&
            (void 0 !== e.restartCount && (t.restartCount = e9(e.restartCount, t.restartCount)),
            void 0 !== e.bufferViolations && (t.bufferViolations = e9(e.bufferViolations, t.bufferViolations)),
            (e.timeToFirstCallbackMs ?? 0) !== 0 &&
                void 0 === t.timeToFirstCallbackMs &&
                (t.timeToFirstCallbackMs = e.timeToFirstCallbackMs),
            (e.sessionSampleRate ?? 0) !== 0 &&
                (t.sessionSampleRate !== e.sessionSampleRate &&
                    this.emit("input-device-sample-rate-changed", e.sessionSampleRate ?? 0),
                (t.sessionSampleRate = e.sessionSampleRate)),
            void 0 !== e.timeFromConnectToFirstCallbackMs &&
                void 0 === t.timeFromConnectToFirstCallbackMs &&
                (t.timeFromConnectToFirstCallbackMs = e.timeFromConnectToFirstCallbackMs));
    };
    appendTargetRates = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (0 === e.previousTimestampMs) {
            e.previousTimestampMs = performance.now();
            return;
        }
        let i = performance.now();
        e.aggregationDurationMs += i - e.previousTimestampMs;
        let r = (i - e.previousTimestampMs) / 1e3;
        (e.bytesAvailable += (t / 8) * r), (e.bytesTarget += (n / 8) * r), (e.previousTimestampMs = i);
    };
    sampleStats = (e) => {
        if (null == e) return;
        this.networkQuality.incrementNetworkStats((0, T.tB)()),
            this.systemResources.takeSample(),
            this.duration.connected++;
        let t = this.outboundStats.packetsSent,
            n = ec().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                packetsReceived: 0,
            }),
            i = 0;
        ec().forEach(e.rtp.outbound, (e) => {
            "audio" === e.type &&
                ((i = e.bitrateTarget ?? 0),
                (this.outboundStats = {
                    ...this.outboundStats,
                    packetsSent: e.packetsSent,
                    bytesSent: e.bytesSent,
                    packetsLost: e.packetsLost ?? 0,
                    passthroughCount: e.passthroughCount ?? 0,
                    encryptSuccessCount: e.encryptSuccessCount ?? 0,
                    encryptFailureCount: e.encryptFailureCount ?? 0,
                    encryptDuration: e.encryptDuration ?? 0,
                    encryptAttempts: e.encryptAttempts ?? 0,
                    encryptMaxAttempts: e.encryptMaxAttempts ?? 0,
                    encryptMissingKeyCount: e.encryptMissingKeyCount ?? 0,
                }),
                !0 == !!e.audioDetected &&
                    null != e.audioLevel &&
                    this.outboundStats.speakingAudioLevel.addSample(20 * Math.log(e.audioLevel)));
        }),
            (this.decryptionFailures = e.transport.decryptionFailures),
            (this.routingFailures = e.transport.routingFailures),
            this.appendTargetRates(this.outboundStats, e.transport.availableOutgoingBitrate, i),
            ec().forEach(e.rtp.inbound, (t, n) => {
                ec().forEach(t, (t) => {
                    if ("audio" === t.type) {
                        let i = this.inboundStats[n],
                            r = e.transport.ping ?? 0,
                            a = t.packetsReceived,
                            s = t.packetsLost,
                            l = t.bytesReceived,
                            o = t.nackCount,
                            d = t.fecPacketsReceived ?? 0,
                            c = t.fecPacketsDiscarded ?? 0,
                            u = t.jitterBuffer ?? 0,
                            _ = {
                                audioJitterBuffer: t.audioJitterBuffer,
                                audioJitterBufferHistogram: i?.bufferStats.audioJitterBufferHistogram ?? new eK.d(),
                                audioJitterTarget: t.audioJitterTarget,
                                audioJitterTargetHistogram: i?.bufferStats.audioJitterTargetHistogram ?? new eK.d(),
                                audioJitterDelay: t.audioJitterDelay,
                                audioJitterDelayHistogram: i?.bufferStats.audioJitterDelayHistogram ?? new eK.d(),
                                relativeReceptionDelay: t.relativeReceptionDelay,
                                relativePlayoutDelay: t.relativePlayoutDelay,
                            };
                        _.audioJitterBufferHistogram.addSamples(t.audioJitterBufferSamples ?? []),
                            _.audioJitterDelayHistogram.addSamples(t.audioJitterDelaySamples ?? []),
                            _.audioJitterTargetHistogram.addSamples(t.audioJitterTargetSamples ?? []);
                        let E = {
                                silent: t.opSilence,
                                normal: t.opNormal,
                                merged: t.opMerge,
                                expanded: t.opExpand,
                                accelerated: t.opAccelerate,
                                preemptiveExpanded: t.opPreemptiveExpand,
                                cng: t.opCNG,
                            },
                            A = {
                                passthroughCount: t.passthroughCount ?? 0,
                                decryptSuccessCount: t.decryptSuccessCount ?? 0,
                                decryptFailureCount: t.decryptFailureCount ?? 0,
                                decryptDuration: t.decryptDuration ?? 0,
                                decryptAttempts: t.decryptAttempts ?? 0,
                                decryptMissingKeyCount: t.decryptMissingKeyCount ?? 0,
                                decryptInvalidNonceCount: t.decryptInvalidNonceCount ?? 0,
                            };
                        if (null != i) {
                            let e = a - i.packetsReceived,
                                h = s - i.packetsLost,
                                I = 0,
                                f = i.mosBuckets,
                                p =
                                    i.decryptFailureBeforeSuccessCount ??
                                    (A.decryptSuccessCount > 0 ? A.decryptFailureCount : void 0);
                            e > 0 &&
                                h >= 0 &&
                                ((I = this.calculateMos(r + u, ec().clamp(h / (e + h), 0, 1))), f[Math.floor(I)]++),
                                (this.inboundStats[n] = {
                                    packetsReceived: a,
                                    bytesReceived: l,
                                    packetsLost: s,
                                    nackCount: o ?? 0,
                                    fecPacketsReceived: d,
                                    fecPacketsDiscarded: c,
                                    mos: I,
                                    mosSum: i.mosSum + I,
                                    mosCount: i.mosCount + +(I > 0),
                                    mosBuckets: f,
                                    bufferStats: _,
                                    frameOpStats: E,
                                    decryptFailureBeforeSuccessCount: p,
                                    ...A,
                                }),
                                (this.periodicInboundStats[n] = {
                                    previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                    previous: this.periodicInboundStats[n].previous,
                                    currentTimestampMs: performance.now(),
                                    current: E,
                                    accelerateRateSum:
                                        this.periodicInboundStats[n].accelerateRateSum + (t.accelerateRate ?? 0),
                                    expandRateSum: this.periodicInboundStats[n].expandRateSum + (t.expandRate ?? 0),
                                    preemptiveExpandRateSum:
                                        this.periodicInboundStats[n].preemptiveExpandRateSum +
                                        (t.preemptiveExpandRate ?? 0),
                                    speechExpandRateSum:
                                        this.periodicInboundStats[n].speechExpandRateSum + (t.speechExpandRate ?? 0),
                                    numRateSamples: this.periodicInboundStats[n].numRateSamples + 1,
                                });
                        } else
                            (this.inboundStats[n] = {
                                packetsReceived: a,
                                bytesReceived: l,
                                packetsLost: s,
                                nackCount: o ?? 0,
                                fecPacketsReceived: d,
                                fecPacketsDiscarded: c,
                                mos: 0,
                                mosSum: 0,
                                mosCount: 0,
                                mosBuckets: [0, 0, 0, 0, 0],
                                bufferStats: _,
                                frameOpStats: E,
                                ...A,
                            }),
                                (this.periodicInboundStats[n] = {
                                    previousTimestampMs: performance.now(),
                                    previous: E,
                                    currentTimestampMs: performance.now(),
                                    current: E,
                                    accelerateRateSum: t.accelerateRate ?? 0,
                                    expandRateSum: t.expandRate ?? 0,
                                    preemptiveExpandRateSum: t.preemptiveExpandRate ?? 0,
                                    speechExpandRateSum: t.speechExpandRate ?? 0,
                                    numRateSamples: 1,
                                });
                    }
                });
            }),
            void 0 !== e.audioDevice &&
                (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats),
                this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
        let r = !1,
            a = !1;
        this.outboundStats.packetsSent > t && ((r = !0), this.duration.speaking++),
            ec().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                packetsReceived: 0,
            }).packetsReceived > n.packetsReceived && ((a = !0), this.duration.listening++),
            (r || a) && this.duration.participation++;
    };
    calculateMos(e, t) {
        let n = this.calculateR(e, t);
        return n < 0 ? 1 : n > 100 ? 4.5 : 1 + 0.035 * n + 71e-7 * n * (n - 60) * (100 - n);
    }
    calculateR(e, t) {
        return 93.4 - (0.024 * e + (e > 177.3 ? 0.11 * (e - 177.3) : 0)) - (10 + (122 * t) / (t + 10));
    }
}
function e9(e, t) {
    let { accumulated: n, lastValue: i } = t ?? { accumulated: 0, lastValue: 0 };
    return { accumulated: i > e ? n + e : n + (e - i), lastValue: e };
}
var te = n(202541),
    tt = n(396574),
    tn = n(375708);
let ti = /^https/.test("https:") ? "wss:" : "ws:",
    tr = 0,
    ta = [];
class ts extends f.A {
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
    _hasCodecs;
    _mediaEngineConnectionId;
    _createdTime;
    _connectStartTime;
    _connectCompletedTime;
    _rtcConnectionId;
    _connectCount;
    _connectionSerial;
    _hasEverConnected;
    _connecting;
    _voiceConnectionSuccessTracked;
    _mediaEngineConnectDuration;
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
        channelId: i,
        context: r = V.x.DEFAULT,
        streamServerId: a,
        streamChannelId: s,
        parentMediaSessionId: l,
        joinVoiceId: o,
    }) {
        super(),
            (this.context = r),
            this.recordEvent({ c: 0 }),
            (this._fetchAsyncResourcesPromise = X.Ay.fetchAsyncResources().catch((e) => {
                es.A.captureException(e);
            })),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = i),
            (this.channelIds = new Set([i])),
            (this.streamServerId = a),
            (this.streamChannelId = s),
            (this.parentMediaSessionId = l),
            (this.joinVoiceId = o),
            (this._connectionSerial = tr++),
            (this.logger = new O.A(`RTCConnection(${this.trueServerId}, ${this.context})`)),
            this.logger.enableNativeLogger(!0),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = eA.S7L.AWAITING_ENDPOINT),
            (this.stateHistory = new eh(this.state)),
            (this._socket = null),
            (this._backoff = new h.A(1e3, 1e4)),
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
            (this._createdTime = (0, T.tB)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, A.A)()),
            (this._connectCount = 0),
            (this._hasEverConnected = !1),
            (this._connecting = !1),
            (this._voiceConnectionSuccessTracked = !1),
            (this._hasCodecs = !1),
            (this._mediaEngineConnectDuration = 0),
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
        const d = X.Ay.supports(V.O5.FIRST_FRAME_CALLBACK) && X.Ay.supports(V.O5.REMOTE_USER_MULTI_STREAM);
        switch (r) {
            case V.x.DEFAULT: {
                const t = q.A.getChannel(this.channelId)?.type === eA.rbe.GUILD_STAGE_VOICE;
                (this._localMediaSinkWantsManager = new eW(e, t, d)),
                    this._localMediaSinkWantsManager.on(eH.Update, (e) => {
                        this.state === eA.S7L.RTC_CONNECTED &&
                            null != this._socket &&
                            (this.logger.info(`Media sink wants: ${JSON.stringify(e)}`),
                            this._socket.mediaSinkWants(e),
                            this._connection?.setLocalVideoSinkWants(e));
                    }),
                    this._localMediaSinkWantsManager.on(eH.UserSSRCUpdate, (e, t, n) => {
                        this._connection?.createUser(e, t, n);
                    });
                break;
            }
            case V.x.STREAM:
                (this._goLiveQualityManager = new M()),
                    this._goLiveQualityManager.on(b.RequestedSSRCsUpdate, (e, t, n) => {
                        this._connection?.createUser(e, t, n);
                    }),
                    this._goLiveQualityManager.on(b.RequestedStreamsUpdate, (e) => {
                        this.state === eA.S7L.RTC_CONNECTED &&
                            null != this._socket &&
                            (this.logger.info(`Go Live Media sink wants: ${JSON.stringify(e)}`),
                            this._socket.mediaSinkWants(e),
                            this._connection?.setLocalVideoSinkWants(e));
                    });
        }
        (this._remoteVideoSinkWants = ex),
            eG.X.on(eG.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eG.X.on(eG.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            J.Ay.shouldRecordNextConnection()
                ? ((this._recordingEnabled = !0), S.Et(!1))
                : (this._recordingEnabled = !1),
            er.A.addOnlineCallback(this._handleNetworkOnline),
            er.A.addOfflineCallback(this._handleNetworkOffline),
            (0, ea.isDesktop)() &&
                (this.powerMonitorListener = eo.A.powerMonitor.on("resume", this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            X.Ay.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
    recordEvent(e) {
        for (ta.push({ ...e, t: (0, T.tB)(), n: this._connectionSerial }); ta.length > 50; ) ta.shift();
    }
    get quality() {
        let e = this.getLastPing();
        return this.state !== eA.S7L.RTC_CONNECTED || void 0 === e
            ? eA.bFR.UNKNOWN
            : e > 500 || (null != this._outboundLossRate && this._outboundLossRate > 10)
              ? eA.bFR.BAD
              : e > 250 || (null != this._outboundLossRate && this._outboundLossRate > 5)
                ? eA.bFR.AVERAGE
                : eA.bFR.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if ((this.recordEvent({ c: 6, e: null != e }), null == e)) (this._endpoint = null), (this.hostname = null);
        else {
            e = `${ti}//${e}`;
            let { hostname: t, port: n } = el.A.toURLSafe(e) ?? {},
                i = null != n ? parseInt(n) : NaN;
            null != t && (80 === i || 443 === i) && (e = `${ti}//${t}`),
                (this._endpoint = e + "/"),
                (this.hostname = t);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
        this.recordEvent({ c: 2, e: null != e, h: null != t }), this._backoff.cancel();
        let { endpoint: n, token: i } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || i !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, A.A)()),
                    m.h.dispatch({ type: "RTC_CONNECTION_UPDATE_ID", connection: this }))),
            null == this.endpoint)
        )
            return void this.setState(eA.S7L.AWAITING_ENDPOINT);
        let r = this._socket;
        null != r && this._cleanupSocket(),
            null != this._nextChannelId && ((this._channelId = this._nextChannelId), (this._nextChannelId = void 0)),
            (r = this._socket = new eD(this.endpoint, this.context)).on(
                eL.Connecting,
                this._handleConnecting.bind(this, r),
            ),
            r.on(eL.Connect, this._handleConnect.bind(this, r)),
            r.on(eL.Disconnect, this._handleDisconnect.bind(this, r)),
            r.on(eL.Resuming, this._handleResuming.bind(this, r)),
            r.on(eL.Ready, this._handleReady.bind(this, r)),
            r.on(eL.Speaking, this._handleSpeaking.bind(this, r)),
            r.on(eL.Video, this._handleVideo.bind(this, r)),
            r.on(eL.Ping, this._handleControlPing.bind(this)),
            r.on(eL.ClientDisconnect, this._handleClientDisconnect.bind(this)),
            r.on(eL.ClientConnect, this._handleClientConnect.bind(this)),
            r.on(eL.Codecs, this._handleCodecs.bind(this)),
            r.on(eL.MediaSessionId, this._handleMediaSessionId.bind(this)),
            r.on(eL.MediaSinkWants, this._handleMediaSinkWants.bind(this)),
            r.on(eL.VoiceBackendVersion, this._handleCodeVersion.bind(this)),
            r.on(eL.KeyframeInterval, this._handleKeyframeInterval.bind(this)),
            r.on(eL.Flags, this.handleFlags.bind(this)),
            r.on(eL.Platform, this.handlePlatform.bind(this)),
            r.on(eL.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)),
            r.on(eL.SecureFramesInit, this._handleSecureFramesInit.bind(this)),
            r.on(eL.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)),
            r.on(eL.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)),
            r.on(eL.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)),
            r.on(eL.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)),
            r.on(eL.MLSProposals, this._handleMLSProposals.bind(this, r)),
            r.on(eL.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)),
            r.on(eL.MLSWelcome, this._handleMLSWelcome.bind(this)),
            r.on(eL.ReceiveMessage, this._recordMessageEvent.bind(this, 4)),
            r.on(eL.SendMessage, this._recordMessageEvent.bind(this, 5)),
            (this._connectStartTime = (0, T.tB)()),
            this._connectCount++,
            (this._connecting = !0),
            (this._voiceConnectionSuccessTracked = !1),
            null != r &&
                this._socket === r &&
                (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), r.connect());
    }
    _recordMessageEvent(e, t) {
        this.recordEvent({ c: e, o: t });
    }
    reconnect = () => {
        this.recordEvent({ c: 7 });
        let e = this._socket;
        null != e &&
            (this._hasEverConnected && (this._connectStartTime = (0, T.tB)()),
            this._connecting ||
                (this._trackVoiceConnectionConnecting(),
                (this._connecting = !0),
                (this._encountered_socket_failure = !1),
                (this._voiceConnectionSuccessTracked = !1)),
            this._connectCount++,
            (this.reconnecting = !0),
            e.close(),
            e.connect());
    };
    destroy() {
        if (
            (this.logger.info("Destroy RTCConnection"),
            er.A.removeOnlineCallback(this._handleNetworkOnline),
            er.A.removeOfflineCallback(this._handleNetworkOffline),
            (0, ea.isDesktop)() && this.powerMonitorListener?.(),
            this.recordEvent({ c: 1 }),
            eG.X.off(eG.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eG.X.off(eG.N.WindowVisibilityChanged, this.windowVisibilityChanged),
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
        if ((0, ea.isWeb)()) return !0;
        let n = (0, I.Lt)(e, V.ME.PRIORITY),
            i = (0, I.Lt)(this._lastSentSpeakingStatus, V.ME.PRIORITY);
        return (
            (this._lastSentSSRC !== t || n !== i) &&
            (void 0 !== this._lastSentSSRC || e !== V.ME.NONE) &&
            (this._lastSentSSRC === t || e !== V.ME.NONE) &&
            ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0)
        );
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let i = X.Ay.getPacketDelay();
        n.speaking(e, i, t);
    }
    sendVideo(e, t, n, i) {
        let r = this._socket;
        null != r && (0 !== t && (this._sentVideo = !0), this._sentVideo && r.video(e, t, n, i));
    }
    getPings() {
        return this._pings;
    }
    getAveragePing() {
        let e = this._pings.slice(0, Math.min(this._pings.length, 20));
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
        let e = this._connectCompletedTime > 0 ? (0, T.tB)() - this._connectCompletedTime : 0;
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
                eE.q.State,
                e,
                { hostname: this.hostname, channelId: this.trueChannelId, context: this.context },
                t,
            );
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._socket;
        null != i && i.expeditedHeartbeat(e, t, n) && this._backoff.cancel();
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
    setSpatialAudioEnabled(e) {
        this._voiceDuration?.setSpatialAudioEnabled(e);
    }
    setSimulcastDebugOverride(e, t, n) {
        t === this.context && t === V.x.DEFAULT && this._localMediaSinkWantsManager?.setSimulcastDebugOverride(e, n);
    }
    setVideoSize(e, t, n) {
        null == t ||
            (0, ea.isAndroid)() ||
            (0, ea.isIOS)() ||
            this._localMediaSinkWantsManager?.setVideoSize(e, t.width * t.height),
            this._goLiveQualityManager?.setVideoSize(e, t, n);
    }
    clearJoinVoiceId() {
        this.joinVoiceId = null;
    }
    setNextChannelId(e) {
        this.recordEvent({ c: 9 });
        let t = q.A.getChannel(this.channelId),
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
              : d()(this.streamServerId).prev().toString();
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        this._recordingEnabled && t.push("connection_log"),
            X.Ay.supports(V.O5.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval");
        let { enabled: n, dontEmitVolumeOnlySpeakingEvents: i } = C.A.getConfig({ location: "_chooseExperiments" });
        if (
            (n && t.push("should_analyze_user_voice_volume"),
            i && t.push("dont_emit_volume_only_speaking_events"),
            (0, ea.isWeb)() &&
                x.getConfig({ location: "RTCConnection" }).enabled &&
                t.push("browser_transceiver_padding_removal"),
            (0, ea.isIOS)())
        ) {
            let { mode: e } = R.getConfig({ location: "_chooseExperiments" });
            "standard" === e
                ? t.push("ios_video_stabilization_standard")
                : "low_latency" === e && t.push("ios_video_stabilization_low_latency");
        }
        (0, ea.isAndroid)() &&
            $.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer &&
            t.push(K),
            (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = q.A.getChannel(this.channelId),
                t = e?.type;
            this.logger.info(
                `Connecting to RTC server ${this.endpoint}, rtc-connection-id: ${this.getRTCConnectionId()}, channel: ${this.channelId}(${t})`,
            );
        }
        this.setState(eA.S7L.CONNECTING);
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
                    maxDaveProtocolVersion: X.Ay.getSupportedSecureFramesProtocolVersion(),
                    video: X.Ay.supports(V.O5.VIDEO),
                    streamParameters: X.Ay.getVideoStreamParameters(this.context),
                }),
                    this.setState(eA.S7L.AUTHENTICATING);
            });
    }
    _handleDisconnect(e, t, n, i) {
        this.logger.info(`Disconnected from RTC server, clean: ${t}, code: ${n}, reason: ${i}, state: ${this.state}`),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (en.default.track(eA.HAw.VOICE_CONNECTION_SOCKET_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: n,
                    reason: i,
                }),
                (this._encountered_socket_failure = !0)),
            Q.A.getRemoteDisconnectVoiceChannelId() === this.channelId && this._connection?.wasRemoteDisconnected();
        let r = "Force Close" !== i;
        if (r) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn(`Disconnect was not clean! reason=${i}. Reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
        }
        if (this.state !== eA.S7L.DISCONNECTED) {
            let e = this._videoQuality;
            if (null != e && this.context === V.x.DEFAULT) {
                if ((e.stop(), this._sentVideo)) {
                    e.getOutboundStats().forEach((t) => {
                        (t.num_frames ?? 0) > 0 &&
                            en.default.track(eA.HAw.VIDEO_STREAM_ENDED, {
                                ...this._getAnalyticsProperties(),
                                app_hardware_acceleration_enabled: ei.A.getAppHardwareAccelerationEnabled(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: this.userId,
                                reason: i,
                                participant_type: "sender",
                                guild_region: ee.A.getRegion(this.hostname),
                                hostname: this.hostname,
                                hardware_enabled: X.Ay.getHardwareEncoding(),
                                ...t,
                                ...e.getNetworkStats(),
                                ...e.getCodecUsageStats("sender", this.userId),
                                device_performance_class: (0, D.A)(),
                            });
                    });
                    let t = e.getCameraDurationStats();
                    null != t &&
                        t.camera_enabled_duration > 0 &&
                        en.default.track(eA.HAw.VIDEO_CALL_ENDED, { ...t, media_session_id: this.getMediaSessionId() });
                }
                e.getInboundParticipants().forEach((t) => {
                    let n = e.getInboundStats(t);
                    (n?.num_frames ?? 0) > 0 &&
                        en.default.track(eA.HAw.VIDEO_STREAM_ENDED, {
                            ...this._getAnalyticsProperties(),
                            app_hardware_acceleration_enabled: ei.A.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: t,
                            reason: i,
                            participant_type: "receiver",
                            guild_region: ee.A.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: X.Ay.getHardwareEncoding(),
                            ...n,
                            ...e.getNetworkStats(),
                            ...e.getCodecUsageStats("receiver", t),
                        });
                });
            }
            let t = this.getMediaSessionId();
            X.Ay.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders)
                        throw Error("codec survey is not available");
                    en.default.track(eA.HAw.VOICE_CODEC_DETECTED, {
                        ...n,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: t,
                    });
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures({ recovered: !1, downgraded: !1 });
            let n = ee.A.shouldIncludePreferredRegion() ? ee.A.getPreferredRegion() : null,
                a = X.Ay.getSettings(),
                s = q.A.getChannel(this.channelId),
                l = F.A.getConnectionStats(this.getMediaEngineConnectionId())?.stats.rtp.outbound.find(
                    (e) => "audio" === e.type,
                )?.sampleRateMismatchPercent,
                o = {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    port: this.port,
                    protocol: this.protocol,
                    reconnect: r,
                    reason: i,
                    duration: this.getDuration(),
                    ...Q.A.getUserVoiceSettingsStats(this.context),
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
                    ...k.A.getUsageStats(),
                    ...this.getAudioDeviceStates(),
                    ...this._systemResponsiveness?.getPttQueueLatencyStats(),
                    num_noise_cancellation_changes: this._numNoiseCancellationChanges,
                    media_session_id: this.getMediaSessionId(),
                    channel_bitrate: null != s ? s.bitrate : null,
                    cloudflare_best_region: n,
                    connect_count: this._connectCount,
                    ping_average: Math.round(this.getAveragePing()),
                    ping_bad_count: this._pingBadCount,
                    ping_timeout: this._pingTimeouts.length,
                    input_detected: this._inputDetected,
                    no_input_detected_notice: X.Ay.getNoInputDetectedNotice(),
                    audio_input_mode: a.mode,
                    automatic_audio_input_sensitivity_enabled: a.modeOptions.autoThreshold,
                    audio_input_sensitivity: a.modeOptions.threshold,
                    echo_cancellation_enabled: a.echoCancellation,
                    sidechain_compression_enabled: a.sidechainCompression,
                    noise_suppression_enabled: a.noiseSuppression,
                    noise_cancellation_enabled: a.noiseCancellation,
                    noise_canceller_error: this._noiseCancellationError,
                    automatic_gain_control_enabled: a.automaticGainControl,
                    voice_output_volume: a.outputVolume,
                    voice_input_volume: a.inputVolume,
                    encryption_mode: this._encryptionMode,
                    channel_count: this.channelIds.size,
                    device_performance_class: (0, D.A)(),
                    num_fast_udp_reconnects:
                        null != this._connection ? this._connection?.getNumFastUdpReconnects() : null,
                    parent_media_session_id: this.parentMediaSessionId,
                    audio_subsystem: X.Ay.getMediaEngine().getAudioSubsystem(),
                    audio_layer: X.Ay.getMediaEngine().getAudioLayer(),
                    automatic_audio_subsystem: a.automaticAudioSubsystem,
                    participant_type: this.getVoiceParticipantType(),
                    audio_capture_sample_rate_mismatch_percent: l,
                    krisp_sdk_version: X.Ay.getState().krispVersion,
                    secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                    secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                    secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                    vad_use_advanced_voice_activity: a.modeOptions.vadUseKrisp,
                    soundshare_experimental: X.Ay.getExperimentalSoundshare(),
                    join_voice_id: this.joinVoiceId,
                    bypass_system_input_processing: a.bypassSystemInputProcessing,
                    system_microphone_mode: X.Ay.getSystemMicrophoneMode(),
                    output_audio_route_type: z.A.getCurrentRouteType(),
                };
            Promise.all([
                (async () => (await this._systemResources?.getBatteryLevelStats()) ?? { batteryUsageRounded: null })(),
                j.A.getKrispModel(),
                X.Ay.getKrispEnableStats() ? X.Ay.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null),
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n, i] = e;
                en.default.track(eA.HAw.VOICE_DISCONNECT, {
                    ...o,
                    battery_usage: t,
                    krisp_nc_model: n,
                    duration_low_noise_detected_ms: i?.lowNoiseMs,
                    duration_medium_noise_detected_ms: i?.mediumNoiseMs,
                    duration_high_noise_detected_ms: i?.highNoiseMs,
                    duration_noise_cancellation_voice_detected_ms: i?.talkTimeMs,
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
            (this._connection = null), (this._hasCodecs = !1), e.destroy(this.reconnecting || r);
        }
        this.setState(eA.S7L.DISCONNECTED, { willReconnect: r });
    }
    _handleResuming(e) {
        this._connection?.fastUdpReconnect(), this._connection?.clearAllSpeaking();
    }
    _handleReady(e, t, n, i, r, a, s) {
        this.setState(eA.S7L.RTC_CONNECTING), (this.port = n), this._chooseExperiments(s ?? []);
        let { processPriority: l, threadPriorityConfiguration: o } = B.getConfig({ location: "media_engine_connect" });
        0 === a.length &&
            a.push({ type: V.mI.VIDEO, rid: "100", ssrc: r + 1, rtxSsrc: r + 2, quality: 100, active: !1 });
        let d = X.Ay.getMediaEngine(),
            c = W.A.getPersistentCodesEnabled(),
            u = Y.default.getStaticAuthSessionId() ?? void 0,
            _ = (0, T.tB)(),
            E = d.connect(this.context, this.userId, {
                ssrc: r,
                address: t,
                port: n,
                modes: i,
                experiments: this._selectedExperiments,
                streamParameters: a,
                qosEnabled: X.Ay.getQoS(),
                signingKeyId: c ? u : void 0,
                processPriority: l,
                threadPriorityConfiguration: o,
                ...this.getExtraConnectionOptions(),
            });
        (this._mediaEngineConnectDuration = (0, T.tB)() - _),
            (0, ea.isWeb)() && !tt.PF && es.A.captureMessage("Browser does not support Unified Plan"),
            E.setUseElectronVideo(d.supports(V.O5.ELECTRON_VIDEO));
        let A = null != this.guildId ? Z.A.getGuild(this.guildId) : null,
            h = A?.premiumTier === eA.TVA.TIER_1,
            I = et.default.getCurrentUser()?.premiumType,
            f = I === te.PremiumTypes.TIER_1 || I === te.PremiumTypes.TIER_2;
        E.setCalcMaxBitrateFunc((e) => {
            let { height: t, framerate: n, videoCodec: i } = e,
                r = t > 0 && t <= 720,
                a = n <= 30;
            if (h && !f && r && !a) {
                let { bitrate: e } = H.getConfig({ location: "RTCConnection" });
                return e;
            }
            return "AV1" === i && ((0 === t && n < 10) || (r && a))
                ? U.getConfig({ location: "RTCConnection" }).bitrate
                : null;
        }),
            X.Ay.supports(V.O5.IMAGE_QUALITY_MEASUREMENT) &&
                E.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec"),
            E.setVideoEncoderExperiments(X.Ay.getVideoEncoderExperiments(this.context, this.getVoiceParticipantType())),
            E.on(p.yq.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(eE.q.Speaking, e, t);
            }),
            E.on(p.yq.NativeMuteChanged, (e) => {
                this.context === V.x.DEFAULT && N.A.nativeMuteChanged(e);
            }),
            E.on(p.yq.Video, (e, t, n, i, r, a) => {
                this._handleVideoStreamId({
                    userId: e,
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: i ?? 0,
                    rtxSsrc: r,
                    videoStreamParameters: a,
                }),
                    this.userId === e &&
                        (this.sendVideo(n ?? 0, i ?? 0, r ?? 0, a),
                        a?.forEach((t) => {
                            100 === t.quality &&
                                this.emit(
                                    eE.q.VideoSourceQualityChanged,
                                    this.guildId,
                                    this.channelId,
                                    e,
                                    t.maxResolution,
                                    t.maxFrameRate,
                                    this.context,
                                );
                        }));
            }),
            E.on(p.yq.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager &&
                    (this._localMediaSinkWantsManager.setFirstFrameReceived(t),
                    this.emit(eE.q.Video, this.guildId, this.channelId, e, n, this.streamServerId)),
                    null != this._goLiveQualityManager &&
                        this.emit(eE.q.Video, this.guildId, this.channelId, e, n, this.streamServerId);
            }),
            E.on(p.yq.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            E.on(p.yq.Connected, (i, r) => {
                if ((this.logger.info(`RTC connected to media server: ${t}:${n}`), e !== this._socket))
                    return void this.logger.warn("Socket mismatch, disconnecting");
                switch (
                    ((this._voiceQuality = new e8(E)),
                    this._voiceQuality.start(),
                    this._voiceQuality.on(e7.InputDeviceSampleRateChanged, (e) => {
                        m.h.dispatch({ type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate: e });
                    }),
                    (this._voiceQualityPeriodicStatsSequenceId = 0),
                    (this._voiceQualityPeriodicStatsInterval = setInterval(
                        this._handleVoiceQualityPeriodicsStats,
                        3e5,
                    )),
                    (this._systemResponsiveness = new e$(E)),
                    this._systemResponsiveness.start(),
                    (this._systemResources = new eY.A()),
                    this._systemResources.setLastBattery(),
                    (this._noiseCancellationError = 0),
                    (this._voiceDuration = new e5(this.userId, E)),
                    this._voiceDuration.start(E.getSelfMute(), E.getSelfDeaf()),
                    (this.protocol = i),
                    i)
                ) {
                    case "udp":
                        this.logger.info("Sending UDP info to RTC server.", r, this._selectedExperiments),
                            e.once(eL.Encryption, (e, t) => {
                                E === this._connection && (E.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(i, this.getRTCConnectionId(), r, this._selectedExperiments);
                        break;
                    case "webrtc":
                        this.logger.info("Sending local SDP to RTC server."),
                            e.once(eL.SDP, this._handleSDP.bind(this)),
                            e.selectProtocol(i, this.getRTCConnectionId(), r);
                        break;
                    default:
                        this.logger.error("Unable to determine protocol.");
                        return;
                }
                this._backoff.succeed();
            }),
            E.on(p.yq.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    `The originally selected video encoder is not working, fallback to the other available encoders: ${n}`,
                ),
                    e.updateSession({ codecs: t });
            }),
            E.on(p.yq.VideoDecoderFallback, (t) => {
                let n = q.A.getChannel(this.channelId);
                if (n?.type === eA.rbe.GUILD_STAGE_VOICE) {
                    this._videoDecoderFallbackSuppressed ||
                        (this.logger.info("Suppressing video decoder fallback: stage channel"),
                        (this._videoDecoderFallbackSuppressed = !0));
                    return;
                }
                let i = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    `The originally selected video decoder is not working, fallback to the other available decoders: ${i}`,
                ),
                    e.updateSession({ codecs: t });
            }),
            E.on(p.yq.VideoCodecError, (e) => {
                let t = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                    mediaContext: this.context,
                    mediaSessionId: this._mediaSessionId ?? void 0,
                    streamKey: this.getMediaStreamKey(),
                };
                (0, y.QW)(
                    "encode" === e.mode
                        ? { type: y.iy.VIDEO_ENCODE_ERROR, ...t, videoEncoder: e.implName }
                        : { type: y.iy.VIDEO_DECODE_ERROR, ...t, videoDecoder: e.implName },
                );
            }),
            E.on(p.yq.Error, (t) => {
                if (e !== this._socket) return;
                let n = ee.A.shouldIncludePreferredRegion() ? ee.A.getPreferredRegion() : null;
                this.logger.error(`Error occurred while connecting to RTC server: ${t}`),
                    en.default.track(eA.HAw.VOICE_CONNECTION_FAILURE, {
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
            E.on(p.yq.ConnectionStateChange, (t) => {
                if ((this.logger.info(`RTC media connection state change: ${this.state} => ${t}`), e !== this._socket))
                    return;
                let n = this.state;
                switch (t) {
                    case V.$I.DISCONNECTED:
                        this.setState(eA.S7L.RTC_DISCONNECTED);
                        break;
                    case V.$I.CONNECTING:
                        this.setState(eA.S7L.RTC_CONNECTING);
                        break;
                    case V.$I.CONNECTED:
                        this.setState(eA.S7L.RTC_CONNECTED);
                        break;
                    case V.$I.NO_ROUTE:
                        this.setState(eA.S7L.NO_ROUTE);
                        break;
                    case V.$I.ICE_CHECKING:
                        this.setState(eA.S7L.ICE_CHECKING);
                        break;
                    case V.$I.DTLS_CONNECTING:
                        this.setState(eA.S7L.DTLS_CONNECTING);
                }
                n === eA.S7L.RTC_CONNECTING && this.state === eA.S7L.RTC_DISCONNECTED
                    ? this.reconnect()
                    : this.state === eA.S7L.NO_ROUTE &&
                      (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)),
                    this.state === eA.S7L.RTC_CONNECTED
                        ? (this._localMediaSinkWantsManager?.setConnection(E),
                          this._goLiveQualityManager?.update(),
                          (this._connectCompletedTime = (0, T.tB)()),
                          (this._hasEverConnected = !0),
                          (this._connecting = !1),
                          (this._encountered_socket_failure = !1),
                          this._trackVoiceConnectionSuccess(E))
                        : n === eA.S7L.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            E.on(p.yq.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(eE.q.SecureFramesUpdate);
            }),
            E.on(p.yq.Ping, this._handlePing.bind(this)),
            E.on(p.yq.PingTimeout, this._handlePingTimeout.bind(this)),
            E.on(p.yq.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            E.on(p.yq.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            E.on(p.yq.Stats, e_.create()),
            E.on(p.yq.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            E.on(p.yq.UsersMerged, this.handleUsersMerged.bind(this)),
            E.on(p.yq.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            E.on(p.yq.MLSFailure, this._handleMLSFailure.bind(this)),
            E.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = E),
            (this._hasCodecs = !1),
            (this._mediaEngineConnectionId = E.mediaEngineConnectionId);
    }
    _handleSpeaking(e, t, n, i) {
        let r = this._connection;
        null != r &&
            this.userId !== t &&
            (i !== V.ME.NONE && r.createUser(t, n), this._localMediaSinkWantsManager?.setAudioSSRC(t, n));
    }
    handleFlags(e, t) {
        this.emit(eE.q.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(eE.q.Platform, e, t, this.channelId);
    }
    handleUsersMerged(e) {
        this.emit(
            eE.q.UsersMerged,
            e.map((e) => e.id),
            this.context,
        );
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new e2(this._connection)),
                this._videoQuality.updateCallUserIdsCount(this._userIds.size),
                this._videoQuality.start();
            let {
                featureEnabled: e,
                windowLength: t,
                allowedPoorFpsRatio: n,
                fpsThreshold: i,
                backoffTimeSec: r,
            } = ez.V.defaultConfig;
            if (e) {
                (this._videoHealthManager = new ez.V(t, n, i, r)),
                    null != this._localMediaSinkWantsManager &&
                        (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    this._localMediaSinkWantsManager?.shouldReceiveFromUser(e) &&
                        this._videoHealthManager?.updateFps(e, t, n);
                };
                this._videoQuality.on(e1.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        let { userId: t, streamId: n, videoSsrc: i, videoStreamParameters: r } = e;
        this.emit(eE.q.Video, this.guildId, this.channelId, t, n, this.streamServerId),
            null != n &&
                null == this.getOrCreateVideoQuality() &&
                this.logger.error("_handleVideoStreamId: Unable to create videoQuality."),
            null != this._videoQuality &&
                this.userId === t &&
                r.forEach((e) => {
                    let t = e.ssrc ?? 0;
                    t > 0 && !0 === e.active && this._videoQuality?.setOutboundSsrc(t);
                }),
            this.userId !== t &&
                (0 !== i || null !== n || this._videoQuality?.getInboundParticipants().includes(t)) &&
                (this._videoQuality?.setInboundUser(t, i), this._videoHealthManager?.createUser(t)),
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
            n.setUserVideoDisabled(e, t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, T.tB)() - this._connectStartTime;
        en.default.track(eA.HAw.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
            ...this._getAnalyticsProperties(),
            number_of_users: e,
            duration_ms: t,
        });
    }
    _handleVideo(e, t, n, i, r) {
        if (null != this._connection && this.userId !== t) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                let e = r.map((e) => ({
                    type: V.mI.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: i > 0,
                }));
                0 === e.length &&
                    e.push({ type: V.mI.VIDEO, rid: "100", ssrc: i, rtxSsrc: i + 1, quality: 100, active: i > 0 }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                let e = [];
                for (let t of r)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({ ssrc: t.ssrc, quality: t.quality, active: t.active ?? !0 });
                this._goLiveQualityManager?.setUserID(t),
                    this._goLiveQualityManager?.updateAudioAndVideoStreamInfo(n, e);
            }
            r?.forEach((e) => {
                100 === e.quality &&
                    this.emit(
                        eE.q.VideoSourceQualityChanged,
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
        X.Ay.supports(V.O5.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (this._pings.push({ time: Date.now(), value: e }); this._pings.length >= 200; ) this._pings.shift();
            e > 500 && this._pingBadCount++, this.emit(eE.q.Ping, this._pings, this.quality);
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
        (this._outboundLossRate = e), this.emit(eE.q.OutboundLossRate, e);
    }
    _getAnalyticsProperties() {
        let e = q.A.getChannel(this.channelId),
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
            this.emit(eE.q.ClientConnect, e),
            this._videoQuality?.updateCallUserIdsCount(this._userIds.size),
            this._localMediaSinkWantsManager?.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        let t = this._videoQuality;
        if (null != t && this.context === V.x.DEFAULT) {
            let n = t.getInboundStats(e),
                i = n?.num_frames ?? 0;
            null != n &&
                i > 0 &&
                (en.default.track(eA.HAw.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    app_hardware_acceleration_enabled: ei.A.getAppHardwareAccelerationEnabled(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: "User disconnected",
                    participant_type: "receiver",
                    guild_region: ee.A.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: X.Ay.getHardwareEncoding(),
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
            this.emit(eE.q.ClientDisconnect, e),
            this._localMediaSinkWantsManager?.updateCallUserIds(this._userIds),
            this._videoQuality?.updateCallUserIdsCount(this._userIds.size),
            1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, T.tB)());
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol
            ? (n.setCodecs(null != e && "" !== e ? e : V.UK.OPUS, null != t && "" !== t ? t : V.UK.H264, this.context),
              (this._hasCodecs = !0),
              this._trackVoiceConnectionSuccess(n))
            : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol);
    }
    _trackVoiceConnectionSuccess(e) {
        if (this._voiceConnectionSuccessTracked || this.state !== eA.S7L.RTC_CONNECTED || !this._hasCodecs) return;
        this._voiceConnectionSuccessTracked = !0;
        let t = ee.A.shouldIncludePreferredRegion() ? ee.A.getPreferredRegion() : null,
            n = 1 === this._connectCount,
            i = X.Ay.getSettings(),
            r = this._getAnalyticsProperties();
        en.default.track(eA.HAw.VOICE_CONNECTION_SUCCESS, {
            ...r,
            hostname: this.hostname,
            port: this.port,
            protocol: this.protocol,
            cloudflare_best_region: t,
            connect_time: (0, T.tB)() - (n ? this._createdTime : this._connectStartTime),
            connect_count: this._connectCount,
            audio_subsystem: X.Ay.getMediaEngine().getAudioSubsystem(),
            audio_layer: X.Ay.getMediaEngine().getAudioLayer(),
            automatic_audio_subsystem: i.automaticAudioSubsystem,
            media_session_id: this.getMediaSessionId(),
            participant_type: this.getVoiceParticipantType(),
            join_voice_id: this.joinVoiceId,
            is_camera_enabled: X.Ay.getMediaEngine().getVideoInputDeviceId() !== V.qe && e.context === V.x.DEFAULT,
            ...this.stateHistory.getVoiceConnectionSuccessStats(),
        });
        let a = performance.now();
        function s(e, t) {
            return null == e || null == t ? null : e - t;
        }
        en.default.track(eA.HAw.VOICE_CONNECTION_TTC_COLLECTED, {
            rtc_connection_id: r.rtc_connection_id,
            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
            time_2_media_engine_connect: this._mediaEngineConnectDuration,
            time_3_media_engine_create_native_connection: e.transportInfo?.createConnectionTime,
            time_4_media_engine_connect_to_socket: e.transportInfo?.connectTime,
            time_5_scheduling_connected_callback: s(e.onConnectCallbackAt, e.transportInfo?.connectCallbackScheduledMs),
            time_6_state_connected_to_end_measure: s(a, e.onConnectCallbackAt),
            connect_count: this._connectCount,
            rtc_connecting_native_connect: s(e.onConnectCallbackAt, e.beginInitializeAt),
            rtc_connecting_native_codecs: s(e.onVideoCodecsCallbackAt, e.onConnectCallbackAt),
            rtc_connecting_native_crypto_modes: s(e.onEncryptionModesCallbackAt, e.onVideoCodecsCallbackAt),
        });
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
        let t = L.A.getRawThermalState();
        en.default.track(eA.HAw.MEDIA_SESSION_JOINED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            raw_thermal_state: t,
        }),
            m.h.dispatch({
                type: "MEDIA_SESSION_JOINED",
                mediaSessionId: this.getMediaSessionId(),
                context: this.context,
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info(`Remote media sink wants: ${JSON.stringify(e)}`),
            (this._remoteVideoSinkWants = e),
            m.h.dispatch({
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
        let t = G.getMediaEngineExperiments(e);
        null !== t && 0 !== t.length && this._connection?.setBandwidthEstimationExperiments(t);
    }
    _trackSecureFrameTransition(e) {
        let t = this._secureFramesTransitionStates.get(e);
        if (null == t) return;
        let n = this._secureFramesTransitionStates.size;
        function i(e, t) {
            return null != e && null != t ? e - t : void 0;
        }
        this._secureFramesTransitionStates.delete(e),
            en.default.track(eA.HAw.SECURE_FRAMES_TRANSITION, {
                ...this._getAnalyticsProperties(),
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: t.protocolVersion,
                start_to_init_duration: i(t.initReceivedTime, this._connectStartTime),
                init_duration: i(t.initFinishedTime, t.initReceivedTime),
                first_proposals_duration: i(t.firstProposalsFinishedTime, t.firstProposalsReceivedTime),
                last_proposals_duration: i(t.lastProposalsFinishedTime, t.lastProposalsReceivedTime),
                duration_between_proposals: i(t.lastProposalsReceivedTime, t.firstProposalsReceivedTime),
                total_proposals_size: t.totalProposalsSize,
                total_commit_welcome_size: t.totalCommitWelcomeSize,
                welcome_wait_duration: i(t.welcomeReceivedTime, t.initFinishedTime),
                welcome_duration: i(t.welcomeFinishedTime, t.welcomeReceivedTime),
                welcome_size: t.welcomeSize,
                welcome_error: t.welcomeError,
                commit_wait_duration: i(t.commitReceivedTime, t.lastProposalsFinishedTime),
                commit_duration: i(t.commitFinishedTime, t.commitReceivedTime),
                commit_size: t.commitSize,
                commit_error: t.commitError,
                prepare_wait_duration: i(t.prepareReceivedTime, this._secureFramesLastBecameAloneTime),
                prepare_duration: i(t.prepareFinishedTime, t.prepareReceivedTime),
                execute_wait_duration: i(t.executeReceivedTime, t.readyTime),
                execute_duration: i(t.executeFinishedTime, t.executeReceivedTime),
                execute_error: t.executeError,
                incomplete: t.incomplete,
                active_transition_count: n,
                time_since_creation: (0, T.tB)() - t.creationTime,
                users_added_count: t.usersAdded,
                users_removed_count: t.usersRemoved,
                roster_size_after: t.rosterSizeAfter,
                init_to_finish_duration: i(t.executeFinishedTime, t.initReceivedTime),
            }),
            0 === e && this._trackRemainingSecureFrameTransitions();
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            (e.incomplete = !0), this._trackSecureFrameTransition(t);
        });
    }
    _storeSecureFrameNextTransitionData(e) {
        return (
            null == this._secureFramesNextTransitionState &&
                (this._secureFramesNextTransitionState = { creationTime: (0, T.tB)() }),
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
        let t = (0, T.tB)();
        this.recordEvent({ c: 11, v: e }),
            e > 0
                ? (this.logger.info(`DAVE protocol init with protocol version: ${e}`),
                  (this._mlsInitReceivedTime = t),
                  this._connection?.prepareSecureFramesEpoch("1", e, this.trueChannelId),
                  this._sendMLSKeyPackage(),
                  this._storeSecureFrameNextTransitionData({
                      initReceivedTime: t,
                      initFinishedTime: (0, T.tB)(),
                      protocolVersion: e,
                  }),
                  this.recordEvent({ c: 10 }))
                : this._connection?.prepareSecureFramesTransition(0, e, () => {
                      let n = !1;
                      try {
                          this._connection?.executeSecureFramesTransition(0);
                      } catch (e) {
                          (n = !0), es.A.captureException(e);
                      }
                      this._storeSecureFrameTransitionData(0, {
                          initReceivedTime: t,
                          initFinishedTime: (0, T.tB)(),
                          protocolVersion: e,
                          executeError: n,
                      }),
                          this._trackSecureFrameTransition(0);
                  });
    }
    _handleSecureFramesRosterChange(e, t) {
        let n = [],
            i = 0,
            r = 0;
        Object.entries(e).forEach((e) => {
            let [t, a] = e;
            (n.push(t), null == a || 0 === a.byteLength)
                ? (r++, this._secureFramesRosterMap.delete(t))
                : (i++, this._secureFramesRosterMap.set(t, a));
        }),
            this._storeSecureFrameTransitionData(t, {
                usersAdded: i,
                usersRemoved: r,
                rosterSizeAfter: this._secureFramesRosterMap.size,
            }),
            this.emit(eE.q.RosterMapUpdate, n);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        this.logger.info(`Preparing DAVE protocol transition: ${e}, protocol version: ${t}`),
            this._secureFramesTransitionPrepareCount++;
        let n = (0, T.tB)();
        0 === t && this._trackMLSFailures({ recovered: !0, downgraded: !0 }),
            this._connection?.prepareSecureFramesTransition(e, t, () => {
                this._maybeSendSecureFramesTransitionReady(e),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: t,
                        prepareReceivedTime: n,
                        prepareFinishedTime: (0, T.tB)(),
                    });
            });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        this.logger.info(`Preparing DAVE protocol epoch: ${e}, protocol version: ${t}`);
        let n = e.toString();
        this._connection?.prepareSecureFramesEpoch(n, t, this.trueChannelId),
            "1" === n &&
                ((this._mlsInitReceivedTime = (0, T.tB)()), this._sendMLSKeyPackage(), this.recordEvent({ c: 10 }));
    }
    _sendMLSKeyPackage() {
        this._connection?.getMLSKeyPackage((e) => {
            this.logger.info("Got MLS key package, sending to RTC server"), this._socket?.sendMLSKeyPackage(e);
        });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        0 !== e &&
            (this.logger.info(`Sending DAVE protocol ready for transition ID ${e}`),
            this._socket?.secureFramesReadyForTransition(e),
            this._storeSecureFrameTransitionData(e, { readyTime: (0, T.tB)() }));
    }
    _handleSecureFramesExecuteTransition(e) {
        this.logger.info(`Executing DAVE protocol transition: ${e}`), this._secureFramesTransitionExecuteCount++;
        let t = (0, T.tB)(),
            n = !1;
        try {
            this._connection?.executeSecureFramesTransition(e);
        } catch (e) {
            (n = !0), es.A.captureException(e);
        }
        this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, T.tB)(),
            executeError: n,
        }),
            this._trackSecureFrameTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        this.logger.info("Received MLS external sender package"), this._connection?.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        let n = (0, T.tB)();
        this.logger.info("Received MLS proposals"),
            this._connection?.processMLSProposals(t, (i) => {
                let r = (0, T.tB)();
                this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(i);
                let a =
                    this._secureFramesNextTransitionState ??
                    this._storeSecureFrameNextTransitionData({
                        firstProposalsReceivedTime: n,
                        firstProposalsFinishedTime: r,
                    });
                (a.lastProposalsReceivedTime = n),
                    (a.lastProposalsFinishedTime = r),
                    (a.totalProposalsSize = (a.totalProposalsSize ?? 0) + t.byteLength),
                    (a.totalCommitWelcomeSize = (a.totalCommitWelcomeSize ?? 0) + i.byteLength);
            });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        this.logger.info(`Received MLS commit for transition ID ${e}`);
        let n = (0, T.tB)();
        this._connection?.prepareMLSCommitTransition(e, t, (i, r, a) => {
            i
                ? (this._trackMLSFailures({ recovered: !0, downgraded: !1 }),
                  (this._mlsSessionResetStartTime = void 0),
                  this._handleSecureFramesRosterChange(a, e),
                  this._maybeSendSecureFramesTransitionReady(e))
                : (this.logger.warn(`Failed to process MLS commit for transition ID ${e}`),
                  (this._mlsSessionResetStartTime = (0, T.tB)()),
                  this._flagMLSInvalidCommitWelcome(e),
                  this._handleSecureFramesInit(r)),
                this._storeSecureFrameTransitionData(e, {
                    protocolVersion: r,
                    commitReceivedTime: n,
                    commitFinishedTime: (0, T.tB)(),
                    commitSize: t.byteLength,
                    commitError: !i,
                });
        });
    }
    _handleMLSWelcome(e, t) {
        this.logger.info(`Received MLS welcome for transition ID ${e}`);
        let n = (0, T.tB)();
        this._connection?.processMLSWelcome(e, t, (i, r, a) => {
            i
                ? (this._trackMLSFailures({ recovered: !0, downgraded: !1 }),
                  (this._mlsSessionResetStartTime = void 0),
                  this._handleSecureFramesRosterChange(a, e),
                  this._maybeSendSecureFramesTransitionReady(e))
                : ((this._mlsSessionResetStartTime = (0, T.tB)()),
                  this._flagMLSInvalidCommitWelcome(e),
                  this._sendMLSKeyPackage()),
                this._storeSecureFrameTransitionData(e, {
                    protocolVersion: r,
                    welcomeReceivedTime: n,
                    welcomeFinishedTime: (0, T.tB)(),
                    welcomeSize: t.byteLength,
                    welcomeError: !i,
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
        let n = (0, T.tB)(),
            i = this._nextFailureId++;
        this.recordEvent({ c: 3, i: i }),
            this._mlsFailures.push({
                id: i,
                source: e,
                reason: t,
                count: 1,
                countDuringReset: +(null != this._mlsSessionResetStartTime),
                firstOccurrence: n,
                timeSinceInit: null != this._mlsInitReceivedTime ? n - this._mlsInitReceivedTime : void 0,
                eventLog: (function () {
                    let e = [],
                        t = (0, T.tB)();
                    for (let n of ta) e.push({ ...n, t: t - n.t });
                    return JSON.stringify(e);
                })(),
            }),
            e.includes("GetPersistedKeyPair")
                ? g.A.show({ title: tn.intl.string(tn.t.fJUioH), body: tn.intl.string(tn.t.CQLWvo) })
                : this._alertMLSFailureDebouced(e, t);
    }
    _trackMLSFailures(e) {
        let { recovered: t, downgraded: n } = e,
            i = (0, T.tB)(),
            r = this.getMediaSessionId(),
            a = null != this._mlsSessionResetStartTime ? i - this._mlsSessionResetStartTime : void 0;
        for (let {
            id: e,
            source: s,
            reason: l,
            count: o,
            countDuringReset: d,
            firstOccurrence: c,
            timeSinceInit: u,
            eventLog: _,
        } of this._mlsFailures)
            en.default.track(eA.HAw.MLS_FAILURES, {
                ...this._getAnalyticsProperties(),
                media_session_id: r,
                parent_media_session_id: this.parentMediaSessionId,
                failure_id: e,
                failure_time: c - this._createdTime,
                failure_source: s,
                failure_reason: l,
                failure_count: o,
                failure_was_recovered: t,
                failure_cleared_by_downgrade: n,
                time_since_first_occurrence: i - c,
                time_since_last_reset: a,
                failure_count_during_reset: d,
                time_since_init: u,
                event_history: _,
                connection_serial: this._connectionSerial,
            });
        this._mlsFailures = [];
    }
    _alertMLSFailure(e, t) {
        let n = et.default.getCurrentUser();
        (n?.isStaff() || n?.isStaffPersonal()) &&
            g.A.show({
                title: `MLS Error in ${e}`,
                body: `Error: ${t}! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!`,
            });
    }
    _alertMLSFailureDebouced = u()(this._alertMLSFailure, 100);
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
                    en.default.track(eA.HAw.VOICE_QUALITY_PERIODIC_STATS, {
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
    getMediaStreamKey() {}
    getAudioDeviceStates = () => ({
        input_device: this.getInputDeviceName(),
        input_device_count: Object.keys(X.Ay.getInputDevices()).length,
        output_device: this.getOutputDeviceName(),
        output_device_count: Object.keys(X.Ay.getOutputDevices()).length,
    });
    getVideoDeviceStates = () => ({
        camera_device: this.getVideoDeviceName(),
        camera_device_count: Object.keys(X.Ay.getVideoDevices()).length,
    });
    _trackVoiceConnectionConnecting = () => {
        let e = q.A.getChannel(this.channelId),
            t = e?.type;
        en.default.track(eA.HAw.VOICE_CONNECTION_CONNECTING, {
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
            is_muted: X.Ay.isMute(),
            join_voice_id: this.joinVoiceId,
            connection_serial: this._connectionSerial,
        });
    };
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        return null != t && E().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        let e = X.Ay.getInputDeviceId();
        return X.Ay.getInputDevices()[e]?.name;
    }
    getOutputDeviceName() {
        let e = X.Ay.getOutputDeviceId();
        return X.Ay.getOutputDevices()[e]?.name;
    }
    getVideoDeviceName() {
        let e = X.Ay.getVideoDeviceId();
        return X.Ay.getVideoDevices()[e]?.name;
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
