l.d(t, { A: () => m });
var n = l(627968),
    r = l(311907),
    i = l(827734),
    s = l(397927),
    a = l(590180),
    c = l(4227),
    o = l(993408),
    u = l(985018),
    d = l(616198);
let m = (e) => {
    let { skuId: t, canUsePremiumCollectibles: l, isPurchaseSection: m, isPremiumSection: p } = e,
        x = (0, o.aT)(t),
        g = (0, r.bG)([a.A, c.A], () => {
            let e = a.A.getProduct(t),
                l = c.A.getPurchase(t);
            return null != l ? (0, o.gA)(l) : (0, o.G0)(e);
        });
    return m || (p && l)
        ? null
        : x
          ? (0, n.jsx)(s.JIr, {
                className: d.Ad,
                text: (0, n.jsxs)("div", {
                    className: d.rm,
                    children: [
                        (0, n.jsx)(s.XAi, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        u.intl.string(u.t.y2b7CA),
                    ],
                }),
            })
          : (0, n.jsx)(s.fkz, {
                icon: g
                    ? () =>
                          (0, n.jsx)(s.tvc, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                          })
                    : () =>
                          (0, n.jsx)(s.XAi, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                color: i.A.colors.BACKGROUND_MOD_STRONG.css,
                className: d.bG,
            });
};
