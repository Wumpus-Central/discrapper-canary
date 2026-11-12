n.d(t, { A: () => c });
var i = n(580630),
    a = n(935399),
    l = n(855986),
    r = n(73825),
    s = n(97352),
    o = n(448645),
    d = n(682901);
function c(e) {
    let t = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, o.mH)(d.pe.TIER_2),
            { plan: n, isFetchingPlan: i } = (0, l.cf)([s.A], () => ({
                plan: s.A.get(d.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: s.A.isFetchingForSKU(t),
            }));
        if (
            ((0, a.Ay)(() => {
                e || null != n || i || (0, r.ur)(t);
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
    return null == t ? null : (0, i.$g)(Math.round(t.amount / 6), t.currency);
}
n(88001);
