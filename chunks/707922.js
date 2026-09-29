t.d(n, { A: () => c });
var r = t(580630),
    i = t(935399),
    u = t(17928),
    a = t(73825),
    d = t(97352),
    l = t(158045),
    o = t(202541),
    s = t(88001);
function c(e) {
    let n = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, l.mH)(o.pe.TIER_2),
            { plan: t, isFetchingPlan: r } = (0, u.cf)([d.A], () => ({
                plan: d.A.get(o.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: d.A.isFetchingForSKU(n),
            }));
        if (
            ((0, i.Ay)(() => {
                e || null != t || r || (0, a.ur)(n);
            }),
            e || null == t)
        )
            return null;
        try {
            return (0, l.JM)(o.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == n ? null : (0, r.$g)(Math.round(n.amount / s.aw), n.currency);
}
