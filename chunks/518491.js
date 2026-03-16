n.d(t, { A: () => ei });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(877624),
    a = n(311907),
    o = n(502572),
    d = n(421380),
    c = n(397927),
    u = n(775602),
    _ = n(793574),
    m = n(688810),
    g = n(366999),
    A = n(531260),
    h = n(166403),
    x = n(786300),
    p = n(975571),
    T = n(927578),
    E = n(40185),
    C = n(89366),
    S = n(637073),
    f = n(422936),
    N = n(234419),
    b = n(549996),
    I = n(371764),
    v = n(130946),
    j = n(103411),
    O = n(534217),
    y = n(194509),
    R = n(396375),
    P = n(65470),
    D = n(792656),
    L = n(511484),
    M = n(939724),
    G = n(795269),
    U = n(473702),
    k = n(505559),
    V = n(722274),
    w = n(103733),
    B = n(229289),
    H = n(253558),
    F = n(788868),
    Y = n(652215),
    z = n(985018),
    X = n(496971),
    W = n(871464),
    K = n(461971),
    Z = n(828694);
let q = (e, t, s) => {
        (0, c.mMO)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: l } = await Promise.all([
                n.e("41353"),
                n.e("35432"),
                n.e("46409"),
            ]).then(n.bind(n, 281439));
            return (n) => (0, i.jsx)(l, { ...n, analyticsLocations: e, initialStep: s, premiumSubscription: t });
        });
    },
    J = (e) => {
        let { className: t, isEligibleForBogoPromotion: n, isInReverseTrial: s, shouldShowReferralProgressBar: o } = e,
            {
                headingText: d,
                headingTop: g,
                showPill: x,
                userDiscountOffer: p,
                discountedPrice: E,
                buttonVisibilityRef: C,
            } = en(),
            { analyticsLocations: S } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            j = (0, b.c)(r.C.MARKETING_PAGE_BANNER),
            y = null;
        null != j && "marketingPageBanner" === j.properties.properties.oneofKind
            ? (y = (0, i.jsx)(I.x, {
                  componentId: j.id,
                  promotionBannerMarketingComponentFields: j.properties.properties.marketingPageBanner,
              }))
            : n
              ? (y = (0, i.jsx)(v.A, { variant: v.c.SUBSCRIBER_HOME }))
              : s
                ? (y = (0, i.jsx)(V.A, {}))
                : o && (y = (0, i.jsx)(O.S, {}));
        let R = (0, a.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            G = null != R && R.status === Y.Dmq.CANCELED && null != p,
            k = (0, N.V)(),
            K = (0, f.O)(),
            Z = (0, L.U9)(K, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            J = null != R && R.status !== Y.Dmq.ACCOUNT_HOLD && R.hasAnyPremiumNitro,
            Q = (0, A.A)().isFractionalPremiumActive && !J && null == y && !G,
            $ = (0, a.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: ee, visibilityPercentage: et } = (0, w.U)(!$);
        return (0, i.jsx)("div", {
            className: l()(W.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: C,
            children: (0, i.jsxs)("div", {
                className: W.Qs,
                ref: ee,
                children: [
                    x && g,
                    (0, i.jsxs)("div", {
                        className: W.N1,
                        children: [
                            (0, i.jsx)(B.A, { containerVisibilityPercentage: et }),
                            G && null != p.expires_at && (0, i.jsx)(M.A, { expiresAt: p.expires_at, className: X.IZ }),
                            (0, i.jsx)(H.A, {
                                children: G ? z.intl.format(z.t["3yZP0G"], { percent: p.discount.amount }) : d,
                            }),
                            G &&
                                null != E &&
                                (0, i.jsx)(c.Text, {
                                    className: X.jG,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: z.intl.format(z.t["3Q4wCy"], {
                                        discountedPrice: E,
                                        billingPeriod: (0, T.Ke)(p.discount.user_usage_limit_interval),
                                        numMonths: p.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Q || G ? W.UJ : void 0,
                        children: [
                            Q &&
                                (0, i.jsx)(D.A, {
                                    size: "md",
                                    hasActivePromotion: !!n,
                                    subscriptionTier: k?.subscription_trial?.sku_id ?? Z,
                                }),
                            G &&
                                (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    icon: c.tvc,
                                    size: "md",
                                    text: z.intl.string(z.t.zrCzVB),
                                    onClick: () => q(S, R, U.g.CONFIRM_DISCOUNT),
                                }),
                            (0, i.jsx)(P.A, {
                                variant: Q || G ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: z.intl.string(z.t["3KomGa"]),
                            }),
                        ],
                    }),
                    y,
                ],
            }),
        });
    },
    Q = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, userDiscountOffer: r, discountedPrice: o, buttonVisibilityRef: u } = en(),
            { analyticsLocations: g } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            x = (0, a.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            p = null != x && x.status === Y.Dmq.CANCELED && null != r,
            E = (0, N.V)(),
            C = (0, f.O)(),
            S = (0, L.U9)(C, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            b = null != x && x.status !== Y.Dmq.ACCOUNT_HOLD && x.hasAnyPremiumNitro,
            I = (0, A.A)().isFractionalPremiumActive && !b && !p;
        return (0, i.jsxs)("div", {
            className: l()(X.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: u,
            children: [
                (0, i.jsx)("img", { src: K, alt: "", className: X.NC }),
                (0, i.jsxs)("div", {
                    className: p ? X.Nr : X.Qs,
                    children: [
                        s,
                        p && null != r.expires_at && (0, i.jsx)(M.A, { expiresAt: r.expires_at, className: X.IZ }),
                        (0, i.jsx)(c.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: p ? X.bc : X.wx,
                            children: p && null != r ? z.intl.format(z.t["3yZP0G"], { percent: r.discount.amount }) : n,
                        }),
                        p &&
                            null != o &&
                            (0, i.jsx)(c.Text, {
                                className: X.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: z.intl.format(z.t["3Q4wCy"], {
                                    discountedPrice: o,
                                    billingPeriod: (0, T.Ke)(r.discount.user_usage_limit_interval),
                                    numMonths: r.discount.user_usage_limit,
                                }),
                            }),
                        (0, i.jsxs)("div", {
                            className: X.$J,
                            children: [
                                I &&
                                    (0, i.jsx)(R.A, {
                                        color: d.XD.BRAND,
                                        className: l()(X.x6, X.xF),
                                        subscriptionTier: E?.subscription_trial?.sku_id ?? S,
                                    }),
                                p &&
                                    (0, i.jsxs)("div", {
                                        className: X.Cg,
                                        children: [
                                            (0, i.jsx)(c.Button, {
                                                variant: "expressive",
                                                icon: c.tvc,
                                                size: "md",
                                                text: z.intl.string(z.t.zrCzVB),
                                                onClick: () => q(g, x, U.g.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, i.jsx)(P.A, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: z.intl.string(z.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !p &&
                                    (0, i.jsx)("div", {
                                        className: X.UO,
                                        children: (0, i.jsx)(y.A, {
                                            look: d.pR.FILLED,
                                            color: d.XD.BRAND,
                                            textOptions: { textOverride: z.intl.string(z.t["3KomGa"]) },
                                            className: X.x6,
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { src: Z, alt: "", className: X.HJ }),
                (0, i.jsx)("div", {
                    className: X.iW,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: X.eF,
                        children: [
                            t,
                            (0, i.jsx)(c.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: X.wx,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: X.UO,
                                children: (0, i.jsx)(y.A, {
                                    look: d.pR.FILLED,
                                    color: d.XD.BRAND,
                                    textOptions: { textOverride: z.intl.string(z.t["3KomGa"]) },
                                    className: X.x6,
                                }),
                            }),
                            (0, i.jsx)(O.S, { className: X.Qq }),
                        ],
                    }),
                }),
            ],
        });
    },
    ee = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: s } = en();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { src: Z, alt: "", className: X.HJ }),
                (0, i.jsxs)("div", {
                    className: X.k1,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)("div", {
                            className: X.nl,
                            children: [
                                s,
                                (0, i.jsx)(c.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: X.wx,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: X.UO,
                            children: (0, i.jsx)(y.A, {
                                look: d.pR.FILLED,
                                color: d.XD.BRAND,
                                textOptions: { textOverride: z.intl.string(z.t["3KomGa"]) },
                                className: X.x6,
                            }),
                        }),
                        !t && (0, i.jsx)(V.A, {}),
                        t && (0, i.jsx)(v.A, { variant: v.c.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [et, en] = (0, x.A)(),
    ei = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: s,
                userDiscountOffer: r,
                discountedPrice: a,
            } = e,
            { analyticsLocations: d } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            u = (0, S.d)(),
            h = (0, E.cg)(),
            x = (0, C.QQ)(),
            T = z.intl.string(z.t.qYKftX),
            f = (0, j.m)(),
            N = (0, i.jsx)(Q, { className: t }),
            b = z.intl.string(z.t.ifwQZb),
            { fractionalState: I, endsAt: v } = (0, A.A)(),
            O = (0, g.Ay)(v, g.yE.CREDITS_ENDS_IN);
        u || h
            ? (N = (0, i.jsx)(ee, { isEligibleForBogoPromotion: h }))
            : f && ((T = z.intl.string(z.t.qYKftX)), (N = (0, i.jsx)($, {})));
        let y = null;
        if (I === F.xc.NONE || u)
            y = n
                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: T })
                : (0, i.jsx)(G.ir, {
                      className: l()(X.Av, { [X.R]: !x }),
                      text: T,
                      colorOptions: G.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            x = !0;
            let e = (0, i.jsx)("div", {
                    className: X.nW,
                    children: (0, i.jsx)(c.mir, { size: "xxs", color: "var(--premium-tier-2-purple-for-gradients)" }),
                }),
                t = z.intl.format(z.t["yR+oDD"], { helpCenterLink: p.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            y = (0, i.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: X.YL,
                position: "right",
                children: (t) =>
                    (0, i.jsx)("div", {
                        ...t,
                        className: X.V_,
                        children: (0, i.jsx)("div", {
                            className: X.eL,
                            children: n
                                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: O })
                                : (0, i.jsx)(G.R, {
                                      className: l()(X.Av, { [X.R]: !x }),
                                      text: O,
                                      colorOptions: G.at.PREMIUM_TIER_2_WHITE_FILL,
                                      icon: e,
                                      gap: !1,
                                  }),
                        }),
                    }),
            });
        }
        return (0, i.jsx)(m.f5, {
            value: d,
            children: (0, i.jsx)(et.Provider, {
                value: {
                    headingText: b,
                    headingTop: y,
                    showPill: x,
                    userDiscountOffer: r,
                    discountedPrice: a,
                    buttonVisibilityRef: s,
                },
                children: n
                    ? (0, i.jsx)(J, {
                          className: t,
                          isEligibleForBogoPromotion: h,
                          isInReverseTrial: u,
                          shouldShowReferralProgressBar: f,
                      })
                    : N,
            }),
        });
    };
