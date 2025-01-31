n.r(t), n.d(t, { default: () => g }), n(411104);
var i = n(836560),
    r = n(525654),
    a = n.n(r),
    s = n(664751),
    o = n(772848),
    l = n(544891),
    u = n(996106),
    c = n(981631);
let d = c.V6Z + c.frH - 1;
function f(e, t) {
    if (null == e || null == t) throw Error('cmd and name required');
    return ''.concat(e, ':').concat(t);
}
let _ = s.parse(location.search.slice(1)),
    p = parseInt(null != _.rpc && '' !== _.rpc ? _.rpc : c.V6Z, 10),
    h = null;
class m extends i.EventEmitter {
    get port() {
        return p;
    }
    get connected() {
        return null != h && h.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == h) {
            if (p > d) {
                (p = c.V6Z), this.emit('disconnected');
                return;
            }
            try {
                h = new WebSocket('ws://127.0.0.1:'.concat(this.port, '/?v=').concat(c.X6Q));
            } catch (e) {
                this.disconnect({ code: c.$VG.CLOSE_ABNORMAL });
                return;
            }
            null != h &&
                ((h.onmessage = (e) => {
                    let t;
                    try {
                        if ('string' == typeof e.data) t = JSON.parse(e.data);
                        else throw Error('payload data not a string');
                    } catch (e) {
                        this.emit('error', e), this.disconnect();
                        return;
                    }
                    let { cmd: n, evt: i, nonce: r, data: a } = t;
                    if (n === c.Etm.DISPATCH) {
                        if (i === c.zMe.READY) {
                            this.emit('connected');
                            return;
                        }
                        if (i === c.zMe.ERROR) {
                            this.emit('error', new u.Z({ errorCode: a.code }, a.message)), this.disconnect();
                            return;
                        }
                        this.emit(f(n, i), a);
                        return;
                    }
                    let s = null;
                    i === c.zMe.ERROR && ((s = new u.Z({ errorCode: a.code }, a.message)), (a = null)), this.emit(f(n, r), s, a);
                }),
                (h.onclose = h.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && 'code' in e && [c.$VG.CLOSE_ABNORMAL, c.$VG.INVALID_CLIENTID].includes(e.code)) {
            p++, (h = null), this.connect();
            return;
        }
        null != h && (this.emit('disconnected'), h.close(), (h = null));
    }
    subscribe(e, t, n) {
        return this.on(f(c.Etm.DISPATCH, e), n), this.request(c.Etm.SUBSCRIBE, t, e);
    }
    unsubscribe(e, t, n) {
        return this.removeListener(f(c.Etm.DISPATCH, e), n), this.request(c.Etm.UNSUBSCRIBE, t, e);
    }
    request(e, t, n) {
        return new Promise((i, r) => {
            if (!this.connected) {
                this.once('connected', () => {
                    this.removeAllListeners('disconnected'), i(this.request(e, t, n));
                }),
                    this.once('disconnected', () => {
                        this.removeAllListeners('connected'), r(Error('disconnected during request'));
                    }),
                    this.connect();
                return;
            }
            let a = (0, o.Z)(),
                s = JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: a
                });
            this.once(f(e, a), (e, t) => (null != e ? r(e) : i(t))), null == h || h.send(s);
        });
    }
    requestOnce(e, t, n) {
        return l.tn
            .post({
                url: 'http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(c.X6Q),
                body: {
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.Z)()
                },
                rejectWithError: !1
            })
            .then((e) => {
                let {
                    body: { evt: t, data: n }
                } = e;
                if (t === c.zMe.ERROR) throw new u.Z({ errorCode: n.code }, n.message);
                return n;
            });
    }
    requestRedirect(e, t, n) {
        if ('Chrome' === a().name && parseInt(a().version, 10) >= 58) return this.requestOnce(e, t, n);
        let i = encodeURIComponent(
                JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.Z)()
                })
            ),
            r = encodeURIComponent(''.concat(location.protocol, '//').concat(location.host).concat(location.pathname, '?done=true'));
        return window.open('http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(c.X6Q, '&payload=').concat(i, '&callback=').concat(r), '_self'), new Promise(() => null);
    }
}
let g = new m();
