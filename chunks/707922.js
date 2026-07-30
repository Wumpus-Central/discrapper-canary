t.d(r, { A: () => D });
var n = t(580630),
    _ = t(935399),
    a = t(17928),
    i = t(73825),
    l = t(97352),
    u = t(428262),
    o = t(202541),
    R = t(88001);
function D(e) {
    let r = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = (0, u.mH)(o.pe.TIER_2),
            { plan: t, isFetchingPlan: n } = (0, a.cf)([l.A], () => ({
                plan: l.A.get(o.gD.PREMIUM_GROUP_MONTH),
                isFetchingPlan: l.A.isFetchingForSKU(r),
            }));
        if (
            ((0, _.Ay)(() => {
                e || null != t || n || (0, i.ur)(r);
            }),
            e || null == t)
        )
            return null;
        try {
            return (0, u.JM)(o.gD.PREMIUM_GROUP_MONTH, !1, !1, void 0, !1);
        } catch {
            return null;
        }
    })(e);
    return null == r ? null : (0, n.$g)(Math.round(r.amount / R.aw), r.currency);
}
