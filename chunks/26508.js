"use strict";
n.d(t, { DK: () => c, O7: () => u, g_: () => d, mY: () => _ });
var r = n(84483),
    i = n(151252),
    a = n(287809),
    s = n(474090),
    o = n(649032),
    l = n(788868);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils";
    if (e !== o.W.NITRO) return !1;
    {
        let { isInTreatment: e } = (0, r.v9)(t),
            { enabled: n } = (0, i.m)({ location: t });
        return e && n;
    }
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, r.uX)(t),
        { enabled: a } = (0, i.Z)({ location: t });
    return e === o.W.NITRO && n && a;
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return u(o.W.NITRO, e);
}
function _(e) {
    let t = e ?? a.default.getCurrentUser();
    return (0, s.YE)(t, l.PremiumTypes.TIER_2);
}
