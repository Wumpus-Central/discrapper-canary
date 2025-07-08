r.d(t, { e: () => c });
var n = r(255367),
    i = r(409116),
    l = r(755007),
    o = r(231338),
    a = r(858022);
function s(e) {
    let { price: t, isPremiumUser: r, discount: s, hasSufficientOrbs: c } = e;
    return t.currency === o.pK.DISCORD_ORB
        ? (0, n.jsx)(l.Z, {
              orbAmount: t.amount,
              className: c ? void 0 : a.disabled
          })
        : (0, n.jsx)(i.F, {
              price: t,
              discount: s,
              nitroIconType: r ? 'default' : void 0,
              nitroIconSize: 'md'
          });
}
function c(e) {
    let { displayPrices: t, isPremiumUser: r, discount: i, hasSufficientOrbs: l } = e;
    return (0, n.jsx)('div', {
        className: a.priceLine,
        children: t.map((e, t) =>
            (0, n.jsx)(
                s,
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
