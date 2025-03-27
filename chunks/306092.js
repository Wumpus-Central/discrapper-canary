n.d(t, { e: () => u });
var r = n(200651),
    i = n(481060),
    o = n(409116),
    l = n(755007),
    a = n(231338),
    s = n(666048);
function c(e) {
    let { price: t, isPremiumUser: n, discount: c, hasSufficientOrbs: u } = e;
    return t.currency === a.pK.DISCORD_ORB
        ? (0, r.jsx)(l.Z, {
              orbAmount: t.amount,
              className: u ? void 0 : s.disabled
          })
        : (0, r.jsx)(o.F, {
              price: t,
              discount: c,
              icon: n
                  ? (0, r.jsx)(i.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: s.nitroIcon
                    })
                  : void 0
          });
}
function u(e) {
    let { displayPrices: t, isPremiumUser: n, discount: i, hasSufficientOrbs: o } = e;
    return (0, r.jsx)('div', {
        className: s.priceLine,
        children: t.map((e, t) =>
            (0, r.jsx)(
                c,
                {
                    price: e,
                    isPremiumUser: n,
                    discount: i,
                    hasSufficientOrbs: o
                },
                t
            )
        )
    });
}
