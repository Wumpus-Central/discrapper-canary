n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(104494),
    a = n(639119),
    l = n(388032),
    o = n(372461);
let c = (e) => {
        let { trialOffer: t, discountOffer: n } = e;
        return null != t ? (null != t.referrer_id ? l.intl.string(l.t.gtNqJS) : l.intl.string(l.t.IBYG5e)) : null != n ? l.intl.formatToPlainString(l.t.iiLbvr, { percent: n.discount.amount }) : void 0;
    },
    d = (e) => {
        let { enablePremiumBrandRefresh: t = !1 } = e,
            n = c({
                trialOffer: (0, a.N)(),
                discountOffer: (0, s.Ng)()
            });
        return null == n
            ? null
            : (0, i.jsx)('div', {
                  className: t ? o.premiumBrandRefreshOfferPill : o.offerPill,
                  children: (0, i.jsx)(r.Text, {
                      variant: t ? 'text-sm/bold' : 'text-xs/bold',
                      color: 'always-white',
                      children: n
                  })
              });
    };
