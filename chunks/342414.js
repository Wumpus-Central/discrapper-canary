n.d(t, { Z: () => es }), n(388685);
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
    L = n(508070),
    j = n(382791),
    M = n(45474),
    k = n(175418),
    U = n(164662),
    G = n(543581),
    B = n(84804),
    Z = n(184176),
    F = n(386733),
    V = n(474936),
    H = n(981631),
    Y = n(388032),
    W = n(644219),
    K = n(526980),
    z = n(872905),
    q = n(578478);
function X(e, t, n) {
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
function Q(e) {
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
                X(e, t, n[t]);
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
        (0, l.ZDy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await n.e("26526").then(n.bind(n, 48813));
            return (n) =>
                (0, r.jsx)(
                    a,
                    $(Q({}, n), {
                        analyticsLocations: e,
                        initialStep: i,
                        premiumSubscription: t,
                    }),
                );
        });
    },
    et = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: f, shouldShowReferralProgressBar: p } = e,
            {
                headingText: m,
                headingTop: g,
                showPill: b,
                userDiscountOffer: y,
                discountedPrice: O,
                buttonVisibilityRef: C,
            } = eo(),
            { analyticsLocations: R } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            P = I.ZP.useExperiment({ location: "PremiumBrandRefreshHeadingBody" }),
            { enabled: x, showCountdown: j } = v.b.useConfig({ location: "Hero Heading" }),
            G = null;
        s
            ? (G = (0, r.jsx)(A.Z, { variant: A.C.SUBSCRIBER_HOME }))
            : f
              ? (G = (0, r.jsx)(Z.Z, {}))
              : p && (G = P.cohort === I.S$.Control ? (0, r.jsx)(F.Z, {}) : (0, r.jsx)(N._, {}));
        let z = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            q = null != z && z.status === H.O0b.CANCELED && null != y && x,
            X = (0, S.N)(),
            Q = (0, T.Ng)(),
            J = (0, T.Wp)(Q, V.Si.TIER_2) ? V.Si.TIER_2 : void 0,
            $ = null != z && z.status !== H.O0b.ACCOUNT_HOLD && z.hasAnyPremiumNitro,
            et = (0, _.Z)().isFractionalPremiumActive && !$ && null == G && !q,
            en = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: er, visibilityPercentage: ei } = (0, U.E)(!en);
        return (0, r.jsx)("div", {
            className: a()(K.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: C,
            children: (0, r.jsxs)("div", {
                className: K.content,
                ref: er,
                children: [
                    b && g,
                    (0, r.jsxs)("div", {
                        className: K.headerContainer,
                        children: [
                            (0, r.jsx)(B.Z, { containerVisibilityPercentage: ei }),
                            q && j && null != y.expires_at && (0, r.jsx)(L.Z, { expiresAt: y.expires_at }),
                            (0, r.jsx)(k.Z, {
                                children: q ? Y.intl.format(Y.t["3yZP0N"], { percent: y.discount.amount }) : m,
                            }),
                            q &&
                                null != O &&
                                (0, r.jsx)(l.Text, {
                                    className: W.churnEntrypointDescriptionBrandRefresh,
                                    variant: "text-sm/medium",
                                    color: "text-primary",
                                    children: Y.intl.format(Y.t["3Q4wCw"], {
                                        discountedPrice: O,
                                        billingPeriod: (0, E.JP)(y.discount.user_usage_limit_interval),
                                        numMonths: y.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: et || q ? K.twoButtonContainer : void 0,
                        children: [
                            et &&
                                (0, r.jsx)(D.Z, {
                                    size: "md",
                                    hasActivePromotion: !!s,
                                    subscriptionTier:
                                        null !=
                                        (n = null == X || null == (t = X.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : J,
                                }),
                            q &&
                                (0, r.jsx)(l.zxk, {
                                    variant: "expressive",
                                    icon: l.SrA,
                                    size: "md",
                                    text: Y.intl.string(Y.t.zrCzVF),
                                    onClick: () => ee(R, z, M.R.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(w.Z, {
                                variant: et || q ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: Y.intl.string(Y.t["3KomGR"]),
                            }),
                        ],
                    }),
                    G,
                ],
            }),
        });
    },
    en = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: c, headingTop: f, userDiscountOffer: p, discountedPrice: m, buttonVisibilityRef: g } = eo(),
            { analyticsLocations: b } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            { enabled: y, showCountdown: O } = v.b.useConfig({ location: "Hero Heading" }),
            I = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            A = null != I && I.status === H.O0b.CANCELED && null != p && y,
            C = (0, S.N)(),
            N = (0, T.Ng)(),
            D = (0, T.Wp)(N, V.Si.TIER_2) ? V.Si.TIER_2 : void 0,
            x = null != I && I.status !== H.O0b.ACCOUNT_HOLD && I.hasAnyPremiumNitro,
            j = (0, _.Z)().isFractionalPremiumActive && !x && !A;
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
                    className: A && O ? W.churnDiscountContent : W.content,
                    children: [
                        f,
                        A && O && null != p.expires_at && (0, r.jsx)(L.Z, { expiresAt: p.expires_at }),
                        (0, r.jsx)(l.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: A ? W.churnDiscountHeader : W.header,
                            children: A && null != p ? Y.intl.format(Y.t["3yZP0N"], { percent: p.discount.amount }) : c,
                        }),
                        A &&
                            null != m &&
                            (0, r.jsx)(l.Text, {
                                className: W.churnEntrypointDescription,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: Y.intl.format(Y.t["3Q4wCw"], {
                                    discountedPrice: m,
                                    billingPeriod: (0, E.JP)(p.discount.user_usage_limit_interval),
                                    numMonths: p.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: W.heroHeadingOriginalButtonContainer,
                            children: [
                                j &&
                                    (0, r.jsx)(P.Z, {
                                        color: s.Tt.BRAND,
                                        className: a()(W.button, W.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == C || null == (t = C.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : D,
                                    }),
                                A &&
                                    (0, r.jsxs)("div", {
                                        className: W.churnEntrypointButtons,
                                        children: [
                                            (0, r.jsx)(l.zxk, {
                                                variant: "expressive",
                                                icon: l.SrA,
                                                size: "md",
                                                text: Y.intl.string(Y.t.zrCzVF),
                                                onClick: () => ee(b, I, M.R.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(w.Z, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: Y.intl.string(Y.t.Ve9Ge3),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !A &&
                                    (0, r.jsx)("div", {
                                        className: W.premiumSubscribeButton,
                                        children: (0, r.jsx)(R.Z, {
                                            look: s.iL.FILLED,
                                            color: s.Tt.BRAND,
                                            textOptions: { textOverride: Y.intl.string(Y.t["3KomGR"]) },
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
        let { headingText: e, headingTop: t } = eo(),
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
                                  text: Y.intl.string(Y.t["3KomGR"]),
                                  icon: l.OgN,
                                  onClick: t,
                              });
                          },
                      })
                    : (0, r.jsx)(R.Z, {
                          look: s.iL.FILLED,
                          color: s.Tt.BRAND,
                          textOptions: { textOverride: Y.intl.string(Y.t["3KomGR"]) },
                          className: W.button,
                      });
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
                            (0, r.jsx)(l.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: W.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: W.premiumSubscribeButton,
                                children: i(),
                            }),
                            n.cohort === I.S$.Control
                                ? (0, r.jsx)(F.Z, {})
                                : (0, r.jsx)(N._, { className: W.referralBanner }),
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
                                (0, r.jsx)(l.X6q, {
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
                                look: s.iL.FILLED,
                                color: s.Tt.BRAND,
                                textOptions: { textOverride: Y.intl.string(Y.t["3KomGR"]) },
                                className: W.button,
                            }),
                        }),
                        !t && (0, r.jsx)(Z.Z, {}),
                        t && (0, r.jsx)(A.Z, { variant: A.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [ea, eo] = (0, m.Z)(),
    es = (e) => {
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
            v = Y.intl.string(Y.t.qYKftb),
            I = (0, C.b)(),
            T = (0, r.jsx)(en, { className: t }),
            S = Y.intl.string(Y.t.ifwQZW),
            { fractionalState: A, endsAt: N } = (0, _.Z)(),
            R = (0, f.ZP)(N, f.aj.CREDITS_ENDS_IN);
        h || m
            ? (T = (0, r.jsx)(ei, { isEligibleForBogoPromotion: m }))
            : I && ((v = Y.intl.string(Y.t.qYKftb)), (T = (0, r.jsx)(er, {})));
        let P = null;
        if (A === V.a$.NONE || h)
            P = n
                ? (0, r.jsx)(G.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: v,
                  })
                : (0, r.jsx)(j.Cy, {
                      className: a()(W.trialPill, { [W.hidden]: !E }),
                      text: v,
                      colorOptions: j.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            E = !0;
            let e = (0, r.jsx)("div", {
                    className: W.pillIcon,
                    children: (0, r.jsx)(l.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = Y.intl.format(Y.t["yR+oDA"], { helpCenterLink: g.Z.getArticleURL(H.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            P = (0, r.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: W.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        $(Q({}, t), {
                            className: W.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: W.flexCentered,
                                children: n
                                    ? (0, r.jsx)(G.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: R,
                                      })
                                    : (0, r.jsx)(j.mn, {
                                          className: a()(W.trialPill, { [W.hidden]: !E }),
                                          text: R,
                                          colorOptions: j.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            children: (0, r.jsx)(ea.Provider, {
                value: {
                    headingText: S,
                    headingTop: P,
                    showPill: E,
                    userDiscountOffer: o,
                    discountedPrice: s,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)(et, {
                          className: t,
                          isEligibleForBogoPromotion: m,
                          isInReverseTrial: h,
                          shouldShowReferralProgressBar: I,
                      })
                    : T,
            }),
        });
    };
