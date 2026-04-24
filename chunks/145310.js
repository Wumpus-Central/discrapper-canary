n.d(t, { s: () => c });
var a = n(927578),
    i = n(422936),
    l = n(234419),
    r = n(511484),
    o = n(788868),
    s = n(985018);
let c = (e) => {
    var t;
    let { subscriptionTier: n, hasActivePromotion: c = !1, useShorterCTA: d = !1, isPersistentCTA: u = !1 } = e,
        _ = (0, l.V)(),
        p = _?.subscription_trial,
        f = (0, i.O)(),
        h = (0, r.U9)(f, o.pe.TIER_2) ? o.pe.TIER_2 : void 0,
        m = (0, a.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        g = n ?? _?.subscription_trial?.sku_id ?? h,
        b = null != p && g === p.sku_id,
        A = _?.trial_id === o.Dw;
    return {
        buttonText: c
            ? s.intl.string(s.t.J61px0)
            : null != f
              ? ((t = f.discount.amount),
                d || u
                    ? s.intl.string(s.t.fkPGat)
                    : g === o.pe.TIER_2
                      ? s.intl.formatToPlainString(s.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: i,
                        isPersistentCTA: l,
                        shouldShowReferralTrialCopy: r,
                        subscriptionTrial: c,
                    } = e;
                    return t && r
                        ? s.intl.string(s.t.bXTClc)
                        : t && (n === o.pe.TIER_2 || l)
                          ? (0, a.FY)({ intervalType: c?.interval, intervalCount: c?.interval_count })
                          : t
                            ? s.intl.formatToPlainString(s.t.nTmm2v, { freeTrialText: i })
                            : void 0;
                })({
                    showTrialCTA: b,
                    subscriptionTier: g,
                    trialDurationCopy: m,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: A,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: g,
    };
};
