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
    v = n(466459),
    x = n(623373),
    A = n(561769),
    m = n(57020),
    C = n(105292),
    _ = n(31005);
function h(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.m, {
        text: C.intl.string(C.t.dCou7i),
        children: (0, r.jsx)(o.Lp, {
            disableColor: !0,
            className: s()(t, _.$, _.C),
            text: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.DiceIcon, { size: "xxs", color: "currentColor" }),
                    C.intl.string(C.t["+drfVi"]),
                ],
            }),
        }),
    });
}
function E(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: a, prioritizedCurrency: u } = e,
        { isPurchased: p, isPartiallyOwnedBundle: E } = (0, v.h)(t),
        b = (0, g.G0)(t),
        R = (0, l.bG)([f.A], () => f.A.getCategoryForProduct(t.skuId)),
        k = t.categoryWillUnpublishAt ?? R?.unpublishedAt,
        y = null != k ? (0, g.WU)(k) : null,
        T = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        j = I.Ay.canUseShopDiscounts(T),
        { isOrbExclusive: S } = (0, m.F)({ product: t, hasShopDiscount: j, prioritizedCurrency: u }),
        O = n;
    if (
        (null == O &&
            (null != i
                ? (O = A.AW.BADGE_OVERRIDE)
                : (0, x.JQ)(t)
                  ? (O = A.AW.DYNAMIC)
                  : (0, g.HF)(k)
                    ? (O = A.AW.LIMITED_TIME)
                    : !E && !p && (0, g.aT)(t.skuId)
                      ? (O = A.AW.NEW)
                      : S
                        ? (O = A.AW.ORBS_EXCLUSIVE)
                        : b && (O = A.AW.NITRO_EXCLUSIVE)),
        null == O || O === A.AW.NONE)
    )
        return null;
    if (O === A.AW.DYNAMIC) return (0, r.jsx)(h, { className: a });
    if (O === A.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(o.Lp, {
            disableColor: !0,
            className: s()(a, _.$, _.C),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.C, { size: "xxs", color: "currentColor" }), C.intl.string(C.t["0TmQRG"])],
            }),
        });
    let L = null;
    switch (O) {
        case A.AW.LIMITED_TIME:
            L =
                null != y
                    ? y > 1
                        ? C.intl.formatToPlainString(C.t.Io7ozn, { days: y })
                        : C.intl.string(C.t.Bc13HF)
                    : C.intl.string(C.t["h/uBCR"]);
            break;
        case A.AW.NEW:
            L = C.intl.string(C.t.y2b7CA);
            break;
        case A.AW.NITRO_EXCLUSIVE:
            L = C.intl.string(C.t.X3Ekj8);
            break;
        case A.AW.BADGE_OVERRIDE:
            L = i;
    }
    return (0, r.jsx)(o.Lp, { text: L, disableColor: !0, className: s()(a, _.$) });
}
let b = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s } = e,
        l = (0, A.Vm)(t),
        a = (0, p.Q)(l);
    if (null == l || l.hideBadge) return null;
    let o = (0, x.rb)(l, a);
    return (0, r.jsx)(E, {
        product: o,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
