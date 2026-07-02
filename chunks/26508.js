"use strict";
n.d(t, { CC: () => E, CZ: () => m, DK: () => f, J8: () => _ });
var i = n(239266),
    r = n(968671),
    s = n(84483),
    a = n(371446),
    o = n(287809),
    l = n(428262),
    u = n(440005),
    d = n(212739),
    c = n(202541);
function _(e) {
    if (null == e) return !0;
    let t = e.next_reward_date;
    return null != t && "" !== t && (0, i.A)(new Date(t));
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { enabled: n } = (0, a.m)({ location: t });
    switch (e) {
        case u.W.NITRO: {
            let { isInTreatment: e } = (0, s.v9)(t);
            return e && n;
        }
        case u.W.XBOX:
            return (0, r.f0)(t) && n;
        default:
            return !1;
    }
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, s.uX)(t),
        i = (0, r.GM)(t),
        { enabled: o } = (0, a.Z)({ location: t });
    switch (e) {
        case u.W.NITRO:
            return n && o;
        case u.W.XBOX:
            return i && o;
        default:
            return !1;
    }
}
function E() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return h(u.W.NITRO, t) && ((e = void 0 ?? o.default.getCurrentUser()), (0, l.YE)(e, c.PremiumTypes.TIER_2));
}
let p = {
    [u.W.NITRO]: E,
    [u.W.XBOX]: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
        return h(u.W.XBOX, e) && (0, d.H)(o.default.getCurrentUser());
    },
};
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    for (let t of Object.values(u.W)) if ("number" == typeof t && p[t](e)) return !0;
    return !1;
}
