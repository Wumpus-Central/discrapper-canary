n.d(t, { Z: () => p });
var r = n(442837),
    i = n(975298),
    o = n(301766),
    a = n(594174),
    s = n(78839),
    l = n(74538),
    c = n(502087),
    u = n(404380),
    d = n(474936),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { subscriptionTier: t, buttonTextOverride: n, defaultTextOverride: p } = e,
        m = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        g = (0, r.e7)([s.ZP], () => s.ZP.getPremiumTypeSubscription()),
        { fractionalState: E } = (0, i.Z)({ forceFetch: !1 }),
        b = (0, r.e7)([c.Z], () => c.Z.getPremiumTypeOverride()),
        y = null != p ? p : _.intl.string(_.t['2pG5GR']),
        O = null != g ? (0, l.Af)(g) : null,
        v = void 0 !== b ? b : null != O ? (0, l.Rd)(O.planId) : null == m ? void 0 : m.premiumType,
        I = t === d.Si.TIER_2 && null != v && [d.p9.TIER_0, d.p9.TIER_1].includes(v);
    I && (y = _.intl.string(_.t.IJI7ys));
    let S = (null != g && (0, l.m3)(g)) || (null != g && (0, u.o)('PremiumSubscribeButton', m, E));
    if (!((null != g && g.status !== f.O0b.ACCOUNT_HOLD && !(0, o.Q0)(g.planId) && !I && void 0 === b) || S)) return { buttonText: null != n ? n : y };
    {
        var T, A;
        let e = h({
            ctaSubscriptionSkuId: t,
            currentPremiumType: v,
            isSwitchingDisabled: S,
            subscription: g
        });
        return {
            buttonText: null != (A = null != (T = e.disabledButtonText) ? T : n) ? A : y,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0
        };
    }
}
function h(e) {
    let t,
        n,
        { ctaSubscriptionSkuId: r, currentPremiumType: i, isSwitchingDisabled: o, subscription: a } = e;
    if (null != r && r !== d.Si.LEGACY && r !== d.Si.TIER_0 && r !== d.Si.TIER_1 && r !== d.Si.TIER_2)
        return {
            disabledButtonText: t,
            disabledButtonTooltipText: n
        };
    let s = null != r ? d.y7[(0, l.Wz)(r)] : null,
        c = null != s ? d.$e[s] : null,
        u = null != i ? d.$e[i] : null;
    if (o) {
        var f;
        n = null != (f = (0, l.nd)(a)) ? f : void 0;
    } else null != u && null != c && c < u ? ((t = _.intl.string(_.t['2pG5GR'])), (n = _.intl.string(_.t.jXaaRk))) : null != s && null != i && s === i ? ((t = _.intl.string(_.t.ymSxh4)), (n = _.intl.string(_.t.jXaaRk))) : null == s && null != i && i === d.p9.TIER_2 && (n = _.intl.string(_.t.jXaaRk));
    return {
        disabledButtonText: t,
        disabledButtonTooltipText: n
    };
}
