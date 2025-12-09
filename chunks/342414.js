n.d(t, { Z: () => es }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(79766),
    s = n(442837),
    l = n(589358),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(927359),
    m = n(975298),
    h = n(78839),
    g = n(975104),
    E = n(63063),
    b = n(74538),
    y = n(367074),
    O = n(775412),
    v = n(695349),
    S = n(622909),
    I = n(639119),
    T = n(715130),
    A = n(179918),
    C = n(8647),
    N = n(533525),
    P = n(647277),
    R = n(736519),
    D = n(784238),
    w = n(117791),
    x = n(638212),
    L = n(230916),
    j = n(403503),
    M = n(382791),
    k = n(45474),
    U = n(175418),
    G = n(164662),
    Z = n(543581),
    B = n(84804),
    F = n(184176),
    V = n(474936),
    H = n(981631),
    Y = n(388032),
    W = n(644219),
    K = n(526980),
    z = n(872905),
    q = n(578478);
function Q(e, t, n) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = (e, t, i) => {
        (0, u.ZDy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await n.e("26526").then(n.bind(n, 48813));
            return (n) =>
                (0, r.jsx)(
                    a,
                    $(X({}, n), {
                        analyticsLocations: e,
                        initialStep: i,
                        premiumSubscription: t,
                    }),
                );
        });
    },
    et = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: l, isInReverseTrial: c, shouldShowReferralProgressBar: _ } = e,
            {
                headingText: g,
                headingTop: E,
                showPill: y,
                userDiscountOffer: O,
                discountedPrice: v,
                buttonVisibilityRef: N,
            } = eo(),
            { analyticsLocations: R } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, T.H)(o.I.MARKETING_PAGE_BANNER),
            M = null;
        null != D && "marketingPageBanner" === D.properties.properties.oneofKind
            ? (M = (0, r.jsx)(A.u, {
                  componentId: D.id,
                  promotionBannerMarketingComponentFields: D.properties.properties.marketingPageBanner,
              }))
            : l
              ? (M = (0, r.jsx)(C.Z, { variant: C.C.SUBSCRIBER_HOME }))
              : c
                ? (M = (0, r.jsx)(F.Z, {}))
                : _ && (M = (0, r.jsx)(P._, {}));
        let Z = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            z = null != Z && Z.status === H.O0b.CANCELED && null != O,
            q = (0, I.N)(),
            Q = (0, S.N)(),
            X = (0, L.Wp)(Q, V.Si.TIER_2) ? V.Si.TIER_2 : void 0,
            J = null != Z && Z.status !== H.O0b.ACCOUNT_HOLD && Z.hasAnyPremiumNitro,
            $ = (0, m.Z)().isFractionalPremiumActive && !J && null == M && !z,
            et = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            { visibilityPercentageRef: en, visibilityPercentage: er } = (0, G.E)(!et);
        return (0, r.jsx)("div", {
            className: a()(K.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: N,
            children: (0, r.jsxs)("div", {
                className: K.content,
                ref: en,
                children: [
                    y && E,
                    (0, r.jsxs)("div", {
                        className: K.headerContainer,
                        children: [
                            (0, r.jsx)(B.Z, { containerVisibilityPercentage: er }),
                            z &&
                                null != O.expires_at &&
                                (0, r.jsx)(j.Z, {
                                    expiresAt: O.expires_at,
                                    className: W.heroOfferCountdown,
                                }),
                            (0, r.jsx)(U.Z, {
                                children: z ? Y.intl.format(Y.t["3yZP0G"], { percent: O.discount.amount }) : g,
                            }),
                            z &&
                                null != v &&
                                (0, r.jsx)(u.Text, {
                                    className: W.churnEntrypointDescriptionBrandRefresh,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: Y.intl.format(Y.t["3Q4wCy"], {
                                        discountedPrice: v,
                                        billingPeriod: (0, b.JP)(O.discount.user_usage_limit_interval),
                                        numMonths: O.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: $ || z ? K.twoButtonContainer : void 0,
                        children: [
                            $ &&
                                (0, r.jsx)(x.Z, {
                                    size: "md",
                                    hasActivePromotion: !!l,
                                    subscriptionTier:
                                        null !=
                                        (n = null == q || null == (t = q.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : X,
                                }),
                            z &&
                                (0, r.jsx)(u.Button, {
                                    variant: "expressive",
                                    icon: u.SrA,
                                    size: "md",
                                    text: Y.intl.string(Y.t.zrCzVB),
                                    onClick: () => ee(R, Z, k.R.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(w.Z, {
                                variant: $ || z ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: Y.intl.string(Y.t["3KomGa"]),
                            }),
                        ],
                    }),
                    M,
                ],
            }),
        });
    },
    en = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: o, headingTop: l, userDiscountOffer: d, discountedPrice: _, buttonVisibilityRef: g } = eo(),
            { analyticsLocations: E } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA),
            y = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            O = null != y && y.status === H.O0b.CANCELED && null != d,
            v = (0, I.N)(),
            T = (0, S.N)(),
            A = (0, L.Wp)(T, V.Si.TIER_2) ? V.Si.TIER_2 : void 0,
            C = null != y && y.status !== H.O0b.ACCOUNT_HOLD && y.hasAnyPremiumNitro,
            N = (0, m.Z)().isFractionalPremiumActive && !C && !O;
        return (0, r.jsxs)("div", {
            className: a()(W.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: g,
            children: [
                (0, r.jsx)("img", {
                    src: z,
                    alt: "",
                    className: W.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: O ? W.churnDiscountContent : W.content,
                    children: [
                        l,
                        O &&
                            null != d.expires_at &&
                            (0, r.jsx)(j.Z, {
                                expiresAt: d.expires_at,
                                className: W.heroOfferCountdown,
                            }),
                        (0, r.jsx)(u.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: O ? W.churnDiscountHeader : W.header,
                            children: O && null != d ? Y.intl.format(Y.t["3yZP0G"], { percent: d.discount.amount }) : o,
                        }),
                        O &&
                            null != _ &&
                            (0, r.jsx)(u.Text, {
                                className: W.churnEntrypointDescription,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: Y.intl.format(Y.t["3Q4wCy"], {
                                    discountedPrice: _,
                                    billingPeriod: (0, b.JP)(d.discount.user_usage_limit_interval),
                                    numMonths: d.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: W.heroHeadingOriginalButtonContainer,
                            children: [
                                N &&
                                    (0, r.jsx)(D.Z, {
                                        color: c.Tt.BRAND,
                                        className: a()(W.button, W.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == v || null == (t = v.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : A,
                                    }),
                                O &&
                                    (0, r.jsxs)("div", {
                                        className: W.churnEntrypointButtons,
                                        children: [
                                            (0, r.jsx)(u.Button, {
                                                variant: "expressive",
                                                icon: u.SrA,
                                                size: "md",
                                                text: Y.intl.string(Y.t.zrCzVB),
                                                onClick: () => ee(E, y, k.R.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(w.Z, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: Y.intl.string(Y.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !O &&
                                    (0, r.jsx)("div", {
                                        className: W.premiumSubscribeButton,
                                        children: (0, r.jsx)(R.Z, {
                                            look: c.iL.FILLED,
                                            color: c.Tt.BRAND,
                                            textOptions: { textOverride: Y.intl.string(Y.t["3KomGa"]) },
                                            className: W.button,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    er = () => {
        let { headingText: e, headingTop: t } = eo();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: q,
                    alt: "",
                    className: W.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: W.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: W.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(u.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: W.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: W.premiumSubscribeButton,
                                children: (0, r.jsx)(R.Z, {
                                    look: c.iL.FILLED,
                                    color: c.Tt.BRAND,
                                    textOptions: { textOverride: Y.intl.string(Y.t["3KomGa"]) },
                                    className: W.button,
                                }),
                            }),
                            (0, r.jsx)(P._, { className: W.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    ei = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = eo();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: q,
                    alt: "",
                    className: W.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: W.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: W.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(u.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: W.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: W.premiumSubscribeButton,
                            children: (0, r.jsx)(R.Z, {
                                look: c.iL.FILLED,
                                color: c.Tt.BRAND,
                                textOptions: { textOverride: Y.intl.string(Y.t["3KomGa"]) },
                                className: W.button,
                            }),
                        }),
                        !t && (0, r.jsx)(F.Z, {}),
                        t && (0, r.jsx)(C.Z, { variant: C.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [ea, eo] = (0, g.Z)(),
    es = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: i,
                userDiscountOffer: o,
                discountedPrice: s,
            } = e,
            { analyticsLocations: c } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_HERO_CTA),
            d = (0, v.W)(),
            h = (0, y.Vi)(),
            g = (0, O._O)(),
            b = Y.intl.string(Y.t.qYKftX),
            S = (0, N.b)(),
            I = (0, r.jsx)(en, { className: t }),
            T = Y.intl.string(Y.t.ifwQZb),
            { fractionalState: A, endsAt: C } = (0, m.Z)(),
            P = (0, _.ZP)(C, _.aj.CREDITS_ENDS_IN);
        d || h
            ? (I = (0, r.jsx)(ei, { isEligibleForBogoPromotion: h }))
            : S && ((b = Y.intl.string(Y.t.qYKftX)), (I = (0, r.jsx)(er, {})));
        let R = null;
        if (A === V.a$.NONE || d)
            R = n
                ? (0, r.jsx)(Z.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: b,
                  })
                : (0, r.jsx)(M.Cy, {
                      className: a()(W.trialPill, { [W.hidden]: !g }),
                      text: b,
                      colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            g = !0;
            let e = (0, r.jsx)("div", {
                    className: W.pillIcon,
                    children: (0, r.jsx)(u.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = Y.intl.format(Y.t["yR+oDD"], { helpCenterLink: E.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            R = (0, r.jsx)(l.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: W.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        $(X({}, t), {
                            className: W.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: W.flexCentered,
                                children: n
                                    ? (0, r.jsx)(Z.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: P,
                                      })
                                    : (0, r.jsx)(M.mn, {
                                          className: a()(W.trialPill, { [W.hidden]: !g }),
                                          text: P,
                                          colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(p.Gt, {
            value: c,
            children: (0, r.jsx)(ea.Provider, {
                value: {
                    headingText: T,
                    headingTop: R,
                    showPill: g,
                    userDiscountOffer: o,
                    discountedPrice: s,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)(et, {
                          className: t,
                          isEligibleForBogoPromotion: h,
                          isInReverseTrial: d,
                          shouldShowReferralProgressBar: S,
                      })
                    : I,
            }),
        });
    };
