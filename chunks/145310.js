a.d(t, { s: () => c });
var n = a(927578),
    l = a(422936),
    r = a(234419),
    i = a(511484),
    s = a(788868),
    o = a(985018);
let c = (e) => {
    var t;
    let { subscriptionTier: a, hasActivePromotion: c = !1, useShorterCTA: d = !1, isPersistentCTA: u = !1 } = e,
        h = (0, r.V)(),
        p = h?.subscription_trial,
        m = (0, l.O)(),
        f = (0, i.U9)(m, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        _ = (0, n.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        b = a ?? h?.subscription_trial?.sku_id ?? f,
        g = null != p && b === p.sku_id,
        x = h?.trial_id === s.Dw;
    return {
        buttonText: c
            ? o.intl.string(o.t.J61px0)
            : null != m
              ? ((t = m.discount.amount),
                d || u
                    ? o.intl.string(o.t.fkPGat)
                    : b === s.pe.TIER_2
                      ? o.intl.formatToPlainString(o.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: a,
                        trialDurationCopy: l,
                        isPersistentCTA: r,
                        shouldShowReferralTrialCopy: i,
                        subscriptionTrial: c,
                    } = e;
                    return t && i
                        ? o.intl.string(o.t.bXTClc)
                        : t && (a === s.pe.TIER_2 || r)
                          ? (0, n.FY)({ intervalType: c?.interval, intervalCount: c?.interval_count })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: l })
                            : void 0;
                })({
                    showTrialCTA: g,
                    subscriptionTier: b,
                    trialDurationCopy: _,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: x,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: b,
    };
};
