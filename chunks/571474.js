n.d(t, { Z: () => p });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(70956),
    c = n(709054),
    d = n(314897),
    u = n(699516);
let m = 180 * o.Z.Millis.DAY,
    _ = !1;
class h extends (a = r.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.default);
    }
    isEligible() {
        return _;
    }
}
(l = 'PremiumPromoStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = l);
let p = new h(s.Z, {
    CONNECTION_OPEN: function () {
        return _ !== (_ = u.Z.getFriendIDs().length >= 10 && c.default.extractTimestamp(d.default.getId()) < Date.now() - m);
    }
});
