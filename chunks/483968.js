n.d(t, { A: () => E });
var l = n(477900),
    r = n(17928),
    i = n(661531),
    o = n(62010),
    s = n(194261),
    a = n(812993),
    c = n(403581),
    u = n(590180),
    d = n(4227),
    m = n(993408),
    A = n(105292),
    f = n(623672);
let E = function (e) {
    let { skuId: t, canUsePremiumCollectibles: n, isPurchaseSection: E, isPremiumSection: h } = e,
        x = (0, m.aT)(t),
        p = (0, r.bG)([u.A, d.A], () => {
            let e = u.A.getProduct(t),
                n = d.A.getPurchase(t);
            return null != n ? (0, m.gA)(n) : (0, m.G0)(e);
        });
    return E || (h && n)
        ? null
        : x
          ? (0, l.jsx)("div", {
                className: f.A,
                children: (0, l.jsx)(o.E, { type: "new", variant: "premium", icon: s.LockIcon }),
            })
          : (0, l.jsx)(a.fk, {
                icon: p
                    ? () => (0, l.jsx)(c.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, l.jsx)(s.LockIcon, { size: "xxs", color: "currentColor" }),
                color: i.A.colors.ICON_OVERLAY_DARK.css,
                className: f.b,
                "aria-label": p ? A.intl.string(A.t.X3Ekj8) : A.intl.string(A.t.Ac5fm1),
            });
};
