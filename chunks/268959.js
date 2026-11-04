n.d(t, { A: () => b, s: () => x });
var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    s = n(17928),
    a = n(866665),
    u = n(62010),
    o = n(926321),
    d = n(318254),
    c = n(287809),
    f = n(24482),
    I = n(590180),
    v = n(298072),
    p = n(993408),
    m = n(466459),
    A = n(623373),
    g = n(561769),
    E = n(57020),
    h = n(105292),
    _ = n(31005);
function x(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.m, {
        text: h.intl.string(h.t.dCou7i),
        children: (0, r.jsx)("div", {
            className: l()(t, _.$),
            children: (0, r.jsx)(u.E, {
                type: { text: h.intl.string(h.t["+drfVi"]) },
                variant: "inverted",
                icon: o.DiceIcon,
            }),
        }),
    });
}
function C(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: a, prioritizedCurrency: o } = e,
        { isPurchased: v, isPartiallyOwnedBundle: C } = (0, m.h)(t),
        b = (0, p.G0)(t),
        R = (0, s.bG)([I.A], () => I.A.getCategoryForProduct(t.skuId)),
        k = t.categoryWillUnpublishAt ?? R?.unpublishedAt,
        y = null != k ? (0, p.WU)(k) : null,
        S = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        T = f.Ay.canUseShopDiscounts(S),
        { isOrbExclusive: j } = (0, E.F)({ product: t, hasShopDiscount: T, prioritizedCurrency: o }),
        O = n;
    if (
        (null == O &&
            (null != i
                ? (O = g.AW.BADGE_OVERRIDE)
                : (0, A.JQ)(t)
                  ? (O = g.AW.DYNAMIC)
                  : (0, p.HF)(k)
                    ? (O = g.AW.LIMITED_TIME)
                    : !C && !v && (0, p.aT)(t.skuId)
                      ? (O = g.AW.NEW)
                      : j
                        ? (O = g.AW.ORBS_EXCLUSIVE)
                        : b && (O = g.AW.NITRO_EXCLUSIVE)),
        null == O || O === g.AW.NONE)
    )
        return null;
    if (O === g.AW.DYNAMIC) return (0, r.jsx)(x, { className: a });
    if (O === g.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)("div", {
            className: l()(a, _.$),
            children: (0, r.jsx)(u.E, { type: { text: h.intl.string(h.t["0TmQRG"]) }, variant: "inverted", icon: d.C }),
        });
    let P = null;
    switch (O) {
        case g.AW.LIMITED_TIME:
            if (null != y) {
                let e = y > 1 ? h.intl.formatToPlainString(h.t.Io7ozn, { days: y }) : h.intl.string(h.t.Bc13HF);
                P = (0, r.jsx)(u.E, { type: { text: e }, variant: "inverted" });
            } else P = (0, r.jsx)(u.E, { type: { text: h.intl.string(h.t["h/uBCR"]) }, variant: "inverted" });
            break;
        case g.AW.NEW:
            P = (0, r.jsx)(u.E, { type: "new", variant: "inverted" });
            break;
        case g.AW.NITRO_EXCLUSIVE:
            P = (0, r.jsx)(u.E, { type: { text: h.intl.string(h.t.X3Ekj8) }, variant: "inverted" });
            break;
        case g.AW.BADGE_OVERRIDE:
            null != i && "" !== i && (P = (0, r.jsx)(u.E, { type: { text: i }, variant: "inverted" }));
    }
    return null == P ? null : (0, r.jsx)("div", { className: l()(a, _.$), children: P });
}
let b = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: l } = e,
        s = (0, g.Vm)(t),
        a = (0, v.Q)(s);
    if (null == s || s.hideBadge) return null;
    let u = (0, A.rb)(s, a);
    return (0, r.jsx)(C, {
        product: u,
        badgeOverride: n,
        productBadgeOverride: s.badgeOverride,
        className: i,
        prioritizedCurrency: l,
    });
};
