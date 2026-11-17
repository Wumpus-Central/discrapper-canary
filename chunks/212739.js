var i = n(855986),
    r = n(76573),
    a = n(948325),
    s = n(287809),
    l = n(448645),
    o = n(682901);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!l.Ay.canUseMonthlyOrbs(e) || (t && (0, l.YE)(e, o.PremiumTypes.TIER_2))) return !1;
    let n = (0, a.kQ)(e?.perks, r.bb.MONTHLY_ORBS);
    return null != n && n.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT);
}
n.d(
    t,
    {},
    {
        H: d,
        O: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return d(
                (0, i.bG)([s.default], () => s.default.getCurrentUser()),
                e,
            );
        },
    },
);
