n.d(t, { s: () => o });
var l = n(158045),
    i = n(930363),
    s = n(724651),
    r = n(732280),
    a = n(511484),
    u = n(202541),
    d = n(105292);
function o(e) {
    var t;
    let { subscriptionTier: n, hasActivePromotion: o = !1, useShorterCTA: c = !1, isPersistentCTA: f = !1 } = e,
        h = (0, r.V)(),
        b = h?.subscriptionTrial,
        g = (0, s.O)(),
        p = (0, a.U9)(g, u.pe.TIER_2) ? u.pe.TIER_2 : void 0,
        m = (0, l.tS)({ intervalType: b?.interval, intervalCount: b?.intervalCount }),
        A = n ?? h?.subscriptionTrial?.skuId ?? p,
        v = null != b && A === b.skuId,
        T = null != g && u.U4.includes(g.discountId);
    return {
        buttonText: o
            ? d.intl.string(d.t.J61px0)
            : null != g
              ? ((t = g.discount.amount),
                c || f
                    ? d.intl.string(d.t.fkPGat)
                    : A === u.pe.TIER_2
                      ? d.intl.formatToPlainString(T ? d.t.ZhPpOu : d.t.bkQ4bH, { percent: t })
                      : void 0)
              : (function (e) {
                    let {
                            showTrialCTA: t,
                            subscriptionTier: n,
                            trialDurationCopy: s,
                            isPersistentCTA: r,
                            userTrialOffer: a,
                        } = e,
                        o = a?.subscriptionTrial;
                    return t && a?.isReferralTrial === !0
                        ? ((0, i.T)(a, n) ?? d.intl.string(d.t.bXTClc))
                        : t && (n === u.pe.TIER_2 || r)
                          ? (0, l.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
                          : t
                            ? d.intl.formatToPlainString(d.t.nTmm2v, { freeTrialText: s })
                            : void 0;
                })({
                    showTrialCTA: v,
                    subscriptionTier: A,
                    trialDurationCopy: m,
                    isPersistentCTA: f,
                    userTrialOffer: h,
                }),
        marketingSubscriptionTierSkuId: A,
    };
}
