"use strict";
n.d(t, { Ay: () => S, yg: () => T }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(938796);
var r,
    i = n(284009),
    s = n.n(i),
    a = n(158390),
    o = n(972347),
    l = n(499979),
    u = n(626584),
    d = n(111162),
    c = n(927813),
    _ = n(723702),
    f = n(731854);
function E() {}
let h = 20 * c.A.Millis.SECOND,
    p = +c.A.Millis.MINUTE,
    m = 5 * c.A.Millis.SECOND;
function g(e) {
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
function A(e) {
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
function I(e) {
    return (
        e?.map((e) => {
            var t;
            return {
                type:
                    "audio" === (t = e.type)
                        ? f.mI.AUDIO
                        : "test" === t
                          ? f.mI.TEST
                          : "screen" === t
                            ? f.mI.SCREEN
                            : f.mI.VIDEO,
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
var T =
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
class S extends o.A {
    url;
    logger;
    backoff = new a.A(1e3, 5e3);
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
    constructor(e, t = f.x.DEFAULT) {
        super(),
            (this.url = e),
            (this.logger = new u.A(`RTCControlSocket(${t})`)),
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
            (this.connectionStartTime = (0, l.tB)()),
            (this.helloTimeout = setTimeout(() => {
                let e = (0, l.tB)() - this.connectionStartTime;
                this.handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`);
            }, h));
        let e = (this.webSocket = new WebSocket(`${this.url}?v=9`));
        (e.binaryType = "arraybuffer"),
            (e.onopen = () => {
                1 === this.connectionState
                    ? this.emit("connect")
                    : 5 === this.connectionState && this.doResumeOrClose(),
                    (this.connectionState = 4);
                let e = (0, l.tB)() - this.connectionStartTime;
                this.logger.info(`[CONNECTED] ${this.url} in ${e} ms`), this.emit("ping", Math.round(e / 2));
            }),
            (e.onmessage = (e) => {
                let { op: t, seq: n, d: r } = this.parseWebSocketMessage(e);
                if (
                    (this.emit("receive-message", t, r),
                    n && (this.lastRecvSeqNum = n),
                    d.default.isLoggingGatewayEvents)
                )
                    if (r instanceof Uint8Array) {
                        let e = [...r].map((e) => e.toString(16).padStart(2, "0")).join("");
                        this.logger.info(`~> ${t}: 0x${e}`);
                    } else this.logger.info(`~> ${t}: ${JSON.stringify(r)}`);
                switch (t) {
                    case 8:
                        this.clearHelloTimeout(), this.handleHello(r);
                        break;
                    case 2:
                        this.handleReady(r);
                        break;
                    case 9:
                        this.handleResumed(r);
                        break;
                    case 4:
                        r.bandwidth_estimation_experiment &&
                            this.emit("bandwidth-estimation-experiment", r.bandwidth_estimation_experiment),
                            this.emit("codecs", r.audio_codec, r.video_codec),
                            r.media_session_id && this.emit("media-session-id", r.media_session_id),
                            r.sdp ? this.emit("sdp", r.sdp) : r.mode && this.emit("encryption", r.mode, r.secret_key),
                            r.keyframe_interval && this.emit("keyframe-interval", r.keyframe_interval),
                            this.emit("secure-frames-init", r.dave_protocol_version || 0),
                            (this.resumable = !0);
                        break;
                    case 5:
                        let i = r.speaking;
                        "boolean" == typeof i && (i = i ? f.ME.VOICE : f.ME.NONE),
                            this.emit("speaking", r.user_id, r.ssrc, i);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(r);
                        break;
                    case 12:
                        this.emit("video", r.user_id, r.audio_ssrc, r.video_ssrc, I(r.streams));
                        break;
                    case 11:
                        this.emit("client-connect", r.user_ids);
                        break;
                    case 13:
                        this.emit("client-disconnect", r.user_id);
                        break;
                    case 14:
                        (null != r.audio_codec || null != r.video_codec) &&
                            this.emit("codecs", r.audio_codec, r.video_codec),
                            null != r.media_session_id && this.emit("media-session-id", r.media_session_id),
                            r.keyframe_interval && this.emit("keyframe-interval", r.keyframe_interval);
                        break;
                    case 15:
                        this.emit("media-sink-wants", r);
                        break;
                    case 16:
                        null != r.voice &&
                            null != r.rtc_worker &&
                            this.emit("voice-backend-version", r.voice, r.rtc_worker);
                        break;
                    case 18:
                        null != r.flags && null != r.user_id && this.emit("flags", r.user_id, r.flags);
                        break;
                    case 20:
                        null != r.platform && null != r.user_id && this.emit("platform", r.user_id, r.platform);
                        break;
                    case 21:
                        null != r.transition_id &&
                            null != r.protocol_version &&
                            this.emit("secure-frames-prepare-transition", r.transition_id, r.protocol_version);
                        break;
                    case 22:
                        null != r.transition_id && this.emit("secure-frames-execute-transition", r.transition_id);
                        break;
                    case 24:
                        null != r.epoch &&
                            null != r.protocol_version &&
                            this.emit("secure-frames-prepare-epoch", r.epoch, r.protocol_version);
                        break;
                    case 25:
                        this.emit("mls-external-sender-package", r);
                        break;
                    case 27:
                        this.emit("mls-proposals", r);
                        break;
                    case 29: {
                        let e = new DataView(r.buffer, r.byteOffset, 2).getUint16(0, !1),
                            t = r.slice(2);
                        this.emit("mls-prepare-commit-transition", e, t);
                        break;
                    }
                    case 30: {
                        let e = new DataView(r.buffer, r.byteOffset, 2).getUint16(0, !1),
                            t = r.slice(2);
                        this.emit("mls-welcome", e, t);
                        break;
                    }
                    default:
                        this.logger.info(`Unhandled op ${t}`);
                }
            }),
            (e.onerror = () => this.handleClose(!1, 0, "An error with the websocket occurred")),
            (e.onclose = (e) => {
                let { wasClean: t, code: n, reason: r } = e;
                return this.handleClose(t, n, r);
            });
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let r = JSON.stringify({ op: e, d: t });
        d.default.isLoggingGatewayEvents && this.logger.info(`<~ ${r}`), this.emit("send-message", e, t);
        try {
            n.send(r);
        } catch (e) {}
    }
    sendBinary(e, t) {
        let n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let r = new Uint8Array(t.byteLength + 1);
        (r[0] = e), r.set(t, 1);
        try {
            n.send(r.buffer);
        } catch (e) {}
    }
    ping() {
        this.sendHeartbeat();
    }
    doResumeOrClose() {
        let e = (0, l.tB)();
        null !== this.serverId &&
        null !== this.channelId &&
        null !== this.token &&
        null !== this.sessionId &&
        this.resumable &&
        (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= p)
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
            let t = _.isPlatformEmbedded ? 0.25 : 0.1;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else
            (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier),
                _.isPlatformEmbedded || (this.heartbeatInterval = Math.min(m, this.heartbeatInterval ?? NaN));
        let t = (0, l.tB)() - this.connectionStartTime;
        this.logger.info(
            `[HELLO] heartbeat interval: ${this.heartbeatInterval ?? "??"}, version: ${this.serverVersion}, took ${t} ms`,
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = (0, l.tB)() - this.connectionStartTime;
        this.logger.info(`[READY] took ${t} ms`),
            this.serverVersion >= 6 && this.send(16, {}),
            this.emit("ready", e.ip, e.port, e.modes, e.ssrc, I(e.streams), e.experiments);
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
            let r = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn(
                `[WS CLOSED] (clean: ${e.toString()}, code: ${t}, reason: ${n}) retrying in ${(r / 1e3).toFixed(2)} seconds.`,
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
            null != t && ((t.onopen = E), (t.onmessage = E), (t.onerror = E), (t.onclose = E), e?.(t)),
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
            let r = 2 * (this.serverVersion >= 8);
            return { op: t[r], seq: n, d: t.subarray(r + 1) };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info("Heartbeat ACK received");
        let t = null;
        (t = this.serverVersion >= 8 ? e.t : e),
            this.emit("ping", (0, l.tB)() - t),
            (this.lastHeartbeatAckTime = (0, l.tB)()),
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
        s()(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here."),
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
                this.send(3, { t: (0, l.tB)(), seq_ack: e });
        } else this.logger.info("Sending heartbeat"), this.send(3, (0, l.tB)());
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
            userId: r,
            sessionId: i,
            token: s,
            maxDaveProtocolVersion: a,
            video: o = !1,
            streamParameters: l,
        } = e;
        (this.serverId = t),
            (this.channelId = n),
            (this.sessionId = i),
            (this.token = s),
            (this.connectionState = 2),
            this.send(0, {
                server_id: t,
                channel_id: n,
                user_id: r,
                session_id: i,
                token: s,
                max_dave_protocol_version: a,
                video: o,
                streams: A(l),
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
    selectProtocol(e, t, n, r) {
        let i,
            s = {};
        null == n
            ? (i = null)
            : "sdp" in n && null != n.sdp && "" !== n.sdp
              ? ((i = n.sdp), (s = { ...n, codecs: g(n.codecs), rtc_connection_id: t }))
              : "address" in n &&
                null != n.address &&
                "" !== n.address &&
                n.port &&
                null != n.mode &&
                "" !== n.mode &&
                ((i = { address: n.address, port: n.port, mode: n.mode }),
                (s = { ...n, codecs: g(n.codecs), rtc_connection_id: t, experiments: r })),
            this.send(1, { protocol: e, data: i, ...s });
    }
    updateSession(e) {
        this.send(14, { codecs: g(e.codecs) });
    }
    speaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, { speaking: this.serverVersion <= 3 ? !!e : e, delay: t, ssrc: n });
    }
    video(e, t, n, r) {
        this.send(12, { audio_ssrc: e, video_ssrc: t, rtx_ssrc: n, streams: A(r) });
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
