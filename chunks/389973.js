t.d(n, {
    F: () => P,
    P: () => Z
});
var i = t(255367);
t(73800);
var l = t(120356),
    s = t.n(l),
    r = t(442837),
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
    L = t(52741),
    g = t(474936),
    y = t(388032),
    S = t(195078),
    E = t(895601),
    b = t(381126),
    v = t(234286);
function P(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, className: u, isGift: p = !1, priceOptions: x } = e,
        h = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        y = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        E = (0, j.N)(),
        b = null == E || null == (n = E.subscription_trial) ? void 0 : n.sku_id,
        v = (null == h ? void 0 : h.hasActiveTrial) ? (null == y ? void 0 : y.premiumType) : null,
        P = (0, f.y_)(v, b),
        Z = null != P,
        O = (0, a.ap)((0, o.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(S.card, S.tier0, u, { [S.pillMargin]: Z }),
        children: [
            Z &&
                (0, i.jsx)(_.F, {
                    text: P,
                    className: S.pill
                }),
            (0, i.jsx)(c.Z, {
                className: S.wordmark,
                color: O ? 'black' : 'white'
            }),
            (0, i.jsx)(L.Z, {
                isGift: p,
                premiumTier: g.p9.TIER_0,
                offerType: g.C.PREMIUM_TRIAL,
                offerTierMatchesCard: b === g.Si.TIER_0,
                showYearlyPrice: l,
                priceOptions: x,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, i.jsx)('hr', { className: S.divider }),
            (0, i.jsx)(m.ql, { enablePremiumRebrandDesign: !0 }),
            t
        ]
    });
}
function Z(e) {
    var n;
    let { ctaButton: t, showYearlyPrice: l, featureSet: c = m.uZ.DEFAULT, className: P, isGift: Z = !1, isModal: O = !1, priceOptions: I, showPromotionalGiftBanner: w = !1 } = e,
        M = (0, r.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        T = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        A = (0, j.N)(),
        N = null == A || null == (n = A.subscription_trial) ? void 0 : n.sku_id,
        k = (null == M ? void 0 : M.hasActiveTrial) ? (null == T ? void 0 : T.premiumType) : null,
        U = (0, h.Ng)(),
        R = (0, p.t7)(),
        F = null != N || null != k ? g.C.PREMIUM_TRIAL : null != U || R ? g.C.PREMIUM_DISCOUNT : null,
        H = (0, a.ap)((0, o.ZP)()),
        B = (0, f.A1)(R, k, U, A, N);
    return (0, i.jsxs)('div', {
        className: s()(S.card, S.tier2, P),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: b,
                                alt: '',
                                className: S.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: E,
                                alt: '',
                                className: S.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: v,
                                alt: '',
                                className: S.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(_.F, {
                text: null != B ? B : y.intl.string(y.t['6bEcYm']),
                className: S.pill
            }),
            (0, i.jsx)(u.Z, {
                className: S.wordmark,
                color: H ? 'black' : 'white'
            }),
            (0, i.jsx)(L.Z, {
                isGift: Z,
                premiumTier: g.p9.TIER_2,
                offerType: F,
                offerTierMatchesCard: N === g.Si.TIER_2 || (0, h.Wp)(U, g.Si.TIER_2),
                showYearlyPrice: l,
                priceOptions: I,
                enablePremiumRebrandDesign: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: S.priceHeader
            }),
            (0, i.jsx)('hr', { className: S.divider }),
            (0, i.jsx)(m.nT, {
                featureSet: c,
                isModal: O,
                isGift: Z,
                enablePremiumRebrandDesign: !0
            }),
            t,
            w && (0, i.jsx)(x.w, {})
        ]
    });
}
