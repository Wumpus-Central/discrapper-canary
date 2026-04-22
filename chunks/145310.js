"use strict";
a.d(t, { s: () => d });
var r = a(927578),
    l = a(422936),
    n = a(234419),
    i = a(511484),
    s = a(788868),
    o = a(985018);
let d = (e) => {
    var t;
    let { subscriptionTier: a, hasActivePromotion: d = !1, useShorterCTA: c = !1, isPersistentCTA: u = !1 } = e,
        h = (0, n.V)(),
        p = h?.subscription_trial,
        _ = (0, l.O)(),
        m = (0, i.U9)(_, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        b = (0, r.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        g = a ?? h?.subscription_trial?.sku_id ?? m,
        f = null != p && g === p.sku_id,
        x = h?.trial_id === s.Dw;
    return {
        buttonText: d
            ? o.intl.string(o.t.J61px0)
            : null != _
              ? ((t = _.discount.amount),
                c || u
                    ? o.intl.string(o.t.fkPGat)
                    : g === s.pe.TIER_2
                      ? o.intl.formatToPlainString(o.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: a,
                        trialDurationCopy: l,
                        isPersistentCTA: n,
                        shouldShowReferralTrialCopy: i,
                        subscriptionTrial: d,
                    } = e;
                    return t && i
                        ? o.intl.string(o.t.bXTClc)
                        : t && (a === s.pe.TIER_2 || n)
                          ? (0, r.FY)({ intervalType: d?.interval, intervalCount: d?.interval_count })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: l })
                            : void 0;
                })({
                    showTrialCTA: f,
                    subscriptionTier: g,
                    trialDurationCopy: b,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: x,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: g,
    };
};
