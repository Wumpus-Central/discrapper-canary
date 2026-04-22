"use strict";
r.d(t, { A: () => f });
var i = r(627968),
    n = r(311907),
    s = r(827734),
    a = r(777666),
    l = r(194261),
    c = r(403581),
    o = r(590180),
    d = r(4227),
    u = r(993408),
    p = r(985018),
    _ = r(386339);
let f = (e) => {
    let { skuId: t, canUsePremiumCollectibles: r, isPurchaseSection: f, isPremiumSection: h } = e,
        m = (0, u.aT)(t),
        g = (0, n.bG)([o.A, d.A], () => {
            let e = o.A.getProduct(t),
                r = d.A.getPurchase(t);
            return null != r ? (0, u.gA)(r) : (0, u.G0)(e);
        });
    return f || (h && r)
        ? null
        : m
          ? (0, i.jsx)(a.JI, {
                className: _.Ad,
                text: (0, i.jsxs)("div", {
                    className: _.rm,
                    children: [(0, i.jsx)(l.X, { size: "xxs", color: "currentColor" }), p.intl.string(p.t.y2b7CA)],
                }),
            })
          : (0, i.jsx)(a.fk, {
                icon: g
                    ? () => (0, i.jsx)(c.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, i.jsx)(l.X, { size: "xxs", color: "currentColor" }),
                color: s.A.colors.BACKGROUND_MOD_STRONG.css,
                className: _.bG,
            });
};
