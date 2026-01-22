let r, i;
n.d(t, { A: () => w }), n(457529), n(896048), n(747238), n(680155), n(323874), n(14289), n(35956), n(321073), n(65821);
var l = n(143236),
    a = n(735438),
    s = n.n(a),
    o = n(73153),
    c = n(626584),
    u = n(111162),
    d = n(998218),
    p = n(837921),
    f = n(636401),
    h = n(84002),
    A = n(313731),
    g = n(546983),
    m = n(613057),
    b = n(652215),
    _ = n(264572).Buffer;
function E(e, t, n) {
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
try {
    r = p.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        r = p.Ay.requireModule("erlpack");
    } catch (e) {}
}
let O = p.Ay.requireModule("discord_rpc").RPCWebSocket,
    y = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    I = new c.A("RPCServer:WSS"),
    v = [];
function S(e) {
    return "function" == typeof e ? e() : e;
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!S(i.listening)) return;
                      let e = i.address().port;
                      I.info("Starting on ".concat(e)),
                          o.h.dispatch({
                              type: "RPC_SERVER_READY",
                              port: e,
                          });
                  };
    i.listen(b.xEi + (e % b.sJq), "127.0.0.1", t);
}
function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l =
            null != S(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": S(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    (n = n ? JSON.stringify(n) : ""),
        (r = 200 === r && 0 === n.length ? 204 : r),
        t.setHeader("Content-Length", _.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(
            r,
            (function (e) {
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
                            E(e, t, n[t]);
                        });
                }
                return e;
            })({}, i, l),
        ),
        t.end(n);
}
function T(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    N(
        e,
        t,
        {
            code: i,
            message: r,
        },
        n,
    );
}
class j extends A.A {
    send(e) {
        (u.default.isLoggingOverlayEvents || (e.cmd !== b.e$_.OVERLAY && e.evt !== b.ZE4.OVERLAY)) &&
            I.info("Socket Emit: ".concat(this.id), (0, h.A)(e)),
            null != r && "etf" === this.encoding
                ? this._socket.send(r.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
    constructor(e, t, n) {
        if ((super("ws", t, n), E(this, "_socket", void 0), -1 === ["etf", "json"].indexOf(n)))
            throw new f.A({ closeCode: b.YI$.INVALID_ENCODING }, "Invalid Encoding: ".concat(n));
        if ("etf" === n && null == r)
            throw new f.A({ closeCode: b.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
}
class x extends A.A {
    send(e) {
        (u.default.isLoggingOverlayEvents || e.cmd !== b.e$_.OVERLAY) && I.info("Socket Emit: ".concat(this.id), e),
            this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
    constructor(e, t, n, r) {
        if ((super("http", n, r), E(this, "_sendCallback", void 0), E(this, "_closeCallback", void 0), "json" !== r))
            throw new f.A({ closeCode: b.YI$.INVALID_ENCODING }, "Invalid Encoding: ".concat(r));
        (this._sendCallback = e), (this._closeCallback = t);
    }
}
class P extends l.EventEmitter {
    handleRequest(e, t) {
        let [n, r] = S(e.url).split("?"),
            i = S(e.method);
        if ("/rpc" === n && "OPTIONS" === i) return void N(e, t, { body: "" });
        let l = "POST" === i;
        if ("/rpc" === n && ("GET" === i || l)) {
            let n = new URLSearchParams(r),
                i = l ? S(e.headers)["content-type"].split("/")[1] : "json",
                s = function () {
                    var e, r;
                    let { protocol: i, host: l } =
                        null != (e = d.A.toURLSafe(null != (r = n.get("callback")) ? r : "")) ? e : {};
                    i === location.protocol && l === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", y),
                        t.writeHead(301),
                        t.end();
                },
                o = new x(!l ? s : N.bind(null, e, t), !l ? s : T.bind(null, e, t, 400), Number(n.get("v")), i);
            if (l)
                (0, g.j7)(o, S(e.headers).origin, n.get("client_id"))
                    .then(() => {
                        let n = "";
                        e.on("data", (e) => (n += e)),
                            e.on("error", () => T(e, t, 500, "Internal Server Error")),
                            e.on("end", () => this.handleMessage(o, n));
                    })
                    .catch((e) => {
                        let { code: t, message: n } = e;
                        return o.close(t, n);
                    });
            else {
                var a;
                (o.authorization.scopes = [m.kw]),
                    this.handleMessage(o, decodeURIComponent(null != (a = n.get("payload")) ? a : ""));
            }
            return;
        }
        T(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        var t, n;
        let r,
            i = new URLSearchParams(S(e.upgradeReq).url.split("?")[1]),
            l = null != (t = S(e.upgradeReq).headers.origin) ? t : "";
        try {
            r = new j(e, Number(i.get("v")), null != (n = i.get("encoding")) ? n : "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        I.info("Socket Opened: ".concat(r.id)),
            e.on("error", (e) => I.error("WS Error: ".concat(e.message))),
            e.on("close", (e, t) => {
                I.info("Socket Closed: ".concat(r.id, ", code ").concat(e, ", message ").concat(t)),
                    s().remove(v, (e) => e === r),
                    this.emit("disconnect", r);
            }),
            (0, g.j7)(r, l, i.get("client_id"))
                .then(() => {
                    v.push(r), e.on("message", (e) => this.handleMessage(r, e)), this.emit("connect", r);
                })
                .catch((e) => {
                    let { code: t, message: n } = e;
                    return r.close(t, n);
                });
    }
    handleMessage(e, t) {
        let n;
        try {
            if (null != r && "etf" === e.encoding) n = r.unpack(t);
            else if ("string" == typeof t) n = JSON.parse(t);
            else throw Error();
        } catch (t) {
            e.close(b.YI$.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
            return;
        }
        (u.default.isLoggingOverlayEvents || n.cmd !== b.e$_.OVERLAY) &&
            I.info("Socket Message: ".concat(e.id), (0, h.A)(n)),
            this.emit("request", e, n);
    }
    constructor() {
        var e;
        super();
        let t = 0;
        (i = O.http.createServer()).on("error", (e) => {
            I.error("Error: ".concat(e.message)),
                ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => C(++t), 1000);
        }),
            i.on("request", this.handleRequest.bind(this)),
            C(t);
        const n = {
            instanceId: null != (e = i.instanceId) ? e : 0,
            server: i,
        };
        new O.ws.Server(n).on("connection", (e) => this.handleConnection(e));
    }
}
let w = new P();
