var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    l = n(855986),
    a = n(559106),
    u = n(866665),
    o = n(805251),
    d = n(926321),
    c = n(318254),
    f = n(287809),
    I = n(879610),
    v = n(590180),
    p = n(298072),
    m = n(993408),
    A = n(466459),
    g = n(623373),
    E = n(561769),
    x = n(57020),
    h = n(792996),
    _ = n(31005);
let C = (e) => {
        let { ref: t, ...n } = e;
        return (0, r.jsx)(a.vN, { children: (0, r.jsx)("div", { ref: t, ...n }) });
    },
    b = (e) => {
        let { className: t, tabIndex: n = 0 } = e,
            i = h.intl.string(h.t["+drfVi"]);
        return (0, r.jsx)(u.m, {
            text: h.intl.string(h.t.dCou7i),
            children: (0, r.jsx)(C, {
                className: s()(t, _.$),
                tabIndex: n,
                role: "img",
                "aria-label": i,
                children: (0, r.jsx)(o.E, { type: { text: i }, variant: "inverted", icon: d.DiceIcon }),
            }),
        });
    };
function R(e) {
    let {
            product: t,
            badgeOverride: n,
            productBadgeOverride: i,
            className: a,
            prioritizedCurrency: u,
            tabIndex: d,
        } = e,
        { isPurchased: p, isPartiallyOwnedBundle: C } = (0, A.h)(t),
        R = (0, m.G0)(t),
        k = (0, l.bG)([v.A], () => v.A.getCategoryForProduct(t.skuId)),
        y = t.categoryWillUnpublishAt ?? k?.unpublishedAt,
        S = null != y ? (0, m.WU)(y) : null,
        T = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        j = I.Ay.canUseShopDiscounts(T),
        { isOrbExclusive: O } = (0, x.F)({ product: t, hasShopDiscount: j, prioritizedCurrency: u }),
        P = n;
    if (
        (null == P &&
            (null != i
                ? (P = E.AW.BADGE_OVERRIDE)
                : (0, g.JQ)(t)
                  ? (P = E.AW.DYNAMIC)
                  : (0, m.HF)(y)
                    ? (P = E.AW.LIMITED_TIME)
                    : !C && !p && (0, m.aT)(t.skuId)
                      ? (P = E.AW.NEW)
                      : O
                        ? (P = E.AW.ORBS_EXCLUSIVE)
                        : R && (P = E.AW.NITRO_EXCLUSIVE)),
        null == P || P === E.AW.NONE)
    )
        return null;
    if (P === E.AW.DYNAMIC) return (0, r.jsx)(b, { className: a, tabIndex: d });
    if (P === E.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)("div", {
            className: s()(a, _.$),
            children: (0, r.jsx)(o.E, { type: { text: h.intl.string(h.t["0TmQRG"]) }, variant: "inverted", icon: c.C }),
        });
    let N = null;
    switch (P) {
        case E.AW.LIMITED_TIME:
            if (null != S) {
                let e = S > 1 ? h.intl.formatToPlainString(h.t.Io7ozn, { days: S }) : h.intl.string(h.t.Bc13HF);
                N = (0, r.jsx)(o.E, { type: { text: e }, variant: "inverted" });
            } else N = (0, r.jsx)(o.E, { type: { text: h.intl.string(h.t["h/uBCR"]) }, variant: "inverted" });
            break;
        case E.AW.NEW:
            N = (0, r.jsx)(o.E, { type: "new", variant: "inverted" });
            break;
        case E.AW.NITRO_EXCLUSIVE:
            N = (0, r.jsx)(o.E, { type: { text: h.intl.string(h.t.X3Ekj8) }, variant: "inverted" });
            break;
        case E.AW.BADGE_OVERRIDE:
            null != i && "" !== i && (N = (0, r.jsx)(o.E, { type: { text: i }, variant: "inverted" }));
    }
    return null == N ? null : (0, r.jsx)("div", { className: s()(a, _.$), children: N });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, tabIndex: l } = e,
                a = (0, E.Vm)(t),
                u = (0, p.Q)(a);
            if (null == a || a.hideBadge) return null;
            let o = (0, g.rb)(a, u);
            return (0, r.jsx)(R, {
                product: o,
                badgeOverride: n,
                productBadgeOverride: a.badgeOverride,
                className: i,
                prioritizedCurrency: s,
                tabIndex: l,
            });
        },
        s: b,
    },
);
