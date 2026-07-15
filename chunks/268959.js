n.d(t, { A: () => T, s: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(575593),
    a = n(17928),
    o = n(990078),
    u = n(812993),
    c = n(926321),
    d = n(403581),
    p = n(318254),
    C = n(287809),
    I = n(428262),
    f = n(590180),
    g = n(298072),
    x = n(993408),
    m = n(13875),
    A = n(466459),
    k = n(623373),
    _ = n(561769),
    v = n(525723),
    h = n(57020),
    E = n(375708),
    R = n(512514);
function y(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.m, {
        text: E.intl.string(E.t.dCou7i),
        children: (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(t, R.$5, R.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.j, { size: "xxs", color: "currentColor" }), E.intl.string(E.t["+drfVi"])],
            }),
        }),
    });
}
function j(e) {
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: i,
            skipLimitedTimeCheck: o,
            className: c,
            prioritizedCurrency: g,
        } = e,
        { isPurchased: j, isPartiallyOwnedBundle: T } = (0, A.h)(t),
        b = (0, x.G0)(t),
        P = (0, a.bG)([f.A], () => f.A.getCategoryForProduct(t.skuId)),
        L = P?.unpublishedAt != null ? (0, x.WU)(P.unpublishedAt) : null,
        S = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        O = I.Ay.canUseShopDiscounts(S),
        N = (0, v.V_)(t),
        { isOrbExclusive: V } = (0, h.F)({
            product: t,
            hasShopDiscount: O,
            prioritizedCurrency: g,
            hasDiscountOffer: null != N,
        }),
        M = (0, m.Do)("ProductCardBadgeInner") && t.type === l.R.PROFILE_FRAME,
        D = n;
    if (
        (null == D &&
            (M
                ? (D = _.AW.EARLY_ACCESS)
                : null != i
                  ? (D = _.AW.BADGE_OVERRIDE)
                  : (0, k.JQ)(t)
                    ? (D = _.AW.DYNAMIC)
                    : !o && (0, x.HF)(P?.unpublishedAt)
                      ? (D = _.AW.LIMITED_TIME)
                      : !T && !j && (0, x.aT)(t.skuId)
                        ? (D = _.AW.NEW)
                        : V
                          ? (D = _.AW.ORBS_EXCLUSIVE)
                          : b && (D = _.AW.NITRO_EXCLUSIVE)),
        null == D || D === _.AW.NONE)
    )
        return null;
    if (D === _.AW.EARLY_ACCESS)
        return (0, r.jsx)("span", {
            role: "img",
            "aria-label": E.intl.string(E.t["1m6qcO"]),
            className: s()(c, R.$l),
            children: (0, r.jsx)(d.t, { size: "sm", color: "currentColor" }),
        });
    if (D === _.AW.DYNAMIC) return (0, r.jsx)(y, { className: c });
    if (D === _.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)(u.Lp, {
            disableColor: !0,
            className: s()(c, R.$5, R.Cz),
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(p.C, { size: "xxs", color: "currentColor" }), E.intl.string(E.t["0TmQRG"])],
            }),
        });
    let H = null;
    switch (D) {
        case _.AW.LIMITED_TIME:
            H =
                null != L
                    ? L > 1
                        ? E.intl.formatToPlainString(E.t.Io7ozn, { days: L })
                        : E.intl.string(E.t.Bc13HF)
                    : E.intl.string(E.t["h/uBCR"]);
            break;
        case _.AW.NEW:
            H = E.intl.string(E.t.y2b7CA);
            break;
        case _.AW.NITRO_EXCLUSIVE:
            H = E.intl.string(E.t.X3Ekj8);
            break;
        case _.AW.BADGE_OVERRIDE:
            H = i;
    }
    return (0, r.jsx)(u.Lp, { text: H, disableColor: !0, className: s()(c, R.$5) });
}
let T = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, skipLimitedTimeCheck: l } = e,
        a = (0, _.Vm)(t),
        o = (0, g.Q)(a);
    if (null == a || a.hideBadge) return null;
    let u = (0, k.rb)(a, o);
    return (0, r.jsx)(j, {
        product: u,
        badgeOverride: n,
        productBadgeOverride: a.badgeOverride,
        skipLimitedTimeCheck: l,
        className: i,
        prioritizedCurrency: s,
    });
};
