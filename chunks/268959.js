r.d(t, { A: () => y, s: () => k });
var n = r(477900);
r(582128);
var i = r(503698),
    s = r.n(i),
    l = r(575593),
    a = r(17928),
    o = r(866665),
    u = r(812993),
    c = r(926321),
    d = r(403581),
    p = r(318254),
    g = r(287809),
    f = r(158045),
    I = r(590180),
    _ = r(298072),
    A = r(993408),
    C = r(13875),
    m = r(466459),
    v = r(623373),
    E = r(561769),
    h = r(57020),
    x = r(375708),
    R = r(31005);
function k(e) {
    let { className: t } = e;
    return (0, n.jsx)(o.m, {
        text: x.intl.string(x.t.dCou7i),
        children: (0, n.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(t, R.$5, R.Cz),
            text: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(c.DiceIcon, { size: "xxs", color: "currentColor" }),
                    x.intl.string(x.t["+drfVi"]),
                ],
            }),
        }),
    });
}
function b(e) {
    let { product: t, badgeOverride: r, productBadgeOverride: i, className: o, prioritizedCurrency: c } = e,
        { isPurchased: _, isPartiallyOwnedBundle: b } = (0, m.h)(t),
        y = (0, A.G0)(t),
        S = (0, a.bG)([I.A], () => I.A.getCategoryForProduct(t.skuId)),
        L = S?.unpublishedAt != null ? (0, A.WU)(S.unpublishedAt) : null,
        P = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        T = f.Ay.canUseShopDiscounts(P),
        { isOrbExclusive: O } = (0, h.F)({ product: t, hasShopDiscount: T, prioritizedCurrency: c }),
        j = (0, C.Do)("ProductCardBadgeInner") && t.type === l.R.PROFILE_FRAME,
        V = r;
    if (
        (null == V &&
            (j
                ? (V = E.AW.EARLY_ACCESS)
                : null != i
                  ? (V = E.AW.BADGE_OVERRIDE)
                  : (0, v.JQ)(t)
                    ? (V = E.AW.DYNAMIC)
                    : (0, A.HF)(S?.unpublishedAt)
                      ? (V = E.AW.LIMITED_TIME)
                      : !b && !_ && (0, A.aT)(t.skuId)
                        ? (V = E.AW.NEW)
                        : O
                          ? (V = E.AW.ORBS_EXCLUSIVE)
                          : y && (V = E.AW.NITRO_EXCLUSIVE)),
        null == V || V === E.AW.NONE)
    )
        return null;
    if (V === E.AW.EARLY_ACCESS)
        return (0, n.jsx)("span", {
            role: "img",
            "aria-label": x.intl.string(x.t["1m6qcO"]),
            className: s()(o, R.$l),
            children: (0, n.jsx)(d.t, { size: "sm", color: "currentColor" }),
        });
    if (V === E.AW.DYNAMIC) return (0, n.jsx)(k, { className: o });
    if (V === E.AW.ORBS_EXCLUSIVE)
        return (0, n.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(o, R.$5, R.Cz),
            text: (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(p.C, { size: "xxs", color: "currentColor" }), x.intl.string(x.t["0TmQRG"])],
            }),
        });
    let N = null;
    switch (V) {
        case E.AW.LIMITED_TIME:
            N =
                null != L
                    ? L > 1
                        ? x.intl.formatToPlainString(x.t.Io7ozn, { days: L })
                        : x.intl.string(x.t.Bc13HF)
                    : x.intl.string(x.t["h/uBCR"]);
            break;
        case E.AW.NEW:
            N = x.intl.string(x.t.y2b7CA);
            break;
        case E.AW.NITRO_EXCLUSIVE:
            N = x.intl.string(x.t.X3Ekj8);
            break;
        case E.AW.BADGE_OVERRIDE:
            N = i;
    }
    return (0, n.jsx)(u.Lp, { text: N, disableColor: !0, className: s()(o, R.$5) });
}
let y = function (e) {
    let { skuId: t, badgeOverride: r, className: i, prioritizedCurrency: s } = e,
        l = (0, E.Vm)(t),
        a = (0, _.Q)(l);
    if (null == l || l.hideBadge) return null;
    let o = (0, v.rb)(l, a);
    return (0, n.jsx)(b, {
        product: o,
        badgeOverride: r,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
    });
};
