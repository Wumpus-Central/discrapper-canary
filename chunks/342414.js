n.d(t, { Z: () => eo }), n(388685);
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
    I = n(504692),
    T = n(104494),
    S = n(639119),
    A = n(8647),
    C = n(533525),
    N = n(647277),
    R = n(736519),
    P = n(784238),
    w = n(117791),
    D = n(638212),
    x = n(648613),
    L = n(382791),
    j = n(45474),
    M = n(175418),
    k = n(164662),
    U = n(543581),
    G = n(84804),
    B = n(184176),
    Z = n(386733),
    F = n(474936),
    V = n(981631),
    H = n(388032),
    Y = n(644219),
    W = n(526980),
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
        (0, l.ZDy)(async () => {
            let { default: a } = await Promise.all([n.e("58067"), n.e("81709"), n.e("70349")]).then(n.bind(n, 833569));
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
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: f, shouldShowReferralProgressBar: p } = e,
            {
                headingText: m,
                headingTop: g,
                showPill: b,
                userDiscountOffer: y,
                discountedPrice: O,
                buttonVisibilityRef: C,
            } = ea(),
            { analyticsLocations: R } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            P = I.ZP.useExperiment({ location: "PremiumBrandRefreshHeadingBody" }),
            { enabled: x } = v.b.useConfig({ location: "Hero Heading" }),
            L = null;
        s
            ? (L = (0, r.jsx)(A.Z, { variant: A.C.SUBSCRIBER_HOME }))
            : f
              ? (L = (0, r.jsx)(B.Z, {}))
              : p && (L = P.cohort === I.S$.Control ? (0, r.jsx)(Z.Z, {}) : (0, r.jsx)(N._, {}));
        let U = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            K = null != U && U.status === V.O0b.CANCELED && null != y && x,
            z = (0, S.N)(),
            q = (0, T.Ng)(),
            X = (0, T.Wp)(q, F.Si.TIER_2) ? F.Si.TIER_2 : void 0,
            Q = null != U && U.status !== V.O0b.ACCOUNT_HOLD && U.hasAnyPremiumNitro,
            J = (0, _.Z)().isFractionalPremiumActive && !Q && null == L && !K,
            ee = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: et, visibilityPercentage: en } = (0, k.E)(!ee);
        return (0, r.jsx)("div", {
            className: a()(W.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: C,
            children: (0, r.jsxs)("div", {
                className: W.content,
                ref: et,
                children: [
                    b && g,
                    (0, r.jsxs)("div", {
                        className: W.headerContainer,
                        children: [
                            (0, r.jsx)(G.Z, { containerVisibilityPercentage: en }),
                            (0, r.jsx)(M.Z, {
                                children: K ? H.intl.format(H.t["3yZP0N"], { percent: y.discount.amount }) : m,
                            }),
                            K &&
                                null != O &&
                                (0, r.jsx)(l.Text, {
                                    className: Y.churnEntrypointDescriptionBrandRefresh,
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: H.intl.format(H.t["3Q4wCw"], {
                                        discountedPrice: O,
                                        billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
                                        numMonths: y.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: J || K ? W.twoButtonContainer : void 0,
                        children: [
                            J &&
                                (0, r.jsx)(D.Z, {
                                    size: "md",
                                    hasActivePromotion: !!s,
                                    subscriptionTier:
                                        null !=
                                        (n = null == z || null == (t = z.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : X,
                                }),
                            K &&
                                (0, r.jsx)(l.zxk, {
                                    variant: "expressive",
                                    icon: l.SrA,
                                    size: "md",
                                    text: H.intl.string(H.t.zrCzVF),
                                    onClick: () => $(R, U, j.R.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(w.Z, {
                                variant: J || K ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: H.intl.string(H.t["3KomGR"]),
                            }),
                        ],
                    }),
                    L,
                ],
            }),
        });
    },
    et = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: c, headingTop: f, userDiscountOffer: p, discountedPrice: m, buttonVisibilityRef: g } = ea(),
            { analyticsLocations: b } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            { enabled: y } = v.b.useConfig({ location: "Hero Heading" }),
            O = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            I = null != O && O.status === V.O0b.CANCELED && null != p && y,
            A = (0, S.N)(),
            C = (0, T.Ng)(),
            N = (0, T.Wp)(C, F.Si.TIER_2) ? F.Si.TIER_2 : void 0,
            D = null != O && O.status !== V.O0b.ACCOUNT_HOLD && O.hasAnyPremiumNitro,
            x = (0, _.Z)().isFractionalPremiumActive && !D && !I;
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
                    className: Y.content,
                    children: [
                        f,
                        (0, r.jsx)(l.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: Y.header,
                            children: I && null != p ? H.intl.format(H.t["3yZP0N"], { percent: p.discount.amount }) : c,
                        }),
                        I &&
                            null != m &&
                            (0, r.jsx)(l.Text, {
                                className: Y.churnEntrypointDescription,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: H.intl.format(H.t["3Q4wCw"], {
                                    discountedPrice: m,
                                    billingPeriod: (0, E.JP)(p.discount.user_usage_limit_interval),
                                    numMonths: p.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: Y.heroHeadingOriginalButtonContainer,
                            children: [
                                x &&
                                    (0, r.jsx)(P.Z, {
                                        color: s.Tt.BRAND,
                                        className: a()(Y.button, Y.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == A || null == (t = A.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : N,
                                    }),
                                I &&
                                    (0, r.jsxs)("div", {
                                        className: Y.churnEntrypointButtons,
                                        children: [
                                            (0, r.jsx)(l.zxk, {
                                                variant: "expressive",
                                                icon: l.SrA,
                                                size: "md",
                                                text: H.intl.string(H.t.zrCzVF),
                                                onClick: () => $(b, O, j.R.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(w.Z, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: H.intl.string(H.t.Ve9Ge3),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !I &&
                                    (0, r.jsx)("div", {
                                        className: Y.premiumSubscribeButton,
                                        children: (0, r.jsx)(R.Z, {
                                            look: s.iL.FILLED,
                                            color: s.Tt.BRAND,
                                            textOptions: { textOverride: H.intl.string(H.t["3KomGR"]) },
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
        let { headingText: e, headingTop: t } = ea(),
            n = I.ZP.useExperiment({ location: "HeroHeadingBodyV2" }),
            i = () =>
                n.cohort === I.S$.Expressive
                    ? (0, r.jsx)(x.Z, {
                          isGift: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(l.zxk, {
                                  variant: "expressive",
                                  size: "md",
                                  text: H.intl.string(H.t["3KomGR"]),
                                  icon: l.OgN,
                                  onClick: t,
                              });
                          },
                      })
                    : (0, r.jsx)(R.Z, {
                          look: s.iL.FILLED,
                          color: s.Tt.BRAND,
                          textOptions: { textOverride: H.intl.string(H.t["3KomGR"]) },
                          className: Y.button,
                      });
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
                            (0, r.jsx)(l.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: Y.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: Y.premiumSubscribeButton,
                                children: i(),
                            }),
                            n.cohort === I.S$.Control
                                ? (0, r.jsx)(Z.Z, {})
                                : (0, r.jsx)(N._, { className: Y.referralBanner }),
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
                                (0, r.jsx)(l.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: Y.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Y.premiumSubscribeButton,
                            children: (0, r.jsx)(R.Z, {
                                look: s.iL.FILLED,
                                color: s.Tt.BRAND,
                                textOptions: { textOverride: H.intl.string(H.t["3KomGR"]) },
                                className: Y.button,
                            }),
                        }),
                        !t && (0, r.jsx)(B.Z, {}),
                        t && (0, r.jsx)(A.Z, { variant: A.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [ei, ea] = (0, m.Z)(),
    eo = (e) => {
        let {
                className: t,
                location: n,
                enablePremiumBrandRefresh: i,
                buttonVisibilityRef: o,
                userDiscountOffer: s,
                discountedPrice: c,
            } = e,
            { analyticsLocations: h } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            m = (0, O.W)(),
            E = (0, b.Vi)(),
            v = (0, y._O)(),
            I = H.intl.string(H.t.qYKftb),
            T = (0, C.b)(n),
            S = (0, r.jsx)(et, { className: t }),
            A = H.intl.string(H.t.ifwQZW),
            { fractionalState: N, endsAt: R } = (0, _.Z)(),
            P = (0, f.ZP)(R, f.aj.CREDITS_ENDS_IN);
        m || E
            ? (S = (0, r.jsx)(er, { isEligibleForBogoPromotion: E }))
            : T && ((I = H.intl.string(H.t.qYKftb)), (S = (0, r.jsx)(en, {})));
        let w = null;
        if (N === F.a$.NONE || m)
            w = i
                ? (0, r.jsx)(U.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: I,
                  })
                : (0, r.jsx)(L.Cy, {
                      className: a()(Y.trialPill, { [Y.hidden]: !v }),
                      text: I,
                      colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            v = !0;
            let e = (0, r.jsx)("div", {
                    className: Y.pillIcon,
                    children: (0, r.jsx)(l.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = H.intl.format(H.t["yR+oDA"], { helpCenterLink: g.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            w = (0, r.jsx)(p.Z, {
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
                                children: i
                                    ? (0, r.jsx)(U.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: P,
                                      })
                                    : (0, r.jsx)(L.mn, {
                                          className: a()(Y.trialPill, { [Y.hidden]: !v }),
                                          text: P,
                                          colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(d.Gt, {
            value: h,
            children: (0, r.jsx)(ei.Provider, {
                value: {
                    headingText: A,
                    headingTop: w,
                    showPill: v,
                    userDiscountOffer: s,
                    discountedPrice: c,
                    buttonVisibilityRef: o,
                },
                children: i
                    ? (0, r.jsx)(ee, {
                          className: t,
                          isEligibleForBogoPromotion: E,
                          isInReverseTrial: m,
                          shouldShowReferralProgressBar: T,
                      })
                    : S,
            }),
        });
    };
