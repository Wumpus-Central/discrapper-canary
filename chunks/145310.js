n.d(i, { s: () => p });
var r = n(158045),
    e = n(930363),
    l = n(724651),
    u = n(732280),
    a = n(511484),
    s = n(202541),
    o = n(375708);
function p(t) {
    var i;
    let { subscriptionTier: n, hasActivePromotion: p = !1, useShorterCTA: T = !1, isPersistentCTA: c = !1 } = t,
        d = (0, u.V)(),
        v = d?.subscriptionTrial,
        b = (0, l.O)(),
        k = (0, a.U9)(b, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        f = (0, r.tS)({ intervalType: v?.interval, intervalCount: v?.intervalCount }),
        C = n ?? d?.subscriptionTrial?.skuId ?? k,
        I = null != v && C === v.skuId,
        h = null != b && s.U4.includes(b.discountId);
    return {
        buttonText: p
            ? o.intl.string(o.t.J61px0)
            : null != b
              ? ((i = b.discount.amount),
                T || c
                    ? o.intl.string(o.t.fkPGat)
                    : C === s.pe.TIER_2
                      ? o.intl.formatToPlainString(h ? o.t.ZhPpOu : o.t.bkQ4bH, { percent: i })
                      : void 0)
              : (function (t) {
                    let {
                            showTrialCTA: i,
                            subscriptionTier: n,
                            trialDurationCopy: l,
                            isPersistentCTA: u,
                            userTrialOffer: a,
                        } = t,
                        p = a?.subscriptionTrial;
                    return i && a?.isReferralTrial === !0
                        ? ((0, e.T)(a, n) ?? o.intl.string(o.t.bXTClc))
                        : i && (n === s.pe.TIER_2 || u)
                          ? (0, r.FY)({ intervalType: p?.interval, intervalCount: p?.intervalCount })
                          : i
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: l })
                            : void 0;
                })({
                    showTrialCTA: I,
                    subscriptionTier: C,
                    trialDurationCopy: f,
                    isPersistentCTA: c,
                    userTrialOffer: d,
                }),
        marketingSubscriptionTierSkuId: C,
    };
}
