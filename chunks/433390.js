n.d(t, { Z: () => f });
var r = n(442837),
    i = n(301766),
    a = n(594174),
    o = n(78839),
    s = n(74538),
    l = n(502087),
    c = n(474936),
    u = n(981631),
    d = n(388032);
function f(e) {
    let { subscriptionTier: t, buttonTextOverride: n, defaultTextOverride: f } = e,
        p = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        h = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()),
        m = (0, r.e7)([l.Z], () => l.Z.getPremiumTypeOverride()),
        g = null != f ? f : d.intl.string(d.t["2pG5GR"]),
        E = null != h ? (0, s.Af)(h) : null,
        b = void 0 !== m ? m : null != E ? (0, s.Rd)(E.planId) : null == p ? void 0 : p.premiumType,
        y = t === c.Si.TIER_2 && null != b && [c.PremiumTypes.TIER_0, c.PremiumTypes.TIER_1].includes(b);
    y && (g = d.intl.string(d.t.IJI7ys));
    let O = null != h && (0, s.m3)(h);
    if (!((null != h && h.status !== u.O0b.ACCOUNT_HOLD && !(0, i.Q0)(h.planId) && !y && void 0 === m) || O))
        return { buttonText: null != n ? n : g };
    {
        var v, I;
        let e = _({
            ctaSubscriptionSkuId: t,
            currentPremiumType: b,
            isSwitchingDisabled: O,
            subscription: h,
        });
        return {
            buttonText: null != (I = null != (v = e.disabledButtonText) ? v : n) ? I : g,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
function _(e) {
    let t,
        n,
        { ctaSubscriptionSkuId: r, currentPremiumType: i, isSwitchingDisabled: a, subscription: o } = e;
    if (null != r && r !== c.Si.LEGACY && r !== c.Si.TIER_0 && r !== c.Si.TIER_1 && r !== c.Si.TIER_2)
        return {
            disabledButtonText: t,
            disabledButtonTooltipText: n,
        };
    let l = null != r ? c.y7[(0, s.Wz)(r)] : null,
        u = null != l ? c.$e[l] : null,
        f = null != i ? c.$e[i] : null;
    if (a) {
        var _;
        n = null != (_ = (0, s.nd)(o)) ? _ : void 0;
    } else
        null != f && null != u && u < f
            ? ((t = d.intl.string(d.t["2pG5GR"])), (n = d.intl.string(d.t.jXaaRk)))
            : null != l && null != i && l === i
              ? ((t = d.intl.string(d.t.ymSxh4)), (n = d.intl.string(d.t.jXaaRk)))
              : null == l && null != i && i === c.PremiumTypes.TIER_2 && (n = d.intl.string(d.t.jXaaRk));
    return {
        disabledButtonText: t,
        disabledButtonTooltipText: n,
    };
}
