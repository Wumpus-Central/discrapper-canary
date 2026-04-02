n.d(t, { A: () => eo });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(877624),
    r = n(304551),
    o = n(311907),
    d = n(502572),
    c = n(421380),
    u = n(397927),
    m = n(775602),
    g = n(793574),
    _ = n(688810),
    x = n(366999),
    A = n(531260),
    h = n(780964),
    p = n(858897),
    T = n(166403),
    f = n(786300),
    S = n(975571),
    E = n(927578),
    b = n(40185),
    C = n(89366),
    N = n(881489),
    v = n(422936),
    I = n(234419),
    j = n(549996),
    y = n(371764),
    O = n(130946),
    R = n(103411),
    P = n(534217),
    L = n(194509),
    D = n(396375),
    G = n(65470),
    M = n(792656),
    k = n(511484),
    U = n(939724),
    w = n(774774),
    V = n(473702),
    B = n(505559),
    F = n(722274),
    H = n(103733),
    z = n(508480),
    Y = n(229289),
    X = n(253558),
    K = n(788868),
    W = n(652215),
    Z = n(985018),
    q = n(219424),
    Q = n(320905),
    J = n(461971),
    $ = n(828694);
let ee = (e, t, s) => {
        (0, u.mMO)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: l } = await Promise.all([
                n.e("41353"),
                n.e("35432"),
                n.e("18398"),
            ]).then(n.bind(n, 281439));
            return (n) => (0, i.jsx)(l, { ...n, analyticsLocations: e, initialStep: s, premiumSubscription: t });
        });
    },
    et = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: s } = e,
            a = (0, N.Zb)(t);
        return (0, i.jsx)("div", {
            className: l()(Q.kL, n),
            ref: s,
            children: (0, i.jsxs)("div", {
                className: Q.ap,
                children: [
                    (0, i.jsxs)(u.BJc, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, i.jsx)(B.A, { enablePremiumBrandRefresh: !0, text: Z.intl.string(Z.t.yhldRB) }),
                            (0, i.jsxs)(u.BJc, {
                                align: "start",
                                gap: 12,
                                className: Q.rG,
                                children: [
                                    (0, i.jsx)(X.A, { children: Z.intl.format(Z.t.FwjP6W, { days: a }) }),
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: Z.intl.format(Z.t.PhQPzq, {
                                            settingsHook: () => (0, p.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(u.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, i.jsx)(M.A, {
                                        size: "md",
                                        buttonTextOverride: Z.intl.string(Z.t["2+luBl"]),
                                        iconOverride: u.tvc,
                                        variantOverride: "expressive",
                                    }),
                                    (0, i.jsx)(u.Button, {
                                        variant: "overlay-secondary",
                                        size: "md",
                                        text: Z.intl.string(Z.t.Af7ye6),
                                        onClick: () => (0, p.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Q.Hk,
                        children: [(0, i.jsx)(r.C, { alt: "", width: "100%", height: "100%" }), (0, i.jsx)(z.A, {})],
                    }),
                ],
            }),
        });
    },
    en = (e) => {
        let { className: t, isEligibleForBogoPromotion: n, isInReverseTrial: s, shouldShowReferralProgressBar: r } = e,
            {
                headingText: d,
                headingTop: c,
                showPill: x,
                userDiscountOffer: h,
                discountedPrice: p,
                buttonVisibilityRef: f,
            } = er(),
            { analyticsLocations: S } = (0, _.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            b = (0, j.c)(a.C.MARKETING_PAGE_BANNER),
            C = null;
        null != b && "marketingPageBanner" === b.properties.properties.oneofKind
            ? (C = (0, i.jsx)(y.x, {
                  componentId: b.id,
                  promotionBannerMarketingComponentFields: b.properties.properties.marketingPageBanner,
              }))
            : n
              ? (C = (0, i.jsx)(O.A, { variant: O.c.SUBSCRIBER_HOME }))
              : s
                ? (C = (0, i.jsx)(F.A, {}))
                : r && (C = (0, i.jsx)(P.S, {}));
        let N = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            R = null != N && N.status === W.Dmq.CANCELED && null != h,
            L = (0, I.V)(),
            D = (0, v.O)(),
            w = (0, k.U9)(D, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
            B = null != N && N.status !== W.Dmq.ACCOUNT_HOLD && N.hasAnyPremiumNitro,
            z = (0, A.A)(),
            J = z.isFractionalPremiumActive && !B && null == C && !R,
            $ = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            { visibilityPercentageRef: en, visibilityPercentage: ei } = (0, H.U)(!$);
        return s
            ? (0, i.jsx)(et, { fpEndsAt: z.endsAt, className: t, buttonVisibilityRef: f })
            : (0, i.jsx)("div", {
                  className: l()(Q.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: f,
                  children: (0, i.jsxs)("div", {
                      className: Q.Qs,
                      ref: en,
                      children: [
                          x && c,
                          (0, i.jsxs)("div", {
                              className: Q.N1,
                              children: [
                                  (0, i.jsx)(Y.A, { containerVisibilityPercentage: ei }),
                                  R &&
                                      null != h.expires_at &&
                                      (0, i.jsx)(U.A, { expiresAt: h.expires_at, className: q.IZ }),
                                  (0, i.jsx)(X.A, {
                                      children: R ? Z.intl.format(Z.t["3yZP0G"], { percent: h.discount.amount }) : d,
                                  }),
                                  R &&
                                      null != p &&
                                      (0, i.jsx)(u.Text, {
                                          className: q.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: Z.intl.format(Z.t["3Q4wCy"], {
                                              discountedPrice: p,
                                              billingPeriod: (0, E.Ke)(h.discount.user_usage_limit_interval),
                                              numMonths: h.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: J || R ? Q.UJ : void 0,
                              children: [
                                  J &&
                                      (0, i.jsx)(M.A, {
                                          size: "md",
                                          hasActivePromotion: !!n,
                                          subscriptionTier: L?.subscription_trial?.sku_id ?? w,
                                      }),
                                  R &&
                                      (0, i.jsx)(u.Button, {
                                          variant: "expressive",
                                          icon: u.tvc,
                                          size: "md",
                                          text: Z.intl.string(Z.t.zrCzVB),
                                          onClick: () => ee(S, N, V.g.CONFIRM_DISCOUNT),
                                      }),
                                  (0, i.jsx)(G.A, {
                                      variant: J || R ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: Z.intl.string(Z.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          C,
                      ],
                  }),
              });
    },
    ei = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, userDiscountOffer: a, discountedPrice: r, buttonVisibilityRef: d } = er(),
            { analyticsLocations: m } = (0, _.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            x = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            h = null != x && x.status === W.Dmq.CANCELED && null != a,
            p = (0, I.V)(),
            f = (0, v.O)(),
            S = (0, k.U9)(f, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
            b = null != x && x.status !== W.Dmq.ACCOUNT_HOLD && x.hasAnyPremiumNitro,
            C = (0, A.A)().isFractionalPremiumActive && !b && !h;
        return (0, i.jsxs)("div", {
            className: l()(q.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: d,
            children: [
                (0, i.jsx)("img", { src: J, alt: "", className: q.NC }),
                (0, i.jsxs)("div", {
                    className: h ? q.Nr : q.Qs,
                    children: [
                        s,
                        h && null != a.expires_at && (0, i.jsx)(U.A, { expiresAt: a.expires_at, className: q.IZ }),
                        (0, i.jsx)(u.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: h ? q.bc : q.wx,
                            children: h && null != a ? Z.intl.format(Z.t["3yZP0G"], { percent: a.discount.amount }) : n,
                        }),
                        h &&
                            null != r &&
                            (0, i.jsx)(u.Text, {
                                className: q.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: Z.intl.format(Z.t["3Q4wCy"], {
                                    discountedPrice: r,
                                    billingPeriod: (0, E.Ke)(a.discount.user_usage_limit_interval),
                                    numMonths: a.discount.user_usage_limit,
                                }),
                            }),
                        (0, i.jsxs)("div", {
                            className: q.$J,
                            children: [
                                C &&
                                    (0, i.jsx)(D.A, {
                                        color: c.XD.BRAND,
                                        className: l()(q.x6, q.xF),
                                        subscriptionTier: p?.subscription_trial?.sku_id ?? S,
                                    }),
                                h &&
                                    (0, i.jsxs)("div", {
                                        className: q.Cg,
                                        children: [
                                            (0, i.jsx)(u.Button, {
                                                variant: "expressive",
                                                icon: u.tvc,
                                                size: "md",
                                                text: Z.intl.string(Z.t.zrCzVB),
                                                onClick: () => ee(m, x, V.g.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, i.jsx)(G.A, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: Z.intl.string(Z.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !h &&
                                    (0, i.jsx)("div", {
                                        className: q.UO,
                                        children: (0, i.jsx)(L.A, {
                                            look: c.pR.FILLED,
                                            color: c.XD.BRAND,
                                            textOptions: { textOverride: Z.intl.string(Z.t["3KomGa"]) },
                                            className: q.x6,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    es = () => {
        let { headingText: e, headingTop: t } = er();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { src: $, alt: "", className: q.HJ }),
                (0, i.jsx)("div", {
                    className: q.iW,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: q.eF,
                        children: [
                            t,
                            (0, i.jsx)(u.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: q.wx,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: q.UO,
                                children: (0, i.jsx)(L.A, {
                                    look: c.pR.FILLED,
                                    color: c.XD.BRAND,
                                    textOptions: { textOverride: Z.intl.string(Z.t["3KomGa"]) },
                                    className: q.x6,
                                }),
                            }),
                            (0, i.jsx)(P.S, { className: q.Qq }),
                        ],
                    }),
                }),
            ],
        });
    },
    el = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: s } = er();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { src: $, alt: "", className: q.HJ }),
                (0, i.jsxs)(u.BJc, {
                    align: "center",
                    justify: "center",
                    gap: 40,
                    className: q.k1,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)(u.BJc, {
                            align: "center",
                            justify: "center",
                            fullWidth: !1,
                            className: q.nl,
                            children: [
                                s,
                                (0, i.jsx)(u.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: q.wx,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: q.UO,
                            children: (0, i.jsx)(L.A, {
                                look: c.pR.FILLED,
                                color: c.XD.BRAND,
                                textOptions: { textOverride: Z.intl.string(Z.t["3KomGa"]) },
                                className: q.x6,
                            }),
                        }),
                        !t && (0, i.jsx)(F.A, {}),
                        t && (0, i.jsx)(O.A, { variant: O.c.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [ea, er] = (0, f.A)(),
    eo = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: s,
                userDiscountOffer: a,
                discountedPrice: r,
            } = e,
            { analyticsLocations: o } = (0, _.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            c = (0, N.ds)(),
            m = (0, b.cg)(),
            h = (0, C.QQ)(),
            p = Z.intl.string(Z.t.qYKftX),
            T = (0, R.m)(),
            f = (0, i.jsx)(ei, { className: t }),
            E = Z.intl.string(Z.t.ifwQZb),
            { fractionalState: v, endsAt: I } = (0, A.A)(),
            j = (0, x.Ay)(I, x.yE.CREDITS_ENDS_IN);
        c || m
            ? (f = (0, i.jsx)(el, { isEligibleForBogoPromotion: m }))
            : T && ((p = Z.intl.string(Z.t.qYKftX)), (f = (0, i.jsx)(es, {})));
        let y = null;
        if (v === K.xc.NONE || c)
            y = n
                ? (0, i.jsx)(B.A, { enablePremiumBrandRefresh: !0, text: p })
                : (0, i.jsx)(w.HU, {
                      className: l()(q.Av, { [q.R]: !h }),
                      text: p,
                      colorOptions: w.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, i.jsx)("div", {
                    className: q.nW,
                    children: (0, i.jsx)(u.mir, { size: "xxs", color: "var(--premium-tier-2-purple-for-gradients)" }),
                }),
                t = Z.intl.format(Z.t["yR+oDD"], { helpCenterLink: S.A.getArticleURL(W.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            y = (0, i.jsx)(d.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: q.YL,
                position: "right",
                children: (t) =>
                    (0, i.jsx)("div", {
                        ...t,
                        className: q.V_,
                        children: (0, i.jsx)("div", {
                            className: q.eL,
                            children: n
                                ? (0, i.jsx)(B.A, { enablePremiumBrandRefresh: !0, text: j })
                                : (0, i.jsx)(w.e4, {
                                      className: l()(q.Av, { [q.R]: !h }),
                                      text: j,
                                      colorOptions: w.at.PREMIUM_TIER_2_WHITE_FILL,
                                      icon: e,
                                      gap: !1,
                                  }),
                        }),
                    }),
            });
        }
        return (0, i.jsx)(_.f5, {
            value: o,
            children: (0, i.jsx)(ea.Provider, {
                value: {
                    headingText: E,
                    headingTop: y,
                    showPill: h,
                    userDiscountOffer: a,
                    discountedPrice: r,
                    buttonVisibilityRef: s,
                },
                children: n
                    ? (0, i.jsx)(en, {
                          className: t,
                          isEligibleForBogoPromotion: m,
                          isInReverseTrial: c,
                          shouldShowReferralProgressBar: T,
                      })
                    : f,
            }),
        });
    };
