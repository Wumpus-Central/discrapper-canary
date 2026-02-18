"use strict";
n.d(t, { A: () => et }), n(323874), n(14289), n(35956), n(321073), n(142703);
var r = n(284009),
    i = n.n(r),
    s = n(777915),
    a = n(61090),
    o = n(158390),
    l = n(731738),
    u = n(70298),
    c = n(311907),
    d = n(562465),
    _ = n(73153),
    f = n(766034),
    p = n(324827),
    h = n(214771),
    m = n(183636),
    E = n(937724),
    g = n(626584),
    A = n(831062),
    I = n(614792),
    T = n(111162),
    S = n(954571),
    y = n(353835),
    v = n(927813),
    N = n(723702),
    C = n(728458),
    b = n(175306),
    R = n(949189),
    O = n(313449),
    D = n(362488),
    L = n(805396),
    w = n(932170),
    x = n(538343),
    M = n(969091),
    P = n(33282),
    k = n(318015),
    U = n(469177),
    G = n(751124),
    F = n(652215);
let V = new g.A("GatewaySocket"),
    B = new L.A();
function H(e) {
    let { actuallySkipped: t, reason: n } = e;
    if (!(0, D.K)()) return;
    let r = P.j(),
        i = U.L7(),
        s = m.A.getState(),
        a = i.length > 0 ? `${n} + ${i}` : n,
        o = r ? "paused" : "request_state";
    S.default.track(F.HAw.GATEWAY_CONNECT_SKIPPED, {
        actually_skipped: t ?? r,
        client_app_state: s,
        connect_reason: a,
        skip_context: o,
    }),
        (0, D.a)() &&
            setTimeout(() => {
                S.default.track(F.HAw.POST_GATEWAY_CONNECT_SKIPPED, {
                    actually_skipped: t ?? r,
                    original_client_app_state: s,
                    client_app_state: m.A.getState(),
                    skip_context: o,
                    original_connect_reason: a,
                    gateway_connect_reasons: U.L7(),
                });
            }, 200);
}
function j(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: s, onError: a, onClose: o } = e;
    V.enableNativeLogger(!0);
    let l = window._ws,
        u = !1,
        c = !1,
        d = null,
        _ = null;
    if (((window._ws = null), null != l))
        if (((t = l.ws), l.state.gateway !== n))
            V.verbose(`[FAST CONNECT] gatewayURL mismatch: ${l.state.gateway} !== ${n}`), t.close(1e3), (t = null);
        else {
            let e = { ...l.state };
            null != e.messages &&
                (e.messages = e.messages.map((e) =>
                    null != e.data && "string" == typeof e.data ? { ...e, data: e.data.substring(0, 100) } : e,
                )),
                V.log("[FAST CONNECT] successfully took over websocket, state:", {
                    ...e,
                    messages: e.messages?.length,
                }),
                (u = l.state.open),
                (c = l.state.identify),
                (d = l.state.messages),
                (_ = l.state.clientState);
        }
    null == t && ((t = (0, G.A)(n)).binaryType = "arraybuffer"),
        r(t),
        u && i(c, _),
        null != d && d.forEach(s),
        (t.onopen = () => i(c, _)),
        (t.onmessage = s),
        (t.onclose = o),
        (t.onerror = a);
}
function Y() {}
let W = 4,
    K = 1001,
    z = "Stream end encountered",
    $ = 4004,
    q = 30 * v.A.Millis.SECOND,
    Z = 3 * v.A.Millis.MINUTE,
    X = +v.A.Millis.MINUTE;
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
        let s = n.data;
        null != n.raw_length ? (r += n.raw_length) : (r += J(s));
        try {
            e.feed(s);
        } catch (e) {
            throw (i || ((i = !0), t(!1, 0, "A decompression error occurred")), e);
        }
    };
}
function J(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let ee = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class et extends M.A {
    gatewayBackoff;
    handleIdentify;
    dispatchExceptionBackoff = new o.A(1e3, X);
    dispatchSuccessTimer = 0;
    connectionState_;
    webSocket;
    seq;
    sessionId;
    token;
    initialHeartbeatTimeout;
    expeditedHeartbeatTimeout;
    heartbeatInterval;
    helloTimeout;
    heartbeater;
    lastHeartbeatTime;
    lastHeartbeatAckTime;
    heartbeatAck;
    connectionStartTime;
    identifyStartTime;
    nextReconnectIsImmediate;
    compressionHandler;
    hasConnectedOnce;
    isFastConnect;
    didForceClearGuildHashes = !1;
    identifyUncompressedByteSize = 0;
    identifyCompressedByteSize = 0;
    analytics = {};
    identifyCount = 0;
    resumeUrl = null;
    iosGoingAwayEventCount = 0;
    dispatcher;
    heartbeatQOSState = { currentPayload: null, upcomingState: null };
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        V.verbose(`Setting connection state to ${e}`), (this.connectionState_ = e);
    }
    constructor() {
        super(),
            (this.dispatcher = new x.A(this)),
            (this.gatewayBackoff = new o.A(1e3, 6e4)),
            (this.connectionState_ = b.A.CLOSED),
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
            (this.compressionHandler = (0, O.Z)(B)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
    addAnalytics(e) {
        this.analytics = { ...this.analytics, ...e };
    }
    setResumeUrl(e) {
        null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)),
            null !== e && V.verbose(`Updating resume url to ${e}`),
            (this.resumeUrl = e);
    }
    handleActiveStateChange(e) {
        let t = !this.heartbeatQOSState.currentPayload?.active;
        null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
        let n = this.heartbeatQOSState.currentPayload;
        e.active &&
            ((n.active = !0),
            (n.reasons = [...new Set([...n.reasons, ...e.reasons])].sort()),
            t && this.isSessionEstablished() && this._sendHeartbeat()),
            (this.heartbeatQOSState.upcomingState = e);
    }
    handleUpdateTimeSpentSessionId(e, t, n) {
        this.connectionState_ === b.A.SESSION_ESTABLISHED &&
            (this.send(M.p.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect(e) {
        if (!this.willReconnect()) return void V.verbose("Skipping _connect because willReconnect is false");
        let t = P.j();
        if ((t || !U.DQ()) && (V.info("Skipping _connect because socket is paused"), H({ reason: e }), t)) return;
        (this.connectionState = b.A.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let n = this.compressionHandler.getAlgorithm(),
            r = B.getName(),
            i = this._getGatewayUrl(),
            s = window.GLOBAL_ENV.API_VERSION;
        a.A.mark("\uD83C\uDF10", "Socket._connect"),
            V.info(`[CONNECT] ${i}, encoding: ${r}, version: ${s}, compression: ${n ?? "none"}`),
            null !== this.webSocket &&
                (V.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`),
                    this.setResumeUrl(null);
            }, q));
        let o = new URL(i);
        o.searchParams.append("encoding", r),
            o.searchParams.append("v", s.toString()),
            null != n && o.searchParams.append("compress", n),
            j({
                gatewayURL: o.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    a.A.mark("\uD83C\uDF10", `GatewaySocket.onOpen ${e}`);
                    let t = Date.now() - this.connectionStartTime;
                    V.info(`[CONNECTED] ${o.toString()} in ${t} ms`),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: Q(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: s, d: o } = B.unpack(e);
                    if (
                        (r !== M.p.DISPATCH && a.A.mark("\uD83C\uDF10", `GatewaySocket.onMessage ${r} ${M.p[r]}`),
                        T.default.isLoggingGatewayEvents)
                    ) {
                        let e = [r];
                        r === M.p.DISPATCH && e.push(s), e.push(o), V.verboseDangerously("<~", ...e);
                    }
                    let l = Date.now() - n;
                    switch (
                        ("READY" === s
                            ? I.A.parseReady.set(n, l)
                            : "READY_SUPPLEMENTAL" === s
                              ? I.A.parseReadySupplemental.set(n, l)
                              : l > 10 && a.A.mark("\uD83C\uDF10", "Parse " + s, l),
                        null != i && (this.seq = i),
                        r)
                    ) {
                        case M.p.HELLO:
                            this._clearHelloTimeout(), this._handleHello(o);
                            break;
                        case M.p.RECONNECT:
                            this._handleReconnect();
                            break;
                        case M.p.INVALID_SESSION:
                            this._handleInvalidSession(o);
                            break;
                        case M.p.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case M.p.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(o);
                            break;
                        case M.p.DISPATCH:
                            this._handleDispatch(
                                o,
                                s,
                                "READY" === s
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: J(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: B.getName(),
                                          unpack_duration_ms: l,
                                      }
                                    : null,
                            );
                            break;
                        default:
                            V.info(`Unhandled op ${r}`);
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null),
                        y.A.flushDNSCache(),
                        this._handleClose(!1, 0, "An error with the websocket occurred");
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: r } = e;
                    return this._handleClose(t, n, r);
                },
            });
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now() - this.connectionStartTime;
        V.verbose(`[HELLO] via ${(0, w.m6)(e)}, heartbeat interval: ${t}, took ${n} ms`), this._startHeartbeater();
    }
    _handleReconnect() {
        V.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = b.A.WILL_RECONNECT),
            this._connect("reconnect");
    }
    _handleInvalidSession(e) {
        V.info(`[INVALID_SESSION]${e ? " can resume)" : ""}`), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, w.m6)(e);
            a.A.setServerTrace(n),
                V.info(`[READY] took ${r}ms, as ${t}`),
                V.verbose(`${n}`),
                (this.connectionState = b.A.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (V.info(`[READY_SUPPLEMENTAL] took ${r}ms`),
                  (this.connectionState = b.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (V.verbose((0, w.m6)(e)),
                  (this.connectionState = b.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        V.info(
            `[RESUMED] took ${e}ms, replayed ${this.dispatcher.resumeAnalytics.numEvents} events, new seq: ${this.seq}`,
        );
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : ee;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(),
            null != this.heartbeater &&
                null != this.heartbeatInterval &&
                (clearInterval(this.heartbeater),
                (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()),
            (this.heartbeatAck = !0),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = null),
                V.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4e3)), (this.connectionState = b.A.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect("_handleHeartbeatTimeout"));
        V.warn(`[ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    _handleClose(e, t, n) {
        if (((e = e || !1), this._cleanup(), this.emit("close", { code: t, reason: n }), t === $))
            return (
                (this.connectionState = b.A.CLOSED),
                V.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = b.A.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            V.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying immediately.`),
                this._connect("_handleCloseImmediateReconnect");
        else {
            let r = this.gatewayBackoff.fail(() => this._connect(`_handleClose:${n}`));
            V.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying in ${(r / 1e3).toFixed(2)} seconds.`),
                this.gatewayBackoff.fails > W && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, N.isIOS)() &&
            null != this.token &&
            e === K &&
            t === z &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                d.Bo.get({ url: F.Rsh.ME, headers: { authorization: this.token }, rejectWithError: !1 }).then(
                    (e) => {
                        let { status: t } = e;
                        S.default.track(F.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                    (e) => {
                        let { status: t } = e;
                        401 === t &&
                            ((this.connectionState = b.A.CLOSED),
                            V.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, $, "invalid token manually detected")),
                            S.default.track(F.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            V.warn(`[RESET] (${e.toString()}, ${t}, ${n})`),
            this.emit("disconnect", { wasClean: e, code: t, reason: n });
    }
    _sendHeartbeatIfDue() {
        if (null == this.heartbeatInterval || null == this.heartbeater) return;
        let e = this.lastHeartbeatTime;
        null != e && Date.now() - e > this.heartbeatInterval + 5e3 && this._sendHeartbeat();
    }
    _doHeartbeatInterval() {
        this.heartbeatAck
            ? ((this.heartbeatAck = !1), this._sendHeartbeat())
            : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout();
    }
    _startHeartbeater() {
        let { heartbeatInterval: e } = this;
        i()(null != e, "GatewaySocket: Heartbeat interval should never null here."),
            null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout),
            null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            (this.initialHeartbeatTimeout = setTimeout(
                () => {
                    (this.initialHeartbeatTimeout = null),
                        (this.heartbeatAck = !0),
                        (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e)),
                        this._doHeartbeatInterval();
                },
                Math.floor(Math.random() * e),
            ));
    }
    _stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            null !== this.initialHeartbeatTimeout &&
                (clearTimeout(this.initialHeartbeatTimeout), (this.initialHeartbeatTimeout = null)),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    _clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    _cleanup(e) {
        c.Ay.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = Y), (t.onmessage = Y), (t.onerror = Y), (t.onclose = Y), e?.(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = (0, O.Z)(B));
    }
    _doResume() {
        (this.connectionState = b.A.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, w.Qo)(Date.now() - this.connectionStartTime)),
            V.info(`[RESUME] resuming session ${this.sessionId ?? ""}, seq: ${this.seq}`),
            this.send(M.p.RESUME, { token: this.token, session_id: this.sessionId, seq: this.seq }, !1);
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, $, "No connection info provided");
        this.connectionState = b.A.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([
                (0, E.O)() ? f.A.getCommittedVersions() : {},
                (0, E.O)() ? h.A.getCommittedVersions() : {},
                !!(0, E.O)() && p.A.canUseGuildVersions(),
            ]),
            a = i
                ? {
                      guild_versions: n,
                      highest_last_message_id: r.highest_last_message_id,
                      read_state_version: r.read_state_version,
                      user_guild_settings_version: r.user_guild_settings_version,
                      user_settings_version: r.user_settings_version,
                      private_channels_version: r.private_channels_version,
                      api_code_version: r.api_code_version,
                      initial_guild_id: r.initial_guild_id,
                  }
                : { guild_versions: {} };
        if (this.connectionState !== b.A.IDENTIFYING || this.identifyStartTime !== t)
            return void V.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: o, properties: l = {}, presence: u } = e;
        (this.token = o), V.verbose("[IDENTIFY]");
        let c = {
                token: o,
                capabilities: (0, R.O)({ useChannelObfuscation: (0, k.RK)("GatewaySocket") }),
                properties: l,
                presence: u,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: a,
            },
            d = JSON.stringify(c);
        (this.identifyUncompressedByteSize = d.length),
            (this.identifyCompressedByteSize = s.deflate(d).length),
            (this.identifyCount += 1),
            this.send(M.p.IDENTIFY, c, !1),
            S.default.track(F.HAw.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, $, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = b.A.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            V.verbose("[IDENTIFY, fast-connect]"),
            this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= Z)
            ? this._doResume()
            : this._doIdentify(),
            this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _consumeQOSPayload() {
        let e = this.heartbeatQOSState.currentPayload;
        return (
            (this.heartbeatQOSState.currentPayload =
                this.heartbeatQOSState.upcomingState ?? this.heartbeatQOSState.currentPayload),
            (this.heartbeatQOSState.upcomingState = null),
            e
        );
    }
    _sendHeartbeat() {
        let e = this._consumeQOSPayload();
        this.send(M.p.QOS_HEARTBEAT, { seq: this.seq, qos: e }, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return V;
    }
    willReconnect() {
        return this.connectionState === b.A.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === b.A.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === b.A.SESSION_ESTABLISHED || this.connectionState === b.A.RESUMING;
    }
    isConnected() {
        return (
            this.connectionState === b.A.IDENTIFYING ||
            this.connectionState === b.A.RESUMING ||
            this.connectionState === b.A.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (V.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = b.A.WILL_RECONNECT),
              this._connect("connect"),
              !0)
            : (V.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        V.error(`resetSocketOnError during ${t}: ${n.message}`, n.stack);
        let i = (0, u.b)();
        A.A.increment({ name: l.K.SOCKET_CRASHED, tags: [`action:${r ?? t}`, `modded_client:${i}`] }, !0),
            !1 !== e.sentry && C.A.captureException(n, { tags: { socketCrashedAction: t } }),
            S.default.track(F.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: i,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = b.A.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let s = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails
            ? (V.verbose("Triggering fast reconnect"),
              this.dispatchExceptionBackoff.fail(() => {}),
              setTimeout(() => this._connect("resetSocketOnErrorImmediate"), 0))
            : this.dispatchExceptionBackoff.fail(() => this._connect("resetSocketOnError")),
            s &&
                ((this.didForceClearGuildHashes = !0),
                _.h.dispatch({ type: "CLEAR_CACHES", reason: `Socket reset during ${t}` })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * X));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketOnError({ ...e, sentry: !t, clearCache: t });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void V.verbose("close() called, but socket is already closed.");
        V.info(`Closing connection, current state is ${this.connectionState}`);
        let t = e ? 4e3 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = b.A.CLOSED),
            e ||
                ((this.sessionId = null),
                (this.token = null),
                setImmediate(() => {
                    this._reset(!0, 1e3, "Disconnect requested by user");
                }));
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        U.DQ() || H({ reason: t, actuallySkipped: !1 }), this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                V.verbose(`Performing an expedited heartbeat ${null != t && "" !== t ? "reason: " + t : ""}`),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null),
                            !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n
                ? this.resetBackoff(t, r)
                : V.verbose(
                      `Expedited heartbeat requested, but, connection state is ${this.connectionState} and reconnectImmediately was not requested ${null != t && "" !== t ? "reason: " + t : ""}`,
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        V.verbose(`Connection has reset backoff${null != e && "" !== e ? " for reason: " + e : ""}`),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect(e)
                : t && this.connectionState !== b.A.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    send = (e, t, n) => {
        T.default.isLoggingGatewayEvents && V.verboseDangerously("~>", e, t);
        let r = B.pack({ op: e, d: t });
        if (!n || this.isSessionEstablished())
            try {
                null != this.webSocket && this.webSocket.send(r);
            } catch (e) {}
        else V.warn(`Attempted to send while not being in a connected state opcode: ${e}`);
    };
}
