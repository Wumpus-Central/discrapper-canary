n.d(t, { Z: () => m });
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 10,
    f = 180 * o.Z.Millis.DAY,
    _ = !1;
function p() {
    return _ !== (_ = c.Z.getFriendIDs().length >= d && s.default.extractTimestamp(l.default.getId()) < Date.now() - f);
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, l.default);
    }
    isEligible() {
        return _;
    }
}
u(h, 'displayName', 'PremiumPromoStore');
let m = new h(a.Z, { CONNECTION_OPEN: p });
