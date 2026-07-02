n.d(t, { A: () => _ });
var i = n(17928),
    l = n(228366),
    r = n(927813),
    s = n(935208),
    a = n(495544),
    o = n(994500);
let E = 180 * r.A.Millis.DAY,
    c = !1;
class u extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(o.A, a.default);
    }
    isEligible() {
        return c;
    }
}
let _ = new u(l.h, {
    CONNECTION_OPEN: function () {
        return (
            c !==
            (c = o.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(a.default.getId()) < Date.now() - E)
        );
    },
});
