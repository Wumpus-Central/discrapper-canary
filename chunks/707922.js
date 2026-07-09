i.d(t, { A: () => u });
var r = i(580630),
    n = i(935399),
    s = i(17928),
    a = i(73825),
    l = i(97352),
    o = i(428262),
    d = i(202541),
    c = i(88001);
function u(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, o.mH)(d.pe.TIER_2),
            { plan: i, isFetchingPlan: r } = (0, s.cf)([l.A], () => ({
                plan: l.A.get(d.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: l.A.isFetchingForSKU(t),
            }));
        if (
            ((0, n.Ay)(() => {
                e || null != i || r || (0, a.ur)(t);
            }),
            e || null == i)
        )
            return null;
        try {
            return (0, o.JM)(d.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == t ? null : (0, r.$g)(Math.round(t.amount / c.aw), t.currency);
}
