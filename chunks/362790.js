n.d(t, { A: () => E });
var i = n(17928),
    l = n(228366),
    r = n(927813),
    a = n(935208),
    o = n(495544),
    s = n(994500);
let u = 180 * r.A.Millis.DAY,
    d = !1;
class c extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(s.A, o.default);
    }
    isEligible() {
        return d;
    }
}
let E = new c(l.h, {
    CONNECTION_OPEN: function () {
        return (
            d !==
            (d = s.A.getFriendIDs().length >= 10 && a.default.extractTimestamp(o.default.getId()) < Date.now() - u)
        );
    },
});
