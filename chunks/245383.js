"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(832946),
    a = n(287809),
    s = n(166403),
    o = n(927578),
    l = n(683760),
    u = n(788868),
    c = n(652215),
    d = n(985018);
function _(e) {
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: _, defaultTextOverride: p } = e,
        h = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        m = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        g = (0, r.bG)([l.A], () => l.A.getPremiumTypeOverride()),
        E = p ?? d.intl.string(d.t["2pG5Ga"]),
        A = null != m ? (0, o.EL)(m) : null,
        I = void 0 !== g ? g : null != A ? (0, o.m6)(A.planId) : h?.premiumType,
        T = t === u.pe.TIER_2 && null != I && [u.PremiumTypes.TIER_0, u.PremiumTypes.TIER_1].includes(I),
        y = null != n && null != A && A?.planId !== n;
    (T || y) && (E = d.intl.string(d.t.IJI7yk));
    let S = null != m && (0, o.Nc)(m);
    if (!((null != m && m.status !== c.Dmq.ACCOUNT_HOLD && !(0, i.m1)(m.planId) && !T && !y && void 0 === g) || S))
        return { buttonText: _ ?? E };
    {
        let e = f({ ctaSubscriptionSkuId: t, currentPremiumType: I, isSwitchingDisabled: S, subscription: m });
        return {
            buttonText: e.disabledButtonText ?? _ ?? E,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
function f(e) {
    let t,
        n,
        { ctaSubscriptionSkuId: r, currentPremiumType: i, isSwitchingDisabled: a, subscription: s } = e;
    if (null != r && r !== u.pe.LEGACY && r !== u.pe.TIER_0 && r !== u.pe.TIER_1 && r !== u.pe.TIER_2)
        return { disabledButtonText: t, disabledButtonTooltipText: n };
    let l = null != r ? u.WN[(0, o.mH)(r)] : null,
        c = null != l ? u.ci[l] : null,
        _ = null != i ? u.ci[i] : null;
    return (
        a
            ? (n = (0, o.Q8)(s) ?? void 0)
            : null != _ && null != c && c < _
              ? ((t = d.intl.string(d.t["2pG5Ga"])), (n = d.intl.string(d.t.jXaaRk)))
              : null != l && null != i && l === i
                ? ((t = d.intl.string(d.t.ymSxhy)), (n = d.intl.string(d.t.jXaaRk)))
                : null == l && null != i && i === u.PremiumTypes.TIER_2 && (n = d.intl.string(d.t.jXaaRk)),
        { disabledButtonText: t, disabledButtonTooltipText: n }
    );
}
