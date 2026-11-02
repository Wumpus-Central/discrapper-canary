n.d(t, { A: () => b, s: () => E });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(17928),
    l = n(866665),
    u = n(62010),
    o = n(926321),
    d = n(318254),
    c = n(287809),
    I = n(24482),
    f = n(590180),
    v = n(298072),
    p = n(993408),
    g = n(466459),
    x = n(623373),
    m = n(561769),
    A = n(57020),
    _ = n(105292),
    h = n(31005);
function E(e) {
    let { className: t } = e;
    return (0, r.jsx)(l.m, {
        text: _.intl.string(_.t.dCou7i),
        children: (0, r.jsx)("div", {
            className: s()(t, h.$),
            children: (0, r.jsx)(u.E, {
                type: { text: _.intl.string(_.t["+drfVi"]) },
                variant: "inverted",
                icon: o.DiceIcon,
            }),
        }),
    });
}
function C(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: l, prioritizedCurrency: o } = e,
        { isPurchased: v, isPartiallyOwnedBundle: C } = (0, g.h)(t),
        b = (0, p.G0)(t),
        k = (0, a.bG)([f.A], () => f.A.getCategoryForProduct(t.skuId)),
        R = t.categoryWillUnpublishAt ?? k?.unpublishedAt,
        y = null != R ? (0, p.WU)(R) : null,
        j = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        T = I.Ay.canUseShopDiscounts(j),
        { isOrbExclusive: S } = (0, A.F)({ product: t, hasShopDiscount: T, prioritizedCurrency: o }),
        O = n;
    if (
        (null == O &&
            (null != i
                ? (O = m.AW.BADGE_OVERRIDE)
                : (0, x.JQ)(t)
                  ? (O = m.AW.DYNAMIC)
                  : (0, p.HF)(R)
                    ? (O = m.AW.LIMITED_TIME)
                    : !C && !v && (0, p.aT)(t.skuId)
                      ? (O = m.AW.NEW)
                      : S
                        ? (O = m.AW.ORBS_EXCLUSIVE)
                        : b && (O = m.AW.NITRO_EXCLUSIVE)),
        null == O || O === m.AW.NONE)
    )
        return null;
    if (O === m.AW.DYNAMIC) return (0, r.jsx)(E, { className: l });
    if (O === m.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)("div", {
            className: s()(l, h.$),
            children: (0, r.jsx)(u.E, { type: { text: _.intl.string(_.t["0TmQRG"]) }, variant: "inverted", icon: d.C }),
        });
    let V = null;
    switch (O) {
        case m.AW.LIMITED_TIME:
            if (null != y) {
                let e = y > 1 ? _.intl.formatToPlainString(_.t.Io7ozn, { days: y }) : _.intl.string(_.t.Bc13HF);
                V = (0, r.jsx)(u.E, { type: { text: e }, variant: "inverted" });
            } else V = (0, r.jsx)(u.E, { type: { text: _.intl.string(_.t["h/uBCR"]) }, variant: "inverted" });
            break;
        case m.AW.NEW:
            V = (0, r.jsx)(u.E, { type: "new", variant: "inverted" });
            break;
        case m.AW.NITRO_EXCLUSIVE:
            V = (0, r.jsx)(u.E, { type: { text: _.intl.string(_.t.X3Ekj8) }, variant: "inverted" });
            break;
        case m.AW.BADGE_OVERRIDE:
            null != i && "" !== i && (V = (0, r.jsx)(u.E, { type: { text: i }, variant: "inverted" }));
    }
    return null == V ? null : (0, r.jsx)("div", { className: s()(l, h.$), children: V });
}
let b = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s } = e,
        a = (0, m.Vm)(t),
        l = (0, v.Q)(a);
    if (null == a || a.hideBadge) return null;
    let u = (0, x.rb)(a, l);
    return (0, r.jsx)(C, {
        product: u,
        badgeOverride: n,
        productBadgeOverride: a.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
