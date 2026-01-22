n.d(t, { Z: () => ea }),
    n(388685),
    n(642613),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(539854),
    n(49124),
    n(358797);
var r = n(512722),
    i = n.n(r),
    a = n(457854),
    o = n(135273),
    s = n(261470),
    l = n(286379),
    c = n(903772),
    u = n(442837),
    d = n(544891),
    f = n(570140),
    p = n(406966),
    _ = n(795513),
    h = n(266750),
    m = n(15624),
    g = n(768433),
    E = n(710845),
    b = n(797614),
    y = n(218543),
    O = n(857192),
    v = n(626135),
    S = n(12647),
    I = n(70956),
    T = n(358085),
    C = n(960048),
    A = n(138859),
    N = n(14639),
    P = n(639655),
    w = n(249308),
    R = n(610308),
    D = n(91247),
    x = n(508569),
    L = n(183139),
    j = n(645436),
    M = n(638214),
    k = n(866483),
    U = n(833508),
    G = n(981631);
function Z(e, t, n) {
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
                Z(e, t, n[t]);
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
function V(e, t) {
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
let H = new E.Z("GatewaySocket"),
    Y = new R.Z();
function W(e) {
    let { actuallySkipped: t, reason: n } = e;
    if (!(0, w.n)()) return;
    let r = j.a(),
        i = k.Pf(),
        a = m.Z.getState(),
        o = i.length > 0 ? "".concat(n, " + ").concat(i) : n,
        s = r ? "paused" : "request_state";
    v.default.track(G.rMx.GATEWAY_CONNECT_SKIPPED, {
        actually_skipped: null != t ? t : r,
        client_app_state: a,
        connect_reason: o,
        skip_context: s,
    }),
        (0, w.L)() &&
            setTimeout(() => {
                v.default.track(G.rMx.POST_GATEWAY_CONNECT_SKIPPED, {
                    actually_skipped: null != t ? t : r,
                    original_client_app_state: a,
                    client_app_state: m.Z.getState(),
                    skip_context: s,
                    original_connect_reason: o,
                    gateway_connect_reasons: k.Pf(),
                });
            }, 200);
}
function K(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: a, onError: o, onClose: s } = e;
    H.enableNativeLogger(!0);
    let l = window._ws,
        c = !1,
        u = !1,
        d = null,
        f = null;
    if (((window._ws = null), null != l))
        if (((t = l.ws), l.state.gateway !== n))
            H.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)),
                t.close(1000),
                (t = null);
        else {
            var p;
            let e = F({}, l.state);
            null != e.messages &&
                (e.messages = e.messages.map((e) =>
                    null != e.data && "string" == typeof e.data ? V(F({}, e), { data: e.data.substring(0, 100) }) : e,
                )),
                H.log(
                    "[FAST CONNECT] successfully took over websocket, state:",
                    V(F({}, e), { messages: null == (p = e.messages) ? void 0 : p.length }),
                ),
                (c = l.state.open),
                (u = l.state.identify),
                (d = l.state.messages),
                (f = l.state.clientState);
        }
    null == t && ((t = (0, U.Z)(n)).binaryType = "arraybuffer"),
        r(t),
        c && i(u, f),
        null != d && d.forEach(a),
        (t.onopen = () => i(u, f)),
        (t.onmessage = a),
        (t.onclose = s),
        (t.onerror = o);
}
function z() {}
let q = 4,
    Q = 1001,
    X = "Stream end encountered",
    J = 4004,
    $ = 30 * I.Z.Millis.SECOND,
    ee = 3 * I.Z.Millis.MINUTE,
    et = +I.Z.Millis.MINUTE;
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
class ea extends L.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        H.verbose("Setting connection state to ".concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = F({}, this.analytics, e);
    }
    setResumeUrl(e) {
        null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)),
            null !== e && H.verbose("Updating resume url to ".concat(e)),
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
        this.connectionState_ === A.Z.SESSION_ESTABLISHED &&
            (this.send(L.j.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect(e) {
        if (!this.willReconnect()) return void H.verbose("Skipping _connect because willReconnect is false");
        let t = j.a();
        if ((t || !k.RZ()) && (H.info("Skipping _connect because socket is paused"), W({ reason: e }), t)) return;
        (this.connectionState = A.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let n = this.compressionHandler.getAlgorithm(),
            r = Y.getName(),
            i = this._getGatewayUrl(),
            a = window.GLOBAL_ENV.API_VERSION;
        o.Z.mark("\uD83C\uDF10", "Socket._connect"),
            H.info(
                "[CONNECT] ".concat(i, ", ") +
                    "encoding: ".concat(r, ", ") +
                    "version: ".concat(a, ", ") +
                    "compression: ".concat(null != n ? n : "none"),
            ),
            null !== this.webSocket &&
                (H.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(
                    !1,
                    0,
                    "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time."),
                ),
                    this.setResumeUrl(null);
            }, $));
        let s = new URL(i);
        s.searchParams.append("encoding", r),
            s.searchParams.append("v", a.toString()),
            null != n && s.searchParams.append("compress", n),
            K({
                gatewayURL: s.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    o.Z.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    H.info("[CONNECTED] ".concat(s.toString(), " in ").concat(t, " ms")),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: en(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: a, d: s } = Y.unpack(e);
                    if (
                        (r !== L.j.DISPATCH &&
                            o.Z.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(r, " ").concat(L.j[r])),
                        O.default.isLoggingGatewayEvents)
                    ) {
                        let e = [r];
                        r === L.j.DISPATCH && e.push(a), e.push(s), H.verboseDangerously("<~", ...e);
                    }
                    let l = Date.now() - n;
                    switch (
                        ("READY" === a
                            ? y.Z.parseReady.set(n, l)
                            : "READY_SUPPLEMENTAL" === a
                              ? y.Z.parseReadySupplemental.set(n, l)
                              : l > 10 && o.Z.mark("\uD83C\uDF10", "Parse " + a, l),
                        null != i && (this.seq = i),
                        r)
                    ) {
                        case L.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(s);
                            break;
                        case L.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case L.j.INVALID_SESSION:
                            this._handleInvalidSession(s);
                            break;
                        case L.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case L.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(s);
                            break;
                        case L.j.DISPATCH:
                            this._handleDispatch(
                                s,
                                a,
                                "READY" === a
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: er(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: Y.getName(),
                                          unpack_duration_ms: l,
                                      }
                                    : null,
                            );
                            break;
                        default:
                            H.info("Unhandled op ".concat(r));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null),
                        S.Z.flushDNSCache(),
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
        H.verbose(
            "[HELLO] via ".concat((0, D.TO)(e), ", ") +
                "heartbeat interval: ".concat(t, ", ") +
                "took ".concat(n, " ms"),
        ),
            this._startHeartbeater();
    }
    _handleReconnect() {
        H.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4000)),
            (this.connectionState = A.Z.WILL_RECONNECT),
            this._connect("reconnect");
    }
    _handleInvalidSession(e) {
        H.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")),
            e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, D.TO)(e);
            o.Z.setServerTrace(n),
                H.info("[READY] took ".concat(r, "ms, as ").concat(t)),
                H.verbose("".concat(n)),
                (this.connectionState = A.Z.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (H.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms")),
                  (this.connectionState = A.Z.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (H.verbose((0, D.TO)(e)),
                  (this.connectionState = A.Z.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        H.info(
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
                H.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = A.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect("_handleHeartbeatTimeout"));
        H.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1000).toFixed(2), " seconds."));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit("close", {
                code: t,
                reason: n,
            }),
            t === J)
        )
            return (
                (this.connectionState = A.Z.CLOSED),
                H.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = A.Z.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            H.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")),
                this._connect("_handleCloseImmediateReconnect");
        else {
            let r = this.gatewayBackoff.fail(() => this._connect("_handleClose:".concat(n)));
            H.info(
                "[WS CLOSED] ("
                    .concat(e.toString(), ", ")
                    .concat(t, ", ")
                    .concat(n, ") retrying in ")
                    .concat((r / 1000).toFixed(2), " seconds."),
            ),
                this.gatewayBackoff.fails > q && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, T.isIOS)() &&
            null != this.token &&
            e === Q &&
            t === X &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                d.tn
                    .get({
                        url: G.ANM.ME,
                        headers: { authorization: this.token },
                        rejectWithError: !1,
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            v.default.track(G.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t &&
                                ((this.connectionState = A.Z.CLOSED),
                                H.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                                this._reset(n, J, "invalid token manually detected")),
                                v.default.track(G.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            H.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")),
            this.emit("disconnect", {
                wasClean: e,
                code: t,
                reason: n,
            });
    }
    _sendHeartbeatIfDue() {
        if (null == this.heartbeatInterval || null == this.heartbeater) return;
        let e = this.lastHeartbeatTime;
        null != e && Date.now() - e > this.heartbeatInterval + 5000 && this._sendHeartbeat();
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
        u.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = z), (t.onmessage = z), (t.onerror = z), (t.onclose = z), null == e || e(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = (0, P.I)(Y));
    }
    _doResume() {
        var e;
        (this.connectionState = A.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, D.zH)(Date.now() - this.connectionStartTime)),
            H.info(
                "[RESUME] resuming session ".concat(null != (e = this.sessionId) ? e : "", ", seq: ").concat(this.seq),
            ),
            this.send(
                L.j.RESUME,
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
        if (null === e) return void this._handleClose(!0, J, "No connection info provided");
        this.connectionState = A.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([
                (0, g.O)() ? p.Z.getCommittedVersions() : {},
                (0, g.O)() ? h.Z.getCommittedVersions() : {},
                !!(0, g.O)() && _.Z.canUseGuildVersions(),
            ]),
            o = i
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
        if (this.connectionState !== A.Z.IDENTIFYING || this.identifyStartTime !== t)
            return void H.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: s, properties: l = {}, presence: c } = e;
        (this.token = s), H.verbose("[IDENTIFY]");
        let u = {
                token: s,
                capabilities: (0, N.t)({ useChannelObfuscation: (0, M.Pp)("GatewaySocket") }),
                properties: l,
                presence: c,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: o,
            },
            d = JSON.stringify(u);
        (this.identifyUncompressedByteSize = d.length),
            (this.identifyCompressedByteSize = a.deflate(d).length),
            (this.identifyCount += 1),
            this.send(L.j.IDENTIFY, u, !1),
            v.default.track(G.rMx.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, J, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = A.Z.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            H.verbose("[IDENTIFY, fast-connect]"),
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
            L.j.QOS_HEARTBEAT,
            {
                seq: this.seq,
                qos: e,
            },
            !1,
        ),
            (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return H;
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
        return (
            this.connectionState === A.Z.IDENTIFYING ||
            this.connectionState === A.Z.RESUMING ||
            this.connectionState === A.Z.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (H.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = A.Z.WILL_RECONNECT),
              this._connect("connect"),
              !0)
            : (H.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        H.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack);
        let i = (0, c.e)();
        b.Z.increment(
            {
                name: l.V.SOCKET_CRASHED,
                tags: ["action:".concat(null != r ? r : t), "modded_client:".concat(i)],
            },
            !0,
        ),
            !1 !== e.sentry && C.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            v.default.track(G.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: i,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = A.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let a = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails
            ? (H.verbose("Triggering fast reconnect"),
              this.dispatchExceptionBackoff.fail(() => {}),
              setTimeout(() => this._connect("resetSocketOnErrorImmediate"), 0))
            : this.dispatchExceptionBackoff.fail(() => this._connect("resetSocketOnError")),
            a &&
                ((this.didForceClearGuildHashes = !0),
                f.Z.dispatch({
                    type: "CLEAR_CACHES",
                    reason: "Socket reset during ".concat(t),
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * et));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketOnError(
            V(F({}, e), {
                sentry: !t,
                clearCache: t,
            }),
        );
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void H.verbose("close() called, but socket is already closed.");
        H.info("Closing connection, current state is ".concat(this.connectionState));
        let t = e ? 4000 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = A.Z.CLOSED),
            e ||
                setImmediate(() => {
                    this._reset(!0, 1000, "Disconnect requested by user");
                });
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        k.RZ() ||
            W({
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
                H.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")),
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
                : H.verbose(
                      "Expedited heartbeat requested, but, connection state is "
                          .concat(this.connectionState, " and reconnectImmediately was not requested ")
                          .concat(null != t && "" !== t ? "reason: " + t : ""),
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        H.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect(e)
                : t && this.connectionState !== A.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            Z(this, "gatewayBackoff", void 0),
            Z(this, "handleIdentify", void 0),
            Z(this, "dispatchExceptionBackoff", new s.Z(1000, et)),
            Z(this, "dispatchSuccessTimer", 0),
            Z(this, "connectionState_", void 0),
            Z(this, "webSocket", void 0),
            Z(this, "seq", void 0),
            Z(this, "sessionId", void 0),
            Z(this, "token", void 0),
            Z(this, "initialHeartbeatTimeout", void 0),
            Z(this, "expeditedHeartbeatTimeout", void 0),
            Z(this, "heartbeatInterval", void 0),
            Z(this, "helloTimeout", void 0),
            Z(this, "heartbeater", void 0),
            Z(this, "lastHeartbeatTime", void 0),
            Z(this, "lastHeartbeatAckTime", void 0),
            Z(this, "heartbeatAck", void 0),
            Z(this, "connectionStartTime", void 0),
            Z(this, "identifyStartTime", void 0),
            Z(this, "nextReconnectIsImmediate", void 0),
            Z(this, "compressionHandler", void 0),
            Z(this, "hasConnectedOnce", void 0),
            Z(this, "isFastConnect", void 0),
            Z(this, "didForceClearGuildHashes", !1),
            Z(this, "identifyUncompressedByteSize", 0),
            Z(this, "identifyCompressedByteSize", 0),
            Z(this, "analytics", {}),
            Z(this, "identifyCount", 0),
            Z(this, "resumeUrl", null),
            Z(this, "iosGoingAwayEventCount", 0),
            Z(this, "dispatcher", void 0),
            Z(this, "heartbeatQOSState", {
                currentPayload: null,
                upcomingState: null,
            }),
            Z(this, "send", (e, t, n) => {
                O.default.isLoggingGatewayEvents && H.verboseDangerously("~>", e, t);
                let r = Y.pack({
                    op: e,
                    d: t,
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else H.warn("Attempted to send while not being in a connected state opcode: ".concat(e));
            }),
            (this.dispatcher = new x.Z(this)),
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
            (this.compressionHandler = (0, P.I)(Y)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
