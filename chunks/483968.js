l.d(t, { A: () => x });
var a = l(627968),
    s = l(311907),
    r = l(827734),
    i = l(777666),
    n = l(194261),
    c = l(403581),
    d = l(590180),
    o = l(4227),
    u = l(993408),
    m = l(985018),
    p = l(386339);
let x = (e) => {
    let { skuId: t, canUsePremiumCollectibles: l, isPurchaseSection: x, isPremiumSection: _ } = e,
        h = (0, u.aT)(t),
        A = (0, s.bG)([d.A, o.A], () => {
            let e = d.A.getProduct(t),
                l = o.A.getPurchase(t);
            return null != l ? (0, u.gA)(l) : (0, u.G0)(e);
        });
    return x || (_ && l)
        ? null
        : h
          ? (0, a.jsx)(i.JI, {
                className: p.Ad,
                text: (0, a.jsxs)("div", {
                    className: p.rm,
                    children: [(0, a.jsx)(n.X, { size: "xxs", color: "currentColor" }), m.intl.string(m.t.y2b7CA)],
                }),
            })
          : (0, a.jsx)(i.fk, {
                icon: A
                    ? () => (0, a.jsx)(c.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, a.jsx)(n.X, { size: "xxs", color: "currentColor" }),
                color: r.A.colors.BACKGROUND_MOD_STRONG.css,
                className: p.bG,
            });
};
