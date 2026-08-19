t.d(n, { A: () => s });
var r = t(580630),
    a = t(935399),
    i = t(17928),
    u = t(73825),
    l = t(97352),
    d = t(158045),
    o = t(202541),
    c = t(88001);
function s(e) {
    let n = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, d.mH)(o.pe.TIER_2),
            { plan: t, isFetchingPlan: r } = (0, i.cf)([l.A], () => ({
                plan: l.A.get(o.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: l.A.isFetchingForSKU(n),
            }));
        if (
            ((0, a.Ay)(() => {
                e || null != t || r || (0, u.ur)(n);
            }),
            e || null == t)
        )
            return null;
        try {
            return (0, d.JM)(o.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == n ? null : (0, r.$g)(Math.round(n.amount / c.aw), n.currency);
}
