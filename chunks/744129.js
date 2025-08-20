n.d(t, {
    IL: () => Z,
    UQ: () => B,
    rz: () => F,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(409794),
    s = n(442837),
    l = n(680018),
    c = n(304789),
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
        className: a()(D.card, D.tier0, o, { [D.pillMargin]: !d && v }),
        children: [
            v &&
                (0, r.jsx)(A.E, {
                    text: O,
                    className: D.pill,
                }),
            (0, r.jsx)(E.Z, {
                className: D.wordmark,
                color: T ? "black" : "white",
            }),
            (0, r.jsx)(R.Z, {
                isGift: l,
                premiumTier: P.p9.TIER_0,
                offerType: P.C.PREMIUM_TRIAL,
                offerTierMatchesCard: b === P.Si.TIER_0,
                showYearlyPrice: i,
                priceOptions: c,
                enablePremiumBrandRefresh: !0,
                headingVariant: "text-md/medium",
                headingColor: "text-primary",
                headerClassName: D.priceHeader,
            }),
            (0, r.jsx)("hr", { className: D.divider }),
            (0, r.jsx)(N.ql, {
                enablePremiumBrandRefresh: !0,
                isApplicationHome: d,
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
            featureSet: o = N.uZ.DEFAULT,
            className: l,
            isGift: d = !1,
            isModal: _ = !1,
            priceOptions: p,
            showPromotionalGiftBanner: h = !1,
            wumpusPosition: E = "inCard",
            isApplicationHome: T = !1,
        } = e,
        S = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        M = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        k = (0, I.N)(),
        U = null == k || null == (t = k.subscription_trial) ? void 0 : t.sku_id,
        G = (null == S ? void 0 : S.hasActiveTrial) ? (null == M ? void 0 : M.premiumType) : null,
        B = (0, v.Ng)(),
        Z = (0, y.t7)(),
        V = null != U || null != G ? P.C.PREMIUM_TRIAL : null != B || Z ? P.C.PREMIUM_DISCOUNT : null,
        F = (0, u.ap)((0, f.ZP)()),
        H = (0, C.A1)(Z, G, B, k, U),
        Y = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("img", {
                        src: L,
                        alt: "",
                        className: a()(D.bigCloud, D[E]),
                    }),
                    (0, r.jsx)("img", {
                        src: x,
                        alt: "",
                        className: a()(D.smallCloud, D[E]),
                    }),
                    (0, r.jsx)("img", {
                        src: j,
                        alt: "",
                        className: a()(D.wumpus, D[E]),
                    }),
                ],
            });
    return (0, r.jsxs)(c.$, {
        color: "nitro-pink",
        className: a()(D.card, l, { [D.withGiftBanner]: h }),
        children: [
            (0, r.jsx)(Y, {}),
            (0, r.jsx)(A.E, {
                text: null != H ? H : w.intl.string(w.t["6bEcYm"]),
                className: D.pill,
            }),
            (0, r.jsx)(b.Z, {
                className: D.wordmark,
                color: F ? "black" : "white",
            }),
            (0, r.jsx)(R.Z, {
                isGift: d,
                premiumTier: P.p9.TIER_2,
                offerType: V,
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
                isGift: d,
                enablePremiumBrandRefresh: !0,
                isApplicationHome: T,
            }),
            n,
            h && (0, r.jsx)(O.f, {}),
        ],
    });
}
let V = (e) => {
    let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: o } = e,
        s = t === P.Si.TIER_2,
        c = s ? Z : B,
        { subscribeButtonProps: u, subscriptionTier: f } = (0, S.G)({
            subscriptionTier: t,
            variantOverride: s ? "expressive" : "secondary",
        }),
        { disabled: _ } = u,
        p = (0, r.jsx)("div", {
            className: D.CTAButton,
            children: (0, r.jsx)(
                l.z,
                G(
                    k(
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
function F(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, h.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        l = (0, N.rS)(t),
        c = (0, s.e7)([_.Z], () => _.Z.useReducedMotion);
    return (0, r.jsx)(h.Gt, {
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
                        (0, r.jsx)(V, {
                            subscriptionTier: P.Si.TIER_0,
                            isReducedMotion: c,
                            className: D.tier0CardOrder,
                        }),
                        (0, r.jsx)(V, {
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
