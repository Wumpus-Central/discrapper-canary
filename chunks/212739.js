"use strict";
n.d(t, { H: () => u, O: () => c });
var i = n(17928),
    r = n(441574),
    s = n(349871),
    a = n(287809),
    o = n(428262),
    l = n(788868);
function u(e) {
    if (!o.Ay.canUseMonthlyOrbs(e) || (0, o.YE)(e, l.PremiumTypes.TIER_2)) return !1;
    let t = (0, s.kQ)(e?.perks, r.bb.MONTHLY_ORBS);
    return null != t && t.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT);
}
function c() {
    return u((0, i.bG)([a.default], () => a.default.getCurrentUser()));
}
