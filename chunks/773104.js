n.d(t, {
    _: function () {
        return c;
    }
});
var i = n(442837),
    s = n(78839),
    r = n(74538),
    a = n(104494),
    l = n(639119),
    o = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: u, onTier0TrialPeriod: m, onTier2TrialPeriod: g, onNonTier2Subscriber: h, onTier2Subscriber: p, onCustomCriteria: x } = e,
        f = (0, l.N)(),
        _ = (0, a.Ng)(),
        E = (0, i.e7)([s.ZP], () => s.ZP.getPremiumTypeSubscription()),
        C = r.ZP.getPremiumTypeFromSubscription(E);
    if (null != x) {
        let e = x();
        if (null != e) return e;
    }
    return null != f && o.nG[f.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != f && o.nG[f.trial_id].skus.includes(o.Si.TIER_2) ? (null != u ? u : t) : null != E && null != E.trialId && C === o.p9.TIER_0 ? (null != m ? m : t) : null != E && null != E.trialId && C === o.p9.TIER_2 ? (null != g ? g : t) : null != _ ? (null != n ? n : t) : null == C ? (null != c ? c : t) : C === o.p9.TIER_0 || C === o.p9.TIER_1 ? (null != h ? h : t) : C === o.p9.TIER_2 ? (null != p ? p : t) : t;
}
