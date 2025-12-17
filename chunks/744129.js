n.d(t, {
    Fc: () => H,
    IL: () => V,
    UQ: () => B,
    rz: () => K,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(409794),
    s = n(442837),
    l = n(159691),
    c = n(780384),
    u = n(481060),
    d = n(410030),
    f = n(607070),
    p = n(100527),
    _ = n(906732),
    m = n(594174),
    h = n(78839),
    g = n(140465),
    E = n(241986),
    b = n(998030),
    y = n(474706),
    O = n(622909),
    v = n(639119),
    S = n(648613),
    I = n(38273),
    T = n(230916),
    C = n(947390),
    A = n(466309),
    N = n(382791),
    P = n(823188),
    R = n(52741),
    w = n(474936),
    D = n(353149),
    x = n(388032),
    L = n(974131),
    j = n(895601),
    M = n(381126),
    k = n(234286);
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
function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
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
        E = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        y = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        O = (0, v.N)(),
        S = null == O || null == (t = O.subscription_trial) ? void 0 : t.sku_id,
        I = (null == E ? void 0 : E.hasActiveTrial) ? (null == y ? void 0 : y.premiumType) : null,
        T = (0, N.y_)(I, S),
        A = null != T,
        D = (0, c.ap)((0, d.ZP)()),
        j = (0, b.yc)({ location: "PremiumBrandRefreshTierCards" }),
        M = g ? x.intl.string(x.t.tUbSDK) : x.intl.string(x.t["t9uG/o"]),
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                A &&
                    (0, r.jsx)(C.E, {
                        text: T,
                        className: L.pill,
                    }),
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: D ? "text-strong" : "always-white",
                    className: L.cardTitle,
                    children: M,
                }),
                (0, r.jsx)(R.Z, {
                    isGift: f,
                    premiumTier: w.PremiumTypes.TIER_0,
                    offerType: w.C.PREMIUM_TRIAL,
                    offerTierMatchesCard: S === w.Si.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: p,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: L.priceHeader,
                }),
                (0, r.jsx)("hr", { className: L.divider }),
                (0, r.jsx)(P.ql, {
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: _,
                }),
                n,
            ],
        });
    return j
        ? (0, r.jsx)(u.$1m, {
              color: "nitro-green",
              className: a()(L.card, L.tier0, l, { [L.pillMargin]: !_ && A }),
              children: k,
          })
        : (0, r.jsx)("div", {
              className: a()(L.card, L.tier0, l, { [L.pillMargin]: !_ && A }),
              children: k,
          });
}
function V(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: l = P.uZ.DEFAULT,
            className: f,
            isGift: p = !1,
            isModal: _ = !1,
            priceOptions: E,
            showPromotionalGiftBanner: b = !1,
            wumpusPosition: S = "inCard",
            isApplicationHome: I = !1,
            showWumpus: A = !0,
            showPill: D = !0,
        } = e,
        U = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        G = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        Z = (0, v.N)(),
        F = null == Z || null == (t = Z.subscription_trial) ? void 0 : t.sku_id,
        B = (null == U ? void 0 : U.hasActiveTrial) ? (null == G ? void 0 : G.premiumType) : null,
        V = (0, O.N)(),
        H = (0, g.t7)(),
        Y = null != F || null != B ? w.C.PREMIUM_TRIAL : null != V || H ? w.C.PREMIUM_DISCOUNT : null,
        W = (0, c.ap)((0, d.ZP)()),
        K = (0, N.A1)(H, B, V, Z, F),
        z = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: M,
                        alt: "",
                        className: a()(L.bigCloud, L[S]),
                    }),
                    (0, r.jsx)("img", {
                        src: j,
                        alt: "",
                        className: a()(L.smallCloud, L[S]),
                    }),
                    (0, r.jsx)("img", {
                        src: k,
                        alt: "",
                        className: a()(L.wumpus, L[S]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.$1m, {
        color: "nitro-pink",
        className: a()(L.card, f, { [L.withGiftBanner]: b }),
        children: [
            A && (0, r.jsx)(z, {}),
            D &&
                (0, r.jsx)(C.E, {
                    text: null != K ? K : x.intl.string(x.t["6bEcYr"]),
                    className: L.pill,
                }),
            (0, r.jsx)(o.X, {
                variant: "display-md",
                color: W ? "text-strong" : "always-white",
                className: L.cardTitle,
                children: x.intl.string(x.t.lG6a5x),
            }),
            (0, r.jsx)(R.Z, {
                isGift: p,
                premiumTier: w.PremiumTypes.TIER_2,
                offerType: Y,
                offerTierMatchesCard: F === w.Si.TIER_2 || (0, T.Wp)(V, w.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: E,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: L.priceHeader,
            }),
            (0, r.jsx)("hr", { className: L.divider }),
            (0, r.jsx)(P.nT, {
                featureSet: l,
                isModal: _,
                isGift: p,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: I,
                firstFeatureItemClassName: "inCard" === S ? L.firstFeatureItemContainer : void 0,
            }),
            n,
            b && (0, r.jsx)(y.f, {}),
        ],
    });
}
function H(e) {
    let { className: t, ctaButton: n, isApplicationHome: i, priceOptions: s } = e,
        l = (0, c.ap)((0, d.ZP)());
    return (0, r.jsxs)("div", {
        className: a()(L.card, L.borderGradient, t),
        children: [
            (0, r.jsxs)("div", {
                className: L.cardHeader,
                children: [
                    (0, r.jsx)(o.X, {
                        variant: "display-md",
                        color: l ? "text-strong" : "always-white",
                        className: L.cardTitle,
                        children: x.intl.string(D.default.eSKiXk),
                    }),
                    (0, r.jsx)(C.E, {
                        text: x.intl.string(x.t.oW0eUd),
                        className: L.betaPill,
                    }),
                ],
            }),
            (0, r.jsx)(A.Z, { priceOptions: s }),
            (0, r.jsx)(o.X, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: x.intl.string(D.default["R+dzZw"]),
            }),
            (0, r.jsx)("hr", { className: L.divider }),
            (0, r.jsx)(P.fm, { isApplicationHome: i }),
            n,
        ],
    });
}
let Y = (e) => {
        let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o, narrowLayout: s } = e,
            c = t === w.Si.TIER_2,
            d = c ? V : B,
            { subscribeButtonProps: f, subscriptionTier: p } = (0, I.G)({
                subscriptionTier: t,
                variantOverride: c ? "expressive" : "secondary",
            }),
            { disabled: _ } = f,
            m = (0, r.jsx)("div", {
                className: L.CTAButton,
                children: (0, r.jsx)(
                    l.zxk,
                    F(
                        G(
                            {
                                size: "md",
                                fullWidth: !0,
                            },
                            f,
                        ),
                        { disabled: _ },
                    ),
                ),
            }),
            h = (0, r.jsx)("div", {
                className: a()({ [L.premiumCardHover]: !n }),
                children: (0, r.jsx)(
                    d,
                    G(
                        {
                            className: a()(L.applicationHomeCard, { [L.narrow]: s }),
                            ctaButton: m,
                            showYearlyPrice: !0,
                            isApplicationHome: !0,
                        },
                        i,
                    ),
                ),
            });
        return (0, r.jsx)("div", {
            className: o,
            children: _
                ? h
                : (0, r.jsx)(S.Z, {
                      subscriptionTier: p,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, r.jsx)(u.P3F, {
                              onClick: t,
                              style: { cursor: "pointer" },
                              children: h,
                          });
                      },
                  }),
        });
    },
    W = (e) => {
        let { isReducedMotion: t, className: n } = e,
            i = () => {},
            o = (0, r.jsx)("div", {
                className: L.CTAButton,
                children: (0, r.jsx)(l.zxk, {
                    size: "md",
                    fullWidth: !0,
                    onClick: i,
                    icon: u.SrA,
                    text: x.intl.string(x.t["2pG5Ga"]),
                    variant: "secondary",
                }),
            }),
            s = (0, r.jsx)("div", {
                className: a()({ [L.premiumCardHover]: !t }),
                children: (0, r.jsx)(H, {
                    className: a()(L.applicationHomeCard, L.narrow),
                    ctaButton: o,
                    isApplicationHome: !0,
                }),
            });
        return (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(u.P3F, {
                onClick: i,
                style: { cursor: "pointer" },
                children: s,
            }),
        });
    };
function K(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, _.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, P.rS)(t),
        c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        u = (0, E.Z)({ location: "PremiumBrandRefreshTierCards" });
    return (0, r.jsx)(_.Gt, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(L.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: "text-strong",
                    className: L.premiumCardsHeader,
                    children: x.intl.string(x.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: L.premiumCards,
                    children: [
                        (0, r.jsx)(Y, {
                            subscriptionTier: w.Si.TIER_0,
                            isReducedMotion: c,
                            className: L.tier0CardOrder,
                            narrowLayout: u,
                        }),
                        (0, r.jsx)(Y, {
                            subscriptionTier: w.Si.TIER_2,
                            isReducedMotion: c,
                            className: L.tier2CardOrder,
                            tierCardProps: {
                                wumpusPosition: u ? "insideCorner" : "outerCorner",
                                showPill: !u,
                            },
                            narrowLayout: u,
                        }),
                        u &&
                            (0, r.jsx)(W, {
                                isReducedMotion: c,
                                className: L.premiumGroupCardOrder,
                            }),
                    ],
                }),
            ],
        }),
    });
}
