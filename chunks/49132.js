"use strict";
n.d(t, { CC: () => E, CZ: () => g, J8: () => f, DK: () => p });
var i = n(29583),
    r = n(618027),
    s = n(968671),
    a = n(84483),
    o = n(371446),
    l = n(287809),
    u = n(428262),
    c = n(440005),
    d = n(212739),
    _ = n(788868);
function f(e) {
    if (null == e) return !0;
    let t = e.next_reward_date;
    return (
        null != t &&
        "" !== t &&
        (function (e) {
            return (0, r.A)(1, arguments), (0, i.default)(e).getTime() < Date.now();
        })(new Date(t))
    );
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { enabled: n } = (0, o.m)({ location: t });
    switch (e) {
        case c.W.NITRO: {
            let { isInTreatment: e } = (0, a.v9)(t);
            return e && n;
        }
        case c.W.XBOX:
            return (0, s.f0)(t) && n;
        default:
            return !1;
    }
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, a.uX)(t),
        i = (0, s.GM)(t),
        { enabled: r } = (0, o.Z)({ location: t });
    switch (e) {
        case c.W.NITRO:
            return n && r;
        case c.W.XBOX:
            return i && r;
        default:
            return !1;
    }
}
function E() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return h(c.W.NITRO, t) && ((e = void 0 ?? l.default.getCurrentUser()), (0, u.YE)(e, _.PremiumTypes.TIER_2));
}
let m = {
    [c.W.NITRO]: E,
    [c.W.XBOX]: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
        return h(c.W.XBOX, e) && (0, d.H)(l.default.getCurrentUser());
    },
};
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    for (let t of Object.values(c.W)) if ("number" == typeof t && m[t](e)) return !0;
    return !1;
}
