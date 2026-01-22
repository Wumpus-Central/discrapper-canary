n.d(t, { A: () => m });
var r,
    i = n(311907),
    a = n(73153),
    s = n(927813),
    o = n(661191),
    l = n(961350),
    c = n(994500);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = 10,
    f = 180 * s.A.Millis.DAY,
    p = !1;
function _() {
    return p !== (p = c.A.getFriendIDs().length >= d && o.default.extractTimestamp(l.default.getId()) < Date.now() - f);
}
class h extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A, l.default);
    }
    isEligible() {
        return p;
    }
}
u(h, "displayName", "PremiumPromoStore");
let m = new h(a.h, { CONNECTION_OPEN: _ });
