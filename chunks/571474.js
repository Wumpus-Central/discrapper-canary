n.d(t, { Z: () => f });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(70956),
    s = n(709054),
    c = n(314897),
    u = n(699516);
let d = 180 * o.Z.Millis.DAY,
    p = !1;
class m extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.default);
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
let f = new m(a.Z, {
    CONNECTION_OPEN: function () {
        return (
            p !==
            (p = u.Z.getFriendIDs().length >= 10 && s.default.extractTimestamp(c.default.getId()) < Date.now() - d)
        );
    },
});
