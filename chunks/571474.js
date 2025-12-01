n.d(t, { Z: () => h });
var r,
    i = n(442837),
    a = n(570140),
    o = n(70956),
    s = n(709054),
    l = n(314897),
    c = n(699516);
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
    f = 180 * o.Z.Millis.DAY,
    p = !1;
function _() {
    return p !== (p = c.Z.getFriendIDs().length >= d && s.default.extractTimestamp(l.default.getId()) < Date.now() - f);
}
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, l.default);
    }
    isEligible() {
        return p;
    }
}
u(m, "displayName", "PremiumPromoStore");
let h = new m(a.Z, { CONNECTION_OPEN: _ });
