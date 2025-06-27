n.d(t, {
    IL: () => D,
    UQ: () => R,
    rz: () => Z
});
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(409794),
    a = n(442837),
    o = n(304789),
    c = n(780384),
    d = n(410030),
    u = n(100527),
    m = n(906732),
    g = n(594174),
    p = n(78839),
    h = n(756896),
    f = n(589072),
    b = n(140465),
    _ = n(474706),
    x = n(104494),
    E = n(639119),
    j = n(740594),
    C = n(947390),
    O = n(382791),
    S = n(823188),
    v = n(52741),
    T = n(474936),
    I = n(388032),
    N = n(767594),
    y = n(895601),
    A = n(381126),
    P = n(234286);
function R(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: l, isGift: o = !1, priceOptions: u } = e,
        m = (0, a.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        f = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        b = (0, E.N)(),
        _ = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id,
        x = (null == m ? void 0 : m.hasActiveTrial) ? (null == f ? void 0 : f.premiumType) : null,
        j = (0, O.y_)(x, _),
        I = null != j,
        y = (0, c.ap)((0, d.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(N.card, N.tier0, l, { [N.pillMargin]: I }),
        children: [
            I &&
                (0, i.jsx)(C.E, {
                    text: j,
                    className: N.pill
                }),
            (0, i.jsx)(h.Z, {
                className: N.wordmark,
                color: y ? 'black' : 'white'
            }),
            (0, i.jsx)(v.Z, {
                isGift: o,
                premiumTier: T.p9.TIER_0,
                offerType: T.C.PREMIUM_TRIAL,
                offerTierMatchesCard: _ === T.Si.TIER_0,
                showYearlyPrice: r,
                priceOptions: u,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: N.priceHeader
            }),
            (0, i.jsx)('hr', { className: N.divider }),
            (0, i.jsx)(S.ql, { enablePremiumBrandRefresh: !0 }),
            n
        ]
    });
}
function D(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, featureSet: l = S.uZ.DEFAULT, className: u, isGift: m = !1, isModal: h = !1, priceOptions: j, showPromotionalGiftBanner: R = !1 } = e,
        D = (0, a.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        Z = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        w = (0, E.N)(),
        k = null == w || null == (t = w.subscription_trial) ? void 0 : t.sku_id,
        L = (null == D ? void 0 : D.hasActiveTrial) ? (null == Z ? void 0 : Z.premiumType) : null,
        B = (0, x.Ng)(),
        M = (0, b.t7)(),
        U = null != k || null != L ? T.C.PREMIUM_TRIAL : null != B || M ? T.C.PREMIUM_DISCOUNT : null,
        V = (0, c.ap)((0, d.ZP)()),
        G = (0, O.A1)(M, L, B, w, k);
    return (0, i.jsxs)(o.$, {
        color: 'nitro-pink',
        className: s()(N.card, u),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: A,
                                alt: '',
                                className: N.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: y,
                                alt: '',
                                className: N.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: P,
                                alt: '',
                                className: N.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(C.E, {
                text: null != G ? G : I.intl.string(I.t['6bEcYm']),
                className: N.pill
            }),
            (0, i.jsx)(f.Z, {
                className: N.wordmark,
                color: V ? 'black' : 'white'
            }),
            (0, i.jsx)(v.Z, {
                isGift: m,
                premiumTier: T.p9.TIER_2,
                offerType: U,
                offerTierMatchesCard: k === T.Si.TIER_2 || (0, x.Wp)(B, T.Si.TIER_2),
                showYearlyPrice: r,
                priceOptions: j,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: N.priceHeader
            }),
            (0, i.jsx)('hr', { className: N.divider }),
            (0, i.jsx)(S.nT, {
                featureSet: l,
                isModal: h,
                isGift: m,
                enablePremiumBrandRefresh: !0
            }),
            n,
            R && (0, i.jsx)(_.f, {})
        ]
    });
}
function Z(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: r } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        a = (0, S.rS)(t),
        o = (0, i.jsx)('div', {
            className: N.CTAButton,
            children: (0, i.jsx)(j.Z, {
                variant: 'tertiary',
                size: 'sm',
                subscriptionTier: T.Si.TIER_0,
                fullWidth: !0
            })
        }),
        c = (0, i.jsx)('div', {
            className: N.CTAButton,
            children: (0, i.jsx)(j.Z, {
                variant: 'expressive',
                size: 'sm',
                subscriptionTier: T.Si.TIER_2,
                fullWidth: !0
            })
        });
    return (0, i.jsx)(m.Gt, {
        value: r,
        children: (0, i.jsxs)('div', {
            className: s()(N.premiumCardsContainer, n),
            children: [
                (0, i.jsx)(l.X, {
                    variant: 'display-md',
                    color: 'header-primary',
                    className: N.premiumCardsHeader,
                    children: I.intl.string(I.t.vLz3Zm)
                }),
                (0, i.jsxs)('div', {
                    ref: a,
                    className: N.premiumCards,
                    children: [
                        (0, i.jsx)(R, {
                            className: N.applicationHomeCard,
                            ctaButton: o
                        }),
                        (0, i.jsx)(D, {
                            className: N.applicationHomeCard,
                            ctaButton: c
                        })
                    ]
                })
            ]
        })
    });
}
