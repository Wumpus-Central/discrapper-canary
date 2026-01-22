n.d(t, {
    A: () => ea,
}),
    n(896048),
    n(638769),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(321073),
    n(457529),
    n(142703);
var r = n(284009),
    i = n.n(r),
    a = n(777915),
    s = n(61090),
    o = n(158390),
    l = n(731738),
    c = n(70298),
    u = n(311907),
    d = n(562465),
    f = n(73153),
    p = n(766034),
    _ = n(324827),
    h = n(214771),
    m = n(183636),
    g = n(937724),
    E = n(626584),
    b = n(831062),
    y = n(614792),
    O = n(111162),
    A = n(954571),
    v = n(353835),
    S = n(927813),
    I = n(723702),
    T = n(728458),
    C = n(175306),
    N = n(949189),
    R = n(313449),
    w = n(362488),
    P = n(805396),
    D = n(932170),
    x = n(538343),
    L = n(969091),
    j = n(33282),
    M = n(318015),
    k = n(469177),
    U = n(751124),
    G = n(652215);

function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}

function B(e, t) {
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

function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = new E.A("GatewaySocket"),
    W = new P.A();

function K(e) {
    let { actuallySkipped: t, reason: n } = e;
    if (!(0, w.K)()) return;
    let r = j.j(),
        i = k.L7(),
        a = m.A.getState(),
        s = i.length > 0 ? "".concat(n, " + ").concat(i) : n,
        o = r ? "paused" : "request_state";
    A.default.track(G.HAw.GATEWAY_CONNECT_SKIPPED, {
        actually_skipped: null != t ? t : r,
        client_app_state: a,
        connect_reason: s,
        skip_context: o,
    }),
        (0, w.a)() &&
            setTimeout(() => {
                A.default.track(G.HAw.POST_GATEWAY_CONNECT_SKIPPED, {
                    actually_skipped: null != t ? t : r,
                    original_client_app_state: a,
                    client_app_state: m.A.getState(),
                    skip_context: o,
                    original_connect_reason: s,
                    gateway_connect_reasons: k.L7(),
                });
            }, 200);
}

function z(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: a, onError: s, onClose: o } = e;
    Y.enableNativeLogger(!0);
    let l = window._ws,
        c = !1,
        u = !1,
        d = null,
        f = null;
    if (((window._ws = null), null != l))
        if (((t = l.ws), l.state.gateway !== n))
            Y.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)),
                t.close(1e3),
                (t = null);
        else {
            var p;
            let e = F({}, l.state);
            null != e.messages &&
                (e.messages = e.messages.map((e) =>
                    null != e.data && "string" == typeof e.data
                        ? H(F({}, e), {
                              data: e.data.substring(0, 100),
                          })
                        : e,
                )),
                Y.log(
                    "[FAST CONNECT] successfully took over websocket, state:",
                    H(F({}, e), {
                        messages: null == (p = e.messages) ? void 0 : p.length,
                    }),
                ),
                (c = l.state.open),
                (u = l.state.identify),
                (d = l.state.messages),
                (f = l.state.clientState);
        }
    null == t && ((t = (0, U.A)(n)).binaryType = "arraybuffer"),
        r(t),
        c && i(u, f),
        null != d && d.forEach(a),
        (t.onopen = () => i(u, f)),
        (t.onmessage = a),
        (t.onclose = o),
        (t.onerror = s);
}

function q() {}
let X = 4,
    Z = 1001,
    Q = "Stream end encountered",
    $ = 4004,
    J = 30 * S.A.Millis.SECOND,
    ee = 3 * S.A.Millis.MINUTE,
    et = +S.A.Millis.MINUTE;

function en(e, t, n) {
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
        let a = n.data;
        null != n.raw_length ? (r += n.raw_length) : (r += er(a));
        try {
            e.feed(a);
        } catch (e) {
            throw (i || ((i = !0), t(!1, 0, "A decompression error occurred")), e);
        }
    };
}

function er(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let ei = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class ea extends L.A {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        Y.verbose("Setting connection state to ".concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = F({}, this.analytics, e);
    }
    setResumeUrl(e) {
        null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)),
            null !== e && Y.verbose("Updating resume url to ".concat(e)),
            (this.resumeUrl = e);
    }
    handleActiveStateChange(e) {
        var t;
        let n = !(null == (t = this.heartbeatQOSState.currentPayload) ? void 0 : t.active);
        null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
        let r = this.heartbeatQOSState.currentPayload;
        e.active &&
            ((r.active = !0),
            (r.reasons = [...new Set([...r.reasons, ...e.reasons])].sort()),
            n && this.isSessionEstablished() && this._sendHeartbeat()),
            (this.heartbeatQOSState.upcomingState = e);
    }
    handleUpdateTimeSpentSessionId(e, t, n) {
        this.connectionState_ === C.A.SESSION_ESTABLISHED &&
            (this.send(L.p.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect(e) {
        if (!this.willReconnect()) return void Y.verbose("Skipping _connect because willReconnect is false");
        let t = j.j();
        if (
            (t || !k.DQ()) &&
            (Y.info("Skipping _connect because socket is paused"),
            K({
                reason: e,
            }),
            t)
        )
            return;
        (this.connectionState = C.A.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let n = this.compressionHandler.getAlgorithm(),
            r = W.getName(),
            i = this._getGatewayUrl(),
            a = window.GLOBAL_ENV.API_VERSION;
        s.A.mark("\uD83C\uDF10", "Socket._connect"),
            Y.info(
                "[CONNECT] ".concat(i, ", ") +
                    "encoding: ".concat(r, ", ") +
                    "version: ".concat(a, ", ") +
                    "compression: ".concat(null != n ? n : "none"),
            ),
            null !== this.webSocket &&
                (Y.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(
                    !1,
                    0,
                    "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time."),
                ),
                    this.setResumeUrl(null);
            }, J));
        let o = new URL(i);
        o.searchParams.append("encoding", r),
            o.searchParams.append("v", a.toString()),
            null != n && o.searchParams.append("compress", n),
            z({
                gatewayURL: o.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    s.A.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    Y.info("[CONNECTED] ".concat(o.toString(), " in ").concat(t, " ms")),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: en(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: a, d: o } = W.unpack(e);
                    if (
                        (r !== L.p.DISPATCH &&
                            s.A.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(r, " ").concat(L.p[r])),
                        O.default.isLoggingGatewayEvents)
                    ) {
                        let e = [r];
                        r === L.p.DISPATCH && e.push(a), e.push(o), Y.verboseDangerously("<~", ...e);
                    }
                    let l = Date.now() - n;
                    switch (
                        ("READY" === a
                            ? y.A.parseReady.set(n, l)
                            : "READY_SUPPLEMENTAL" === a
                              ? y.A.parseReadySupplemental.set(n, l)
                              : l > 10 && s.A.mark("\uD83C\uDF10", "Parse " + a, l),
                        null != i && (this.seq = i),
                        r)
                    ) {
                        case L.p.HELLO:
                            this._clearHelloTimeout(), this._handleHello(o);
                            break;
                        case L.p.RECONNECT:
                            this._handleReconnect();
                            break;
                        case L.p.INVALID_SESSION:
                            this._handleInvalidSession(o);
                            break;
                        case L.p.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case L.p.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(o);
                            break;
                        case L.p.DISPATCH:
                            this._handleDispatch(
                                o,
                                a,
                                "READY" === a
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: er(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: W.getName(),
                                          unpack_duration_ms: l,
                                      }
                                    : null,
                            );
                            break;
                        default:
                            Y.info("Unhandled op ".concat(r));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null),
                        v.A.flushDNSCache(),
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
        Y.verbose(
            "[HELLO] via ".concat((0, D.m6)(e), ", ") +
                "heartbeat interval: ".concat(t, ", ") +
                "took ".concat(n, " ms"),
        ),
            this._startHeartbeater();
    }
    _handleReconnect() {
        Y.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = C.A.WILL_RECONNECT),
            this._connect("reconnect");
    }
    _handleInvalidSession(e) {
        Y.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")),
            e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, D.m6)(e);
            s.A.setServerTrace(n),
                Y.info("[READY] took ".concat(r, "ms, as ").concat(t)),
                Y.verbose("".concat(n)),
                (this.connectionState = C.A.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (Y.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms")),
                  (this.connectionState = C.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (Y.verbose((0, D.m6)(e)),
                  (this.connectionState = C.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        Y.info(
            "[RESUMED] took "
                .concat(e, "ms, replayed ")
                .concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ")
                .concat(this.seq),
        );
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : ei;
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
                Y.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4e3)), (this.connectionState = C.A.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect("_handleHeartbeatTimeout"));
        Y.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit("close", {
                code: t,
                reason: n,
            }),
            t === $)
        )
            return (
                (this.connectionState = C.A.CLOSED),
                Y.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = C.A.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            Y.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")),
                this._connect("_handleCloseImmediateReconnect");
        else {
            let r = this.gatewayBackoff.fail(() => this._connect("_handleClose:".concat(n)));
            Y.info(
                "[WS CLOSED] ("
                    .concat(e.toString(), ", ")
                    .concat(t, ", ")
                    .concat(n, ") retrying in ")
                    .concat((r / 1e3).toFixed(2), " seconds."),
            ),
                this.gatewayBackoff.fails > X && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, I.isIOS)() &&
            null != this.token &&
            e === Z &&
            t === Q &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                d.Bo.get({
                    url: G.Rsh.ME,
                    headers: {
                        authorization: this.token,
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let { status: t } = e;
                        A.default.track(G.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t,
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        401 === t &&
                            ((this.connectionState = C.A.CLOSED),
                            Y.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, $, "invalid token manually detected")),
                            A.default.track(G.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                                api_status_code: t,
                            });
                    },
                ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            Y.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")),
            this.emit("disconnect", {
                wasClean: e,
                code: t,
                reason: n,
            });
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
        u.Ay.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = q), (t.onmessage = q), (t.onerror = q), (t.onclose = q), null == e || e(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = (0, R.Z)(W));
    }
    _doResume() {
        var e;
        (this.connectionState = C.A.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, D.Qo)(Date.now() - this.connectionStartTime)),
            Y.info(
                "[RESUME] resuming session ".concat(null != (e = this.sessionId) ? e : "", ", seq: ").concat(this.seq),
            ),
            this.send(
                L.p.RESUME,
                {
                    token: this.token,
                    session_id: this.sessionId,
                    seq: this.seq,
                },
                !1,
            );
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, $, "No connection info provided");
        this.connectionState = C.A.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([
                (0, g.O)() ? p.A.getCommittedVersions() : {},
                (0, g.O)() ? h.A.getCommittedVersions() : {},
                !!(0, g.O)() && _.A.canUseGuildVersions(),
            ]),
            s = i
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
                : {
                      guild_versions: {},
                  };
        if (this.connectionState !== C.A.IDENTIFYING || this.identifyStartTime !== t)
            return void Y.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: o, properties: l = {}, presence: c } = e;
        (this.token = o), Y.verbose("[IDENTIFY]");
        let u = {
                token: o,
                capabilities: (0, N.O)({
                    useChannelObfuscation: (0, M.RK)("GatewaySocket"),
                }),
                properties: l,
                presence: c,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s,
            },
            d = JSON.stringify(u);
        (this.identifyUncompressedByteSize = d.length),
            (this.identifyCompressedByteSize = a.deflate(d).length),
            (this.identifyCount += 1),
            this.send(L.p.IDENTIFY, u, !1),
            A.default.track(G.HAw.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, $, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = C.A.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            Y.verbose("[IDENTIFY, fast-connect]"),
            this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= ee)
            ? this._doResume()
            : this._doIdentify(),
            this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _consumeQOSPayload() {
        var e;
        let t = this.heartbeatQOSState.currentPayload;
        return (
            (this.heartbeatQOSState.currentPayload =
                null != (e = this.heartbeatQOSState.upcomingState) ? e : this.heartbeatQOSState.currentPayload),
            (this.heartbeatQOSState.upcomingState = null),
            t
        );
    }
    _sendHeartbeat() {
        let e = this._consumeQOSPayload();
        this.send(
            L.p.QOS_HEARTBEAT,
            {
                seq: this.seq,
                qos: e,
            },
            !1,
        ),
            (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return Y;
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
            ? (Y.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = C.A.WILL_RECONNECT),
              this._connect("connect"),
              !0)
            : (Y.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        Y.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack);
        let i = (0, c.b)();
        b.A.increment(
            {
                name: l.K.SOCKET_CRASHED,
                tags: ["action:".concat(null != r ? r : t), "modded_client:".concat(i)],
            },
            !0,
        ),
            !1 !== e.sentry &&
                T.A.captureException(n, {
                    tags: {
                        socketCrashedAction: t,
                    },
                }),
            A.default.track(G.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: i,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = C.A.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let a = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails
            ? (Y.verbose("Triggering fast reconnect"),
              this.dispatchExceptionBackoff.fail(() => {}),
              setTimeout(() => this._connect("resetSocketOnErrorImmediate"), 0))
            : this.dispatchExceptionBackoff.fail(() => this._connect("resetSocketOnError")),
            a &&
                ((this.didForceClearGuildHashes = !0),
                f.h.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "Socket reset during ".concat(t),
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * et));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketOnError(
            H(F({}, e), {
                sentry: !t,
                clearCache: t,
            }),
        );
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void Y.verbose("close() called, but socket is already closed.");
        Y.info("Closing connection, current state is ".concat(this.connectionState));
        let t = e ? 4e3 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = C.A.CLOSED),
            e ||
                setImmediate(() => {
                    this._reset(!0, 1e3, "Disconnect requested by user");
                });
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        k.DQ() ||
            K({
                reason: t,
                actuallySkipped: !1,
            }),
            this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                Y.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")),
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
                : Y.verbose(
                      "Expedited heartbeat requested, but, connection state is "
                          .concat(this.connectionState, " and reconnectImmediately was not requested ")
                          .concat(null != t && "" !== t ? "reason: " + t : ""),
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        Y.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect(e)
                : t && this.connectionState !== C.A.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            V(this, "gatewayBackoff", void 0),
            V(this, "handleIdentify", void 0),
            V(this, "dispatchExceptionBackoff", new o.A(1e3, et)),
            V(this, "dispatchSuccessTimer", 0),
            V(this, "connectionState_", void 0),
            V(this, "webSocket", void 0),
            V(this, "seq", void 0),
            V(this, "sessionId", void 0),
            V(this, "token", void 0),
            V(this, "initialHeartbeatTimeout", void 0),
            V(this, "expeditedHeartbeatTimeout", void 0),
            V(this, "heartbeatInterval", void 0),
            V(this, "helloTimeout", void 0),
            V(this, "heartbeater", void 0),
            V(this, "lastHeartbeatTime", void 0),
            V(this, "lastHeartbeatAckTime", void 0),
            V(this, "heartbeatAck", void 0),
            V(this, "connectionStartTime", void 0),
            V(this, "identifyStartTime", void 0),
            V(this, "nextReconnectIsImmediate", void 0),
            V(this, "compressionHandler", void 0),
            V(this, "hasConnectedOnce", void 0),
            V(this, "isFastConnect", void 0),
            V(this, "didForceClearGuildHashes", !1),
            V(this, "identifyUncompressedByteSize", 0),
            V(this, "identifyCompressedByteSize", 0),
            V(this, "analytics", {}),
            V(this, "identifyCount", 0),
            V(this, "resumeUrl", null),
            V(this, "iosGoingAwayEventCount", 0),
            V(this, "dispatcher", void 0),
            V(this, "heartbeatQOSState", {
                currentPayload: null,
                upcomingState: null,
            }),
            V(this, "send", (e, t, n) => {
                O.default.isLoggingGatewayEvents && Y.verboseDangerously("~>", e, t);
                let r = W.pack({
                    op: e,
                    d: t,
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else Y.warn("Attempted to send while not being in a connected state opcode: ".concat(e));
            }),
            (this.dispatcher = new x.A(this)),
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
            (this.compressionHandler = (0, R.Z)(W)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
