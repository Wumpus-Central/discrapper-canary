n.d(t, { Z: () => er }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(589358),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(927359),
    p = n(975298),
    h = n(78839),
    m = n(975104),
    g = n(63063),
    E = n(74538),
    b = n(367074),
    y = n(775412),
    O = n(695349),
    v = n(104494),
    I = n(639119),
    T = n(8647),
    S = n(533525),
    A = n(647277),
    C = n(736519),
    N = n(784238),
    R = n(117791),
    P = n(638212),
    w = n(403503),
    D = n(382791),
    x = n(45474),
    L = n(175418),
    M = n(164662),
    k = n(543581),
    j = n(84804),
    U = n(184176),
    G = n(474936),
    B = n(981631),
    Z = n(388032),
    F = n(644219),
    V = n(526980),
    H = n(872905),
    Y = n(578478);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = (e, t, i) => {
        (0, c.ZDy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await Promise.all([
                n.e("17938"),
                n.e("69432"),
                n.e("26526"),
                n.e("46573"),
            ]).then(n.bind(n, 48813));
            return (n) =>
                (0, r.jsx)(
                    a,
                    q(K({}, n), {
                        analyticsLocations: e,
                        initialStep: i,
                        premiumSubscription: t,
                    }),
                );
        });
    },
    Q = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: l, shouldShowReferralProgressBar: _ } = e,
            {
                headingText: m,
                headingTop: g,
                showPill: b,
                userDiscountOffer: y,
                discountedPrice: O,
                buttonVisibilityRef: S,
            } = en(),
            { analyticsLocations: C } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            N = null;
        s
            ? (N = (0, r.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME }))
            : l
              ? (N = (0, r.jsx)(U.Z, {}))
              : _ && (N = (0, r.jsx)(A._, {}));
        let D = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            k = null != D && D.status === B.O0b.CANCELED && null != y,
            H = (0, I.N)(),
            Y = (0, v.Ng)(),
            W = (0, v.Wp)(Y, G.Si.TIER_2) ? G.Si.TIER_2 : void 0,
            K = null != D && D.status !== B.O0b.ACCOUNT_HOLD && D.hasAnyPremiumNitro,
            z = (0, p.Z)().isFractionalPremiumActive && !K && null == N && !k,
            q = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
            { visibilityPercentageRef: Q, visibilityPercentage: J } = (0, M.E)(!q);
        return (0, r.jsx)("div", {
            className: a()(V.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: S,
            children: (0, r.jsxs)("div", {
                className: V.content,
                ref: Q,
                children: [
                    b && g,
                    (0, r.jsxs)("div", {
                        className: V.headerContainer,
                        children: [
                            (0, r.jsx)(j.Z, { containerVisibilityPercentage: J }),
                            k &&
                                null != y.expires_at &&
                                (0, r.jsx)(w.Z, {
                                    expiresAt: y.expires_at,
                                    className: F.heroOfferCountdown,
                                }),
                            (0, r.jsx)(L.Z, {
                                children: k ? Z.intl.format(Z.t["3yZP0G"], { percent: y.discount.amount }) : m,
                            }),
                            k &&
                                null != O &&
                                (0, r.jsx)(c.Text, {
                                    className: F.churnEntrypointDescriptionBrandRefresh,
                                    variant: "text-sm/medium",
                                    color: "text-primary",
                                    children: Z.intl.format(Z.t["3Q4wCy"], {
                                        discountedPrice: O,
                                        billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
                                        numMonths: y.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: z || k ? V.twoButtonContainer : void 0,
                        children: [
                            z &&
                                (0, r.jsx)(P.Z, {
                                    size: "md",
                                    hasActivePromotion: !!s,
                                    subscriptionTier:
                                        null !=
                                        (n = null == H || null == (t = H.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : W,
                                }),
                            k &&
                                (0, r.jsx)(c.Button, {
                                    variant: "expressive",
                                    icon: c.SrA,
                                    size: "md",
                                    text: Z.intl.string(Z.t.zrCzVB),
                                    onClick: () => X(C, D, x.R.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(R.Z, {
                                variant: z || k ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: Z.intl.string(Z.t["3KomGa"]),
                            }),
                        ],
                    }),
                    N,
                ],
            }),
        });
    },
    J = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: s, headingTop: u, userDiscountOffer: _, discountedPrice: m, buttonVisibilityRef: g } = en(),
            { analyticsLocations: b } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            y = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            O = null != y && y.status === B.O0b.CANCELED && null != _,
            T = (0, I.N)(),
            S = (0, v.Ng)(),
            A = (0, v.Wp)(S, G.Si.TIER_2) ? G.Si.TIER_2 : void 0,
            P = null != y && y.status !== B.O0b.ACCOUNT_HOLD && y.hasAnyPremiumNitro,
            D = (0, p.Z)().isFractionalPremiumActive && !P && !O;
        return (0, r.jsxs)("div", {
            className: a()(F.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: g,
            children: [
                (0, r.jsx)("img", {
                    src: H,
                    alt: "",
                    className: F.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: O ? F.churnDiscountContent : F.content,
                    children: [
                        u,
                        O &&
                            null != _.expires_at &&
                            (0, r.jsx)(w.Z, {
                                expiresAt: _.expires_at,
                                className: F.heroOfferCountdown,
                            }),
                        (0, r.jsx)(c.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: O ? F.churnDiscountHeader : F.header,
                            children: O && null != _ ? Z.intl.format(Z.t["3yZP0G"], { percent: _.discount.amount }) : s,
                        }),
                        O &&
                            null != m &&
                            (0, r.jsx)(c.Text, {
                                className: F.churnEntrypointDescription,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: Z.intl.format(Z.t["3Q4wCy"], {
                                    discountedPrice: m,
                                    billingPeriod: (0, E.JP)(_.discount.user_usage_limit_interval),
                                    numMonths: _.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: F.heroHeadingOriginalButtonContainer,
                            children: [
                                D &&
                                    (0, r.jsx)(N.Z, {
                                        color: l.Tt.BRAND,
                                        className: a()(F.button, F.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == T || null == (t = T.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : A,
                                    }),
                                O &&
                                    (0, r.jsxs)("div", {
                                        className: F.churnEntrypointButtons,
                                        children: [
                                            (0, r.jsx)(c.Button, {
                                                variant: "expressive",
                                                icon: c.SrA,
                                                size: "md",
                                                text: Z.intl.string(Z.t.zrCzVB),
                                                onClick: () => X(b, y, x.R.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(R.Z, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: Z.intl.string(Z.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !O &&
                                    (0, r.jsx)("div", {
                                        className: F.premiumSubscribeButton,
                                        children: (0, r.jsx)(C.Z, {
                                            look: l.iL.FILLED,
                                            color: l.Tt.BRAND,
                                            textOptions: { textOverride: Z.intl.string(Z.t["3KomGa"]) },
                                            className: F.button,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    $ = () => {
        let { headingText: e, headingTop: t } = en();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: Y,
                    alt: "",
                    className: F.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: F.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: F.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(c.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: F.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: F.premiumSubscribeButton,
                                children: (0, r.jsx)(C.Z, {
                                    look: l.iL.FILLED,
                                    color: l.Tt.BRAND,
                                    textOptions: { textOverride: Z.intl.string(Z.t["3KomGa"]) },
                                    className: F.button,
                                }),
                            }),
                            (0, r.jsx)(A._, { className: F.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    ee = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = en();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: Y,
                    alt: "",
                    className: F.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: F.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: F.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(c.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: F.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: F.premiumSubscribeButton,
                            children: (0, r.jsx)(C.Z, {
                                look: l.iL.FILLED,
                                color: l.Tt.BRAND,
                                textOptions: { textOverride: Z.intl.string(Z.t["3KomGa"]) },
                                className: F.button,
                            }),
                        }),
                        !t && (0, r.jsx)(U.Z, {}),
                        t && (0, r.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [et, en] = (0, m.Z)(),
    er = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: i,
                userDiscountOffer: o,
                discountedPrice: l,
            } = e,
            { analyticsLocations: u } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            h = (0, O.W)(),
            m = (0, b.Vi)(),
            E = (0, y._O)(),
            v = Z.intl.string(Z.t.qYKftX),
            I = (0, S.b)(),
            T = (0, r.jsx)(J, { className: t }),
            A = Z.intl.string(Z.t.ifwQZb),
            { fractionalState: C, endsAt: N } = (0, p.Z)(),
            R = (0, _.ZP)(N, _.aj.CREDITS_ENDS_IN);
        h || m
            ? (T = (0, r.jsx)(ee, { isEligibleForBogoPromotion: m }))
            : I && ((v = Z.intl.string(Z.t.qYKftX)), (T = (0, r.jsx)($, {})));
        let P = null;
        if (C === G.a$.NONE || h)
            P = n
                ? (0, r.jsx)(k.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: v,
                  })
                : (0, r.jsx)(D.Cy, {
                      className: a()(F.trialPill, { [F.hidden]: !E }),
                      text: v,
                      colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            E = !0;
            let e = (0, r.jsx)("div", {
                    className: F.pillIcon,
                    children: (0, r.jsx)(c.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = Z.intl.format(Z.t["yR+oDD"], { helpCenterLink: g.Z.getArticleURL(B.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            P = (0, r.jsx)(s.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: F.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        q(K({}, t), {
                            className: F.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: F.flexCentered,
                                children: n
                                    ? (0, r.jsx)(k.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: R,
                                      })
                                    : (0, r.jsx)(D.mn, {
                                          className: a()(F.trialPill, { [F.hidden]: !E }),
                                          text: R,
                                          colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(f.Gt, {
            value: u,
            children: (0, r.jsx)(et.Provider, {
                value: {
                    headingText: A,
                    headingTop: P,
                    showPill: E,
                    userDiscountOffer: o,
                    discountedPrice: l,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)(Q, {
                          className: t,
                          isEligibleForBogoPromotion: m,
                          isInReverseTrial: h,
                          shouldShowReferralProgressBar: I,
                      })
                    : T,
            }),
        });
    };
