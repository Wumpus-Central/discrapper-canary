n.d(t, {
    IL: () => F,
    UQ: () => Z,
    rz: () => H,
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
    _ = n(100527),
    p = n(906732),
    h = n(594174),
    m = n(78839),
    g = n(756896),
    E = n(589072),
    b = n(140465),
    y = n(998030),
    O = n(474706),
    v = n(622909),
    I = n(639119),
    T = n(648613),
    S = n(38273),
    A = n(230916),
    C = n(947390),
    N = n(382791),
    R = n(823188),
    P = n(52741),
    D = n(474936),
    w = n(388032),
    x = n(1721),
    L = n(895601),
    M = n(381126),
    k = n(234286);
function j(e, t, n) {
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
                j(e, t, n[t]);
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
function B(e, t) {
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
function Z(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            className: o,
            isGift: l = !1,
            priceOptions: f,
            isApplicationHome: _ = !1,
        } = e,
        p = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        E = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        b = (0, I.N)(),
        O = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id,
        v = (null == p ? void 0 : p.hasActiveTrial) ? (null == E ? void 0 : E.premiumType) : null,
        T = (0, N.y_)(v, O),
        S = null != T,
        A = (0, c.ap)((0, d.ZP)()),
        w = (0, y.yc)({ location: "PremiumBrandRefreshTierCards" }),
        L = (0, r.jsxs)(r.Fragment, {
            children: [
                S &&
                    (0, r.jsx)(C.E, {
                        text: T,
                        className: x.pill,
                    }),
                (0, r.jsx)(g.Z, {
                    className: x.wordmark,
                    color: A ? "black" : "white",
                }),
                (0, r.jsx)(P.Z, {
                    isGift: l,
                    premiumTier: D.PremiumTypes.TIER_0,
                    offerType: D.C.PREMIUM_TRIAL,
                    offerTierMatchesCard: O === D.Si.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: f,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-primary",
                    headerClassName: x.priceHeader,
                }),
                (0, r.jsx)("hr", { className: x.divider }),
                (0, r.jsx)(R.ql, {
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: _,
                }),
                n,
            ],
        });
    return w
        ? (0, r.jsx)(u.$1m, {
              color: "nitro-green",
              className: a()(x.card, x.tier0, o, { [x.pillMargin]: !_ && S }),
              children: L,
          })
        : (0, r.jsx)("div", {
              className: a()(x.card, x.tier0, o, { [x.pillMargin]: !_ && S }),
              children: L,
          });
}
function F(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: o = R.uZ.DEFAULT,
            className: l,
            isGift: f = !1,
            isModal: _ = !1,
            priceOptions: p,
            showPromotionalGiftBanner: g = !1,
            wumpusPosition: y = "inCard",
            isApplicationHome: T = !1,
        } = e,
        S = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        j = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        U = (0, I.N)(),
        G = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id,
        B = (null == S ? void 0 : S.hasActiveTrial) ? (null == j ? void 0 : j.premiumType) : null,
        Z = (0, v.N)(),
        F = (0, b.t7)(),
        V = null != G || null != B ? D.C.PREMIUM_TRIAL : null != Z || F ? D.C.PREMIUM_DISCOUNT : null,
        H = (0, c.ap)((0, d.ZP)()),
        Y = (0, N.A1)(F, B, Z, U, G),
        W = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: M,
                        alt: "",
                        className: a()(x.bigCloud, x[y]),
                    }),
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(x.smallCloud, x[y]),
                    }),
                    (0, r.jsx)("img", {
                        src: k,
                        alt: "",
                        className: a()(x.wumpus, x[y]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.$1m, {
        color: "nitro-pink",
        className: a()(x.card, l, { [x.withGiftBanner]: g }),
        children: [
            (0, r.jsx)(W, {}),
            (0, r.jsx)(C.E, {
                text: null != Y ? Y : w.intl.string(w.t["6bEcYr"]),
                className: x.pill,
            }),
            (0, r.jsx)(E.Z, {
                className: x.wordmark,
                color: H ? "black" : "white",
            }),
            (0, r.jsx)(P.Z, {
                isGift: f,
                premiumTier: D.PremiumTypes.TIER_2,
                offerType: V,
                offerTierMatchesCard: G === D.Si.TIER_2 || (0, A.Wp)(Z, D.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: p,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: x.priceHeader,
            }),
            (0, r.jsx)("hr", { className: x.divider }),
            (0, r.jsx)(R.nT, {
                featureSet: o,
                isModal: _,
                isGift: f,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: T,
                firstFeatureItemClassName: "inCard" === y ? x.firstFeatureItemContainer : void 0,
            }),
            n,
            g && (0, r.jsx)(O.f, {}),
        ],
    });
}
let V = (e) => {
    let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o } = e,
        s = t === D.Si.TIER_2,
        c = s ? F : Z,
        { subscribeButtonProps: d, subscriptionTier: f } = (0, S.G)({
            subscriptionTier: t,
            variantOverride: s ? "expressive" : "secondary",
        }),
        { disabled: _ } = d,
        p = (0, r.jsx)("div", {
            className: x.CTAButton,
            children: (0, r.jsx)(
                l.zxk,
                B(
                    U(
                        {
                            size: "md",
                            fullWidth: !0,
                        },
                        d,
                    ),
                    { disabled: _ },
                ),
            ),
        }),
        h = (0, r.jsx)("div", {
            className: a()({ [x.premiumCardHover]: !n }),
            children: (0, r.jsx)(
                c,
                U(
                    {
                        className: x.applicationHomeCard,
                        ctaButton: p,
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
            : (0, r.jsx)(T.Z, {
                  subscriptionTier: f,
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
};
function H(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, R.rS)(t),
        c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsx)(p.Gt, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(x.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: "header-primary",
                    className: x.premiumCardsHeader,
                    children: w.intl.string(w.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: x.premiumCards,
                    children: [
                        (0, r.jsx)(V, {
                            subscriptionTier: D.Si.TIER_0,
                            isReducedMotion: c,
                            className: x.tier0CardOrder,
                        }),
                        (0, r.jsx)(V, {
                            subscriptionTier: D.Si.TIER_2,
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
