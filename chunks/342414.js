n.d(t, { Z: () => ei }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(906732),
    f = n(927359),
    _ = n(975298),
    p = n(125529),
    h = n(78839),
    m = n(975104),
    g = n(63063),
    E = n(74538),
    b = n(367074),
    y = n(775412),
    O = n(695349),
    v = n(219673),
    I = n(104494),
    T = n(639119),
    S = n(8647),
    A = n(533525),
    C = n(647277),
    N = n(736519),
    R = n(784238),
    P = n(117791),
    w = n(638212),
    D = n(508070),
    x = n(382791),
    L = n(45474),
    j = n(175418),
    M = n(164662),
    k = n(543581),
    U = n(84804),
    G = n(184176),
    B = n(474936),
    Z = n(981631),
    F = n(388032),
    V = n(644219),
    H = n(526980),
    Y = n(872905),
    W = n(578478);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = (e, t, i) => {
        (0, l.ZDy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await Promise.all([
                n.e("17938"),
                n.e("69432"),
                n.e("26526"),
                n.e("46573"),
            ]).then(n.bind(n, 48813));
            return (n) =>
                (0, r.jsx)(
                    a,
                    X(z({}, n), {
                        analyticsLocations: e,
                        initialStep: i,
                        premiumSubscription: t,
                    }),
                );
        });
    },
    J = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: f, shouldShowReferralProgressBar: p } = e,
            {
                headingText: m,
                headingTop: g,
                showPill: b,
                userDiscountOffer: y,
                discountedPrice: O,
                buttonVisibilityRef: A,
            } = er(),
            { analyticsLocations: N } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            { enabled: R, showCountdown: x } = v.b.useConfig({ location: "Hero Heading" }),
            k = null;
        s
            ? (k = (0, r.jsx)(S.Z, { variant: S.C.SUBSCRIBER_HOME }))
            : f
              ? (k = (0, r.jsx)(G.Z, {}))
              : p && (k = (0, r.jsx)(C._, {}));
        let Y = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            W = null != Y && Y.status === Z.O0b.CANCELED && null != y && R,
            K = (0, T.N)(),
            z = (0, I.Ng)(),
            q = (0, I.Wp)(z, B.Si.TIER_2) ? B.Si.TIER_2 : void 0,
            X = null != Y && Y.status !== Z.O0b.ACCOUNT_HOLD && Y.hasAnyPremiumNitro,
            J = (0, _.Z)().isFractionalPremiumActive && !X && null == k && !W,
            $ = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: ee, visibilityPercentage: et } = (0, M.E)(!$);
        return (0, r.jsx)("div", {
            className: a()(H.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: A,
            children: (0, r.jsxs)("div", {
                className: H.content,
                ref: ee,
                children: [
                    b && g,
                    (0, r.jsxs)("div", {
                        className: H.headerContainer,
                        children: [
                            (0, r.jsx)(U.Z, { containerVisibilityPercentage: et }),
                            W && x && null != y.expires_at && (0, r.jsx)(D.Z, { expiresAt: y.expires_at }),
                            (0, r.jsx)(j.Z, {
                                children: W ? F.intl.format(F.t["3yZP0N"], { percent: y.discount.amount }) : m,
                            }),
                            W &&
                                null != O &&
                                (0, r.jsx)(l.Text, {
                                    className: V.churnEntrypointDescriptionBrandRefresh,
                                    variant: "text-sm/medium",
                                    color: "text-primary",
                                    children: F.intl.format(F.t["3Q4wCw"], {
                                        discountedPrice: O,
                                        billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
                                        numMonths: y.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: J || W ? H.twoButtonContainer : void 0,
                        children: [
                            J &&
                                (0, r.jsx)(w.Z, {
                                    size: "md",
                                    hasActivePromotion: !!s,
                                    subscriptionTier:
                                        null !=
                                        (n = null == K || null == (t = K.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : q,
                                }),
                            W &&
                                (0, r.jsx)(l.zxk, {
                                    variant: "expressive",
                                    icon: l.SrA,
                                    size: "md",
                                    text: F.intl.string(F.t.zrCzVF),
                                    onClick: () => Q(N, Y, L.R.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(P.Z, {
                                variant: J || W ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: F.intl.string(F.t["3KomGR"]),
                            }),
                        ],
                    }),
                    k,
                ],
            }),
        });
    },
    $ = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: c, headingTop: f, userDiscountOffer: p, discountedPrice: m, buttonVisibilityRef: g } = er(),
            { analyticsLocations: b } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            { enabled: y, showCountdown: O } = v.b.useConfig({ location: "Hero Heading" }),
            S = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            A = null != S && S.status === Z.O0b.CANCELED && null != p && y,
            C = (0, T.N)(),
            w = (0, I.Ng)(),
            x = (0, I.Wp)(w, B.Si.TIER_2) ? B.Si.TIER_2 : void 0,
            j = null != S && S.status !== Z.O0b.ACCOUNT_HOLD && S.hasAnyPremiumNitro,
            M = (0, _.Z)().isFractionalPremiumActive && !j && !A;
        return (0, r.jsxs)("div", {
            className: a()(V.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: g,
            children: [
                (0, r.jsx)("img", {
                    src: Y,
                    alt: "",
                    className: V.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: A && O ? V.churnDiscountContent : V.content,
                    children: [
                        f,
                        A && O && null != p.expires_at && (0, r.jsx)(D.Z, { expiresAt: p.expires_at }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: A ? V.churnDiscountHeader : V.header,
                            children: A && null != p ? F.intl.format(F.t["3yZP0N"], { percent: p.discount.amount }) : c,
                        }),
                        A &&
                            null != m &&
                            (0, r.jsx)(l.Text, {
                                className: V.churnEntrypointDescription,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: F.intl.format(F.t["3Q4wCw"], {
                                    discountedPrice: m,
                                    billingPeriod: (0, E.JP)(p.discount.user_usage_limit_interval),
                                    numMonths: p.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: V.heroHeadingOriginalButtonContainer,
                            children: [
                                M &&
                                    (0, r.jsx)(R.Z, {
                                        color: s.Tt.BRAND,
                                        className: a()(V.button, V.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == C || null == (t = C.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : x,
                                    }),
                                A &&
                                    (0, r.jsxs)("div", {
                                        className: V.churnEntrypointButtons,
                                        children: [
                                            (0, r.jsx)(l.zxk, {
                                                variant: "expressive",
                                                icon: l.SrA,
                                                size: "md",
                                                text: F.intl.string(F.t.zrCzVF),
                                                onClick: () => Q(b, S, L.R.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(P.Z, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: F.intl.string(F.t.Ve9Ge3),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !A &&
                                    (0, r.jsx)("div", {
                                        className: V.premiumSubscribeButton,
                                        children: (0, r.jsx)(N.Z, {
                                            look: s.iL.FILLED,
                                            color: s.Tt.BRAND,
                                            textOptions: { textOverride: F.intl.string(F.t["3KomGR"]) },
                                            className: V.button,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    ee = () => {
        let { headingText: e, headingTop: t } = er();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: W,
                    alt: "",
                    className: V.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: V.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: V.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(l.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: V.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: V.premiumSubscribeButton,
                                children: (0, r.jsx)(N.Z, {
                                    look: s.iL.FILLED,
                                    color: s.Tt.BRAND,
                                    textOptions: { textOverride: F.intl.string(F.t["3KomGR"]) },
                                    className: V.button,
                                }),
                            }),
                            (0, r.jsx)(C._, { className: V.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    et = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = er();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: W,
                    alt: "",
                    className: V.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: V.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: V.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(l.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: V.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: V.premiumSubscribeButton,
                            children: (0, r.jsx)(N.Z, {
                                look: s.iL.FILLED,
                                color: s.Tt.BRAND,
                                textOptions: { textOverride: F.intl.string(F.t["3KomGR"]) },
                                className: V.button,
                            }),
                        }),
                        !t && (0, r.jsx)(G.Z, {}),
                        t && (0, r.jsx)(S.Z, { variant: S.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [en, er] = (0, m.Z)(),
    ei = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: i,
                userDiscountOffer: o,
                discountedPrice: s,
            } = e,
            { analyticsLocations: c } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            h = (0, O.W)(),
            m = (0, b.Vi)(),
            E = (0, y._O)(),
            v = F.intl.string(F.t.qYKftb),
            I = (0, A.b)(),
            T = (0, r.jsx)($, { className: t }),
            S = F.intl.string(F.t.ifwQZW),
            { fractionalState: C, endsAt: N } = (0, _.Z)(),
            R = (0, f.ZP)(N, f.aj.CREDITS_ENDS_IN);
        h || m
            ? (T = (0, r.jsx)(et, { isEligibleForBogoPromotion: m }))
            : I && ((v = F.intl.string(F.t.qYKftb)), (T = (0, r.jsx)(ee, {})));
        let P = null;
        if (C === B.a$.NONE || h)
            P = n
                ? (0, r.jsx)(k.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: v,
                  })
                : (0, r.jsx)(x.Cy, {
                      className: a()(V.trialPill, { [V.hidden]: !E }),
                      text: v,
                      colorOptions: x.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            E = !0;
            let e = (0, r.jsx)("div", {
                    className: V.pillIcon,
                    children: (0, r.jsx)(l.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = F.intl.format(F.t["yR+oDA"], { helpCenterLink: g.Z.getArticleURL(Z.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            P = (0, r.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: V.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        X(z({}, t), {
                            className: V.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: V.flexCentered,
                                children: n
                                    ? (0, r.jsx)(k.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: R,
                                      })
                                    : (0, r.jsx)(x.mn, {
                                          className: a()(V.trialPill, { [V.hidden]: !E }),
                                          text: R,
                                          colorOptions: x.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(d.Gt, {
            value: c,
            children: (0, r.jsx)(en.Provider, {
                value: {
                    headingText: S,
                    headingTop: P,
                    showPill: E,
                    userDiscountOffer: o,
                    discountedPrice: s,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)(J, {
                          className: t,
                          isEligibleForBogoPromotion: m,
                          isInReverseTrial: h,
                          shouldShowReferralProgressBar: I,
                      })
                    : T,
            }),
        });
    };
