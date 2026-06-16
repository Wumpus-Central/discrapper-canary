"use strict";
n.d(t, { l: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(160946),
    a = n(211159),
    o = n(253390),
    l = n(97352),
    u = n(615396),
    c = n(526151),
    d = n(788868);
function _() {
    let e = (0, a.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = (0, c.Oe)(),
        n = (0, r.bG)([l.A], () => null == e || null != l.A.get(e.planId)),
        _ = (0, s.Y)(),
        h = (0, r.bG)([l.A], () => (null != e ? (0, u.c9)(e.planId) : null)),
        f = i.useMemo(
            () => (null != e && n && _ ? (0, o.v)(e, t) : [{ planId: d.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, _, t],
        ),
        p = i.useMemo(
            () =>
                f.find((e) => {
                    let { planId: t } = e;
                    return d.pW.has(t);
                })?.planId ?? d.gD.PREMIUM_MONTH_GUILD,
            [f],
        );
    return {
        newAdditionalPlans: f,
        currentPremiumSubscriptionPlan: h,
        hasFetchedPremiumSubscriptionPlan: n,
        premiumGuildSubscriptionPlanId: p,
    };
}
