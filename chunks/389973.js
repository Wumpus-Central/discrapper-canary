n.d(t, {
    F: () => b,
    P: () => I
});
var i = n(255367);
n(73800);
var l = n(120356),
    s = n.n(l),
    r = n(442837),
    a = n(780384),
    o = n(410030),
    C = n(594174),
    d = n(78839),
    c = n(756896),
    u = n(589072),
    p = n(140465),
    x = n(286961),
    h = n(121970),
    f = n(104494),
    j = n(639119),
    m = n(382791),
    _ = n(640698),
    g = n(823188),
    L = n(474936),
    E = n(388032),
    y = n(195078),
    S = n(865520),
    v = n(27252),
    P = n(234286);
function b(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: l, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        f = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        E = (0, j.N)(),
        S = null == E || null == (t = E.subscription_trial) ? void 0 : t.sku_id,
        v = (null == h ? void 0 : h.hasActiveTrial) ? (null == f ? void 0 : f.premiumType) : null,
        P = (0, m.y_)(v, S),
        b = null != P,
        I = (0, a.ap)((0, o.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier0, u, { [y.pillMargin]: b }),
        children: [
            b && (0, i.jsx)(_.F, { text: P }),
            (0, i.jsx)(c.Z, {
                className: y.wordmark,
                color: I ? 'black' : 'white'
            }),
            (0, i.jsx)(g.ko, {
                isGift: p,
                premiumTier: L.p9.TIER_0,
                offerType: g.C.PREMIUM_TRIAL,
                offerTierMatchesCard: S === L.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(g.ql, { enablePremiumRebrandDesign: !0 }),
            n
        ]
    });
}
function I(e) {
    var t, n, l;
    let { ctaButton: c, showYearlyPrice: b, featureSet: I = g.uZ.DEFAULT, className: T, isGift: M = !1, isModal: Z = !1, priceOptions: N, showPromotionalGiftBanner: O = !1 } = e,
        R = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        k = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        U = (0, j.N)(),
        A = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id,
        w = (null == R ? void 0 : R.hasActiveTrial) ? (null == k ? void 0 : k.premiumType) : null,
        H = (0, f.Ng)(),
        F = (0, p.t7)(),
        B = null != A || null != w ? g.C.PREMIUM_TRIAL : null != H || F ? g.C.PREMIUM_DISCOUNT : null,
        G = null == (n = (0, x.Z)()) ? void 0 : n.planSelection,
        D = null == G || null == (l = G.getBackgroundImageUrl) ? void 0 : l.call(G),
        W = (0, a.ap)((0, o.ZP)()),
        Y = (0, m.A1)(F, w, H, U, A);
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier2, T),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: S,
                                alt: '',
                                className: y.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: v,
                                alt: '',
                                className: y.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: P,
                                alt: '',
                                className: y.wumpus
                            })
                        ]
                    }),
                {}
            ),
            O &&
                null !== D &&
                (0, i.jsx)('img', {
                    className: y.promotionalBackgroundImage,
                    alt: '',
                    src: D
                }),
            (0, i.jsx)(_.F, { text: null != Y ? Y : E.intl.string(E.t['6bEcYm']) }),
            (0, i.jsx)(u.Z, {
                className: y.wordmark,
                color: W ? 'black' : 'white'
            }),
            (0, i.jsx)(g.ko, {
                isGift: M,
                premiumTier: L.p9.TIER_2,
                offerType: B,
                offerTierMatchesCard: A === L.Si.TIER_2 || (0, f.Wp)(H, L.Si.TIER_2),
                showYearlyPrice: b,
                priceOptions: N,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(g.nT, {
                featureSet: I,
                isModal: Z,
                isGift: M,
                enablePremiumRebrandDesign: !0
            }),
            c,
            O && (0, i.jsx)(h.w, {})
        ]
    });
}
