"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(927813),
    a = n(935208),
    o = n(495544),
    l = n(994500);
let u = 180 * s.A.Millis.DAY,
    c = !1;
class d extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(l.A, o.default);
    }
    isEligible() {
        return c;
    }
}
let _ = new d(r.h, {
    CONNECTION_OPEN: function () {
        return (
            c !==
            (c = l.A.getFriendIDs().length >= 10 && a.default.extractTimestamp(o.default.getId()) < Date.now() - u)
        );
    },
});
