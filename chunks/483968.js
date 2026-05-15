l.d(e, { A: () => A });
var n = l(627968),
    r = l(17928),
    i = l(661531),
    s = l(777666),
    a = l(194261),
    o = l(403581),
    c = l(590180),
    d = l(4227),
    u = l(993408),
    m = l(375708),
    x = l(386339);
let A = (t) => {
    let { skuId: e, canUsePremiumCollectibles: l, isPurchaseSection: A, isPremiumSection: E } = t,
        h = (0, u.aT)(e),
        L = (0, r.bG)([c.A, d.A], () => {
            let t = c.A.getProduct(e),
                l = d.A.getPurchase(e);
            return null != l ? (0, u.gA)(l) : (0, u.G0)(t);
        });
    return A || (E && l)
        ? null
        : h
          ? (0, n.jsx)(s.JI, {
                className: x.Ad,
                text: (0, n.jsxs)("div", {
                    className: x.rm,
                    children: [(0, n.jsx)(a.X, { size: "xxs", color: "currentColor" }), m.intl.string(m.t.y2b7CA)],
                }),
            })
          : (0, n.jsx)(s.fk, {
                icon: L
                    ? () => (0, n.jsx)(o.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, n.jsx)(a.X, { size: "xxs", color: "currentColor" }),
                color: i.A.colors.ICON_OVERLAY_DARK.css,
                className: x.bG,
                "aria-label": L ? m.intl.string(m.t.X3Ekj8) : m.intl.string(m.t.Ac5fm1),
            });
};
