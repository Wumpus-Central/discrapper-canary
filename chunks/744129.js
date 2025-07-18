n.d(t, {
    IL: () => L,
    UQ: () => k,
    rz: () => M
});
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(409794),
    l = n(442837),
    o = n(680018),
    c = n(304789),
    d = n(780384),
    u = n(481060),
    m = n(410030),
    p = n(607070),
    g = n(100527),
    h = n(906732),
    f = n(594174),
    b = n(78839),
    x = n(756896),
    _ = n(589072),
    j = n(140465),
    E = n(474706),
    O = n(104494),
    C = n(639119),
    v = n(648613),
    S = n(433390),
    T = n(947390),
    N = n(382791),
    I = n(823188),
    y = n(52741),
    A = n(474936),
    P = n(388032),
    R = n(767594),
    D = n(895601),
    Z = n(381126),
    w = n(234286);
function k(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: a, isGift: o = !1, priceOptions: c } = e,
        u = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        p = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        g = (0, C.N)(),
        h = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        _ = (null == u ? void 0 : u.hasActiveTrial) ? (null == p ? void 0 : p.premiumType) : null,
        j = (0, N.y_)(_, h),
        E = null != j,
        O = (0, d.ap)((0, m.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(R.card, R.tier0, a, { [R.pillMargin]: E }),
        children: [
            E &&
                (0, i.jsx)(T.E, {
                    text: j,
                    className: R.pill
                }),
            (0, i.jsx)(x.Z, {
                className: R.wordmark,
                color: O ? 'black' : 'white'
            }),
            (0, i.jsx)(y.Z, {
                isGift: o,
                premiumTier: A.p9.TIER_0,
                offerType: A.C.PREMIUM_TRIAL,
                offerTierMatchesCard: h === A.Si.TIER_0,
                showYearlyPrice: r,
                priceOptions: c,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: R.priceHeader
            }),
            (0, i.jsx)('hr', { className: R.divider }),
            (0, i.jsx)(I.ql, { enablePremiumBrandRefresh: !0 }),
            n
        ]
    });
}
function L(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, featureSet: a = I.uZ.DEFAULT, className: o, isGift: u = !1, isModal: p = !1, priceOptions: g, showPromotionalGiftBanner: h = !1 } = e,
        x = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        v = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        S = (0, C.N)(),
        k = null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id,
        L = (null == x ? void 0 : x.hasActiveTrial) ? (null == v ? void 0 : v.premiumType) : null,
        B = (0, O.Ng)(),
        M = (0, j.t7)(),
        U = null != k || null != L ? A.C.PREMIUM_TRIAL : null != B || M ? A.C.PREMIUM_DISCOUNT : null,
        V = (0, d.ap)((0, m.ZP)()),
        G = (0, N.A1)(M, L, B, S, k);
    return (0, i.jsxs)(c.$, {
        color: 'nitro-pink',
        className: s()(R.card, o),
        children: [
            (0, i.jsx)(
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                src: Z,
                                alt: '',
                                className: R.bigCloud
                            }),
                            (0, i.jsx)('img', {
                                src: D,
                                alt: '',
                                className: R.smallCloud
                            }),
                            (0, i.jsx)('img', {
                                src: w,
                                alt: '',
                                className: R.wumpus
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(T.E, {
                text: null != G ? G : P.intl.string(P.t['6bEcYm']),
                className: R.pill
            }),
            (0, i.jsx)(_.Z, {
                className: R.wordmark,
                color: V ? 'black' : 'white'
            }),
            (0, i.jsx)(y.Z, {
                isGift: u,
                premiumTier: A.p9.TIER_2,
                offerType: U,
                offerTierMatchesCard: k === A.Si.TIER_2 || (0, O.Wp)(B, A.Si.TIER_2),
                showYearlyPrice: r,
                priceOptions: g,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: R.priceHeader
            }),
            (0, i.jsx)('hr', { className: R.divider }),
            (0, i.jsx)(I.nT, {
                featureSet: a,
                isModal: p,
                isGift: u,
                enablePremiumBrandRefresh: !0
            }),
            n,
            h && (0, i.jsx)(E.f, {})
        ]
    });
}
let B = (e) => {
    let { subscriptionTier: t, isReducedMotion: n } = e,
        r = t === A.Si.TIER_2,
        { buttonText: a, disabled: l } = (0, S.Z)({ subscriptionTier: t }),
        c = (0, i.jsx)('div', {
            className: R.CTAButton,
            children: (0, i.jsx)(o.z, {
                variant: r ? 'expressive' : 'secondary',
                size: 'md',
                fullWidth: !0,
                text: a,
                disabled: l,
                icon: u.SrA
            })
        }),
        d = (0, i.jsx)('div', {
            className: s()({ [R.premiumCardHover]: !n }),
            children: (0, i.jsx)(r ? L : k, {
                className: R.applicationHomeCard,
                ctaButton: c
            })
        });
    return l
        ? d
        : (0, i.jsx)(v.Z, {
              subscriptionTier: t,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(u.P3F, {
                      onClick: t,
                      style: { cursor: 'pointer' },
                      children: d
                  });
              }
          });
};
function M(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: r } = (0, h.ZP)(g.Z.PREMIUM_MARKETING_TIER_CARD),
        o = (0, I.rS)(t),
        c = (0, l.e7)([p.Z], () => p.Z.useReducedMotion);
    return (0, i.jsx)(h.Gt, {
        value: r,
        children: (0, i.jsxs)('div', {
            className: s()(R.premiumCardsContainer, n),
            children: [
                (0, i.jsx)(a.X, {
                    variant: 'display-md',
                    color: 'header-primary',
                    className: R.premiumCardsHeader,
                    children: P.intl.string(P.t.vLz3Zm)
                }),
                (0, i.jsxs)('div', {
                    ref: o,
                    className: R.premiumCards,
                    children: [
                        (0, i.jsx)(B, {
                            subscriptionTier: A.Si.TIER_0,
                            isReducedMotion: c
                        }),
                        (0, i.jsx)(B, {
                            subscriptionTier: A.Si.TIER_2,
                            isReducedMotion: c
                        })
                    ]
                })
            ]
        })
    });
}
