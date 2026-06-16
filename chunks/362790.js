n.d(t, { A: () => u });
var i = n(17928),
    l = n(228366),
    r = n(927813),
    s = n(935208),
    a = n(495544),
    E = n(994500);
let o = 180 * r.A.Millis.DAY,
    c = !1;
class _ extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(E.A, a.default);
    }
    isEligible() {
        return c;
    }
}
let u = new _(l.h, {
    CONNECTION_OPEN: function () {
        return (
            c !==
            (c = E.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(a.default.getId()) < Date.now() - o)
        );
    },
});
