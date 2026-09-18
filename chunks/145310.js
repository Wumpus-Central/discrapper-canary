n.d(i, { s: () => p });
var r = n(158045),
    e = n(724651),
    l = n(732280),
    u = n(241422),
    s = n(511484),
    a = n(202541),
    o = n(375708);
function p(t) {
    var i;
    let { subscriptionTier: n, hasActivePromotion: p = !1, useShorterCTA: c = !1, isPersistentCTA: T = !1 } = t,
        v = (0, l.V)(),
        d = v?.subscriptionTrial,
        b = (0, e.O)(),
        f = (0, s.U9)(b, a.pe.TIER_2) ? a.pe.TIER_2 : void 0,
        k = (0, r.tS)({ intervalType: d?.interval, intervalCount: d?.intervalCount }),
        C = n ?? v?.subscriptionTrial?.skuId ?? f,
        I = null != d && C === d.skuId,
        h = null != b && a.U4.includes(b.discountId);
    return {
        buttonText: p
            ? o.intl.string(o.t.J61px0)
            : null != b
              ? ((i = b.discount.amount),
                c || T
                    ? o.intl.string(o.t.fkPGat)
                    : C === a.pe.TIER_2
                      ? o.intl.formatToPlainString(h ? o.t.ZhPpOu : o.t.bkQ4bH, { percent: i })
                      : void 0)
              : (function (t) {
                    let {
                            showTrialCTA: i,
                            subscriptionTier: n,
                            trialDurationCopy: e,
                            isPersistentCTA: l,
                            userTrialOffer: s,
                        } = t,
                        p = s?.subscriptionTrial;
                    return i && s?.isReferralTrial === !0
                        ? ((0, u.o)(s, n) ?? o.intl.string(o.t.bXTClc))
                        : i && (n === a.pe.TIER_2 || l)
                          ? (0, r.FY)({ intervalType: p?.interval, intervalCount: p?.intervalCount })
                          : i
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: e })
                            : void 0;
                })({
                    showTrialCTA: I,
                    subscriptionTier: C,
                    trialDurationCopy: k,
                    isPersistentCTA: T,
                    userTrialOffer: v,
                }),
        marketingSubscriptionTierSkuId: C,
    };
}
