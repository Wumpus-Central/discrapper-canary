"use strict";
n.d(t, { A: () => _ });
var i = n(311907),
    r = n(73153),
    l = n(927813),
    s = n(661191),
    a = n(961350),
    o = n(994500);
let c = 180 * l.A.Millis.DAY,
    u = !1;
class d extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(o.A, a.default);
    }
    isEligible() {
        return u;
    }
}
let _ = new d(r.h, {
    CONNECTION_OPEN: function () {
        return (
            u !==
            (u = o.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(a.default.getId()) < Date.now() - c)
        );
    },
});
