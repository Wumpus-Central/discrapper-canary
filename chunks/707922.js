"use strict";
n.d(t, { A: () => u });
var i = n(580630),
    r = n(935399),
    a = n(17928),
    s = n(73825),
    l = n(97352),
    o = n(428262),
    d = n(202541),
    c = n(88001);
function u(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, o.mH)(d.pe.TIER_2),
            { plan: n, isFetchingPlan: i } = (0, a.cf)([l.A], () => ({
                plan: l.A.get(d.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: l.A.isFetchingForSKU(t),
            }));
        if (
            ((0, r.Ay)(() => {
                e || null != n || i || (0, s.ur)(t);
            }),
            e || null == n)
        )
            return null;
        try {
            return (0, o.JM)(d.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == t ? null : (0, i.$g)(Math.round(t.amount / c.aw), t.currency);
}
