n.d(t, { e: () => c });
var r = n(255367),
    l = n(409116),
    o = n(755007),
    a = n(231338),
    i = n(858022);
function s(e) {
    let { price: t, isPremiumUser: n, discount: s, hasSufficientOrbs: c } = e;
    return t.currency === a.pK.DISCORD_ORB
        ? (0, r.jsx)(o.Z, {
              orbAmount: t.amount,
              className: c ? void 0 : i.disabled
          })
        : (0, r.jsx)(l.F, {
              price: t,
              discount: s,
              nitroIconType: n ? 'default' : void 0,
              nitroIconSize: 'md'
          });
}
function c(e) {
    let { displayPrices: t, isPremiumUser: n, discount: l, hasSufficientOrbs: o } = e;
    return (0, r.jsx)('div', {
        className: i.priceLine,
        children: t.map((e, t) =>
            (0, r.jsx)(
                s,
                {
                    price: e,
                    isPremiumUser: n,
                    discount: l,
                    hasSufficientOrbs: o
                },
                t
            )
        )
    });
}
