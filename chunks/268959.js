r.d(e, { A: () => k });
var i = r(627968);
r(64700);
var l = r(503698),
    n = r.n(l),
    s = r(311907),
    a = r(397927),
    u = r(287809),
    o = r(927578),
    d = r(590180),
    c = r(298072),
    m = r(993408),
    x = r(466459),
    p = r(623373),
    g = r(561769),
    h = r(525723),
    C = r(57020),
    A = r(985018),
    I = r(865687);
let j = (t) => {
        let { product: e, badgeOverride: r, skipLimitedTimeCheck: l, className: c, prioritizedCurrency: p } = t,
            { isPurchased: j, isPartiallyOwnedBundle: k } = (0, x.h)(e),
            f = (0, m.G0)(e),
            v = (0, s.bG)([d.A], () => d.A.getCategoryForProduct(e.skuId)),
            y = v?.unpublishedAt != null ? (0, m.WU)(v.unpublishedAt) : null,
            E = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            _ = o.Ay.canUseCollectibles(E),
            b = (0, h.V_)(e),
            { isOrbExclusive: T } = (0, C.F)({
                product: e,
                isPremiumUser: _,
                prioritizedCurrency: p,
                hasDiscountOffer: null != b,
            }),
            R = r;
        if (
            (null == R &&
                (!l && (0, m.HF)(v?.unpublishedAt)
                    ? (R = g.AW.LIMITED_TIME)
                    : !k && !j && (0, m.aT)(e.skuId)
                      ? (R = g.AW.NEW)
                      : T
                        ? (R = g.AW.ORBS_EXCLUSIVE)
                        : f && (R = g.AW.NITRO_EXCLUSIVE)),
            null == R || R === g.AW.NONE)
        )
            return null;
        let S = null;
        switch (R) {
            case g.AW.LIMITED_TIME:
                S =
                    null != y
                        ? y > 1
                            ? A.intl.formatToPlainString(A.t.Io7ozn, { days: y })
                            : A.intl.string(A.t.Bc13HF)
                        : A.intl.string(A.t["h/uBCR"]);
                break;
            case g.AW.NEW:
                S = A.intl.string(A.t.y2b7CA);
                break;
            case g.AW.NITRO_EXCLUSIVE:
                S = A.intl.string(A.t.X3Ekj8);
                break;
            case g.AW.ORBS_EXCLUSIVE:
                S = A.intl.string(A.t["0TmQRG"]);
        }
        return (0, i.jsx)(a.LpS, { text: S, disableColor: !0, className: n()(c, I.$) });
    },
    k = (t) => {
        let { skuId: e, badgeOverride: r, className: l, prioritizedCurrency: n, skipLimitedTimeCheck: s } = t,
            a = (0, g.Vm)(e),
            u = (0, c.Q)(a);
        if (null == a) return null;
        let o = (0, p.rb)(a, u);
        return (0, i.jsx)(j, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: n,
        });
    };
