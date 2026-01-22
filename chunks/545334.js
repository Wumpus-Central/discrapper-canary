n.d(t, {
    G: () => c,
});
var r = n(311907),
    i = n(166403),
    a = n(927578),
    s = n(422936),
    o = n(234419),
    l = n(788868);

function c(e) {
    let {
            defaultResponse: t,
            onDiscountOffer: n,
            onNonSubscriber: c,
            onTier0TrialOffer: u,
            onTier2TrialOffer: d,
            onTier0TrialPeriod: f,
            onTier2TrialPeriod: p,
            onNonTier2Subscriber: _,
            onTier2Subscriber: h,
            onCustomCriteria: m,
        } = e,
        g = (0, o.V)(),
        E = (0, s.O)(),
        b = (0, r.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
        y = a.Ay.getPremiumTypeFromSubscription(b);
    if (null != m) {
        let e = m();
        if (null != e) return e;
    }
    return null != g && l.TP[g.trial_id].skus.includes(l.pe.TIER_0)
        ? null != u
            ? u
            : t
        : null != g && l.TP[g.trial_id].skus.includes(l.pe.TIER_2)
          ? null != d
              ? d
              : t
          : null != b && b.hasActiveTrial && y === l.PremiumTypes.TIER_0
            ? null != f
                ? f
                : t
            : null != b && b.hasActiveTrial && y === l.PremiumTypes.TIER_2
              ? null != p
                  ? p
                  : t
              : null != E
                ? null != n
                    ? n
                    : t
                : null == y
                  ? null != c
                      ? c
                      : t
                  : y === l.PremiumTypes.TIER_0 || y === l.PremiumTypes.TIER_1
                    ? null != _
                        ? _
                        : t
                    : y === l.PremiumTypes.TIER_2 && null != h
                      ? h
                      : t;
}
