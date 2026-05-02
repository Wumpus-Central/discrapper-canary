r.d(i, { s: () => o });
var n = r(927578),
    e = r(422936),
    l = r(234419),
    s = r(511484),
    u = r(788868),
    a = r(375708);
let o = (t) => {
    var i;
    let { subscriptionTier: r, hasActivePromotion: o = !1, useShorterCTA: p = !1, isPersistentCTA: T = !1 } = t,
        c = (0, l.V)(),
        v = c?.subscription_trial,
        d = (0, e.O)(),
        b = (0, s.U9)(d, u.pe.TIER_2) ? u.pe.TIER_2 : void 0,
        _ = (0, n.tS)({ intervalType: v?.interval, intervalCount: v?.interval_count }),
        k = r ?? c?.subscription_trial?.sku_id ?? b,
        f = null != v && k === v.sku_id,
        g = c?.trial_id === u.Dw;
    return {
        buttonText: o
            ? a.intl.string(a.t.J61px0)
            : null != d
              ? ((i = d.discount.amount),
                p || T
                    ? a.intl.string(a.t.fkPGat)
                    : k === u.pe.TIER_2
                      ? a.intl.formatToPlainString(a.t.bkQ4bH, { percent: i })
                      : void 0)
              : ((t) => {
                    let {
                        showTrialCTA: i,
                        subscriptionTier: r,
                        trialDurationCopy: e,
                        isPersistentCTA: l,
                        shouldShowReferralTrialCopy: s,
                        subscriptionTrial: o,
                    } = t;
                    return i && s
                        ? a.intl.string(a.t.bXTClc)
                        : i && (r === u.pe.TIER_2 || l)
                          ? (0, n.FY)({ intervalType: o?.interval, intervalCount: o?.interval_count })
                          : i
                            ? a.intl.formatToPlainString(a.t.nTmm2v, { freeTrialText: e })
                            : void 0;
                })({
                    showTrialCTA: f,
                    subscriptionTier: k,
                    trialDurationCopy: _,
                    isPersistentCTA: T,
                    shouldShowReferralTrialCopy: g,
                    subscriptionTrial: v,
                }),
        marketingSubscriptionTierSkuId: k,
    };
};
