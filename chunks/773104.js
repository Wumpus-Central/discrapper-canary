n.d(t, { _: () => c });
var i = n(442837),
    r = n(78839),
    a = n(74538),
    s = n(104494),
    l = n(639119),
    o = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: u, onTier0TrialPeriod: m, onTier2TrialPeriod: g, onNonTier2Subscriber: _, onTier2Subscriber: p, onCustomCriteria: f } = e,
        h = (0, l.N)(),
        x = (0, s.Ng)(),
        E = (0, i.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription()),
        C = a.ZP.getPremiumTypeFromSubscription(E);
    if (null != f) {
        let e = f();
        if (null != e) return e;
    }
    return null != h && o.nG[h.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != h && o.nG[h.trial_id].skus.includes(o.Si.TIER_2) ? (null != u ? u : t) : null != E && null != E.trialId && C === o.p9.TIER_0 ? (null != m ? m : t) : null != E && null != E.trialId && C === o.p9.TIER_2 ? (null != g ? g : t) : null != x ? (null != n ? n : t) : null == C ? (null != c ? c : t) : C === o.p9.TIER_0 || C === o.p9.TIER_1 ? (null != _ ? _ : t) : C === o.p9.TIER_2 && null != p ? p : t;
}
