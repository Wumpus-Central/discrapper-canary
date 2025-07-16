n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(304480),
    a = n(104494),
    l = n(639119),
    o = n(388032),
    c = n(372461);
let d = (e) => {
        let t,
            { trialOffer: n, discountOffer: i, referralProgramBadgeBannerExperimentEnabled: r } = e;
        return (null != n ? (t = r ? o.intl.string(o.t.gtNqJS) : o.intl.string(o.t.IBYG5e)) : null != i && (t = o.intl.formatToPlainString(o.t.iiLbvr, { percent: i.discount.amount })), t);
    },
    u = (e) => {
        let { enablePremiumBrandRefresh: t = !1 } = e,
            n = (0, l.N)(),
            o = d({
                trialOffer: n,
                discountOffer: (0, a.Ng)(),
                referralProgramBadgeBannerExperimentEnabled: !0 === s.Z.useExperiment({ location: 'OfferPill' }).enabled
            });
        return null == o
            ? null
            : (0, i.jsx)('div', {
                  className: t ? c.premiumBrandRefreshOfferPill : c.offerPill,
                  children: (0, i.jsx)(r.Text, {
                      variant: t ? 'text-sm/bold' : 'text-xs/bold',
                      color: 'always-white',
                      children: o
                  })
              });
    };
