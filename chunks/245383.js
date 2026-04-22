"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(832946),
    s = n(287809),
    a = n(166403),
    o = n(927578),
    l = n(683760),
    u = n(788868),
    d = n(652215),
    c = n(985018);
function _(e) {
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: _, defaultTextOverride: f } = e,
        E = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        h = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        p = (0, r.bG)([l.A], () => l.A.getPremiumTypeOverride()),
        m = f ?? c.intl.string(c.t["2pG5Ga"]),
        g = null != h ? (0, o.EL)(h) : null,
        A = void 0 !== p ? p : null != g ? (0, o.m6)(g.planId) : E?.premiumType,
        I = t === u.pe.TIER_2 && null != A && [u.PremiumTypes.TIER_0, u.PremiumTypes.TIER_1].includes(A),
        T = null != n && null != g && g?.planId !== n;
    (I || T) && (m = c.intl.string(c.t.IJI7yk));
    let S = null != h && (0, o.Nc)(h);
    if (!((null != h && h.status !== d.Dmq.ACCOUNT_HOLD && !(0, i.m1)(h.planId) && !I && !T && void 0 === p) || S))
        return { buttonText: _ ?? m };
    {
        let e = (function (e) {
            let t,
                n,
                { ctaSubscriptionSkuId: r, currentPremiumType: i, isSwitchingDisabled: s, subscription: a } = e;
            if (null != r && r !== u.pe.LEGACY && r !== u.pe.TIER_0 && r !== u.pe.TIER_1 && r !== u.pe.TIER_2)
                return { disabledButtonText: t, disabledButtonTooltipText: n };
            let l = null != r ? u.WN[(0, o.mH)(r)] : null,
                d = null != l ? u.ci[l] : null,
                _ = null != i ? u.ci[i] : null;
            return (
                s
                    ? (n = (0, o.Q8)(a) ?? void 0)
                    : null != _ && null != d && d < _
                      ? ((t = c.intl.string(c.t["2pG5Ga"])), (n = c.intl.string(c.t.jXaaRk)))
                      : null != l && null != i && l === i
                        ? ((t = c.intl.string(c.t.ymSxhy)), (n = c.intl.string(c.t.jXaaRk)))
                        : null == l && null != i && i === u.PremiumTypes.TIER_2 && (n = c.intl.string(c.t.jXaaRk)),
                { disabledButtonText: t, disabledButtonTooltipText: n }
            );
        })({ ctaSubscriptionSkuId: t, currentPremiumType: A, isSwitchingDisabled: S, subscription: h });
        return {
            buttonText: e.disabledButtonText ?? _ ?? m,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
