n.d(t, { A: () => S });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(575593),
    s = n(17928),
    o = n(403581),
    u = n(812993),
    c = n(287809),
    d = n(428262),
    p = n(590180),
    g = n(298072),
    C = n(993408),
    A = n(13875),
    f = n(466459),
    I = n(623373),
    v = n(561769),
    E = n(525723),
    h = n(57020),
    _ = n(375708),
    b = n(512514);
function R(e) {
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: i,
            skipLimitedTimeCheck: g,
            className: I,
            prioritizedCurrency: R,
        } = e,
        { isPurchased: S, isPartiallyOwnedBundle: y } = (0, f.h)(t),
        k = (0, C.G0)(t),
        L = (0, s.bG)([p.A], () => p.A.getCategoryForProduct(t.skuId)),
        O = L?.unpublishedAt != null ? (0, C.WU)(L.unpublishedAt) : null,
        m = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        x = d.Ay.canUseShopDiscounts(m),
        V = (0, E.V_)(t),
        { isOrbExclusive: P } = (0, h.F)({
            product: t,
            hasShopDiscount: x,
            prioritizedCurrency: R,
            hasDiscountOffer: null != V,
        }),
        T = (0, A.Do)("ProductCardBadgeInner") && t.type === l.R.PROFILE_FRAME,
        M = n;
    if (
        (null == M &&
            (T
                ? (M = v.AW.EARLY_ACCESS)
                : null != i
                  ? (M = v.AW.BADGE_OVERRIDE)
                  : !g && (0, C.HF)(L?.unpublishedAt)
                    ? (M = v.AW.LIMITED_TIME)
                    : !y && !S && (0, C.aT)(t.skuId)
                      ? (M = v.AW.NEW)
                      : P
                        ? (M = v.AW.ORBS_EXCLUSIVE)
                        : k && (M = v.AW.NITRO_EXCLUSIVE)),
        null == M || M === v.AW.NONE)
    )
        return null;
    if (M === v.AW.EARLY_ACCESS)
        return (0, r.jsx)("span", {
            role: "img",
            "aria-label": _.intl.string(_.t["1m6qcO"]),
            className: a()(I, b.$),
            children: (0, r.jsx)(o.t, { size: "sm", color: "currentColor" }),
        });
    let N = null;
    switch (M) {
        case v.AW.LIMITED_TIME:
            N =
                null != O
                    ? O > 1
                        ? _.intl.formatToPlainString(_.t.Io7ozn, { days: O })
                        : _.intl.string(_.t.Bc13HF)
                    : _.intl.string(_.t["h/uBCR"]);
            break;
        case v.AW.NEW:
            N = _.intl.string(_.t.y2b7CA);
            break;
        case v.AW.NITRO_EXCLUSIVE:
            N = _.intl.string(_.t.X3Ekj8);
            break;
        case v.AW.ORBS_EXCLUSIVE:
            N = _.intl.string(_.t["0TmQRG"]);
            break;
        case v.AW.BADGE_OVERRIDE:
            N = i;
    }
    return (0, r.jsx)(u.Lp, { text: N, disableColor: !0, className: a()(I, b.s) });
}
let S = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: a, skipLimitedTimeCheck: l } = e,
        s = (0, v.Vm)(t),
        o = (0, g.Q)(s);
    if (null == s || s.hideBadge) return null;
    let u = (0, I.rb)(s, o);
    return (0, r.jsx)(R, {
        product: u,
        badgeOverride: n,
        productBadgeOverride: s.badgeOverride,
        skipLimitedTimeCheck: l,
        className: i,
        prioritizedCurrency: a,
    });
};
