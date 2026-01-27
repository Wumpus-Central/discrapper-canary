n.d(t, {
    A: () => f,
});
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(927813),
    o = n(661191),
    c = n(961350),
    u = n(994500);
let d = 180 * s.A.Millis.DAY,
    p = !1;
class m extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(u.A, c.default);
    }
    isEligible() {
        return p;
    }
}
(r = "displayName") in m
    ? Object.defineProperty(m, r, {
          value: "PremiumPromoStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[r] = "PremiumPromoStore");
let f = new m(a.h, {
    CONNECTION_OPEN: function () {
        return (
            p !==
            (p = u.A.getFriendIDs().length >= 10 && o.default.extractTimestamp(c.default.getId()) < Date.now() - d)
        );
    },
});
