n.d(t, { s: () => d });
var r = n(927578),
    a = n(422936),
    i = n(234419),
    o = n(511484),
    l = n(788868),
    s = n(985018);
let d = (e) => {
    var t;
    let { subscriptionTier: n, hasActivePromotion: d = !1, useShorterCTA: u = !1, isPersistentCTA: c = !1 } = e,
        _ = (0, i.V)(),
        p = _?.subscription_trial,
        C = (0, a.O)(),
        h = (0, o.U9)(C, l.pe.TIER_2) ? l.pe.TIER_2 : void 0,
        E = (0, r.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        m = n ?? _?.subscription_trial?.sku_id ?? h,
        A = null != p && m === p.sku_id,
        I = _?.trial_id === l.Dw;
    return {
        buttonText: d
            ? s.intl.string(s.t.J61px0)
            : null != C
              ? ((t = C.discount.amount),
                u || c
                    ? s.intl.string(s.t.fkPGat)
                    : m === l.pe.TIER_2
                      ? s.intl.formatToPlainString(s.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: a,
                        isPersistentCTA: i,
                        shouldShowReferralTrialCopy: o,
                        subscriptionTrial: d,
                    } = e;
                    return t && o
                        ? s.intl.string(s.t.bXTClc)
                        : t && (n === l.pe.TIER_2 || i)
                          ? (0, r.FY)({ intervalType: d?.interval, intervalCount: d?.interval_count })
                          : t
                            ? s.intl.formatToPlainString(s.t.nTmm2v, { freeTrialText: a })
                            : void 0;
                })({
                    showTrialCTA: A,
                    subscriptionTier: m,
                    trialDurationCopy: E,
                    isPersistentCTA: c,
                    shouldShowReferralTrialCopy: I,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: m,
    };
};
