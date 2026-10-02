n.d(t, { CC: () => h, CZ: () => f, J8: () => _, DK: () => A });
var i = n(239266),
    r = n(240921);
let a = { control: 0, treatment_a: 250, treatment_b: 500, treatment_c: 250, treatment_d: 500 },
    s = (0, r.Ay)({
        name: "2025-12-nitro-s-rewards",
        kind: "user",
        defaultConfig: { treatment: "control" },
        variations: {
            0: { treatment: "control" },
            1: { treatment: "treatment_a" },
            2: { treatment: "treatment_b" },
            3: { treatment: "treatment_c" },
            4: { treatment: "treatment_d" },
        },
    });
var l = n(287809),
    o = n(158045),
    d = n(636592),
    c = n(212739),
    u = n(202541);
function _(e) {
    if (null == e) return !0;
    let t = e.next_reward_date;
    return null != t && "" !== t && (0, i.A)(new Date(t));
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils";
    switch (e) {
        case d.W.NITRO: {
            let e,
                { isInTreatment: n } = {
                    treatment: (e = s.getConfig({ location: t }).treatment ?? "control"),
                    isInTreatment: "control" !== e,
                    orbsRewardAmount: a[e],
                };
            return n;
        }
        case d.W.XBOX:
            return !0;
        default:
            return !1;
    }
}
function A(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ProgramRewardsUtils",
        { isInTreatment: i } = {
            treatment: (t = s.useConfig({ location: n }).treatment ?? "control"),
            isInTreatment: "control" !== t,
            orbsRewardAmount: a[t],
        };
    switch (e) {
        case d.W.NITRO:
            return i;
        case d.W.XBOX:
            return !0;
        default:
            return !1;
    }
}
function h() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    return E(d.W.NITRO, t) && ((e = void 0 ?? l.default.getCurrentUser()), (0, o.YE)(e, u.PremiumTypes.TIER_2));
}
let I = {
    [d.W.NITRO]: h,
    [d.W.XBOX]: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
        return E(d.W.XBOX, e) && (0, c.H)(l.default.getCurrentUser());
    },
};
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils";
    for (let t of Object.values(d.W)) if ("number" == typeof t && I[t](e)) return !0;
    return !1;
}
