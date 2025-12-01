n.d(t, { G: () => d });
var r = n(74538),
    i = n(622909),
    a = n(639119),
    o = n(230916),
    s = n(474936),
    l = n(388032);
let c = (e) => {
        let {
            showTrialCTA: t,
            subscriptionTier: n,
            trialDurationCopy: i,
            isPersistentCTA: a,
            shouldShowReferralTrialCopy: o,
            subscriptionTrial: c,
        } = e;
        return t && o
            ? l.intl.string(l.t.bXTClc)
            : t && (n === s.Si.TIER_2 || a)
              ? (0, r.Rt)({
                    intervalType: null == c ? void 0 : c.interval,
                    intervalCount: null == c ? void 0 : c.interval_count,
                })
              : t
                ? l.intl.formatToPlainString(l.t.nTmm2v, { freeTrialText: i })
                : void 0;
    },
    u = (e, t, n, r) =>
        t || n
            ? l.intl.string(l.t.fkPGat)
            : e === s.Si.TIER_2
              ? l.intl.formatToPlainString(l.t.bkQ4bH, { percent: r })
              : void 0,
    d = (e) => {
        var t, n;
        let { subscriptionTier: d, hasActivePromotion: f = !1, useShorterCTA: p = !1, isPersistentCTA: _ = !1 } = e,
            m = (0, a.N)(),
            h = null == m ? void 0 : m.subscription_trial,
            g = (0, i.N)(),
            E = (0, o.Wp)(g, s.Si.TIER_2) ? s.Si.TIER_2 : void 0,
            b = (0, r.a5)({
                intervalType: null == h ? void 0 : h.interval,
                intervalCount: null == h ? void 0 : h.interval_count,
            }),
            y =
                null != (n = null != d ? d : null == m || null == (t = m.subscription_trial) ? void 0 : t.sku_id)
                    ? n
                    : E,
            O = null != h && y === h.sku_id,
            v = (null == m ? void 0 : m.trial_id) === s.a7;
        return {
            buttonText: f
                ? l.intl.string(l.t.J61px0)
                : null != g
                  ? u(y, p, _, g.discount.amount)
                  : c({
                        showTrialCTA: O,
                        subscriptionTier: y,
                        trialDurationCopy: b,
                        isPersistentCTA: _,
                        shouldShowReferralTrialCopy: v,
                        subscriptionTrial: h,
                    }),
            marketingSubscriptionTierSkuId: y,
        };
    };
