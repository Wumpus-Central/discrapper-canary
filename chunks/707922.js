r.d(n, { A: () => s });
var t = r(580630),
    i = r(935399),
    u = r(17928),
    a = r(73825),
    d = r(97352),
    l = r(158045),
    o = r(202541),
    c = r(88001);
function s(e) {
    let n = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, l.mH)(o.pe.TIER_2),
            { plan: r, isFetchingPlan: t } = (0, u.cf)([d.A], () => ({
                plan: d.A.get(o.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: d.A.isFetchingForSKU(n),
            }));
        if (
            ((0, i.Ay)(() => {
                e || null != r || t || (0, a.ur)(n);
            }),
            e || null == r)
        )
            return null;
        try {
            return (0, l.JM)(o.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == n ? null : (0, t.$g)(Math.round(n.amount / c.aw), n.currency);
}
