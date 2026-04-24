"use strict";
n.d(t, { s: () => c });
var a = n(927578),
    r = n(422936),
    i = n(234419),
    l = n(511484),
    s = n(788868),
    o = n(985018);
let c = (e) => {
    var t;
    let { subscriptionTier: n, hasActivePromotion: c = !1, useShorterCTA: d = !1, isPersistentCTA: u = !1 } = e,
        _ = (0, i.V)(),
        p = _?.subscription_trial,
        m = (0, r.O)(),
        h = (0, l.U9)(m, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        f = (0, a.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        g = n ?? _?.subscription_trial?.sku_id ?? h,
        b = null != p && g === p.sku_id,
        v = _?.trial_id === s.Dw;
    return {
        buttonText: c
            ? o.intl.string(o.t.J61px0)
            : null != m
              ? ((t = m.discount.amount),
                d || u
                    ? o.intl.string(o.t.fkPGat)
                    : g === s.pe.TIER_2
                      ? o.intl.formatToPlainString(o.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: r,
                        isPersistentCTA: i,
                        shouldShowReferralTrialCopy: l,
                        subscriptionTrial: c,
                    } = e;
                    return t && l
                        ? o.intl.string(o.t.bXTClc)
                        : t && (n === s.pe.TIER_2 || i)
                          ? (0, a.FY)({ intervalType: c?.interval, intervalCount: c?.interval_count })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: r })
                            : void 0;
                })({
                    showTrialCTA: b,
                    subscriptionTier: g,
                    trialDurationCopy: f,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: v,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: g,
    };
};
