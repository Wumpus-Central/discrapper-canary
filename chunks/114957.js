var i = r(47120);
var a = r(224706),
    o = r(978085),
    s = r(147913),
    l = r(283595),
    u = r(358085);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class d extends s.Z {
    handlePostConnectionOpen() {
        (0, u.isDesktop)() && (!l.Z.fetched && (0, o.b8)(), a.Z.getDetectableGames());
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
n.Z = new d();
