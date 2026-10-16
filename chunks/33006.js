let o, r;
(n.d(t, { default: () => L }), n(323874), n(14289), n(35956), n(321073));
var s = n(143236),
    i = n(435558),
    l = n.n(i),
    c = n(73153),
    a = n(626584),
    d = n(111162),
    u = n(998218),
    h = n(19575),
    p = n(636401),
    g = n(861621),
    A = n(313731),
    E = n(324029),
    f = n(72611),
    C = n(546983),
    I = n(613057),
    S = n(652215),
    O = n(264572).Buffer;
try {
    o = h.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        o = h.Ay.requireModule("erlpack");
    } catch (e) {}
}
let _ = h.Ay.requireModule("discord_rpc").RPCWebSocket,
    k = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    y = new a.A("RPCServer:WSS"),
    w = [];
function m(e) {
    return "function" == typeof e ? e() : e;
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!m(r.listening)) return;
                      let e = r.address().port;
                      (y.info(`Starting on ${e}`), c.h.dispatch({ type: "RPC_SERVER_READY", port: e }));
                  };
    r.listen(S.xEi + (e % S.sJq), "127.0.0.1", t);
}
function v(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        s =
            null != m(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": m(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    ((n = n ? JSON.stringify(n) : ""),
        (o = 200 === o && 0 === n.length ? 204 : o),
        t.setHeader("Content-Length", O.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(o, { ...r, ...s }),
        t.end(n));
}
function N(e, t, n, o) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    v(e, t, { code: r, message: o }, n);
}
class R extends A.A {
    _socket;
    constructor(e, t, n) {
        if ((super({ type: I.z4.WEBSOCKET }, t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new p.A({ closeCode: S.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == o)
            throw new p.A({ closeCode: S.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        ((d.default.isLoggingOverlayEvents || (e.cmd !== S.e$_.OVERLAY && e.evt !== S.ZE4.OVERLAY)) &&
            y.info(`Socket Emit: ${this.id}`, (0, g.A)(e)),
            null != o && "etf" === this.encoding
                ? this._socket.send(o.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e)));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class b extends A.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, o) {
        if ((super({ type: I.z4.HTTP }, n, o), "json" !== o))
            throw new p.A({ closeCode: S.YI$.INVALID_ENCODING }, `Invalid Encoding: ${o}`);
        ((this._sendCallback = e), (this._closeCallback = t));
    }
    send(e) {
        ((d.default.isLoggingOverlayEvents || e.cmd !== S.e$_.OVERLAY) && y.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e));
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class P extends s.EventEmitter {
    constructor() {
        super();
        let e = 0;
        ((r = _.http.createServer()).on("error", (t) => {
            (y.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => T(++e), 1e3));
        }),
            r.on("request", this.handleRequest.bind(this)),
            T(e));
        const t = { instanceId: r.instanceId ?? 0, server: r };
        new _.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    getPort() {
        return m(r.listening) ? r.address().port : null;
    }
    handleRequest(e, t) {
        let [n, o] = m(e.url).split("?"),
            r = m(e.method);
        if ("POST" === r && (0, E.xp)(n)) return void (0, E.JX)(e, t);
        if ("POST" === r && (0, f.J9)(n)) return void (0, f.Xw)(e, t);
        if ("/rpc" === n && "OPTIONS" === r) return void v(e, t, { body: "" });
        let s = "POST" === r;
        if ("/rpc" === n && ("GET" === r || s)) {
            let n = new URLSearchParams(o),
                r = s ? m(e.headers)["content-type"].split("/")[1] : "json",
                i = function () {
                    let { protocol: e, host: o } = u.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    (e === location.protocol && o === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", k),
                        t.writeHead(301),
                        t.end());
                },
                l = new b(!s ? i : v.bind(null, e, t), !s ? i : N.bind(null, e, t, 400), Number(n.get("v")), r);
            s
                ? (0, C.j7)(l, m(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          (e.on("data", (e) => (n += e)),
                              e.on("error", () => N(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(l, n)));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return l.close(t, n);
                      })
                : ((l.authorization.scopes = new Set([I.kw])),
                  this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        N(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(m(e.upgradeReq).url.split("?")[1]),
            o = m(e.upgradeReq).headers.origin ?? "";
        try {
            t = new R(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        (y.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => y.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                (y.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    t.abortController.abort("DISCONNECTED"),
                    l().remove(w, (e) => e === t),
                    this.emit("disconnect", t));
            }),
            (0, C.j7)(t, o, n.get("client_id"))
                .then(() => {
                    t.abortController.signal.aborted ||
                        (w.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t));
                })
                .catch((e) => {
                    let { code: n, message: o } = e;
                    t.abortController.signal.aborted || t.close(n, o);
                }));
    }
    handleMessage(e, t) {
        let n;
        try {
            if (null != o && "etf" === e.encoding) n = o.unpack(t);
            else if ("string" == typeof t) n = JSON.parse(t);
            else throw Error();
        } catch (t) {
            e.close(S.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        ((d.default.isLoggingOverlayEvents || n.cmd !== S.e$_.OVERLAY) &&
            y.info(`Socket Message: ${e.id}`, (0, g.A)(n)),
            this.emit("request", e, n));
    }
}
let L = new P();
