var i = n(855986),
    r = n(76573),
    a = n(948325),
    s = n(287809),
    l = n(879610),
    o = n(682901);
function d(e) {
    if (!l.Ay.canUseMonthlyOrbs(e) || (0, l.YE)(e, o.PremiumTypes.TIER_2)) return !1;
    let t = (0, a.kQ)(e?.perks, r.bb.MONTHLY_ORBS);
    return null != t && t.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT);
}
n.d(
    t,
    {},
    {
        H: d,
        O: function () {
            return d((0, i.bG)([s.default], () => s.default.getCurrentUser()));
        },
    },
);
