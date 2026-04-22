r.d(t, { A: () => _ });
var i = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    s = r(311907),
    a = r(777666),
    u = r(287809),
    c = r(927578),
    o = r(590180),
    d = r(298072),
    k = r(993408),
    p = r(466459),
    C = r(623373),
    m = r(561769),
    x = r(525723),
    I = r(57020),
    A = r(985018),
    g = r(512514);
let h = (e) => {
        let { product: t, badgeOverride: r, skipLimitedTimeCheck: n, className: d, prioritizedCurrency: C } = e,
            { isPurchased: h, isPartiallyOwnedBundle: _ } = (0, p.h)(t),
            f = (0, k.G0)(t),
            T = (0, s.bG)([o.A], () => o.A.getCategoryForProduct(t.skuId)),
            E = T?.unpublishedAt != null ? (0, k.WU)(T.unpublishedAt) : null,
            v = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            j = c.Ay.canUseCollectibles(v),
            y = (0, x.V_)(t),
            { isOrbExclusive: P } = (0, I.F)({
                product: t,
                isPremiumUser: j,
                prioritizedCurrency: C,
                hasDiscountOffer: null != y,
            }),
            b = r;
        if (
            (null == b &&
                (!n && (0, k.HF)(T?.unpublishedAt)
                    ? (b = m.AW.LIMITED_TIME)
                    : !_ && !h && (0, k.aT)(t.skuId)
                      ? (b = m.AW.NEW)
                      : P
                        ? (b = m.AW.ORBS_EXCLUSIVE)
                        : f && (b = m.AW.NITRO_EXCLUSIVE)),
            null == b || b === m.AW.NONE)
        )
            return null;
        let R = null;
        switch (b) {
            case m.AW.LIMITED_TIME:
                R =
                    null != E
                        ? E > 1
                            ? A.intl.formatToPlainString(A.t.Io7ozn, { days: E })
                            : A.intl.string(A.t.Bc13HF)
                        : A.intl.string(A.t["h/uBCR"]);
                break;
            case m.AW.NEW:
                R = A.intl.string(A.t.y2b7CA);
                break;
            case m.AW.NITRO_EXCLUSIVE:
                R = A.intl.string(A.t.X3Ekj8);
                break;
            case m.AW.ORBS_EXCLUSIVE:
                R = A.intl.string(A.t["0TmQRG"]);
        }
        return (0, i.jsx)(a.Lp, { text: R, disableColor: !0, className: l()(d, g.$) });
    },
    _ = (e) => {
        let { skuId: t, badgeOverride: r, className: n, prioritizedCurrency: l, skipLimitedTimeCheck: s } = e,
            a = (0, m.Vm)(t),
            u = (0, d.Q)(a);
        if (null == a) return null;
        let c = (0, C.rb)(a, u);
        return (0, i.jsx)(h, {
            product: c,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: n,
            prioritizedCurrency: l,
        });
    };
