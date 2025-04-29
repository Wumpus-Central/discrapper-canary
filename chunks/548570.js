n.d(t, { Z: () => ee }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(539854), n(49124), n(358797);
var r = n(512722),
    i = n.n(r),
    o = n(457854),
    a = n(261470),
    s = n(956067),
    l = n(286379),
    c = n(903772),
    u = n(442837),
    d = n(544891),
    f = n(570140),
    _ = n(406966),
    p = n(795513),
    h = n(266750),
    m = n(250407),
    g = n(710845),
    E = n(797614),
    b = n(218543),
    y = n(857192),
    O = n(626135),
    v = n(12647),
    I = n(70956),
    S = n(358085),
    T = n(960048),
    A = n(138859),
    N = n(14639),
    C = n(639655),
    R = n(610308),
    P = n(91247),
    w = n(508569),
    D = n(183139),
    L = n(645436),
    x = n(833508),
    M = n(981631);
function k(e, t, n) {
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
function j(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = new g.Z('GatewaySocket'),
    V = new R.Z();
function F(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: o, onError: a, onClose: s } = e;
    B.enableNativeLogger(!0);
    let l = window._ws,
        c = !1,
        u = !1,
        d = null,
        f = null;
    if (((window._ws = null), null != l))
        if (((t = l.ws), l.state.gateway !== n)) B.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), (t = null);
        else {
            var _;
            let e = j({}, l.state);
            null != e.messages && (e.messages = e.messages.map((e) => (null != e.data && 'string' == typeof e.data ? G(j({}, e), { data: e.data.substring(0, 100) }) : e))), B.log('[FAST CONNECT] successfully took over websocket, state:', G(j({}, e), { messages: null == (_ = e.messages) ? void 0 : _.length })), (c = l.state.open), (u = l.state.identify), (d = l.state.messages), (f = l.state.clientState);
        }
    null == t && ((t = (0, x.Z)(n)).binaryType = 'arraybuffer'), r(t), c && i(u, f), null != d && d.forEach(o), (t.onopen = () => i(u, f)), (t.onmessage = o), (t.onclose = s), (t.onerror = a);
}
function Z() {}
let H = 4,
    Y = 1001,
    W = 'Stream end encountered',
    K = 4004,
    z = 30 * I.Z.Millis.SECOND,
    q = 3 * I.Z.Millis.MINUTE,
    Q = +I.Z.Millis.MINUTE;
function X(e, t, n) {
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
        null != n.raw_length ? (r += n.raw_length) : (r += J(o));
        try {
            e.feed(o);
        } catch (e) {
            throw (i || ((i = !0), t(!1, 0, 'A decompression error occurred')), e);
        }
    };
}
function J(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let $ = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class ee extends D.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        B.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = j({}, this.analytics, e);
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && B.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect() {
        if (!this.willReconnect()) return void B.verbose('Skipping _connect because willReconnect is false');
        if (L.a()) return void B.info('Skipping _connect because socket is paused');
        (this.connectionState = A.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let e = this.compressionHandler.getAlgorithm(),
            t = V.getName(),
            n = this._getGatewayUrl(),
            r = window.GLOBAL_ENV.API_VERSION;
        s.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            B.info('[CONNECT] '.concat(n, ', ') + 'encoding: '.concat(t, ', ') + 'version: '.concat(r, ', ') + 'compression: '.concat(null != e ? e : 'none')),
            null !== this.webSocket && (B.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, z));
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
                    B.info('[CONNECTED] '.concat(i.toString(), ' in ').concat(t, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: X(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: o, d: a } = V.unpack(e);
                    if ((r !== D.j.DISPATCH && s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(r, ' ').concat(D.j[r])), y.default.isLoggingGatewayEvents)) {
                        let e = [r];
                        r === D.j.DISPATCH && e.push(o), e.push(a), B.verboseDangerously('<~', ...e);
                    }
                    let l = Date.now() - n;
                    switch (('READY' === o ? b.Z.parseReady.set(n, l) : 'READY_SUPPLEMENTAL' === o ? b.Z.parseReadySupplemental.set(n, l) : l > 10 && s.Z.mark('\uD83C\uDF10', 'Parse ' + o, l), null != i && (this.seq = i), r)) {
                        case D.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(a);
                            break;
                        case D.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case D.j.INVALID_SESSION:
                            this._handleInvalidSession(a);
                            break;
                        case D.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case D.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(a);
                            break;
                        case D.j.DISPATCH:
                            this._handleDispatch(
                                a,
                                o,
                                'READY' === o
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: J(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: V.getName(),
                                          unpack_duration_ms: l
                                      }
                                    : null
                            );
                            break;
                        default:
                            B.info('Unhandled op '.concat(r));
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
        B.verbose('[HELLO] via '.concat((0, P.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        B.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = A.Z.WILL_RECONNECT), this._connect();
    }
    _handleInvalidSession(e) {
        B.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ('READY' === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, P.TO)(e);
            s.Z.setServerTrace(n), B.info('[READY] took '.concat(r, 'ms, as ').concat(t)), B.verbose(''.concat(n)), (this.connectionState = A.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === t ? (B.info('[READY_SUPPLEMENTAL] took '.concat(r, 'ms')), (this.connectionState = A.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === t && (B.verbose((0, P.TO)(e)), (this.connectionState = A.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        B.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : $;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), B.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = A.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        B.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: t,
                reason: n
            }),
            t === K)
        )
            return (this.connectionState = A.Z.CLOSED), B.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
        if ((this._tryDetectInvalidIOSToken(t, n, e), (this.connectionState = A.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) B.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect();
        else {
            let r = this.gatewayBackoff.fail(() => this._connect());
            B.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(t, ', ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > H && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, S.isIOS)() &&
            null != this.token &&
            e === Y &&
            t === W &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                d.tn
                    .get({
                        url: M.ANM.ME,
                        headers: { authorization: this.token },
                        rejectWithError: !1
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            O.default.track(M.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t && ((this.connectionState = A.Z.CLOSED), B.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, K, 'invalid token manually detected')), O.default.track(M.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        }
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            B.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')),
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
        u.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null), null != t && ((t.onopen = Z), (t.onmessage = Z), (t.onerror = Z), (t.onclose = Z), null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, C.I)(V));
    }
    _doResume() {
        var e;
        (this.connectionState = A.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, P.zH)(Date.now() - this.connectionStartTime)),
            B.info('[RESUME] resuming session '.concat(null != (e = this.sessionId) ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                D.j.RESUME,
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
        if (null === e) return void this._handleClose(!0, K, 'No connection info provided');
        this.connectionState = A.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([(0, m.O)() ? _.Z.getCommittedVersions() : {}, (0, m.O)() ? h.Z.getCommittedVersions() : {}, !!(0, m.O)() && p.Z.canUseGuildVersions()]),
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
        if (this.connectionState !== A.Z.IDENTIFYING || this.identifyStartTime !== t) return void B.warn('Skipping identify because connectionState or identifyStartTime has changed');
        let { token: s, properties: l = {}, presence: c } = e;
        (this.token = s), B.verbose('[IDENTIFY]');
        let u = {
                token: s,
                capabilities: (0, N.t)(),
                properties: l,
                presence: c,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: a
            },
            d = JSON.stringify(u);
        (this.identifyUncompressedByteSize = d.length), (this.identifyCompressedByteSize = o.deflate(d).length), (this.identifyCount += 1), this.send(D.j.IDENTIFY, u, !1), O.default.track(M.rMx.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, K, 'No connection info provided');
        let { token: t } = e;
        (this.token = t), (this.connectionState = A.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), B.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= q) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(D.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return B;
    }
    willReconnect() {
        return this.connectionState === A.Z.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === A.Z.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === A.Z.SESSION_ESTABLISHED || this.connectionState === A.Z.RESUMING;
    }
    isConnected() {
        return this.connectionState === A.Z.IDENTIFYING || this.connectionState === A.Z.RESUMING || this.connectionState === A.Z.SESSION_ESTABLISHED;
    }
    connect() {
        return this.isClosed() ? (B.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = A.Z.WILL_RECONNECT), this._connect(), !0) : (B.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        B.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack);
        let i = (0, c.e)();
        E.Z.increment(
            {
                name: l.V.SOCKET_CRASHED,
                tags: ['action:'.concat(null != r ? r : t), 'modded_client:'.concat(i)]
            },
            !0
        ),
            !1 !== e.sentry && T.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            O.default.track(M.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: i,
                action: t
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = A.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let o = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (B.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()),
            o &&
                ((this.didForceClearGuildHashes = !0),
                f.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(t)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * Q));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
        this.resetSocketOnError(
            G(j({}, e), {
                sentry: !t,
                clearCache: t
            })
        );
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void B.verbose('close() called, but socket is already closed.');
        B.info('Closing connection, current state is '.concat(this.connectionState));
        let t = e ? 4000 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = A.Z.CLOSED),
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
                B.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n ? this.resetBackoff(t, r) : B.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        B.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect() : t && this.connectionState !== A.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            k(this, 'gatewayBackoff', void 0),
            k(this, 'handleIdentify', void 0),
            k(this, 'dispatchExceptionBackoff', new a.Z(1000, Q)),
            k(this, 'dispatchSuccessTimer', 0),
            k(this, 'connectionState_', void 0),
            k(this, 'webSocket', void 0),
            k(this, 'seq', void 0),
            k(this, 'sessionId', void 0),
            k(this, 'token', void 0),
            k(this, 'initialHeartbeatTimeout', void 0),
            k(this, 'expeditedHeartbeatTimeout', void 0),
            k(this, 'heartbeatInterval', void 0),
            k(this, 'helloTimeout', void 0),
            k(this, 'heartbeater', void 0),
            k(this, 'lastHeartbeatTime', void 0),
            k(this, 'lastHeartbeatAckTime', void 0),
            k(this, 'heartbeatAck', void 0),
            k(this, 'connectionStartTime', void 0),
            k(this, 'identifyStartTime', void 0),
            k(this, 'nextReconnectIsImmediate', void 0),
            k(this, 'compressionHandler', void 0),
            k(this, 'hasConnectedOnce', void 0),
            k(this, 'isFastConnect', void 0),
            k(this, 'didForceClearGuildHashes', !1),
            k(this, 'identifyUncompressedByteSize', 0),
            k(this, 'identifyCompressedByteSize', 0),
            k(this, 'analytics', {}),
            k(this, 'identifyCount', 0),
            k(this, 'resumeUrl', null),
            k(this, 'iosGoingAwayEventCount', 0),
            k(this, 'dispatcher', void 0),
            k(this, 'send', (e, t, n) => {
                y.default.isLoggingGatewayEvents && B.verboseDangerously('~>', e, t);
                let r = V.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else B.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new w.Z(this)),
            (this.gatewayBackoff = new a.Z(1000, 60000)),
            (this.connectionState_ = A.Z.CLOSED),
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
            (this.compressionHandler = (0, C.I)(V)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
