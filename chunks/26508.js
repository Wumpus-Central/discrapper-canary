"use strict";
n.d(t, { Qs: () => l, T0: () => o, mY: () => u });
var r = n(84483),
    i = n(287809),
    a = n(474090),
    s = n(788868);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils",
        { isInTreatment: t } = (0, r.v9)(e);
    return t;
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils",
        { isInTreatment: t } = (0, r.uX)(e);
    return t;
}
function u(e) {
    let t = e ?? i.default.getCurrentUser();
    return (0, a.YE)(t, s.PremiumTypes.TIER_2);
}
