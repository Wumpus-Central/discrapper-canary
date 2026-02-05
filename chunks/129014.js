"use strict";
n.d(t, { default: () => g });
var r = n(143236),
    i = n(481613),
    a = n.n(i),
    s = n(488428),
    o = n(835245),
    l = n(562465),
    u = n(636401),
    c = n(652215);
let d = c.xEi + c.sJq - 1;
function _(e, t) {
    if (null == e || null == t) throw Error("cmd and name required");
    return `${e}:${t}`;
}
let f = s.parse(location.search.slice(1)),
    p = parseInt(null != f.rpc && "" !== f.rpc ? f.rpc : c.xEi, 10),
    h = null;
class m extends r.EventEmitter {
    get port() {
        return p;
    }
    get connected() {
        return null != h && h.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == h) {
            if (p > d) {
                (p = c.xEi), this.emit("disconnected");
                return;
            }
            try {
                h = new WebSocket(`ws://127.0.0.1:${this.port}/?v=${c.dL4}`);
            } catch (e) {
                this.disconnect({ code: c.YI$.CLOSE_ABNORMAL });
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
                    if (n === c.e$_.DISPATCH) {
                        if (r === c.ZE4.READY) return void this.emit("connected");
                        if (r === c.ZE4.ERROR) {
                            this.emit("error", new u.A({ errorCode: a.code }, a.message)), this.disconnect();
                            return;
                        }
                        return void this.emit(_(n, r), a);
                    }
                    let s = null;
                    r === c.ZE4.ERROR && ((s = new u.A({ errorCode: a.code }, a.message)), (a = null)),
                        this.emit(_(n, i), s, a);
                }),
                (h.onclose = h.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && "code" in e && [c.YI$.CLOSE_ABNORMAL, c.YI$.INVALID_CLIENTID].includes(e.code)) {
            p++, (h = null), this.connect();
            return;
        }
        null != h && (this.emit("disconnected"), h.close(), (h = null));
    }
    subscribe(e, t, n) {
        return this.on(_(c.e$_.DISPATCH, e), n), this.request(c.e$_.SUBSCRIBE, t, e);
    }
    unsubscribe(e, t, n) {
        return this.removeListener(_(c.e$_.DISPATCH, e), n), this.request(c.e$_.UNSUBSCRIBE, t, e);
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
                s = JSON.stringify({ cmd: e, args: t, evt: n, nonce: a });
            this.once(_(e, a), (e, t) => (null != e ? i(e) : r(t))), h?.send(s);
        });
    }
    requestOnce(e, t, n) {
        return l.Bo.post({
            url: `http://127.0.0.1:${this.port}/rpc?v=${c.dL4}`,
            body: { cmd: e, args: t, evt: n, nonce: (0, o.A)() },
            rejectWithError: !1,
        }).then((e) => {
            let {
                body: { evt: t, data: n },
            } = e;
            if (t === c.ZE4.ERROR) throw new u.A({ errorCode: n.code }, n.message);
            return n;
        });
    }
    requestRedirect(e, t, n) {
        if ("Chrome" === a().name && parseInt(a().version, 10) >= 58) return this.requestOnce(e, t, n);
        let r = encodeURIComponent(JSON.stringify({ cmd: e, args: t, evt: n, nonce: (0, o.A)() })),
            i = encodeURIComponent(`${location.protocol}//${location.host}${location.pathname}?done=true`);
        return (
            window.open(`http://127.0.0.1:${this.port}/rpc?v=${c.dL4}&payload=${r}&callback=${i}`, "_self"),
            new Promise(() => null)
        );
    }
}
let g = new m();
