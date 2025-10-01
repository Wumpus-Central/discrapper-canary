n.d(t, {
    IL: () => B,
    UQ: () => G,
    rz: () => F,
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
    R = n(474936),
    P = n(388032),
    w = n(518520),
    D = n(895601),
    L = n(381126),
    x = n(234286);
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
function M(e) {
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
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
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
        className: a()(w.card, w.tier0, o, { [w.pillMargin]: !f && I }),
        children: [
            I &&
                (0, r.jsx)(S.E, {
                    text: O,
                    className: w.pill,
                }),
            (0, r.jsx)(g.Z, {
                className: w.wordmark,
                color: T ? "black" : "white",
            }),
            (0, r.jsx)(N.Z, {
                isGift: l,
                premiumTier: R.p9.TIER_0,
                offerType: R.C.PREMIUM_TRIAL,
                offerTierMatchesCard: b === R.Si.TIER_0,
                showYearlyPrice: i,
                priceOptions: u,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: w.priceHeader,
            }),
            (0, r.jsx)("hr", { className: w.divider }),
            (0, r.jsx)(C.ql, {
                enablePremiumBrandRefresh: !0,
                isApplicationHome: f,
            }),
            n,
        ],
    });
}
function B(e) {
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
            wumpusPosition: I = "inCard",
            isApplicationHome: T = !1,
        } = e,
        j = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        M = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        k = (0, v.N)(),
        U = null == k || null == (t = k.subscription_trial) ? void 0 : t.sku_id,
        G = (null == j ? void 0 : j.hasActiveTrial) ? (null == M ? void 0 : M.premiumType) : null,
        B = (0, O.Ng)(),
        Z = (0, b.t7)(),
        F = null != U || null != G ? R.C.PREMIUM_TRIAL : null != B || Z ? R.C.PREMIUM_DISCOUNT : null,
        V = (0, c.ap)((0, d.ZP)()),
        H = (0, A.A1)(Z, G, B, k, U),
        Y = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(w.bigCloud, w[I]),
                    }),
                    (0, r.jsx)("img", {
                        src: D,
                        alt: "",
                        className: a()(w.smallCloud, w[I]),
                    }),
                    (0, r.jsx)("img", {
                        src: x,
                        alt: "",
                        className: a()(w.wumpus, w[I]),
                    }),
                ],
            });
    return (0, r.jsxs)(u.$1m, {
        color: "nitro-pink",
        className: a()(w.card, l, { [w.withGiftBanner]: g }),
        children: [
            (0, r.jsx)(Y, {}),
            (0, r.jsx)(S.E, {
                text: null != H ? H : P.intl.string(P.t["6bEcYm"]),
                className: w.pill,
            }),
            (0, r.jsx)(E.Z, {
                className: w.wordmark,
                color: V ? "black" : "white",
            }),
            (0, r.jsx)(N.Z, {
                isGift: f,
                premiumTier: R.p9.TIER_2,
                offerType: F,
                offerTierMatchesCard: U === R.Si.TIER_2 || (0, O.Wp)(B, R.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: p,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: w.priceHeader,
            }),
            (0, r.jsx)("hr", { className: w.divider }),
            (0, r.jsx)(C.nT, {
                featureSet: o,
                isModal: _,
                isGift: f,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: T,
                firstFeatureItemClassName: "inCard" === I ? w.firstFeatureItemContainer : void 0,
            }),
            n,
            g && (0, r.jsx)(y.f, {}),
        ],
    });
}
let Z = (e) => {
    let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o } = e,
        s = t === R.Si.TIER_2,
        c = s ? B : G,
        { subscribeButtonProps: d, subscriptionTier: f } = (0, T.G)({
            subscriptionTier: t,
            variantOverride: s ? "expressive" : "secondary",
        }),
        { disabled: _ } = d,
        p = (0, r.jsx)("div", {
            className: w.CTAButton,
            children: (0, r.jsx)(
                l.zxk,
                U(
                    M(
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
            className: a()({ [w.premiumCardHover]: !n }),
            children: (0, r.jsx)(
                c,
                M(
                    {
                        className: w.applicationHomeCard,
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
function F(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, C.rS)(t),
        c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsx)(p.Gt, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(w.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: "header-primary",
                    className: w.premiumCardsHeader,
                    children: P.intl.string(P.t.vLz3Zm),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: w.premiumCards,
                    children: [
                        (0, r.jsx)(Z, {
                            subscriptionTier: R.Si.TIER_0,
                            isReducedMotion: c,
                            className: w.tier0CardOrder,
                        }),
                        (0, r.jsx)(Z, {
                            subscriptionTier: R.Si.TIER_2,
                            isReducedMotion: c,
                            className: w.tier2CardOrder,
                            tierCardProps: { wumpusPosition: "inCorner" },
                        }),
                    ],
                }),
            ],
        }),
    });
}
