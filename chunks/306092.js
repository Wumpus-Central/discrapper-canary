r.d(t, { e: () => u });
var n = r(255367),
    i = r(481060),
    l = r(409116),
    a = r(755007),
    o = r(231338),
    s = r(858022);
function c(e) {
    let { price: t, isPremiumUser: r, discount: c, hasSufficientOrbs: u } = e;
    return t.currency === o.pK.DISCORD_ORB
        ? (0, n.jsx)(a.Z, {
              orbAmount: t.amount,
              className: u ? void 0 : s.disabled
          })
        : (0, n.jsx)(l.F, {
              price: t,
              discount: c,
              icon: r
                  ? (0, n.jsx)(i.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: s.nitroIcon
                    })
                  : void 0
          });
}
function u(e) {
    let { displayPrices: t, isPremiumUser: r, discount: i, hasSufficientOrbs: l } = e;
    return (0, n.jsx)('div', {
        className: s.priceLine,
        children: t.map((e, t) =>
            (0, n.jsx)(
                c,
                {
                    price: e,
                    isPremiumUser: r,
                    discount: i,
                    hasSufficientOrbs: l
                },
                t
            )
        )
    });
}
