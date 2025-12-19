n.d(t, { Z: () => f });
var r = n(54381),
    i = n(442837),
    l = n(692547),
    o = n(481060),
    s = n(597688),
    c = n(1870),
    a = n(884697),
    u = n(388032),
    d = n(426602);
let f = (e) => {
    let { skuId: t, canUsePremiumCollectibles: n, isPurchaseSection: f, isPremiumSection: p } = e,
        m = (0, a.Yq)(t),
        g = (0, i.e7)([s.Z, c.Z], () => {
            let e = s.Z.getProduct(t),
                n = c.Z.getPurchase(t);
            return null != n ? (0, a.qS)(n) : (0, a.G1)(e);
        });
    return f || (p && n)
        ? null
        : m
          ? (0, r.jsx)(o.lBU, {
                className: d.newBadge,
                text: (0, r.jsxs)("div", {
                    className: d.newBadgeText,
                    children: [
                        (0, r.jsx)(o.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        u.intl.string(u.t.y2b7CA),
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
                className: d.iconBadge,
            });
};
