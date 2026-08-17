n.d(t, { A: () => y, s: () => k });
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
    p = n(318254),
    g = n(287809),
    I = n(158045),
    _ = n(590180),
    C = n(298072),
    A = n(993408),
    f = n(13875),
    m = n(466459),
    E = n(623373),
    h = n(561769),
    v = n(57020),
    x = n(375708),
    R = n(391226);
function k(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.m, {
        text: x.intl.string(x.t.dCou7i),
        children: (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(t, R.$5, R.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.DiceIcon, { size: "xxs", color: "currentColor" }),
                    x.intl.string(x.t["+drfVi"]),
                ],
            }),
        }),
    });
}
function b(e) {
    let { product: t, badgeOverride: n, productBadgeOverride: i, className: o, prioritizedCurrency: c } = e,
        { isPurchased: C, isPartiallyOwnedBundle: b } = (0, m.h)(t),
        y = (0, A.G0)(t),
        S = (0, a.bG)([_.A], () => _.A.getCategoryForProduct(t.skuId)),
        L = S?.unpublishedAt != null ? (0, A.WU)(S.unpublishedAt) : null,
        O = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        T = I.Ay.canUseShopDiscounts(O),
        { isOrbExclusive: j } = (0, v.F)({ product: t, hasShopDiscount: T, prioritizedCurrency: c }),
        P = (0, f.Do)("ProductCardBadgeInner") && t.type === l.R.PROFILE_FRAME,
        V = n;
    if (
        (null == V &&
            (P
                ? (V = h.AW.EARLY_ACCESS)
                : null != i
                  ? (V = h.AW.BADGE_OVERRIDE)
                  : (0, E.JQ)(t)
                    ? (V = h.AW.DYNAMIC)
                    : (0, A.HF)(S?.unpublishedAt)
                      ? (V = h.AW.LIMITED_TIME)
                      : !b && !C && (0, A.aT)(t.skuId)
                        ? (V = h.AW.NEW)
                        : j
                          ? (V = h.AW.ORBS_EXCLUSIVE)
                          : y && (V = h.AW.NITRO_EXCLUSIVE)),
        null == V || V === h.AW.NONE)
    )
        return null;
    if (V === h.AW.EARLY_ACCESS)
        return (0, r.jsx)("span", {
            role: "img",
            "aria-label": x.intl.string(x.t["1m6qcO"]),
            className: s()(o, R.$l),
            children: (0, r.jsx)(d.t, { size: "sm", color: "currentColor" }),
        });
    if (V === h.AW.DYNAMIC) return (0, r.jsx)(k, { className: o });
    if (V === h.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(o, R.$5, R.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(p.C, { size: "xxs", color: "currentColor" }), x.intl.string(x.t["0TmQRG"])],
            }),
        });
    let N = null;
    switch (V) {
        case h.AW.LIMITED_TIME:
            N =
                null != L
                    ? L > 1
                        ? x.intl.formatToPlainString(x.t.Io7ozn, { days: L })
                        : x.intl.string(x.t.Bc13HF)
                    : x.intl.string(x.t["h/uBCR"]);
            break;
        case h.AW.NEW:
            N = x.intl.string(x.t.y2b7CA);
            break;
        case h.AW.NITRO_EXCLUSIVE:
            N = x.intl.string(x.t.X3Ekj8);
            break;
        case h.AW.BADGE_OVERRIDE:
            N = i;
    }
    return (0, r.jsx)(u.Lp, { text: N, disableColor: !0, className: s()(o, R.$5) });
}
let y = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s } = e,
        l = (0, h.Vm)(t),
        a = (0, C.Q)(l);
    if (null == l || l.hideBadge) return null;
    let o = (0, E.rb)(l, a);
    return (0, r.jsx)(b, {
        product: o,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
