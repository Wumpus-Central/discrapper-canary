n.d(t, { s: () => d });
var r = n(927578),
    i = n(422936),
    a = n(234419),
    s = n(511484),
    o = n(788868),
    l = n(985018);
let c = (e) => {
        let {
            showTrialCTA: t,
            subscriptionTier: n,
            trialDurationCopy: i,
            isPersistentCTA: a,
            shouldShowReferralTrialCopy: s,
            subscriptionTrial: c,
        } = e;
        return t && s
            ? l.intl.string(l.t.bXTClc)
            : t && (n === o.pe.TIER_2 || a)
              ? (0, r.FY)({
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
            : e === o.pe.TIER_2
              ? l.intl.formatToPlainString(l.t.bkQ4bH, { percent: r })
              : void 0,
    d = (e) => {
        var t, n;
        let { subscriptionTier: d, hasActivePromotion: f = !1, useShorterCTA: p = !1, isPersistentCTA: _ = !1 } = e,
            h = (0, a.V)(),
            m = null == h ? void 0 : h.subscription_trial,
            g = (0, i.O)(),
            E = (0, s.U9)(g, o.pe.TIER_2) ? o.pe.TIER_2 : void 0,
            b = (0, r.tS)({
                intervalType: null == m ? void 0 : m.interval,
                intervalCount: null == m ? void 0 : m.interval_count,
            }),
            y =
                null != (t = null != d ? d : null == h || null == (n = h.subscription_trial) ? void 0 : n.sku_id)
                    ? t
                    : E,
            O = null != m && y === m.sku_id,
            A = (null == h ? void 0 : h.trial_id) === o.Dw;
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
                        shouldShowReferralTrialCopy: A,
                        subscriptionTrial: m,
                    }),
            marketingSubscriptionTierSkuId: y,
        };
    };
