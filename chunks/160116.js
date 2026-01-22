n.d(t, {
    A: () => eo,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(877624),
    o = n(311907),
    l = n(502572),
    c = n(421380),
    u = n(397927),
    d = n(775602),
    f = n(793574),
    p = n(688810),
    _ = n(366999),
    h = n(531260),
    m = n(166403),
    g = n(786300),
    E = n(975571),
    b = n(927578),
    y = n(40185),
    O = n(89366),
    A = n(637073),
    v = n(422936),
    S = n(234419),
    I = n(549996),
    T = n(371764),
    C = n(130946),
    N = n(103411),
    R = n(534217),
    w = n(194509),
    P = n(396375),
    D = n(65470),
    x = n(792656),
    L = n(511484),
    j = n(939724),
    M = n(795269),
    k = n(473702),
    U = n(371476),
    G = n(103733),
    V = n(505559),
    F = n(633451),
    B = n(722274),
    H = n(788868),
    Y = n(652215),
    W = n(985018),
    K = n(150522),
    z = n(596711),
    q = n(461971),
    X = n(828694);

function Z(e, t, n) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}

function $(e, t) {
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
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = (e, t, i) => {
        (0, u.mMO)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await n.e("72820").then(n.bind(n, 281439));
            return (n) =>
                (0, r.jsx)(
                    a,
                    J(Q({}, n), {
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
                discountedPrice: A,
                buttonVisibilityRef: N,
            } = es(),
            { analyticsLocations: w } = (0, p.Ay)(f.A.PREMIUM_MARKETING_HERO_CTA),
            P = (0, I.c)(s.C.MARKETING_PAGE_BANNER),
            M = null;
        null != P && "marketingPageBanner" === P.properties.properties.oneofKind
            ? (M = (0, r.jsx)(T.x, {
                  componentId: P.id,
                  promotionBannerMarketingComponentFields: P.properties.properties.marketingPageBanner,
              }))
            : l
              ? (M = (0, r.jsx)(C.A, {
                    variant: C.c.SUBSCRIBER_HOME,
                }))
              : c
                ? (M = (0, r.jsx)(B.A, {}))
                : _ && (M = (0, r.jsx)(R.S, {}));
        let V = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
            q = null != V && V.status === Y.Dmq.CANCELED && null != O,
            X = (0, S.V)(),
            Z = (0, v.O)(),
            Q = (0, L.U9)(Z, H.pe.TIER_2) ? H.pe.TIER_2 : void 0,
            $ = null != V && V.status !== Y.Dmq.ACCOUNT_HOLD && V.hasAnyPremiumNitro,
            J = (0, h.A)().isFractionalPremiumActive && !$ && null == M && !q,
            et = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            { visibilityPercentageRef: en, visibilityPercentage: er } = (0, G.U)(!et);
        return (0, r.jsx)("div", {
            className: a()(z.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: N,
            children: (0, r.jsxs)("div", {
                className: z.Qs,
                ref: en,
                children: [
                    y && E,
                    (0, r.jsxs)("div", {
                        className: z.N1,
                        children: [
                            (0, r.jsx)(F.A, {
                                containerVisibilityPercentage: er,
                            }),
                            q &&
                                null != O.expires_at &&
                                (0, r.jsx)(j.A, {
                                    expiresAt: O.expires_at,
                                    className: K.IZ,
                                }),
                            (0, r.jsx)(U.A, {
                                children: q
                                    ? W.intl.format(W.t["3yZP0G"], {
                                          percent: O.discount.amount,
                                      })
                                    : g,
                            }),
                            q &&
                                null != A &&
                                (0, r.jsx)(u.Text, {
                                    className: K.jG,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: W.intl.format(W.t["3Q4wCy"], {
                                        discountedPrice: A,
                                        billingPeriod: (0, b.Ke)(O.discount.user_usage_limit_interval),
                                        numMonths: O.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: J || q ? z.UJ : void 0,
                        children: [
                            J &&
                                (0, r.jsx)(x.A, {
                                    size: "md",
                                    hasActivePromotion: !!l,
                                    subscriptionTier:
                                        null !=
                                        (t = null == X || null == (n = X.subscription_trial) ? void 0 : n.sku_id)
                                            ? t
                                            : Q,
                                }),
                            q &&
                                (0, r.jsx)(u.Button, {
                                    variant: "expressive",
                                    icon: u.tvc,
                                    size: "md",
                                    text: W.intl.string(W.t.zrCzVB),
                                    onClick: () => ee(w, V, k.g.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(D.A, {
                                variant: J || q ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: W.intl.string(W.t["3KomGa"]),
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
            { headingText: s, headingTop: l, userDiscountOffer: d, discountedPrice: _, buttonVisibilityRef: g } = es(),
            { analyticsLocations: E } = (0, p.Ay)(f.A.PREMIUM_MARKETING_HERO_CTA),
            y = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
            O = null != y && y.status === Y.Dmq.CANCELED && null != d,
            A = (0, S.V)(),
            I = (0, v.O)(),
            T = (0, L.U9)(I, H.pe.TIER_2) ? H.pe.TIER_2 : void 0,
            C = null != y && y.status !== Y.Dmq.ACCOUNT_HOLD && y.hasAnyPremiumNitro,
            N = (0, h.A)().isFractionalPremiumActive && !C && !O;
        return (0, r.jsxs)("div", {
            className: a()(K.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: g,
            children: [
                (0, r.jsx)("img", {
                    src: q,
                    alt: "",
                    className: K.NC,
                }),
                (0, r.jsxs)("div", {
                    className: O ? K.Nr : K.Qs,
                    children: [
                        l,
                        O &&
                            null != d.expires_at &&
                            (0, r.jsx)(j.A, {
                                expiresAt: d.expires_at,
                                className: K.IZ,
                            }),
                        (0, r.jsx)(u.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: O ? K.bc : K.wx,
                            children:
                                O && null != d
                                    ? W.intl.format(W.t["3yZP0G"], {
                                          percent: d.discount.amount,
                                      })
                                    : s,
                        }),
                        O &&
                            null != _ &&
                            (0, r.jsx)(u.Text, {
                                className: K.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: W.intl.format(W.t["3Q4wCy"], {
                                    discountedPrice: _,
                                    billingPeriod: (0, b.Ke)(d.discount.user_usage_limit_interval),
                                    numMonths: d.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: K.$J,
                            children: [
                                N &&
                                    (0, r.jsx)(P.A, {
                                        color: c.XD.BRAND,
                                        className: a()(K.x6, K.xF),
                                        subscriptionTier:
                                            null !=
                                            (t = null == A || null == (n = A.subscription_trial) ? void 0 : n.sku_id)
                                                ? t
                                                : T,
                                    }),
                                O &&
                                    (0, r.jsxs)("div", {
                                        className: K.Cg,
                                        children: [
                                            (0, r.jsx)(u.Button, {
                                                variant: "expressive",
                                                icon: u.tvc,
                                                size: "md",
                                                text: W.intl.string(W.t.zrCzVB),
                                                onClick: () => ee(E, y, k.g.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(D.A, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !O &&
                                    (0, r.jsx)("div", {
                                        className: K.UO,
                                        children: (0, r.jsx)(w.A, {
                                            look: c.pR.FILLED,
                                            color: c.XD.BRAND,
                                            textOptions: {
                                                textOverride: W.intl.string(W.t["3KomGa"]),
                                            },
                                            className: K.x6,
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
        let { headingText: e, headingTop: t } = es();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: X,
                    alt: "",
                    className: K.HJ,
                }),
                (0, r.jsx)("div", {
                    className: K.iW,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: K.eF,
                        children: [
                            t,
                            (0, r.jsx)(u.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: K.wx,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: K.UO,
                                children: (0, r.jsx)(w.A, {
                                    look: c.pR.FILLED,
                                    color: c.XD.BRAND,
                                    textOptions: {
                                        textOverride: W.intl.string(W.t["3KomGa"]),
                                    },
                                    className: K.x6,
                                }),
                            }),
                            (0, r.jsx)(R.S, {
                                className: K.Qq,
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    ei = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = es();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: X,
                    alt: "",
                    className: K.HJ,
                }),
                (0, r.jsxs)("div", {
                    className: K.k1,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: K.nl,
                            children: [
                                i,
                                (0, r.jsx)(u.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: K.wx,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: K.UO,
                            children: (0, r.jsx)(w.A, {
                                look: c.pR.FILLED,
                                color: c.XD.BRAND,
                                textOptions: {
                                    textOverride: W.intl.string(W.t["3KomGa"]),
                                },
                                className: K.x6,
                            }),
                        }),
                        !t && (0, r.jsx)(B.A, {}),
                        t &&
                            (0, r.jsx)(C.A, {
                                variant: C.c.SUBSCRIBER_HOME,
                            }),
                    ],
                }),
            ],
        });
    },
    [ea, es] = (0, g.A)(),
    eo = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: i,
                userDiscountOffer: s,
                discountedPrice: o,
            } = e,
            { analyticsLocations: c } = (0, p.Ay)(f.A.PREMIUM_MARKETING_HERO_CTA),
            d = (0, A.d)(),
            m = (0, y.cg)(),
            g = (0, O.QQ)(),
            b = W.intl.string(W.t.qYKftX),
            v = (0, N.m)(),
            S = (0, r.jsx)(en, {
                className: t,
            }),
            I = W.intl.string(W.t.ifwQZb),
            { fractionalState: T, endsAt: C } = (0, h.A)(),
            R = (0, _.Ay)(C, _.yE.CREDITS_ENDS_IN);
        d || m
            ? (S = (0, r.jsx)(ei, {
                  isEligibleForBogoPromotion: m,
              }))
            : v && ((b = W.intl.string(W.t.qYKftX)), (S = (0, r.jsx)(er, {})));
        let w = null;
        if (T === H.xc.NONE || d)
            w = n
                ? (0, r.jsx)(V.A, {
                      enablePremiumBrandRefresh: !0,
                      text: b,
                  })
                : (0, r.jsx)(M.ir, {
                      className: a()(K.Av, {
                          [K.R]: !g,
                      }),
                      text: b,
                      colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            g = !0;
            let e = (0, r.jsx)("div", {
                    className: K.nW,
                    children: (0, r.jsx)(u.mir, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = W.intl.format(W.t["yR+oDD"], {
                    helpCenterLink: E.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
            w = (0, r.jsx)(l.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: K.YL,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        J(Q({}, t), {
                            className: K.V_,
                            children: (0, r.jsx)("div", {
                                className: K.eL,
                                children: n
                                    ? (0, r.jsx)(V.A, {
                                          enablePremiumBrandRefresh: !0,
                                          text: R,
                                      })
                                    : (0, r.jsx)(M.R, {
                                          className: a()(K.Av, {
                                              [K.R]: !g,
                                          }),
                                          text: R,
                                          colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(p.f5, {
            value: c,
            children: (0, r.jsx)(ea.Provider, {
                value: {
                    headingText: I,
                    headingTop: w,
                    showPill: g,
                    userDiscountOffer: s,
                    discountedPrice: o,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)(et, {
                          className: t,
                          isEligibleForBogoPromotion: m,
                          isInReverseTrial: d,
                          shouldShowReferralProgressBar: v,
                      })
                    : S,
            }),
        });
    };
