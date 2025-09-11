n.d(t, {
    IL: () => F,
    UQ: () => Z,
    rz: () => H,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(409794),
    s = n(442837),
    l = n(304789),
    c = n(159691),
    u = n(780384),
    d = n(481060),
    f = n(410030),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(594174),
    g = n(78839),
    E = n(756896),
    b = n(589072),
    y = n(140465),
    O = n(474706),
    v = n(104494),
    I = n(639119),
    T = n(648613),
    S = n(38273),
    A = n(947390),
    C = n(382791),
    N = n(823188),
    R = n(52741),
    P = n(476442),
    w = n(474936),
    D = n(388032),
    x = n(1721),
    L = n(895601),
    j = n(381126),
    k = n(234286);
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
                M(e, t, n[t]);
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
            priceOptions: c,
            isApplicationHome: d = !1,
        } = e,
        _ = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        p = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        h = (0, I.N)(),
        b = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id,
        y = (null == _ ? void 0 : _.hasActiveTrial) ? (null == p ? void 0 : p.premiumType) : null,
        O = (0, C.y_)(y, b),
        v = null != O,
        T = (0, u.ap)((0, f.ZP)());
    return (0, r.jsxs)("div", {
        className: a()(x.card, x.tier0, o, { [x.pillMargin]: !d && v }),
        children: [
            v &&
                (0, r.jsx)(A.E, {
                    text: O,
                    className: x.pill,
                }),
            (0, r.jsx)(E.Z, {
                className: x.wordmark,
                color: T ? "black" : "white",
            }),
            (0, r.jsx)(R.Z, {
                isGift: l,
                premiumTier: w.p9.TIER_0,
                offerType: w.C.PREMIUM_TRIAL,
                offerTierMatchesCard: b === w.Si.TIER_0,
                showYearlyPrice: i,
                priceOptions: c,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: x.priceHeader,
            }),
            (0, r.jsx)("hr", { className: x.divider }),
            (0, r.jsx)(N.ql, {
                enablePremiumBrandRefresh: !0,
                isApplicationHome: d,
            }),
            n,
        ],
    });
}
function F(e) {
    var t;
    let {
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: o = N.uZ.DEFAULT,
            className: c,
            isGift: d = !1,
            isModal: _ = !1,
            priceOptions: p,
            showPromotionalGiftBanner: h = !1,
            showSeptemberMarketingMomentBanner: E = !1,
            wumpusPosition: T = "inCard",
            isApplicationHome: S = !1,
        } = e,
        M = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        U = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        G = (0, I.N)(),
        B = null == G || null == (t = G.subscription_trial) ? void 0 : t.sku_id,
        Z = (null == M ? void 0 : M.hasActiveTrial) ? (null == U ? void 0 : U.premiumType) : null,
        F = (0, v.Ng)(),
        V = (0, y.t7)(),
        H = null != B || null != Z ? w.C.PREMIUM_TRIAL : null != F || V ? w.C.PREMIUM_DISCOUNT : null,
        Y = (0, u.ap)((0, f.ZP)()),
        W = (0, C.A1)(V, Z, F, G, B),
        K = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: j,
                        alt: "",
                        className: a()(x.bigCloud, x[T]),
                    }),
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(x.smallCloud, x[T]),
                    }),
                    (0, r.jsx)("img", {
                        src: k,
                        alt: "",
                        className: a()(x.wumpus, x[T]),
                    }),
                ],
            });
    return (0, r.jsxs)(l.$, {
        color: "nitro-pink",
        className: a()(x.card, c, { [x.withGiftBanner]: h }),
        children: [
            (0, r.jsx)(K, {}),
            (0, r.jsx)(A.E, {
                text: null != W ? W : D.intl.string(D.t["6bEcYm"]),
                className: x.pill,
            }),
            (0, r.jsx)(b.Z, {
                className: x.wordmark,
                color: Y ? "black" : "white",
            }),
            (0, r.jsx)(R.Z, {
                isGift: d,
                premiumTier: w.p9.TIER_2,
                offerType: H,
                offerTierMatchesCard: B === w.Si.TIER_2 || (0, v.Wp)(F, w.Si.TIER_2),
                showYearlyPrice: i,
                priceOptions: p,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: x.priceHeader,
            }),
            (0, r.jsx)("hr", { className: x.divider }),
            (0, r.jsx)(N.nT, {
                featureSet: o,
                isModal: _,
                isGift: d,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: S,
                firstFeatureItemClassName: "inCard" === T ? x.firstFeatureItemContainer : void 0,
            }),
            n,
            h && (0, r.jsx)(O.f, {}),
            E && (0, r.jsx)(P.g, {}),
        ],
    });
}
let V = (e) => {
    let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o } = e,
        s = t === w.Si.TIER_2,
        l = s ? F : Z,
        { subscribeButtonProps: u, subscriptionTier: f } = (0, S.G)({
            subscriptionTier: t,
            variantOverride: s ? "expressive" : "secondary",
        }),
        { disabled: _ } = u,
        p = (0, r.jsx)("div", {
            className: x.CTAButton,
            children: (0, r.jsx)(
                c.zxk,
                B(
                    U(
                        {
                            size: "md",
                            fullWidth: !0,
                        },
                        u,
                    ),
                    { disabled: _ },
                ),
            ),
        }),
        h = (0, r.jsx)("div", {
            className: a()({ [x.premiumCardHover]: !n }),
            children: (0, r.jsx)(
                l,
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
                      return (0, r.jsx)(d.P3F, {
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
        { analyticsLocations: i } = (0, h.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, N.rS)(t),
        c = (0, s.e7)([_.Z], () => _.Z.useReducedMotion);
    return (0, r.jsx)(h.Gt, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: a()(x.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(o.X, {
                    variant: "display-md",
                    color: "header-primary",
                    className: x.premiumCardsHeader,
                    children: D.intl.string(D.t.vLz3Zm),
                }),
                (0, r.jsxs)("div", {
                    ref: l,
                    className: x.premiumCards,
                    children: [
                        (0, r.jsx)(V, {
                            subscriptionTier: w.Si.TIER_0,
                            isReducedMotion: c,
                            className: x.tier0CardOrder,
                        }),
                        (0, r.jsx)(V, {
                            subscriptionTier: w.Si.TIER_2,
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
