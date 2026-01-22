r.d(t, {
    A: () => m,
});
var n = r(627968),
    l = r(311907),
    i = r(827734),
    a = r(397927),
    s = r(590180),
    c = r(4227),
    o = r(993408),
    u = r(985018),
    d = r(616198);
let m = (e) => {
    let { skuId: t, canUsePremiumCollectibles: r, isPurchaseSection: m, isPremiumSection: p } = e,
        x = (0, o.aT)(t),
        g = (0, l.bG)([s.A, c.A], () => {
            let e = s.A.getProduct(t),
                r = c.A.getPurchase(t);
            return null != r ? (0, o.gA)(r) : (0, o.G0)(e);
        });
    return m || (p && r)
        ? null
        : x
          ? (0, n.jsx)(a.JIr, {
                className: d.Ad,
                text: (0, n.jsxs)("div", {
                    className: d.rm,
                    children: [
                        (0, n.jsx)(a.XAi, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        u.intl.string(u.t.y2b7CA),
                    ],
                }),
            })
          : (0, n.jsx)(a.fkz, {
                icon: g
                    ? () =>
                          (0, n.jsx)(a.tvc, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, n.jsx)(a.XAi, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: i.A.colors.BACKGROUND_MOD_STRONG.css,
                className: d.bG,
            });
};
