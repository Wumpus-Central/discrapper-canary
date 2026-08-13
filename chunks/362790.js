"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(927813),
    s = n(935208),
    l = n(280450),
    o = n(994500);
let d = 180 * a.A.Millis.DAY,
    c = !1;
class u extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(o.A, l.default);
    }
    isEligible() {
        return c;
    }
}
let _ = new u(r.h, {
    CONNECTION_OPEN: function () {
        return (
            c !==
            (c = o.A.getFriendIDs().length >= 10 && s.default.extractTimestamp(l.default.getId()) < Date.now() - d)
        );
    },
});
