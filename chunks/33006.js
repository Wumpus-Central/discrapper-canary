let i, a;
n.d(t, { A: () => P }), n(323874), n(14289), n(35956), n(321073);
var r = n(143236),
    s = n(735438),
    l = n.n(s),
    o = n(228366),
    d = n(626584),
    c = n(111162),
    _ = n(998218),
    E = n(19575),
    u = n(636401),
    A = n(861621),
    I = n(313731),
    T = n(546983),
    h = n(613057),
    S = n(652215),
    N = n(264572).Buffer;
try {
    i = E.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        i = E.Ay.requireModule("erlpack");
    } catch (e) {}
}
let f = E.Ay.requireModule("discord_rpc").RPCWebSocket,
    p = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    m = new d.A("RPCServer:WSS"),
    O = [];
function C(e) {
    return "function" == typeof e ? e() : e;
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!C(a.listening)) return;
                      let e = a.address().port;
                      m.info(`Starting on ${e}`), o.h.dispatch({ type: "RPC_SERVER_READY", port: e });
                  };
    a.listen(S.xEi + (e % S.sJq), "127.0.0.1", t);
}
function g(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        r =
            null != C(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": C(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    (n = n ? JSON.stringify(n) : ""),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader("Content-Length", N.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(i, { ...a, ...r }),
        t.end(n);
}
function L(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    g(e, t, { code: a, message: i }, n);
}
class D extends I.A {
    _socket;
    constructor(e, t, n) {
        if ((super("ws", t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new u.A({ closeCode: S.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i)
            throw new u.A({ closeCode: S.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || (e.cmd !== S.e$_.OVERLAY && e.evt !== S.ZE4.OVERLAY)) &&
            m.info(`Socket Emit: ${this.id}`, (0, A.A)(e)),
            null != i && "etf" === this.encoding
                ? this._socket.send(i.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class b extends I.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if ((super("http", n, i), "json" !== i))
            throw new u.A({ closeCode: S.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
        (this._sendCallback = e), (this._closeCallback = t);
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || e.cmd !== S.e$_.OVERLAY) && m.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class M extends r.EventEmitter {
    constructor() {
        super();
        let e = 0;
        (a = f.http.createServer()).on("error", (t) => {
            m.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => R(++e), 1e3);
        }),
            a.on("request", this.handleRequest.bind(this)),
            R(e);
        const t = { instanceId: a.instanceId ?? 0, server: a };
        new f.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    handleRequest(e, t) {
        let [n, i] = C(e.url).split("?"),
            a = C(e.method);
        if ("/rpc" === n && "OPTIONS" === a) return void g(e, t, { body: "" });
        let r = "POST" === a;
        if ("/rpc" === n && ("GET" === a || r)) {
            let n = new URLSearchParams(i),
                a = r ? C(e.headers)["content-type"].split("/")[1] : "json",
                s = function () {
                    let { protocol: e, host: i } = _.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    e === location.protocol && i === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", p),
                        t.writeHead(301),
                        t.end();
                },
                l = new b(!r ? s : g.bind(null, e, t), !r ? s : L.bind(null, e, t, 400), Number(n.get("v")), a);
            r
                ? (0, T.j7)(l, C(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          e.on("data", (e) => (n += e)),
                              e.on("error", () => L(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(l, n));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return l.close(t, n);
                      })
                : ((l.authorization.scopes = [h.kw]),
                  this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        L(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(C(e.upgradeReq).url.split("?")[1]),
            i = C(e.upgradeReq).headers.origin ?? "";
        try {
            t = new D(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        m.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => m.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                m.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    l().remove(O, (e) => e === t),
                    this.emit("disconnect", t);
            }),
            (0, T.j7)(t, i, n.get("client_id"))
                .then(() => {
                    O.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t);
                })
                .catch((e) => {
                    let { code: n, message: i } = e;
                    return t.close(n, i);
                });
    }
    handleMessage(e, t) {
        let n;
        try {
            if (null != i && "etf" === e.encoding) n = i.unpack(t);
            else if ("string" == typeof t) n = JSON.parse(t);
            else throw Error();
        } catch (t) {
            e.close(S.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        (c.default.isLoggingOverlayEvents || n.cmd !== S.e$_.OVERLAY) && m.info(`Socket Message: ${e.id}`, (0, A.A)(n)),
            this.emit("request", e, n);
    }
}
let P = new M();
