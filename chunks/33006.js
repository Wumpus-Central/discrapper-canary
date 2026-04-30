"use strict";
let i, r;
n.d(t, { A: () => L }), n(323874), n(14289), n(35956), n(321073);
var s = n(143236),
    a = n(735438),
    o = n.n(a),
    l = n(228366),
    u = n(626584),
    c = n(111162),
    d = n(998218),
    _ = n(19575),
    f = n(636401),
    h = n(861621),
    p = n(313731),
    E = n(546983),
    m = n(613057),
    g = n(652215),
    A = n(264572).Buffer;
try {
    i = _.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        i = _.Ay.requireModule("erlpack");
    } catch (e) {}
}
let I = _.Ay.requireModule("discord_rpc").RPCWebSocket,
    T = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    S = new u.A("RPCServer:WSS"),
    N = [];
function y(e) {
    return "function" == typeof e ? e() : e;
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!y(r.listening)) return;
                      let e = r.address().port;
                      S.info(`Starting on ${e}`), l.h.dispatch({ type: "RPC_SERVER_READY", port: e });
                  };
    r.listen(g.xEi + (e % g.sJq), "127.0.0.1", t);
}
function v(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        s =
            null != y(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": y(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    (n = n ? JSON.stringify(n) : ""),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader("Content-Length", A.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(i, { ...r, ...s }),
        t.end(n);
}
function O(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    v(e, t, { code: r, message: i }, n);
}
class R extends p.A {
    _socket;
    constructor(e, t, n) {
        if ((super("ws", t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new f.A({ closeCode: g.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i)
            throw new f.A({ closeCode: g.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || (e.cmd !== g.e$_.OVERLAY && e.evt !== g.ZE4.OVERLAY)) &&
            S.info(`Socket Emit: ${this.id}`, (0, h.A)(e)),
            null != i && "etf" === this.encoding
                ? this._socket.send(i.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class b extends p.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if ((super("http", n, i), "json" !== i))
            throw new f.A({ closeCode: g.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
        (this._sendCallback = e), (this._closeCallback = t);
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || e.cmd !== g.e$_.OVERLAY) && S.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class D extends s.EventEmitter {
    constructor() {
        super();
        let e = 0;
        (r = I.http.createServer()).on("error", (t) => {
            S.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => C(++e), 1e3);
        }),
            r.on("request", this.handleRequest.bind(this)),
            C(e);
        const t = { instanceId: r.instanceId ?? 0, server: r };
        new I.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    handleRequest(e, t) {
        let [n, i] = y(e.url).split("?"),
            r = y(e.method);
        if ("/rpc" === n && "OPTIONS" === r) return void v(e, t, { body: "" });
        let s = "POST" === r;
        if ("/rpc" === n && ("GET" === r || s)) {
            let n = new URLSearchParams(i),
                r = s ? y(e.headers)["content-type"].split("/")[1] : "json",
                a = function () {
                    let { protocol: e, host: i } = d.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    e === location.protocol && i === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", T),
                        t.writeHead(301),
                        t.end();
                },
                o = new b(!s ? a : v.bind(null, e, t), !s ? a : O.bind(null, e, t, 400), Number(n.get("v")), r);
            s
                ? (0, E.j7)(o, y(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          e.on("data", (e) => (n += e)),
                              e.on("error", () => O(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(o, n));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return o.close(t, n);
                      })
                : ((o.authorization.scopes = [m.kw]),
                  this.handleMessage(o, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        O(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(y(e.upgradeReq).url.split("?")[1]),
            i = y(e.upgradeReq).headers.origin ?? "";
        try {
            t = new R(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        S.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => S.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                S.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    o().remove(N, (e) => e === t),
                    this.emit("disconnect", t);
            }),
            (0, E.j7)(t, i, n.get("client_id"))
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
            e.close(g.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return;
        }
        (c.default.isLoggingOverlayEvents || n.cmd !== g.e$_.OVERLAY) && S.info(`Socket Message: ${e.id}`, (0, h.A)(n)),
            this.emit("request", e, n);
    }
}
let L = new D();
