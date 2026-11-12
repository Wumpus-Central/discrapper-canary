var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(855986),
    l = n(559106),
    u = n(866665),
    o = n(805251),
    d = n(926321),
    c = n(318254),
    I = n(278416),
    v = n(287809),
    f = n(448645),
    p = n(590180),
    m = n(298072),
    g = n(993408),
    x = n(818296),
    h = n(466459),
    A = n(623373),
    _ = n(248180),
    E = n(561769),
    C = n(57020),
    b = n(792996),
    R = n(31005);
let k = (e) => {
        let { ref: t, ...n } = e;
        return (0, r.jsx)(l.vN, { children: (0, r.jsx)("div", { ref: t, ...n }) });
    },
    y = (e) => {
        let { className: t, tabIndex: n = 0 } = e,
            i = b.intl.string(b.t["+drfVi"]);
        return (0, r.jsx)(u.m, {
            text: b.intl.string(b.t.dCou7i),
            children: (0, r.jsx)(k, {
                className: s()(t, R.$),
                tabIndex: n,
                role: "img",
                "aria-label": i,
                children: (0, r.jsx)(o.E, { type: { text: i }, variant: "inverted", icon: d.DiceIcon }),
            }),
        });
    };
function S(e) {
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: i,
            className: l,
            prioritizedCurrency: u,
            tabIndex: d,
        } = e,
        { isPurchased: m, isPartiallyOwnedBundle: k } = (0, h.h)(t),
        S = (0, g.G0)(t),
        j = (0, a.bG)([p.A], () => p.A.getCategoryForProduct(t.skuId)),
        O = t.categoryWillUnpublishAt ?? j?.unpublishedAt,
        T = null != O ? (0, g.WU)(O) : null,
        N = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        P = f.Ay.canUseShopDiscounts(N),
        { isOrbExclusive: V, checkoutEligibleFormerPrices: L } = (0, C.F)({
            product: t,
            hasShopDiscount: P,
            prioritizedCurrency: u,
        }),
        D = null != L[0],
        M = (0, x.g)(t),
        w = (0, _.S)(M),
        B = n;
    if (
        (null == B &&
            (null != i
                ? (B = E.AW.BADGE_OVERRIDE)
                : D && null != w
                  ? (B = E.AW.PROMO_DISCOUNT)
                  : (0, A.JQ)(t)
                    ? (B = E.AW.DYNAMIC)
                    : (0, g.HF)(O)
                      ? (B = E.AW.LIMITED_TIME)
                      : !k && !m && (0, g.aT)(t.skuId)
                        ? (B = E.AW.NEW)
                        : V
                          ? (B = E.AW.ORBS_EXCLUSIVE)
                          : S && (B = E.AW.NITRO_EXCLUSIVE)),
        null == B || B === E.AW.NONE)
    )
        return null;
    if (B === E.AW.DYNAMIC) return (0, r.jsx)(y, { className: l, tabIndex: d });
    if (B === E.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)("div", {
            className: s()(l, R.$),
            children: (0, r.jsx)(o.E, {
                type: { text: b.intl.string(b.t["0TmQRG"]) },
                variant: "inverted",
                icon: c.OrbsIcon,
            }),
        });
    if (B === E.AW.PROMO_DISCOUNT && null != w)
        return (0, r.jsx)("div", {
            className: s()(l, R.$),
            children: (0, r.jsx)(o.E, {
                type: { text: b.intl.formatToPlainString(b.t.nH5DSU, { percentage: w }) },
                variant: "inverted",
                icon: I.TagIcon,
            }),
        });
    let H = null;
    switch (B) {
        case E.AW.LIMITED_TIME:
            if (null != T) {
                let e = T > 1 ? b.intl.formatToPlainString(b.t.Io7ozn, { days: T }) : b.intl.string(b.t.Bc13HF);
                H = (0, r.jsx)(o.E, { type: { text: e }, variant: "inverted" });
            } else H = (0, r.jsx)(o.E, { type: { text: b.intl.string(b.t["h/uBCR"]) }, variant: "inverted" });
            break;
        case E.AW.NEW:
            H = (0, r.jsx)(o.E, { type: "new", variant: "inverted" });
            break;
        case E.AW.NITRO_EXCLUSIVE:
            H = (0, r.jsx)(o.E, { type: { text: b.intl.string(b.t.X3Ekj8) }, variant: "inverted" });
            break;
        case E.AW.BADGE_OVERRIDE:
            null != i && "" !== i && (H = (0, r.jsx)(o.E, { type: { text: i }, variant: "inverted" }));
    }
    return null == H ? null : (0, r.jsx)("div", { className: s()(l, R.$), children: H });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, tabIndex: a } = e,
                l = (0, E.Vm)(t),
                u = (0, m.Q)(l);
            if (null == l || l.hideBadge) return null;
            let o = (0, A.rb)(l, u);
            return (0, r.jsx)(S, {
                product: o,
                badgeOverride: n,
                productBadgeOverride: l.badgeOverride,
                className: i,
                prioritizedCurrency: s,
                tabIndex: a,
            });
        },
        s: y,
    },
);
