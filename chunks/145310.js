n.d(i, { s: () => a });
var r = n(158045),
    e = n(724651),
    u = n(732280),
    l = n(511484),
    s = n(202541),
    o = n(375708);
function a(t) {
    var i;
    let { subscriptionTier: n, hasActivePromotion: a = !1, useShorterCTA: p = !1, isPersistentCTA: c = !1 } = t,
        T = (0, u.V)(),
        d = T?.subscriptionTrial,
        v = (0, e.O)(),
        b = (0, l.U9)(v, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        f = (0, r.tS)({ intervalType: d?.interval, intervalCount: d?.intervalCount }),
        k = n ?? T?.subscriptionTrial?.skuId ?? b,
        I = null != d && k === d.skuId,
        C = T?.trialId === s.Dw,
        h = null != v && s.U4.includes(v.discountId);
    return {
        buttonText: a
            ? o.intl.string(o.t.J61px0)
            : null != v
              ? ((i = v.discount.amount),
                p || c
                    ? o.intl.string(o.t.fkPGat)
                    : k === s.pe.TIER_2
                      ? o.intl.formatToPlainString(h ? o.t.ZhPpOu : o.t.bkQ4bH, { percent: i })
                      : void 0)
              : (function (t) {
                    let {
                        showTrialCTA: i,
                        subscriptionTier: n,
                        trialDurationCopy: e,
                        isPersistentCTA: u,
                        shouldShowReferralTrialCopy: l,
                        subscriptionTrial: a,
                    } = t;
                    return i && l
                        ? o.intl.string(o.t.bXTClc)
                        : i && (n === s.pe.TIER_2 || u)
                          ? (0, r.FY)({ intervalType: a?.interval, intervalCount: a?.intervalCount })
                          : i
                            ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: e })
                            : void 0;
                })({
                    showTrialCTA: I,
                    subscriptionTier: k,
                    trialDurationCopy: f,
                    isPersistentCTA: c,
                    shouldShowReferralTrialCopy: C,
                    subscriptionTrial: d,
                }),
        marketingSubscriptionTierSkuId: k,
    };
}
