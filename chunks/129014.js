n.d(t, { default: () => g }), n(65821), n(747238), n(457529);
var r = n(143236),
    i = n(481613),
    a = n.n(i),
    s = n(488428),
    o = n(835245),
    l = n(562465),
    c = n(636401),
    u = n(652215);
let d = u.xEi + u.sJq - 1;
function f(e, t) {
    if (null == e || null == t) throw Error("cmd and name required");
    return "".concat(e, ":").concat(t);
}
let p = s.parse(location.search.slice(1)),
    _ = parseInt(null != p.rpc && "" !== p.rpc ? p.rpc : u.xEi, 10),
    h = null;
class m extends r.EventEmitter {
    get port() {
        return _;
    }
    get connected() {
        return null != h && h.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == h) {
            if (_ > d) {
                (_ = u.xEi), this.emit("disconnected");
                return;
            }
            try {
                h = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(u.dL4));
            } catch (e) {
                this.disconnect({ code: u.YI$.CLOSE_ABNORMAL });
                return;
            }
            null != h &&
                ((h.onmessage = (e) => {
                    let t;
                    try {
                        if ("string" == typeof e.data) t = JSON.parse(e.data);
                        else throw Error("payload data not a string");
                    } catch (e) {
                        this.emit("error", e), this.disconnect();
                        return;
                    }
                    let { cmd: n, evt: r, nonce: i, data: a } = t;
                    if (n === u.e$_.DISPATCH) {
                        if (r === u.ZE4.READY) return void this.emit("connected");
                        if (r === u.ZE4.ERROR) {
                            this.emit("error", new c.A({ errorCode: a.code }, a.message)), this.disconnect();
                            return;
                        }
                        return void this.emit(f(n, r), a);
                    }
                    let s = null;
                    r === u.ZE4.ERROR && ((s = new c.A({ errorCode: a.code }, a.message)), (a = null)),
                        this.emit(f(n, i), s, a);
                }),
                (h.onclose = h.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && "code" in e && [u.YI$.CLOSE_ABNORMAL, u.YI$.INVALID_CLIENTID].includes(e.code)) {
            _++, (h = null), this.connect();
            return;
        }
        null != h && (this.emit("disconnected"), h.close(), (h = null));
    }
    subscribe(e, t, n) {
        return this.on(f(u.e$_.DISPATCH, e), n), this.request(u.e$_.SUBSCRIBE, t, e);
    }
    unsubscribe(e, t, n) {
        return this.removeListener(f(u.e$_.DISPATCH, e), n), this.request(u.e$_.UNSUBSCRIBE, t, e);
    }
    request(e, t, n) {
        return new Promise((r, i) => {
            if (!this.connected) {
                this.once("connected", () => {
                    this.removeAllListeners("disconnected"), r(this.request(e, t, n));
                }),
                    this.once("disconnected", () => {
                        this.removeAllListeners("connected"), i(Error("disconnected during request"));
                    }),
                    this.connect();
                return;
            }
            let a = (0, o.A)(),
                s = JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: a,
                });
            this.once(f(e, a), (e, t) => (null != e ? i(e) : r(t))), null == h || h.send(s);
        });
    }
    requestOnce(e, t, n) {
        return l.Bo.post({
            url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(u.dL4),
            body: {
                cmd: e,
                args: t,
                evt: n,
                nonce: (0, o.A)(),
            },
            rejectWithError: !1,
        }).then((e) => {
            let {
                body: { evt: t, data: n },
            } = e;
            if (t === u.ZE4.ERROR) throw new c.A({ errorCode: n.code }, n.message);
            return n;
        });
    }
    requestRedirect(e, t, n) {
        if ("Chrome" === a().name && parseInt(a().version, 10) >= 58) return this.requestOnce(e, t, n);
        let r = encodeURIComponent(
                JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.A)(),
                }),
            ),
            i = encodeURIComponent(
                "".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"),
            );
        return (
            window.open(
                "http://127.0.0.1:"
                    .concat(this.port, "/rpc?v=")
                    .concat(u.dL4, "&payload=")
                    .concat(r, "&callback=")
                    .concat(i),
                "_self",
            ),
            new Promise(() => null)
        );
    }
}
let g = new m();
