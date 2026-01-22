n.d(t, {
    A: () => f,
});
var r = n(311907),
    i = n(832946),
    a = n(287809),
    s = n(166403),
    o = n(927578),
    l = n(683760),
    c = n(788868),
    u = n(652215),
    d = n(985018);

function f(e) {
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: f, defaultTextOverride: _ } = e,
        h = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        m = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        g = (0, r.bG)([l.A], () => l.A.getPremiumTypeOverride()),
        E = null != _ ? _ : d.intl.string(d.t["2pG5Ga"]),
        b = null != m ? (0, o.EL)(m) : null,
        y = void 0 !== g ? g : null != b ? (0, o.m6)(b.planId) : null == h ? void 0 : h.premiumType,
        O = t === c.pe.TIER_2 && null != y && [c.PremiumTypes.TIER_0, c.PremiumTypes.TIER_1].includes(y),
        A = null != n && null != b && (null == b ? void 0 : b.planId) !== n;
    (O || A) && (E = d.intl.string(d.t.IJI7yk));
    let v = null != m && (0, o.Nc)(m);
    if (!((null != m && m.status !== u.Dmq.ACCOUNT_HOLD && !(0, i.m1)(m.planId) && !O && !A && void 0 === g) || v))
        return {
            buttonText: null != f ? f : E,
        };
    {
        var S, I;
        let e = p({
            ctaSubscriptionSkuId: t,
            currentPremiumType: y,
            isSwitchingDisabled: v,
            subscription: m,
        });
        return {
            buttonText: null != (S = null != (I = e.disabledButtonText) ? I : f) ? S : E,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}

function p(e) {
    let t,
        n,
        { ctaSubscriptionSkuId: r, currentPremiumType: i, isSwitchingDisabled: a, subscription: s } = e;
    if (null != r && r !== c.pe.LEGACY && r !== c.pe.TIER_0 && r !== c.pe.TIER_1 && r !== c.pe.TIER_2)
        return {
            disabledButtonText: t,
            disabledButtonTooltipText: n,
        };
    let l = null != r ? c.WN[(0, o.mH)(r)] : null,
        u = null != l ? c.ci[l] : null,
        f = null != i ? c.ci[i] : null;
    if (a) {
        var p;
        n = null != (p = (0, o.Q8)(s)) ? p : void 0;
    } else
        null != f && null != u && u < f
            ? ((t = d.intl.string(d.t["2pG5Ga"])), (n = d.intl.string(d.t.jXaaRk)))
            : null != l && null != i && l === i
              ? ((t = d.intl.string(d.t.ymSxhy)), (n = d.intl.string(d.t.jXaaRk)))
              : null == l && null != i && i === c.PremiumTypes.TIER_2 && (n = d.intl.string(d.t.jXaaRk));
    return {
        disabledButtonText: t,
        disabledButtonTooltipText: n,
    };
}
