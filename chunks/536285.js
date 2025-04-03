n.r(t), n.d(t, { default: () => g }), n(411104), n(301563), n(26686);
var r = n(836560),
    i = n(525654),
    o = n.n(i),
    a = n(664751),
    s = n(772848),
    l = n(544891),
    c = n(996106),
    u = n(981631);
let d = u.V6Z + u.frH - 1;
function f(e, t) {
    if (null == e || null == t) throw Error('cmd and name required');
    return ''.concat(e, ':').concat(t);
}
let _ = a.parse(location.search.slice(1)),
    p = parseInt(null != _.rpc && '' !== _.rpc ? _.rpc : u.V6Z, 10),
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
                (p = u.V6Z), this.emit('disconnected');
                return;
            }
            try {
                h = new WebSocket('ws://127.0.0.1:'.concat(this.port, '/?v=').concat(u.X6Q));
            } catch (e) {
                this.disconnect({ code: u.$VG.CLOSE_ABNORMAL });
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
                    let { cmd: n, evt: r, nonce: i, data: o } = t;
                    if (n === u.Etm.DISPATCH) {
                        if (r === u.zMe.READY) return void this.emit('connected');
                        if (r === u.zMe.ERROR) {
                            this.emit('error', new c.Z({ errorCode: o.code }, o.message)), this.disconnect();
                            return;
                        }
                        return void this.emit(f(n, r), o);
                    }
                    let a = null;
                    r === u.zMe.ERROR && ((a = new c.Z({ errorCode: o.code }, o.message)), (o = null)), this.emit(f(n, i), a, o);
                }),
                (h.onclose = h.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && 'code' in e && [u.$VG.CLOSE_ABNORMAL, u.$VG.INVALID_CLIENTID].includes(e.code)) {
            p++, (h = null), this.connect();
            return;
        }
        null != h && (this.emit('disconnected'), h.close(), (h = null));
    }
    subscribe(e, t, n) {
        return this.on(f(u.Etm.DISPATCH, e), n), this.request(u.Etm.SUBSCRIBE, t, e);
    }
    unsubscribe(e, t, n) {
        return this.removeListener(f(u.Etm.DISPATCH, e), n), this.request(u.Etm.UNSUBSCRIBE, t, e);
    }
    request(e, t, n) {
        return new Promise((r, i) => {
            if (!this.connected) {
                this.once('connected', () => {
                    this.removeAllListeners('disconnected'), r(this.request(e, t, n));
                }),
                    this.once('disconnected', () => {
                        this.removeAllListeners('connected'), i(Error('disconnected during request'));
                    }),
                    this.connect();
                return;
            }
            let o = (0, s.Z)(),
                a = JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: o
                });
            this.once(f(e, o), (e, t) => (null != e ? i(e) : r(t))), null == h || h.send(a);
        });
    }
    requestOnce(e, t, n) {
        return l.tn
            .post({
                url: 'http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(u.X6Q),
                body: {
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, s.Z)()
                },
                rejectWithError: !1
            })
            .then((e) => {
                let {
                    body: { evt: t, data: n }
                } = e;
                if (t === u.zMe.ERROR) throw new c.Z({ errorCode: n.code }, n.message);
                return n;
            });
    }
    requestRedirect(e, t, n) {
        if ('Chrome' === o().name && parseInt(o().version, 10) >= 58) return this.requestOnce(e, t, n);
        let r = encodeURIComponent(
                JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, s.Z)()
                })
            ),
            i = encodeURIComponent(''.concat(location.protocol, '//').concat(location.host).concat(location.pathname, '?done=true'));
        return window.open('http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(u.X6Q, '&payload=').concat(r, '&callback=').concat(i), '_self'), new Promise(() => null);
    }
}
let g = new m();
