n.d(t, { Z: () => eo }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(79766),
    s = n(442837),
    l = n(589358),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(927359),
    h = n(975298),
    m = n(78839),
    g = n(975104),
    E = n(63063),
    b = n(74538),
    y = n(367074),
    O = n(775412),
    v = n(695349),
    I = n(104494),
    S = n(639119),
    T = n(715130),
    A = n(179918),
    C = n(8647),
    N = n(533525),
    R = n(647277),
    P = n(736519),
    w = n(784238),
    D = n(117791),
    x = n(638212),
    L = n(403503),
    M = n(382791),
    j = n(45474),
    k = n(175418),
    U = n(164662),
    G = n(543581),
    B = n(84804),
    Z = n(184176),
    F = n(474936),
    V = n(981631),
    H = n(388032),
    Y = n(24202),
    W = n(318271),
    K = n(872905),
    z = n(578478);
function q(e, t, n) {
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
function X(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = (e, t, i) => {
        (0, u.ZDy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await n.e("26526").then(n.bind(n, 48813));
            return (n) =>
                (0, r.jsx)(
                    a,
                    J(X({}, n), {
                        analyticsLocations: e,
                        initialStep: i,
                        premiumSubscription: t,
                    }),
                );
        });
    },
    ee = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: l, isInReverseTrial: c, shouldShowReferralProgressBar: p } = e,
            {
                headingText: g,
                headingTop: E,
                showPill: y,
                userDiscountOffer: O,
                discountedPrice: v,
                buttonVisibilityRef: N,
            } = ea(),
            { analyticsLocations: P } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA),
            w = (0, T.H)(o.I.MARKETING_PAGE_BANNER),
            M = null;
        null != w && "marketingPageBanner" === w.properties.properties.oneofKind
            ? (M = (0, r.jsx)(A.u, {
                  componentId: w.id,
                  promotionBannerMarketingComponentFields: w.properties.properties.marketingPageBanner,
              }))
            : l
              ? (M = (0, r.jsx)(C.Z, { variant: C.C.SUBSCRIBER_HOME }))
              : c
                ? (M = (0, r.jsx)(Z.Z, {}))
                : p && (M = (0, r.jsx)(R._, {}));
        let G = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            K = null != G && G.status === V.O0b.CANCELED && null != O,
            z = (0, S.N)(),
            q = (0, I.Ng)(),
            X = (0, I.Wp)(q, F.Si.TIER_2) ? F.Si.TIER_2 : void 0,
            Q = null != G && G.status !== V.O0b.ACCOUNT_HOLD && G.hasAnyPremiumNitro,
            J = (0, h.Z)().isFractionalPremiumActive && !Q && null == M && !K,
            ee = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            { visibilityPercentageRef: et, visibilityPercentage: en } = (0, U.E)(!ee);
        return (0, r.jsx)("div", {
            className: a()(W.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: N,
            children: (0, r.jsxs)("div", {
                className: W.content,
                ref: et,
                children: [
                    y && E,
                    (0, r.jsxs)("div", {
                        className: W.headerContainer,
                        children: [
                            (0, r.jsx)(B.Z, { containerVisibilityPercentage: en }),
                            K &&
                                null != O.expires_at &&
                                (0, r.jsx)(L.Z, {
                                    expiresAt: O.expires_at,
                                    className: Y.heroOfferCountdown,
                                }),
                            (0, r.jsx)(k.Z, {
                                children: K ? H.intl.format(H.t["3yZP0G"], { percent: O.discount.amount }) : g,
                            }),
                            K &&
                                null != v &&
                                (0, r.jsx)(u.Text, {
                                    className: Y.churnEntrypointDescriptionBrandRefresh,
                                    variant: "text-sm/medium",
                                    color: "text-primary",
                                    children: H.intl.format(H.t["3Q4wCy"], {
                                        discountedPrice: v,
                                        billingPeriod: (0, b.JP)(O.discount.user_usage_limit_interval),
                                        numMonths: O.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: J || K ? W.twoButtonContainer : void 0,
                        children: [
                            J &&
                                (0, r.jsx)(x.Z, {
                                    size: "md",
                                    hasActivePromotion: !!l,
                                    subscriptionTier:
                                        null !=
                                        (n = null == z || null == (t = z.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : X,
                                }),
                            K &&
                                (0, r.jsx)(u.Button, {
                                    variant: "expressive",
                                    icon: u.SrA,
                                    size: "md",
                                    text: H.intl.string(H.t.zrCzVB),
                                    onClick: () => $(P, G, j.R.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(D.Z, {
                                variant: J || K ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: H.intl.string(H.t["3KomGa"]),
                            }),
                        ],
                    }),
                    M,
                ],
            }),
        });
    },
    et = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: o, headingTop: l, userDiscountOffer: d, discountedPrice: p, buttonVisibilityRef: g } = ea(),
            { analyticsLocations: E } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA),
            y = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            O = null != y && y.status === V.O0b.CANCELED && null != d,
            v = (0, S.N)(),
            T = (0, I.Ng)(),
            A = (0, I.Wp)(T, F.Si.TIER_2) ? F.Si.TIER_2 : void 0,
            C = null != y && y.status !== V.O0b.ACCOUNT_HOLD && y.hasAnyPremiumNitro,
            N = (0, h.Z)().isFractionalPremiumActive && !C && !O;
        return (0, r.jsxs)("div", {
            className: a()(Y.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: g,
            children: [
                (0, r.jsx)("img", {
                    src: K,
                    alt: "",
                    className: Y.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: O ? Y.churnDiscountContent : Y.content,
                    children: [
                        l,
                        O &&
                            null != d.expires_at &&
                            (0, r.jsx)(L.Z, {
                                expiresAt: d.expires_at,
                                className: Y.heroOfferCountdown,
                            }),
                        (0, r.jsx)(u.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: O ? Y.churnDiscountHeader : Y.header,
                            children: O && null != d ? H.intl.format(H.t["3yZP0G"], { percent: d.discount.amount }) : o,
                        }),
                        O &&
                            null != p &&
                            (0, r.jsx)(u.Text, {
                                className: Y.churnEntrypointDescription,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: H.intl.format(H.t["3Q4wCy"], {
                                    discountedPrice: p,
                                    billingPeriod: (0, b.JP)(d.discount.user_usage_limit_interval),
                                    numMonths: d.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: Y.heroHeadingOriginalButtonContainer,
                            children: [
                                N &&
                                    (0, r.jsx)(w.Z, {
                                        color: c.Tt.BRAND,
                                        className: a()(Y.button, Y.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == v || null == (t = v.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : A,
                                    }),
                                O &&
                                    (0, r.jsxs)("div", {
                                        className: Y.churnEntrypointButtons,
                                        children: [
                                            (0, r.jsx)(u.Button, {
                                                variant: "expressive",
                                                icon: u.SrA,
                                                size: "md",
                                                text: H.intl.string(H.t.zrCzVB),
                                                onClick: () => $(E, y, j.R.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(D.Z, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: H.intl.string(H.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !O &&
                                    (0, r.jsx)("div", {
                                        className: Y.premiumSubscribeButton,
                                        children: (0, r.jsx)(P.Z, {
                                            look: c.iL.FILLED,
                                            color: c.Tt.BRAND,
                                            textOptions: { textOverride: H.intl.string(H.t["3KomGa"]) },
                                            className: Y.button,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    en = () => {
        let { headingText: e, headingTop: t } = ea();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: z,
                    alt: "",
                    className: Y.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: Y.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: Y.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(u.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: Y.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: Y.premiumSubscribeButton,
                                children: (0, r.jsx)(P.Z, {
                                    look: c.iL.FILLED,
                                    color: c.Tt.BRAND,
                                    textOptions: { textOverride: H.intl.string(H.t["3KomGa"]) },
                                    className: Y.button,
                                }),
                            }),
                            (0, r.jsx)(R._, { className: Y.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    er = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = ea();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: z,
                    alt: "",
                    className: Y.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: Y.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: Y.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(u.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: Y.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Y.premiumSubscribeButton,
                            children: (0, r.jsx)(P.Z, {
                                look: c.iL.FILLED,
                                color: c.Tt.BRAND,
                                textOptions: { textOverride: H.intl.string(H.t["3KomGa"]) },
                                className: Y.button,
                            }),
                        }),
                        !t && (0, r.jsx)(Z.Z, {}),
                        t && (0, r.jsx)(C.Z, { variant: C.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [ei, ea] = (0, g.Z)(),
    eo = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: i,
                userDiscountOffer: o,
                discountedPrice: s,
            } = e,
            { analyticsLocations: c } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA),
            d = (0, v.W)(),
            m = (0, y.Vi)(),
            g = (0, O._O)(),
            b = H.intl.string(H.t.qYKftX),
            I = (0, N.b)(),
            S = (0, r.jsx)(et, { className: t }),
            T = H.intl.string(H.t.ifwQZb),
            { fractionalState: A, endsAt: C } = (0, h.Z)(),
            R = (0, p.ZP)(C, p.aj.CREDITS_ENDS_IN);
        d || m
            ? (S = (0, r.jsx)(er, { isEligibleForBogoPromotion: m }))
            : I && ((b = H.intl.string(H.t.qYKftX)), (S = (0, r.jsx)(en, {})));
        let P = null;
        if (A === F.a$.NONE || d)
            P = n
                ? (0, r.jsx)(G.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: b,
                  })
                : (0, r.jsx)(M.Cy, {
                      className: a()(Y.trialPill, { [Y.hidden]: !g }),
                      text: b,
                      colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            g = !0;
            let e = (0, r.jsx)("div", {
                    className: Y.pillIcon,
                    children: (0, r.jsx)(u.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = H.intl.format(H.t["yR+oDD"], { helpCenterLink: E.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            P = (0, r.jsx)(l.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: Y.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        J(X({}, t), {
                            className: Y.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: Y.flexCentered,
                                children: n
                                    ? (0, r.jsx)(G.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: R,
                                      })
                                    : (0, r.jsx)(M.mn, {
                                          className: a()(Y.trialPill, { [Y.hidden]: !g }),
                                          text: R,
                                          colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(_.Gt, {
            value: c,
            children: (0, r.jsx)(ei.Provider, {
                value: {
                    headingText: T,
                    headingTop: P,
                    showPill: g,
                    userDiscountOffer: o,
                    discountedPrice: s,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)(ee, {
                          className: t,
                          isEligibleForBogoPromotion: m,
                          isInReverseTrial: d,
                          shouldShowReferralProgressBar: I,
                      })
                    : S,
            }),
        });
    };
