n.d(t, {
    Fw: () => _,
    G2: () => E,
    Q1: () => m,
    TO: () => p,
    h3: () => g,
    lB: () => d,
});
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    o = n(594174),
    s = n(74538),
    l = n(47280),
    c = n(553094),
    u = n(474936);
let d = "https://support.discord.com/hc/articles/34679678303255",
    f = "2025-09-30",
    _ = "1410030846337093672";
var p = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.COHORT_1 = 1)] = "COHORT_1"),
        (e[(e.COHORT_2 = 2)] = "COHORT_2"),
        (e[(e.COHORT_3 = 3)] = "COHORT_3"),
        e
    );
})({});
function h(e) {
    return null == e
        ? 0
        : s.ZP.isPremiumExactly(e, u.p9.TIER_2)
          ? 3
          : s.ZP.isPremiumExactly(e, u.p9.TIER_1) || s.ZP.isPremiumExactly(e, u.p9.TIER_0)
            ? 2
            : 1;
}
function m() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, c.o)({ location: "useSeptember2025MarketingMomentEligibility" }),
        n = (0, l.ZP)({ location: "useSeptember2025MarketingMomentEligibility" }),
        r = !0,
        i = !1;
    return {
        isEligible: t && n && r && !i,
        cohort: h(e),
    };
}
function g() {
    return Math.max(0, Math.ceil(i()(f).endOf("day").diff(i()(), "days", !0)));
}
function E() {
    return "production" !== window.GLOBAL_ENV.PROJECT_ENV || 3 >= g();
}
