n.d(t, { A: () => ei });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(877624),
    r = n(311907),
    o = n(502572),
    d = n(421380),
    c = n(397927),
    u = n(775602),
    _ = n(793574),
    g = n(688810),
    m = n(366999),
    A = n(531260),
    h = n(166403),
    p = n(786300),
    x = n(975571),
    E = n(927578),
    T = n(40185),
    S = n(89366),
    C = n(637073),
    f = n(422936),
    I = n(234419),
    b = n(549996),
    N = n(371764),
    v = n(130946),
    j = n(103411),
    O = n(534217),
    R = n(194509),
    y = n(396375),
    P = n(65470),
    D = n(792656),
    L = n(511484),
    G = n(939724),
    M = n(795269),
    U = n(473702),
    k = n(505559),
    V = n(722274),
    w = n(103733),
    H = n(229289),
    B = n(253558),
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
                headingTop: m,
                showPill: p,
                userDiscountOffer: x,
                discountedPrice: T,
                buttonVisibilityRef: S,
            } = en(),
            { analyticsLocations: C } = (0, g.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            j = (0, b.c)(a.C.MARKETING_PAGE_BANNER),
            R = null;
        null != j && "marketingPageBanner" === j.properties.properties.oneofKind
            ? (R = (0, i.jsx)(N.x, {
                  componentId: j.id,
                  promotionBannerMarketingComponentFields: j.properties.properties.marketingPageBanner,
              }))
            : n
              ? (R = (0, i.jsx)(v.A, { variant: v.c.SUBSCRIBER_HOME }))
              : s
                ? (R = (0, i.jsx)(V.A, {}))
                : o && (R = (0, i.jsx)(O.S, {}));
        let y = (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            M = null != y && y.status === Y.Dmq.CANCELED && null != x,
            k = (0, I.V)(),
            K = (0, f.O)(),
            Z = (0, L.U9)(K, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            J = null != y && y.status !== Y.Dmq.ACCOUNT_HOLD && y.hasAnyPremiumNitro,
            Q = (0, A.A)().isFractionalPremiumActive && !J && null == R && !M,
            $ = (0, r.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: ee, visibilityPercentage: et } = (0, w.U)(!$);
        return (0, i.jsx)("div", {
            className: l()(W.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: S,
            children: (0, i.jsxs)("div", {
                className: W.Qs,
                ref: ee,
                children: [
                    p && m,
                    (0, i.jsxs)("div", {
                        className: W.N1,
                        children: [
                            (0, i.jsx)(H.A, { containerVisibilityPercentage: et }),
                            M && null != x.expires_at && (0, i.jsx)(G.A, { expiresAt: x.expires_at, className: X.IZ }),
                            (0, i.jsx)(B.A, {
                                children: M ? z.intl.format(z.t["3yZP0G"], { percent: x.discount.amount }) : d,
                            }),
                            M &&
                                null != T &&
                                (0, i.jsx)(c.Text, {
                                    className: X.jG,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: z.intl.format(z.t["3Q4wCy"], {
                                        discountedPrice: T,
                                        billingPeriod: (0, E.Ke)(x.discount.user_usage_limit_interval),
                                        numMonths: x.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Q || M ? W.UJ : void 0,
                        children: [
                            Q &&
                                (0, i.jsx)(D.A, {
                                    size: "md",
                                    hasActivePromotion: !!n,
                                    subscriptionTier: k?.subscription_trial?.sku_id ?? Z,
                                }),
                            M &&
                                (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    icon: c.tvc,
                                    size: "md",
                                    text: z.intl.string(z.t.zrCzVB),
                                    onClick: () => q(C, y, U.g.CONFIRM_DISCOUNT),
                                }),
                            (0, i.jsx)(P.A, {
                                variant: Q || M ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: z.intl.string(z.t["3KomGa"]),
                            }),
                        ],
                    }),
                    R,
                ],
            }),
        });
    },
    Q = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, userDiscountOffer: a, discountedPrice: o, buttonVisibilityRef: u } = en(),
            { analyticsLocations: m } = (0, g.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            p = (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            x = null != p && p.status === Y.Dmq.CANCELED && null != a,
            T = (0, I.V)(),
            S = (0, f.O)(),
            C = (0, L.U9)(S, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            b = null != p && p.status !== Y.Dmq.ACCOUNT_HOLD && p.hasAnyPremiumNitro,
            N = (0, A.A)().isFractionalPremiumActive && !b && !x;
        return (0, i.jsxs)("div", {
            className: l()(X.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: u,
            children: [
                (0, i.jsx)("img", { src: K, alt: "", className: X.NC }),
                (0, i.jsxs)("div", {
                    className: x ? X.Nr : X.Qs,
                    children: [
                        s,
                        x && null != a.expires_at && (0, i.jsx)(G.A, { expiresAt: a.expires_at, className: X.IZ }),
                        (0, i.jsx)(c.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: x ? X.bc : X.wx,
                            children: x && null != a ? z.intl.format(z.t["3yZP0G"], { percent: a.discount.amount }) : n,
                        }),
                        x &&
                            null != o &&
                            (0, i.jsx)(c.Text, {
                                className: X.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: z.intl.format(z.t["3Q4wCy"], {
                                    discountedPrice: o,
                                    billingPeriod: (0, E.Ke)(a.discount.user_usage_limit_interval),
                                    numMonths: a.discount.user_usage_limit,
                                }),
                            }),
                        (0, i.jsxs)("div", {
                            className: X.$J,
                            children: [
                                N &&
                                    (0, i.jsx)(y.A, {
                                        color: d.XD.BRAND,
                                        className: l()(X.x6, X.xF),
                                        subscriptionTier: T?.subscription_trial?.sku_id ?? C,
                                    }),
                                x &&
                                    (0, i.jsxs)("div", {
                                        className: X.Cg,
                                        children: [
                                            (0, i.jsx)(c.Button, {
                                                variant: "expressive",
                                                icon: c.tvc,
                                                size: "md",
                                                text: z.intl.string(z.t.zrCzVB),
                                                onClick: () => q(m, p, U.g.CONFIRM_DISCOUNT),
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
                                !x &&
                                    (0, i.jsx)("div", {
                                        className: X.UO,
                                        children: (0, i.jsx)(R.A, {
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
                                children: (0, i.jsx)(R.A, {
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
                            children: (0, i.jsx)(R.A, {
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
    [et, en] = (0, p.A)(),
    ei = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: s,
                userDiscountOffer: a,
                discountedPrice: r,
            } = e,
            { analyticsLocations: d } = (0, g.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            u = (0, C.d)(),
            h = (0, T.cg)(),
            p = (0, S.QQ)(),
            E = z.intl.string(z.t.qYKftX),
            f = (0, j.m)(),
            I = (0, i.jsx)(Q, { className: t }),
            b = z.intl.string(z.t.ifwQZb),
            { fractionalState: N, endsAt: v } = (0, A.A)(),
            O = (0, m.Ay)(v, m.yE.CREDITS_ENDS_IN);
        u || h
            ? (I = (0, i.jsx)(ee, { isEligibleForBogoPromotion: h }))
            : f && ((E = z.intl.string(z.t.qYKftX)), (I = (0, i.jsx)($, {})));
        let R = null;
        if (N === F.xc.NONE || u)
            R = n
                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: E })
                : (0, i.jsx)(M.ir, {
                      className: l()(X.Av, { [X.R]: !p }),
                      text: E,
                      colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            p = !0;
            let e = (0, i.jsx)("div", {
                    className: X.nW,
                    children: (0, i.jsx)(c.mir, { size: "xxs", color: "var(--premium-tier-2-purple-for-gradients)" }),
                }),
                t = z.intl.format(z.t["yR+oDD"], { helpCenterLink: x.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            R = (0, i.jsx)(o.A, {
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
                                : (0, i.jsx)(M.R, {
                                      className: l()(X.Av, { [X.R]: !p }),
                                      text: O,
                                      colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                                      icon: e,
                                      gap: !1,
                                  }),
                        }),
                    }),
            });
        }
        return (0, i.jsx)(g.f5, {
            value: d,
            children: (0, i.jsx)(et.Provider, {
                value: {
                    headingText: b,
                    headingTop: R,
                    showPill: p,
                    userDiscountOffer: a,
                    discountedPrice: r,
                    buttonVisibilityRef: s,
                },
                children: n
                    ? (0, i.jsx)(J, {
                          className: t,
                          isEligibleForBogoPromotion: h,
                          isInReverseTrial: u,
                          shouldShowReferralProgressBar: f,
                      })
                    : I,
            }),
        });
    };
