"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(832946),
    s = n(287809),
    a = n(166403),
    o = n(428262),
    l = n(683760),
    u = n(788868),
    c = n(652215),
    d = n(375708);
function _(e) {
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: _, defaultTextOverride: h } = e,
        f = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        p = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        E = (0, i.bG)([l.A], () => l.A.getPremiumTypeOverride()),
        m = h ?? d.intl.string(d.t["2pG5Ga"]),
        g = null != p ? (0, o.EL)(p) : null,
        A = void 0 !== E ? E : null != g ? (0, o.m6)(g.planId) : f?.premiumType,
        I = t === u.pe.TIER_2 && null != A && [u.PremiumTypes.TIER_0, u.PremiumTypes.TIER_1].includes(A),
        T = null != n && null != g && g?.planId !== n;
    (I || T) && (m = d.intl.string(d.t.IJI7yk));
    let S = null != p && (0, o.Nc)(p);
    if (!((null != p && p.status !== c.Dmq.ACCOUNT_HOLD && !(0, r.m1)(p.planId) && !I && !T && void 0 === E) || S))
        return { buttonText: _ ?? m };
    {
        let e = (function (e) {
            let t,
                n,
                { ctaSubscriptionSkuId: i, currentPremiumType: r, isSwitchingDisabled: s, subscription: a } = e;
            if (null != i && i !== u.pe.LEGACY && i !== u.pe.TIER_0 && i !== u.pe.TIER_1 && i !== u.pe.TIER_2)
                return { disabledButtonText: t, disabledButtonTooltipText: n };
            let l = null != i ? u.WN[(0, o.mH)(i)] : null,
                c = null != l ? u.ci[l] : null,
                _ = null != r ? u.ci[r] : null;
            return (
                s
                    ? (n = (0, o.Q8)(a) ?? void 0)
                    : null != _ && null != c && c < _
                      ? ((t = d.intl.string(d.t["2pG5Ga"])), (n = d.intl.string(d.t.jXaaRk)))
                      : null != l && null != r && l === r
                        ? ((t = d.intl.string(d.t.ymSxhy)), (n = d.intl.string(d.t.jXaaRk)))
                        : null == l && null != r && r === u.PremiumTypes.TIER_2 && (n = d.intl.string(d.t.jXaaRk)),
                { disabledButtonText: t, disabledButtonTooltipText: n }
            );
        })({ ctaSubscriptionSkuId: t, currentPremiumType: A, isSwitchingDisabled: S, subscription: p });
        return {
            buttonText: e.disabledButtonText ?? _ ?? m,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
