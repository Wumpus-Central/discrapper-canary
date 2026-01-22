n.d(t, {
    AP: () => B,
    KV: () => H,
    hy: () => z,
    r6: () => Y,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(534514),
    o = n(311907),
    l = n(732955),
    c = n(582754),
    u = n(397927),
    d = n(736653),
    f = n(775602),
    p = n(793574),
    _ = n(688810),
    h = n(287809),
    m = n(166403),
    g = n(526292),
    E = n(950806),
    b = n(932003),
    y = n(422936),
    O = n(234419),
    A = n(612669),
    v = n(783420),
    S = n(204413),
    I = n(511484),
    T = n(356309),
    C = n(257284),
    N = n(795269),
    R = n(501007),
    w = n(90526),
    P = n(788868),
    D = n(519412),
    x = n(985018),
    L = n(855135),
    j = n(232266),
    M = n(243002),
    k = n(241988);

function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}

function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function B(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            className: l,
            isGift: f = !1,
            priceOptions: p,
            isApplicationHome: _ = !1,
            useShortTitle: g = !1,
        } = e,
        b = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        y = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        A = (0, O.V)(),
        v = null == A || null == (t = A.subscription_trial) ? void 0 : t.sku_id,
        S = (null == b ? void 0 : b.hasActiveTrial) ? (null == y ? void 0 : y.premiumType) : null,
        I = (0, N.Lj)(S, v),
        C = null != I,
        D = (0, c.qB)((0, d.Ay)()),
        j = (0, E.xD)({
            location: "PremiumBrandRefreshTierCards",
        }),
        M = g ? x.intl.string(x.t.tUbSDK) : x.intl.string(x.t["t9uG/o"]),
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                C &&
                    (0, r.jsx)(T.D, {
                        text: I,
                        className: L.pill,
                    }),
                (0, r.jsx)(s.D, {
                    variant: "display-md",
                    color: D ? "text-strong" : "always-white",
                    className: L.cardTitle,
                    children: M,
                }),
                (0, r.jsx)(w.A, {
                    isGift: f,
                    premiumTier: P.PremiumTypes.TIER_0,
                    offerType: P.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: v === P.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: p,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: L.priceHeader,
                }),
                (0, r.jsx)("hr", {
                    className: L.divider,
                }),
                (0, r.jsx)(R.nH, {
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: _,
                }),
                n,
            ],
        });
    return j
        ? (0, r.jsx)(u.hLv, {
              color: "nitro-green",
              className: a()(L.card, L.tier0, l, {
                  [L.pillMargin]: !_ && C,
              }),
              children: k,
          })
        : (0, r.jsx)("div", {
              className: a()(L.card, L.tier0, l, {
                  [L.pillMargin]: !_ && C,
              }),
              children: k,
          });
}

function H(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: l = R.Nz.DEFAULT,
            className: f,
            isGift: p = !1,
            isModal: _ = !1,
            priceOptions: E,
            showPromotionalGiftBanner: A = !1,
            wumpusPosition: v = "inCard",
            isApplicationHome: S = !1,
            showWumpus: C = !0,
            showPill: D = !0,
        } = e,
        U = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        G = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        V = (0, O.V)(),
        F = null == V || null == (t = V.subscription_trial) ? void 0 : t.sku_id,
        B = (null == U ? void 0 : U.hasActiveTrial) ? (null == G ? void 0 : G.premiumType) : null,
        H = (0, y.O)(),
        Y = (0, g.k5)(),
        W = null != F || null != B ? P.Vk.PREMIUM_TRIAL : null != H || Y ? P.Vk.PREMIUM_DISCOUNT : null,
        K = (0, c.qB)((0, d.Ay)()),
        z = (0, N.rm)(Y, B, H, V, F),
        q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: M,
                        alt: "",
                        className: a()(L.bigCloud, L[v]),
                    }),
                    (0, r.jsx)("img", {
                        src: j,
                        alt: "",
                        className: a()(L.smallCloud, L[v]),
                    }),
                    (0, r.jsx)("img", {
                        src: k,
                        alt: "",
                        className: a()(L.wumpus, L[v]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.hLv, {
        color: "nitro-pink",
        className: a()(L.card, f, {
            [L.withGiftBanner]: A,
        }),
        children: [
            C && (0, r.jsx)(q, {}),
            D &&
                (0, r.jsx)(T.D, {
                    text: null != z ? z : x.intl.string(x.t["6bEcYr"]),
                    className: L.pill,
                }),
            (0, r.jsx)(s.D, {
                variant: "display-md",
                color: K ? "text-strong" : "always-white",
                className: L.cardTitle,
                children: x.intl.string(x.t.lG6a5x),
            }),
            (0, r.jsx)(w.A, {
                isGift: p,
                premiumTier: P.PremiumTypes.TIER_2,
                offerType: W,
                offerTierMatchesCard: F === P.pe.TIER_2 || (0, I.U9)(H, P.pe.TIER_2),
                showYearlyPrice: i,
                priceOptions: E,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: L.priceHeader,
            }),
            (0, r.jsx)("hr", {
                className: L.divider,
            }),
            (0, r.jsx)(R.ZP, {
                featureSet: l,
                isModal: _,
                isGift: p,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: S,
                firstFeatureItemClassName: "inCard" === v ? L.firstFeatureItemContainer : void 0,
            }),
            n,
            A && (0, r.jsx)(b.b, {}),
        ],
    });
}

function Y(e) {
    let { className: t, ctaButton: n, isApplicationHome: i, priceOptions: o } = e,
        l = (0, c.qB)((0, d.Ay)());
    return (0, r.jsxs)("div", {
        className: a()(L.card, L.borderGradient, t),
        children: [
            (0, r.jsxs)("div", {
                className: L.cardHeader,
                children: [
                    (0, r.jsx)(s.D, {
                        variant: "display-md",
                        color: l ? "text-strong" : "always-white",
                        className: L.cardTitle,
                        children: x.intl.string(D.default.eSKiXk),
                    }),
                    (0, r.jsx)(T.D, {
                        text: x.intl.string(x.t.oW0eUd),
                        className: L.betaPill,
                    }),
                ],
            }),
            (0, r.jsx)(C.A, {
                priceOptions: o,
            }),
            (0, r.jsx)(s.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: x.intl.string(D.default["R+dzZw"]),
            }),
            (0, r.jsx)("hr", {
                className: L.divider,
            }),
            (0, r.jsx)(R.Lg, {
                isApplicationHome: i,
            }),
            n,
        ],
    });
}
let W = (e) => {
        let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: s, narrowLayout: o } = e,
            c = t === P.pe.TIER_2,
            d = c ? H : B,
            { subscribeButtonProps: f, subscriptionTier: p } = (0, S.$)({
                subscriptionTier: t,
                variantOverride: c ? "expressive" : "secondary",
            }),
            { disabled: _ } = f,
            h = (0, r.jsx)("div", {
                className: L.CTAButton,
                children: (0, r.jsx)(
                    l.$nd,
                    F(
                        G(
                            {
                                size: "md",
                                fullWidth: !0,
                            },
                            f,
                        ),
                        {
                            disabled: _,
                        },
                    ),
                ),
            }),
            m = (0, r.jsx)("div", {
                className: a()({
                    [L.premiumCardHover]: !n,
                }),
                children: (0, r.jsx)(
                    d,
                    G(
                        {
                            className: a()(L.applicationHomeCard, {
                                [L.narrow]: o,
                            }),
                            ctaButton: h,
                            showYearlyPrice: !0,
                            isApplicationHome: !0,
                        },
                        i,
                    ),
                ),
            });
        return (0, r.jsx)("div", {
            className: s,
            children: _
                ? m
                : (0, r.jsx)(v.A, {
                      subscriptionTier: p,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, r.jsx)(u.DUT, {
                              onClick: t,
                              style: {
                                  cursor: "pointer",
                              },
                              children: m,
                          });
                      },
                  }),
        });
    },
    K = (e) => {
        let { isReducedMotion: t, className: n } = e,
            i = (0, r.jsx)("div", {
                className: L.CTAButton,
                children: (0, r.jsx)(l.$nd, {
                    size: "md",
                    fullWidth: !0,
                    icon: u.tvc,
                    text: x.intl.string(x.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            s = (0, r.jsx)("div", {
                className: a()({
                    [L.premiumCardHover]: !t,
                }),
                children: (0, r.jsx)(Y, {
                    className: a()(L.applicationHomeCard, L.narrow),
                    ctaButton: i,
                    isApplicationHome: !0,
                }),
            });
        return (0, r.jsx)(v.A, {
            subscriptionTier: P.pe.TIER_2,
            initialPlanId: P.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)("div", {
                    className: n,
                    children: (0, r.jsx)(u.DUT, {
                        onClick: t,
                        style: {
                            cursor: "pointer",
                        },
                        children: s,
                    }),
                });
            },
        });
    };

function z(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, _.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, R.pw)(t),
        c = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        u = (0, A.PA)();
    return (0, r.jsx)(_.f5, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(L.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(s.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: L.premiumCardsHeader,
                    children: x.intl.string(x.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: L.premiumCards,
                    children: [
                        (0, r.jsx)(W, {
                            subscriptionTier: P.pe.TIER_0,
                            isReducedMotion: c,
                            className: L.tier0CardOrder,
                            narrowLayout: u,
                        }),
                        (0, r.jsx)(W, {
                            subscriptionTier: P.pe.TIER_2,
                            isReducedMotion: c,
                            className: L.tier2CardOrder,
                            tierCardProps: {
                                wumpusPosition: u ? "insideCorner" : "outerCorner",
                                showPill: !u,
                            },
                            narrowLayout: u,
                        }),
                        u &&
                            (0, r.jsx)(K, {
                                isReducedMotion: c,
                                className: L.premiumGroupCardOrder,
                            }),
                    ],
                }),
            ],
        }),
    });
}
