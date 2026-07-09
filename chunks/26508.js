"use strict";
n.d(t, { CC: () => A, CZ: () => I, DK: () => E, J8: () => u });
var i = n(239266),
    r = n(968671),
    a = n(84483),
    s = n(287809),
    l = n(428262),
    o = n(440005),
    d = n(212739),
    c = n(202541);
function u(e) {
    if (null == e) return !0;
    let t = e.next_reward_date;
    return null != t && "" !== t && (0, i.A)(new Date(t));
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils";
    switch (e) {
        case o.W.NITRO: {
            let { isInTreatment: e } = (0, a.v9)(t);
            return e;
        }
        case o.W.XBOX:
            return (0, r.f0)(t);
        default:
            return !1;
    }
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, a.uX)(t),
        i = (0, r.GM)(t);
    switch (e) {
        case o.W.NITRO:
            return n;
        case o.W.XBOX:
            return i;
        default:
            return !1;
    }
}
function A() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return _(o.W.NITRO, t) && ((e = void 0 ?? s.default.getCurrentUser()), (0, l.YE)(e, c.PremiumTypes.TIER_2));
}
let h = {
    [o.W.NITRO]: A,
    [o.W.XBOX]: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
        return _(o.W.XBOX, e) && (0, d.H)(s.default.getCurrentUser());
    },
};
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    for (let t of Object.values(o.W)) if ("number" == typeof t && h[t](e)) return !0;
    return !1;
}
