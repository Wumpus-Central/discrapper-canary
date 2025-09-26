r.d(t, { Z: () => u });
var n = r(951288),
    i = r(831209),
    a = r(442837),
    l = r(481060),
    o = r(597688),
    s = r(884697),
    c = r(388032),
    d = r(71414);
let u = (e) => {
    let { isPurchaseSection: t, isPremiumSection: r, canUsePremiumCollectibles: u, skuId: p } = e,
        _ = (0, s.Yq)(p),
        m = (0, a.e7)([o.Z], () => {
            let e = o.Z.getProduct(p);
            return (0, s.G1)(e);
        });
    return t || (r && u)
        ? null
        : _
          ? (0, n.jsx)(l.lBU, {
                className: d.newBadge,
                text: (0, n.jsxs)("div", {
                    className: d.newBadgeText,
                    children: [
                        (0, n.jsx)(l.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        c.intl.string(c.t.y2b7CA),
                    ],
                }),
            })
          : (0, n.jsx)(l.G2e, {
                icon: m
                    ? () =>
                          (0, n.jsx)(l.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, n.jsx)(l.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: i.Z.BACKGROUND_ACCENT,
                className: d.iconBadge,
            });
};
