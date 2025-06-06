n.d(t, { Z: () => h });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(70956),
    c = n(709054),
    u = n(314897),
    d = n(699516);
let p = 180 * s.Z.Millis.DAY,
    m = !1;
class f extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.default);
    }
    isEligible() {
        return m;
    }
}
(i = 'PremiumPromoStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = i);
let h = new f(o.Z, {
    CONNECTION_OPEN: function () {
        return m !== (m = d.Z.getFriendIDs().length >= 10 && c.default.extractTimestamp(u.default.getId()) < Date.now() - p);
    }
});
