n.d(t, { Z: () => f }), n(47120);
var r = n(224706),
    i = n(978085),
    o = n(147913),
    a = n(77498),
    s = n(283595),
    l = n(70956),
    c = n(358085);
function u(e, t, n) {
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
class d extends o.Z {
    handlePostConnectionOpen() {
        (0, c.isDesktop)() && (s.Z.fetched || (0, i.b8)(), r.Z.getDetectableGames(), (this.intervalId = setInterval(r.Z.getDetectableGames, a.Z.detectableGamesTtl + Math.random() * l.Z.Millis.HOUR)));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        super(...e), u(this, 'intervalId', void 0), u(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let f = new d();
