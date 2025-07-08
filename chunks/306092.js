n.d(t, { e: () => u });
var r = n(255367),
    i = n(481060),
    l = n(409116),
    a = n(755007),
    o = n(231338),
    s = n(858022);
function c(e) {
    let { price: t, isPremiumUser: n, discount: c, hasSufficientOrbs: u } = e;
    return t.currency === o.pK.DISCORD_ORB
        ? (0, r.jsx)(a.Z, {
              orbAmount: t.amount,
              className: u ? void 0 : s.disabled
          })
        : (0, r.jsx)(l.F, {
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
    let { displayPrices: t, isPremiumUser: n, discount: i, hasSufficientOrbs: l } = e;
    return (0, r.jsx)('div', {
        className: s.priceLine,
        children: t.map((e, t) =>
            (0, r.jsx)(
                c,
                {
                    price: e,
                    isPremiumUser: n,
                    discount: i,
                    hasSufficientOrbs: l
                },
                t
            )
        )
    });
}
