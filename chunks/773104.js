n.d(t, { _: () => c });
var i = n(442837),
    s = n(78839),
    r = n(74538),
    l = n(104494),
    a = n(639119),
    o = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: u, onTier0TrialPeriod: m, onTier2TrialPeriod: g, onNonTier2Subscriber: h, onTier2Subscriber: x, onCustomCriteria: _ } = e,
        p = (0, a.N)(),
        E = (0, l.Ng)(),
        C = (0, i.e7)([s.ZP], () => s.ZP.getPremiumTypeSubscription()),
        f = r.ZP.getPremiumTypeFromSubscription(C);
    if (null != _) {
        let e = _();
        if (null != e) return e;
    }
    return null != p && o.nG[p.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != p && o.nG[p.trial_id].skus.includes(o.Si.TIER_2) ? (null != u ? u : t) : null != C && null != C.trialId && f === o.p9.TIER_0 ? (null != m ? m : t) : null != C && null != C.trialId && f === o.p9.TIER_2 ? (null != g ? g : t) : null != E ? (null != n ? n : t) : null == f ? (null != c ? c : t) : f === o.p9.TIER_0 || f === o.p9.TIER_1 ? (null != h ? h : t) : f === o.p9.TIER_2 && null != x ? x : t;
}
