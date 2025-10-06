n.d(t, { Z: () => d });
var r = n(951288),
    i = n(831209),
    l = n(442837),
    o = n(481060),
    s = n(597688),
    c = n(884697),
    a = n(388032),
    u = n(237680);
let d = (e) => {
    let { isPurchaseSection: t, isPremiumSection: n, canUsePremiumCollectibles: d, skuId: f } = e,
        p = (0, c.Yq)(f),
        m = (0, l.e7)([s.Z], () => {
            let e = s.Z.getProduct(f);
            return (0, c.G1)(e);
        });
    return t || (n && d)
        ? null
        : p
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
                icon: m
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
                color: i.Z.BACKGROUND_ACCENT,
                className: u.iconBadge,
            });
};
