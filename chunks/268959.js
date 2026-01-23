n.d(t, {
    A: () => O,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(287809),
    c = n(927578),
    u = n(590180),
    d = n(298072),
    f = n(993408),
    p = n(466459),
    _ = n(623373),
    h = n(561769),
    m = n(525723),
    g = n(57020),
    E = n(985018),
    y = n(865687);
let b = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: i, className: d, prioritizedCurrency: _ } = e,
            b = (0, h.sC)(),
            { isPurchased: O, isPartiallyOwnedBundle: v } = (0, p.h)(t),
            A = (0, f.G0)(t),
            I = (0, s.bG)([u.A], () => u.A.getCategoryForProduct(t.skuId)),
            S = (null == I ? void 0 : I.unpublishedAt) != null ? (0, f.WU)(I.unpublishedAt) : null,
            T = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
            C = c.Ay.canUseCollectibles(T),
            N = null != (0, m.V_)(t),
            { isOrbExclusive: w } = (0, g.FI)({
                product: t,
                isPremiumUser: C,
                prioritizedCurrency: _,
                hasDiscountOffer: N,
            }),
            R = n;
        if (
            (null == R &&
                (!i && (0, f.HF)(null == I ? void 0 : I.unpublishedAt)
                    ? (R = h.AW.LIMITED_TIME)
                    : !v && !O && (0, f.aT)(t.skuId)
                      ? (R = h.AW.NEW)
                      : null != b && 3 === b
                        ? (R = h.AW.THREE_DAY_RENTAL)
                        : null != b && 7 === b
                          ? (R = h.AW.SEVEN_DAY_RENTAL)
                          : null != b
                            ? (R = h.AW.RENTAL)
                            : w
                              ? (R = h.AW.ORBS_EXCLUSIVE)
                              : A && (R = h.AW.NITRO_EXCLUSIVE)),
            null == R || R === h.AW.NONE)
        )
            return null;
        let P = null;
        switch (R) {
            case h.AW.LIMITED_TIME:
                P =
                    null != S
                        ? S > 1
                            ? E.intl.formatToPlainString(E.t.Io7ozn, {
                                  days: S,
                              })
                            : E.intl.string(E.t.Bc13HF)
                        : E.intl.string(E.t["h/uBCR"]);
                break;
            case h.AW.NEW:
                P = E.intl.string(E.t.y2b7CA);
                break;
            case h.AW.NITRO_EXCLUSIVE:
                P = E.intl.string(E.t.X3Ekj8);
                break;
            case h.AW.ORBS_EXCLUSIVE:
                P = E.intl.string(E.t["0TmQRG"]);
                break;
            case h.AW.THREE_DAY_RENTAL:
                P = E.intl.string(E.t["52UXCo"]);
                break;
            case h.AW.SEVEN_DAY_RENTAL:
                P = E.intl.string(E.t.FRR2s2);
                break;
            case h.AW.RENTAL:
                P = E.intl.string(E.t.VgsFa1);
        }
        return (0, r.jsx)(o.LpS, {
            text: P,
            disableColor: !0,
            className: a()(d, y.$),
        });
    },
    O = (e) => {
        let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: a, skipLimitedTimeCheck: s } = e,
            o = (0, h.Vm)(t),
            l = (0, d.Q)(o);
        if (null == o) return null;
        let c = (0, _.rb)(o, l);
        return (0, r.jsx)(b, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: s,
            className: i,
            prioritizedCurrency: a,
        });
    };
