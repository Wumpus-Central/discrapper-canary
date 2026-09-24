let o, i;
(n.d(t, { default: () => D }), n(323874), n(14289), n(35956), n(321073));
var r = n(143236),
    s = n(435558),
    l = n.n(s),
    a = n(228366),
    c = n(626584),
    u = n(111162),
    d = n(998218),
    h = n(19575),
    p = n(636401),
    _ = n(861621),
    A = n(313731),
    m = n(324029),
    g = n(72611),
    f = n(546983),
    I = n(613057),
    E = n(652215),
    v = n(264572).Buffer;
try {
    o = h.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        o = h.Ay.requireModule("erlpack");
    } catch (e) {}
}
let C = h.Ay.requireModule("discord_rpc").RPCWebSocket,
    y = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    O = new c.A("RPCServer:WSS"),
    S = [];
function w(e) {
    return "function" == typeof e ? e() : e;
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!w(i.listening)) return;
                      let e = i.address().port;
                      (O.info(`Starting on ${e}`), a.h.dispatch({ type: "RPC_SERVER_READY", port: e }));
                  };
    i.listen(E.xEi + (e % E.sJq), "127.0.0.1", t);
}
function k(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        r =
            null != w(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": w(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    ((n = n ? JSON.stringify(n) : ""),
        (o = 200 === o && 0 === n.length ? 204 : o),
        t.setHeader("Content-Length", v.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(o, { ...i, ...r }),
        t.end(n));
}
function T(e, t, n, o) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    k(e, t, { code: i, message: o }, n);
}
class b extends A.A {
    _socket;
    constructor(e, t, n) {
        if ((super({ type: I.z4.WEBSOCKET }, t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new p.A({ closeCode: E.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == o)
            throw new p.A({ closeCode: E.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        ((u.default.isLoggingOverlayEvents || (e.cmd !== E.e$_.OVERLAY && e.evt !== E.ZE4.OVERLAY)) &&
            O.info(`Socket Emit: ${this.id}`, (0, _.A)(e)),
            null != o && "etf" === this.encoding
                ? this._socket.send(o.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e)));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class L extends A.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, o) {
        if ((super({ type: I.z4.HTTP }, n, o), "json" !== o))
            throw new p.A({ closeCode: E.YI$.INVALID_ENCODING }, `Invalid Encoding: ${o}`);
        ((this._sendCallback = e), (this._closeCallback = t));
    }
    send(e) {
        ((u.default.isLoggingOverlayEvents || e.cmd !== E.e$_.OVERLAY) && O.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e));
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class R extends r.EventEmitter {
    constructor() {
        super();
        let e = 0;
        ((i = C.http.createServer()).on("error", (t) => {
            (O.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => N(++e), 1e3));
        }),
            i.on("request", this.handleRequest.bind(this)),
            N(e));
        const t = { instanceId: i.instanceId ?? 0, server: i };
        new C.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    getPort() {
        return w(i.listening) ? i.address().port : null;
    }
    handleRequest(e, t) {
        let [n, o] = w(e.url).split("?"),
            i = w(e.method);
        if ("POST" === i && (0, m.xp)(n)) return void (0, m.JX)(e, t);
        if ("POST" === i && (0, g.J9)(n)) return void (0, g.Xw)(e, t);
        if ("/rpc" === n && "OPTIONS" === i) return void k(e, t, { body: "" });
        let r = "POST" === i;
        if ("/rpc" === n && ("GET" === i || r)) {
            let n = new URLSearchParams(o),
                i = r ? w(e.headers)["content-type"].split("/")[1] : "json",
                s = function () {
                    let { protocol: e, host: o } = d.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    (e === location.protocol && o === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", y),
                        t.writeHead(301),
                        t.end());
                },
                l = new L(!r ? s : k.bind(null, e, t), !r ? s : T.bind(null, e, t, 400), Number(n.get("v")), i);
            r
                ? (0, f.j7)(l, w(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          (e.on("data", (e) => (n += e)),
                              e.on("error", () => T(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(l, n)));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return l.close(t, n);
                      })
                : ((l.authorization.scopes = [I.kw]),
                  this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        T(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(w(e.upgradeReq).url.split("?")[1]),
            o = w(e.upgradeReq).headers.origin ?? "";
        try {
            t = new b(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        (O.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => O.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                (O.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    t.abortController.abort("DISCONNECTED"),
                    l().remove(S, (e) => e === t),
                    this.emit("disconnect", t));
            }),
            (0, f.j7)(t, o, n.get("client_id"))
                .then(() => {
                    t.abortController.signal.aborted ||
                        (S.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t));
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
            e.close(E.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        ((u.default.isLoggingOverlayEvents || n.cmd !== E.e$_.OVERLAY) &&
            O.info(`Socket Message: ${e.id}`, (0, _.A)(n)),
            this.emit("request", e, n));
    }
}
let D = new R();
