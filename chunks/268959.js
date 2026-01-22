n.d(t, { A: () => y });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(287809),
    c = n(927578),
    d = n(590180),
    u = n(298072),
    m = n(993408),
    p = n(466459),
    h = n(561769),
    f = n(767503),
    x = n(525723),
    b = n(57020),
    g = n(985018),
    v = n(865687);
let j = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: u, prioritizedCurrency: f } = e,
            j = (0, h.sC)(),
            { isPurchased: y, isPartiallyOwnedBundle: _ } = (0, p.h)(t),
            A = (0, m.G0)(t),
            C = (0, r.bG)([d.A], () => d.A.getCategoryForProduct(t.skuId)),
            S = (null == C ? void 0 : C.unpublishedAt) != null ? (0, m.WU)(C.unpublishedAt) : null,
            O = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
            E = c.Ay.canUseCollectibles(O),
            N = (0, x.V_)(t),
            { isOrbExclusive: T } = (0, b.FI)({
                product: t,
                isPremiumUser: E,
                prioritizedCurrency: f,
                hasDiscountOffer: null != N,
            }),
            I = n;
        if (
            (null == I &&
                (!l && (0, m.HF)(null == C ? void 0 : C.unpublishedAt)
                    ? (I = h.AW.LIMITED_TIME)
                    : !_ && !y && (0, m.aT)(t.skuId)
                      ? (I = h.AW.NEW)
                      : null != j && 3 === j
                        ? (I = h.AW.THREE_DAY_RENTAL)
                        : null != j && 7 === j
                          ? (I = h.AW.SEVEN_DAY_RENTAL)
                          : null != j
                            ? (I = h.AW.RENTAL)
                            : T
                              ? (I = h.AW.ORBS_EXCLUSIVE)
                              : A && (I = h.AW.NITRO_EXCLUSIVE)),
            null == I || I === h.AW.NONE)
        )
            return null;
        let w = null;
        switch (I) {
            case h.AW.LIMITED_TIME:
                w =
                    null != S
                        ? S > 1
                            ? g.intl.formatToPlainString(g.t.Io7ozn, { days: S })
                            : g.intl.string(g.t.Bc13HF)
                        : g.intl.string(g.t["h/uBCR"]);
                break;
            case h.AW.NEW:
                w = g.intl.string(g.t.y2b7CA);
                break;
            case h.AW.NITRO_EXCLUSIVE:
                w = g.intl.string(g.t.X3Ekj8);
                break;
            case h.AW.ORBS_EXCLUSIVE:
                w = g.intl.string(g.t["0TmQRG"]);
                break;
            case h.AW.THREE_DAY_RENTAL:
                w = g.intl.string(g.t["52UXCo"]);
                break;
            case h.AW.SEVEN_DAY_RENTAL:
                w = g.intl.string(g.t.FRR2s2);
                break;
            case h.AW.RENTAL:
                w = g.intl.string(g.t.VgsFa1);
        }
        return (0, a.jsx)(s.LpS, {
            text: w,
            disableColor: !0,
            className: i()(u, v.$),
        });
    },
    y = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i, skipLimitedTimeCheck: r } = e,
            s = (0, h.Vm)(t),
            o = (0, u.Q)(s);
        if (null == s) return null;
        let c = (0, f.r)(s, o);
        return (0, a.jsx)(j, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: r,
            className: l,
            prioritizedCurrency: i,
        });
    };
