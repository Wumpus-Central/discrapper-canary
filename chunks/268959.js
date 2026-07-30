n.d(t, { A: () => j, s: () => R });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    l = n(575593),
    a = n(17928),
    o = n(866665),
    u = n(812993),
    c = n(926321),
    d = n(403581),
    C = n(318254),
    p = n(287809),
    I = n(428262),
    x = n(590180),
    g = n(298072),
    f = n(993408),
    A = n(13875),
    k = n(466459),
    m = n(623373),
    v = n(561769),
    _ = n(57020),
    h = n(375708),
    E = n(391226);
function R(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.m, {
        text: h.intl.string(h.t.dCou7i),
        children: (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(t, E.$5, E.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.j, { size: "xxs", color: "currentColor" }), h.intl.string(h.t["+drfVi"])],
            }),
        }),
    });
}
function y(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: o, prioritizedCurrency: c } = e,
        { isPurchased: g, isPartiallyOwnedBundle: y } = (0, k.h)(t),
        j = (0, f.G0)(t),
        T = (0, a.bG)([x.A], () => x.A.getCategoryForProduct(t.skuId)),
        b = T?.unpublishedAt != null ? (0, f.WU)(T.unpublishedAt) : null,
        P = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        L = I.Ay.canUseShopDiscounts(P),
        { isOrbExclusive: S } = (0, _.F)({ product: t, hasShopDiscount: L, prioritizedCurrency: c }),
        O = (0, A.Do)("ProductCardBadgeInner") && t.type === l.R.PROFILE_FRAME,
        N = n;
    if (
        (null == N &&
            (O
                ? (N = v.AW.EARLY_ACCESS)
                : null != i
                  ? (N = v.AW.BADGE_OVERRIDE)
                  : (0, m.JQ)(t)
                    ? (N = v.AW.DYNAMIC)
                    : (0, f.HF)(T?.unpublishedAt)
                      ? (N = v.AW.LIMITED_TIME)
                      : !y && !g && (0, f.aT)(t.skuId)
                        ? (N = v.AW.NEW)
                        : S
                          ? (N = v.AW.ORBS_EXCLUSIVE)
                          : j && (N = v.AW.NITRO_EXCLUSIVE)),
        null == N || N === v.AW.NONE)
    )
        return null;
    if (N === v.AW.EARLY_ACCESS)
        return (0, r.jsx)("span", {
            role: "img",
            "aria-label": h.intl.string(h.t["1m6qcO"]),
            className: s()(o, E.$l),
            children: (0, r.jsx)(d.t, { size: "sm", color: "currentColor" }),
        });
    if (N === v.AW.DYNAMIC) return (0, r.jsx)(R, { className: o });
    if (N === v.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(o, E.$5, E.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(C.C, { size: "xxs", color: "currentColor" }), h.intl.string(h.t["0TmQRG"])],
            }),
        });
    let V = null;
    switch (N) {
        case v.AW.LIMITED_TIME:
            V =
                null != b
                    ? b > 1
                        ? h.intl.formatToPlainString(h.t.Io7ozn, { days: b })
                        : h.intl.string(h.t.Bc13HF)
                    : h.intl.string(h.t["h/uBCR"]);
            break;
        case v.AW.NEW:
            V = h.intl.string(h.t.y2b7CA);
            break;
        case v.AW.NITRO_EXCLUSIVE:
            V = h.intl.string(h.t.X3Ekj8);
            break;
        case v.AW.BADGE_OVERRIDE:
            V = i;
    }
    return (0, r.jsx)(u.Lp, { text: V, disableColor: !0, className: s()(o, E.$5) });
}
let j = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s } = e,
        l = (0, v.Vm)(t),
        a = (0, g.Q)(l);
    if (null == l || l.hideBadge) return null;
    let o = (0, m.rb)(l, a);
    return (0, r.jsx)(y, {
        product: o,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
