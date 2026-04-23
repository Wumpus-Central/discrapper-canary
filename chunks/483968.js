l.d(t, { A: () => p });
var r = l(627968),
    a = l(311907),
    s = l(827734),
    n = l(777666),
    i = l(194261),
    c = l(403581),
    o = l(590180),
    u = l(4227),
    d = l(993408),
    m = l(985018),
    A = l(651491);
let p = (e) => {
    let { skuId: t, canUsePremiumCollectibles: l, isPurchaseSection: p, isPremiumSection: _ } = e,
        h = (0, d.aT)(t),
        g = (0, a.bG)([o.A, u.A], () => {
            let e = o.A.getProduct(t),
                l = u.A.getPurchase(t);
            return null != l ? (0, d.gA)(l) : (0, d.G0)(e);
        });
    return p || (_ && l)
        ? null
        : h
          ? (0, r.jsx)(n.JI, {
                className: A.Ad,
                text: (0, r.jsxs)("div", {
                    className: A.rm,
                    children: [(0, r.jsx)(i.X, { size: "xxs", color: "currentColor" }), m.intl.string(m.t.y2b7CA)],
                }),
            })
          : (0, r.jsx)(n.fk, {
                icon: g
                    ? () => (0, r.jsx)(c.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, r.jsx)(i.X, { size: "xxs", color: "currentColor" }),
                color: s.A.colors.BACKGROUND_MOD_STRONG.css,
                className: A.bG,
            });
};
