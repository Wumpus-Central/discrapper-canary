n.d(t, { A: () => $ });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(877624),
    l = n(304551),
    o = n(311907),
    c = n(502572),
    d = n(397927),
    u = n(775602),
    _ = n(793574),
    m = n(688810),
    p = n(366999),
    g = n(531260),
    A = n(780964),
    f = n(858897),
    h = n(166403),
    b = n(786300),
    x = n(975571),
    C = n(927578),
    N = n(40185),
    R = n(89366),
    v = n(881489),
    E = n(422936),
    I = n(234419),
    T = n(549996),
    j = n(371764),
    S = n(130946),
    M = n(103411),
    P = n(534217),
    y = n(65470),
    O = n(792656),
    D = n(511484),
    L = n(939724),
    U = n(473702),
    k = n(505559),
    B = n(722274),
    G = n(103733),
    w = n(508480),
    V = n(229289),
    H = n(253558),
    W = n(788868),
    F = n(652215),
    Y = n(985018),
    z = n(219424);
let X = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: r } = e,
            s = (0, v.Zb)(t);
        return (0, i.jsx)("div", {
            className: a()(z.kL, n),
            ref: r,
            children: (0, i.jsxs)("div", {
                className: z.ap,
                children: [
                    (0, i.jsxs)(d.BJc, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: Y.intl.string(Y.t.yhldRB) }),
                            (0, i.jsxs)(d.BJc, {
                                align: "start",
                                gap: 12,
                                className: z.rG,
                                children: [
                                    (0, i.jsx)(H.A, { children: Y.intl.format(Y.t.FwjP6W, { days: s }) }),
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: Y.intl.string(Y.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(d.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, i.jsx)(O.A, {
                                        size: "md",
                                        buttonTextOverride: Y.intl.string(Y.t["2+luBl"]),
                                        iconOverride: d.tvc,
                                        variantOverride: "expressive",
                                    }),
                                    (0, i.jsx)(d.Button, {
                                        variant: "secondary",
                                        size: "md",
                                        text: Y.intl.string(Y.t.Af7ye6),
                                        onClick: () => (0, f.openUserSettings)(A.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: z.Hk,
                        children: [(0, i.jsx)(l.C, { alt: "", width: "100%", height: "auto" }), (0, i.jsx)(w.A, {})],
                    }),
                ],
            }),
        });
    },
    K = (e) => {
        let { className: t, isEligibleForBogoPromotion: r, isInReverseTrial: l, shouldShowReferralProgressBar: c } = e,
            {
                headingText: p,
                headingTop: A,
                showPill: f,
                userDiscountOffer: b,
                discountedPrice: x,
                buttonVisibilityRef: N,
            } = Z(),
            { analyticsLocations: R } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            v = (0, T.c)(s.C.MARKETING_PAGE_BANNER),
            M = null;
        null != v && "marketingPageBanner" === v.properties.properties.oneofKind
            ? (M = (0, i.jsx)(j.x, {
                  componentId: v.id,
                  promotionBannerMarketingComponentFields: v.properties.properties.marketingPageBanner,
              }))
            : r
              ? (M = (0, i.jsx)(S.A, { variant: S.c.SUBSCRIBER_HOME }))
              : l
                ? (M = (0, i.jsx)(B.A, {}))
                : c && (M = (0, i.jsx)(P.S, {}));
        let k = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            w = null != k && k.status === F.Dmq.CANCELED && null != b,
            K = (0, I.V)(),
            q = (0, E.O)(),
            $ = (0, D.U9)(q, W.pe.TIER_2) ? W.pe.TIER_2 : void 0,
            Q = null != k && k.status !== F.Dmq.ACCOUNT_HOLD && k.hasAnyPremiumNitro,
            J = (0, g.A)(),
            ee = J.isFractionalPremiumActive && !Q && null == M && !w,
            et = (0, o.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: en, visibilityPercentage: ei } = (0, G.U)(!et);
        return l
            ? (0, i.jsx)(X, { fpEndsAt: J.currentEntitlementEndsAt, className: t, buttonVisibilityRef: N })
            : (0, i.jsx)("div", {
                  className: a()(z.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: N,
                  children: (0, i.jsxs)("div", {
                      className: z.Qs,
                      ref: en,
                      children: [
                          f && A,
                          (0, i.jsxs)("div", {
                              className: z.N1,
                              children: [
                                  (0, i.jsx)(V.A, { containerVisibilityPercentage: ei }),
                                  w &&
                                      null != b.expires_at &&
                                      (0, i.jsx)(L.A, { expiresAt: b.expires_at, className: z.IZ }),
                                  (0, i.jsx)(H.A, {
                                      children: w ? Y.intl.format(Y.t["3yZP0G"], { percent: b.discount.amount }) : p,
                                  }),
                                  w &&
                                      null != x &&
                                      (0, i.jsx)(d.Text, {
                                          className: z.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: Y.intl.format(Y.t["3Q4wCy"], {
                                              discountedPrice: x,
                                              billingPeriod: (0, C.Ke)(b.discount.user_usage_limit_interval),
                                              numMonths: b.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: ee || w ? z.UJ : void 0,
                              children: [
                                  ee &&
                                      (0, i.jsx)(O.A, {
                                          size: "md",
                                          hasActivePromotion: !!r,
                                          subscriptionTier: K?.subscription_trial?.sku_id ?? $,
                                      }),
                                  w &&
                                      (0, i.jsx)(d.Button, {
                                          variant: "expressive",
                                          icon: d.tvc,
                                          size: "md",
                                          text: Y.intl.string(Y.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = U.g.CONFIRM_DISCOUNT),
                                                  void (0, d.mMO)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("41353"),
                                                              n.e("35432"),
                                                              n.e("18398"),
                                                          ]).then(n.bind(n, 281439));
                                                      return (n) =>
                                                          (0, i.jsx)(t, {
                                                              ...n,
                                                              analyticsLocations: R,
                                                              initialStep: e,
                                                              premiumSubscription: k,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, i.jsx)(y.A, {
                                      variant: ee || w ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: Y.intl.string(Y.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          M,
                      ],
                  }),
              });
    },
    [q, Z] = (0, b.A)(),
    $ = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: r, discountedPrice: a } = e,
            { analyticsLocations: s } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, v.ds)(),
            o = (0, N.cg)(),
            d = (0, R.QQ)(),
            u = Y.intl.string(Y.t.qYKftX),
            A = (0, M.m)(),
            f = Y.intl.string(Y.t.ifwQZb),
            { fractionalState: h, endsAt: b } = (0, g.A)(),
            C = (0, p.Ay)(b, p.yE.CREDITS_ENDS_IN),
            E = null;
        if (h === W.xc.NONE || l) E = (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: u });
        else {
            d = !0;
            let e = Y.intl.format(Y.t["yR+oDD"], { helpCenterLink: x.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            E = (0, i.jsx)(c.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: z.YL,
                position: "right",
                children: (e) =>
                    (0, i.jsx)("div", {
                        ...e,
                        className: z.V_,
                        children: (0, i.jsx)("div", {
                            className: z.eL,
                            children: (0, i.jsx)(k.A, { enablePremiumBrandRefresh: !0, text: C }),
                        }),
                    }),
            });
        }
        return (0, i.jsx)(m.f5, {
            value: s,
            children: (0, i.jsx)(q.Provider, {
                value: {
                    headingText: f,
                    headingTop: E,
                    showPill: d,
                    userDiscountOffer: r,
                    discountedPrice: a,
                    buttonVisibilityRef: n,
                },
                children: (0, i.jsx)(K, {
                    className: t,
                    isEligibleForBogoPromotion: o,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: A,
                }),
            }),
        });
    };
