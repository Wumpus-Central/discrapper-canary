t.d(n, {
    I: () => b,
    U: () => Z
});
var i = t(255367);
t(73800);
var l = t(120356),
    r = t.n(l),
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
    E = t(767594),
    S = t(895601),
    v = t(381126),
    P = t(234286);
function Z(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        y = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        S = (0, f.N)(),
        v = null == S || null == (n = S.subscription_trial) ? void 0 : n.sku_id,
        P = (null == h ? void 0 : h.hasActiveTrial) ? (null == y ? void 0 : y.premiumType) : null,
        Z = (0, _.y_)(P, v),
        b = null != Z,
        O = (0, a.ap)((0, o.ZP)());
    return (0, i.jsxs)('div', {
        className: r()(E.card, E.tier0, u, { [E.pillMargin]: b }),
        children: [
            b &&
                (0, i.jsx)(j.E, {
                    text: Z,
                    className: E.pill
                }),
            (0, i.jsx)(c.Z, {
                className: E.wordmark,
                color: O ? 'black' : 'white'
            }),
            (0, i.jsx)(L.Z, {
                isGift: p,
                premiumTier: g.p9.TIER_0,
                offerType: g.C.PREMIUM_TRIAL,
                offerTierMatchesCard: v === g.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: E.priceHeader
            }),
            (0, i.jsx)('hr', { className: E.divider }),
            (0, i.jsx)(m.ql, { enablePremiumBrandRefresh: !0 }),
            t
        ]
    });
}
function b(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, featureSet: c = m.uZ.DEFAULT, className: Z, isGift: b = !1, isModal: O = !1, priceOptions: I, showPromotionalGiftBanner: M = !1 } = e,
        w = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        T = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        A = (0, f.N)(),
        k = null == A || null == (n = A.subscription_trial) ? void 0 : n.sku_id,
        U = (null == w ? void 0 : w.hasActiveTrial) ? (null == T ? void 0 : T.premiumType) : null,
        N = (0, h.Ng)(),
        R = (0, p.t7)(),
        B = null != k || null != U ? g.C.PREMIUM_TRIAL : null != N || R ? g.C.PREMIUM_DISCOUNT : null,
        F = (0, a.ap)((0, o.ZP)()),
        H = (0, _.A1)(R, U, N, A, k);
    return (0, i.jsxs)('div', {
        className: r()(E.card, E.tier2, Z),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: v,
                                alt: '',
                                className: E.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: S,
                                alt: '',
                                className: E.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: P,
                                alt: '',
                                className: E.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(j.E, {
                text: null != H ? H : y.intl.string(y.t['6bEcYm']),
                className: E.pill
            }),
            (0, i.jsx)(u.Z, {
                className: E.wordmark,
                color: F ? 'black' : 'white'
            }),
            (0, i.jsx)(L.Z, {
                isGift: b,
                premiumTier: g.p9.TIER_2,
                offerType: B,
                offerTierMatchesCard: k === g.Si.TIER_2 || (0, h.Wp)(N, g.Si.TIER_2),
                showYearlyPrice: l,
                priceOptions: I,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: E.priceHeader
            }),
            (0, i.jsx)('hr', { className: E.divider }),
            (0, i.jsx)(m.nT, {
                featureSet: c,
                isModal: O,
                isGift: b,
                enablePremiumBrandRefresh: !0
            }),
            t,
            M && (0, i.jsx)(x.f, {})
        ]
    });
}
