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
    y = n(474706),
    O = n(104494),
    v = n(639119),
    I = n(648613),
    T = n(38273),
    S = n(947390),
    A = n(382791),
    C = n(823188),
    N = n(52741),
    R = n(476442),
    P = n(474936),
    w = n(388032),
    D = n(1721),
    x = n(895601),
    L = n(381126),
    j = n(234286);
function M(e, t, n) {
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
                M(e, t, n[t]);
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
            priceOptions: u,
            isApplicationHome: f = !1,
        } = e,
        _ = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        p = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        E = (0, v.N)(),
        b = null == E || null == (t = E.subscription_trial) ? void 0 : t.sku_id,
        y = (null == _ ? void 0 : _.hasActiveTrial) ? (null == p ? void 0 : p.premiumType) : null,
        O = (0, A.y_)(y, b),
        I = null != O,
        T = (0, c.ap)((0, d.ZP)());
    return (0, r.jsxs)("div", {
        className: a()(D.card, D.tier0, o, { [D.pillMargin]: !f && I }),
        children: [
            I &&
                (0, r.jsx)(S.E, {
                    text: O,
                    className: D.pill,
                }),
            (0, r.jsx)(g.Z, {
                className: D.wordmark,
                color: T ? "black" : "white",
            }),
            (0, r.jsx)(N.Z, {
                isGift: l,
                premiumTier: P.p9.TIER_0,
                offerType: P.C.PREMIUM_TRIAL,
                offerTierMatchesCard: b === P.Si.TIER_0,
                showYearlyPrice: i,
                priceOptions: u,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: D.priceHeader,
            }),
            (0, r.jsx)("hr", { className: D.divider }),
            (0, r.jsx)(C.ql, {
                enablePremiumBrandRefresh: !0,
                isApplicationHome: f,
            }),
            n,
        ],
    });
}
function Z(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: o = C.uZ.DEFAULT,
            className: l,
            isGift: f = !1,
            isModal: _ = !1,
            priceOptions: p,
            showPromotionalGiftBanner: g = !1,
            showSeptemberMarketingMomentBanner: I = !1,
            wumpusPosition: T = "inCard",
            isApplicationHome: M = !1,
        } = e,
        k = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        U = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        G = (0, v.N)(),
        B = null == G || null == (t = G.subscription_trial) ? void 0 : t.sku_id,
        Z = (null == k ? void 0 : k.hasActiveTrial) ? (null == U ? void 0 : U.premiumType) : null,
        F = (0, O.Ng)(),
        V = (0, b.t7)(),
        H = null != B || null != Z ? P.C.PREMIUM_TRIAL : null != F || V ? P.C.PREMIUM_DISCOUNT : null,
        Y = (0, c.ap)((0, d.ZP)()),
        W = (0, A.A1)(V, Z, F, G, B),
        K = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(D.bigCloud, D[T]),
                    }),
                    (0, r.jsx)("img", {
                        src: x,
                        alt: "",
                        className: a()(D.smallCloud, D[T]),
                    }),
                    (0, r.jsx)("img", {
                        src: j,
                        alt: "",
                        className: a()(D.wumpus, D[T]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.$1m, {
        color: "nitro-pink",
        className: a()(D.card, l, { [D.withGiftBanner]: g }),
        children: [
            (0, r.jsx)(K, {}),
            (0, r.jsx)(S.E, {
                text: null != W ? W : w.intl.string(w.t["6bEcYm"]),
                className: D.pill,
            }),
            (0, r.jsx)(E.Z, {
                className: D.wordmark,
                color: Y ? "black" : "white",
            }),
            (0, r.jsx)(N.Z, {
                isGift: f,
                premiumTier: P.p9.TIER_2,
                offerType: H,
                offerTierMatchesCard: B === P.Si.TIER_2 || (0, O.Wp)(F, P.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: p,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: D.priceHeader,
            }),
            (0, r.jsx)("hr", { className: D.divider }),
            (0, r.jsx)(C.nT, {
                featureSet: o,
                isModal: _,
                isGift: f,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: M,
                firstFeatureItemClassName: "inCard" === T ? D.firstFeatureItemContainer : void 0,
            }),
            n,
            g && (0, r.jsx)(y.f, {}),
            !f && I && (0, r.jsx)(R.g, {}),
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
            : (0, r.jsx)(I.Z, {
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
        l = (0, C.rS)(t),
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
                    children: w.intl.string(w.t.vLz3Zm),
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
