t.d(n, {
    I: () => b,
    U: () => Z
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
    x = t(474706),
    h = t(104494),
    f = t(639119),
    j = t(947390),
    _ = t(382791),
    m = t(823188),
    L = t(52741),
    g = t(474936),
    y = t(388032),
    S = t(767594),
    E = t(895601),
    v = t(381126),
    P = t(234286);
function Z(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: i, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        y = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        E = (0, f.N)(),
        v = null == E || null == (n = E.subscription_trial) ? void 0 : n.sku_id,
        P = (null == h ? void 0 : h.hasActiveTrial) ? (null == y ? void 0 : y.premiumType) : null,
        Z = (0, _.y_)(P, v),
        b = null != Z,
        O = (0, a.ap)((0, o.ZP)());
    return (0, l.jsxs)('div', {
        className: r()(S.card, S.tier0, u, { [S.pillMargin]: b }),
        children: [
            b &&
                (0, l.jsx)(j.E, {
                    text: Z,
                    className: S.pill
                }),
            (0, l.jsx)(c.Z, {
                className: S.wordmark,
                color: O ? 'black' : 'white'
            }),
            (0, l.jsx)(L.Z, {
                isGift: p,
                premiumTier: g.p9.TIER_0,
                offerType: g.C.PREMIUM_TRIAL,
                offerTierMatchesCard: v === g.Si.TIER_0,
                showYearlyPrice: i,
                priceOptions: x,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, l.jsx)('hr', { className: S.divider }),
            (0, l.jsx)(m.ql, { enablePremiumBrandRefresh: !0 }),
            t
        ]
    });
}
function b(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: i, featureSet: c = m.uZ.DEFAULT, className: Z, isGift: b = !1, isModal: O = !1, priceOptions: I, showPromotionalGiftBanner: M = !1 } = e,
        w = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        T = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        A = (0, f.N)(),
        N = null == A || null == (n = A.subscription_trial) ? void 0 : n.sku_id,
        k = (null == w ? void 0 : w.hasActiveTrial) ? (null == T ? void 0 : T.premiumType) : null,
        U = (0, h.Ng)(),
        R = (0, p.t7)(),
        B = null != N || null != k ? g.C.PREMIUM_TRIAL : null != U || R ? g.C.PREMIUM_DISCOUNT : null,
        F = (0, a.ap)((0, o.ZP)()),
        H = (0, _.A1)(R, k, U, A, N);
    return (0, l.jsxs)('div', {
        className: r()(S.card, S.tier2, Z),
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
                                src: P,
                                alt: '',
                                className: S.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, l.jsx)(j.E, {
                text: null != H ? H : y.intl.string(y.t['6bEcYm']),
                className: S.pill
            }),
            (0, l.jsx)(u.Z, {
                className: S.wordmark,
                color: F ? 'black' : 'white'
            }),
            (0, l.jsx)(L.Z, {
                isGift: b,
                premiumTier: g.p9.TIER_2,
                offerType: B,
                offerTierMatchesCard: N === g.Si.TIER_2 || (0, h.Wp)(U, g.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: I,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, l.jsx)('hr', { className: S.divider }),
            (0, l.jsx)(m.nT, {
                featureSet: c,
                isModal: O,
                isGift: b,
                enablePremiumBrandRefresh: !0
            }),
            t,
            M && (0, l.jsx)(x.f, {})
        ]
    });
}
