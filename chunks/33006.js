let i, o;
(n.d(t, { default: () => D }), n(323874), n(14289), n(35956), n(321073));
var r = n(143236),
    s = n(435558),
    l = n.n(s),
    a = n(73153),
    c = n(626584),
    u = n(111162),
    d = n(998218),
    p = n(19575),
    _ = n(636401),
    h = n(861621),
    m = n(313731),
    g = n(324029),
    f = n(72611),
    A = n(546983),
    y = n(613057),
    I = n(652215),
    v = n(264572).Buffer;
try {
    i = p.Ay.requireModule("discord_erlpack");
} catch (e) {
    try {
        i = p.Ay.requireModule("erlpack");
    } catch (e) {}
}
let E = p.Ay.requireModule("discord_rpc").RPCWebSocket,
    C = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    S = new c.A("RPCServer:WSS"),
    w = [];
function O(e) {
    return "function" == typeof e ? e() : e;
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!O(o.listening)) return;
                      let e = o.address().port;
                      (S.info(`Starting on ${e}`), a.h.dispatch({ type: "RPC_SERVER_READY", port: e }));
                  };
    o.listen(I.xEi + (e % I.sJq), "127.0.0.1", t);
}
function N(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        r =
            null != O(e.headers).origin
                ? {
                      "Access-Control-Allow-Origin": O(e.headers).origin,
                      "Access-Control-Allow-Credentials": "true",
                      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                      "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  }
                : {};
    ((n = n ? JSON.stringify(n) : ""),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader("Content-Length", v.byteLength(n).toString()),
        t.setHeader("Content-Type", "application/json"),
        t.writeHead(i, { ...o, ...r }),
        t.end(n));
}
function b(e, t, n, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    N(e, t, { code: o, message: i }, n);
}
class L extends m.A {
    _socket;
    constructor(e, t, n) {
        if ((super({ type: y.z4.WEBSOCKET }, t, n), -1 === ["etf", "json"].indexOf(n)))
            throw new _.A({ closeCode: I.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i)
            throw new _.A({ closeCode: I.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        this._socket = e;
    }
    send(e) {
        ((u.default.isLoggingOverlayEvents || (e.cmd !== I.e$_.OVERLAY && e.evt !== I.ZE4.OVERLAY)) &&
            S.info(`Socket Emit: ${this.id}`, (0, h.A)(e)),
            null != i && "etf" === this.encoding
                ? this._socket.send(i.pack(e), { binary: !0 })
                : this._socket.send(JSON.stringify(e)));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
}
class R extends m.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if ((super({ type: y.z4.HTTP }, n, i), "json" !== i))
            throw new _.A({ closeCode: I.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
        ((this._sendCallback = e), (this._closeCallback = t));
    }
    send(e) {
        ((u.default.isLoggingOverlayEvents || e.cmd !== I.e$_.OVERLAY) && S.info(`Socket Emit: ${this.id}`, e),
            this._sendCallback(e));
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
}
class k extends r.EventEmitter {
    constructor() {
        super();
        let e = 0;
        ((o = E.http.createServer()).on("error", (t) => {
            (S.error(`Error: ${t.message}`),
                ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => T(++e), 1e3));
        }),
            o.on("request", this.handleRequest.bind(this)),
            T(e));
        const t = { instanceId: o.instanceId ?? 0, server: o };
        new E.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    getPort() {
        return O(o.listening) ? o.address().port : null;
    }
    handleRequest(e, t) {
        let [n, i] = O(e.url).split("?"),
            o = O(e.method);
        if ("POST" === o && (0, g.xp)(n)) return void (0, g.JX)(e, t);
        if ("POST" === o && (0, f.J9)(n)) return void (0, f.Xw)(e, t);
        if ("/rpc" === n && "OPTIONS" === o) return void N(e, t, { body: "" });
        let r = "POST" === o;
        if ("/rpc" === n && ("GET" === o || r)) {
            let n = new URLSearchParams(i),
                o = r ? O(e.headers)["content-type"].split("/")[1] : "json",
                s = function () {
                    let { protocol: e, host: i } = d.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    (e === location.protocol && i === location.host
                        ? t.setHeader("Location", n.get("callback"))
                        : t.setHeader("Location", C),
                        t.writeHead(301),
                        t.end());
                },
                l = new R(!r ? s : N.bind(null, e, t), !r ? s : b.bind(null, e, t, 400), Number(n.get("v")), o);
            r
                ? (0, A.j7)(l, O(e.headers).origin, n.get("client_id"))
                      .then(() => {
                          let n = "";
                          (e.on("data", (e) => (n += e)),
                              e.on("error", () => b(e, t, 500, "Internal Server Error")),
                              e.on("end", () => this.handleMessage(l, n)));
                      })
                      .catch((e) => {
                          let { code: t, message: n } = e;
                          return l.close(t, n);
                      })
                : ((l.authorization.scopes = new Set([y.kw])),
                  this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
            return;
        }
        b(e, t, 404, "Not Found");
    }
    handleConnection(e) {
        let t,
            n = new URLSearchParams(O(e.upgradeReq).url.split("?")[1]),
            i = O(e.upgradeReq).headers.origin ?? "";
        try {
            t = new L(e, Number(n.get("v")), n.get("encoding") ?? "json");
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        (S.info(`Socket Opened: ${t.id}`),
            e.on("error", (e) => S.error(`WS Error: ${e.message}`)),
            e.on("close", (e, n) => {
                (S.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
                    t.abortController.abort("DISCONNECTED"),
                    l().remove(w, (e) => e === t),
                    this.emit("disconnect", t));
            }),
            (0, A.j7)(t, i, n.get("client_id"))
                .then(() => {
                    t.abortController.signal.aborted ||
                        (w.push(t), e.on("message", (e) => this.handleMessage(t, e)), this.emit("connect", t));
                })
                .catch((e) => {
                    let { code: n, message: i } = e;
                    t.abortController.signal.aborted || t.close(n, i);
                }));
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
        ((u.default.isLoggingOverlayEvents || n.cmd !== I.e$_.OVERLAY) &&
            S.info(`Socket Message: ${e.id}`, (0, h.A)(n)),
            this.emit("request", e, n));
    }
}
let D = new k();
