n.d(t, { A: () => ei });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(877624),
    r = n(311907),
    o = n(502572),
    c = n(421380),
    d = n(397927),
    u = n(775602),
    _ = n(793574),
    m = n(688810),
    A = n(366999),
    g = n(531260),
    h = n(166403),
    x = n(786300),
    p = n(975571),
    E = n(927578),
    C = n(40185),
    T = n(89366),
    S = n(637073),
    I = n(422936),
    f = n(234419),
    N = n(549996),
    b = n(371764),
    j = n(130946),
    v = n(103411),
    O = n(534217),
    R = n(194509),
    y = n(396375),
    P = n(65470),
    L = n(792656),
    D = n(511484),
    M = n(939724),
    G = n(795269),
    U = n(473702),
    k = n(505559),
    V = n(722274),
    H = n(103733),
    w = n(229289),
    B = n(253558),
    Y = n(788868),
    F = n(652215),
    z = n(985018),
    W = n(496971),
    K = n(871464),
    Z = n(461971),
    q = n(828694);
let X = (e, t, s) => {
        (0, d.mMO)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: a } = await Promise.all([
                n.e("41353"),
                n.e("35432"),
                n.e("46409"),
            ]).then(n.bind(n, 281439));
            return (n) => (0, i.jsx)(a, { ...n, analyticsLocations: e, initialStep: s, premiumSubscription: t });
        });
    },
    Q = (e) => {
        let { className: t, isEligibleForBogoPromotion: n, isInReverseTrial: s, shouldShowReferralProgressBar: o } = e,
            {
                headingText: c,
                headingTop: A,
                showPill: x,
                userDiscountOffer: p,
                discountedPrice: C,
                buttonVisibilityRef: T,
            } = en(),
            { analyticsLocations: S } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            v = (0, N.c)(l.C.MARKETING_PAGE_BANNER),
            R = null;
        null != v && "marketingPageBanner" === v.properties.properties.oneofKind
            ? (R = (0, i.jsx)(b.x, {
                  componentId: v.id,
                  promotionBannerMarketingComponentFields: v.properties.properties.marketingPageBanner,
              }))
            : n
              ? (R = (0, i.jsx)(j.A, { variant: j.c.SUBSCRIBER_HOME }))
              : s
                ? (R = (0, i.jsx)(V.A, {}))
                : o && (R = (0, i.jsx)(O.S, {}));
        let y = (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            G = null != y && y.status === F.Dmq.CANCELED && null != p,
            k = (0, f.V)(),
            Z = (0, I.O)(),
            q = (0, D.U9)(Z, Y.pe.TIER_2) ? Y.pe.TIER_2 : void 0,
            Q = null != y && y.status !== F.Dmq.ACCOUNT_HOLD && y.hasAnyPremiumNitro,
            J = (0, g.A)().isFractionalPremiumActive && !Q && null == R && !G,
            $ = (0, r.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: ee, visibilityPercentage: et } = (0, H.U)(!$);
        return (0, i.jsx)("div", {
            className: a()(K.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: T,
            children: (0, i.jsxs)("div", {
                className: K.Qs,
                ref: ee,
                children: [
                    x && A,
                    (0, i.jsxs)("div", {
                        className: K.N1,
                        children: [
                            (0, i.jsx)(w.A, { containerVisibilityPercentage: et }),
                            G && null != p.expires_at && (0, i.jsx)(M.A, { expiresAt: p.expires_at, className: W.IZ }),
                            (0, i.jsx)(B.A, {
                                children: G ? z.intl.format(z.t["3yZP0G"], { percent: p.discount.amount }) : c,
                            }),
                            G &&
                                null != C &&
                                (0, i.jsx)(d.Text, {
                                    className: W.jG,
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: z.intl.format(z.t["3Q4wCy"], {
                                        discountedPrice: C,
                                        billingPeriod: (0, E.Ke)(p.discount.user_usage_limit_interval),
                                        numMonths: p.discount.user_usage_limit,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: J || G ? K.UJ : void 0,
                        children: [
                            J &&
                                (0, i.jsx)(L.A, {
                                    size: "md",
                                    hasActivePromotion: !!n,
                                    subscriptionTier: k?.subscription_trial?.sku_id ?? q,
                                }),
                            G &&
                                (0, i.jsx)(d.Button, {
                                    variant: "expressive",
                                    icon: d.tvc,
                                    size: "md",
                                    text: z.intl.string(z.t.zrCzVB),
                                    onClick: () => X(S, y, U.g.CONFIRM_DISCOUNT),
                                }),
                            (0, i.jsx)(P.A, {
                                variant: J || G ? "secondary" : "expressive",
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
    J = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: s, userDiscountOffer: l, discountedPrice: o, buttonVisibilityRef: u } = en(),
            { analyticsLocations: A } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            x = (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            p = null != x && x.status === F.Dmq.CANCELED && null != l,
            C = (0, f.V)(),
            T = (0, I.O)(),
            S = (0, D.U9)(T, Y.pe.TIER_2) ? Y.pe.TIER_2 : void 0,
            N = null != x && x.status !== F.Dmq.ACCOUNT_HOLD && x.hasAnyPremiumNitro,
            b = (0, g.A)().isFractionalPremiumActive && !N && !p;
        return (0, i.jsxs)("div", {
            className: a()(W.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: u,
            children: [
                (0, i.jsx)("img", { src: Z, alt: "", className: W.NC }),
                (0, i.jsxs)("div", {
                    className: p ? W.Nr : W.Qs,
                    children: [
                        s,
                        p && null != l.expires_at && (0, i.jsx)(M.A, { expiresAt: l.expires_at, className: W.IZ }),
                        (0, i.jsx)(d.Heading, {
                            variant: "display-lg",
                            color: "always-white",
                            className: p ? W.bc : W.wx,
                            children: p && null != l ? z.intl.format(z.t["3yZP0G"], { percent: l.discount.amount }) : n,
                        }),
                        p &&
                            null != o &&
                            (0, i.jsx)(d.Text, {
                                className: W.RB,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: z.intl.format(z.t["3Q4wCy"], {
                                    discountedPrice: o,
                                    billingPeriod: (0, E.Ke)(l.discount.user_usage_limit_interval),
                                    numMonths: l.discount.user_usage_limit,
                                }),
                            }),
                        (0, i.jsxs)("div", {
                            className: W.$J,
                            children: [
                                b &&
                                    (0, i.jsx)(y.A, {
                                        color: c.XD.BRAND,
                                        className: a()(W.x6, W.xF),
                                        subscriptionTier: C?.subscription_trial?.sku_id ?? S,
                                    }),
                                p &&
                                    (0, i.jsxs)("div", {
                                        className: W.Cg,
                                        children: [
                                            (0, i.jsx)(d.Button, {
                                                variant: "expressive",
                                                icon: d.tvc,
                                                size: "md",
                                                text: z.intl.string(z.t.zrCzVB),
                                                onClick: () => X(A, x, U.g.CONFIRM_DISCOUNT),
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
                                        className: W.UO,
                                        children: (0, i.jsx)(R.A, {
                                            look: c.pR.FILLED,
                                            color: c.XD.BRAND,
                                            textOptions: { textOverride: z.intl.string(z.t["3KomGa"]) },
                                            className: W.x6,
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
                (0, i.jsx)("img", { src: q, alt: "", className: W.HJ }),
                (0, i.jsx)("div", {
                    className: W.iW,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: W.eF,
                        children: [
                            t,
                            (0, i.jsx)(d.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                className: W.wx,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: W.UO,
                                children: (0, i.jsx)(R.A, {
                                    look: c.pR.FILLED,
                                    color: c.XD.BRAND,
                                    textOptions: { textOverride: z.intl.string(z.t["3KomGa"]) },
                                    className: W.x6,
                                }),
                            }),
                            (0, i.jsx)(O.S, { className: W.Qq }),
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
                (0, i.jsx)("img", { src: q, alt: "", className: W.HJ }),
                (0, i.jsxs)("div", {
                    className: W.k1,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)("div", {
                            className: W.nl,
                            children: [
                                s,
                                (0, i.jsx)(d.Heading, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: W.wx,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: W.UO,
                            children: (0, i.jsx)(R.A, {
                                look: c.pR.FILLED,
                                color: c.XD.BRAND,
                                textOptions: { textOverride: z.intl.string(z.t["3KomGa"]) },
                                className: W.x6,
                            }),
                        }),
                        !t && (0, i.jsx)(V.A, {}),
                        t && (0, i.jsx)(j.A, { variant: j.c.SUBSCRIBER_HOME }),
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
                userDiscountOffer: l,
                discountedPrice: r,
            } = e,
            { analyticsLocations: c } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            u = (0, S.d)(),
            h = (0, C.cg)(),
            x = (0, T.QQ)(),
            E = z.intl.string(z.t.qYKftX),
            I = (0, v.m)(),
            f = (0, i.jsx)(J, { className: t }),
            N = z.intl.string(z.t.ifwQZb),
            { fractionalState: b, endsAt: j } = (0, g.A)(),
            O = (0, A.Ay)(j, A.yE.CREDITS_ENDS_IN);
        u || h
            ? (f = (0, i.jsx)(ee, { isEligibleForBogoPromotion: h }))
            : I && ((E = z.intl.string(z.t.qYKftX)), (f = (0, i.jsx)($, {})));
        let R = null;
        if (b === Y.xc.NONE || u)
            R = n
                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: E })
                : (0, i.jsx)(G.ir, {
                      className: a()(W.Av, { [W.R]: !x }),
                      text: E,
                      colorOptions: G.at.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            x = !0;
            let e = (0, i.jsx)("div", {
                    className: W.nW,
                    children: (0, i.jsx)(d.mir, { size: "xxs", color: "var(--premium-tier-2-purple-for-gradients)" }),
                }),
                t = z.intl.format(z.t["yR+oDD"], { helpCenterLink: p.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            R = (0, i.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: W.YL,
                position: "right",
                children: (t) =>
                    (0, i.jsx)("div", {
                        ...t,
                        className: W.V_,
                        children: (0, i.jsx)("div", {
                            className: W.eL,
                            children: n
                                ? (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: O })
                                : (0, i.jsx)(G.R, {
                                      className: a()(W.Av, { [W.R]: !x }),
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
                    headingTop: R,
                    showPill: x,
                    userDiscountOffer: l,
                    discountedPrice: r,
                    buttonVisibilityRef: s,
                },
                children: n
                    ? (0, i.jsx)(Q, {
                          className: t,
                          isEligibleForBogoPromotion: h,
                          isInReverseTrial: u,
                          shouldShowReferralProgressBar: I,
                      })
                    : f,
            }),
        });
    };
