n.d(t, { s: () => y, A: () => P });
var r = n(477900);
n(582128);
var i = n(855986),
    l = n(287809),
    a = n(448645),
    s = n(590180),
    u = n(298072),
    o = n(993408),
    c = n(478168),
    d = n(818296),
    I = n(466459),
    f = n(623373),
    p = n(248180),
    g = n(503698),
    m = n.n(g),
    v = n(559106),
    x = n(866665),
    C = n(805251),
    _ = n(926321),
    h = n(278416),
    E = n(318254),
    A = n(758836),
    b = n(792996),
    R = n(6919);
let k = (e) => {
        let { ref: t, ...n } = e;
        return (0, r.jsx)(v.vN, { children: (0, r.jsx)("div", { ref: t, ...n }) });
    },
    y = (e) => {
        let { className: t, tabIndex: n = 0 } = e,
            i = b.intl.string(b.t["+drfVi"]);
        return (0, r.jsx)(x.m, {
            text: b.intl.string(b.t.dCou7i),
            children: (0, r.jsx)(k, {
                className: m()(t, R.$),
                tabIndex: n,
                role: "img",
                "aria-label": i,
                children: (0, r.jsx)(C.E, { type: { text: i }, variant: "inverted", icon: _.DiceIcon }),
            }),
        });
    },
    L = (e) => {
        let { badge: t, className: n, tabIndex: i } = e;
        if (t.type === A.Le.DYNAMIC) return (0, r.jsx)(y, { className: n, tabIndex: i });
        let l = (function (e) {
            switch (e.type) {
                case A.Le.BADGE_OVERRIDE:
                    return { type: { text: e.text } };
                case A.Le.PROMO_DISCOUNT:
                    return {
                        type: { text: b.intl.formatToPlainString(b.t.nH5DSU, { percentage: e.percentOff }) },
                        icon: h.TagIcon,
                    };
                case A.Le.PROMO_ORBS_BACK:
                    return {
                        type: { text: b.intl.formatToPlainString(b.t.ti90Eh, { orbCount: e.orbCount }) },
                        icon: E.OrbsIcon,
                    };
                case A.Le.LIMITED_TIME:
                    var t;
                    let n;
                    return {
                        type: {
                            text:
                                null == (n = null != (t = e.unpublishedAt) ? (0, o.WU)(t) : null)
                                    ? b.intl.string(b.t["h/uBCR"])
                                    : n > 1
                                      ? b.intl.formatToPlainString(b.t.Io7ozn, { days: n })
                                      : b.intl.string(b.t.Bc13HF),
                        },
                    };
                case A.Le.NEW:
                    return { type: "new" };
                case A.Le.ORBS_EXCLUSIVE:
                    return { type: { text: b.intl.string(b.t["0TmQRG"]) }, icon: E.OrbsIcon };
                case A.Le.NITRO_EXCLUSIVE:
                    return { type: { text: b.intl.string(b.t.X3Ekj8) } };
                default:
                    return null;
            }
        })(t);
        if (null == l) return null;
        let { type: a, icon: s } = l;
        return (0, r.jsx)("div", {
            className: m()(n, R.$),
            children: (0, r.jsx)(C.E, { type: a, variant: "inverted", icon: s }),
        });
    };
var O = n(561769),
    S = n(57020);
function T(e) {
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: u,
            className: g,
            prioritizedCurrency: m,
            tabIndex: v,
        } = e,
        { isPurchased: x, isPartiallyOwnedBundle: C } = (0, I.h)(t),
        _ = (0, o.G0)(t),
        h = (0, i.bG)([s.A], () => s.A.getCategoryForProduct(t.skuId)),
        E = t.categoryWillUnpublishAt ?? h?.unpublishedAt,
        b = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        R = a.Ay.canUseShopDiscounts(b),
        { isOrbExclusive: k, shouldCheckoutWithOrbs: y } = (0, S.F)({
            product: t,
            hasShopDiscount: R,
            prioritizedCurrency: m,
        }),
        O = (0, d.g)(t),
        T = (0, p.G)(O),
        P = (0, c.w)(O, t.skuId),
        j = n;
    if (
        (null == j &&
            (null != u
                ? (j = A.Le.BADGE_OVERRIDE)
                : y || null == T
                  ? y || null == P
                      ? (0, f.JQ)(t)
                          ? (j = A.Le.DYNAMIC)
                          : (0, o.HF)(E)
                            ? (j = A.Le.LIMITED_TIME)
                            : !C && !x && (0, o.aT)(t.skuId)
                              ? (j = A.Le.NEW)
                              : k
                                ? (j = A.Le.ORBS_EXCLUSIVE)
                                : _ && (j = A.Le.NITRO_EXCLUSIVE)
                      : (j = A.Le.PROMO_ORBS_BACK)
                  : (j = A.Le.PROMO_DISCOUNT)),
        null == j || j === A.Le.NONE)
    )
        return null;
    let N = null;
    switch (j) {
        case A.Le.PROMO_DISCOUNT:
            null != T && (N = { type: j, percentOff: T });
            break;
        case A.Le.PROMO_ORBS_BACK:
            null != P && (N = { type: j, orbCount: P });
            break;
        case A.Le.LIMITED_TIME:
            N = { type: j, unpublishedAt: E };
            break;
        case A.Le.BADGE_OVERRIDE:
            null != u && "" !== u && (N = { type: j, text: u });
            break;
        case A.Le.DYNAMIC:
        case A.Le.NEW:
        case A.Le.ORBS_EXCLUSIVE:
        case A.Le.NITRO_EXCLUSIVE:
            N = { type: j };
    }
    return null == N ? null : (0, r.jsx)(L, { badge: N, className: g, tabIndex: v });
}
let P = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: l, tabIndex: a } = e,
        s = (0, O.Vm)(t),
        o = (0, u.Q)(s);
    if (null == s || s.hideBadge) return null;
    let c = (0, f.rb)(s, o);
    return (0, r.jsx)(T, {
        product: c,
        badgeOverride: n,
        productBadgeOverride: s.badgeOverride,
        className: i,
        prioritizedCurrency: l,
        tabIndex: a,
    });
};
