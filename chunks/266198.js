n.d(t, {
    Fw: () => m,
    G2: () => v,
    Q1: () => y,
    TO: () => E,
    h3: () => O,
    lB: () => p,
    w_: () => g,
});
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    o = n(594174),
    s = n(74538),
    l = n(47280),
    c = n(553094),
    u = n(219333),
    d = n(284662),
    f = n(474936),
    _ = n(304426);
let p = "https://support.discord.com/hc/articles/34679678303255",
    h = "2025-09-30",
    m = "1410030846337093672",
    g = "2025_08-nitro-drop";
var E = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.COHORT_1 = 1)] = "COHORT_1"),
        (e[(e.COHORT_2 = 2)] = "COHORT_2"),
        (e[(e.COHORT_3 = 3)] = "COHORT_3"),
        e
    );
})({});
function b(e) {
    return null == e
        ? 0
        : s.ZP.isPremiumExactly(e, f.p9.TIER_2)
          ? 3
          : s.ZP.isPremiumExactly(e, f.p9.TIER_1) || s.ZP.isPremiumExactly(e, f.p9.TIER_0)
            ? 2
            : 1;
}
function y() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, c.o)({ location: "useSeptember2025MarketingMomentEligibility" }),
        n = (0, l.ZP)({ location: "useSeptember2025MarketingMomentEligibility" }),
        { isEligible: r } = (0, d.d)(),
        i = (0, u.W)({ campaignID: _.m.NITRO_DROP });
    return {
        isEligible: t && n && r && !i,
        cohort: b(e),
    };
}
function O() {
    return Math.max(0, Math.ceil(i()(h).endOf("day").diff(i()(), "days", !0)));
}
function v() {
    return "production" !== window.GLOBAL_ENV.PROJECT_ENV || 3 >= O();
}
