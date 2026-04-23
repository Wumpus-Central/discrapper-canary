"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(832946),
    s = n(287809),
    a = n(166403),
    o = n(927578),
    l = n(683760),
    d = n(788868),
    _ = n(652215),
    u = n(985018);
function c(e) {
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: c, defaultTextOverride: E } = e,
        h = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        m = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        f = (0, i.bG)([l.A], () => l.A.getPremiumTypeOverride()),
        g = E ?? u.intl.string(u.t["2pG5Ga"]),
        p = null != m ? (0, o.EL)(m) : null,
        A = void 0 !== f ? f : null != p ? (0, o.m6)(p.planId) : h?.premiumType,
        I = t === d.pe.TIER_2 && null != A && [d.PremiumTypes.TIER_0, d.PremiumTypes.TIER_1].includes(A),
        T = null != n && null != p && p?.planId !== n;
    (I || T) && (g = u.intl.string(u.t.IJI7yk));
    let S = null != m && (0, o.Nc)(m);
    if (!((null != m && m.status !== _.Dmq.ACCOUNT_HOLD && !(0, r.m1)(m.planId) && !I && !T && void 0 === f) || S))
        return { buttonText: c ?? g };
    {
        let e = (function (e) {
            let t,
                n,
                { ctaSubscriptionSkuId: i, currentPremiumType: r, isSwitchingDisabled: s, subscription: a } = e;
            if (null != i && i !== d.pe.LEGACY && i !== d.pe.TIER_0 && i !== d.pe.TIER_1 && i !== d.pe.TIER_2)
                return { disabledButtonText: t, disabledButtonTooltipText: n };
            let l = null != i ? d.WN[(0, o.mH)(i)] : null,
                _ = null != l ? d.ci[l] : null,
                c = null != r ? d.ci[r] : null;
            return (
                s
                    ? (n = (0, o.Q8)(a) ?? void 0)
                    : null != c && null != _ && _ < c
                      ? ((t = u.intl.string(u.t["2pG5Ga"])), (n = u.intl.string(u.t.jXaaRk)))
                      : null != l && null != r && l === r
                        ? ((t = u.intl.string(u.t.ymSxhy)), (n = u.intl.string(u.t.jXaaRk)))
                        : null == l && null != r && r === d.PremiumTypes.TIER_2 && (n = u.intl.string(u.t.jXaaRk)),
                { disabledButtonText: t, disabledButtonTooltipText: n }
            );
        })({ ctaSubscriptionSkuId: t, currentPremiumType: A, isSwitchingDisabled: S, subscription: m });
        return {
            buttonText: e.disabledButtonText ?? c ?? g,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
