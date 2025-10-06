n.d(t, { Z: () => u });
var r = n(951288),
    i = n(831209),
    a = n(442837),
    l = n(481060),
    o = n(597688),
    s = n(884697),
    c = n(388032),
    d = n(71414);
let u = (e) => {
    let { isPurchaseSection: t, isPremiumSection: n, canUsePremiumCollectibles: u, skuId: p } = e,
        _ = (0, s.Yq)(p),
        m = (0, a.e7)([o.Z], () => {
            let e = o.Z.getProduct(p);
            return (0, s.G1)(e);
        });
    return t || (n && u)
        ? null
        : _
          ? (0, r.jsx)(l.lBU, {
                className: d.newBadge,
                text: (0, r.jsxs)("div", {
                    className: d.newBadgeText,
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        c.intl.string(c.t.y2b7CA),
                    ],
                }),
            })
          : (0, r.jsx)(l.G2e, {
                icon: m
                    ? () =>
                          (0, r.jsx)(l.SrA, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, r.jsx)(l.mBM, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: i.Z.BACKGROUND_ACCENT,
                className: d.iconBadge,
            });
};
