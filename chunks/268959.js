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
    I = n(287809),
    v = n(448645),
    f = n(590180),
    p = n(298072),
    m = n(993408),
    g = n(466459),
    x = n(623373),
    h = n(561769),
    A = n(57020),
    E = n(792996),
    _ = n(31005);
let C = (e) => {
        let { ref: t, ...n } = e;
        return (0, r.jsx)(l.vN, { children: (0, r.jsx)("div", { ref: t, ...n }) });
    },
    b = (e) => {
        let { className: t, tabIndex: n = 0 } = e,
            i = E.intl.string(E.t["+drfVi"]);
        return (0, r.jsx)(u.m, {
            text: E.intl.string(E.t.dCou7i),
            children: (0, r.jsx)(C, {
                className: s()(t, _.$),
                tabIndex: n,
                role: "img",
                "aria-label": i,
                children: (0, r.jsx)(o.E, { type: { text: i }, variant: "inverted", icon: d.DiceIcon }),
            }),
        });
    };
function k(e) {
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: i,
            className: l,
            prioritizedCurrency: u,
            tabIndex: d,
        } = e,
        { isPurchased: p, isPartiallyOwnedBundle: C } = (0, g.h)(t),
        k = (0, m.G0)(t),
        R = (0, a.bG)([f.A], () => f.A.getCategoryForProduct(t.skuId)),
        y = t.categoryWillUnpublishAt ?? R?.unpublishedAt,
        j = null != y ? (0, m.WU)(y) : null,
        S = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        T = v.Ay.canUseShopDiscounts(S),
        { isOrbExclusive: O } = (0, A.F)({ product: t, hasShopDiscount: T, prioritizedCurrency: u }),
        N = n;
    if (
        (null == N &&
            (null != i
                ? (N = h.AW.BADGE_OVERRIDE)
                : (0, x.JQ)(t)
                  ? (N = h.AW.DYNAMIC)
                  : (0, m.HF)(y)
                    ? (N = h.AW.LIMITED_TIME)
                    : !C && !p && (0, m.aT)(t.skuId)
                      ? (N = h.AW.NEW)
                      : O
                        ? (N = h.AW.ORBS_EXCLUSIVE)
                        : k && (N = h.AW.NITRO_EXCLUSIVE)),
        null == N || N === h.AW.NONE)
    )
        return null;
    if (N === h.AW.DYNAMIC) return (0, r.jsx)(b, { className: l, tabIndex: d });
    if (N === h.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)("div", {
            className: s()(l, _.$),
            children: (0, r.jsx)(o.E, {
                type: { text: E.intl.string(E.t["0TmQRG"]) },
                variant: "inverted",
                icon: c.OrbsIcon,
            }),
        });
    let V = null;
    switch (N) {
        case h.AW.LIMITED_TIME:
            if (null != j) {
                let e = j > 1 ? E.intl.formatToPlainString(E.t.Io7ozn, { days: j }) : E.intl.string(E.t.Bc13HF);
                V = (0, r.jsx)(o.E, { type: { text: e }, variant: "inverted" });
            } else V = (0, r.jsx)(o.E, { type: { text: E.intl.string(E.t["h/uBCR"]) }, variant: "inverted" });
            break;
        case h.AW.NEW:
            V = (0, r.jsx)(o.E, { type: "new", variant: "inverted" });
            break;
        case h.AW.NITRO_EXCLUSIVE:
            V = (0, r.jsx)(o.E, { type: { text: E.intl.string(E.t.X3Ekj8) }, variant: "inverted" });
            break;
        case h.AW.BADGE_OVERRIDE:
            null != i && "" !== i && (V = (0, r.jsx)(o.E, { type: { text: i }, variant: "inverted" }));
    }
    return null == V ? null : (0, r.jsx)("div", { className: s()(l, _.$), children: V });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, tabIndex: a } = e,
                l = (0, h.Vm)(t),
                u = (0, p.Q)(l);
            if (null == l || l.hideBadge) return null;
            let o = (0, x.rb)(l, u);
            return (0, r.jsx)(k, {
                product: o,
                badgeOverride: n,
                productBadgeOverride: l.badgeOverride,
                className: i,
                prioritizedCurrency: s,
                tabIndex: a,
            });
        },
        s: b,
    },
);
