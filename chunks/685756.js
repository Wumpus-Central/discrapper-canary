r.d(n, {
    V: function () {
        return o;
    },
    Z: function () {
        return Y;
    }
});
var i,
    a,
    s,
    o,
    l = r(518263);
var u = r(970173);
var c = r(520712);
var d = r(268111);
var f = r(941497);
var _ = r(32026);
var h = r(480839);
var p = r(744285);
var m = r(492257);
var g = r(873817);
var E = r(47120);
var v = r(789020);
var I = r(512722),
    T = r.n(I),
    b = r(261470),
    y = r(47770),
    S = r(710845),
    A = r(857192),
    N = r(70956),
    C = r(358085),
    R = r(65154);
function O(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let D = 3,
    L = 8;
function x() {}
!(function (e) {
    (e[(e.IDENTIFY = 0)] = 'IDENTIFY'), (e[(e.SELECT_PROTOCOL = 1)] = 'SELECT_PROTOCOL'), (e[(e.READY = 2)] = 'READY'), (e[(e.HEARTBEAT = 3)] = 'HEARTBEAT'), (e[(e.SELECT_PROTOCOL_ACK = 4)] = 'SELECT_PROTOCOL_ACK'), (e[(e.SPEAKING = 5)] = 'SPEAKING'), (e[(e.HEARTBEAT_ACK = 6)] = 'HEARTBEAT_ACK'), (e[(e.RESUME = 7)] = 'RESUME'), (e[(e.HELLO = 8)] = 'HELLO'), (e[(e.RESUMED = 9)] = 'RESUMED'), (e[(e.CLIENT_CONNECT = 11)] = 'CLIENT_CONNECT'), (e[(e.VIDEO = 12)] = 'VIDEO'), (e[(e.CLIENT_DISCONNECT = 13)] = 'CLIENT_DISCONNECT'), (e[(e.SESSION_UPDATE = 14)] = 'SESSION_UPDATE'), (e[(e.MEDIA_SINK_WANTS = 15)] = 'MEDIA_SINK_WANTS'), (e[(e.VOICE_BACKEND_VERSION = 16)] = 'VOICE_BACKEND_VERSION'), (e[(e.CHANNEL_OPTIONS_UPDATE = 17)] = 'CHANNEL_OPTIONS_UPDATE'), (e[(e.FLAGS = 18)] = 'FLAGS'), (e[(e.PLATFORM = 20)] = 'PLATFORM'), (e[(e.DAVE_PROTOCOL_PREPARE_TRANSITION = 21)] = 'DAVE_PROTOCOL_PREPARE_TRANSITION'), (e[(e.DAVE_PROTOCOL_EXECUTE_TRANSITION = 22)] = 'DAVE_PROTOCOL_EXECUTE_TRANSITION'), (e[(e.DAVE_PROTOCOL_READY_FOR_TRANSITION = 23)] = 'DAVE_PROTOCOL_READY_FOR_TRANSITION'), (e[(e.DAVE_PROTOCOL_PREPARE_EPOCH = 24)] = 'DAVE_PROTOCOL_PREPARE_EPOCH'), (e[(e.MLS_EXTERNAL_SENDER_PACKAGE = 25)] = 'MLS_EXTERNAL_SENDER_PACKAGE'), (e[(e.MLS_KEY_PACKAGE = 26)] = 'MLS_KEY_PACKAGE'), (e[(e.MLS_PROPOSALS = 27)] = 'MLS_PROPOSALS'), (e[(e.MLS_COMMIT_WELCOME = 28)] = 'MLS_COMMIT_WELCOME'), (e[(e.MLS_PREPARE_COMMIT_TRANSITION = 29)] = 'MLS_PREPARE_COMMIT_TRANSITION'), (e[(e.MLS_WELCOME = 30)] = 'MLS_WELCOME'), (e[(e.MLS_INVALID_COMMIT_WELCOME = 31)] = 'MLS_INVALID_COMMIT_WELCOME'), (e[(e.CLIENT_CANNOT_REACH_RTC_SERVER = 32)] = 'CLIENT_CANNOT_REACH_RTC_SERVER');
})(i || (i = {})),
    !(function (e) {
        (e[(e.AUTHENTICATION_FAILED = 4004)] = 'AUTHENTICATION_FAILED'), (e[(e.INVALID_SESSION = 4006)] = 'INVALID_SESSION'), (e[(e.SERVER_NOT_FOUND = 4011)] = 'SERVER_NOT_FOUND'), (e[(e.SERVER_CRASH = 4015)] = 'SERVER_CRASH'), (e[(e.CANCELED = 4016)] = 'CANCELED'), (e[(e.HEARTBEAT_TIMEOUT = 4800)] = 'HEARTBEAT_TIMEOUT'), (e[(e.UNRESUMABLE = 4801)] = 'UNRESUMABLE'), (e[(e.RESET_BACKOFF = 4802)] = 'RESET_BACKOFF');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.DISCONNECTED = 0)] = 'DISCONNECTED'), (e[(e.CONNECTING = 1)] = 'CONNECTING'), (e[(e.IDENTIFYING = 2)] = 'IDENTIFYING'), (e[(e.RESUMING = 3)] = 'RESUMING'), (e[(e.CONNECTED = 4)] = 'CONNECTED'), (e[(e.RECONNECTING = 5)] = 'RECONNECTING');
    })(s || (s = {}));
let w = 20 * N.Z.Millis.SECOND,
    P = 3,
    M = 1 * N.Z.Millis.MINUTE,
    k = 0.25,
    U = 0.1,
    B = 5 * N.Z.Millis.SECOND,
    G = 2,
    Z = 8;
function F(e) {
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
function V(e) {
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
function j(e) {
    if ('audio' === e) return R.Tr.AUDIO;
    if ('test' === e) return R.Tr.TEST;
    if ('screen' === e) return R.Tr.SCREEN;
    else return R.Tr.VIDEO;
}
function H(e) {
    var n;
    return null !==
        (n =
            null == e
                ? void 0
                : e.map((e) => ({
                      type: j(e.type),
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
                  }))) && void 0 !== n
        ? n
        : [];
}
!(function (e) {
    (e.Connecting = 'connecting'), (e.Connect = 'connect'), (e.Disconnect = 'disconnect'), (e.Resuming = 'resuming'), (e.Ready = 'ready'), (e.Speaking = 'speaking'), (e.Video = 'video'), (e.Ping = 'ping'), (e.ClientConnect = 'client-connect'), (e.ClientDisconnect = 'client-disconnect'), (e.Codecs = 'codecs'), (e.MediaSessionId = 'media-session-id'), (e.MediaSinkWants = 'media-sink-wants'), (e.VoiceBackendVersion = 'voice-backend-version'), (e.KeyframeInterval = 'keyframe-interval'), (e.ChannelOptionsUpdateSecureFramesProtocol = 'update-secure-frames-protocol'), (e.Flags = 'flags'), (e.Platform = 'platform'), (e.SDP = 'sdp'), (e.Encryption = 'encryption'), (e.BandwidthEstimationExperiment = 'bandwidth-estimation-experiment'), (e.SecureFramesInit = 'secure-frames-init'), (e.SecureFramesPrepareTransition = 'secure-frames-prepare-transition'), (e.SecureFramesExecuteTransition = 'secure-frames-execute-transition'), (e.SecureFramesPrepareEpoch = 'secure-frames-prepare-epoch'), (e.MLSExternalSenderPackage = 'mls-external-sender-package'), (e.MLSProposals = 'mls-proposals'), (e.MLSPrepareCommitTransition = 'mls-prepare-commit-transition'), (e.MLSWelcome = 'mls-welcome');
})(o || (o = {}));
class Y extends y.Z {
    createWebSocket() {
        this.logger.info('[CONNECT] '.concat(this.url)),
            null !== this.webSocket && (this.logger.error('Connect called with already existing websocket'), this.cleanupWebSocket((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this.handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.'));
            }, w));
        let e = (this.webSocket = new WebSocket(''.concat(this.url, '?v=').concat(L)));
        (e.binaryType = 'arraybuffer'),
            (e.onopen = () => {
                1 === this.connectionState ? this.emit('connect') : 5 === this.connectionState && this.doResumeOrClose(), (this.connectionState = 4);
                let e = Date.now() - this.connectionStartTime;
                this.logger.info('[CONNECTED] '.concat(this.url, ' in ').concat(e, ' ms')), this.emit('ping', Math.round(e / 2));
            }),
            (e.onmessage = (e) => {
                let { op: n, seq: r, d: i } = this.parseWebSocketMessage(e);
                if ((r && (this.lastRecvSeqNum = r), A.default.isLoggingGatewayEvents)) {
                    if (i instanceof Uint8Array) {
                        let e = [...i].map((e) => e.toString(16).padStart(2, '0')).join('');
                        this.logger.info('~> '.concat(n, ': 0x').concat(e));
                    } else this.logger.info('~> '.concat(n, ': ').concat(JSON.stringify(i)));
                }
                switch (n) {
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
                        let a = i.speaking;
                        'boolean' == typeof a && (a = a ? R.Dg.VOICE : R.Dg.NONE), this.emit('speaking', i.user_id, i.ssrc, a);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(i);
                        break;
                    case 12:
                        this.emit('video', i.user_id, i.audio_ssrc, i.video_ssrc, H(i.streams));
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
                        let e = new DataView(i.buffer, i.byteOffset, G).getUint16(0, !1),
                            n = i.slice(G);
                        this.emit('mls-prepare-commit-transition', e, n);
                        break;
                    }
                    case 30: {
                        let e = new DataView(i.buffer, i.byteOffset, G).getUint16(0, !1),
                            n = i.slice(G);
                        this.emit('mls-welcome', e, n);
                        break;
                    }
                    default:
                        this.logger.info('Unhandled op '.concat(n));
                }
            }),
            (e.onerror = () => this.handleClose(!1, 0, 'An error with the websocket occurred')),
            (e.onclose = (e) => {
                let { wasClean: n, code: r, reason: i } = e;
                return this.handleClose(n, r, i);
            });
    }
    send(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = this.webSocket;
        if (null == r || r.readyState !== WebSocket.OPEN) return;
        let i = JSON.stringify({
            op: e,
            d: n
        });
        A.default.isLoggingGatewayEvents && this.logger.info('<~ '.concat(i));
        try {
            r.send(i);
        } catch (e) {}
    }
    sendBinary(e, n) {
        let r = this.webSocket;
        if (null == r || r.readyState !== WebSocket.OPEN) return;
        let i = new Uint8Array(n.byteLength + 1);
        (i[0] = e), i.set(n, 1);
        try {
            r.send(i.buffer);
        } catch (e) {}
    }
    ping() {
        this.sendHeartbeat();
    }
    doResumeOrClose() {
        let e = Date.now();
        null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= M) ? (this.doResume(), (this.lastHeartbeatAckTime = e)) : this.disconnect(!1, 4801, 'Cannot resume connection.');
    }
    doResume() {
        var e, n, r;
        let i = null !== (e = this.lastRecvSeqNum) && void 0 !== e ? e : -1;
        this.logger.info(
            '[RESUME] resuming session. serverId='
                .concat(null !== (n = this.serverId) && void 0 !== n ? n : '', ' sessionId=')
                .concat(null !== (r = this.sessionId) && void 0 !== r ? r : '', ' seqAck=')
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
        var n, r, i;
        if (((this.serverVersion = null !== (n = e.v) && void 0 !== n ? n : D), this.serverVersion <= 3)) {
            let n = C.isPlatformEmbedded ? k : U;
            this.heartbeatInterval = e.heartbeat_interval * n;
        } else (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier), !C.isPlatformEmbedded && (this.heartbeatInterval = Math.min(B, null !== (r = this.heartbeatInterval) && void 0 !== r ? r : NaN));
        let a = Date.now() - this.connectionStartTime;
        this.logger.info(
            '[HELLO] heartbeat interval: '
                .concat(null !== (i = this.heartbeatInterval) && void 0 !== i ? i : '??', ', version: ')
                .concat(this.serverVersion, ', took ')
                .concat(a, ' ms')
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let n = Date.now() - this.connectionStartTime;
        this.logger.info('[READY] took '.concat(n, ' ms')), this.serverVersion >= 6 && this.send(16, {}), this.emit('ready', e.ip, e.port, e.modes, e.ssrc, H(e.streams), e.experiments);
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, n, r) {
        if (((this.connectionState = 0), (e = e || !1), this.cleanupWebSocket(), 4004 === n || 4015 === n || 4011 === n || 4006 === n)) return this.disconnect(e, n, r);
        if (this.backoff.fails > P) this.logger.warn('[WS CLOSED] Backoff exceed. Resetting.'), this.disconnect(e, n, r);
        else {
            let i = this.backoff.fail(() => this.reconnect(e, n, r));
            this.logger.warn(
                '[WS CLOSED] (clean: '
                    .concat(e.toString(), ', code: ')
                    .concat(n, ', reason: ')
                    .concat(r, ') retrying in ')
                    .concat((i / 1000).toFixed(2), ' seconds.')
            );
        }
    }
    disconnect(e, n, r) {
        this.logger.warn('[DISCONNECT] ('.concat(e.toString(), ', ').concat(n, ', ').concat(r, ')')), this.cleanupWebSocket(), this.cleanupState(), (this.connectionState = 0), this.emit('disconnect', e, n, r);
    }
    reconnect(e, n, r) {
        this.logger.info('[RECONNECT] wasClean='.concat(e.toString(), ' code=').concat(n, ' reason=').concat(r)), this.cleanupWebSocket((e) => e.close(4000)), (this.connectionState = 5), this.createWebSocket();
    }
    cleanupWebSocket(e) {
        this.stopHeartbeater(), this.clearHelloTimeout();
        let n = this.webSocket;
        (this.webSocket = null), null != n && ((n.onopen = x), (n.onmessage = x), (n.onerror = x), (n.onclose = x), null == e || e(n)), this.backoff.cancel();
    }
    cleanupState() {
        (this.serverId = null), (this.sessionId = null), (this.token = null), (this.resumable = !1), (this.lastRecvSeqNum = null);
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
        {
            let n = new Uint8Array(e.data),
                r = null;
            this.serverVersion >= Z && (r = new DataView(n.buffer).getUint16(0, !1));
            let i = this.serverVersion >= Z ? 2 : 0,
                a = 1;
            return {
                op: n[i],
                seq: r,
                d: n.subarray(i + a)
            };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info('Heartbeat ACK received');
        let n = null;
        (n = this.serverVersion >= Z ? e.t : e), this.emit('ping', Date.now() - n), (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), this.logger.info('Expedited heartbeat succeeded'));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket((e) => e.close(4000));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, 'Heartbeat timeout.'));
        this.logger.warn('[HEARTBEAT ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    startHeartbeater() {
        T()(null != this.heartbeatInterval, 'RTCControlSocket: Heartbeat interval should never null here.'),
            this.logger.info('Starting heartbeat with interval: '.concat(this.heartbeatInterval)),
            null !== this.heartbeater && clearInterval(this.heartbeater),
            (this.heartbeatAck = !0),
            (this.heartbeater = setInterval(() => {
                this.heartbeatAck ? ((this.heartbeatAck = !1), this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
            }, this.heartbeatInterval));
    }
    sendHeartbeat() {
        if (this.serverVersion >= Z) {
            var e;
            let n = null !== (e = this.lastRecvSeqNum) && void 0 !== e ? e : -1;
            this.logger.info('Sending heartbeat with last received sequence number: '.concat(n)),
                this.send(3, {
                    t: Date.now(),
                    seq_ack: n
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
        let { serverId: n, userId: r, sessionId: i, token: a, maxDaveProtocolVersion: s, video: o = !1, streamParameters: l } = e;
        (this.serverId = n),
            (this.sessionId = i),
            (this.token = a),
            (this.connectionState = 2),
            this.send(0, {
                server_id: n,
                user_id: r,
                session_id: i,
                token: a,
                max_dave_protocol_version: s,
                video: o,
                streams: V(l)
            });
    }
    expeditedHeartbeat(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null != this.webSocket)
            this.logger.info('Performing an expedited heartbeat '.concat('' !== n ? 'reason: ' + n : '')),
                (this.heartbeatAck = !1),
                this.sendHeartbeat(),
                null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = setTimeout(() => {
                    (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this.handleHeartbeatTimeout();
                }, e));
        else {
            if (r) return this.resetBackoff(n);
            this.logger.info('Expedited heartbeat requested, but is disconnected and a reset was not ' + 'requested '.concat('' !== n ? 'reason: ' + n : ''));
        }
        return !1;
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return !!(this.backoff.fails > 0) && null == this.webSocket && (this.logger.info('Connection backoff reset '.concat('' !== e ? 'for reason: ' + e : '')), this.backoff.succeed(), this.reconnect(!1, 4802, 'Reset backoff.'), !0);
    }
    close() {
        this.logger.info('CLOSE'), this.cleanupWebSocket((e) => e.close(4000)), this.cleanupState(), (this.connectionState = 0), this.emit('disconnect', !0, 1000, 'Force Close');
    }
    destroy() {
        this.close();
    }
    selectProtocol(e, n, r, i) {
        let a;
        let s = {};
        null == r
            ? (a = null)
            : 'sdp' in r && null != r.sdp && '' !== r.sdp
              ? ((a = r.sdp),
                (s = {
                    ...r,
                    codecs: F(r.codecs),
                    rtc_connection_id: n
                }))
              : 'address' in r &&
                null != r.address &&
                '' !== r.address &&
                r.port &&
                null != r.mode &&
                '' !== r.mode &&
                ((a = {
                    address: r.address,
                    port: r.port,
                    mode: r.mode
                }),
                (s = {
                    ...r,
                    codecs: F(r.codecs),
                    rtc_connection_id: n,
                    experiments: i
                })),
            this.send(1, {
                protocol: e,
                data: a,
                ...s
            });
    }
    updateSession(e) {
        this.send(14, { codecs: F(e.codecs) });
    }
    speaking(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, {
            speaking: this.serverVersion <= 3 ? !!e : e,
            delay: n,
            ssrc: r
        });
    }
    video(e, n, r, i) {
        this.send(12, {
            audio_ssrc: e,
            video_ssrc: n,
            rtx_ssrc: r,
            streams: V(i)
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
    constructor(e, n = R.Yn.DEFAULT) {
        super(), O(this, 'url', void 0), O(this, 'logger', void 0), O(this, 'backoff', new b.Z(1000, 5000)), O(this, 'webSocket', void 0), O(this, 'connectionState', void 0), O(this, 'heartbeatInterval', void 0), O(this, 'helloTimeout', void 0), O(this, 'heartbeater', void 0), O(this, 'lastHeartbeatAckTime', void 0), O(this, 'expeditedHeartbeatTimeout', void 0), O(this, 'heartbeatAck', void 0), O(this, 'heartbeatIntervalModifier', void 0), O(this, 'connectionStartTime', void 0), O(this, 'lastRecvSeqNum', void 0), O(this, 'sessionId', void 0), O(this, 'serverId', void 0), O(this, 'token', void 0), O(this, 'resumable', void 0), O(this, 'serverVersion', 0), (this.url = e), (this.logger = new S.Z('RTCControlSocket('.concat(n, ')'))), this.logger.enableNativeLogger(!0), (this.webSocket = null), (this.connectionState = 0), (this.helloTimeout = null), (this.lastHeartbeatAckTime = null), (this.heartbeatInterval = null), (this.heartbeater = null), (this.heartbeatAck = !0), (this.expeditedHeartbeatTimeout = null), (this.heartbeatIntervalModifier = 1), (this.connectionStartTime = 0), (this.lastRecvSeqNum = null), (this.sessionId = null), (this.serverId = null), (this.token = null), (this.resumable = !1);
    }
}
