"use strict";
n.d(t, { s: () => d });
var r = n(927578),
    i = n(422936),
    a = n(234419),
    s = n(511484),
    o = n(788868),
    l = n(985018);
let u = (e) => {
        let {
            showTrialCTA: t,
            subscriptionTier: n,
            trialDurationCopy: i,
            isPersistentCTA: a,
            shouldShowReferralTrialCopy: s,
            subscriptionTrial: u,
        } = e;
        return t && s
            ? l.intl.string(l.t.bXTClc)
            : t && (n === o.pe.TIER_2 || a)
              ? (0, r.FY)({ intervalType: u?.interval, intervalCount: u?.interval_count })
              : t
                ? l.intl.formatToPlainString(l.t.nTmm2v, { freeTrialText: i })
                : void 0;
    },
    c = (e, t, n, r) =>
        t || n
            ? l.intl.string(l.t.fkPGat)
            : e === o.pe.TIER_2
              ? l.intl.formatToPlainString(l.t.bkQ4bH, { percent: r })
              : void 0,
    d = (e) => {
        let { subscriptionTier: t, hasActivePromotion: n = !1, useShorterCTA: d = !1, isPersistentCTA: _ = !1 } = e,
            f = (0, a.V)(),
            p = f?.subscription_trial,
            h = (0, i.O)(),
            m = (0, s.U9)(h, o.pe.TIER_2) ? o.pe.TIER_2 : void 0,
            g = (0, r.tS)({ intervalType: p?.interval, intervalCount: p?.interval_count }),
            E = t ?? f?.subscription_trial?.sku_id ?? m,
            A = null != p && E === p.sku_id,
            I = f?.trial_id === o.Dw;
        return {
            buttonText: n
                ? l.intl.string(l.t.J61px0)
                : null != h
                  ? c(E, d, _, h.discount.amount)
                  : u({
                        showTrialCTA: A,
                        subscriptionTier: E,
                        trialDurationCopy: g,
                        isPersistentCTA: _,
                        shouldShowReferralTrialCopy: I,
                        subscriptionTrial: p,
                    }),
            marketingSubscriptionTierSkuId: E,
        };
    };
