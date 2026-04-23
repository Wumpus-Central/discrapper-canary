"use strict";
n.d(t, { s: () => u });
var r = n(927578),
    i = n(422936),
    s = n(234419),
    a = n(511484),
    o = n(788868),
    l = n(985018);
let u = (e) => {
    var t;
    let { subscriptionTier: n, hasActivePromotion: u = !1, useShorterCTA: c = !1, isPersistentCTA: d = !1 } = e,
        _ = (0, s.V)(),
        f = _?.subscription_trial,
        p = (0, i.O)(),
        h = (0, a.U9)(p, o.pe.TIER_2) ? o.pe.TIER_2 : void 0,
        E = (0, r.tS)({ intervalType: f?.interval, intervalCount: f?.interval_count }),
        m = n ?? _?.subscription_trial?.sku_id ?? h,
        g = null != f && m === f.sku_id,
        A = _?.trial_id === o.Dw;
    return {
        buttonText: u
            ? l.intl.string(l.t.J61px0)
            : null != p
              ? ((t = p.discount.amount),
                c || d
                    ? l.intl.string(l.t.fkPGat)
                    : m === o.pe.TIER_2
                      ? l.intl.formatToPlainString(l.t.bkQ4bH, { percent: t })
                      : void 0)
              : ((e) => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: i,
                        isPersistentCTA: s,
                        shouldShowReferralTrialCopy: a,
                        subscriptionTrial: u,
                    } = e;
                    return t && a
                        ? l.intl.string(l.t.bXTClc)
                        : t && (n === o.pe.TIER_2 || s)
                          ? (0, r.FY)({ intervalType: u?.interval, intervalCount: u?.interval_count })
                          : t
                            ? l.intl.formatToPlainString(l.t.nTmm2v, { freeTrialText: i })
                            : void 0;
                })({
                    showTrialCTA: g,
                    subscriptionTier: m,
                    trialDurationCopy: E,
                    isPersistentCTA: d,
                    shouldShowReferralTrialCopy: A,
                    subscriptionTrial: f,
                }),
        marketingSubscriptionTierSkuId: m,
    };
};
