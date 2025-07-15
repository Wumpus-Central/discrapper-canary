n.d(t, {
    IL: () => Z,
    UQ: () => D,
    rz: () => w
});
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(409794),
    l = n(442837),
    o = n(304789),
    c = n(780384),
    d = n(410030),
    u = n(607070),
    m = n(100527),
    p = n(906732),
    g = n(594174),
    h = n(78839),
    f = n(756896),
    b = n(589072),
    x = n(140465),
    _ = n(474706),
    j = n(104494),
    E = n(639119),
    O = n(740594),
    C = n(947390),
    v = n(382791),
    S = n(823188),
    T = n(52741),
    N = n(474936),
    I = n(388032),
    y = n(767594),
    A = n(895601),
    P = n(381126),
    R = n(234286);
function D(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: a, isGift: o = !1, priceOptions: u } = e,
        m = (0, l.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        p = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        b = (0, E.N)(),
        x = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id,
        _ = (null == m ? void 0 : m.hasActiveTrial) ? (null == p ? void 0 : p.premiumType) : null,
        j = (0, v.y_)(_, x),
        O = null != j,
        I = (0, c.ap)((0, d.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(y.card, y.tier0, a, { [y.pillMargin]: O }),
        children: [
            O &&
                (0, i.jsx)(C.E, {
                    text: j,
                    className: y.pill
                }),
            (0, i.jsx)(f.Z, {
                className: y.wordmark,
                color: I ? 'black' : 'white'
            }),
            (0, i.jsx)(T.Z, {
                isGift: o,
                premiumTier: N.p9.TIER_0,
                offerType: N.C.PREMIUM_TRIAL,
                offerTierMatchesCard: x === N.Si.TIER_0,
                showYearlyPrice: r,
                priceOptions: u,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(S.ql, { enablePremiumBrandRefresh: !0 }),
            n
        ]
    });
}
function Z(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, featureSet: a = S.uZ.DEFAULT, className: u, isGift: m = !1, isModal: p = !1, priceOptions: f, showPromotionalGiftBanner: O = !1 } = e,
        D = (0, l.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        Z = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        w = (0, E.N)(),
        k = null == w || null == (t = w.subscription_trial) ? void 0 : t.sku_id,
        L = (null == D ? void 0 : D.hasActiveTrial) ? (null == Z ? void 0 : Z.premiumType) : null,
        B = (0, j.Ng)(),
        M = (0, x.t7)(),
        U = null != k || null != L ? N.C.PREMIUM_TRIAL : null != B || M ? N.C.PREMIUM_DISCOUNT : null,
        V = (0, c.ap)((0, d.ZP)()),
        G = (0, v.A1)(M, L, B, w, k);
    return (0, i.jsxs)(o.$, {
        color: 'nitro-pink',
        className: s()(y.card, u),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: P,
                                alt: '',
                                className: y.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: A,
                                alt: '',
                                className: y.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: R,
                                alt: '',
                                className: y.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(C.E, {
                text: null != G ? G : I.intl.string(I.t['6bEcYm']),
                className: y.pill
            }),
            (0, i.jsx)(b.Z, {
                className: y.wordmark,
                color: V ? 'black' : 'white'
            }),
            (0, i.jsx)(T.Z, {
                isGift: m,
                premiumTier: N.p9.TIER_2,
                offerType: U,
                offerTierMatchesCard: k === N.Si.TIER_2 || (0, j.Wp)(B, N.Si.TIER_2),
                showYearlyPrice: r,
                priceOptions: f,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: y.priceHeader
            }),
            (0, i.jsx)('hr', { className: y.divider }),
            (0, i.jsx)(S.nT, {
                featureSet: a,
                isModal: p,
                isGift: m,
                enablePremiumBrandRefresh: !0
            }),
            n,
            O && (0, i.jsx)(_.f, {})
        ]
    });
}
function w(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: r } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_TIER_CARD),
        o = (0, S.rS)(t),
        c = (0, i.jsx)('div', {
            className: y.CTAButton,
            children: (0, i.jsx)(O.Z, {
                variant: 'secondary',
                size: 'sm',
                subscriptionTier: N.Si.TIER_0,
                fullWidth: !0
            })
        }),
        d = (0, i.jsx)('div', {
            className: y.CTAButton,
            children: (0, i.jsx)(O.Z, {
                variant: 'expressive',
                size: 'sm',
                subscriptionTier: N.Si.TIER_2,
                fullWidth: !0
            })
        }),
        g = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, i.jsx)(p.Gt, {
        value: r,
        children: (0, i.jsxs)('div', {
            className: s()(y.premiumCardsContainer, n),
            children: [
                (0, i.jsx)(a.X, {
                    variant: 'display-md',
                    color: 'header-primary',
                    className: y.premiumCardsHeader,
                    children: I.intl.string(I.t.vLz3Zm)
                }),
                (0, i.jsxs)('div', {
                    ref: o,
                    className: y.premiumCards,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()({ [y.premiumCardHover]: !g }),
                            children: (0, i.jsx)(D, {
                                className: y.applicationHomeCard,
                                ctaButton: c
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: s()({ [y.premiumCardHover]: !g }),
                            children: (0, i.jsx)(Z, {
                                className: y.applicationHomeCard,
                                ctaButton: d
                            })
                        })
                    ]
                })
            ]
        })
    });
}
