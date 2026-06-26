"use strict";
n.d(t, { A: () => d });
var i = n(580630),
    r = n(935399),
    s = n(17928),
    a = n(73825),
    o = n(97352),
    l = n(428262),
    u = n(788868),
    c = n(88001);
function d(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, l.mH)(u.pe.TIER_2),
            { plan: n, isFetchingPlan: i } = (0, s.cf)([o.A], () => ({
                plan: o.A.get(u.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: o.A.isFetchingForSKU(t),
            }));
        if (
            ((0, r.Ay)(() => {
                e || null != n || i || (0, a.ur)(t);
            }),
            e || null == n)
        )
            return null;
        try {
            return (0, l.JM)(u.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == t ? null : (0, i.$g)(Math.round(t.amount / c.aw), t.currency);
}
