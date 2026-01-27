n.d(t, {
    A: () => el,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(877624),
    a = n(311907),
    o = n(502572),
    c = n(421380),
    d = n(397927),
    u = n(775602),
    _ = n(793574),
    p = n(688810),
    m = n(366999),
    g = n(531260),
    A = n(166403),
    f = n(786300),
    h = n(975571),
    b = n(927578),
    E = n(40185),
    x = n(89366),
    O = n(637073),
    C = n(422936),
    I = n(234419),
    T = n(549996),
    S = n(371764),
    j = n(130946),
    v = n(103411),
    N = n(534217),
    y = n(194509),
    P = n(396375),
    R = n(65470),
    D = n(792656),
    w = n(511484),
    L = n(939724),
    M = n(795269),
    U = n(473702),
    G = n(371476),
    k = n(103733),
    V = n(505559),
    H = n(633451),
    B = n(722274),
    F = n(788868),
    Y = n(652215),
    W = n(985018),
    z = n(150522),
    K = n(596711),
    Z = n(461971),
    X = n(828694);

function q(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = (e, t, i) => {
        (0, d.mMO)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: l } = await n.e("72820").then(n.bind(n, 281439));
            return (n) =>
                (0, r.jsx)(
                    l,
                    J(q({}, n), {
                        analyticsLocations: e,
                        initialStep: i,
                        premiumSubscription: t,
                    }),
                );
        });
    },
    $ = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: o, isInReverseTrial: c, shouldShowReferralProgressBar: m } = e,
            {
                headingText: f,
                headingTop: h,
                showPill: E,
                userDiscountOffer: x,
                discountedPrice: O,
                buttonVisibilityRef: v,
            } = ei(),
            { analyticsLocations: y } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            P = (0, T.c)(s.C.MARKETING_PAGE_BANNER),
            M = null;
        null != P && "marketingPageBanner" === P.properties.properties.oneofKind
            ? (M = (0, r.jsx)(S.x, {
                  componentId: P.id,
                  promotionBannerMarketingComponentFields: P.properties.properties.marketingPageBanner,
              }))
            : o
              ? (M = (0, r.jsx)(j.A, {
                    variant: j.c.SUBSCRIBER_HOME,
                }))
              : c
                ? (M = (0, r.jsx)(B.A, {}))
                : m && (M = (0, r.jsx)(N.S, {}));
        let V = (0, a.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
            Z = null != V && V.status === Y.Dmq.CANCELED && null != x,
            X = (0, I.V)(),
            q = (0, C.O)(),
            J = (0, w.U9)(q, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            $ = null != V && V.status !== Y.Dmq.ACCOUNT_HOLD && V.hasAnyPremiumNitro,
            ee = (0, g.A)().isFractionalPremiumActive && !$ && null == M && !Z,
            et = (0, a.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: en, visibilityPercentage: er } = (0, k.U)(!et);
        return (0, r.jsx)("div", {
            className: l()(K.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: v,
            children: (0, r.jsxs)("div", {
                className: K.Qs,
                ref: en,
                children: [
                    E && h,
                    (0, r.jsxs)("div", {
                        className: K.N1,
                        children: [
                            (0, r.jsx)(H.A, {
                                containerVisibilityPercentage: er,
                            }),
                            Z &&
                                null != x.expires_at &&
                                (0, r.jsx)(L.A, {
                                    expiresAt: x.expires_at,
                                    className: z.IZ,
                                }),
                            (0, r.jsx)(G.A, {
                                children: Z
                                    ? W.intl.format(W.t["3yZP0G"], {
                                          percent: x.discount.amount,
                                      })
                                    : f,
                            }),
                            Z &&
                                null != O &&
                                (0, r.jsx)(d.Text, {
                                    className: z.jG,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: W.intl.format(W.t["3Q4wCy"], {
                                        discountedPrice: O,
                                        billingPeriod: (0, b.Ke)(x.discount.user_usage_limit_interval),
                                        numMonths: x.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ee || Z ? K.UJ : void 0,
                        children: [
                            ee &&
                                (0, r.jsx)(D.A, {
                                    size: "md",
                                    hasActivePromotion: !!o,
                                    subscriptionTier:
                                        null !=
                                        (t = null == X || null == (n = X.subscription_trial) ? void 0 : n.sku_id)
                                            ? t
                                            : J,
                                }),
                            Z &&
                                (0, r.jsx)(d.Button, {
                                    variant: "expressive",
                                    icon: d.tvc,
                                    size: "md",
                                    text: W.intl.string(W.t.zrCzVB),
                                    onClick: () => Q(y, V, U.g.CONFIRM_DISCOUNT),
                                }),
                            (0, r.jsx)(R.A, {
                                variant: ee || Z ? "secondary" : "expressive",
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
    ee = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: s, headingTop: o, userDiscountOffer: u, discountedPrice: m, buttonVisibilityRef: f } = ei(),
            { analyticsLocations: h } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            E = (0, a.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
            x = null != E && E.status === Y.Dmq.CANCELED && null != u,
            O = (0, I.V)(),
            T = (0, C.O)(),
            S = (0, w.U9)(T, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            j = null != E && E.status !== Y.Dmq.ACCOUNT_HOLD && E.hasAnyPremiumNitro,
            v = (0, g.A)().isFractionalPremiumActive && !j && !x;
        return (0, r.jsxs)("div", {
            className: l()(z.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: f,
            children: [
                (0, r.jsx)("img", {
                    src: Z,
                    alt: "",
                    className: z.NC,
                }),
                (0, r.jsxs)("div", {
                    className: x ? z.Nr : z.Qs,
                    children: [
                        o,
                        x &&
                            null != u.expires_at &&
                            (0, r.jsx)(L.A, {
                                expiresAt: u.expires_at,
                                className: z.IZ,
                            }),
                        (0, r.jsx)(d.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: x ? z.bc : z.wx,
                            children:
                                x && null != u
                                    ? W.intl.format(W.t["3yZP0G"], {
                                          percent: u.discount.amount,
                                      })
                                    : s,
                        }),
                        x &&
                            null != m &&
                            (0, r.jsx)(d.Text, {
                                className: z.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: W.intl.format(W.t["3Q4wCy"], {
                                    discountedPrice: m,
                                    billingPeriod: (0, b.Ke)(u.discount.user_usage_limit_interval),
                                    numMonths: u.discount.user_usage_limit,
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: z.$J,
                            children: [
                                v &&
                                    (0, r.jsx)(P.A, {
                                        color: c.XD.BRAND,
                                        className: l()(z.x6, z.xF),
                                        subscriptionTier:
                                            null !=
                                            (t = null == O || null == (n = O.subscription_trial) ? void 0 : n.sku_id)
                                                ? t
                                                : S,
                                    }),
                                x &&
                                    (0, r.jsxs)("div", {
                                        className: z.Cg,
                                        children: [
                                            (0, r.jsx)(d.Button, {
                                                variant: "expressive",
                                                icon: d.tvc,
                                                size: "md",
                                                text: W.intl.string(W.t.zrCzVB),
                                                onClick: () => Q(h, E, U.g.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, r.jsx)(R.A, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !x &&
                                    (0, r.jsx)("div", {
                                        className: z.UO,
                                        children: (0, r.jsx)(y.A, {
                                            look: c.pR.FILLED,
                                            color: c.XD.BRAND,
                                            textOptions: {
                                                textOverride: W.intl.string(W.t["3KomGa"]),
                                            },
                                            className: z.x6,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    et = () => {
        let { headingText: e, headingTop: t } = ei();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: X,
                    alt: "",
                    className: z.HJ,
                }),
                (0, r.jsx)("div", {
                    className: z.iW,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: z.eF,
                        children: [
                            t,
                            (0, r.jsx)(d.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: z.wx,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: z.UO,
                                children: (0, r.jsx)(y.A, {
                                    look: c.pR.FILLED,
                                    color: c.XD.BRAND,
                                    textOptions: {
                                        textOverride: W.intl.string(W.t["3KomGa"]),
                                    },
                                    className: z.x6,
                                }),
                            }),
                            (0, r.jsx)(N.S, {
                                className: z.Qq,
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    en = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = ei();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: X,
                    alt: "",
                    className: z.HJ,
                }),
                (0, r.jsxs)("div", {
                    className: z.k1,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: z.nl,
                            children: [
                                i,
                                (0, r.jsx)(d.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: z.wx,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: z.UO,
                            children: (0, r.jsx)(y.A, {
                                look: c.pR.FILLED,
                                color: c.XD.BRAND,
                                textOptions: {
                                    textOverride: W.intl.string(W.t["3KomGa"]),
                                },
                                className: z.x6,
                            }),
                        }),
                        !t && (0, r.jsx)(B.A, {}),
                        t &&
                            (0, r.jsx)(j.A, {
                                variant: j.c.SUBSCRIBER_HOME,
                            }),
                    ],
                }),
            ],
        });
    },
    [er, ei] = (0, f.A)(),
    el = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: i,
                userDiscountOffer: s,
                discountedPrice: a,
            } = e,
            { analyticsLocations: c } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            u = (0, O.d)(),
            A = (0, E.cg)(),
            f = (0, x.QQ)(),
            b = W.intl.string(W.t.qYKftX),
            C = (0, v.m)(),
            I = (0, r.jsx)(ee, {
                className: t,
            }),
            T = W.intl.string(W.t.ifwQZb),
            { fractionalState: S, endsAt: j } = (0, g.A)(),
            N = (0, m.Ay)(j, m.yE.CREDITS_ENDS_IN);
        u || A
            ? (I = (0, r.jsx)(en, {
                  isEligibleForBogoPromotion: A,
              }))
            : C && ((b = W.intl.string(W.t.qYKftX)), (I = (0, r.jsx)(et, {})));
        let y = null;
        if (S === F.xc.NONE || u)
            y = n
                ? (0, r.jsx)(V.A, {
                      enablePremiumBrandRefresh: !0,
                      text: b,
                  })
                : (0, r.jsx)(M.ir, {
                      className: l()(z.Av, {
                          [z.R]: !f,
                      }),
                      text: b,
                      colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            f = !0;
            let e = (0, r.jsx)("div", {
                    className: z.nW,
                    children: (0, r.jsx)(d.mir, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = W.intl.format(W.t["yR+oDD"], {
                    helpCenterLink: h.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
            y = (0, r.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: z.YL,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        J(q({}, t), {
                            className: z.V_,
                            children: (0, r.jsx)("div", {
                                className: z.eL,
                                children: n
                                    ? (0, r.jsx)(V.A, {
                                          enablePremiumBrandRefresh: !0,
                                          text: N,
                                      })
                                    : (0, r.jsx)(M.R, {
                                          className: l()(z.Av, {
                                              [z.R]: !f,
                                          }),
                                          text: N,
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
            children: (0, r.jsx)(er.Provider, {
                value: {
                    headingText: T,
                    headingTop: y,
                    showPill: f,
                    userDiscountOffer: s,
                    discountedPrice: a,
                    buttonVisibilityRef: i,
                },
                children: n
                    ? (0, r.jsx)($, {
                          className: t,
                          isEligibleForBogoPromotion: A,
                          isInReverseTrial: u,
                          shouldShowReferralProgressBar: C,
                      })
                    : I,
            }),
        });
    };
