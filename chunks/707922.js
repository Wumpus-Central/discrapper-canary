a.d(t, { A: () => p });
var s = a(580630),
    i = a(935399),
    n = a(17928),
    r = a(73825),
    o = a(97352),
    d = a(428262),
    c = a(202541),
    l = a(88001);
function p(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, d.mH)(c.pe.TIER_2),
            { plan: a, isFetchingPlan: s } = (0, n.cf)([o.A], () => ({
                plan: o.A.get(c.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: o.A.isFetchingForSKU(t),
            }));
        if (
            ((0, i.Ay)(() => {
                e || null != a || s || (0, r.ur)(t);
            }),
            e || null == a)
        )
            return null;
        try {
            return (0, d.JM)(c.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == t ? null : (0, s.$g)(Math.round(t.amount / l.aw), t.currency);
}
