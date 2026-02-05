n.d(t, { A: () => m });
var l = n(627968),
    i = n(311907),
    s = n(827734),
    r = n(397927),
    a = n(590180),
    c = n(4227),
    o = n(993408),
    u = n(985018),
    d = n(616198);
let m = (e) => {
    let { skuId: t, canUsePremiumCollectibles: n, isPurchaseSection: m, isPremiumSection: p } = e,
        x = (0, o.aT)(t),
        A = (0, i.bG)([a.A, c.A], () => {
            let e = a.A.getProduct(t),
                n = c.A.getPurchase(t);
            return null != n ? (0, o.gA)(n) : (0, o.G0)(e);
        });
    return m || (p && n)
        ? null
        : x
          ? (0, l.jsx)(r.JIr, {
                className: d.Ad,
                text: (0, l.jsxs)("div", {
                    className: d.rm,
                    children: [(0, l.jsx)(r.XAi, { size: "xxs", color: "currentColor" }), u.intl.string(u.t.y2b7CA)],
                }),
            })
          : (0, l.jsx)(r.fkz, {
                icon: A
                    ? () => (0, l.jsx)(r.tvc, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, l.jsx)(r.XAi, { size: "xxs", color: "currentColor" }),
                color: s.A.colors.BACKGROUND_MOD_STRONG.css,
                className: d.bG,
            });
};
