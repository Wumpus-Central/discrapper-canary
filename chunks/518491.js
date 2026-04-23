n.d(t, { A: () => et });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(877624),
    l = n(304551),
    c = n(311907),
    o = n(502572),
    d = n(192308),
    u = n(331322),
    _ = n(834730),
    m = n(403581),
    p = n(821609),
    f = n(775602),
    A = n(793574),
    g = n(688810),
    h = n(366999),
    b = n(531260),
    x = n(780964),
    C = n(858897),
    v = n(166403),
    R = n(786300),
    N = n(975571),
    E = n(927578),
    j = n(40185),
    T = n(89366),
    y = n(881489),
    I = n(422936),
    S = n(234419),
    M = n(549996),
    O = n(371764),
    P = n(130946),
    D = n(103411),
    L = n(534217),
    k = n(65470),
    U = n(792656),
    w = n(511484),
    B = n(939724),
    G = n(473702),
    V = n(505559),
    z = n(722274),
    F = n(103733),
    H = n(508480),
    W = n(229289),
    K = n(253558),
    X = n(788868),
    Y = n(652215),
    Z = n(985018),
    $ = n(97584);
let q = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: a } = e,
            s = (0, y.Zb)(t);
        return (0, r.jsx)("div", {
            className: i()($.kL, n),
            ref: a,
            children: (0, r.jsxs)("div", {
                className: $.ap,
                children: [
                    (0, r.jsxs)(u.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, r.jsx)(V.A, { text: Z.intl.string(Z.t.yhldRB) }),
                            (0, r.jsxs)(u.B, {
                                align: "start",
                                gap: 12,
                                className: $.rG,
                                children: [
                                    (0, r.jsx)(K.A, { children: Z.intl.format(Z.t.FwjP6W, { days: s }) }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: Z.intl.string(Z.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, r.jsx)(U.A, {
                                        size: "md",
                                        buttonTextOverride: Z.intl.string(Z.t["2+luBl"]),
                                        iconOverride: m.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: Z.intl.string(Z.t.Af7ye6),
                                        onClick: () => (0, C.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: $.Hk,
                        children: [(0, r.jsx)(l.C, { alt: "", width: "100%", height: "auto" }), (0, r.jsx)(H.A, {})],
                    }),
                ],
            }),
        });
    },
    Q = (e) => {
        let { className: t, isEligibleForBogoPromotion: a, isInReverseTrial: l, shouldShowReferralProgressBar: o } = e,
            {
                headingText: u,
                headingTop: h,
                showPill: x,
                userDiscountOffer: C,
                discountedPrice: R,
                buttonVisibilityRef: N,
            } = ee(),
            { analyticsLocations: j } = (0, g.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            T = (0, M.c)(s.C.MARKETING_PAGE_BANNER),
            y = null;
        null != T && "marketingPageBanner" === T.properties.properties.oneofKind
            ? (y = (0, r.jsx)(O.x, {
                  componentId: T.id,
                  promotionBannerMarketingComponentFields: T.properties.properties.marketingPageBanner,
              }))
            : a
              ? (y = (0, r.jsx)(P.A, { variant: P.c.SUBSCRIBER_HOME }))
              : l
                ? (y = (0, r.jsx)(z.A, {}))
                : o && (y = (0, r.jsx)(L.S, {}));
        let D = (0, c.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
            V = null != D && D.status === Y.Dmq.CANCELED && null != C,
            H = (0, S.V)(),
            Q = (0, I.O)(),
            J = (0, w.U9)(Q, X.pe.TIER_2) ? X.pe.TIER_2 : void 0,
            et = null != D && D.status !== Y.Dmq.ACCOUNT_HOLD && D.hasAnyPremiumNitro,
            en = (0, b.A)(),
            er = en.isFractionalPremiumActive && !et && null == y && !V,
            ea = (0, c.bG)([f.A], () => f.A.useReducedMotion),
            { visibilityPercentageRef: ei, visibilityPercentage: es } = (0, F.U)(!ea);
        return l
            ? (0, r.jsx)(q, { fpEndsAt: en.currentEntitlementEndsAt, className: t, buttonVisibilityRef: N })
            : (0, r.jsx)("div", {
                  className: i()($.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: N,
                  children: (0, r.jsxs)("div", {
                      className: $.Qs,
                      ref: ei,
                      children: [
                          x && h,
                          (0, r.jsxs)("div", {
                              className: $.N1,
                              children: [
                                  (0, r.jsx)(W.A, { containerVisibilityPercentage: es }),
                                  V &&
                                      null != C.expires_at &&
                                      (0, r.jsx)(B.A, { expiresAt: C.expires_at, className: $.IZ }),
                                  (0, r.jsx)(K.A, {
                                      children: V ? Z.intl.format(Z.t["3yZP0G"], { percent: C.discount.amount }) : u,
                                  }),
                                  V &&
                                      null != R &&
                                      (0, r.jsx)(_.E, {
                                          className: $.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: Z.intl.format(Z.t["3Q4wCy"], {
                                              discountedPrice: R,
                                              billingPeriod: (0, E.Ke)(C.discount.user_usage_limit_interval),
                                              numMonths: C.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: er || V ? $.UJ : void 0,
                              children: [
                                  er &&
                                      (0, r.jsx)(U.A, {
                                          size: "md",
                                          hasActivePromotion: !!a,
                                          subscriptionTier: H?.subscription_trial?.sku_id ?? J,
                                      }),
                                  V &&
                                      (0, r.jsx)(p.$, {
                                          variant: "expressive",
                                          icon: m.t,
                                          size: "md",
                                          text: Z.intl.string(Z.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = G.g.CONFIRM_DISCOUNT),
                                                  void (0, d.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("57036"),
                                                              n.e("70474"),
                                                              n.e("61943"),
                                                              n.e("7175"),
                                                              n.e("55202"),
                                                              n.e("23353"),
                                                              n.e("73667"),
                                                              n.e("11250"),
                                                              n.e("14138"),
                                                              n.e("3442"),
                                                              n.e("85071"),
                                                              n.e("88017"),
                                                              n.e("70994"),
                                                              n.e("17239"),
                                                              n.e("24267"),
                                                              n.e("51793"),
                                                              n.e("58164"),
                                                              n.e("81645"),
                                                              n.e("36682"),
                                                              n.e("63070"),
                                                              n.e("28367"),
                                                              n.e("96313"),
                                                              n.e("49318"),
                                                              n.e("12721"),
                                                              n.e("58283"),
                                                              n.e("67876"),
                                                              n.e("41353"),
                                                              n.e("35432"),
                                                              n.e("26786"),
                                                          ]).then(n.bind(n, 281439));
                                                      return (n) =>
                                                          (0, r.jsx)(t, {
                                                              ...n,
                                                              analyticsLocations: j,
                                                              initialStep: e,
                                                              premiumSubscription: D,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, r.jsx)(k.A, {
                                      variant: er || V ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: Z.intl.string(Z.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          y,
                      ],
                  }),
              });
    },
    [J, ee] = (0, R.A)(),
    et = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: a, discountedPrice: i } = e,
            { analyticsLocations: s } = (0, g.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, y.ds)(),
            c = (0, j.cg)(),
            d = (0, T.QQ)(),
            u = Z.intl.string(Z.t.qYKftX),
            _ = (0, D.m)(),
            m = Z.intl.string(Z.t.ifwQZb),
            { fractionalState: p, endsAt: f } = (0, b.A)(),
            x = (0, h.Ay)(f, h.yE.CREDITS_ENDS_IN),
            C = null;
        if (p === X.xc.NONE || l) C = (0, r.jsx)(V.A, { text: u });
        else {
            d = !0;
            let e = Z.intl.format(Z.t["yR+oDD"], { helpCenterLink: N.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            C = (0, r.jsx)(o.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: $.YL,
                position: "right",
                children: (e) =>
                    (0, r.jsx)("div", {
                        ...e,
                        className: $.V_,
                        children: (0, r.jsx)("div", { className: $.eL, children: (0, r.jsx)(V.A, { text: x }) }),
                    }),
            });
        }
        return (0, r.jsx)(g.f5, {
            value: s,
            children: (0, r.jsx)(J.Provider, {
                value: {
                    headingText: m,
                    headingTop: C,
                    showPill: d,
                    userDiscountOffer: a,
                    discountedPrice: i,
                    buttonVisibilityRef: n,
                },
                children: (0, r.jsx)(Q, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: _,
                }),
            }),
        });
    };
