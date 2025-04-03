n.d(t, {
    V: () => w,
    Z: () => D
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
    n(610885),
    n(126298),
    n(47120),
    n(26686),
    n(789020);
var r = n(512722),
    i = n.n(r),
    o = n(261470),
    a = n(47770),
    s = n(710845),
    l = n(857192),
    c = n(70956),
    u = n(358085),
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 3,
    g = 8;
function E() {}
let b = 20 * c.Z.Millis.SECOND,
    y = 3,
    v = +c.Z.Millis.MINUTE,
    O = 0.25,
    I = 0.1,
    S = 5 * c.Z.Millis.SECOND,
    T = 2,
    N = 8;
function A(e) {
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
function C(e) {
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
function R(e) {
    return 'audio' === e ? d.Tr.AUDIO : 'test' === e ? d.Tr.TEST : 'screen' === e ? d.Tr.SCREEN : d.Tr.VIDEO;
}
function P(e) {
    var t;
    return null !=
        (t =
            null == e
                ? void 0
                : e.map((e) => ({
                      type: R(e.type),
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
                  })))
        ? t
        : [];
}
var w = (function (e) {
    return (e.Connecting = 'connecting'), (e.Connect = 'connect'), (e.Disconnect = 'disconnect'), (e.Resuming = 'resuming'), (e.Ready = 'ready'), (e.Speaking = 'speaking'), (e.Video = 'video'), (e.Ping = 'ping'), (e.ClientConnect = 'client-connect'), (e.ClientDisconnect = 'client-disconnect'), (e.Codecs = 'codecs'), (e.MediaSessionId = 'media-session-id'), (e.MediaSinkWants = 'media-sink-wants'), (e.VoiceBackendVersion = 'voice-backend-version'), (e.KeyframeInterval = 'keyframe-interval'), (e.ChannelOptionsUpdateSecureFramesProtocol = 'update-secure-frames-protocol'), (e.Flags = 'flags'), (e.Platform = 'platform'), (e.SDP = 'sdp'), (e.Encryption = 'encryption'), (e.BandwidthEstimationExperiment = 'bandwidth-estimation-experiment'), (e.SecureFramesInit = 'secure-frames-init'), (e.SecureFramesPrepareTransition = 'secure-frames-prepare-transition'), (e.SecureFramesExecuteTransition = 'secure-frames-execute-transition'), (e.SecureFramesPrepareEpoch = 'secure-frames-prepare-epoch'), (e.MLSExternalSenderPackage = 'mls-external-sender-package'), (e.MLSProposals = 'mls-proposals'), (e.MLSPrepareCommitTransition = 'mls-prepare-commit-transition'), (e.MLSWelcome = 'mls-welcome'), e;
})({});
class D extends a.Z {
    createWebSocket() {
        this.logger.info('[CONNECT] '.concat(this.url)),
            null !== this.webSocket && (this.logger.error('Connect called with already existing websocket'), this.cleanupWebSocket((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this.handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.'));
            }, b));
        let e = (this.webSocket = new WebSocket(''.concat(this.url, '?v=').concat(g)));
        (e.binaryType = 'arraybuffer'),
            (e.onopen = () => {
                1 === this.connectionState ? this.emit('connect') : 5 === this.connectionState && this.doResumeOrClose(), (this.connectionState = 4);
                let e = Date.now() - this.connectionStartTime;
                this.logger.info('[CONNECTED] '.concat(this.url, ' in ').concat(e, ' ms')), this.emit('ping', Math.round(e / 2));
            }),
            (e.onmessage = (e) => {
                let { op: t, seq: n, d: r } = this.parseWebSocketMessage(e);
                if ((n && (this.lastRecvSeqNum = n), l.default.isLoggingGatewayEvents))
                    if (r instanceof Uint8Array) {
                        let e = [...r].map((e) => e.toString(16).padStart(2, '0')).join('');
                        this.logger.info('~> '.concat(t, ': 0x').concat(e));
                    } else this.logger.info('~> '.concat(t, ': ').concat(JSON.stringify(r)));
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
                        r.bandwidth_estimation_experiment && this.emit('bandwidth-estimation-experiment', r.bandwidth_estimation_experiment), this.emit('codecs', r.audio_codec, r.video_codec), r.media_session_id && this.emit('media-session-id', r.media_session_id), r.sdp ? this.emit('sdp', r.sdp) : r.mode && this.emit('encryption', r.mode, r.secret_key), r.keyframe_interval && this.emit('keyframe-interval', r.keyframe_interval), this.emit('secure-frames-init', r.dave_protocol_version || 0), (this.resumable = !0);
                        break;
                    case 5:
                        let i = r.speaking;
                        'boolean' == typeof i && (i = i ? d.Dg.VOICE : d.Dg.NONE), this.emit('speaking', r.user_id, r.ssrc, i);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(r);
                        break;
                    case 12:
                        this.emit('video', r.user_id, r.audio_ssrc, r.video_ssrc, P(r.streams));
                        break;
                    case 11:
                        this.emit('client-connect', r.user_ids);
                        break;
                    case 13:
                        this.emit('client-disconnect', r.user_id);
                        break;
                    case 14:
                        (null != r.audio_codec || null != r.video_codec) && this.emit('codecs', r.audio_codec, r.video_codec), null != r.media_session_id && this.emit('media-session-id', r.media_session_id), r.keyframe_interval && this.emit('keyframe-interval', r.keyframe_interval);
                        break;
                    case 15:
                        this.emit('media-sink-wants', r);
                        break;
                    case 16:
                        null != r.voice && null != r.rtc_worker && this.emit('voice-backend-version', r.voice, r.rtc_worker);
                        break;
                    case 18:
                        null != r.flags && null != r.user_id && this.emit('flags', r.user_id, r.flags);
                        break;
                    case 20:
                        null != r.platform && null != r.user_id && this.emit('platform', r.user_id, r.platform);
                        break;
                    case 21:
                        null != r.transition_id && null != r.protocol_version && this.emit('secure-frames-prepare-transition', r.transition_id, r.protocol_version);
                        break;
                    case 22:
                        null != r.transition_id && this.emit('secure-frames-execute-transition', r.transition_id);
                        break;
                    case 24:
                        null != r.epoch && null != r.protocol_version && this.emit('secure-frames-prepare-epoch', r.epoch, r.protocol_version);
                        break;
                    case 25:
                        this.emit('mls-external-sender-package', r);
                        break;
                    case 27:
                        this.emit('mls-proposals', r);
                        break;
                    case 29: {
                        let e = new DataView(r.buffer, r.byteOffset, T).getUint16(0, !1),
                            t = r.slice(T);
                        this.emit('mls-prepare-commit-transition', e, t);
                        break;
                    }
                    case 30: {
                        let e = new DataView(r.buffer, r.byteOffset, T).getUint16(0, !1),
                            t = r.slice(T);
                        this.emit('mls-welcome', e, t);
                        break;
                    }
                    default:
                        this.logger.info('Unhandled op '.concat(t));
                }
            }),
            (e.onerror = () => this.handleClose(!1, 0, 'An error with the websocket occurred')),
            (e.onclose = (e) => {
                let { wasClean: t, code: n, reason: r } = e;
                return this.handleClose(t, n, r);
            });
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let r = JSON.stringify({
            op: e,
            d: t
        });
        l.default.isLoggingGatewayEvents && this.logger.info('<~ '.concat(r));
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
        let e = Date.now();
        null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= v) ? (this.doResume(), (this.lastHeartbeatAckTime = e)) : this.disconnect(!1, 4801, 'Cannot resume connection.');
    }
    doResume() {
        var e, t, n;
        let r = null != (e = this.lastRecvSeqNum) ? e : -1;
        this.logger.info(
            '[RESUME] resuming session. serverId='
                .concat(null != (t = this.serverId) ? t : '', ' sessionId=')
                .concat(null != (n = this.sessionId) ? n : '', ' seqAck=')
                .concat(r)
        ),
            this.emit('resuming'),
            (this.connectionState = 3),
            this.send(7, {
                token: this.token,
                session_id: this.sessionId,
                server_id: this.serverId,
                seq_ack: r
            });
    }
    handleHello(e) {
        var t, n, r;
        if (((this.serverVersion = null != (t = e.v) ? t : m), this.serverVersion <= 3)) {
            let t = u.isPlatformEmbedded ? O : I;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier), u.isPlatformEmbedded || (this.heartbeatInterval = Math.min(S, null != (n = this.heartbeatInterval) ? n : NaN));
        let i = Date.now() - this.connectionStartTime;
        this.logger.info(
            '[HELLO] heartbeat interval: '
                .concat(null != (r = this.heartbeatInterval) ? r : '??', ', version: ')
                .concat(this.serverVersion, ', took ')
                .concat(i, ' ms')
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = Date.now() - this.connectionStartTime;
        this.logger.info('[READY] took '.concat(t, ' ms')), this.serverVersion >= 6 && this.send(16, {}), this.emit('ready', e.ip, e.port, e.modes, e.ssrc, P(e.streams), e.experiments);
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, t, n) {
        if (((this.connectionState = 0), (e = e || !1), this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t)) return this.disconnect(e, t, n);
        if (this.backoff.fails > y) this.logger.warn('[WS CLOSED] Backoff exceed. Resetting.'), this.disconnect(e, t, n);
        else {
            let r = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn(
                '[WS CLOSED] (clean: '
                    .concat(e.toString(), ', code: ')
                    .concat(t, ', reason: ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
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
        (this.webSocket = null), null != t && ((t.onopen = E), (t.onmessage = E), (t.onerror = E), (t.onclose = E), null == e || e(t)), this.backoff.cancel();
    }
    cleanupState() {
        (this.serverId = null), (this.sessionId = null), (this.token = null), (this.resumable = !1), (this.lastRecvSeqNum = null);
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
        {
            let t = new Uint8Array(e.data),
                n = null;
            this.serverVersion >= N && (n = new DataView(t.buffer).getUint16(0, !1));
            let r = 2 * (this.serverVersion >= N),
                i = 1;
            return {
                op: t[r],
                seq: n,
                d: t.subarray(r + i)
            };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info('Heartbeat ACK received');
        let t = null;
        (t = this.serverVersion >= N ? e.t : e), this.emit('ping', Date.now() - t), (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), this.logger.info('Expedited heartbeat succeeded'));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket((e) => e.close(4000));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, 'Heartbeat timeout.'));
        this.logger.warn('[HEARTBEAT ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    startHeartbeater() {
        i()(null != this.heartbeatInterval, 'RTCControlSocket: Heartbeat interval should never null here.'),
            this.logger.info('Starting heartbeat with interval: '.concat(this.heartbeatInterval)),
            null !== this.heartbeater && clearInterval(this.heartbeater),
            (this.heartbeatAck = !0),
            (this.heartbeater = setInterval(() => {
                this.heartbeatAck ? ((this.heartbeatAck = !1), this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
            }, this.heartbeatInterval));
    }
    sendHeartbeat() {
        if (this.serverVersion >= N) {
            var e;
            let t = null != (e = this.lastRecvSeqNum) ? e : -1;
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
        let { serverId: t, userId: n, sessionId: r, token: i, maxDaveProtocolVersion: o, video: a = !1, streamParameters: s } = e;
        (this.serverId = t),
            (this.sessionId = r),
            (this.token = i),
            (this.connectionState = 2),
            this.send(0, {
                server_id: t,
                user_id: n,
                session_id: r,
                token: i,
                max_dave_protocol_version: o,
                video: a,
                streams: C(s)
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
    selectProtocol(e, t, n, r) {
        let i,
            o = {};
        null == n
            ? (i = null)
            : 'sdp' in n && null != n.sdp && '' !== n.sdp
              ? ((i = n.sdp),
                (o = h(_({}, n), {
                    codecs: A(n.codecs),
                    rtc_connection_id: t
                })))
              : 'address' in n &&
                null != n.address &&
                '' !== n.address &&
                n.port &&
                null != n.mode &&
                '' !== n.mode &&
                ((i = {
                    address: n.address,
                    port: n.port,
                    mode: n.mode
                }),
                (o = h(_({}, n), {
                    codecs: A(n.codecs),
                    rtc_connection_id: t,
                    experiments: r
                }))),
            this.send(
                1,
                _(
                    {
                        protocol: e,
                        data: i
                    },
                    o
                )
            );
    }
    updateSession(e) {
        this.send(14, { codecs: A(e.codecs) });
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
    video(e, t, n, r) {
        this.send(12, {
            audio_ssrc: e,
            video_ssrc: t,
            rtx_ssrc: n,
            streams: C(r)
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
        super(), f(this, 'url', void 0), f(this, 'logger', void 0), f(this, 'backoff', new o.Z(1000, 5000)), f(this, 'webSocket', void 0), f(this, 'connectionState', void 0), f(this, 'heartbeatInterval', void 0), f(this, 'helloTimeout', void 0), f(this, 'heartbeater', void 0), f(this, 'lastHeartbeatAckTime', void 0), f(this, 'expeditedHeartbeatTimeout', void 0), f(this, 'heartbeatAck', void 0), f(this, 'heartbeatIntervalModifier', void 0), f(this, 'connectionStartTime', void 0), f(this, 'lastRecvSeqNum', void 0), f(this, 'sessionId', void 0), f(this, 'serverId', void 0), f(this, 'token', void 0), f(this, 'resumable', void 0), f(this, 'serverVersion', 0), (this.url = e), (this.logger = new s.Z('RTCControlSocket('.concat(t, ')'))), this.logger.enableNativeLogger(!0), (this.webSocket = null), (this.connectionState = 0), (this.helloTimeout = null), (this.lastHeartbeatAckTime = null), (this.heartbeatInterval = null), (this.heartbeater = null), (this.heartbeatAck = !0), (this.expeditedHeartbeatTimeout = null), (this.heartbeatIntervalModifier = 1), (this.connectionStartTime = 0), (this.lastRecvSeqNum = null), (this.sessionId = null), (this.serverId = null), (this.token = null), (this.resumable = !1);
    }
}
