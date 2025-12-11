n.d(t, {
    Fc: () => V,
    IL: () => B,
    UQ: () => F,
    rz: () => Y,
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
    E = n(998030),
    b = n(474706),
    y = n(622909),
    O = n(639119),
    v = n(648613),
    S = n(38273),
    I = n(230916),
    T = n(947390),
    C = n(466309),
    A = n(382791),
    N = n(823188),
    P = n(52741),
    R = n(474936),
    w = n(137427),
    D = n(388032),
    x = n(974131),
    L = n(895601),
    j = n(381126),
    M = n(234286);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
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
        b = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        y = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        v = (0, O.N)(),
        S = null == v || null == (t = v.subscription_trial) ? void 0 : t.sku_id,
        I = (null == b ? void 0 : b.hasActiveTrial) ? (null == y ? void 0 : y.premiumType) : null,
        C = (0, A.y_)(I, S),
        w = null != C,
        L = (0, c.ap)((0, d.ZP)()),
        j = (0, E.yc)({ location: "PremiumBrandRefreshTierCards" }),
        M = g ? D.intl.string(D.t.tUbSDK) : D.intl.string(D.t["t9uG/o"]),
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                w &&
                    (0, r.jsx)(T.E, {
                        text: C,
                        className: x.pill,
                    }),
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: L ? "text-strong" : "always-white",
                    className: x.cardTitle,
                    children: M,
                }),
                (0, r.jsx)(P.Z, {
                    isGift: f,
                    premiumTier: R.PremiumTypes.TIER_0,
                    offerType: R.C.PREMIUM_TRIAL,
                    offerTierMatchesCard: S === R.Si.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: p,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: x.priceHeader,
                }),
                (0, r.jsx)("hr", { className: x.divider }),
                (0, r.jsx)(N.ql, {
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: _,
                }),
                n,
            ],
        });
    return j
        ? (0, r.jsx)(u.$1m, {
              color: "nitro-green",
              className: a()(x.card, x.tier0, l, { [x.pillMargin]: !_ && w }),
              children: k,
          })
        : (0, r.jsx)("div", {
              className: a()(x.card, x.tier0, l, { [x.pillMargin]: !_ && w }),
              children: k,
          });
}
function B(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: l = N.uZ.DEFAULT,
            className: f,
            isGift: p = !1,
            isModal: _ = !1,
            priceOptions: E,
            showPromotionalGiftBanner: v = !1,
            wumpusPosition: S = "inCard",
            isApplicationHome: C = !1,
            showWumpus: w = !0,
            showPill: k = !0,
        } = e,
        U = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        G = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        Z = (0, O.N)(),
        F = null == Z || null == (t = Z.subscription_trial) ? void 0 : t.sku_id,
        B = (null == U ? void 0 : U.hasActiveTrial) ? (null == G ? void 0 : G.premiumType) : null,
        V = (0, y.N)(),
        H = (0, g.t7)(),
        Y = null != F || null != B ? R.C.PREMIUM_TRIAL : null != V || H ? R.C.PREMIUM_DISCOUNT : null,
        W = (0, c.ap)((0, d.ZP)()),
        K = (0, A.A1)(H, B, V, Z, F),
        z = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: j,
                        alt: "",
                        className: a()(x.bigCloud, x[S]),
                    }),
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(x.smallCloud, x[S]),
                    }),
                    (0, r.jsx)("img", {
                        src: M,
                        alt: "",
                        className: a()(x.wumpus, x[S]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.$1m, {
        color: "nitro-pink",
        className: a()(x.card, f, { [x.withGiftBanner]: v }),
        children: [
            w && (0, r.jsx)(z, {}),
            k &&
                (0, r.jsx)(T.E, {
                    text: null != K ? K : D.intl.string(D.t["6bEcYr"]),
                    className: x.pill,
                }),
            (0, r.jsx)(o.X, {
                variant: "display-md",
                color: W ? "text-strong" : "always-white",
                className: x.cardTitle,
                children: D.intl.string(D.t.lG6a5x),
            }),
            (0, r.jsx)(P.Z, {
                isGift: p,
                premiumTier: R.PremiumTypes.TIER_2,
                offerType: Y,
                offerTierMatchesCard: F === R.Si.TIER_2 || (0, I.Wp)(V, R.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: E,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-strong",
                headerClassName: x.priceHeader,
            }),
            (0, r.jsx)("hr", { className: x.divider }),
            (0, r.jsx)(N.nT, {
                featureSet: l,
                isModal: _,
                isGift: p,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: C,
                firstFeatureItemClassName: "inCard" === S ? x.firstFeatureItemContainer : void 0,
            }),
            n,
            v && (0, r.jsx)(b.f, {}),
        ],
    });
}
function V(e) {
    let { className: t, ctaButton: n, isApplicationHome: i, priceOptions: s } = e,
        l = (0, c.ap)((0, d.ZP)());
    return (0, r.jsxs)("div", {
        className: a()(x.card, x.borderGradient, t),
        children: [
            (0, r.jsxs)("div", {
                className: x.cardHeader,
                children: [
                    (0, r.jsx)(o.X, {
                        variant: "display-md",
                        color: l ? "text-strong" : "always-white",
                        className: x.cardTitle,
                        children: D.intl.string(w.default.eSKiXk),
                    }),
                    (0, r.jsx)(T.E, {
                        text: D.intl.string(D.t.oW0eUd),
                        className: x.betaPill,
                    }),
                ],
            }),
            (0, r.jsx)(C.Z, { priceOptions: s }),
            (0, r.jsx)(o.X, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: D.intl.string(w.default["R+dzZw"]),
            }),
            (0, r.jsx)("hr", { className: x.divider }),
            (0, r.jsx)(N.fm, { isApplicationHome: i }),
            n,
        ],
    });
}
let H = (e) => {
    let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o } = e,
        s = t === R.Si.TIER_2,
        c = s ? B : F,
        { subscribeButtonProps: d, subscriptionTier: f } = (0, S.G)({
            subscriptionTier: t,
            variantOverride: s ? "expressive" : "secondary",
        }),
        { disabled: p } = d,
        _ = (0, r.jsx)("div", {
            className: x.CTAButton,
            children: (0, r.jsx)(
                l.zxk,
                Z(
                    U(
                        {
                            size: "md",
                            fullWidth: !0,
                        },
                        d,
                    ),
                    { disabled: p },
                ),
            ),
        }),
        m = (0, r.jsx)("div", {
            className: a()({ [x.premiumCardHover]: !n }),
            children: (0, r.jsx)(
                c,
                U(
                    {
                        className: x.applicationHomeCard,
                        ctaButton: _,
                        showYearlyPrice: !0,
                        isApplicationHome: !0,
                    },
                    i,
                ),
            ),
        });
    return (0, r.jsx)("div", {
        className: o,
        children: p
            ? m
            : (0, r.jsx)(v.Z, {
                  subscriptionTier: f,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, r.jsx)(u.P3F, {
                          onClick: t,
                          style: { cursor: "pointer" },
                          children: m,
                      });
                  },
              }),
    });
};
function Y(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, _.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, N.rS)(t),
        c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsx)(_.Gt, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(x.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: "text-strong",
                    className: x.premiumCardsHeader,
                    children: D.intl.string(D.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: x.premiumCards,
                    children: [
                        (0, r.jsx)(H, {
                            subscriptionTier: R.Si.TIER_0,
                            isReducedMotion: c,
                            className: x.tier0CardOrder,
                        }),
                        (0, r.jsx)(H, {
                            subscriptionTier: R.Si.TIER_2,
                            isReducedMotion: c,
                            className: x.tier2CardOrder,
                            tierCardProps: { wumpusPosition: "inCorner" },
                        }),
                    ],
                }),
            ],
        }),
    });
}
