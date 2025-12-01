n.d(t, { _: () => c });
var r = n(442837),
    i = n(78839),
    a = n(74538),
    o = n(622909),
    s = n(639119),
    l = n(474936);
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
            onTier2Subscriber: m,
            onCustomCriteria: h,
        } = e,
        g = (0, s.N)(),
        E = (0, o.N)(),
        b = (0, r.e7)([i.Z], () => i.Z.getPremiumTypeSubscription()),
        y = a.ZP.getPremiumTypeFromSubscription(b);
    if (null != h) {
        let e = h();
        if (null != e) return e;
    }
    return null != g && l.nG[g.trial_id].skus.includes(l.Si.TIER_0)
        ? null != u
            ? u
            : t
        : null != g && l.nG[g.trial_id].skus.includes(l.Si.TIER_2)
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
                    : y === l.PremiumTypes.TIER_2 && null != m
                      ? m
                      : t;
}
