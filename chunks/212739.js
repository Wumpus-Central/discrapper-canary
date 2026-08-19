"use strict";
n.d(t, { H: () => d, O: () => c });
var i = n(17928),
    r = n(441574),
    a = n(349871),
    s = n(287809),
    l = n(158045),
    o = n(202541);
function d(e) {
    if (!l.Ay.canUseMonthlyOrbs(e) || (0, l.YE)(e, o.PremiumTypes.TIER_2)) return !1;
    let t = (0, a.kQ)(e?.perks, r.bb.MONTHLY_ORBS);
    return null != t && t.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT);
}
function c() {
    return d((0, i.bG)([s.default], () => s.default.getCurrentUser()));
}
