n.d(t, { A: () => E });
var l = n(477900),
    r = n(17928),
    i = n(661531),
    s = n(62010),
    a = n(194261),
    o = n(812993),
    c = n(403581),
    u = n(590180),
    d = n(4227),
    m = n(993408),
    x = n(105292),
    A = n(623672);
let E = function (e) {
    let { skuId: t, canUsePremiumCollectibles: n, isPurchaseSection: E, isPremiumSection: f } = e,
        h = (0, m.aT)(t),
        p = (0, r.bG)([u.A, d.A], () => {
            let e = u.A.getProduct(t),
                n = d.A.getPurchase(t);
            return null != n ? (0, m.gA)(n) : (0, m.G0)(e);
        });
    return E || (f && n)
        ? null
        : h
          ? (0, l.jsx)("div", {
                className: A.A,
                children: (0, l.jsx)(s.E, { type: "new", variant: "premium", icon: a.LockIcon }),
            })
          : (0, l.jsx)(o.fk, {
                icon: p
                    ? () => (0, l.jsx)(c.t, { size: "custom", color: "currentColor", width: 14, height: 14 })
                    : () => (0, l.jsx)(a.LockIcon, { size: "xxs", color: "currentColor" }),
                color: i.A.colors.ICON_OVERLAY_DARK.css,
                className: A.b,
                "aria-label": p ? x.intl.string(x.t.X3Ekj8) : x.intl.string(x.t.Ac5fm1),
            });
};
