t.d(n, {
    F: () => P,
    P: () => Z
});
var l = t(255367);
t(73800);
var i = t(120356),
    r = t.n(i),
    s = t(442837),
    a = t(780384),
    o = t(410030),
    C = t(594174),
    d = t(78839),
    c = t(756896),
    u = t(589072),
    p = t(140465),
    x = t(286961),
    h = t(121970),
    j = t(104494),
    f = t(639119),
    m = t(382791),
    _ = t(640698),
    L = t(823188),
    g = t(474936),
    y = t(388032),
    S = t(195078),
    E = t(895601),
    v = t(381126),
    b = t(234286);
function P(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: i, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        j = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        y = (0, f.N)(),
        E = null == y || null == (n = y.subscription_trial) ? void 0 : n.sku_id,
        v = (null == h ? void 0 : h.hasActiveTrial) ? (null == j ? void 0 : j.premiumType) : null,
        b = (0, m.y_)(v, E),
        P = null != b,
        Z = (0, a.ap)((0, o.ZP)());
    return (0, l.jsxs)('div', {
        className: r()(S.card, S.tier0, u, { [S.pillMargin]: P }),
        children: [
            P && (0, l.jsx)(_.F, { text: b }),
            (0, l.jsx)(c.Z, {
                className: S.wordmark,
                color: Z ? 'black' : 'white'
            }),
            (0, l.jsx)(L.ko, {
                isGift: p,
                premiumTier: g.p9.TIER_0,
                offerType: L.C.PREMIUM_TRIAL,
                offerTierMatchesCard: E === g.Si.TIER_0,
                showYearlyPrice: i,
                priceOptions: x,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, l.jsx)('hr', { className: S.divider }),
            (0, l.jsx)(L.ql, { enablePremiumRebrandDesign: !0 }),
            t
        ]
    });
}
function Z(e) {
    var n, t, i;
    let { ctaButton: c, showYearlyPrice: P, featureSet: Z = L.uZ.DEFAULT, className: O, isGift: I = !1, isModal: w = !1, priceOptions: M, showPromotionalGiftBanner: T = !1 } = e,
        A = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        k = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        N = (0, f.N)(),
        U = null == N || null == (n = N.subscription_trial) ? void 0 : n.sku_id,
        R = (null == A ? void 0 : A.hasActiveTrial) ? (null == k ? void 0 : k.premiumType) : null,
        F = (0, j.Ng)(),
        B = (0, p.t7)(),
        H = null != U || null != R ? L.C.PREMIUM_TRIAL : null != F || B ? L.C.PREMIUM_DISCOUNT : null,
        G = null == (t = (0, x.Z)()) ? void 0 : t.planSelection,
        D = null == G || null == (i = G.getBackgroundImageUrl) ? void 0 : i.call(G),
        W = (0, a.ap)((0, o.ZP)()),
        z = (0, m.A1)(B, R, F, N, U);
    return (0, l.jsxs)('div', {
        className: r()(S.card, S.tier2, O),
        children: [
            (0, l.jsx)(
                () =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('img', {
                                src: v,
                                alt: '',
                                className: S.bigCloud
                            }),
                            (0, l.jsx)('img', {
                                src: E,
                                alt: '',
                                className: S.smallCloud
                            }),
                            (0, l.jsx)('img', {
                                src: b,
                                alt: '',
                                className: S.wumpus
                            })
                        ]
                    }),
                {}
            ),
            T &&
                null !== D &&
                (0, l.jsx)('img', {
                    className: S.promotionalBackgroundImage,
                    alt: '',
                    src: D
                }),
            (0, l.jsx)(_.F, { text: null != z ? z : y.intl.string(y.t['6bEcYm']) }),
            (0, l.jsx)(u.Z, {
                className: S.wordmark,
                color: W ? 'black' : 'white'
            }),
            (0, l.jsx)(L.ko, {
                isGift: I,
                premiumTier: g.p9.TIER_2,
                offerType: H,
                offerTierMatchesCard: U === g.Si.TIER_2 || (0, j.Wp)(F, g.Si.TIER_2),
                showYearlyPrice: P,
                priceOptions: M,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, l.jsx)('hr', { className: S.divider }),
            (0, l.jsx)(L.nT, {
                featureSet: Z,
                isModal: w,
                isGift: I,
                enablePremiumRebrandDesign: !0
            }),
            c,
            T && (0, l.jsx)(h.w, {})
        ]
    });
}
