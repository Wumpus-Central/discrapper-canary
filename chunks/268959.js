n.d(t, {
    A: () => _,
});
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(311907),
    s = n(397927),
    o = n(287809),
    c = n(927578),
    d = n(590180),
    u = n(298072),
    m = n(993408),
    p = n(466459),
    h = n(623373),
    x = n(561769),
    g = n(525723),
    f = n(57020),
    b = n(985018),
    v = n(865687);
let j = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: u, prioritizedCurrency: h } = e,
            j = (0, x.sC)(),
            { isPurchased: _, isPartiallyOwnedBundle: y } = (0, p.h)(t),
            A = (0, m.G0)(t),
            C = (0, i.bG)([d.A], () => d.A.getCategoryForProduct(t.skuId)),
            S = (null == C ? void 0 : C.unpublishedAt) != null ? (0, m.WU)(C.unpublishedAt) : null,
            O = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
            E = c.Ay.canUseCollectibles(O),
            T = (0, g.V_)(t),
            { isOrbExclusive: N } = (0, f.FI)({
                product: t,
                isPremiumUser: E,
                prioritizedCurrency: h,
                hasDiscountOffer: null != T,
            }),
            w = n;
        if (
            (null == w &&
                (!l && (0, m.HF)(null == C ? void 0 : C.unpublishedAt)
                    ? (w = x.AW.LIMITED_TIME)
                    : !y && !_ && (0, m.aT)(t.skuId)
                      ? (w = x.AW.NEW)
                      : null != j && 3 === j
                        ? (w = x.AW.THREE_DAY_RENTAL)
                        : null != j && 7 === j
                          ? (w = x.AW.SEVEN_DAY_RENTAL)
                          : null != j
                            ? (w = x.AW.RENTAL)
                            : N
                              ? (w = x.AW.ORBS_EXCLUSIVE)
                              : A && (w = x.AW.NITRO_EXCLUSIVE)),
            null == w || w === x.AW.NONE)
        )
            return null;
        let I = null;
        switch (w) {
            case x.AW.LIMITED_TIME:
                I =
                    null != S
                        ? S > 1
                            ? b.intl.formatToPlainString(b.t.Io7ozn, {
                                  days: S,
                              })
                            : b.intl.string(b.t.Bc13HF)
                        : b.intl.string(b.t["h/uBCR"]);
                break;
            case x.AW.NEW:
                I = b.intl.string(b.t.y2b7CA);
                break;
            case x.AW.NITRO_EXCLUSIVE:
                I = b.intl.string(b.t.X3Ekj8);
                break;
            case x.AW.ORBS_EXCLUSIVE:
                I = b.intl.string(b.t["0TmQRG"]);
                break;
            case x.AW.THREE_DAY_RENTAL:
                I = b.intl.string(b.t["52UXCo"]);
                break;
            case x.AW.SEVEN_DAY_RENTAL:
                I = b.intl.string(b.t.FRR2s2);
                break;
            case x.AW.RENTAL:
                I = b.intl.string(b.t.VgsFa1);
        }
        return (0, a.jsx)(s.LpS, {
            text: I,
            disableColor: !0,
            className: r()(u, v.$),
        });
    },
    _ = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: r, skipLimitedTimeCheck: i } = e,
            s = (0, x.Vm)(t),
            o = (0, u.Q)(s);
        if (null == s) return null;
        let c = (0, h.rb)(s, o);
        return (0, a.jsx)(j, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: i,
            className: l,
            prioritizedCurrency: r,
        });
    };
