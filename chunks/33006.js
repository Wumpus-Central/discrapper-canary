let i, r;
n.d(t, { A: () => R }), n(323874), n(14289), n(35956), n(321073);
var a = n(143236),
    l = n(735438),
    s = n.n(l),
    o = n(228366),
    d = n(626584),
    u = n(111162),
    c = n(998218),
    _ = n(19575),
    A = n(636401),
    h = n(861621),
    E = n(313731),
    p = n(546983),
    m = n(613057),
    I = n(652215),
    g = n(264572).Buffer;
try {
    i = _.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        i = _.Ay.requireModule("erlpack");
    } catch (e) {}
}
let C = _.Ay.requireModule("discord_rpc").RPCWebSocket,
    T = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    f = new d.A("RPCServer:WSS"),
    N = [];
function S(e) {
    return "function" == typeof e ? e() : e;
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!S(r.listening)) return;
                      let e = r.address().port;
                      f.info(`Starting on ${e}`), o.h.dispatch({ type: "RPC_SERVER_READY", port: e });
                  };
    r.listen(I.xEi + (e % I.sJq), "127.0.0.1", t);
}
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a =
            null != S(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": S(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    (n = n ? JSON.stringify(n) : ""),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader("Content-Length", g.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(i, { ...r, ...a }),
        t.end(n);
}
function y(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    L(e, t, { code: r, message: i }, n);
}
class b extends E.A {
    _socket;
    constructor(e, t, n) {
        if ((super("ws", t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new A.A({ closeCode: I.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i)
            throw new A.A({ closeCode: I.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        (u.default.isLoggingOverlayEvents || (e.cmd !== I.e$_.OVERLAY && e.evt !== I.ZE4.OVERLAY)) &&
            f.info(`Socket Emit: ${this.id}`, (0, h.A)(e)),
            null != i && "etf" === this.encoding
                ? this._socket.send(i.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class v extends E.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if ((super("http", n, i), "json" !== i))
            throw new A.A({ closeCode: I.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
        (this._sendCallback = e), (this._closeCallback = t);
    }
    send(e) {
        (u.default.isLoggingOverlayEvents || e.cmd !== I.e$_.OVERLAY) && f.info(`Socket Emit: ${this.id}`, e),
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
            f.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => O(++e), 1e3);
        }),
            r.on("request", this.handleRequest.bind(this)),
            O(e);
        const t = { instanceId: r.instanceId ?? 0, server: r };
        new C.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    handleRequest(e, t) {
        let [n, i] = S(e.url).split("?"),
            r = S(e.method);
        if ("/rpc" === n && "OPTIONS" === r) return void L(e, t, { body: "" });
        let a = "POST" === r;
        if ("/rpc" === n && ("GET" === r || a)) {
            let n = new URLSearchParams(i),
                r = a ? S(e.headers)["content-type"].split("/")[1] : "json",
                l = function () {
                    let { protocol: e, host: i } = c.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    e === location.protocol && i === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", T),
                        t.writeHead(301),
                        t.end();
                },
                s = new v(!a ? l : L.bind(null, e, t), !a ? l : y.bind(null, e, t, 400), Number(n.get("v")), r);
            a
                ? (0, p.j7)(s, S(e.headers).origin, n.get("client_id"))
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
            n = new URLSearchParams(S(e.upgradeReq).url.split("?")[1]),
            i = S(e.upgradeReq).headers.origin ?? "";
        try {
            t = new b(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        f.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => f.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                f.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    s().remove(N, (e) => e === t),
                    this.emit("disconnect", t);
            }),
            (0, p.j7)(t, i, n.get("client_id"))
                .then(() => {
                    N.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t);
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
            e.close(I.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        (u.default.isLoggingOverlayEvents || n.cmd !== I.e$_.OVERLAY) && f.info(`Socket Message: ${e.id}`, (0, h.A)(n)),
            this.emit("request", e, n);
    }
}
let R = new D();
