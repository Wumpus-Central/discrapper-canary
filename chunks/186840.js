"use strict";
n.d(t, { A: () => W }), n(323874), n(14289), n(35956), n(321073), n(142703);
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
    E = n(937724),
    m = n(626584),
    g = n(831062),
    A = n(614792),
    I = n(111162),
    T = n(954571),
    S = n(353835),
    y = n(927813),
    N = n(723702),
    v = n(728458),
    C = n(175306),
    O = n(949189),
    R = n(313449),
    b = n(805396),
    D = n(932170),
    L = n(538343),
    w = n(969091),
    M = n(33282),
    P = n(318015),
    x = n(751124),
    k = n(652215);
let U = new m.A("GatewaySocket"),
    G = new b.A();
function F() {}
let V = 30 * y.A.Millis.SECOND,
    B = 3 * y.A.Millis.MINUTE,
    H = +y.A.Millis.MINUTE;
function j(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let Y = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class W extends w.A {
    gatewayBackoff;
    handleIdentify;
    dispatchExceptionBackoff = new o.A(1e3, H);
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
        U.verbose(`Setting connection state to ${e}`), (this.connectionState_ = e);
    }
    constructor() {
        super(),
            (this.dispatcher = new L.A(this)),
            (this.gatewayBackoff = new o.A(1e3, 6e4)),
            (this.connectionState_ = C.A.CLOSED),
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
            (this.compressionHandler = (0, R.Z)(G)),
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
            null !== e && U.verbose(`Updating resume url to ${e}`),
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
        this.connectionState_ === C.A.SESSION_ESTABLISHED &&
            (this.send(w.p.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect() {
        var e, t, n;
        let r, i;
        if (!this.willReconnect()) return void U.verbose("Skipping _connect because willReconnect is false");
        if (M.j()) return void U.info("Skipping _connect because socket is paused");
        (this.connectionState = C.A.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let s = this.compressionHandler.getAlgorithm(),
            o = G.getName(),
            l = this._getGatewayUrl(),
            u = window.GLOBAL_ENV.API_VERSION;
        a.A.mark("\uD83C\uDF10", "Socket._connect"),
            U.info(`[CONNECT] ${l}, encoding: ${o}, version: ${u}, compression: ${s ?? "none"}`),
            null !== this.webSocket &&
                (U.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`),
                    this.setResumeUrl(null);
            }, V));
        let c = new URL(l);
        c.searchParams.append("encoding", o),
            c.searchParams.append("v", u.toString()),
            null != s && c.searchParams.append("compress", s),
            !(function (e) {
                let t,
                    { gatewayURL: n, newCallback: r, onOpen: i, onMessage: s, onError: a, onClose: o } = e;
                U.enableNativeLogger(!0);
                let l = window._ws,
                    u = !1,
                    c = !1,
                    d = null,
                    _ = null;
                if (((window._ws = null), null != l))
                    if (((t = l.ws), l.state.gateway !== n))
                        U.verbose(`[FAST CONNECT] gatewayURL mismatch: ${l.state.gateway} !== ${n}`),
                            t.close(1e3),
                            (t = null);
                    else {
                        let e = { ...l.state };
                        null != e.messages &&
                            (e.messages = e.messages.map((e) =>
                                null != e.data && "string" == typeof e.data
                                    ? { ...e, data: e.data.substring(0, 100) }
                                    : e,
                            )),
                            U.log("[FAST CONNECT] successfully took over websocket, state:", {
                                ...e,
                                messages: e.messages?.length,
                            }),
                            (u = l.state.open),
                            (c = l.state.identify),
                            (d = l.state.messages),
                            (_ = l.state.clientState);
                    }
                null == t && ((t = (0, x.A)(n)).binaryType = "arraybuffer"),
                    r(t),
                    u && i(c, _),
                    null != d && d.forEach(s),
                    (t.onopen = () => i(c, _)),
                    (t.onmessage = s),
                    (t.onclose = o),
                    (t.onerror = a);
            })({
                gatewayURL: c.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    a.A.mark(`🌐`, `GatewaySocket.onOpen ${e}`);
                    let t = Date.now() - this.connectionStartTime;
                    U.info(`[CONNECTED] ${c.toString()} in ${t} ms`),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage:
                    ((e = this.compressionHandler),
                    (t = this._handleClose.bind(this)),
                    (n = (e, t) => {
                        let n = Date.now(),
                            { op: r, s: i, t: s, d: o } = G.unpack(e);
                        if (
                            (r !== w.p.DISPATCH && a.A.mark(`🌐`, `GatewaySocket.onMessage ${r} ${w.p[r]}`),
                            I.default.isLoggingGatewayEvents)
                        ) {
                            let e = [r];
                            r === w.p.DISPATCH && e.push(s), e.push(o), U.verboseDangerously("<~", ...e);
                        }
                        let l = Date.now() - n;
                        switch (
                            ("READY" === s
                                ? A.A.parseReady.set(n, l)
                                : "READY_SUPPLEMENTAL" === s
                                  ? A.A.parseReadySupplemental.set(n, l)
                                  : l > 10 && a.A.mark("\uD83C\uDF10", "Parse " + s, l),
                            null != i && (this.seq = i),
                            r)
                        ) {
                            case w.p.HELLO:
                                this._clearHelloTimeout(), this._handleHello(o);
                                break;
                            case w.p.RECONNECT:
                                this._handleReconnect();
                                break;
                            case w.p.INVALID_SESSION:
                                this._handleInvalidSession(o);
                                break;
                            case w.p.HEARTBEAT:
                                this._handleHeartbeatReceive();
                                break;
                            case w.p.HEARTBEAT_ACK:
                                this._handleHeartbeatAck(o);
                                break;
                            case w.p.DISPATCH:
                                this._handleDispatch(
                                    o,
                                    s,
                                    "READY" === s
                                        ? {
                                              compressed_byte_size: t,
                                              uncompressed_byte_size: j(e),
                                              compression_algorithm: this.compressionHandler.getAlgorithm(),
                                              packing_algorithm: G.getName(),
                                              unpack_duration_ms: l,
                                          }
                                        : null,
                                );
                                break;
                            default:
                                U.info(`Unhandled op ${r}`);
                        }
                        this._sendHeartbeatIfDue();
                    }),
                    (r = 0),
                    e.dataReady((e) => {
                        try {
                            return n(e, r);
                        } finally {
                            r = 0;
                        }
                    }),
                    (i = !1),
                    (n) => {
                        let s = n.data;
                        null != n.raw_length ? (r += n.raw_length) : (r += j(s));
                        try {
                            e.feed(s);
                        } catch (e) {
                            throw (i || ((i = !0), t(!1, 0, "A decompression error occurred")), e);
                        }
                    }),
                onError: () => {
                    this.setResumeUrl(null),
                        S.A.flushDNSCache(),
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
        U.verbose(`[HELLO] via ${(0, D.m6)(e)}, heartbeat interval: ${t}, took ${n} ms`), this._startHeartbeater();
    }
    _handleReconnect() {
        U.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = C.A.WILL_RECONNECT),
            this._connect();
    }
    _handleInvalidSession(e) {
        U.info(`[INVALID_SESSION]${e ? " can resume)" : ""}`), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, D.m6)(e);
            a.A.setServerTrace(n),
                U.info(`[READY] took ${r}ms, as ${t}`),
                U.verbose(`${n}`),
                (this.connectionState = C.A.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (U.info(`[READY_SUPPLEMENTAL] took ${r}ms`),
                  (this.connectionState = C.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (U.verbose((0, D.m6)(e)),
                  (this.connectionState = C.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        U.info(
            `[RESUMED] took ${e}ms, replayed ${this.dispatcher.resumeAnalytics.numEvents} events, new seq: ${this.seq}`,
        );
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : Y;
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
                U.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4e3)), (this.connectionState = C.A.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        U.warn(`[ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    _handleClose(e, t, n) {
        if (((e = e || !1), this._cleanup(), this.emit("close", { code: t, reason: n }), 4004 === t))
            return (
                (this.connectionState = C.A.CLOSED),
                U.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = C.A.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            U.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying immediately.`), this._connect();
        else {
            let r = this.gatewayBackoff.fail(() => this._connect());
            U.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying in ${(r / 1e3).toFixed(2)} seconds.`),
                this.gatewayBackoff.fails > 4 && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, N.isIOS)() &&
            null != this.token &&
            1001 === e &&
            "Stream end encountered" === t &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                d.Bo.get({ url: k.Rsh.ME, headers: { authorization: this.token }, rejectWithError: !1 }).then(
                    (e) => {
                        let { status: t } = e;
                        T.default.track(k.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                    (e) => {
                        let { status: t } = e;
                        401 === t &&
                            ((this.connectionState = C.A.CLOSED),
                            U.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, 4004, "invalid token manually detected")),
                            T.default.track(k.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            U.warn(`[RESET] (${e.toString()}, ${t}, ${n})`),
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
            null != t && ((t.onopen = F), (t.onmessage = F), (t.onerror = F), (t.onclose = F), e?.(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = (0, R.Z)(G));
    }
    _doResume() {
        (this.connectionState = C.A.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, D.Qo)(Date.now() - this.connectionStartTime)),
            U.info(`[RESUME] resuming session ${this.sessionId ?? ""}, seq: ${this.seq}`),
            this.send(w.p.RESUME, { token: this.token, session_id: this.sessionId, seq: this.seq }, !1);
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        this.connectionState = C.A.IDENTIFYING;
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
        if (this.connectionState !== C.A.IDENTIFYING || this.identifyStartTime !== t)
            return void U.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: o, properties: l = {}, presence: u } = e;
        (this.token = o), U.verbose("[IDENTIFY]");
        let c = {
                token: o,
                capabilities: (0, O.O)({ useChannelObfuscation: (0, P.RK)("GatewaySocket") }),
                properties: l,
                presence: u,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: a,
            },
            d = JSON.stringify(c);
        (this.identifyUncompressedByteSize = d.length),
            (this.identifyCompressedByteSize = s.deflate(d).length),
            (this.identifyCount += 1),
            this.send(w.p.IDENTIFY, c, !1),
            T.default.track(k.HAw.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = C.A.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            U.verbose("[IDENTIFY, fast-connect]"),
            this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= B)
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
        this.send(w.p.QOS_HEARTBEAT, { seq: this.seq, qos: e }, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return U;
    }
    willReconnect() {
        return this.connectionState === C.A.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === C.A.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === C.A.SESSION_ESTABLISHED || this.connectionState === C.A.RESUMING;
    }
    isConnected() {
        return (
            this.connectionState === C.A.IDENTIFYING ||
            this.connectionState === C.A.RESUMING ||
            this.connectionState === C.A.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (U.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = C.A.WILL_RECONNECT),
              this._connect(),
              !0)
            : (U.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketAndClearCacheOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        U.error(`resetSocketAndClearCacheOnError during ${t}: ${n.message}`, n.stack);
        let i = (0, u.b)();
        g.A.increment({ name: l.K.SOCKET_CRASHED, tags: [`action:${r ?? t}`, `modded_client:${i}`] }, !0),
            !1 !== e.sentry && v.A.captureException(n, { tags: { socketCrashedAction: t } }),
            T.default.track(k.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: i,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = C.A.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel(),
            0 === this.dispatchExceptionBackoff._fails
                ? (U.verbose("Triggering fast reconnect"),
                  this.dispatchExceptionBackoff.fail(() => {}),
                  setTimeout(() => this._connect(), 0))
                : this.dispatchExceptionBackoff.fail(() => this._connect()),
            (this.didForceClearGuildHashes = !0),
            _.h.dispatch({ type: "CLEAR_CACHES", reason: `Socket reset during ${t}` }),
            _.h.dispatch({ type: "LIBDISCORE_RESET" }),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * H));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketAndClearCacheOnError({ ...e, sentry: !t });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void U.verbose("close() called, but socket is already closed.");
        U.info(`Closing connection, current state is ${this.connectionState}`);
        let t = e ? 4e3 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = C.A.CLOSED),
            e ||
                ((this.sessionId = null),
                (this.token = null),
                setImmediate(() => {
                    this._reset(!0, 1e3, "Disconnect requested by user");
                }));
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                U.verbose(`Performing an expedited heartbeat ${null != t && "" !== t ? "reason: " + t : ""}`),
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
                : U.verbose(
                      `Expedited heartbeat requested, but, connection state is ${this.connectionState} and reconnectImmediately was not requested ${null != t && "" !== t ? "reason: " + t : ""}`,
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        U.verbose(`Connection has reset backoff${null != e && "" !== e ? " for reason: " + e : ""}`),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect()
                : t && this.connectionState !== C.A.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    send = (e, t, n) => {
        I.default.isLoggingGatewayEvents && U.verboseDangerously("~>", e, w.p[e], t);
        let r = G.pack({ op: e, d: t });
        if (!n || this.isSessionEstablished())
            try {
                null != this.webSocket && this.webSocket.send(r);
            } catch (e) {}
        else U.warn(`Attempted to send while not being in a connected state opcode: ${e}`);
    };
}
