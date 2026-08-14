"use strict";
n.d(t, { s: () => d });
var i = n(158045),
    r = n(724651),
    a = n(732280),
    s = n(511484),
    l = n(202541),
    o = n(375708);
function d(e) {
    var t;
    let { subscriptionTier: n, hasActivePromotion: d = !1, useShorterCTA: c = !1, isPersistentCTA: u = !1 } = e,
        _ = (0, a.V)(),
        E = _?.subscriptionTrial,
        A = (0, r.O)(),
        h = (0, s.U9)(A, l.pe.TIER_2) ? l.pe.TIER_2 : void 0,
        I = (0, i.tS)({ intervalType: E?.interval, intervalCount: E?.intervalCount }),
        f = n ?? _?.subscriptionTrial?.skuId ?? h,
        p = null != E && f === E.skuId,
        T = _?.trialId === l.Dw,
        m = null != A && l.U4.includes(A.discountId);
    return {
        buttonText: d
            ? o.intl.string(o.t.J61px0)
            : null != A
              ? ((t = A.discount.amount),
                c || u
                    ? o.intl.string(o.t.fkPGat)
                    : f === l.pe.TIER_2
                      ? o.intl.formatToPlainString(m ? o.t.ZhPpOu : o.t.bkQ4bH, { percent: t })
                      : void 0)
              : (function (e) {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: n,
                        trialDurationCopy: r,
                        isPersistentCTA: a,
                        shouldShowReferralTrialCopy: s,
                        subscriptionTrial: d,
                    } = e;
                    return t && s
                        ? o.intl.string(o.t.bXTClc)
                        : t && (n === l.pe.TIER_2 || a)
                          ? (0, i.FY)({ intervalType: d?.interval, intervalCount: d?.intervalCount })
                          : t
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: r })
                            : void 0;
                })({
                    showTrialCTA: p,
                    subscriptionTier: f,
                    trialDurationCopy: I,
                    isPersistentCTA: u,
                    shouldShowReferralTrialCopy: T,
                    subscriptionTrial: E,
                }),
        marketingSubscriptionTierSkuId: f,
    };
}
