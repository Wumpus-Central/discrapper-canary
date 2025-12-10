n.d(t, { Z: () => u });
var r = n(54381),
    i = n(442837),
    l = n(692547),
    a = n(481060),
    s = n(597688),
    o = n(884697),
    c = n(388032),
    d = n(71414);
let u = (e) => {
    let { skuId: t, canUsePremiumCollectibles: n, isPurchaseSection: u, isPremiumSection: m } = e,
        p = (0, o.Yq)(t),
        h = (0, i.e7)([s.Z], () => {
            let e = s.Z.getProduct(t);
            return (0, o.G1)(e);
        });
    return u || (m && n)
        ? null
        : p
          ? (0, r.jsx)(a.lBU, {
                className: d.newBadge,
                text: (0, r.jsxs)("div", {
                    className: d.newBadgeText,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        c.intl.string(c.t.y2b7CA),
                    ],
                }),
            })
          : (0, r.jsx)(a.G2e, {
                icon: h
                    ? () =>
                          (0, r.jsx)(a.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, r.jsx)(a.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: l.Z.colors.BACKGROUND_ACCENT.css,
                className: d.iconBadge,
            });
};
