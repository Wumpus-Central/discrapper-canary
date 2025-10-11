n.d(t, { Z: () => u });
var i = n(951288),
    r = n(831209),
    l = n(442837),
    a = n(481060),
    s = n(597688),
    o = n(884697),
    d = n(388032),
    c = n(71414);
let u = (e) => {
    let { isPurchaseSection: t, isPremiumSection: n, canUsePremiumCollectibles: u, skuId: p } = e,
        _ = (0, o.Yq)(p),
        h = (0, l.e7)([s.Z], () => {
            let e = s.Z.getProduct(p);
            return (0, o.G1)(e);
        });
    return t || (n && u)
        ? null
        : _
          ? (0, i.jsx)(a.lBU, {
                className: c.newBadge,
                text: (0, i.jsxs)("div", {
                    className: c.newBadgeText,
                    children: [
                        (0, i.jsx)(a.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        d.intl.string(d.t.y2b7CA),
                    ],
                }),
            })
          : (0, i.jsx)(a.G2e, {
                icon: h
                    ? () =>
                          (0, i.jsx)(a.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, i.jsx)(a.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: r.Z.BACKGROUND_ACCENT,
                className: c.iconBadge,
            });
};
