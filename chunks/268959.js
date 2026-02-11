"use strict";
n.d(t, { A: () => y });
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
    h = n(623373),
    p = n(561769),
    g = n(525723),
    E = n(57020),
    A = n(985018),
    I = n(865687);
let T = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: i, className: d, prioritizedCurrency: h } = e,
            { isPurchased: T, isPartiallyOwnedBundle: y } = (0, f.h)(t),
            S = (0, _.G0)(t),
            v = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)),
            C = v?.unpublishedAt != null ? (0, _.WU)(v.unpublishedAt) : null,
            b = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
            N = u.Ay.canUseCollectibles(b),
            R = null != (0, g.V_)(t),
            { isOrbExclusive: O } = (0, E.F)({
                product: t,
                isPremiumUser: N,
                prioritizedCurrency: h,
                hasDiscountOffer: R,
            }),
            D = n;
        if (
            (null == D &&
                (!i && (0, _.HF)(v?.unpublishedAt)
                    ? (D = p.AW.LIMITED_TIME)
                    : !y && !T && (0, _.aT)(t.skuId)
                      ? (D = p.AW.NEW)
                      : O
                        ? (D = p.AW.ORBS_EXCLUSIVE)
                        : S && (D = p.AW.NITRO_EXCLUSIVE)),
            null == D || D === p.AW.NONE)
        )
            return null;
        let L = null;
        switch (D) {
            case p.AW.LIMITED_TIME:
                L =
                    null != C
                        ? C > 1
                            ? A.intl.formatToPlainString(A.t.Io7ozn, { days: C })
                            : A.intl.string(A.t.Bc13HF)
                        : A.intl.string(A.t["h/uBCR"]);
                break;
            case p.AW.NEW:
                L = A.intl.string(A.t.y2b7CA);
                break;
            case p.AW.NITRO_EXCLUSIVE:
                L = A.intl.string(A.t.X3Ekj8);
                break;
            case p.AW.ORBS_EXCLUSIVE:
                L = A.intl.string(A.t["0TmQRG"]);
        }
        return (0, r.jsx)(o.LpS, { text: L, disableColor: !0, className: a()(d, I.$) });
    },
    y = (e) => {
        let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: a, skipLimitedTimeCheck: s } = e,
            o = (0, p.Vm)(t),
            l = (0, d.Q)(o);
        if (null == o) return null;
        let u = (0, h.rb)(o, l);
        return (0, r.jsx)(T, {
            product: u,
            badgeOverride: n,
            skipLimitedTimeCheck: s,
            className: i,
            prioritizedCurrency: a,
        });
    };
