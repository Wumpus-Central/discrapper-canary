n.d(t, { Z: () => et }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(539854), n(49124), n(358797);
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
    m = n(15624),
    g = n(250407),
    E = n(710845),
    b = n(797614),
    y = n(218543),
    O = n(857192),
    v = n(626135),
    I = n(12647),
    S = n(70956),
    T = n(358085),
    A = n(960048),
    N = n(138859),
    C = n(14639),
    R = n(639655),
    P = n(610308),
    w = n(91247),
    D = n(508569),
    L = n(183139),
    x = n(645436),
    M = n(833508),
    k = n(981631);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = new E.Z('GatewaySocket'),
    F = new P.Z();
function Z(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: o, onError: a, onClose: s } = e;
    V.enableNativeLogger(!0);
    let l = window._ws,
        c = !1,
        u = !1,
        d = null,
        f = null;
    if (((window._ws = null), null != l))
        if (((t = l.ws), l.state.gateway !== n)) V.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), (t = null);
        else {
            var _;
            let e = U({}, l.state);
            null != e.messages && (e.messages = e.messages.map((e) => (null != e.data && 'string' == typeof e.data ? B(U({}, e), { data: e.data.substring(0, 100) }) : e))), V.log('[FAST CONNECT] successfully took over websocket, state:', B(U({}, e), { messages: null == (_ = e.messages) ? void 0 : _.length })), (c = l.state.open), (u = l.state.identify), (d = l.state.messages), (f = l.state.clientState);
        }
    null == t && ((t = (0, M.Z)(n)).binaryType = 'arraybuffer'), r(t), c && i(u, f), null != d && d.forEach(o), (t.onopen = () => i(u, f)), (t.onmessage = o), (t.onclose = s), (t.onerror = a);
}
function H() {}
let Y = 4,
    W = 1001,
    K = 'Stream end encountered',
    z = 4004,
    q = 30 * S.Z.Millis.SECOND,
    Q = 3 * S.Z.Millis.MINUTE,
    X = +S.Z.Millis.MINUTE;
function J(e, t, n) {
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
        null != n.raw_length ? (r += n.raw_length) : (r += $(o));
        try {
            e.feed(o);
        } catch (e) {
            throw (i || ((i = !0), t(!1, 0, 'A decompression error occurred')), e);
        }
    };
}
function $(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let ee = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class et extends L.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        V.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = U({}, this.analytics, e);
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && V.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect(e) {
        if (!this.willReconnect()) return void V.verbose('Skipping _connect because willReconnect is false');
        let t = x.a();
        if (
            (t || !m.default.canConnectToGateway()) &&
            (V.info('Skipping _connect because socket is paused'),
            v.default.track(k.rMx.GATEWAY_CONNECT_SKIPPED, {
                actually_skipped: t,
                client_app_state: m.default.getState(),
                connect_reason: e,
                skip_context: t ? 'paused' : 'app_state'
            }),
            t)
        )
            return;
        (this.connectionState = N.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let n = this.compressionHandler.getAlgorithm(),
            r = F.getName(),
            i = this._getGatewayUrl(),
            o = window.GLOBAL_ENV.API_VERSION;
        s.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            V.info('[CONNECT] '.concat(i, ', ') + 'encoding: '.concat(r, ', ') + 'version: '.concat(o, ', ') + 'compression: '.concat(null != n ? n : 'none')),
            null !== this.webSocket && (V.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, q));
        let a = new URL(i);
        a.searchParams.append('encoding', r),
            a.searchParams.append('v', o.toString()),
            null != n && a.searchParams.append('compress', n),
            Z({
                gatewayURL: a.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    V.info('[CONNECTED] '.concat(a.toString(), ' in ').concat(t, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: J(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: o, d: a } = F.unpack(e);
                    if ((r !== L.j.DISPATCH && s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(r, ' ').concat(L.j[r])), O.default.isLoggingGatewayEvents)) {
                        let e = [r];
                        r === L.j.DISPATCH && e.push(o), e.push(a), V.verboseDangerously('<~', ...e);
                    }
                    let l = Date.now() - n;
                    switch (('READY' === o ? y.Z.parseReady.set(n, l) : 'READY_SUPPLEMENTAL' === o ? y.Z.parseReadySupplemental.set(n, l) : l > 10 && s.Z.mark('\uD83C\uDF10', 'Parse ' + o, l), null != i && (this.seq = i), r)) {
                        case L.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(a);
                            break;
                        case L.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case L.j.INVALID_SESSION:
                            this._handleInvalidSession(a);
                            break;
                        case L.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case L.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(a);
                            break;
                        case L.j.DISPATCH:
                            this._handleDispatch(
                                a,
                                o,
                                'READY' === o
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: $(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: F.getName(),
                                          unpack_duration_ms: l
                                      }
                                    : null
                            );
                            break;
                        default:
                            V.info('Unhandled op '.concat(r));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null), I.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
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
        V.verbose('[HELLO] via '.concat((0, w.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        V.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = N.Z.WILL_RECONNECT), this._connect('reconnect');
    }
    _handleInvalidSession(e) {
        V.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ('READY' === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, w.TO)(e);
            s.Z.setServerTrace(n), V.info('[READY] took '.concat(r, 'ms, as ').concat(t)), V.verbose(''.concat(n)), (this.connectionState = N.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === t ? (V.info('[READY_SUPPLEMENTAL] took '.concat(r, 'ms')), (this.connectionState = N.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === t && (V.verbose((0, w.TO)(e)), (this.connectionState = N.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        V.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : ee;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), V.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = N.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect('_handleHeartbeatTimeout'));
        V.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: t,
                reason: n
            }),
            t === z)
        )
            return (this.connectionState = N.Z.CLOSED), V.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
        if ((this._tryDetectInvalidIOSToken(t, n, e), (this.connectionState = N.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) V.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect('_handleCloseImmediateReconnect');
        else {
            let r = this.gatewayBackoff.fail(() => this._connect('_handleClose'));
            V.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(t, ', ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > Y && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, T.isIOS)() &&
            null != this.token &&
            e === W &&
            t === K &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                d.tn
                    .get({
                        url: k.ANM.ME,
                        headers: { authorization: this.token },
                        rejectWithError: !1
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            v.default.track(k.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t && ((this.connectionState = N.Z.CLOSED), V.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, z, 'invalid token manually detected')), v.default.track(k.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        }
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            V.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')),
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
        (this.webSocket = null), null != t && ((t.onopen = H), (t.onmessage = H), (t.onerror = H), (t.onclose = H), null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, R.I)(F));
    }
    _doResume() {
        var e;
        (this.connectionState = N.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, w.zH)(Date.now() - this.connectionStartTime)),
            V.info('[RESUME] resuming session '.concat(null != (e = this.sessionId) ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                L.j.RESUME,
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
        if (null === e) return void this._handleClose(!0, z, 'No connection info provided');
        this.connectionState = N.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([(0, g.O)() ? _.Z.getCommittedVersions() : {}, (0, g.O)() ? h.Z.getCommittedVersions() : {}, !!(0, g.O)() && p.Z.canUseGuildVersions()]),
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
        if (this.connectionState !== N.Z.IDENTIFYING || this.identifyStartTime !== t) return void V.warn('Skipping identify because connectionState or identifyStartTime has changed');
        let { token: s, properties: l = {}, presence: c } = e;
        (this.token = s), V.verbose('[IDENTIFY]');
        let u = {
                token: s,
                capabilities: (0, C.t)(),
                properties: l,
                presence: c,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: a
            },
            d = JSON.stringify(u);
        (this.identifyUncompressedByteSize = d.length), (this.identifyCompressedByteSize = o.deflate(d).length), (this.identifyCount += 1), this.send(L.j.IDENTIFY, u, !1), v.default.track(k.rMx.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, z, 'No connection info provided');
        let { token: t } = e;
        (this.token = t), (this.connectionState = N.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), V.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= Q) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(L.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return V;
    }
    willReconnect() {
        return this.connectionState === N.Z.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === N.Z.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === N.Z.SESSION_ESTABLISHED || this.connectionState === N.Z.RESUMING;
    }
    isConnected() {
        return this.connectionState === N.Z.IDENTIFYING || this.connectionState === N.Z.RESUMING || this.connectionState === N.Z.SESSION_ESTABLISHED;
    }
    connect() {
        return this.isClosed() ? (V.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = N.Z.WILL_RECONNECT), this._connect('connect'), !0) : (V.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        V.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack);
        let i = (0, c.e)();
        b.Z.increment(
            {
                name: l.V.SOCKET_CRASHED,
                tags: ['action:'.concat(null != r ? r : t), 'modded_client:'.concat(i)]
            },
            !0
        ),
            !1 !== e.sentry && A.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            v.default.track(k.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: i,
                action: t
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = N.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let o = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (V.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect('resetSocketOnErrorImmediate'), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect('resetSocketOnError')),
            o &&
                ((this.didForceClearGuildHashes = !0),
                f.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(t)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * X));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
        this.resetSocketOnError(
            B(U({}, e), {
                sentry: !t,
                clearCache: t
            })
        );
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void V.verbose('close() called, but socket is already closed.');
        V.info('Closing connection, current state is '.concat(this.connectionState));
        let t = e ? 4000 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = N.Z.CLOSED),
            e ||
                setImmediate(() => {
                    this._reset(!0, 1000, 'Disconnect requested by user');
                });
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        m.default.canConnectToGateway() ||
            v.default.track(k.rMx.GATEWAY_CONNECT_SKIPPED, {
                actually_skipped: !1,
                client_app_state: m.default.getState(),
                connect_reason: t
            }),
            this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                V.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n ? this.resetBackoff(t, r) : V.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        V.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect(e) : t && this.connectionState !== N.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            j(this, 'gatewayBackoff', void 0),
            j(this, 'handleIdentify', void 0),
            j(this, 'dispatchExceptionBackoff', new a.Z(1000, X)),
            j(this, 'dispatchSuccessTimer', 0),
            j(this, 'connectionState_', void 0),
            j(this, 'webSocket', void 0),
            j(this, 'seq', void 0),
            j(this, 'sessionId', void 0),
            j(this, 'token', void 0),
            j(this, 'initialHeartbeatTimeout', void 0),
            j(this, 'expeditedHeartbeatTimeout', void 0),
            j(this, 'heartbeatInterval', void 0),
            j(this, 'helloTimeout', void 0),
            j(this, 'heartbeater', void 0),
            j(this, 'lastHeartbeatTime', void 0),
            j(this, 'lastHeartbeatAckTime', void 0),
            j(this, 'heartbeatAck', void 0),
            j(this, 'connectionStartTime', void 0),
            j(this, 'identifyStartTime', void 0),
            j(this, 'nextReconnectIsImmediate', void 0),
            j(this, 'compressionHandler', void 0),
            j(this, 'hasConnectedOnce', void 0),
            j(this, 'isFastConnect', void 0),
            j(this, 'didForceClearGuildHashes', !1),
            j(this, 'identifyUncompressedByteSize', 0),
            j(this, 'identifyCompressedByteSize', 0),
            j(this, 'analytics', {}),
            j(this, 'identifyCount', 0),
            j(this, 'resumeUrl', null),
            j(this, 'iosGoingAwayEventCount', 0),
            j(this, 'dispatcher', void 0),
            j(this, 'send', (e, t, n) => {
                O.default.isLoggingGatewayEvents && V.verboseDangerously('~>', e, t);
                let r = F.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else V.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new D.Z(this)),
            (this.gatewayBackoff = new a.Z(1000, 60000)),
            (this.connectionState_ = N.Z.CLOSED),
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
            (this.compressionHandler = (0, R.I)(F)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
