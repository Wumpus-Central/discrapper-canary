let i, r;
n.d(t, { A: () => R }), n(323874), n(14289), n(35956), n(321073);
var a = n(143236),
    l = n(735438),
    s = n.n(l),
    o = n(73153),
    d = n(626584),
    u = n(111162),
    c = n(998218),
    A = n(837921),
    h = n(636401),
    _ = n(84002),
    E = n(313731),
    p = n(546983),
    m = n(613057),
    g = n(652215),
    I = n(264572).Buffer;
try {
    i = A.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        i = A.Ay.requireModule("erlpack");
    } catch (e) {}
}
let C = A.Ay.requireModule("discord_rpc").RPCWebSocket,
    f = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    T = new d.A("RPCServer:WSS"),
    S = [];
function N(e) {
    return "function" == typeof e ? e() : e;
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!N(r.listening)) return;
                      let e = r.address().port;
                      T.info(`Starting on ${e}`), o.h.dispatch({ type: "RPC_SERVER_READY", port: e });
                  };
    r.listen(g.xEi + (e % g.sJq), "127.0.0.1", t);
}
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a =
            null != N(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": N(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    (n = n ? JSON.stringify(n) : ""),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader("Content-Length", I.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(i, { ...r, ...a }),
        t.end(n);
}
function y(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    L(e, t, { code: r, message: i }, n);
}
class v extends E.A {
    _socket;
    constructor(e, t, n) {
        if ((super("ws", t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new h.A({ closeCode: g.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i)
            throw new h.A({ closeCode: g.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        (u.default.isLoggingOverlayEvents || (e.cmd !== g.e$_.OVERLAY && e.evt !== g.ZE4.OVERLAY)) &&
            T.info(`Socket Emit: ${this.id}`, (0, _.A)(e)),
            null != i && "etf" === this.encoding
                ? this._socket.send(i.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class b extends E.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if ((super("http", n, i), "json" !== i))
            throw new h.A({ closeCode: g.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
        (this._sendCallback = e), (this._closeCallback = t);
    }
    send(e) {
        (u.default.isLoggingOverlayEvents || e.cmd !== g.e$_.OVERLAY) && T.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class D extends a.EventEmitter {
    constructor() {
        super();
        let e = 0;
        (r = C.http.createServer()).on("error", (t) => {
            T.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => O(++e), 1e3);
        }),
            r.on("request", this.handleRequest.bind(this)),
            O(e);
        const t = { instanceId: r.instanceId ?? 0, server: r };
        new C.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    handleRequest(e, t) {
        let [n, i] = N(e.url).split("?"),
            r = N(e.method);
        if ("/rpc" === n && "OPTIONS" === r) return void L(e, t, { body: "" });
        let a = "POST" === r;
        if ("/rpc" === n && ("GET" === r || a)) {
            let n = new URLSearchParams(i),
                r = a ? N(e.headers)["content-type"].split("/")[1] : "json",
                l = function () {
                    let { protocol: e, host: i } = c.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    e === location.protocol && i === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", f),
                        t.writeHead(301),
                        t.end();
                },
                s = new b(!a ? l : L.bind(null, e, t), !a ? l : y.bind(null, e, t, 400), Number(n.get("v")), r);
            a
                ? (0, p.j7)(s, N(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          e.on("data", (e) => (n += e)),
                              e.on("error", () => y(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(s, n));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return s.close(t, n);
                      })
                : ((s.authorization.scopes = [m.kw]),
                  this.handleMessage(s, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        y(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(N(e.upgradeReq).url.split("?")[1]),
            i = N(e.upgradeReq).headers.origin ?? "";
        try {
            t = new v(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        T.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => T.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                T.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    s().remove(S, (e) => e === t),
                    this.emit("disconnect", t);
            }),
            (0, p.j7)(t, i, n.get("client_id"))
                .then(() => {
                    S.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t);
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
            e.close(g.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        (u.default.isLoggingOverlayEvents || n.cmd !== g.e$_.OVERLAY) && T.info(`Socket Message: ${e.id}`, (0, _.A)(n)),
            this.emit("request", e, n);
    }
}
let R = new D();
