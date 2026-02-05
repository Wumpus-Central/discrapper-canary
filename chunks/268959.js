"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(287809),
    u = n(927578),
    c = n(590180),
    d = n(298072),
    _ = n(993408),
    f = n(466459),
    p = n(623373),
    h = n(561769),
    m = n(525723),
    g = n(57020),
    E = n(985018),
    A = n(865687);
let I = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: i, className: d, prioritizedCurrency: p } = e,
            I = (0, h.sC)(),
            { isPurchased: T, isPartiallyOwnedBundle: y } = (0, f.h)(t),
            S = (0, _.G0)(t),
            v = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)),
            C = v?.unpublishedAt != null ? (0, _.WU)(v.unpublishedAt) : null,
            b = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
            N = u.Ay.canUseCollectibles(b),
            R = null != (0, m.V_)(t),
            { isOrbExclusive: O } = (0, g.FI)({
                product: t,
                isPremiumUser: N,
                prioritizedCurrency: p,
                hasDiscountOffer: R,
            }),
            D = n;
        if (
            (null == D &&
                (!i && (0, _.HF)(v?.unpublishedAt)
                    ? (D = h.AW.LIMITED_TIME)
                    : !y && !T && (0, _.aT)(t.skuId)
                      ? (D = h.AW.NEW)
                      : null != I && 3 === I
                        ? (D = h.AW.THREE_DAY_RENTAL)
                        : null != I && 7 === I
                          ? (D = h.AW.SEVEN_DAY_RENTAL)
                          : null != I
                            ? (D = h.AW.RENTAL)
                            : O
                              ? (D = h.AW.ORBS_EXCLUSIVE)
                              : S && (D = h.AW.NITRO_EXCLUSIVE)),
            null == D || D === h.AW.NONE)
        )
            return null;
        let L = null;
        switch (D) {
            case h.AW.LIMITED_TIME:
                L =
                    null != C
                        ? C > 1
                            ? E.intl.formatToPlainString(E.t.Io7ozn, { days: C })
                            : E.intl.string(E.t.Bc13HF)
                        : E.intl.string(E.t["h/uBCR"]);
                break;
            case h.AW.NEW:
                L = E.intl.string(E.t.y2b7CA);
                break;
            case h.AW.NITRO_EXCLUSIVE:
                L = E.intl.string(E.t.X3Ekj8);
                break;
            case h.AW.ORBS_EXCLUSIVE:
                L = E.intl.string(E.t["0TmQRG"]);
                break;
            case h.AW.THREE_DAY_RENTAL:
                L = E.intl.string(E.t["52UXCo"]);
                break;
            case h.AW.SEVEN_DAY_RENTAL:
                L = E.intl.string(E.t.FRR2s2);
                break;
            case h.AW.RENTAL:
                L = E.intl.string(E.t.VgsFa1);
        }
        return (0, r.jsx)(o.LpS, { text: L, disableColor: !0, className: a()(d, A.$) });
    },
    T = (e) => {
        let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: a, skipLimitedTimeCheck: s } = e,
            o = (0, h.Vm)(t),
            l = (0, d.Q)(o);
        if (null == o) return null;
        let u = (0, p.rb)(o, l);
        return (0, r.jsx)(I, {
            product: u,
            badgeOverride: n,
            skipLimitedTimeCheck: s,
            className: i,
            prioritizedCurrency: a,
        });
    };
