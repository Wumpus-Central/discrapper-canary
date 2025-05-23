n.d(t, {
    F: () => P,
    P: () => v
});
var i = n(255367);
n(73800);
var l = n(120356),
    s = n.n(l),
    r = n(442837),
    a = n(780384),
    C = n(410030),
    o = n(594174),
    d = n(78839),
    c = n(756896),
    u = n(589072),
    p = n(140465),
    x = n(286961),
    h = n(33052),
    f = n(104494),
    j = n(639119),
    m = n(382791),
    L = n(640698),
    _ = n(823188),
    g = n(474936),
    E = n(388032),
    y = n(862189),
    S = n(510319),
    M = n(747794),
    Z = n(59595);
function P(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: l, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        f = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        E = (0, j.N)(),
        S = null == E || null == (t = E.subscription_trial) ? void 0 : t.sku_id,
        M = (null == h ? void 0 : h.hasActiveTrial) ? (null == f ? void 0 : f.premiumType) : null,
        Z = (0, m.y_)(M, S),
        P = null != Z,
        v = (0, a.ap)((0, C.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier0, u, { [y.pillMargin]: P }),
        children: [
            P && (0, i.jsx)(L.F, { text: Z }),
            (0, i.jsx)(c.Z, {
                className: y.wordmark,
                color: v ? 'black' : 'white'
            }),
            (0, i.jsx)(_.ko, {
                isGift: p,
                premiumTier: g.p9.TIER_0,
                offerType: _.C.PREMIUM_TRIAL,
                offerTierMatchesCard: S === g.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(_.ql, { enablePremiumRebrandDesign: !0 }),
            n
        ]
    });
}
function v(e) {
    var t, n, l;
    let { ctaButton: c, showYearlyPrice: P, featureSet: v = _.uZ.DEFAULT, className: I, isGift: b = !1, isModal: T = !1, priceOptions: N, showPromotionalGiftBanner: O = !1 } = e,
        w = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        k = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        H = (0, j.N)(),
        R = null == H || null == (t = H.subscription_trial) ? void 0 : t.sku_id,
        U = (null == w ? void 0 : w.hasActiveTrial) ? (null == k ? void 0 : k.premiumType) : null,
        A = (0, f.Ng)(),
        B = (0, p.t7)(),
        F = null != R || null != U ? _.C.PREMIUM_TRIAL : null != A || B ? _.C.PREMIUM_DISCOUNT : null,
        G = null == (n = (0, x.Z)()) ? void 0 : n.planSelection,
        D = null == G || null == (l = G.getBackgroundImageUrl) ? void 0 : l.call(G),
        W = (0, a.ap)((0, C.ZP)()),
        Y = (0, m.A1)(B, U, A, H, R);
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier2, I),
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
                                src: M,
                                alt: '',
                                className: y.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: Z,
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
            (0, i.jsx)(L.F, { text: null != Y ? Y : E.intl.string(E.t['6bEcYm']) }),
            (0, i.jsx)(u.Z, {
                className: y.wordmark,
                color: W ? 'black' : 'white'
            }),
            (0, i.jsx)(_.ko, {
                isGift: b,
                premiumTier: g.p9.TIER_2,
                offerType: F,
                offerTierMatchesCard: R === g.Si.TIER_2 || (0, f.Wp)(A, g.Si.TIER_2),
                showYearlyPrice: P,
                priceOptions: N,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(_.nT, {
                featureSet: v,
                isModal: T,
                isGift: b,
                enablePremiumRebrandDesign: !0
            }),
            c,
            O && (0, i.jsx)(h.K, {})
        ]
    });
}
