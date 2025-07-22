(n.d(t, { Z: () => p }), n(388685));
var r = n(224706),
    i = n(978085),
    a = n(147913),
    o = n(380249),
    s = n(627050),
    l = n(77498),
    c = n(283595),
    u = n(70956),
    d = n(358085);
function _(e, t, n) {
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
class f extends a.Z {
    handlePostConnectionOpen() {
        ((0, d.isDesktop)() || (0, o.l)() || s.d.getCurrentConfig({ location: 'DetectableGamesManager.handlePostConnectionOpen' }).enabled) && (c.Z.fetched || (0, i.b8)(), r.Z.getDetectableGames(), (this.intervalId = setInterval(r.Z.getDetectableGames, l.Z.detectableGamesTtl + Math.random() * u.Z.Millis.HOUR)));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        (super(...e), _(this, 'intervalId', void 0), _(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }));
    }
}
let p = new f();
