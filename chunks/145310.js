a.d(t, { s: () => c });
var n = a(927578),
    r = a(422936),
    l = a(234419),
    i = a(511484),
    s = a(788868),
    o = a(985018);
let c = (e) => {
    var t;
    let { subscriptionTier: a, hasActivePromotion: c = !1, useShorterCTA: d = !1, isPersistentCTA: u = !1 } = e,
        h = (0, l.V)(),
        p = h?.subscription_trial,
        m = (0, r.O)(),
        f = (0, i.U9)(m, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        b = (0, n.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        _ = a ?? h?.subscription_trial?.sku_id ?? f,
        g = null != p && _ === p.sku_id,
        x = h?.trial_id === s.Dw;
    return {
        buttonText: c
            ? o.intl.string(o.t.J61px0)
            : null != m
              ? ((t = m.discount.amount),
                d || u
                    ? o.intl.string(o.t.fkPGat)
                    : _ === s.pe.TIER_2
                      ? o.intl.formatToPlainString(o.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: a,
                        trialDurationCopy: r,
                        isPersistentCTA: l,
                        shouldShowReferralTrialCopy: i,
                        subscriptionTrial: c,
                    } = e;
                    return t && i
                        ? o.intl.string(o.t.bXTClc)
                        : t && (a === s.pe.TIER_2 || l)
                          ? (0, n.FY)({ intervalType: c?.interval, intervalCount: c?.interval_count })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: r })
                            : void 0;
                })({
                    showTrialCTA: g,
                    subscriptionTier: _,
                    trialDurationCopy: b,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: x,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: _,
    };
};
