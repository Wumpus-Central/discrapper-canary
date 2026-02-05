n.d(t, { G: () => c });
var i = n(311907),
    s = n(166403),
    r = n(927578),
    a = n(422936),
    l = n(234419),
    o = n(788868);
function c(e) {
    let {
            defaultResponse: t,
            onDiscountOffer: n,
            onNonSubscriber: c,
            onTier0TrialOffer: d,
            onTier2TrialOffer: u,
            onTier0TrialPeriod: _,
            onTier2TrialPeriod: m,
            onNonTier2Subscriber: A,
            onTier2Subscriber: g,
            onCustomCriteria: E,
        } = e,
        h = (0, l.V)(),
        p = (0, a.O)(),
        C = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        x = r.Ay.getPremiumTypeFromSubscription(C);
    if (null != E) {
        let e = E();
        if (null != e) return e;
    }
    return null != h && o.TP[h.trial_id].skus.includes(o.pe.TIER_0)
        ? (d ?? t)
        : null != h && o.TP[h.trial_id].skus.includes(o.pe.TIER_2)
          ? (u ?? t)
          : null != C && C.hasActiveTrial && x === o.PremiumTypes.TIER_0
            ? (_ ?? t)
            : null != C && C.hasActiveTrial && x === o.PremiumTypes.TIER_2
              ? (m ?? t)
              : null != p
                ? (n ?? t)
                : null == x
                  ? (c ?? t)
                  : x === o.PremiumTypes.TIER_0 || x === o.PremiumTypes.TIER_1
                    ? (A ?? t)
                    : x === o.PremiumTypes.TIER_2
                      ? (g ?? t)
                      : t;
}
