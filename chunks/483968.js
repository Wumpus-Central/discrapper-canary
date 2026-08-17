n.d(e, { A: () => A });
var l = n(477900),
    r = n(17928),
    i = n(661531),
    s = n(812993),
    a = n(194261),
    o = n(403581),
    c = n(590180),
    u = n(4227),
    d = n(993408),
    m = n(375708),
    x = n(893323);
let A = function (t) {
    let { skuId: e, canUsePremiumCollectibles: n, isPurchaseSection: A, isPremiumSection: h } = t,
        E = (0, d.aT)(e),
        L = (0, r.bG)([c.A, u.A], () => {
            let t = c.A.getProduct(e),
                n = u.A.getPurchase(e);
            return null != n ? (0, d.gA)(n) : (0, d.G0)(t);
        });
    return A || (h && n)
        ? null
        : E
          ? (0, l.jsx)(s.JI, {
                className: x.Ad,
                text: (0, l.jsxs)("div", {
                    className: x.rm,
                    children: [
                        (0, l.jsx)(a.LockIcon, { size: "xxs", color: "currentColor" }),
                        m.intl.string(m.t.y2b7CA),
                    ],
                }),
            })
          : (0, l.jsx)(s.fk, {
                icon: L
                    ? () => (0, l.jsx)(o.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, l.jsx)(a.LockIcon, { size: "xxs", color: "currentColor" }),
                color: i.A.colors.ICON_OVERLAY_DARK.css,
                className: x.bG,
                "aria-label": L ? m.intl.string(m.t.X3Ekj8) : m.intl.string(m.t.Ac5fm1),
            });
};
