n.d(t, { A: () => b, s: () => h });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    l = n(17928),
    a = n(866665),
    o = n(812993),
    u = n(926321),
    d = n(318254),
    c = n(287809),
    I = n(158045),
    f = n(590180),
    p = n(298072),
    g = n(993408),
    A = n(466459),
    v = n(623373),
    x = n(561769),
    C = n(57020),
    m = n(375708),
    _ = n(31005);
function h(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.m, {
        text: m.intl.string(m.t.dCou7i),
        children: (0, r.jsx)(o.Lp, {
            disableColor: !0,
            className: s()(t, _.$, _.C),
            text: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.DiceIcon, { size: "xxs", color: "currentColor" }),
                    m.intl.string(m.t["+drfVi"]),
                ],
            }),
        }),
    });
}
function E(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: a, prioritizedCurrency: u } = e,
        { isPurchased: p, isPartiallyOwnedBundle: E } = (0, A.h)(t),
        b = (0, g.G0)(t),
        R = (0, l.bG)([f.A], () => f.A.getCategoryForProduct(t.skuId)),
        k = R?.unpublishedAt != null ? (0, g.WU)(R.unpublishedAt) : null,
        y = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        T = I.Ay.canUseShopDiscounts(y),
        { isOrbExclusive: S } = (0, C.F)({ product: t, hasShopDiscount: T, prioritizedCurrency: u }),
        j = n;
    if (
        (null == j &&
            (null != i
                ? (j = x.AW.BADGE_OVERRIDE)
                : (0, v.JQ)(t)
                  ? (j = x.AW.DYNAMIC)
                  : (0, g.HF)(R?.unpublishedAt)
                    ? (j = x.AW.LIMITED_TIME)
                    : !E && !p && (0, g.aT)(t.skuId)
                      ? (j = x.AW.NEW)
                      : S
                        ? (j = x.AW.ORBS_EXCLUSIVE)
                        : b && (j = x.AW.NITRO_EXCLUSIVE)),
        null == j || j === x.AW.NONE)
    )
        return null;
    if (j === x.AW.DYNAMIC) return (0, r.jsx)(h, { className: a });
    if (j === x.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(o.Lp, {
            disableColor: !0,
            className: s()(a, _.$, _.C),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.C, { size: "xxs", color: "currentColor" }), m.intl.string(m.t["0TmQRG"])],
            }),
        });
    let L = null;
    switch (j) {
        case x.AW.LIMITED_TIME:
            L =
                null != k
                    ? k > 1
                        ? m.intl.formatToPlainString(m.t.Io7ozn, { days: k })
                        : m.intl.string(m.t.Bc13HF)
                    : m.intl.string(m.t["h/uBCR"]);
            break;
        case x.AW.NEW:
            L = m.intl.string(m.t.y2b7CA);
            break;
        case x.AW.NITRO_EXCLUSIVE:
            L = m.intl.string(m.t.X3Ekj8);
            break;
        case x.AW.BADGE_OVERRIDE:
            L = i;
    }
    return (0, r.jsx)(o.Lp, { text: L, disableColor: !0, className: s()(a, _.$) });
}
let b = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s } = e,
        l = (0, x.Vm)(t),
        a = (0, p.Q)(l);
    if (null == l || l.hideBadge) return null;
    let o = (0, v.rb)(l, a);
    return (0, r.jsx)(E, {
        product: o,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
