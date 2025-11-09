n.d(t, {
    IL: () => Z,
    UQ: () => B,
    rz: () => V,
});
var r = n(951288);
n(647438);
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
    v = n(104494),
    I = n(639119),
    S = n(648613),
    T = n(38273),
    A = n(947390),
    C = n(382791),
    N = n(823188),
    R = n(52741),
    P = n(474936),
    w = n(388032),
    D = n(518520),
    x = n(895601),
    L = n(381126),
    M = n(234286);
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
function k(e) {
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
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
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
        S = (0, C.y_)(v, O),
        T = null != S,
        w = (0, c.ap)((0, d.ZP)()),
        x = (0, y.yc)({ location: "PremiumBrandRefreshTierCards" }),
        L = (0, r.jsxs)(r.Fragment, {
            children: [
                T &&
                    (0, r.jsx)(A.E, {
                        text: S,
                        className: D.pill,
                    }),
                (0, r.jsx)(g.Z, {
                    className: D.wordmark,
                    color: w ? "black" : "white",
                }),
                (0, r.jsx)(R.Z, {
                    isGift: l,
                    premiumTier: P.PremiumTypes.TIER_0,
                    offerType: P.C.PREMIUM_TRIAL,
                    offerTierMatchesCard: O === P.Si.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: f,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-primary",
                    headerClassName: D.priceHeader,
                }),
                (0, r.jsx)("hr", { className: D.divider }),
                (0, r.jsx)(N.ql, {
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: _,
                }),
                n,
            ],
        });
    return x
        ? (0, r.jsx)(u.$1m, {
              color: "nitro-green",
              className: a()(D.card, D.tier0, o, { [D.pillMargin]: !_ && T }),
              children: L,
          })
        : (0, r.jsx)("div", {
              className: a()(D.card, D.tier0, o, { [D.pillMargin]: !_ && T }),
              children: L,
          });
}
function Z(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: o = N.uZ.DEFAULT,
            className: l,
            isGift: f = !1,
            isModal: _ = !1,
            priceOptions: p,
            showPromotionalGiftBanner: g = !1,
            wumpusPosition: y = "inCard",
            isApplicationHome: S = !1,
        } = e,
        T = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        j = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        k = (0, I.N)(),
        U = null == k || null == (t = k.subscription_trial) ? void 0 : t.sku_id,
        G = (null == T ? void 0 : T.hasActiveTrial) ? (null == j ? void 0 : j.premiumType) : null,
        B = (0, v.Ng)(),
        Z = (0, b.t7)(),
        F = null != U || null != G ? P.C.PREMIUM_TRIAL : null != B || Z ? P.C.PREMIUM_DISCOUNT : null,
        V = (0, c.ap)((0, d.ZP)()),
        H = (0, C.A1)(Z, G, B, k, U),
        Y = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(D.bigCloud, D[y]),
                    }),
                    (0, r.jsx)("img", {
                        src: x,
                        alt: "",
                        className: a()(D.smallCloud, D[y]),
                    }),
                    (0, r.jsx)("img", {
                        src: M,
                        alt: "",
                        className: a()(D.wumpus, D[y]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.$1m, {
        color: "nitro-pink",
        className: a()(D.card, l, { [D.withGiftBanner]: g }),
        children: [
            (0, r.jsx)(Y, {}),
            (0, r.jsx)(A.E, {
                text: null != H ? H : w.intl.string(w.t["6bEcYr"]),
                className: D.pill,
            }),
            (0, r.jsx)(E.Z, {
                className: D.wordmark,
                color: V ? "black" : "white",
            }),
            (0, r.jsx)(R.Z, {
                isGift: f,
                premiumTier: P.PremiumTypes.TIER_2,
                offerType: F,
                offerTierMatchesCard: U === P.Si.TIER_2 || (0, v.Wp)(B, P.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: p,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: D.priceHeader,
            }),
            (0, r.jsx)("hr", { className: D.divider }),
            (0, r.jsx)(N.nT, {
                featureSet: o,
                isModal: _,
                isGift: f,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: S,
                firstFeatureItemClassName: "inCard" === y ? D.firstFeatureItemContainer : void 0,
            }),
            n,
            g && (0, r.jsx)(O.f, {}),
        ],
    });
}
let F = (e) => {
    let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o } = e,
        s = t === P.Si.TIER_2,
        c = s ? Z : B,
        { subscribeButtonProps: d, subscriptionTier: f } = (0, T.G)({
            subscriptionTier: t,
            variantOverride: s ? "expressive" : "secondary",
        }),
        { disabled: _ } = d,
        p = (0, r.jsx)("div", {
            className: D.CTAButton,
            children: (0, r.jsx)(
                l.zxk,
                G(
                    k(
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
            className: a()({ [D.premiumCardHover]: !n }),
            children: (0, r.jsx)(
                c,
                k(
                    {
                        className: D.applicationHomeCard,
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
            : (0, r.jsx)(S.Z, {
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
function V(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, N.rS)(t),
        c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsx)(p.Gt, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(D.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: "header-primary",
                    className: D.premiumCardsHeader,
                    children: w.intl.string(w.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: D.premiumCards,
                    children: [
                        (0, r.jsx)(F, {
                            subscriptionTier: P.Si.TIER_0,
                            isReducedMotion: c,
                            className: D.tier0CardOrder,
                        }),
                        (0, r.jsx)(F, {
                            subscriptionTier: P.Si.TIER_2,
                            isReducedMotion: c,
                            className: D.tier2CardOrder,
                            tierCardProps: { wumpusPosition: "inCorner" },
                        }),
                    ],
                }),
            ],
        }),
    });
}
