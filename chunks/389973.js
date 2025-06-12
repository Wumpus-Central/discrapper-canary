t.d(n, {
    F: () => b,
    P: () => P
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
    x = t(121970),
    h = t(104494),
    j = t(639119),
    f = t(382791),
    _ = t(640698),
    m = t(823188),
    L = t(474936),
    g = t(388032),
    y = t(195078),
    S = t(895601),
    E = t(381126),
    v = t(234286);
function b(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        g = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        S = (0, j.N)(),
        E = null == S || null == (n = S.subscription_trial) ? void 0 : n.sku_id,
        v = (null == h ? void 0 : h.hasActiveTrial) ? (null == g ? void 0 : g.premiumType) : null,
        b = (0, f.y_)(v, E),
        P = null != b,
        Z = (0, a.ap)((0, o.ZP)());
    return (0, i.jsxs)('div', {
        className: r()(y.card, y.tier0, u, { [y.pillMargin]: P }),
        children: [
            P && (0, i.jsx)(_.F, { text: b }),
            (0, i.jsx)(c.Z, {
                className: y.wordmark,
                color: Z ? 'black' : 'white'
            }),
            (0, i.jsx)(m.ko, {
                isGift: p,
                premiumTier: L.p9.TIER_0,
                offerType: m.C.PREMIUM_TRIAL,
                offerTierMatchesCard: E === L.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(m.ql, { enablePremiumRebrandDesign: !0 }),
            t
        ]
    });
}
function P(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, featureSet: c = m.uZ.DEFAULT, className: b, isGift: P = !1, isModal: Z = !1, priceOptions: O, showPromotionalGiftBanner: I = !1 } = e,
        w = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        M = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        T = (0, j.N)(),
        A = null == T || null == (n = T.subscription_trial) ? void 0 : n.sku_id,
        k = (null == w ? void 0 : w.hasActiveTrial) ? (null == M ? void 0 : M.premiumType) : null,
        N = (0, h.Ng)(),
        U = (0, p.t7)(),
        R = null != A || null != k ? m.C.PREMIUM_TRIAL : null != N || U ? m.C.PREMIUM_DISCOUNT : null,
        F = (0, a.ap)((0, o.ZP)()),
        H = (0, f.A1)(U, k, N, T, A);
    return (0, i.jsxs)('div', {
        className: r()(y.card, y.tier2, b),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: E,
                                alt: '',
                                className: y.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: S,
                                alt: '',
                                className: y.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: v,
                                alt: '',
                                className: y.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(_.F, { text: null != H ? H : g.intl.string(g.t['6bEcYm']) }),
            (0, i.jsx)(u.Z, {
                className: y.wordmark,
                color: F ? 'black' : 'white'
            }),
            (0, i.jsx)(m.ko, {
                isGift: P,
                premiumTier: L.p9.TIER_2,
                offerType: R,
                offerTierMatchesCard: A === L.Si.TIER_2 || (0, h.Wp)(N, L.Si.TIER_2),
                showYearlyPrice: l,
                priceOptions: O,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(m.nT, {
                featureSet: c,
                isModal: Z,
                isGift: P,
                enablePremiumRebrandDesign: !0
            }),
            t,
            I && (0, i.jsx)(x.w, {})
        ]
    });
}
