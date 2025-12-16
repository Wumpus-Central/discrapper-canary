n.d(t, { Z: () => m });
var r = n(54381),
    i = n(442837),
    l = n(692547),
    a = n(481060),
    s = n(597688),
    o = n(1870),
    c = n(884697),
    d = n(388032),
    u = n(426602);
let m = (e) => {
    let { skuId: t, canUsePremiumCollectibles: n, isPurchaseSection: m, isPremiumSection: p } = e,
        h = (0, c.Yq)(t),
        x = (0, i.e7)([s.Z, o.Z], () => {
            let e = s.Z.getProduct(t),
                n = o.Z.getPurchase(t);
            return null != n ? (0, c.qS)(n) : (0, c.G1)(e);
        });
    return m || (p && n)
        ? null
        : h
          ? (0, r.jsx)(a.lBU, {
                className: u.newBadge,
                text: (0, r.jsxs)("div", {
                    className: u.newBadgeText,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        d.intl.string(d.t.y2b7CA),
                    ],
                }),
            })
          : (0, r.jsx)(a.G2e, {
                icon: x
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
                className: u.iconBadge,
            });
};
