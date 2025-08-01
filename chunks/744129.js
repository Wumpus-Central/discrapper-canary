n.d(t, {
    IL: () => B,
    UQ: () => L,
    rz: () => U
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
    C = n(474706),
    O = n(104494),
    E = n(639119),
    v = n(648613),
    S = n(38273),
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
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function L(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: a, isGift: o = !1, priceOptions: c, isApplicationHome: u = !1 } = e,
        p = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        g = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        h = (0, E.N)(),
        _ = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id,
        j = (null == p ? void 0 : p.hasActiveTrial) ? (null == g ? void 0 : g.premiumType) : null,
        C = (0, N.y_)(j, _),
        O = null != C,
        v = (0, d.ap)((0, m.ZP)());
    return (0, i.jsxs)('div', {
        className: s()(R.card, R.tier0, a, { [R.pillMargin]: !u && O }),
        children: [
            O &&
                (0, i.jsx)(T.E, {
                    text: C,
                    className: R.pill
                }),
            (0, i.jsx)(x.Z, {
                className: R.wordmark,
                color: v ? 'black' : 'white'
            }),
            (0, i.jsx)(y.Z, {
                isGift: o,
                premiumTier: A.p9.TIER_0,
                offerType: A.C.PREMIUM_TRIAL,
                offerTierMatchesCard: _ === A.Si.TIER_0,
                showYearlyPrice: r,
                priceOptions: c,
                enablePremiumBrandRefresh: !0,
                headingVariant: 'text-md/medium',
                headingColor: 'text-primary',
                headerClassName: R.priceHeader
            }),
            (0, i.jsx)('hr', { className: R.divider }),
            (0, i.jsx)(I.ql, {
                enablePremiumBrandRefresh: !0,
                isApplicationHome: u
            }),
            n
        ]
    });
}
function B(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, featureSet: a = I.uZ.DEFAULT, className: o, isGift: u = !1, isModal: p = !1, priceOptions: g, showPromotionalGiftBanner: h = !1, wumpusPosition: x = 'inCard', isApplicationHome: v = !1 } = e,
        S = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        k = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        L = (0, E.N)(),
        B = null == L || null == (t = L.subscription_trial) ? void 0 : t.sku_id,
        M = (null == S ? void 0 : S.hasActiveTrial) ? (null == k ? void 0 : k.premiumType) : null,
        U = (0, O.Ng)(),
        V = (0, j.t7)(),
        G = null != B || null != M ? A.C.PREMIUM_TRIAL : null != U || V ? A.C.PREMIUM_DISCOUNT : null,
        F = (0, d.ap)((0, m.ZP)()),
        H = (0, N.A1)(V, M, U, L, B);
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
                                className: s()(R.bigCloud, R[x])
                            }),
                            (0, i.jsx)('img', {
                                src: D,
                                alt: '',
                                className: s()(R.smallCloud, R[x])
                            }),
                            (0, i.jsx)('img', {
                                src: w,
                                alt: '',
                                className: s()(R.wumpus, R[x])
                            })
                        ]
                    }),
                {}
            ),
            (0, i.jsx)(T.E, {
                text: null != H ? H : P.intl.string(P.t['6bEcYm']),
                className: R.pill
            }),
            (0, i.jsx)(_.Z, {
                className: R.wordmark,
                color: F ? 'black' : 'white'
            }),
            (0, i.jsx)(y.Z, {
                isGift: u,
                premiumTier: A.p9.TIER_2,
                offerType: G,
                offerTierMatchesCard: B === A.Si.TIER_2 || (0, O.Wp)(U, A.Si.TIER_2),
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
                enablePremiumBrandRefresh: !0,
                isApplicationHome: v
            }),
            n,
            h && (0, i.jsx)(C.f, {})
        ]
    });
}
let M = (e) => {
    var t, n;
    let { subscriptionTier: r, isReducedMotion: a, tierCardProps: l, className: c } = e,
        d = r === A.Si.TIER_2,
        { subscribeButtonProps: m, subscriptionTier: p } = (0, S.G)({
            subscriptionTier: r,
            variantOverride: d ? 'expressive' : 'secondary'
        }),
        { disabled: g } = m,
        h = (0, i.jsx)('div', {
            className: R.CTAButton,
            children: (0, i.jsx)(
                o.z,
                ((t = k(
                    {
                        size: 'md',
                        fullWidth: !0
                    },
                    m
                )),
                (n = n = { disabled: g }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        }),
        f = (0, i.jsx)('div', {
            className: s()({ [R.premiumCardHover]: !a }),
            children: (0, i.jsx)(
                d ? B : L,
                k(
                    {
                        className: R.applicationHomeCard,
                        ctaButton: h,
                        showYearlyPrice: !0,
                        isApplicationHome: !0
                    },
                    l
                )
            )
        });
    return (0, i.jsx)('div', {
        className: c,
        children: g
            ? f
            : (0, i.jsx)(v.Z, {
                  subscriptionTier: p,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(u.P3F, {
                          onClick: t,
                          style: { cursor: 'pointer' },
                          children: f
                      });
                  }
              })
    });
};
function U(e) {
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
                        (0, i.jsx)(M, {
                            subscriptionTier: A.Si.TIER_0,
                            isReducedMotion: c,
                            className: R.tier0CardOrder
                        }),
                        (0, i.jsx)(M, {
                            subscriptionTier: A.Si.TIER_2,
                            isReducedMotion: c,
                            className: R.tier2CardOrder,
                            tierCardProps: { wumpusPosition: 'inCorner' }
                        })
                    ]
                })
            ]
        })
    });
}
