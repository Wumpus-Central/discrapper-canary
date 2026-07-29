"use strict";
let i, r;
n.d(t, { A: () => M }), n(323874), n(14289), n(35956), n(321073);
var a = n(143236),
    s = n(435558),
    l = n.n(s),
    o = n(228366),
    d = n(626584),
    c = n(111162),
    u = n(998218),
    _ = n(19575),
    E = n(636401),
    A = n(861621),
    h = n(313731),
    I = n(324029),
    f = n(546983),
    p = n(613057),
    T = n(652215),
    m = n(264572).Buffer;
try {
    i = _.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        i = _.Ay.requireModule("erlpack");
    } catch (e) {}
}
let g = _.Ay.requireModule("discord_rpc").RPCWebSocket,
    S = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    N = new d.A("RPCServer:WSS"),
    C = [];
function O(e) {
    return "function" == typeof e ? e() : e;
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!O(r.listening)) return;
                      let e = r.address().port;
                      N.info(`Starting on ${e}`), o.h.dispatch({ type: "RPC_SERVER_READY", port: e });
                  };
    r.listen(T.xEi + (e % T.sJq), "127.0.0.1", t);
}
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a =
            null != O(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": O(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    (n = n ? JSON.stringify(n) : ""),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader("Content-Length", m.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(i, { ...r, ...a }),
        t.end(n);
}
function y(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    L(e, t, { code: r, message: i }, n);
}
class D extends h.A {
    _socket;
    constructor(e, t, n) {
        if ((super("ws", t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new E.A({ closeCode: T.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i)
            throw new E.A({ closeCode: T.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || (e.cmd !== T.e$_.OVERLAY && e.evt !== T.ZE4.OVERLAY)) &&
            N.info(`Socket Emit: ${this.id}`, (0, A.A)(e)),
            null != i && "etf" === this.encoding
                ? this._socket.send(i.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class v extends h.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if ((super("http", n, i), "json" !== i))
            throw new E.A({ closeCode: T.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
        (this._sendCallback = e), (this._closeCallback = t);
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || e.cmd !== T.e$_.OVERLAY) && N.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class b extends a.EventEmitter {
    constructor() {
        super();
        let e = 0;
        (r = g.http.createServer()).on("error", (t) => {
            N.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => R(++e), 1e3);
        }),
            r.on("request", this.handleRequest.bind(this)),
            R(e);
        const t = { instanceId: r.instanceId ?? 0, server: r };
        new g.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    getPort() {
        return O(r.listening) ? r.address().port : null;
    }
    handleRequest(e, t) {
        let [n, i] = O(e.url).split("?"),
            r = O(e.method);
        if ("POST" === r && (0, I.xp)(n)) return void (0, I.JX)(e, t);
        if ("/rpc" === n && "OPTIONS" === r) return void L(e, t, { body: "" });
        let a = "POST" === r;
        if ("/rpc" === n && ("GET" === r || a)) {
            let n = new URLSearchParams(i),
                r = a ? O(e.headers)["content-type"].split("/")[1] : "json",
                s = function () {
                    let { protocol: e, host: i } = u.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    e === location.protocol && i === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", S),
                        t.writeHead(301),
                        t.end();
                },
                l = new v(!a ? s : L.bind(null, e, t), !a ? s : y.bind(null, e, t, 400), Number(n.get("v")), r);
            a
                ? (0, f.j7)(l, O(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          e.on("data", (e) => (n += e)),
                              e.on("error", () => y(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(l, n));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return l.close(t, n);
                      })
                : ((l.authorization.scopes = [p.kw]),
                  this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        y(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(O(e.upgradeReq).url.split("?")[1]),
            i = O(e.upgradeReq).headers.origin ?? "";
        try {
            t = new D(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        N.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => N.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                N.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    l().remove(C, (e) => e === t),
                    this.emit("disconnect", t);
            }),
            (0, f.j7)(t, i, n.get("client_id"))
                .then(() => {
                    C.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t);
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
            e.close(T.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        (c.default.isLoggingOverlayEvents || n.cmd !== T.e$_.OVERLAY) && N.info(`Socket Message: ${e.id}`, (0, A.A)(n)),
            this.emit("request", e, n);
    }
}
let M = new b();
