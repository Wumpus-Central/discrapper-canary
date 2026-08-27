n.d(i, { s: () => a });
var r = n(158045),
    e = n(724651),
    u = n(732280),
    l = n(511484),
    s = n(202541),
    o = n(375708);
function a(t) {
    var i;
    let { subscriptionTier: n, hasActivePromotion: a = !1, useShorterCTA: p = !1, isPersistentCTA: T = !1 } = t,
        c = (0, u.V)(),
        d = c?.subscriptionTrial,
        v = (0, e.O)(),
        b = (0, l.U9)(v, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
        f = (0, r.tS)({ intervalType: d?.interval, intervalCount: d?.intervalCount }),
        k = n ?? c?.subscriptionTrial?.skuId ?? b,
        C = null != d && k === d.skuId,
        I = c?.isReferralTrial === !0,
        h = null != v && s.U4.includes(v.discountId);
    return {
        buttonText: a
            ? o.intl.string(o.t.J61px0)
            : null != v
              ? ((i = v.discount.amount),
                p || T
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
                    showTrialCTA: C,
                    subscriptionTier: k,
                    trialDurationCopy: f,
                    isPersistentCTA: T,
                    shouldShowReferralTrialCopy: I,
                    subscriptionTrial: d,
                }),
        marketingSubscriptionTierSkuId: k,
    };
}
