let o, i;
(n.d(t, { default: () => R }), n(323874), n(14289), n(35956), n(321073));
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
    g = n(546983),
    f = n(613057),
    I = n(652215),
    E = n(264572).Buffer;
try {
    o = h.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        o = h.Ay.requireModule("erlpack");
    } catch (e) {}
}
let C = h.Ay.requireModule("discord_rpc").RPCWebSocket,
    v = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    y = new c.A("RPCServer:WSS"),
    O = [];
function S(e) {
    return "function" == typeof e ? e() : e;
}
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!S(i.listening)) return;
                      let e = i.address().port;
                      (y.info(`Starting on ${e}`), a.h.dispatch({ type: "RPC_SERVER_READY", port: e }));
                  };
    i.listen(I.xEi + (e % I.sJq), "127.0.0.1", t);
}
function N(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        r =
            null != S(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": S(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    ((n = n ? JSON.stringify(n) : ""),
        (o = 200 === o && 0 === n.length ? 204 : o),
        t.setHeader("Content-Length", E.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(o, { ...i, ...r }),
        t.end(n));
}
function k(e, t, n, o) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    N(e, t, { code: i, message: o }, n);
}
class T extends A.A {
    _socket;
    constructor(e, t, n) {
        if ((super({ type: f.z4.WEBSOCKET }, t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new p.A({ closeCode: I.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == o)
            throw new p.A({ closeCode: I.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        ((u.default.isLoggingOverlayEvents || (e.cmd !== I.e$_.OVERLAY && e.evt !== I.ZE4.OVERLAY)) &&
            y.info(`Socket Emit: ${this.id}`, (0, _.A)(e)),
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
        if ((super({ type: f.z4.HTTP }, n, o), "json" !== o))
            throw new p.A({ closeCode: I.YI$.INVALID_ENCODING }, `Invalid Encoding: ${o}`);
        ((this._sendCallback = e), (this._closeCallback = t));
    }
    send(e) {
        ((u.default.isLoggingOverlayEvents || e.cmd !== I.e$_.OVERLAY) && y.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e));
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class L extends r.EventEmitter {
    constructor() {
        super();
        let e = 0;
        ((i = C.http.createServer()).on("error", (t) => {
            (y.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => w(++e), 1e3));
        }),
            i.on("request", this.handleRequest.bind(this)),
            w(e));
        const t = { instanceId: i.instanceId ?? 0, server: i };
        new C.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    getPort() {
        return S(i.listening) ? i.address().port : null;
    }
    handleRequest(e, t) {
        let [n, o] = S(e.url).split("?"),
            i = S(e.method);
        if ("POST" === i && (0, m.xp)(n)) return void (0, m.JX)(e, t);
        if ("/rpc" === n && "OPTIONS" === i) return void N(e, t, { body: "" });
        let r = "POST" === i;
        if ("/rpc" === n && ("GET" === i || r)) {
            let n = new URLSearchParams(o),
                i = r ? S(e.headers)["content-type"].split("/")[1] : "json",
                s = function () {
                    let { protocol: e, host: o } = d.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    (e === location.protocol && o === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", v),
                        t.writeHead(301),
                        t.end());
                },
                l = new b(!r ? s : N.bind(null, e, t), !r ? s : k.bind(null, e, t, 400), Number(n.get("v")), i);
            r
                ? (0, g.j7)(l, S(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          (e.on("data", (e) => (n += e)),
                              e.on("error", () => k(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(l, n)));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return l.close(t, n);
                      })
                : ((l.authorization.scopes = [f.kw]),
                  this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        k(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(S(e.upgradeReq).url.split("?")[1]),
            o = S(e.upgradeReq).headers.origin ?? "";
        try {
            t = new T(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        (y.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => y.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                (y.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    t.abortController.abort("DISCONNECTED"),
                    l().remove(O, (e) => e === t),
                    this.emit("disconnect", t));
            }),
            (0, g.j7)(t, o, n.get("client_id"))
                .then(() => {
                    t.abortController.signal.aborted ||
                        (O.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t));
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
            e.close(I.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        ((u.default.isLoggingOverlayEvents || n.cmd !== I.e$_.OVERLAY) &&
            y.info(`Socket Message: ${e.id}`, (0, _.A)(n)),
            this.emit("request", e, n));
    }
}
let R = new L();
