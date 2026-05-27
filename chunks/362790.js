n.d(t, { A: () => E });
var i = n(17928),
    l = n(228366),
    r = n(927813),
    s = n(935208),
    a = n(495544),
    c = n(994500);
let o = 180 * r.A.Millis.DAY,
    d = !1;
class u extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(c.A, a.default);
    }
    isEligible() {
        return d;
    }
}
let E = new u(l.h, {
    CONNECTION_OPEN: function () {
        return (
            d !==
            (d = c.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(a.default.getId()) < Date.now() - o)
        );
    },
});
