n.d(t, {
    Fw: () => b,
    G2: () => S,
    OA: () => v,
    Q1: () => I,
    TO: () => O,
    WP: () => C,
    bL: () => A,
    h3: () => T,
    lB: () => g,
    w_: () => y,
});
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    o = n(594174),
    s = n(74538),
    l = n(538981),
    c = n(654588),
    u = n(781110),
    d = n(47280),
    f = n(553094),
    _ = n(219333),
    p = n(284662),
    h = n(474936),
    m = n(304426);
let g = "https://support.discord.com/hc/articles/34679678303255",
    E = "2025-09-30T00:00:00",
    b = "1410030846337093672",
    y = "2025_08-nitro-drop";
var O = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.COHORT_1 = 1)] = "COHORT_1"),
        (e[(e.COHORT_2 = 2)] = "COHORT_2"),
        (e[(e.COHORT_3 = 3)] = "COHORT_3"),
        e
    );
})({});
function v(e) {
    return null == e
        ? 0
        : s.ZP.isPremiumExactly(e, h.p9.TIER_2)
          ? 3
          : s.ZP.isPremiumExactly(e, h.p9.TIER_1) || s.ZP.isPremiumExactly(e, h.p9.TIER_0)
            ? 2
            : 1;
}
function I() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, f.o)({ location: "useSeptember2025MarketingMomentEligibility" }),
        n = (0, d.ZP)({ location: "useSeptember2025MarketingMomentEligibility" }),
        { isEligible: r } = (0, p.d)(),
        i = (0, _.W)({ campaignID: m.m.NITRO_DROP });
    return {
        isEligible: t && n && r && !i,
        cohort: v(e),
    };
}
function T() {
    return Math.max(0, Math.ceil(i()(E).endOf("day").diff(i()(), "days", !0)));
}
function S() {
    return "production" !== window.GLOBAL_ENV.PROJECT_ENV || 3 >= T();
}
async function A() {
    var e, t;
    let n = (0, f.k)({ location: "getSeptember2025MarketingMomentEligibility" }),
        r = (0, d.YI)({ location: "getSeptember2025MarketingMomentEligibility" }),
        i = (0, _.W)({ campaignID: m.m.NITRO_DROP });
    if (!(n && r && !i)) return !1;
    let a = c.Z.state,
        o =
            null == (e = u.X.getConfig({ location: "getSeptember2025MarketingMomentEligibility" }))
                ? void 0
                : e.enabled;
    return a.shouldRefetchCampaignEligibility && o
        ? await (0, l.f)({ campaignId: y })
        : null != (t = a.isEligibleForCampaign) && t;
}
function C() {
    return new Date(E);
}
