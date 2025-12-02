r.d(t, { Z: () => u });
var n = r(54381),
    i = r(442837),
    l = r(692547),
    a = r(481060),
    s = r(597688),
    o = r(884697),
    c = r(388032),
    d = r(71414);
let u = (e) => {
    let { skuId: t, canUsePremiumCollectibles: r, isTryItOut: u, isPurchaseSection: m, isPremiumSection: p } = e,
        h = (0, o.Yq)(t),
        v = (0, i.e7)([s.Z], () => {
            let e = s.Z.getProduct(t);
            return (0, o.G1)(e);
        });
    return m || (p && (r || u))
        ? null
        : h
          ? (0, n.jsx)(a.lBU, {
                className: d.newBadge,
                text: (0, n.jsxs)("div", {
                    className: d.newBadgeText,
                    children: [
                        (0, n.jsx)(a.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        c.intl.string(c.t.y2b7CA),
                    ],
                }),
            })
          : (0, n.jsx)(a.G2e, {
                icon: v
                    ? () =>
                          (0, n.jsx)(a.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, n.jsx)(a.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: l.Z.colors.BACKGROUND_ACCENT.css,
                className: d.iconBadge,
            });
};
