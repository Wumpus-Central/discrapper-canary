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
    let { subscriptionTier: t, subscriptionPlanId: n, buttonTextOverride: f, defaultTextOverride: _ } = e,
        m = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        h = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()),
        g = (0, r.e7)([l.Z], () => l.Z.getPremiumTypeOverride()),
        E = null != _ ? _ : d.intl.string(d.t["2pG5Ga"]),
        b = null != h ? (0, s.Af)(h) : null,
        y = void 0 !== g ? g : null != b ? (0, s.Rd)(b.planId) : null == m ? void 0 : m.premiumType,
        O = t === c.Si.TIER_2 && null != y && [c.PremiumTypes.TIER_0, c.PremiumTypes.TIER_1].includes(y),
        v = null != n && null != b && (null == b ? void 0 : b.planId) !== n;
    (O || v) && (E = d.intl.string(d.t.IJI7yk));
    let S = null != h && (0, s.m3)(h);
    if (!((null != h && h.status !== u.O0b.ACCOUNT_HOLD && !(0, i.Q0)(h.planId) && !O && !v && void 0 === g) || S))
        return { buttonText: null != f ? f : E };
    {
        var I, T;
        let e = p({
            ctaSubscriptionSkuId: t,
            currentPremiumType: y,
            isSwitchingDisabled: S,
            subscription: h,
        });
        return {
            buttonText: null != (T = null != (I = e.disabledButtonText) ? I : f) ? T : E,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0,
        };
    }
}
function p(e) {
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
        var p;
        n = null != (p = (0, s.nd)(o)) ? p : void 0;
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
