n.d(t, { Z: () => $ }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041), n(26686), n(177593);
var r = n(512722),
    i = n.n(r),
    o = n(457854),
    a = n(261470),
    s = n(956067),
    l = n(286379),
    c = n(442837),
    u = n(544891),
    d = n(570140),
    f = n(406966),
    _ = n(795513),
    p = n(266750),
    h = n(250407),
    m = n(710845),
    g = n(797614),
    E = n(218543),
    b = n(857192),
    y = n(626135),
    v = n(12647),
    O = n(70956),
    I = n(358085),
    S = n(960048),
    T = n(138859),
    N = n(14639),
    A = n(639655),
    C = n(610308),
    R = n(91247),
    P = n(508569),
    w = n(183139),
    D = n(645436),
    L = n(833508),
    x = n(981631);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = new m.Z('GatewaySocket'),
    B = new C.Z();
function F(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: o, onError: a, onClose: s } = e;
    G.enableNativeLogger(!0);
    let l = window._ws,
        c = !1,
        u = !1,
        d = null,
        f = null;
    if (((window._ws = null), null != l))
        if (((t = l.ws), l.state.gateway !== n)) G.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), (t = null);
        else {
            var _;
            let e = k({}, l.state);
            null != e.messages && (e.messages = e.messages.map((e) => (null != e.data && 'string' == typeof e.data ? U(k({}, e), { data: e.data.substring(0, 100) }) : e))), G.log('[FAST CONNECT] successfully took over websocket, state:', U(k({}, e), { messages: null == (_ = e.messages) ? void 0 : _.length })), (c = l.state.open), (u = l.state.identify), (d = l.state.messages), (f = l.state.clientState);
        }
    null == t && ((t = (0, L.Z)(n)).binaryType = 'arraybuffer'), r(t), c && i(u, f), null != d && d.forEach(o), (t.onopen = () => i(u, f)), (t.onmessage = o), (t.onclose = s), (t.onerror = a);
}
function V() {}
let Z = 4,
    H = 1001,
    W = 'Stream end encountered',
    Y = 4004,
    K = 30 * O.Z.Millis.SECOND,
    z = 3 * O.Z.Millis.MINUTE,
    q = +O.Z.Millis.MINUTE;
function Q(e, t, n) {
    let r = 0;
    e.dataReady((e) => {
        try {
            return n(e, r);
        } finally {
            r = 0;
        }
    });
    let i = !1;
    return (n) => {
        let o = n.data;
        null != n.raw_length ? (r += n.raw_length) : (r += X(o));
        try {
            e.feed(o);
        } catch (e) {
            throw (i || ((i = !0), t(!1, 0, 'A decompression error occurred')), e);
        }
    };
}
function X(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let J = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class $ extends w.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        G.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = k({}, this.analytics, e);
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && G.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect() {
        if (!this.willReconnect()) return void G.verbose('Skipping _connect because willReconnect is false');
        if (D.a()) return void G.info('Skipping _connect because socket is paused');
        (this.connectionState = T.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let e = this.compressionHandler.getAlgorithm(),
            t = B.getName(),
            n = this._getGatewayUrl(),
            r = window.GLOBAL_ENV.API_VERSION;
        s.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            G.info('[CONNECT] '.concat(n, ', ') + 'encoding: '.concat(t, ', ') + 'version: '.concat(r, ', ') + 'compression: '.concat(null != e ? e : 'none')),
            null !== this.webSocket && (G.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, K));
        let i = new URL(n);
        i.searchParams.append('encoding', t),
            i.searchParams.append('v', r.toString()),
            null != e && i.searchParams.append('compress', e),
            F({
                gatewayURL: i.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    G.info('[CONNECTED] '.concat(i.toString(), ' in ').concat(t, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: Q(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: o, d: a } = B.unpack(e);
                    if ((r !== w.j.DISPATCH && s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(r, ' ').concat(w.j[r])), b.default.isLoggingGatewayEvents)) {
                        let e = [r];
                        r === w.j.DISPATCH && e.push(o), e.push(a), G.verboseDangerously('<~', ...e);
                    }
                    let l = Date.now() - n;
                    switch (('READY' === o ? E.Z.parseReady.set(n, l) : 'READY_SUPPLEMENTAL' === o ? E.Z.parseReadySupplemental.set(n, l) : l > 10 && s.Z.mark('\uD83C\uDF10', 'Parse ' + o, l), null != i && (this.seq = i), r)) {
                        case w.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(a);
                            break;
                        case w.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case w.j.INVALID_SESSION:
                            this._handleInvalidSession(a);
                            break;
                        case w.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case w.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(a);
                            break;
                        case w.j.DISPATCH:
                            this._handleDispatch(
                                a,
                                o,
                                'READY' === o
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: X(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: B.getName(),
                                          unpack_duration_ms: l
                                      }
                                    : null
                            );
                            break;
                        default:
                            G.info('Unhandled op '.concat(r));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null), v.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: r } = e;
                    return this._handleClose(t, n, r);
                }
            });
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now() - this.connectionStartTime;
        G.verbose('[HELLO] via '.concat((0, R.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        G.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = T.Z.WILL_RECONNECT), this._connect();
    }
    _handleInvalidSession(e) {
        G.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ('READY' === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, R.TO)(e);
            s.Z.setServerTrace(n), G.info('[READY] took '.concat(r, 'ms, as ').concat(t)), G.verbose(''.concat(n)), (this.connectionState = T.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === t ? (G.info('[READY_SUPPLEMENTAL] took '.concat(r, 'ms')), (this.connectionState = T.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === t && (G.verbose((0, R.TO)(e)), (this.connectionState = T.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        G.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : J;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), G.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = T.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        G.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: t,
                reason: n
            }),
            t === Y)
        )
            return (this.connectionState = T.Z.CLOSED), G.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
        if ((this._tryDetectInvalidIOSToken(t, n, e), (this.connectionState = T.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) G.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect();
        else {
            let r = this.gatewayBackoff.fail(() => this._connect());
            G.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(t, ', ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > Z && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, I.isIOS)() &&
            null != this.token &&
            e === H &&
            t === W &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                u.tn
                    .get({
                        url: x.ANM.ME,
                        headers: { authorization: this.token },
                        rejectWithError: !1
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            y.default.track(x.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t && ((this.connectionState = T.Z.CLOSED), G.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, Y, 'invalid token manually detected')), y.default.track(x.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        }
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            G.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')),
            this.emit('disconnect', {
                wasClean: e,
                code: t,
                reason: n
            });
    }
    _sendHeartbeatIfDue() {
        if (null == this.heartbeatInterval || null == this.heartbeater) return;
        let e = this.lastHeartbeatTime;
        null != e && Date.now() - e > this.heartbeatInterval + 5000 && this._sendHeartbeat();
    }
    _doHeartbeatInterval() {
        this.heartbeatAck ? ((this.heartbeatAck = !1), this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout();
    }
    _startHeartbeater() {
        let { heartbeatInterval: e } = this;
        i()(null != e, 'GatewaySocket: Heartbeat interval should never null here.'),
            null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout),
            null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            (this.initialHeartbeatTimeout = setTimeout(
                () => {
                    (this.initialHeartbeatTimeout = null), (this.heartbeatAck = !0), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e)), this._doHeartbeatInterval();
                },
                Math.floor(Math.random() * e)
            ));
    }
    _stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), (this.initialHeartbeatTimeout = null)), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    _clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    _cleanup(e) {
        c.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null), null != t && ((t.onopen = V), (t.onmessage = V), (t.onerror = V), (t.onclose = V), null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, A.I)(B));
    }
    _doResume() {
        var e;
        (this.connectionState = T.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, R.zH)(Date.now() - this.connectionStartTime)),
            G.info('[RESUME] resuming session '.concat(null != (e = this.sessionId) ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                w.j.RESUME,
                {
                    token: this.token,
                    session_id: this.sessionId,
                    seq: this.seq
                },
                !1
            );
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, Y, 'No connection info provided');
        this.connectionState = T.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([(0, h.O)() ? f.Z.getCommittedVersions() : {}, (0, h.O)() ? p.Z.getCommittedVersions() : {}, !!(0, h.O)() && _.Z.canUseGuildVersions()]),
            a = i
                ? {
                      guild_versions: n,
                      highest_last_message_id: r.highest_last_message_id,
                      read_state_version: r.read_state_version,
                      user_guild_settings_version: r.user_guild_settings_version,
                      user_settings_version: r.user_settings_version,
                      private_channels_version: r.private_channels_version,
                      api_code_version: r.api_code_version,
                      initial_guild_id: r.initial_guild_id
                  }
                : { guild_versions: {} };
        if (this.connectionState !== T.Z.IDENTIFYING || this.identifyStartTime !== t) return void G.warn('Skipping identify because connectionState or identifyStartTime has changed');
        let { token: s, properties: l = {}, presence: c } = e;
        (this.token = s), G.verbose('[IDENTIFY]');
        let u = {
                token: s,
                capabilities: (0, N.t)(),
                properties: l,
                presence: c,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: a
            },
            d = JSON.stringify(u);
        (this.identifyUncompressedByteSize = d.length), (this.identifyCompressedByteSize = o.deflate(d).length), (this.identifyCount += 1), this.send(w.j.IDENTIFY, u, !1), y.default.track(x.rMx.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, Y, 'No connection info provided');
        let { token: t } = e;
        (this.token = t), (this.connectionState = T.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), G.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= z) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(w.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return G;
    }
    willReconnect() {
        return this.connectionState === T.Z.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === T.Z.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === T.Z.SESSION_ESTABLISHED || this.connectionState === T.Z.RESUMING;
    }
    isConnected() {
        return this.connectionState === T.Z.IDENTIFYING || this.connectionState === T.Z.RESUMING || this.connectionState === T.Z.SESSION_ESTABLISHED;
    }
    connect() {
        return this.isClosed() ? (G.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = T.Z.WILL_RECONNECT), this._connect(), !0) : (G.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        G.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack),
            g.Z.increment(
                {
                    name: l.V.SOCKET_CRASHED,
                    tags: ['action:'.concat(null != r ? r : t)]
                },
                !0
            ),
            !1 !== e.sentry && S.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            y.default.track(x.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = T.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let i = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (G.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()),
            i &&
                ((this.didForceClearGuildHashes = !0),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(t)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * q));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
        this.resetSocketOnError(
            U(k({}, e), {
                sentry: !t,
                clearCache: t
            })
        );
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void G.verbose('close() called, but socket is already closed.');
        G.info('Closing connection, current state is '.concat(this.connectionState));
        let t = e ? 4000 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = T.Z.CLOSED),
            e ||
                setImmediate(() => {
                    this._reset(!0, 1000, 'Disconnect requested by user');
                });
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                G.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n ? this.resetBackoff(t, r) : G.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        G.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect() : t && this.connectionState !== T.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            M(this, 'gatewayBackoff', void 0),
            M(this, 'handleIdentify', void 0),
            M(this, 'dispatchExceptionBackoff', new a.Z(1000, q)),
            M(this, 'dispatchSuccessTimer', 0),
            M(this, 'connectionState_', void 0),
            M(this, 'webSocket', void 0),
            M(this, 'seq', void 0),
            M(this, 'sessionId', void 0),
            M(this, 'token', void 0),
            M(this, 'initialHeartbeatTimeout', void 0),
            M(this, 'expeditedHeartbeatTimeout', void 0),
            M(this, 'heartbeatInterval', void 0),
            M(this, 'helloTimeout', void 0),
            M(this, 'heartbeater', void 0),
            M(this, 'lastHeartbeatTime', void 0),
            M(this, 'lastHeartbeatAckTime', void 0),
            M(this, 'heartbeatAck', void 0),
            M(this, 'connectionStartTime', void 0),
            M(this, 'identifyStartTime', void 0),
            M(this, 'nextReconnectIsImmediate', void 0),
            M(this, 'compressionHandler', void 0),
            M(this, 'hasConnectedOnce', void 0),
            M(this, 'isFastConnect', void 0),
            M(this, 'didForceClearGuildHashes', !1),
            M(this, 'identifyUncompressedByteSize', 0),
            M(this, 'identifyCompressedByteSize', 0),
            M(this, 'analytics', {}),
            M(this, 'identifyCount', 0),
            M(this, 'resumeUrl', null),
            M(this, 'iosGoingAwayEventCount', 0),
            M(this, 'dispatcher', void 0),
            M(this, 'send', (e, t, n) => {
                b.default.isLoggingGatewayEvents && G.verboseDangerously('~>', e, t);
                let r = B.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else G.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new P.Z(this)),
            (this.gatewayBackoff = new a.Z(1000, 60000)),
            (this.connectionState_ = T.Z.CLOSED),
            (this.webSocket = null),
            (this.seq = 0),
            (this.sessionId = null),
            (this.token = null),
            (this.initialHeartbeatTimeout = null),
            (this.expeditedHeartbeatTimeout = null),
            (this.lastHeartbeatTime = null),
            (this.lastHeartbeatAckTime = null),
            (this.helloTimeout = null),
            (this.heartbeatInterval = null),
            (this.heartbeater = null),
            (this.heartbeatAck = !0),
            (this.connectionStartTime = 0),
            (this.identifyStartTime = 0),
            (this.nextReconnectIsImmediate = !1),
            (this.compressionHandler = (0, A.I)(B)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
