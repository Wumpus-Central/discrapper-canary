"use strict";
n.d(t, { DK: () => u, g_: () => d, mY: () => c });
var r = n(84483),
    i = n(270051),
    s = n(287809),
    a = n(474090),
    o = n(649032),
    l = n(788868);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, r.uX)(t),
        { enabled: s } = (0, i.Z)({ location: t });
    return e === o.W.NITRO && n && s;
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils";
        if (e !== o.W.NITRO) return !1;
        {
            let { isInTreatment: e } = (0, r.v9)(t),
                { enabled: n } = (0, i.m)({ location: t });
            return e && n;
        }
    })(o.W.NITRO, e);
}
function c(e) {
    let t = e ?? s.default.getCurrentUser();
    return (0, a.YE)(t, l.PremiumTypes.TIER_2);
}
