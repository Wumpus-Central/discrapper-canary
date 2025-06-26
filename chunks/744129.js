t.d(n, {
    I: () => O,
    U: () => b
});
var i = t(255367);
t(73800);
var l = t(120356),
    r = t.n(l),
    s = t(442837),
    a = t(304789),
    o = t(780384),
    C = t(410030),
    d = t(594174),
    c = t(78839),
    u = t(756896),
    p = t(589072),
    x = t(140465),
    h = t(474706),
    f = t(104494),
    j = t(639119),
    _ = t(947390),
    m = t(382791),
    L = t(823188),
    g = t(52741),
    y = t(474936),
    E = t(388032),
    S = t(767594),
    v = t(895601),
    P = t(381126),
    Z = t(234286);
function b(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, className: a, isGift: p = !1, priceOptions: x } = e,
        h = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        f = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        E = (0, j.N)(),
        v = null == E || null == (n = E.subscription_trial) ? void 0 : n.sku_id,
        P = (null == h ? void 0 : h.hasActiveTrial) ? (null == f ? void 0 : f.premiumType) : null,
        Z = (0, m.y_)(P, v),
        b = null != Z,
        O = (0, o.ap)((0, C.ZP)());
    return (0, i.jsxs)('div', {
        className: r()(S.card, S.tier0, a, { [S.pillMargin]: b }),
        children: [
            b &&
                (0, i.jsx)(_.E, {
                    text: Z,
                    className: S.pill
                }),
            (0, i.jsx)(u.Z, {
                className: S.wordmark,
                color: O ? 'black' : 'white'
            }),
            (0, i.jsx)(g.Z, {
                isGift: p,
                premiumTier: y.p9.TIER_0,
                offerType: y.C.PREMIUM_TRIAL,
                offerTierMatchesCard: v === y.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, i.jsx)('hr', { className: S.divider }),
            (0, i.jsx)(L.ql, { enablePremiumBrandRefresh: !0 }),
            t
        ]
    });
}
function O(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, featureSet: u = L.uZ.DEFAULT, className: b, isGift: O = !1, isModal: I = !1, priceOptions: M, showPromotionalGiftBanner: w = !1 } = e,
        T = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        A = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        k = (0, j.N)(),
        U = null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id,
        N = (null == T ? void 0 : T.hasActiveTrial) ? (null == A ? void 0 : A.premiumType) : null,
        R = (0, f.Ng)(),
        B = (0, x.t7)(),
        F = null != U || null != N ? y.C.PREMIUM_TRIAL : null != R || B ? y.C.PREMIUM_DISCOUNT : null,
        H = (0, o.ap)((0, C.ZP)()),
        G = (0, m.A1)(B, N, R, k, U);
    return (0, i.jsxs)(a.$, {
        color: 'nitro-pink',
        className: r()(S.card, b),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: P,
                                alt: '',
                                className: S.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: v,
                                alt: '',
                                className: S.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: Z,
                                alt: '',
                                className: S.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(_.E, {
                text: null != G ? G : E.intl.string(E.t['6bEcYm']),
                className: S.pill
            }),
            (0, i.jsx)(p.Z, {
                className: S.wordmark,
                color: H ? 'black' : 'white'
            }),
            (0, i.jsx)(g.Z, {
                isGift: O,
                premiumTier: y.p9.TIER_2,
                offerType: F,
                offerTierMatchesCard: U === y.Si.TIER_2 || (0, f.Wp)(R, y.Si.TIER_2),
                showYearlyPrice: l,
                priceOptions: M,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, i.jsx)('hr', { className: S.divider }),
            (0, i.jsx)(L.nT, {
                featureSet: u,
                isModal: I,
                isGift: O,
                enablePremiumBrandRefresh: !0
            }),
            t,
            w && (0, i.jsx)(h.f, {})
        ]
    });
}
