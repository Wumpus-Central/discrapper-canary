"use strict";
n.d(t, { s: () => u });
var i = n(428262),
    r = n(422936),
    s = n(234419),
    a = n(410516),
    o = n(788868),
    l = n(375708);
function u(e) {
    var t;
    let { subscriptionTier: n, hasActivePromotion: u = !1, useShorterCTA: c = !1, isPersistentCTA: d = !1 } = e,
        _ = (0, s.V)(),
        h = _?.subscription_trial,
        f = (0, r.O)(),
        p = (0, a.U9)(f, o.pe.TIER_2) ? o.pe.TIER_2 : void 0,
        E = (0, i.tS)({ intervalType: h?.interval, intervalCount: h?.interval_count }),
        m = n ?? _?.subscription_trial?.sku_id ?? p,
        g = null != h && m === h.sku_id,
        A = _?.trial_id === o.Dw,
        I = null != f && o.U4.includes(f.discountId);
    return {
        buttonText: u
            ? l.intl.string(l.t.J61px0)
            : null != f
              ? ((t = f.discount.amount),
                c || d
                    ? l.intl.string(l.t.fkPGat)
                    : m === o.pe.TIER_2
                      ? l.intl.formatToPlainString(I ? l.t.ZhPpOu : l.t.bkQ4bH, { percent: t })
                      : void 0)
              : (function (e) {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: r,
                        isPersistentCTA: s,
                        shouldShowReferralTrialCopy: a,
                        subscriptionTrial: u,
                    } = e;
                    return t && a
                        ? l.intl.string(l.t.bXTClc)
                        : t && (n === o.pe.TIER_2 || s)
                          ? (0, i.FY)({ intervalType: u?.interval, intervalCount: u?.interval_count })
                          : t
                            ? l.intl.formatToPlainString(l.t.nTmm2v, { freeTrialText: r })
                            : void 0;
                })({
                    showTrialCTA: g,
                    subscriptionTier: m,
                    trialDurationCopy: E,
                    isPersistentCTA: d,
                    shouldShowReferralTrialCopy: A,
                    subscriptionTrial: h,
                }),
        marketingSubscriptionTierSkuId: m,
    };
}
