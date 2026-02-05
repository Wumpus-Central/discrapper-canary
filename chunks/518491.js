n.d(t, { A: () => ei });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(877624),
    l = n(311907),
    o = n(502572),
    c = n(421380),
    d = n(397927),
    u = n(775602),
    _ = n(793574),
    m = n(688810),
    A = n(366999),
    g = n(531260),
    E = n(166403),
    h = n(786300),
    p = n(975571),
    C = n(927578),
    x = n(40185),
    T = n(89366),
    I = n(637073),
    S = n(422936),
    f = n(234419),
    N = n(549996),
    b = n(371764),
    R = n(130946),
    v = n(103411),
    O = n(534217),
    j = n(194509),
    P = n(396375),
    y = n(65470),
    L = n(792656),
    D = n(511484),
    M = n(939724),
    G = n(795269),
    U = n(473702),
    k = n(505559),
    B = n(633451),
    w = n(722274),
    H = n(371476),
    V = n(103733),
    F = n(788868),
    Y = n(652215),
    W = n(985018),
    z = n(496971),
    K = n(871464),
    Z = n(461971),
    X = n(828694);
let q = (e, t, s) => {
        (0, d.mMO)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: r } = await n.e("72820").then(n.bind(n, 281439));
            return (n) => (0, i.jsx)(r, { ...n, analyticsLocations: e, initialStep: s, premiumSubscription: t });
        });
    },
    J = (e) => {
        let { className: t, isEligibleForBogoPromotion: n, isInReverseTrial: s, shouldShowReferralProgressBar: o } = e,
            {
                headingText: c,
                headingTop: A,
                showPill: h,
                userDiscountOffer: p,
                discountedPrice: x,
                buttonVisibilityRef: T,
            } = en(),
            { analyticsLocations: I } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            v = (0, N.c)(a.C.MARKETING_PAGE_BANNER),
            j = null;
        null != v && "marketingPageBanner" === v.properties.properties.oneofKind
            ? (j = (0, i.jsx)(b.x, {
                  componentId: v.id,
                  promotionBannerMarketingComponentFields: v.properties.properties.marketingPageBanner,
              }))
            : n
              ? (j = (0, i.jsx)(R.A, { variant: R.c.SUBSCRIBER_HOME }))
              : s
                ? (j = (0, i.jsx)(w.A, {}))
                : o && (j = (0, i.jsx)(O.S, {}));
        let P = (0, l.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            G = null != P && P.status === Y.Dmq.CANCELED && null != p,
            k = (0, f.V)(),
            Z = (0, S.O)(),
            X = (0, D.U9)(Z, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            J = null != P && P.status !== Y.Dmq.ACCOUNT_HOLD && P.hasAnyPremiumNitro,
            Q = (0, g.A)().isFractionalPremiumActive && !J && null == j && !G,
            $ = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: ee, visibilityPercentage: et } = (0, V.U)(!$);
        return (0, i.jsx)("div", {
            className: r()(K.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: T,
            children: (0, i.jsxs)("div", {
                className: K.Qs,
                ref: ee,
                children: [
                    h && A,
                    (0, i.jsxs)("div", {
                        className: K.N1,
                        children: [
                            (0, i.jsx)(B.A, { containerVisibilityPercentage: et }),
                            G && null != p.expires_at && (0, i.jsx)(M.A, { expiresAt: p.expires_at, className: z.IZ }),
                            (0, i.jsx)(H.A, {
                                children: G ? W.intl.format(W.t["3yZP0G"], { percent: p.discount.amount }) : c,
                            }),
                            G &&
                                null != x &&
                                (0, i.jsx)(d.Text, {
                                    className: z.jG,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: W.intl.format(W.t["3Q4wCy"], {
                                        discountedPrice: x,
                                        billingPeriod: (0, C.Ke)(p.discount.user_usage_limit_interval),
                                        numMonths: p.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Q || G ? K.UJ : void 0,
                        children: [
                            Q &&
                                (0, i.jsx)(L.A, {
                                    size: "md",
                                    hasActivePromotion: !!n,
                                    subscriptionTier: k?.subscription_trial?.sku_id ?? X,
                                }),
                            G &&
                                (0, i.jsx)(d.Button, {
                                    variant: "expressive",
                                    icon: d.tvc,
                                    size: "md",
                                    text: W.intl.string(W.t.zrCzVB),
                                    onClick: () => q(I, P, U.g.CONFIRM_DISCOUNT),
                                }),
                            (0, i.jsx)(y.A, {
                                variant: Q || G ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: W.intl.string(W.t["3KomGa"]),
                            }),
                        ],
                    }),
                    j,
                ],
            }),
        });
    },
    Q = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, userDiscountOffer: a, discountedPrice: o, buttonVisibilityRef: u } = en(),
            { analyticsLocations: A } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            h = (0, l.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            p = null != h && h.status === Y.Dmq.CANCELED && null != a,
            x = (0, f.V)(),
            T = (0, S.O)(),
            I = (0, D.U9)(T, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            N = null != h && h.status !== Y.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
            b = (0, g.A)().isFractionalPremiumActive && !N && !p;
        return (0, i.jsxs)("div", {
            className: r()(z.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: u,
            children: [
                (0, i.jsx)("img", { src: Z, alt: "", className: z.NC }),
                (0, i.jsxs)("div", {
                    className: p ? z.Nr : z.Qs,
                    children: [
                        s,
                        p && null != a.expires_at && (0, i.jsx)(M.A, { expiresAt: a.expires_at, className: z.IZ }),
                        (0, i.jsx)(d.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: p ? z.bc : z.wx,
                            children: p && null != a ? W.intl.format(W.t["3yZP0G"], { percent: a.discount.amount }) : n,
                        }),
                        p &&
                            null != o &&
                            (0, i.jsx)(d.Text, {
                                className: z.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: W.intl.format(W.t["3Q4wCy"], {
                                    discountedPrice: o,
                                    billingPeriod: (0, C.Ke)(a.discount.user_usage_limit_interval),
                                    numMonths: a.discount.user_usage_limit,
                                }),
                            }),
                        (0, i.jsxs)("div", {
                            className: z.$J,
                            children: [
                                b &&
                                    (0, i.jsx)(P.A, {
                                        color: c.XD.BRAND,
                                        className: r()(z.x6, z.xF),
                                        subscriptionTier: x?.subscription_trial?.sku_id ?? I,
                                    }),
                                p &&
                                    (0, i.jsxs)("div", {
                                        className: z.Cg,
                                        children: [
                                            (0, i.jsx)(d.Button, {
                                                variant: "expressive",
                                                icon: d.tvc,
                                                size: "md",
                                                text: W.intl.string(W.t.zrCzVB),
                                                onClick: () => q(A, h, U.g.CONFIRM_DISCOUNT),
                                                fullWidth: !0,
                                            }),
                                            (0, i.jsx)(y.A, {
                                                variant: "overlay-secondary",
                                                size: "md",
                                                buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                !p &&
                                    (0, i.jsx)("div", {
                                        className: z.UO,
                                        children: (0, i.jsx)(j.A, {
                                            look: c.pR.FILLED,
                                            color: c.XD.BRAND,
                                            textOptions: { textOverride: W.intl.string(W.t["3KomGa"]) },
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
    $ = () => {
        let { headingText: e, headingTop: t } = en();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { src: X, alt: "", className: z.HJ }),
                (0, i.jsx)("div", {
                    className: z.iW,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: z.eF,
                        children: [
                            t,
                            (0, i.jsx)(d.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: z.wx,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: z.UO,
                                children: (0, i.jsx)(j.A, {
                                    look: c.pR.FILLED,
                                    color: c.XD.BRAND,
                                    textOptions: { textOverride: W.intl.string(W.t["3KomGa"]) },
                                    className: z.x6,
                                }),
                            }),
                            (0, i.jsx)(O.S, { className: z.Qq }),
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
                (0, i.jsx)("img", { src: X, alt: "", className: z.HJ }),
                (0, i.jsxs)("div", {
                    className: z.k1,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)("div", {
                            className: z.nl,
                            children: [
                                s,
                                (0, i.jsx)(d.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: z.wx,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: z.UO,
                            children: (0, i.jsx)(j.A, {
                                look: c.pR.FILLED,
                                color: c.XD.BRAND,
                                textOptions: { textOverride: W.intl.string(W.t["3KomGa"]) },
                                className: z.x6,
                            }),
                        }),
                        !t && (0, i.jsx)(w.A, {}),
                        t && (0, i.jsx)(R.A, { variant: R.c.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [et, en] = (0, h.A)(),
    ei = (e) => {
        let {
                className: t,
                enablePremiumBrandRefresh: n,
                buttonVisibilityRef: s,
                userDiscountOffer: a,
                discountedPrice: l,
            } = e,
            { analyticsLocations: c } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            u = (0, I.d)(),
            E = (0, x.cg)(),
            h = (0, T.QQ)(),
            C = W.intl.string(W.t.qYKftX),
            S = (0, v.m)(),
            f = (0, i.jsx)(Q, { className: t }),
            N = W.intl.string(W.t.ifwQZb),
            { fractionalState: b, endsAt: R } = (0, g.A)(),
            O = (0, A.Ay)(R, A.yE.CREDITS_ENDS_IN);
        u || E
            ? (f = (0, i.jsx)(ee, { isEligibleForBogoPromotion: E }))
            : S && ((C = W.intl.string(W.t.qYKftX)), (f = (0, i.jsx)($, {})));
        let j = null;
        if (b === F.xc.NONE || u)
            j = n
                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: C })
                : (0, i.jsx)(G.ir, {
                      className: r()(z.Av, { [z.R]: !h }),
                      text: C,
                      colorOptions: G.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, i.jsx)("div", {
                    className: z.nW,
                    children: (0, i.jsx)(d.mir, { size: "xxs", color: "var(--premium-tier-2-purple-for-gradients)" }),
                }),
                t = W.intl.format(W.t["yR+oDD"], { helpCenterLink: p.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            j = (0, i.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: z.YL,
                position: "right",
                children: (t) =>
                    (0, i.jsx)("div", {
                        ...t,
                        className: z.V_,
                        children: (0, i.jsx)("div", {
                            className: z.eL,
                            children: n
                                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: O })
                                : (0, i.jsx)(G.R, {
                                      className: r()(z.Av, { [z.R]: !h }),
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
            value: c,
            children: (0, i.jsx)(et.Provider, {
                value: {
                    headingText: N,
                    headingTop: j,
                    showPill: h,
                    userDiscountOffer: a,
                    discountedPrice: l,
                    buttonVisibilityRef: s,
                },
                children: n
                    ? (0, i.jsx)(J, {
                          className: t,
                          isEligibleForBogoPromotion: E,
                          isInReverseTrial: u,
                          shouldShowReferralProgressBar: S,
                      })
                    : f,
            }),
        });
    };
