n.d(t, {
    _: function () {
        return c;
    }
});
var i = n(442837),
    r = n(78839),
    s = n(74538),
    a = n(104494),
    l = n(639119),
    o = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: u, onTier0TrialPeriod: m, onTier2TrialPeriod: g, onNonTier2Subscriber: h, onTier2Subscriber: p, onCustomCriteria: x } = e,
        f = (0, l.N)(),
        E = (0, a.Ng)(),
        _ = (0, i.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription()),
        C = s.ZP.getPremiumTypeFromSubscription(_);
    if (null != x) {
        let e = x();
        if (null != e) return e;
    }
    return null != f && o.nG[f.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != f && o.nG[f.trial_id].skus.includes(o.Si.TIER_2) ? (null != u ? u : t) : null != _ && null != _.trialId && C === o.p9.TIER_0 ? (null != m ? m : t) : null != _ && null != _.trialId && C === o.p9.TIER_2 ? (null != g ? g : t) : null != E ? (null != n ? n : t) : null == C ? (null != c ? c : t) : C === o.p9.TIER_0 || C === o.p9.TIER_1 ? (null != h ? h : t) : C === o.p9.TIER_2 ? (null != p ? p : t) : t;
}
