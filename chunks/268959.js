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
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: i,
            skipLimitedTimeCheck: o,
            className: c,
            prioritizedCurrency: g,
        } = e,
        { isPurchased: y, isPartiallyOwnedBundle: j } = (0, k.h)(t),
        T = (0, f.G0)(t),
        b = (0, a.bG)([x.A], () => x.A.getCategoryForProduct(t.skuId)),
        P = b?.unpublishedAt != null ? (0, f.WU)(b.unpublishedAt) : null,
        L = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        S = I.Ay.canUseShopDiscounts(L),
        { isOrbExclusive: O } = (0, _.F)({ product: t, hasShopDiscount: S, prioritizedCurrency: g }),
        N = (0, A.Do)("ProductCardBadgeInner") && t.type === l.R.PROFILE_FRAME,
        V = n;
    if (
        (null == V &&
            (N
                ? (V = v.AW.EARLY_ACCESS)
                : null != i
                  ? (V = v.AW.BADGE_OVERRIDE)
                  : (0, m.JQ)(t)
                    ? (V = v.AW.DYNAMIC)
                    : !o && (0, f.HF)(b?.unpublishedAt)
                      ? (V = v.AW.LIMITED_TIME)
                      : !j && !y && (0, f.aT)(t.skuId)
                        ? (V = v.AW.NEW)
                        : O
                          ? (V = v.AW.ORBS_EXCLUSIVE)
                          : T && (V = v.AW.NITRO_EXCLUSIVE)),
        null == V || V === v.AW.NONE)
    )
        return null;
    if (V === v.AW.EARLY_ACCESS)
        return (0, r.jsx)("span", {
            role: "img",
            "aria-label": h.intl.string(h.t["1m6qcO"]),
            className: s()(c, E.$l),
            children: (0, r.jsx)(d.t, { size: "sm", color: "currentColor" }),
        });
    if (V === v.AW.DYNAMIC) return (0, r.jsx)(R, { className: c });
    if (V === v.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(c, E.$5, E.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(C.C, { size: "xxs", color: "currentColor" }), h.intl.string(h.t["0TmQRG"])],
            }),
        });
    let M = null;
    switch (V) {
        case v.AW.LIMITED_TIME:
            M =
                null != P
                    ? P > 1
                        ? h.intl.formatToPlainString(h.t.Io7ozn, { days: P })
                        : h.intl.string(h.t.Bc13HF)
                    : h.intl.string(h.t["h/uBCR"]);
            break;
        case v.AW.NEW:
            M = h.intl.string(h.t.y2b7CA);
            break;
        case v.AW.NITRO_EXCLUSIVE:
            M = h.intl.string(h.t.X3Ekj8);
            break;
        case v.AW.BADGE_OVERRIDE:
            M = i;
    }
    return (0, r.jsx)(u.Lp, { text: M, disableColor: !0, className: s()(c, E.$5) });
}
let j = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, skipLimitedTimeCheck: l } = e,
        a = (0, v.Vm)(t),
        o = (0, g.Q)(a);
    if (null == a || a.hideBadge) return null;
    let u = (0, m.rb)(a, o);
    return (0, r.jsx)(y, {
        product: u,
        badgeOverride: n,
        productBadgeOverride: a.badgeOverride,
        skipLimitedTimeCheck: l,
        className: i,
        prioritizedCurrency: s,
    });
};
