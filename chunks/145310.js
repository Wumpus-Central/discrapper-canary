l.d(t, { s: () => o });
var n = l(158045),
    i = l(930363),
    s = l(724651),
    r = l(732280),
    a = l(511484),
    u = l(202541),
    d = l(105292);
function o(e) {
    var t;
    let { subscriptionTier: l, hasActivePromotion: o = !1, useShorterCTA: c = !1, isPersistentCTA: f = !1 } = e,
        h = (0, r.V)(),
        g = h?.subscriptionTrial,
        b = (0, s.O)(),
        m = (0, a.U9)(b, u.pe.TIER_2) ? u.pe.TIER_2 : void 0,
        A = (0, n.tS)({ intervalType: g?.interval, intervalCount: g?.intervalCount }),
        p = l ?? h?.subscriptionTrial?.skuId ?? m,
        v = null != g && p === g.skuId,
        T = null != b && u.U4.includes(b.discountId);
    return {
        buttonText: o
            ? d.intl.string(d.t.J61px0)
            : null != b
              ? ((t = b.discount.amount),
                c || f
                    ? d.intl.string(d.t.fkPGat)
                    : p === u.pe.TIER_2
                      ? d.intl.formatToPlainString(T ? d.t.ZhPpOu : d.t.bkQ4bH, { percent: t })
                      : void 0)
              : (function (e) {
                    let {
                            showTrialCTA: t,
                            subscriptionTier: l,
                            trialDurationCopy: s,
                            isPersistentCTA: r,
                            userTrialOffer: a,
                        } = e,
                        o = a?.subscriptionTrial;
                    return t && a?.isReferralTrial === !0
                        ? ((0, i.T)(a, l) ?? d.intl.string(d.t.bXTClc))
                        : t && (l === u.pe.TIER_2 || r)
                          ? (0, n.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
                          : t
                            ? d.intl.formatToPlainString(d.t.nTmm2v, { freeTrialText: s })
                            : void 0;
                })({
                    showTrialCTA: v,
                    subscriptionTier: p,
                    trialDurationCopy: A,
                    isPersistentCTA: f,
                    userTrialOffer: h,
                }),
        marketingSubscriptionTierSkuId: p,
    };
}
