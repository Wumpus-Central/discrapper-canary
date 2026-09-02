i.d(n, { s: () => o });
var r = i(158045),
    e = i(724651),
    l = i(732280),
    u = i(511484),
    a = i(202541),
    s = i(375708);
function o(t) {
    var n;
    let { subscriptionTier: i, hasActivePromotion: o = !1, useShorterCTA: p = !1, isPersistentCTA: c = !1 } = t,
        v = (0, l.V)(),
        T = v?.subscriptionTrial,
        d = (0, e.O)(),
        b = (0, u.U9)(d, a.pe.TIER_2) ? a.pe.TIER_2 : void 0,
        f = (0, r.tS)({ intervalType: T?.interval, intervalCount: T?.intervalCount }),
        k = i ?? v?.subscriptionTrial?.skuId ?? b,
        C = null != T && k === T.skuId,
        I = v?.isReferralTrial === !0,
        h = null != d && a.U4.includes(d.discountId);
    return {
        buttonText: o
            ? s.intl.string(s.t.J61px0)
            : null != d
              ? ((n = d.discount.amount),
                p || c
                    ? s.intl.string(s.t.fkPGat)
                    : k === a.pe.TIER_2
                      ? s.intl.formatToPlainString(h ? s.t.ZhPpOu : s.t.bkQ4bH, { percent: n })
                      : void 0)
              : (function (t) {
                    let {
                        showTrialCTA: n,
                        subscriptionTier: i,
                        trialDurationCopy: e,
                        isPersistentCTA: l,
                        shouldShowReferralTrialCopy: u,
                        subscriptionTrial: o,
                    } = t;
                    return n && u
                        ? s.intl.string(s.t.bXTClc)
                        : n && (i === a.pe.TIER_2 || l)
                          ? (0, r.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
                          : n
                            ? s.intl.formatToPlainString(s.t.nTmm2v, { freeTrialText: e })
                            : void 0;
                })({
                    showTrialCTA: C,
                    subscriptionTier: k,
                    trialDurationCopy: f,
                    isPersistentCTA: c,
                    shouldShowReferralTrialCopy: I,
                    subscriptionTrial: T,
                }),
        marketingSubscriptionTierSkuId: k,
    };
}
