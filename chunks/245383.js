n.d(t, { A: () => _ });
var i = n(17928),
    r = n(832946),
    a = n(287809),
    s = n(166403),
    l = n(158045),
    o = n(683760),
    d = n(202541),
    c = n(652215),
    u = n(375708);
function _(e) {
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: _, defaultTextOverride: E } = e,
        A = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        h = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        I = (0, i.bG)([o.A], () => o.A.getPremiumTypeOverride()),
        f = E ?? u.intl.string(u.t["2pG5Ga"]),
        p = null != h ? (0, l.EL)(h) : null,
        T = void 0 !== I ? I : null != p ? (0, l.m6)(p.planId) : A?.premiumType,
        m = t === d.pe.TIER_2 && null != T && [d.PremiumTypes.TIER_0, d.PremiumTypes.TIER_1].includes(T),
        g = null != n && null != p && p?.planId !== n;
    (m || g) && (f = u.intl.string(u.t.IJI7yk));
    let S = null != h && (0, l.Nc)(h);
    if (!((null != h && h.status !== c.Dmq.ACCOUNT_HOLD && !(0, r.m1)(h.planId) && !m && !g && void 0 === I) || S))
        return { buttonText: _ ?? f };
    {
        let e = (function (e) {
            let t,
                n,
                { ctaSubscriptionSkuId: i, currentPremiumType: r, isSwitchingDisabled: a, subscription: s } = e;
            if (null != i && i !== d.pe.LEGACY && i !== d.pe.TIER_0 && i !== d.pe.TIER_1 && i !== d.pe.TIER_2)
                return { disabledButtonText: t, disabledButtonTooltipText: n };
            let o = null != i ? d.WN[(0, l.mH)(i)] : null,
                c = null != o ? d.ci[o] : null,
                _ = null != r ? d.ci[r] : null;
            return (
                a
                    ? (n = (0, l.Q8)(s) ?? void 0)
                    : null != _ && null != c && c < _
                      ? ((t = u.intl.string(u.t["2pG5Ga"])), (n = u.intl.string(u.t.jXaaRk)))
                      : null != o && null != r && o === r
                        ? ((t = u.intl.string(u.t.ymSxhy)), (n = u.intl.string(u.t.jXaaRk)))
                        : null == o && null != r && r === d.PremiumTypes.TIER_2 && (n = u.intl.string(u.t.jXaaRk)),
                { disabledButtonText: t, disabledButtonTooltipText: n }
            );
        })({ ctaSubscriptionSkuId: t, currentPremiumType: T, isSwitchingDisabled: S, subscription: h });
        return {
            buttonText: e.disabledButtonText ?? _ ?? f,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
