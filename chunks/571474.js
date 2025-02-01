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
    h = !1;
class _ extends (a = r.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.default);
    }
    isEligible() {
        return h;
    }
}
(l = 'PremiumPromoStore'),
    (i = 'displayName') in _
        ? Object.defineProperty(_, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[i] = l);
let p = new _(s.Z, {
    CONNECTION_OPEN: function () {
        return h !== (h = u.Z.getFriendIDs().length >= 10 && c.default.extractTimestamp(d.default.getId()) < Date.now() - m);
    }
});
