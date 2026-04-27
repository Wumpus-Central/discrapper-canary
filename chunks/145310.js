"use strict";
r.d(t, { s: () => c });
var n = r(927578),
    i = r(422936),
    a = r(234419),
    s = r(511484),
    l = r(788868),
    o = r(985018);
let c = (e) => {
    var t;
    let { subscriptionTier: r, hasActivePromotion: c = !1, useShorterCTA: d = !1, isPersistentCTA: u = !1 } = e,
        _ = (0, a.V)(),
        p = _?.subscription_trial,
        f = (0, i.O)(),
        m = (0, s.U9)(f, l.pe.TIER_2) ? l.pe.TIER_2 : void 0,
        h = (0, n.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
        g = r ?? _?.subscription_trial?.sku_id ?? m,
        b = null != p && g === p.sku_id,
        A = _?.trial_id === l.Dw;
    return {
        buttonText: c
            ? o.intl.string(o.t.J61px0)
            : null != f
              ? ((t = f.discount.amount),
                d || u
                    ? o.intl.string(o.t.fkPGat)
                    : g === l.pe.TIER_2
                      ? o.intl.formatToPlainString(o.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: r,
                        trialDurationCopy: i,
                        isPersistentCTA: a,
                        shouldShowReferralTrialCopy: s,
                        subscriptionTrial: c,
                    } = e;
                    return t && s
                        ? o.intl.string(o.t.bXTClc)
                        : t && (r === l.pe.TIER_2 || a)
                          ? (0, n.FY)({ intervalType: c?.interval, intervalCount: c?.interval_count })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: i })
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
