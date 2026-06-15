n.d(i, { s: () => o });
var r = n(428262),
    e = n(422936),
    l = n(234419),
    u = n(410516),
    s = n(788868),
    a = n(375708);
let o = (t) => {
    var i;
    let { subscriptionTier: n, hasActivePromotion: o = !1, useShorterCTA: p = !1, isPersistentCTA: c = !1 } = t,
        T = (0, l.V)(),
        d = T?.subscription_trial,
        v = (0, e.O)(),
        b = (0, u.U9)(v, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        _ = (0, r.tS)({ intervalType: d?.interval, intervalCount: d?.interval_count }),
        k = n ?? T?.subscription_trial?.sku_id ?? b,
        h = null != d && k === d.sku_id,
        f = T?.trial_id === s.Dw,
        g = null != v && s.U4.includes(v.discountId);
    return {
        buttonText: o
            ? a.intl.string(a.t.J61px0)
            : null != v
              ? ((i = v.discount.amount),
                p || c
                    ? a.intl.string(a.t.fkPGat)
                    : k === s.pe.TIER_2
                      ? a.intl.formatToPlainString(g ? a.t.ZhPpOu : a.t.bkQ4bH, { percent: i })
                      : void 0)
              : ((t) => {
                    let {
                        showTrialCTA: i,
                        subscriptionTier: n,
                        trialDurationCopy: e,
                        isPersistentCTA: l,
                        shouldShowReferralTrialCopy: u,
                        subscriptionTrial: o,
                    } = t;
                    return i && u
                        ? a.intl.string(a.t.bXTClc)
                        : i && (n === s.pe.TIER_2 || l)
                          ? (0, r.FY)({ intervalType: o?.interval, intervalCount: o?.interval_count })
                          : i
                            ? a.intl.formatToPlainString(a.t.nTmm2v, { freeTrialText: e })
                            : void 0;
                })({
                    showTrialCTA: h,
                    subscriptionTier: k,
                    trialDurationCopy: _,
                    isPersistentCTA: c,
                    shouldShowReferralTrialCopy: f,
                    subscriptionTrial: d,
                }),
        marketingSubscriptionTierSkuId: k,
    };
};
