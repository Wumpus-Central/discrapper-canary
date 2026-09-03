n.d(t, { default: () => f });
var i = n(143236),
    r = n(481613),
    a = n.n(r),
    s = n(488428),
    l = n(132500),
    o = n(636537),
    d = n(636401),
    c = n(652215);
let u = c.xEi + c.sJq - 1;
function _(e, t) {
    if (null == e || null == t) throw Error("cmd and name required");
    return `${e}:${t}`;
}
let E = s.parse(location.search.slice(1)),
    A = parseInt(null != E.rpc && "" !== E.rpc ? E.rpc : c.xEi, 10),
    h = null;
class I extends i.EventEmitter {
    get port() {
        return A;
    }
    get connected() {
        return null != h && h.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == h) {
            if (A > u) {
                (A = c.xEi), this.emit("disconnected");
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
                    let { cmd: n, evt: i, nonce: r, data: a } = t;
                    if (n === c.e$_.DISPATCH) {
                        if (i === c.ZE4.READY) return void this.emit("connected");
                        if (i === c.ZE4.ERROR) {
                            this.emit("error", new d.A({ errorCode: a.code }, a.message)), this.disconnect();
                            return;
                        }
                        return void this.emit(_(n, i), a);
                    }
                    let s = null;
                    i === c.ZE4.ERROR && ((s = new d.A({ errorCode: a.code }, a.message)), (a = null)),
                        this.emit(_(n, r), s, a);
                }),
                (h.onclose = h.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && "code" in e && [c.YI$.CLOSE_ABNORMAL, c.YI$.INVALID_CLIENTID].includes(e.code)) {
            A++, (h = null), this.connect();
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
        return new Promise((i, r) => {
            if (!this.connected) {
                this.once("connected", () => {
                    this.removeAllListeners("disconnected"), i(this.request(e, t, n));
                }),
                    this.once("disconnected", () => {
                        this.removeAllListeners("connected"), r(Error("disconnected during request"));
                    }),
                    this.connect();
                return;
            }
            let a = (0, l.A)(),
                s = JSON.stringify({ cmd: e, args: t, evt: n, nonce: a });
            this.once(_(e, a), (e, t) => (null != e ? r(e) : i(t))), h?.send(s);
        });
    }
    requestOnce(e, t, n) {
        return o.Bo.post({
            url: `http://127.0.0.1:${this.port}/rpc?v=${c.dL4}`,
            body: { cmd: e, args: t, evt: n, nonce: (0, l.A)() },
            rejectWithError: !1,
        }).then((e) => {
            let {
                body: { evt: t, data: n },
            } = e;
            if (t === c.ZE4.ERROR) throw new d.A({ errorCode: n.code }, n.message);
            return n;
        });
    }
    requestRedirect(e, t, n) {
        if ("Chrome" === a().name && parseInt(a().version, 10) >= 58) return this.requestOnce(e, t, n);
        let i = encodeURIComponent(JSON.stringify({ cmd: e, args: t, evt: n, nonce: (0, l.A)() })),
            r = encodeURIComponent(`${location.protocol}//${location.host}${location.pathname}?done=true`);
        return (
            window.open(`http://127.0.0.1:${this.port}/rpc?v=${c.dL4}&payload=${i}&callback=${r}`, "_self"),
            new Promise(() => null)
        );
    }
}
let f = new I();
