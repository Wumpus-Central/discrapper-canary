var i = t(879610),
    a = t(900670),
    s = t(423814),
    l = t(77528),
    r = t(511484),
    d = t(682901),
    o = t(792996);
t.d(
    n,
    {},
    {
        s: function (e) {
            var n;
            let { subscriptionTier: t, hasActivePromotion: u = !1, useShorterCTA: c = !1, isPersistentCTA: b = !1 } = e,
                f = (0, l.V)(),
                m = f?.subscriptionTrial,
                T = (0, s.O)(),
                p = (0, r.U9)(T, d.pe.TIER_2) ? d.pe.TIER_2 : void 0,
                v = (0, i.tS)({ intervalType: m?.interval, intervalCount: m?.intervalCount }),
                h = t ?? f?.subscriptionTrial?.skuId ?? p,
                g = null != m && h === m.skuId,
                x = null != T && d.U4.includes(T.discountId);
            return {
                buttonText: u
                    ? o.intl.string(o.t.J61px0)
                    : null != T
                      ? ((n = T.discount.amount),
                        c || b
                            ? o.intl.string(o.t.fkPGat)
                            : h === d.pe.TIER_2
                              ? o.intl.formatToPlainString(x ? o.t.ZhPpOu : o.t.bkQ4bH, { percent: n })
                              : void 0)
                      : (function (e) {
                            let {
                                    showTrialCTA: n,
                                    subscriptionTier: t,
                                    trialDurationCopy: s,
                                    isPersistentCTA: l,
                                    userTrialOffer: r,
                                } = e,
                                u = r?.subscriptionTrial;
                            return n && r?.isReferralTrial === !0
                                ? ((0, a.T)(r, t) ?? o.intl.string(o.t.bXTClc))
                                : n && (t === d.pe.TIER_2 || l)
                                  ? (0, i.FY)({ intervalType: u?.interval, intervalCount: u?.intervalCount })
                                  : n
                                    ? o.intl.formatToPlainString(o.t.nTmm2v, { freeTrialText: s })
                                    : void 0;
                        })({
                            showTrialCTA: g,
                            subscriptionTier: h,
                            trialDurationCopy: v,
                            isPersistentCTA: b,
                            userTrialOffer: f,
                        }),
                marketingSubscriptionTierSkuId: h,
            };
        },
    },
);
