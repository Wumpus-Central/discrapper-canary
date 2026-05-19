"use strict";
n.d(t, { H: () => l, O: () => u });
var i = n(17928),
    r = n(441574),
    s = n(349871),
    a = n(287809),
    o = n(428262);
function l(e) {
    if (!o.Ay.canUseMonthlyOrbs(e)) return !1;
    let t = (0, s.kQ)(e?.perks, r.bb.MONTHLY_ORBS);
    return null != t && t.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT);
}
function u() {
    return l((0, i.bG)([a.default], () => a.default.getCurrentUser()));
}
