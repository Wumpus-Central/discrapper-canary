n.d(t, { A: () => d });
var i = n(17928),
    l = n(228366),
    r = n(927813),
    s = n(935208),
    a = n(280450),
    o = n(994500);
let c = 180 * r.A.Millis.DAY,
    E = !1;
class u extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(o.A, a.default);
    }
    isEligible() {
        return E;
    }
}
let d = new u(l.h, {
    CONNECTION_OPEN: function () {
        return (
            E !==
            (E = o.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(a.default.getId()) < Date.now() - c)
        );
    },
});
