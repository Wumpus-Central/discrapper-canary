i.d(n, { s: () => o });
var e = i(158045),
    r = i(724651),
    u = i(732280),
    s = i(511484),
    l = i(202541),
    a = i(375708);
function o(t) {
    var n;
    let { subscriptionTier: i, hasActivePromotion: o = !1, useShorterCTA: c = !1, isPersistentCTA: p = !1 } = t,
        d = (0, u.V)(),
        T = d?.subscriptionTrial,
        v = (0, r.O)(),
        b = (0, s.U9)(v, l.pe.TIER_2) ? l.pe.TIER_2 : void 0,
        f = (0, e.tS)({ intervalType: T?.interval, intervalCount: T?.intervalCount }),
        h = i ?? d?.subscriptionTrial?.skuId ?? b,
        m = null != T && h === T.skuId,
        k = d?.trialId === l.Dw,
        C = null != v && l.U4.includes(v.discountId);
    return {
        buttonText: o
            ? a.intl.string(a.t.J61px0)
            : null != v
              ? ((n = v.discount.amount),
                c || p
                    ? a.intl.string(a.t.fkPGat)
                    : h === l.pe.TIER_2
                      ? a.intl.formatToPlainString(C ? a.t.ZhPpOu : a.t.bkQ4bH, { percent: n })
                      : void 0)
              : (function (t) {
                    let {
                        showTrialCTA: n,
                        subscriptionTier: i,
                        trialDurationCopy: r,
                        isPersistentCTA: u,
                        shouldShowReferralTrialCopy: s,
                        subscriptionTrial: o,
                    } = t;
                    return n && s
                        ? a.intl.string(a.t.bXTClc)
                        : n && (i === l.pe.TIER_2 || u)
                          ? (0, e.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
                          : n
                            ? a.intl.formatToPlainString(a.t.nTmm2v, { freeTrialText: r })
                            : void 0;
                })({
                    showTrialCTA: m,
                    subscriptionTier: h,
                    trialDurationCopy: f,
                    isPersistentCTA: p,
                    shouldShowReferralTrialCopy: k,
                    subscriptionTrial: T,
                }),
        marketingSubscriptionTierSkuId: h,
    };
}
