n.d(t, { _: () => c });
var r = n(442837),
    i = n(78839),
    o = n(74538),
    a = n(104494),
    s = n(639119),
    l = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: u, onTier2TrialOffer: d, onTier0TrialPeriod: f, onTier2TrialPeriod: _, onNonTier2Subscriber: p, onTier2Subscriber: h, onCustomCriteria: m } = e,
        g = (0, s.N)(),
        E = (0, a.Ng)(),
        b = (0, r.e7)([i.ZP], () => i.ZP.getPremiumTypeSubscription()),
        y = o.ZP.getPremiumTypeFromSubscription(b);
    if (null != m) {
        let e = m();
        if (null != e) return e;
    }
    return null != g && l.nG[g.trial_id].skus.includes(l.Si.TIER_0) ? (null != u ? u : t) : null != g && l.nG[g.trial_id].skus.includes(l.Si.TIER_2) ? (null != d ? d : t) : null != b && null != b.trialId && y === l.p9.TIER_0 ? (null != f ? f : t) : null != b && null != b.trialId && y === l.p9.TIER_2 ? (null != _ ? _ : t) : null != E ? (null != n ? n : t) : null == y ? (null != c ? c : t) : y === l.p9.TIER_0 || y === l.p9.TIER_1 ? (null != p ? p : t) : y === l.p9.TIER_2 && null != h ? h : t;
}
