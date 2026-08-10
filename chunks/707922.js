t.d(n, { A: () => s });
var r = t(580630),
    a = t(935399),
    i = t(17928),
    l = t(73825),
    _ = t(97352),
    u = t(158045),
    d = t(202541),
    o = t(88001);
function s(e) {
    let n = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, u.mH)(d.pe.TIER_2),
            { plan: t, isFetchingPlan: r } = (0, i.cf)([_.A], () => ({
                plan: _.A.get(d.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: _.A.isFetchingForSKU(n),
            }));
        if (
            ((0, a.Ay)(() => {
                e || null != t || r || (0, l.ur)(n);
            }),
            e || null == t)
        )
            return null;
        try {
            return (0, u.JM)(d.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == n ? null : (0, r.$g)(Math.round(n.amount / o.aw), n.currency);
}
