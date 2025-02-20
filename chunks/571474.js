n.d(t, { Z: () => h });
var r,
    i,
    a,
    o = n(442837),
    l = n(570140),
    s = n(70956),
    c = n(709054),
    d = n(314897),
    u = n(699516);
let p = 180 * s.Z.Millis.DAY,
    m = !1;
class f extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.default);
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
let h = new f(l.Z, {
    CONNECTION_OPEN: function () {
        return m !== (m = u.Z.getFriendIDs().length >= 10 && c.default.extractTimestamp(d.default.getId()) < Date.now() - p);
    }
});
