"use strict";
n.d(t, { CC: () => m, CZ: () => A, J8: () => h, DK: () => E });
var i = n(29583),
    r = n(618027),
    s = n(968671),
    a = n(84483),
    o = n(371446),
    l = n(287809),
    u = n(428262),
    c = n(636592);
n(17928);
var d = n(441574),
    _ = n(349871),
    f = n(788868);
function h(e) {
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
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { enabled: n } = (0, o.m)({ location: t });
    switch (e) {
        case c.W.NITRO: {
            let { isInTreatment: e } = (0, a.v9)(t);
            return e && n;
        }
        case c.W.XBOX:
            return (0, s.getIsCrepeEnabled)(t) && n;
        default:
            return !1;
    }
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: n } = (0, a.uX)(t),
        i = (0, s.useIsCrepeEnabled)(t),
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
function m() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return p(c.W.NITRO, t) && ((e = void 0 ?? l.default.getCurrentUser()), (0, u.YE)(e, f.PremiumTypes.TIER_2));
}
let g = {
    [c.W.NITRO]: m,
    [c.W.XBOX]: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
        return (
            p(c.W.XBOX, e) &&
            (function (e) {
                if (!u.Ay.canUseMonthlyOrbs(e)) return !1;
                let t = (0, _.kQ)(e?.perks, d.bb.MONTHLY_ORBS);
                return null != t && t.includes(d.g$.SOURCE_THIRDPARTY_CROISSANT);
            })(l.default.getCurrentUser())
        );
    },
};
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    for (let t of Object.values(c.W)) if ("number" == typeof t && g[t](e)) return !0;
    return !1;
}
