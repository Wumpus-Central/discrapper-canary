n.d(t, { Z: () => c }), n(47120);
var i = n(224706),
    r = n(978085),
    a = n(147913),
    s = n(283595),
    o = n(358085);
function l(e, t, n) {
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
class u extends a.Z {
    handlePostConnectionOpen() {
        (0, o.isDesktop)() && (s.Z.fetched || (0, r.b8)(), i.Z.getDetectableGames());
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
let c = new u();
