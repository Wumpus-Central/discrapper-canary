n.d(t, {
    F: () => v,
    P: () => P
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
    L = n(823188),
    g = n(474936),
    E = n(388032),
    y = n(195078),
    S = n(510319),
    Z = n(747794),
    M = n(59595);
function v(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: l, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        f = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        E = (0, j.N)(),
        S = null == E || null == (t = E.subscription_trial) ? void 0 : t.sku_id,
        Z = (null == h ? void 0 : h.hasActiveTrial) ? (null == f ? void 0 : f.premiumType) : null,
        M = (0, m.y_)(Z, S),
        v = null != M,
        P = (0, a.ap)((0, o.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier0, u, { [y.pillMargin]: v }),
        children: [
            v && (0, i.jsx)(_.F, { text: M }),
            (0, i.jsx)(c.Z, {
                className: y.wordmark,
                color: P ? 'black' : 'white'
            }),
            (0, i.jsx)(L.ko, {
                isGift: p,
                premiumTier: g.p9.TIER_0,
                offerType: L.C.PREMIUM_TRIAL,
                offerTierMatchesCard: S === g.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(L.ql, { enablePremiumRebrandDesign: !0 }),
            n
        ]
    });
}
function P(e) {
    var t, n, l;
    let { ctaButton: c, showYearlyPrice: v, featureSet: P = L.uZ.DEFAULT, className: b, isGift: I = !1, isModal: T = !1, priceOptions: N, showPromotionalGiftBanner: O = !1 } = e,
        w = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        R = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        k = (0, j.N)(),
        H = null == k || null == (t = k.subscription_trial) ? void 0 : t.sku_id,
        U = (null == w ? void 0 : w.hasActiveTrial) ? (null == R ? void 0 : R.premiumType) : null,
        A = (0, f.Ng)(),
        B = (0, p.t7)(),
        F = null != H || null != U ? L.C.PREMIUM_TRIAL : null != A || B ? L.C.PREMIUM_DISCOUNT : null,
        G = null == (n = (0, x.Z)()) ? void 0 : n.planSelection,
        D = null == G || null == (l = G.getBackgroundImageUrl) ? void 0 : l.call(G),
        W = (0, a.ap)((0, o.ZP)()),
        Y = (0, m.A1)(B, U, A, k, H);
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier2, b),
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
                                src: Z,
                                alt: '',
                                className: y.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: M,
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
            (0, i.jsx)(L.ko, {
                isGift: I,
                premiumTier: g.p9.TIER_2,
                offerType: F,
                offerTierMatchesCard: H === g.Si.TIER_2 || (0, f.Wp)(A, g.Si.TIER_2),
                showYearlyPrice: v,
                priceOptions: N,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(L.nT, {
                featureSet: P,
                isModal: T,
                isGift: I,
                enablePremiumRebrandDesign: !0
            }),
            c,
            O && (0, i.jsx)(h.w, {})
        ]
    });
}
