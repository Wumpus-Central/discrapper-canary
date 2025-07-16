n.d(t, { G: () => u });
var r = n(74538),
    i = n(104494),
    a = n(639119),
    o = n(474936),
    s = n(388032);
let l = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, trialDurationCopy: i, isPersistentCTA: a, shouldShowReferralTrialCopy: l, subscriptionTrial: c } = e;
        return t && l
            ? s.intl.string(s.t.bXTClZ)
            : t && (n === o.Si.TIER_2 || a)
              ? (0, r.Rt)({
                    intervalType: null == c ? void 0 : c.interval,
                    intervalCount: null == c ? void 0 : c.interval_count
                })
              : t
                ? s.intl.formatToPlainString(s.t.nTmm2t, { freeTrialText: i })
                : void 0;
    },
    c = (e, t, n, r) => (t || n ? s.intl.string(s.t.fkPGam) : e === o.Si.TIER_2 ? s.intl.formatToPlainString(s.t.bkQ4bG, { percent: r }) : void 0),
    u = (e) => {
        var t, n;
        let { subscriptionTier: u, hasActivePromotion: d = !1, useShorterCTA: f = !1, isPersistentCTA: _ = !1 } = e,
            p = (0, a.N)(),
            h = null == p ? void 0 : p.subscription_trial,
            m = (0, i.Ng)(),
            g = (0, i.Wp)(m, o.Si.TIER_2) ? o.Si.TIER_2 : void 0,
            E = (0, r.a5)({
                intervalType: null == h ? void 0 : h.interval,
                intervalCount: null == h ? void 0 : h.interval_count
            }),
            b = null != (n = null != u ? u : null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id) ? n : g,
            y = null != h && b === h.sku_id,
            O = (null == p ? void 0 : p.trial_id) === o.a7;
        return {
            buttonText: d
                ? s.intl.string(s.t.J61px8)
                : null != m
                  ? c(b, f, _, m.discount.amount)
                  : l({
                        showTrialCTA: y,
                        subscriptionTier: b,
                        trialDurationCopy: E,
                        isPersistentCTA: _,
                        shouldShowReferralTrialCopy: O,
                        subscriptionTrial: h
                    }),
            marketingSubscriptionTierSkuId: b
        };
    };
