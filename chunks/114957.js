n.d(t, { Z: () => u }), n(47120);
var r = n(224706),
    i = n(978085),
    o = n(147913),
    a = n(283595),
    s = n(358085);
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
class c extends o.Z {
    handlePostConnectionOpen() {
        (0, s.isDesktop)() && (a.Z.fetched || (0, i.b8)(), r.Z.getDetectableGames());
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
let u = new c();
