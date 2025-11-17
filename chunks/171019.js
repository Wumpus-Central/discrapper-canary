r.d(t, { Z: () => d });
var n = r(54381),
    i = r(831209),
    l = r(442837),
    s = r(481060),
    a = r(597688),
    o = r(884697),
    c = r(388032),
    u = r(71414);
let d = (e) => {
    let { skuId: t, canUsePremiumCollectibles: r, isTryItOut: d, isPurchaseSection: m, isPremiumSection: p } = e,
        h = (0, o.Yq)(t),
        x = (0, l.e7)([a.Z], () => {
            let e = a.Z.getProduct(t);
            return (0, o.G1)(e);
        });
    return m || (p && (r || d))
        ? null
        : h
          ? (0, n.jsx)(s.lBU, {
                className: u.newBadge,
                text: (0, n.jsxs)("div", {
                    className: u.newBadgeText,
                    children: [
                        (0, n.jsx)(s.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        c.intl.string(c.t.y2b7CA),
                    ],
                }),
            })
          : (0, n.jsx)(s.G2e, {
                icon: x
                    ? () =>
                          (0, n.jsx)(s.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, n.jsx)(s.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: i.Z.BACKGROUND_ACCENT,
                className: u.iconBadge,
            });
};
