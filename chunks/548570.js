r.d(n, {
    Z: function () {
        return ea;
    }
});
var i = r(315314);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(653041);
var d = r(177593);
var f = r(512722),
    _ = r.n(f),
    h = r(457854);
var p = r(261470),
    m = r(956067),
    g = r(286379),
    E = r(442837),
    v = r(544891),
    I = r(570140),
    T = r(406966),
    b = r(795513),
    y = r(266750),
    S = r(250407),
    A = r(710845),
    N = r(797614),
    C = r(218543),
    R = r(857192),
    O = r(626135),
    D = r(12647),
    L = r(70956),
    x = r(358085),
    w = r(960048),
    P = r(138859),
    M = r(14639),
    k = r(639655),
    U = r(610308),
    B = r(91247),
    G = r(508569),
    Z = r(183139),
    F = r(645436),
    V = r(833508),
    j = r(981631);
function H(e, n, r) {
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
let Y = new A.Z('GatewaySocket'),
    W = new U.Z();
function K(e) {
    let n,
        { gatewayURL: r, newCallback: i, onOpen: a, onMessage: s, onError: o, onClose: l } = e;
    Y.enableNativeLogger(!0);
    let u = window._ws,
        c = !1,
        d = !1,
        f = null,
        _ = null;
    if (((window._ws = null), null != u)) {
        if (((n = u.ws), u.state.gateway !== r)) Y.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(u.state.gateway, ' !== ').concat(r)), n.close(1000), (n = null);
        else {
            var h;
            let e = { ...u.state };
            null != e.messages &&
                (e.messages = e.messages.map((e) =>
                    null != e.data && 'string' == typeof e.data
                        ? {
                              ...e,
                              data: e.data.substring(0, 100)
                          }
                        : e
                )),
                Y.log('[FAST CONNECT] successfully took over websocket, state:', {
                    ...e,
                    messages: null === (h = e.messages) || void 0 === h ? void 0 : h.length
                }),
                (c = u.state.open),
                (d = u.state.identify),
                (f = u.state.messages),
                (_ = u.state.clientState);
        }
    }
    null == n && ((n = (0, V.Z)(r)).binaryType = 'arraybuffer'), i(n), c && a(d, _), null != f && f.forEach(s), (n.onopen = () => a(d, _)), (n.onmessage = s), (n.onclose = l), (n.onerror = o);
}
function z() {}
let q = 4,
    Q = 1001,
    X = 'Stream end encountered',
    J = 4004,
    $ = 30 * L.Z.Millis.SECOND,
    ee = 3 * L.Z.Millis.MINUTE,
    et = 1 * L.Z.Millis.MINUTE;
function en(e, n, r) {
    let i = 0;
    e.dataReady((e) => {
        try {
            return r(e, i);
        } finally {
            i = 0;
        }
    });
    let a = !1;
    return (r) => {
        let s = r.data;
        null != r.raw_length ? (i += r.raw_length) : (i += er(s));
        try {
            e.feed(s);
        } catch (e) {
            throw (!a && ((a = !0), n(!1, 0, 'A decompression error occurred')), e);
        }
    };
}
function er(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let ei = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class ea extends Z.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        Y.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = {
            ...this.analytics,
            ...e
        };
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && Y.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect() {
        if (!this.willReconnect()) {
            Y.verbose('Skipping _connect because willReconnect is false');
            return;
        }
        if (F.a()) {
            Y.info('Skipping _connect because socket is paused');
            return;
        }
        (this.connectionState = P.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let e = this.compressionHandler.getAlgorithm(),
            n = W.getName(),
            r = this._getGatewayUrl(),
            i = window.GLOBAL_ENV.API_VERSION;
        m.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            Y.info('[CONNECT] '.concat(r, ', ') + 'encoding: '.concat(n, ', ') + 'version: '.concat(i, ', ') + 'compression: '.concat(null != e ? e : 'none')),
            null !== this.webSocket && (Y.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, $));
        let a = new URL(r);
        a.searchParams.append('encoding', n),
            a.searchParams.append('v', i.toString()),
            null != e && a.searchParams.append('compress', e),
            K({
                gatewayURL: a.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    m.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e));
                    let n = Date.now() - this.connectionStartTime;
                    Y.info('[CONNECTED] '.concat(a.toString(), ' in ').concat(n, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: en(this.compressionHandler, this._handleClose.bind(this), (e, n) => {
                    let r = Date.now(),
                        { op: i, s: a, t: s, d: o } = W.unpack(e);
                    if ((i !== Z.j.DISPATCH && m.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(i, ' ').concat(Z.j[i])), R.default.isLoggingGatewayEvents)) {
                        let e = [i];
                        i === Z.j.DISPATCH && e.push(s), e.push(o), Y.verboseDangerously('<~', ...e);
                    }
                    let l = Date.now() - r;
                    switch (('READY' === s ? C.Z.parseReady.set(r, l) : 'READY_SUPPLEMENTAL' === s ? C.Z.parseReadySupplemental.set(r, l) : l > 10 && m.Z.mark('\uD83C\uDF10', 'Parse ' + s, l), null != a && (this.seq = a), i)) {
                        case Z.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(o);
                            break;
                        case Z.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case Z.j.INVALID_SESSION:
                            this._handleInvalidSession(o);
                            break;
                        case Z.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case Z.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(o);
                            break;
                        case Z.j.DISPATCH:
                            this._handleDispatch(
                                o,
                                s,
                                'READY' === s
                                    ? {
                                          compressed_byte_size: n,
                                          uncompressed_byte_size: er(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: W.getName(),
                                          unpack_duration_ms: l
                                      }
                                    : null
                            );
                            break;
                        default:
                            Y.info('Unhandled op '.concat(i));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null), D.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
                },
                onClose: (e) => {
                    let { wasClean: n, code: r, reason: i } = e;
                    return this._handleClose(n, r, i);
                }
            });
    }
    _handleHello(e) {
        let n = (this.heartbeatInterval = e.heartbeat_interval),
            r = Date.now() - this.connectionStartTime;
        Y.verbose('[HELLO] via '.concat((0, B.TO)(e), ', ') + 'heartbeat interval: '.concat(n, ', ') + 'took '.concat(r, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        Y.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = P.Z.WILL_RECONNECT), this._connect();
    }
    _handleInvalidSession(e) {
        Y.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, n, r) {
        let i = Date.now() - this.connectionStartTime;
        if ('READY' === n) {
            let n = e.session_id;
            this.sessionId = n;
            let r = (0, B.TO)(e);
            m.Z.setServerTrace(r), Y.info('[READY] took '.concat(i, 'ms, as ').concat(n)), Y.verbose(''.concat(r)), (this.connectionState = P.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === n ? (Y.info('[READY_SUPPLEMENTAL] took '.concat(i, 'ms')), (this.connectionState = P.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === n && (Y.verbose((0, B.TO)(e)), (this.connectionState = P.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, n, r);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        Y.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : ei;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), Y.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = P.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        Y.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, n, r) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: n,
                reason: r
            }),
            n === J)
        )
            return (this.connectionState = P.Z.CLOSED), Y.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, n, r);
        if ((this._tryDetectInvalidIOSToken(n, r, e), (this.connectionState = P.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) Y.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(n, ', ').concat(r, ') retrying immediately.')), this._connect();
        else {
            let i = this.gatewayBackoff.fail(() => this._connect());
            Y.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(n, ', ')
                    .concat(r, ') retrying in ')
                    .concat((i / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > q && this._reset(e, n, r);
        }
    }
    _tryDetectInvalidIOSToken(e, n, r) {
        (0, x.isIOS)() &&
            null != this.token &&
            e === Q &&
            n === X &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                v.tn
                    .get({
                        url: j.ANM.ME,
                        headers: { authorization: this.token },
                        rejectWithError: !1
                    })
                    .then(
                        (e) => {
                            let { status: n } = e;
                            O.default.track(j.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: n });
                        },
                        (e) => {
                            let { status: n } = e;
                            401 === n && ((this.connectionState = P.Z.CLOSED), Y.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(r, J, 'invalid token manually detected')), O.default.track(j.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: n });
                        }
                    ));
    }
    _reset(e, n, r) {
        (this.sessionId = null),
            (this.seq = 0),
            Y.warn('[RESET] ('.concat(e.toString(), ', ').concat(n, ', ').concat(r, ')')),
            this.emit('disconnect', {
                wasClean: e,
                code: n,
                reason: r
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
        _()(null != e, 'GatewaySocket: Heartbeat interval should never null here.'),
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
        E.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let n = this.webSocket;
        (this.webSocket = null), null != n && ((n.onopen = z), (n.onmessage = z), (n.onerror = z), (n.onclose = z), null == e || e(n)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, k.I)(W));
    }
    _doResume() {
        var e;
        (this.connectionState = P.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, B.zH)(Date.now() - this.connectionStartTime)),
            Y.info('[RESUME] resuming session '.concat(null !== (e = this.sessionId) && void 0 !== e ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                Z.j.RESUME,
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
            this._handleClose(!0, J, 'No connection info provided');
            return;
        }
        this.connectionState = P.Z.IDENTIFYING;
        let n = Date.now();
        this.identifyStartTime = n;
        let [r, i, a] = await Promise.all([(0, S.O)() ? T.Z.getCommittedVersions() : {}, (0, S.O)() ? y.Z.getCommittedVersions() : {}, !!(0, S.O)() && b.Z.canUseGuildVersions()]),
            s = a
                ? {
                      guild_versions: r,
                      highest_last_message_id: i.highest_last_message_id,
                      read_state_version: i.read_state_version,
                      user_guild_settings_version: i.user_guild_settings_version,
                      user_settings_version: i.user_settings_version,
                      private_channels_version: i.private_channels_version,
                      api_code_version: i.api_code_version,
                      initial_guild_id: i.initial_guild_id
                  }
                : { guild_versions: {} };
        if (this.connectionState !== P.Z.IDENTIFYING || this.identifyStartTime !== n) {
            Y.warn('Skipping identify because connectionState or identifyStartTime has changed');
            return;
        }
        let { token: o, properties: l = {}, presence: u } = e;
        (this.token = o), Y.verbose('[IDENTIFY]');
        let c = {
                token: o,
                capabilities: (0, M.t)(),
                properties: l,
                presence: u,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s
            },
            d = JSON.stringify(c);
        (this.identifyUncompressedByteSize = d.length), (this.identifyCompressedByteSize = h.deflate(d).length), (this.identifyCount += 1), this.send(Z.j.IDENTIFY, c, !1);
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) {
            this._handleClose(!0, J, 'No connection info provided');
            return;
        }
        let { token: n } = e;
        (this.token = n), (this.connectionState = P.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), Y.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= ee) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(Z.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return Y;
    }
    willReconnect() {
        return this.connectionState === P.Z.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === P.Z.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === P.Z.SESSION_ESTABLISHED || this.connectionState === P.Z.RESUMING;
    }
    isConnected() {
        return this.connectionState === P.Z.IDENTIFYING || this.connectionState === P.Z.RESUMING || this.connectionState === P.Z.SESSION_ESTABLISHED;
    }
    connect() {
        return this.isClosed() ? (Y.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = P.Z.WILL_RECONNECT), this._connect(), !0) : (Y.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: n, error: r, metricAction: i } = e;
        Y.error('resetSocketOnError during '.concat(n, ': ').concat(r.message), r.stack),
            N.Z.increment(
                {
                    name: g.V.SOCKET_CRASHED,
                    tags: ['action:'.concat(null != i ? i : n)]
                },
                !0
            ),
            !1 !== e.sentry && w.Z.captureException(r, { tags: { socketCrashedAction: n } }),
            O.default.track(j.rMx.GATEWAY_SOCKET_RESET, {
                error_message: r.message,
                error_stack: r.stack,
                action: n
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = P.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let a = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (Y.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()),
            a &&
                ((this.didForceClearGuildHashes = !0),
                I.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(n)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * et));
    }
    resetSocketOnDispatchError(e) {
        let n = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
        this.resetSocketOnError({
            ...e,
            sentry: !n,
            clearCache: n
        });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) {
            Y.verbose('close() called, but socket is already closed.');
            return;
        }
        Y.info('Closing connection, current state is '.concat(this.connectionState));
        let n = e ? 4000 : void 0;
        this._cleanup((e) => e.close(n)),
            (this.connectionState = P.Z.CLOSED),
            !e &&
                setImmediate(() => {
                    this._reset(!0, 1000, 'Disconnect requested by user');
                });
    }
    networkStateChange(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.expeditedHeartbeat(e, n, r, !1);
    }
    expeditedHeartbeat(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                Y.verbose('Performing an expedited heartbeat '.concat(null != n && '' !== n ? 'reason: ' + n : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            r ? this.resetBackoff(n, i) : Y.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != n && '' !== n ? 'reason: ' + n : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        Y.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect() : n && this.connectionState !== P.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            H(this, 'gatewayBackoff', void 0),
            H(this, 'handleIdentify', void 0),
            H(this, 'dispatchExceptionBackoff', new p.Z(1000, et)),
            H(this, 'dispatchSuccessTimer', 0),
            H(this, 'connectionState_', void 0),
            H(this, 'webSocket', void 0),
            H(this, 'seq', void 0),
            H(this, 'sessionId', void 0),
            H(this, 'token', void 0),
            H(this, 'initialHeartbeatTimeout', void 0),
            H(this, 'expeditedHeartbeatTimeout', void 0),
            H(this, 'heartbeatInterval', void 0),
            H(this, 'helloTimeout', void 0),
            H(this, 'heartbeater', void 0),
            H(this, 'lastHeartbeatTime', void 0),
            H(this, 'lastHeartbeatAckTime', void 0),
            H(this, 'heartbeatAck', void 0),
            H(this, 'connectionStartTime', void 0),
            H(this, 'identifyStartTime', void 0),
            H(this, 'nextReconnectIsImmediate', void 0),
            H(this, 'compressionHandler', void 0),
            H(this, 'hasConnectedOnce', void 0),
            H(this, 'isFastConnect', void 0),
            H(this, 'didForceClearGuildHashes', !1),
            H(this, 'identifyUncompressedByteSize', 0),
            H(this, 'identifyCompressedByteSize', 0),
            H(this, 'analytics', {}),
            H(this, 'identifyCount', 0),
            H(this, 'resumeUrl', null),
            H(this, 'iosGoingAwayEventCount', 0),
            H(this, 'dispatcher', void 0),
            H(this, 'send', (e, n, r) => {
                R.default.isLoggingGatewayEvents && Y.verboseDangerously('~>', e, n);
                let i = W.pack({
                    op: e,
                    d: n
                });
                if (!r || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(i);
                    } catch (e) {}
                else Y.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new G.Z(this)),
            (this.gatewayBackoff = new p.Z(1000, 60000)),
            (this.connectionState_ = P.Z.CLOSED),
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
            (this.compressionHandler = (0, k.I)(W)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
