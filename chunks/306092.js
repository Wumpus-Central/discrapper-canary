n.d(t, { e: () => u });
var r = n(200651),
    l = n(481060),
    a = n(409116),
    i = n(755007),
    o = n(231338),
    s = n(750905);
function c(e) {
    let { price: t, isPremiumUser: n, discount: c, hasSufficientOrbs: u } = e;
    return t.currency === o.pK.DISCORD_ORB
        ? (0, r.jsx)(i.Z, {
              orbAmount: t.amount,
              className: u ? void 0 : s.disabled
          })
        : (0, r.jsx)(a.F, {
              price: t,
              discount: c,
              icon: n
                  ? (0, r.jsx)(l.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: s.nitroIcon
                    })
                  : void 0
          });
}
function u(e) {
    let { displayPrices: t, isPremiumUser: n, discount: l, hasSufficientOrbs: a } = e;
    return (0, r.jsx)('div', {
        className: s.priceLine,
        children: t.map((e, t) =>
            (0, r.jsx)(
                c,
                {
                    price: e,
                    isPremiumUser: n,
                    discount: l,
                    hasSufficientOrbs: a
                },
                t
            )
        )
    });
}
