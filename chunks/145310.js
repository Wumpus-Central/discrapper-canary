"use strict";
n.d(t, { s: () => c });
var r = n(927578),
    a = n(422936),
    i = n(234419),
    l = n(511484),
    s = n(788868),
    o = n(985018);
let c = (e) => {
    var t;
    let { subscriptionTier: n, hasActivePromotion: c = !1, useShorterCTA: d = !1, isPersistentCTA: u = !1 } = e,
        _ = (0, i.V)(),
        p = _?.subscription_trial,
        f = (0, a.O)(),
        m = (0, l.U9)(f, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        h = (0, r.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        g = n ?? _?.subscription_trial?.sku_id ?? m,
        b = null != p && g === p.sku_id,
        A = _?.trial_id === s.Dw;
    return {
        buttonText: c
            ? o.intl.string(o.t.J61px0)
            : null != f
              ? ((t = f.discount.amount),
                d || u
                    ? o.intl.string(o.t.fkPGat)
                    : g === s.pe.TIER_2
                      ? o.intl.formatToPlainString(o.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: a,
                        isPersistentCTA: i,
                        shouldShowReferralTrialCopy: l,
                        subscriptionTrial: c,
                    } = e;
                    return t && l
                        ? o.intl.string(o.t.bXTClc)
                        : t && (n === s.pe.TIER_2 || i)
                          ? (0, r.FY)({ intervalType: c?.interval, intervalCount: c?.interval_count })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: a })
                            : void 0;
                })({
                    showTrialCTA: b,
                    subscriptionTier: g,
                    trialDurationCopy: h,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: A,
                    subscriptionTrial: p,
                }),
        marketingSubscriptionTierSkuId: g,
    };
};
