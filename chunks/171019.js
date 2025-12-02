n.d(t, { Z: () => d });
var r = n(54381),
    i = n(442837),
    l = n(692547),
    o = n(481060),
    s = n(597688),
    c = n(884697),
    a = n(388032),
    u = n(71414);
let d = (e) => {
    let { skuId: t, canUsePremiumCollectibles: n, isTryItOut: d, isPurchaseSection: f, isPremiumSection: p } = e,
        m = (0, c.Yq)(t),
        g = (0, i.e7)([s.Z], () => {
            let e = s.Z.getProduct(t);
            return (0, c.G1)(e);
        });
    return f || (p && (n || d))
        ? null
        : m
          ? (0, r.jsx)(o.lBU, {
                className: u.newBadge,
                text: (0, r.jsxs)("div", {
                    className: u.newBadgeText,
                    children: [
                        (0, r.jsx)(o.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        a.intl.string(a.t.y2b7CA),
                    ],
                }),
            })
          : (0, r.jsx)(o.G2e, {
                icon: g
                    ? () =>
                          (0, r.jsx)(o.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, r.jsx)(o.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: l.Z.colors.BACKGROUND_ACCENT.css,
                className: u.iconBadge,
            });
};
