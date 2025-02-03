n.d(t, { Z: () => Q }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041), n(177593);
var i = n(512722),
    r = n.n(i),
    a = n(457854),
    s = n(261470),
    o = n(956067),
    l = n(286379),
    u = n(442837),
    c = n(544891),
    d = n(570140),
    f = n(406966),
    _ = n(795513),
    p = n(266750),
    h = n(250407),
    m = n(710845),
    g = n(797614),
    E = n(218543),
    v = n(857192),
    y = n(626135),
    I = n(12647),
    b = n(70956),
    T = n(358085),
    S = n(960048),
    A = n(138859),
    N = n(14639),
    C = n(639655),
    R = n(610308),
    O = n(91247),
    D = n(508569),
    x = n(183139),
    L = n(645436),
    P = n(833508),
    w = n(981631);
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
let k = new m.Z('GatewaySocket'),
    U = new R.Z();
function G(e) {
    let t,
        { gatewayURL: n, newCallback: i, onOpen: r, onMessage: a, onError: s, onClose: o } = e;
    k.enableNativeLogger(!0);
    let l = window._ws,
        u = !1,
        c = !1,
        d = null,
        f = null;
    if (((window._ws = null), null != l)) {
        if (((t = l.ws), l.state.gateway !== n)) k.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), (t = null);
        else {
            var _;
            let e = { ...l.state };
            null != e.messages &&
                (e.messages = e.messages.map((e) =>
                    null != e.data && 'string' == typeof e.data
                        ? {
                              ...e,
                              data: e.data.substring(0, 100)
                          }
                        : e
                )),
                k.log('[FAST CONNECT] successfully took over websocket, state:', {
                    ...e,
                    messages: null === (_ = e.messages) || void 0 === _ ? void 0 : _.length
                }),
                (u = l.state.open),
                (c = l.state.identify),
                (d = l.state.messages),
                (f = l.state.clientState);
        }
    }
    null == t && ((t = (0, P.Z)(n)).binaryType = 'arraybuffer'), i(t), u && r(c, f), null != d && d.forEach(a), (t.onopen = () => r(c, f)), (t.onmessage = a), (t.onclose = o), (t.onerror = s);
}
function B() {}
let Z = 4,
    F = 1001,
    V = 'Stream end encountered',
    j = 4004,
    H = 30 * b.Z.Millis.SECOND,
    Y = 3 * b.Z.Millis.MINUTE,
    W = 1 * b.Z.Millis.MINUTE;
function K(e, t, n) {
    let i = 0;
    e.dataReady((e) => {
        try {
            return n(e, i);
        } finally {
            i = 0;
        }
    });
    let r = !1;
    return (n) => {
        let a = n.data;
        null != n.raw_length ? (i += n.raw_length) : (i += z(a));
        try {
            e.feed(a);
        } catch (e) {
            throw (r || ((r = !0), t(!1, 0, 'A decompression error occurred')), e);
        }
    };
}
function z(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let q = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class Q extends x.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        k.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = {
            ...this.analytics,
            ...e
        };
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && k.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect() {
        if (!this.willReconnect()) {
            k.verbose('Skipping _connect because willReconnect is false');
            return;
        }
        if (L.a()) {
            k.info('Skipping _connect because socket is paused');
            return;
        }
        (this.connectionState = A.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let e = this.compressionHandler.getAlgorithm(),
            t = U.getName(),
            n = this._getGatewayUrl(),
            i = window.GLOBAL_ENV.API_VERSION;
        o.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            k.info('[CONNECT] '.concat(n, ', ') + 'encoding: '.concat(t, ', ') + 'version: '.concat(i, ', ') + 'compression: '.concat(null != e ? e : 'none')),
            null !== this.webSocket && (k.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, H));
        let r = new URL(n);
        r.searchParams.append('encoding', t),
            r.searchParams.append('v', i.toString()),
            null != e && r.searchParams.append('compress', e),
            G({
                gatewayURL: r.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    o.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    k.info('[CONNECTED] '.concat(r.toString(), ' in ').concat(t, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: K(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: i, s: r, t: a, d: s } = U.unpack(e);
                    if ((i !== x.j.DISPATCH && o.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(i, ' ').concat(x.j[i])), v.default.isLoggingGatewayEvents)) {
                        let e = [i];
                        i === x.j.DISPATCH && e.push(a), e.push(s), k.verboseDangerously('<~', ...e);
                    }
                    let l = Date.now() - n;
                    switch (('READY' === a ? E.Z.parseReady.set(n, l) : 'READY_SUPPLEMENTAL' === a ? E.Z.parseReadySupplemental.set(n, l) : l > 10 && o.Z.mark('\uD83C\uDF10', 'Parse ' + a, l), null != r && (this.seq = r), i)) {
                        case x.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(s);
                            break;
                        case x.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case x.j.INVALID_SESSION:
                            this._handleInvalidSession(s);
                            break;
                        case x.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case x.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(s);
                            break;
                        case x.j.DISPATCH:
                            this._handleDispatch(
                                s,
                                a,
                                'READY' === a
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: z(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: U.getName(),
                                          unpack_duration_ms: l
                                      }
                                    : null
                            );
                            break;
                        default:
                            k.info('Unhandled op '.concat(i));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null), I.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: i } = e;
                    return this._handleClose(t, n, i);
                }
            });
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now() - this.connectionStartTime;
        k.verbose('[HELLO] via '.concat((0, O.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        k.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = A.Z.WILL_RECONNECT), this._connect();
    }
    _handleInvalidSession(e) {
        k.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let i = Date.now() - this.connectionStartTime;
        if ('READY' === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, O.TO)(e);
            o.Z.setServerTrace(n), k.info('[READY] took '.concat(i, 'ms, as ').concat(t)), k.verbose(''.concat(n)), (this.connectionState = A.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === t ? (k.info('[READY_SUPPLEMENTAL] took '.concat(i, 'ms')), (this.connectionState = A.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === t && (k.verbose((0, O.TO)(e)), (this.connectionState = A.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        k.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : q;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), k.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = A.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        k.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: t,
                reason: n
            }),
            t === j)
        )
            return (this.connectionState = A.Z.CLOSED), k.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
        if ((this._tryDetectInvalidIOSToken(t, n, e), (this.connectionState = A.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) k.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect();
        else {
            let i = this.gatewayBackoff.fail(() => this._connect());
            k.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(t, ', ')
                    .concat(n, ') retrying in ')
                    .concat((i / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > Z && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, T.isIOS)() &&
            null != this.token &&
            e === F &&
            t === V &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                c.tn
                    .get({
                        url: w.ANM.ME,
                        headers: { authorization: this.token },
                        rejectWithError: !1
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            y.default.track(w.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t && ((this.connectionState = A.Z.CLOSED), k.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, j, 'invalid token manually detected')), y.default.track(w.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        }
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            k.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')),
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
        r()(null != e, 'GatewaySocket: Heartbeat interval should never null here.'),
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
        (this.webSocket = null), null != t && ((t.onopen = B), (t.onmessage = B), (t.onerror = B), (t.onclose = B), null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, C.I)(U));
    }
    _doResume() {
        var e;
        (this.connectionState = A.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, O.zH)(Date.now() - this.connectionStartTime)),
            k.info('[RESUME] resuming session '.concat(null !== (e = this.sessionId) && void 0 !== e ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                x.j.RESUME,
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
        if (null === e) {
            this._handleClose(!0, j, 'No connection info provided');
            return;
        }
        this.connectionState = A.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, i, r] = await Promise.all([(0, h.O)() ? f.Z.getCommittedVersions() : {}, (0, h.O)() ? p.Z.getCommittedVersions() : {}, !!(0, h.O)() && _.Z.canUseGuildVersions()]),
            s = r
                ? {
                      guild_versions: n,
                      highest_last_message_id: i.highest_last_message_id,
                      read_state_version: i.read_state_version,
                      user_guild_settings_version: i.user_guild_settings_version,
                      user_settings_version: i.user_settings_version,
                      private_channels_version: i.private_channels_version,
                      api_code_version: i.api_code_version,
                      initial_guild_id: i.initial_guild_id
                  }
                : { guild_versions: {} };
        if (this.connectionState !== A.Z.IDENTIFYING || this.identifyStartTime !== t) {
            k.warn('Skipping identify because connectionState or identifyStartTime has changed');
            return;
        }
        let { token: o, properties: l = {}, presence: u } = e;
        (this.token = o), k.verbose('[IDENTIFY]');
        let c = {
                token: o,
                capabilities: (0, N.t)(),
                properties: l,
                presence: u,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s
            },
            d = JSON.stringify(c);
        (this.identifyUncompressedByteSize = d.length), (this.identifyCompressedByteSize = a.deflate(d).length), (this.identifyCount += 1), this.send(x.j.IDENTIFY, c, !1);
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) {
            this._handleClose(!0, j, 'No connection info provided');
            return;
        }
        let { token: t } = e;
        (this.token = t), (this.connectionState = A.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), k.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= Y) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(x.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return k;
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
        return this.isClosed() ? (k.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = A.Z.WILL_RECONNECT), this._connect(), !0) : (k.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: i } = e;
        k.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack),
            g.Z.increment(
                {
                    name: l.V.SOCKET_CRASHED,
                    tags: ['action:'.concat(null != i ? i : t)]
                },
                !0
            ),
            !1 !== e.sentry && S.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            y.default.track(w.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = A.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let r = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (k.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()),
            r &&
                ((this.didForceClearGuildHashes = !0),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(t)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * W));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
        this.resetSocketOnError({
            ...e,
            sentry: !t,
            clearCache: t
        });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) {
            k.verbose('close() called, but socket is already closed.');
            return;
        }
        k.info('Closing connection, current state is '.concat(this.connectionState));
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
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                k.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n ? this.resetBackoff(t, i) : k.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        k.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect() : t && this.connectionState !== A.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            M(this, 'gatewayBackoff', void 0),
            M(this, 'handleIdentify', void 0),
            M(this, 'dispatchExceptionBackoff', new s.Z(1000, W)),
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
                v.default.isLoggingGatewayEvents && k.verboseDangerously('~>', e, t);
                let i = U.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(i);
                    } catch (e) {}
                else k.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new D.Z(this)),
            (this.gatewayBackoff = new s.Z(1000, 60000)),
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
            (this.compressionHandler = (0, C.I)(U)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
