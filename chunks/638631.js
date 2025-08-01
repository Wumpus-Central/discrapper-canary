n.d(t, { Z: () => l });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(717975),
    a = n(372461);
let l = (e) => {
    let { enablePremiumBrandRefresh: t = !1 } = e,
        n = (0, s.Z)();
    return null == n
        ? null
        : (0, i.jsx)('div', {
              className: t ? a.premiumBrandRefreshOfferPill : a.offerPill,
              children: (0, i.jsx)(r.Text, {
                  variant: t ? 'text-sm/bold' : 'text-xs/bold',
                  color: 'always-white',
                  children: n
              })
          });
};
