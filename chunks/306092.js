r.d(t, { e: () => c });
var n = r(255367),
    l = r(409116),
    o = r(755007),
    i = r(231338),
    a = r(858022);
function s(e) {
    let { price: t, isPremiumUser: r, discount: s, hasSufficientOrbs: c } = e;
    return t.currency === i.pK.DISCORD_ORB
        ? (0, n.jsx)(o.Z, {
              orbAmount: t.amount,
              className: c ? void 0 : a.disabled
          })
        : (0, n.jsx)(l.F, {
              price: t,
              discount: s,
              nitroIconType: r ? 'default' : void 0,
              nitroIconSize: 'md'
          });
}
function c(e) {
    let { displayPrices: t, isPremiumUser: r, discount: l, hasSufficientOrbs: o } = e;
    return (0, n.jsx)('div', {
        className: a.priceLine,
        children: t.map((e, t) =>
            (0, n.jsx)(
                s,
                {
                    price: e,
                    isPremiumUser: r,
                    discount: l,
                    hasSufficientOrbs: o
                },
                t
            )
        )
    });
}
