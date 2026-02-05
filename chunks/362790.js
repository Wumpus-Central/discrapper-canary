n.d(t, { A: () => m });
var i = n(311907),
    l = n(73153),
    a = n(927813),
    r = n(661191),
    s = n(961350),
    o = n(994500);
let d = 180 * a.A.Millis.DAY,
    c = !1;
class u extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(o.A, s.default);
    }
    isEligible() {
        return c;
    }
}
let m = new u(l.h, {
    CONNECTION_OPEN: function () {
        return (
            c !==
            (c = o.A.getFriendIDs().length >= 10 && r.default.extractTimestamp(s.default.getId()) < Date.now() - d)
        );
    },
});
