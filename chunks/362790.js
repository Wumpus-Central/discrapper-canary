l.d(t, { A: () => E });
var n = l(17928),
    i = l(228366),
    r = l(927813),
    s = l(935208),
    a = l(495544),
    u = l(994500);
let o = 180 * r.A.Millis.DAY,
    c = !1;
class d extends n.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(u.A, a.default);
    }
    isEligible() {
        return c;
    }
}
let E = new d(i.h, {
    CONNECTION_OPEN: function () {
        return (
            c !==
            (c = u.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(a.default.getId()) < Date.now() - o)
        );
    },
});
