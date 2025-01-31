n.d(t, {
    V: () => R,
    Z: () => O
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(47120),
    n(789020);
var i = n(512722),
    r = n.n(i),
    a = n(261470),
    s = n(47770),
    o = n(710845),
    l = n(857192),
    u = n(70956),
    c = n(358085),
    d = n(65154);
function f(e, t, n) {
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
let _ = 3,
    p = 8;
function h() {}
let m = 20 * u.Z.Millis.SECOND,
    g = 3,
    E = 1 * u.Z.Millis.MINUTE,
    v = 0.25,
    y = 0.1,
    I = 5 * u.Z.Millis.SECOND,
    b = 2,
    T = 8;
function S(e) {
    return e.map((e) => ({
        name: e.name,
        type: e.type,
        priority: 1000 * e.priority,
        payload_type: e.payloadType,
        rtx_payload_type: e.rtxPayloadType,
        encode: e.encode,
        decode: e.decode
    }));
}
function A(e) {
    return null == e
        ? void 0
        : e.map((e) => ({
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
                      ? {
                            type: e.maxResolution.type,
                            width: e.maxResolution.width,
                            height: e.maxResolution.height
                        }
                      : void 0
          }));
}
function N(e) {
    return 'audio' === e ? d.Tr.AUDIO : 'test' === e ? d.Tr.TEST : 'screen' === e ? d.Tr.SCREEN : d.Tr.VIDEO;
}
function C(e) {
    var t;
    return null !==
        (t =
            null == e
                ? void 0
                : e.map((e) => ({
                      type: N(e.type),
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
                                    height: e.max_resolution.height
                                }
                              : void 0
                  }))) && void 0 !== t
        ? t
        : [];
}
var R = (function (e) {
    return (e.Connecting = 'connecting'), (e.Connect = 'connect'), (e.Disconnect = 'disconnect'), (e.Resuming = 'resuming'), (e.Ready = 'ready'), (e.Speaking = 'speaking'), (e.Video = 'video'), (e.Ping = 'ping'), (e.ClientConnect = 'client-connect'), (e.ClientDisconnect = 'client-disconnect'), (e.Codecs = 'codecs'), (e.MediaSessionId = 'media-session-id'), (e.MediaSinkWants = 'media-sink-wants'), (e.VoiceBackendVersion = 'voice-backend-version'), (e.KeyframeInterval = 'keyframe-interval'), (e.ChannelOptionsUpdateSecureFramesProtocol = 'update-secure-frames-protocol'), (e.Flags = 'flags'), (e.Platform = 'platform'), (e.SDP = 'sdp'), (e.Encryption = 'encryption'), (e.BandwidthEstimationExperiment = 'bandwidth-estimation-experiment'), (e.SecureFramesInit = 'secure-frames-init'), (e.SecureFramesPrepareTransition = 'secure-frames-prepare-transition'), (e.SecureFramesExecuteTransition = 'secure-frames-execute-transition'), (e.SecureFramesPrepareEpoch = 'secure-frames-prepare-epoch'), (e.MLSExternalSenderPackage = 'mls-external-sender-package'), (e.MLSProposals = 'mls-proposals'), (e.MLSPrepareCommitTransition = 'mls-prepare-commit-transition'), (e.MLSWelcome = 'mls-welcome'), e;
})({});
class O extends s.Z {
    createWebSocket() {
        this.logger.info('[CONNECT] '.concat(this.url)),
            null !== this.webSocket && (this.logger.error('Connect called with already existing websocket'), this.cleanupWebSocket((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this.handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.'));
            }, m));
        let e = (this.webSocket = new WebSocket(''.concat(this.url, '?v=').concat(p)));
        (e.binaryType = 'arraybuffer'),
            (e.onopen = () => {
                1 === this.connectionState ? this.emit('connect') : 5 === this.connectionState && this.doResumeOrClose(), (this.connectionState = 4);
                let e = Date.now() - this.connectionStartTime;
                this.logger.info('[CONNECTED] '.concat(this.url, ' in ').concat(e, ' ms')), this.emit('ping', Math.round(e / 2));
            }),
            (e.onmessage = (e) => {
                let { op: t, seq: n, d: i } = this.parseWebSocketMessage(e);
                if ((n && (this.lastRecvSeqNum = n), l.default.isLoggingGatewayEvents)) {
                    if (i instanceof Uint8Array) {
                        let e = [...i].map((e) => e.toString(16).padStart(2, '0')).join('');
                        this.logger.info('~> '.concat(t, ': 0x').concat(e));
                    } else this.logger.info('~> '.concat(t, ': ').concat(JSON.stringify(i)));
                }
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
                        i.bandwidth_estimation_experiment && this.emit('bandwidth-estimation-experiment', i.bandwidth_estimation_experiment), this.emit('codecs', i.audio_codec, i.video_codec), i.media_session_id && this.emit('media-session-id', i.media_session_id), i.sdp ? this.emit('sdp', i.sdp) : i.mode && this.emit('encryption', i.mode, i.secret_key), i.keyframe_interval && this.emit('keyframe-interval', i.keyframe_interval), this.emit('secure-frames-init', i.dave_protocol_version || 0), (this.resumable = !0);
                        break;
                    case 5:
                        let r = i.speaking;
                        'boolean' == typeof r && (r = r ? d.Dg.VOICE : d.Dg.NONE), this.emit('speaking', i.user_id, i.ssrc, r);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(i);
                        break;
                    case 12:
                        this.emit('video', i.user_id, i.audio_ssrc, i.video_ssrc, C(i.streams));
                        break;
                    case 11:
                        this.emit('client-connect', i.user_ids);
                        break;
                    case 13:
                        this.emit('client-disconnect', i.user_id);
                        break;
                    case 14:
                        (null != i.audio_codec || null != i.video_codec) && this.emit('codecs', i.audio_codec, i.video_codec), null != i.media_session_id && this.emit('media-session-id', i.media_session_id), i.keyframe_interval && this.emit('keyframe-interval', i.keyframe_interval);
                        break;
                    case 15:
                        this.emit('media-sink-wants', i);
                        break;
                    case 16:
                        null != i.voice && null != i.rtc_worker && this.emit('voice-backend-version', i.voice, i.rtc_worker);
                        break;
                    case 18:
                        null != i.flags && null != i.user_id && this.emit('flags', i.user_id, i.flags);
                        break;
                    case 20:
                        null != i.platform && null != i.user_id && this.emit('platform', i.user_id, i.platform);
                        break;
                    case 21:
                        null != i.transition_id && null != i.protocol_version && this.emit('secure-frames-prepare-transition', i.transition_id, i.protocol_version);
                        break;
                    case 22:
                        null != i.transition_id && this.emit('secure-frames-execute-transition', i.transition_id);
                        break;
                    case 24:
                        null != i.epoch && null != i.protocol_version && this.emit('secure-frames-prepare-epoch', i.epoch, i.protocol_version);
                        break;
                    case 25:
                        this.emit('mls-external-sender-package', i);
                        break;
                    case 27:
                        this.emit('mls-proposals', i);
                        break;
                    case 29: {
                        let e = new DataView(i.buffer, i.byteOffset, b).getUint16(0, !1),
                            t = i.slice(b);
                        this.emit('mls-prepare-commit-transition', e, t);
                        break;
                    }
                    case 30: {
                        let e = new DataView(i.buffer, i.byteOffset, b).getUint16(0, !1),
                            t = i.slice(b);
                        this.emit('mls-welcome', e, t);
                        break;
                    }
                    default:
                        this.logger.info('Unhandled op '.concat(t));
                }
            }),
            (e.onerror = () => this.handleClose(!1, 0, 'An error with the websocket occurred')),
            (e.onclose = (e) => {
                let { wasClean: t, code: n, reason: i } = e;
                return this.handleClose(t, n, i);
            });
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let i = JSON.stringify({
            op: e,
            d: t
        });
        l.default.isLoggingGatewayEvents && this.logger.info('<~ '.concat(i));
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
    ping() {
        this.sendHeartbeat();
    }
    doResumeOrClose() {
        let e = Date.now();
        null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= E) ? (this.doResume(), (this.lastHeartbeatAckTime = e)) : this.disconnect(!1, 4801, 'Cannot resume connection.');
    }
    doResume() {
        var e, t, n;
        let i = null !== (e = this.lastRecvSeqNum) && void 0 !== e ? e : -1;
        this.logger.info(
            '[RESUME] resuming session. serverId='
                .concat(null !== (t = this.serverId) && void 0 !== t ? t : '', ' sessionId=')
                .concat(null !== (n = this.sessionId) && void 0 !== n ? n : '', ' seqAck=')
                .concat(i)
        ),
            this.emit('resuming'),
            (this.connectionState = 3),
            this.send(7, {
                token: this.token,
                session_id: this.sessionId,
                server_id: this.serverId,
                seq_ack: i
            });
    }
    handleHello(e) {
        var t, n, i;
        if (((this.serverVersion = null !== (t = e.v) && void 0 !== t ? t : _), this.serverVersion <= 3)) {
            let t = c.isPlatformEmbedded ? v : y;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier), c.isPlatformEmbedded || (this.heartbeatInterval = Math.min(I, null !== (n = this.heartbeatInterval) && void 0 !== n ? n : NaN));
        let r = Date.now() - this.connectionStartTime;
        this.logger.info(
            '[HELLO] heartbeat interval: '
                .concat(null !== (i = this.heartbeatInterval) && void 0 !== i ? i : '??', ', version: ')
                .concat(this.serverVersion, ', took ')
                .concat(r, ' ms')
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = Date.now() - this.connectionStartTime;
        this.logger.info('[READY] took '.concat(t, ' ms')), this.serverVersion >= 6 && this.send(16, {}), this.emit('ready', e.ip, e.port, e.modes, e.ssrc, C(e.streams), e.experiments);
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, t, n) {
        if (((this.connectionState = 0), (e = e || !1), this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t)) return this.disconnect(e, t, n);
        if (this.backoff.fails > g) this.logger.warn('[WS CLOSED] Backoff exceed. Resetting.'), this.disconnect(e, t, n);
        else {
            let i = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn(
                '[WS CLOSED] (clean: '
                    .concat(e.toString(), ', code: ')
                    .concat(t, ', reason: ')
                    .concat(n, ') retrying in ')
                    .concat((i / 1000).toFixed(2), ' seconds.')
            );
        }
    }
    disconnect(e, t, n) {
        this.logger.warn('[DISCONNECT] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')), this.cleanupWebSocket(), this.cleanupState(), (this.connectionState = 0), this.emit('disconnect', e, t, n);
    }
    reconnect(e, t, n) {
        this.logger.info('[RECONNECT] wasClean='.concat(e.toString(), ' code=').concat(t, ' reason=').concat(n)), this.cleanupWebSocket((e) => e.close(4000)), (this.connectionState = 5), this.createWebSocket();
    }
    cleanupWebSocket(e) {
        this.stopHeartbeater(), this.clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null), null != t && ((t.onopen = h), (t.onmessage = h), (t.onerror = h), (t.onclose = h), null == e || e(t)), this.backoff.cancel();
    }
    cleanupState() {
        (this.serverId = null), (this.sessionId = null), (this.token = null), (this.resumable = !1), (this.lastRecvSeqNum = null);
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
        {
            let t = new Uint8Array(e.data),
                n = null;
            this.serverVersion >= T && (n = new DataView(t.buffer).getUint16(0, !1));
            let i = this.serverVersion >= T ? 2 : 0,
                r = 1;
            return {
                op: t[i],
                seq: n,
                d: t.subarray(i + r)
            };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info('Heartbeat ACK received');
        let t = null;
        (t = this.serverVersion >= T ? e.t : e), this.emit('ping', Date.now() - t), (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), this.logger.info('Expedited heartbeat succeeded'));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket((e) => e.close(4000));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, 'Heartbeat timeout.'));
        this.logger.warn('[HEARTBEAT ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    startHeartbeater() {
        r()(null != this.heartbeatInterval, 'RTCControlSocket: Heartbeat interval should never null here.'),
            this.logger.info('Starting heartbeat with interval: '.concat(this.heartbeatInterval)),
            null !== this.heartbeater && clearInterval(this.heartbeater),
            (this.heartbeatAck = !0),
            (this.heartbeater = setInterval(() => {
                this.heartbeatAck ? ((this.heartbeatAck = !1), this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
            }, this.heartbeatInterval));
    }
    sendHeartbeat() {
        if (this.serverVersion >= T) {
            var e;
            let t = null !== (e = this.lastRecvSeqNum) && void 0 !== e ? e : -1;
            this.logger.info('Sending heartbeat with last received sequence number: '.concat(t)),
                this.send(3, {
                    t: Date.now(),
                    seq_ack: t
                });
        } else this.logger.info('Sending heartbeat'), this.send(3, Date.now());
    }
    stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    connect() {
        return 0 !== this.connectionState ? (this.logger.error('Cannot start a new connection, connection state is not disconnected'), !1) : ((this.connectionState = 1), this.createWebSocket(), this.emit('connecting'), !0);
    }
    identify(e) {
        let { serverId: t, userId: n, sessionId: i, token: r, maxDaveProtocolVersion: a, video: s = !1, streamParameters: o } = e;
        (this.serverId = t),
            (this.sessionId = i),
            (this.token = r),
            (this.connectionState = 2),
            this.send(0, {
                server_id: t,
                user_id: n,
                session_id: i,
                token: r,
                max_dave_protocol_version: a,
                video: s,
                streams: A(o)
            });
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null != this.webSocket)
            this.logger.info('Performing an expedited heartbeat '.concat('' !== t ? 'reason: ' + t : '')),
                (this.heartbeatAck = !1),
                this.sendHeartbeat(),
                null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = setTimeout(() => {
                    (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this.handleHeartbeatTimeout();
                }, e));
        else {
            if (n) return this.resetBackoff(t);
            this.logger.info('Expedited heartbeat requested, but is disconnected and a reset was not ' + 'requested '.concat('' !== t ? 'reason: ' + t : ''));
        }
        return !1;
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return this.backoff.fails > 0 && null == this.webSocket && (this.logger.info('Connection backoff reset '.concat('' !== e ? 'for reason: ' + e : '')), this.backoff.succeed(), this.reconnect(!1, 4802, 'Reset backoff.'), !0);
    }
    close() {
        this.logger.info('CLOSE'), this.cleanupWebSocket((e) => e.close(4000)), this.cleanupState(), (this.connectionState = 0), this.emit('disconnect', !0, 1000, 'Force Close');
    }
    destroy() {
        this.close();
    }
    selectProtocol(e, t, n, i) {
        let r;
        let a = {};
        null == n
            ? (r = null)
            : 'sdp' in n && null != n.sdp && '' !== n.sdp
              ? ((r = n.sdp),
                (a = {
                    ...n,
                    codecs: S(n.codecs),
                    rtc_connection_id: t
                }))
              : 'address' in n &&
                null != n.address &&
                '' !== n.address &&
                n.port &&
                null != n.mode &&
                '' !== n.mode &&
                ((r = {
                    address: n.address,
                    port: n.port,
                    mode: n.mode
                }),
                (a = {
                    ...n,
                    codecs: S(n.codecs),
                    rtc_connection_id: t,
                    experiments: i
                })),
            this.send(1, {
                protocol: e,
                data: r,
                ...a
            });
    }
    updateSession(e) {
        this.send(14, { codecs: S(e.codecs) });
    }
    speaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, {
            speaking: this.serverVersion <= 3 ? !!e : e,
            delay: t,
            ssrc: n
        });
    }
    video(e, t, n, i) {
        this.send(12, {
            audio_ssrc: e,
            video_ssrc: t,
            rtx_ssrc: n,
            streams: A(i)
        });
    }
    mediaSinkWants(e) {
        this.serverVersion >= 5 && this.send(15, e);
    }
    secureFramesReadyForTransition(e) {
        this.send(23, { transition_id: e });
    }
    sendMLSKeyPackage(e) {
        this.logger.info('Sending MLS key package'), this.sendBinary(26, new Uint8Array(e));
    }
    sendMLSCommitWelcome(e) {
        this.logger.info('Sending MLS commit + welcome message'), this.sendBinary(28, new Uint8Array(e));
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
    constructor(e, t = d.Yn.DEFAULT) {
        super(), f(this, 'url', void 0), f(this, 'logger', void 0), f(this, 'backoff', new a.Z(1000, 5000)), f(this, 'webSocket', void 0), f(this, 'connectionState', void 0), f(this, 'heartbeatInterval', void 0), f(this, 'helloTimeout', void 0), f(this, 'heartbeater', void 0), f(this, 'lastHeartbeatAckTime', void 0), f(this, 'expeditedHeartbeatTimeout', void 0), f(this, 'heartbeatAck', void 0), f(this, 'heartbeatIntervalModifier', void 0), f(this, 'connectionStartTime', void 0), f(this, 'lastRecvSeqNum', void 0), f(this, 'sessionId', void 0), f(this, 'serverId', void 0), f(this, 'token', void 0), f(this, 'resumable', void 0), f(this, 'serverVersion', 0), (this.url = e), (this.logger = new o.Z('RTCControlSocket('.concat(t, ')'))), this.logger.enableNativeLogger(!0), (this.webSocket = null), (this.connectionState = 0), (this.helloTimeout = null), (this.lastHeartbeatAckTime = null), (this.heartbeatInterval = null), (this.heartbeater = null), (this.heartbeatAck = !0), (this.expeditedHeartbeatTimeout = null), (this.heartbeatIntervalModifier = 1), (this.connectionStartTime = 0), (this.lastRecvSeqNum = null), (this.sessionId = null), (this.serverId = null), (this.token = null), (this.resumable = !1);
    }
}
