n.d(t, {
    _: function () {
        return c;
    }
});
var i = n(442837),
    r = n(78839),
    a = n(74538),
    s = n(104494),
    l = n(639119),
    o = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: u, onTier0TrialPeriod: g, onTier2TrialPeriod: m, onNonTier2Subscriber: f, onTier2Subscriber: p, onCustomCriteria: _ } = e,
        h = (0, l.N)(),
        x = (0, s.Ng)(),
        E = (0, i.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription()),
        b = a.ZP.getPremiumTypeFromSubscription(E);
    if (null != _) {
        let e = _();
        if (null != e) return e;
    }
    return null != h && o.nG[h.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != h && o.nG[h.trial_id].skus.includes(o.Si.TIER_2) ? (null != u ? u : t) : null != E && null != E.trialId && b === o.p9.TIER_0 ? (null != g ? g : t) : null != E && null != E.trialId && b === o.p9.TIER_2 ? (null != m ? m : t) : null != x ? (null != n ? n : t) : null == b ? (null != c ? c : t) : b === o.p9.TIER_0 || b === o.p9.TIER_1 ? (null != f ? f : t) : b === o.p9.TIER_2 ? (null != p ? p : t) : t;
}
