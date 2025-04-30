n.d(t, { Z: () => _ }), n(388685);
var r = n(224706),
    i = n(978085),
    o = n(147913),
    a = n(380249),
    s = n(77498),
    l = n(283595),
    c = n(70956),
    u = n(358085);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class f extends o.Z {
    handlePostConnectionOpen() {
        ((0, u.isDesktop)() || (0, a.l)()) && (l.Z.fetched || (0, i.b8)(), r.Z.getDetectableGames(), (this.intervalId = setInterval(r.Z.getDetectableGames, s.Z.detectableGamesTtl + Math.random() * c.Z.Millis.HOUR)));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        super(...e), d(this, 'intervalId', void 0), d(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let _ = new f();
