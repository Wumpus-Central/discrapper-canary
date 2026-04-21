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
    A = n(531260),
    g = n(780964),
    f = n(858897),
    x = n(166403),
    h = n(786300),
    b = n(975571),
    C = n(927578),
    R = n(40185),
    N = n(89366),
    v = n(881489),
    E = n(422936),
    T = n(234419),
    j = n(549996),
    I = n(371764),
    S = n(130946),
    y = n(103411),
    M = n(534217),
    O = n(65470),
    P = n(792656),
    D = n(511484),
    L = n(939724),
    U = n(473702),
    k = n(505559),
    w = n(722274),
    B = n(103733),
    G = n(508480),
    V = n(229289),
    H = n(253558),
    F = n(788868),
    z = n(652215),
    W = n(985018),
    Y = n(97584);
let K = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: r } = e,
            s = (0, v.Zb)(t);
        return (0, i.jsx)("div", {
            className: a()(Y.kL, n),
            ref: r,
            children: (0, i.jsxs)("div", {
                className: Y.ap,
                children: [
                    (0, i.jsxs)(d.BJc, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, i.jsx)(k.A, { text: W.intl.string(W.t.yhldRB) }),
                            (0, i.jsxs)(d.BJc, {
                                align: "start",
                                gap: 12,
                                className: Y.rG,
                                children: [
                                    (0, i.jsx)(H.A, { children: W.intl.format(W.t.FwjP6W, { days: s }) }),
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: W.intl.string(W.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(d.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, i.jsx)(P.A, {
                                        size: "md",
                                        buttonTextOverride: W.intl.string(W.t["2+luBl"]),
                                        iconOverride: d.tvc,
                                        variantOverride: "expressive",
                                    }),
                                    (0, i.jsx)(d.Button, {
                                        variant: "secondary",
                                        size: "md",
                                        text: W.intl.string(W.t.Af7ye6),
                                        onClick: () => (0, f.openUserSettings)(g.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Y.Hk,
                        children: [(0, i.jsx)(l.C, { alt: "", width: "100%", height: "auto" }), (0, i.jsx)(G.A, {})],
                    }),
                ],
            }),
        });
    },
    X = (e) => {
        let { className: t, isEligibleForBogoPromotion: r, isInReverseTrial: l, shouldShowReferralProgressBar: c } = e,
            {
                headingText: p,
                headingTop: g,
                showPill: f,
                userDiscountOffer: h,
                discountedPrice: b,
                buttonVisibilityRef: R,
            } = q(),
            { analyticsLocations: N } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            v = (0, j.c)(s.C.MARKETING_PAGE_BANNER),
            y = null;
        null != v && "marketingPageBanner" === v.properties.properties.oneofKind
            ? (y = (0, i.jsx)(I.x, {
                  componentId: v.id,
                  promotionBannerMarketingComponentFields: v.properties.properties.marketingPageBanner,
              }))
            : r
              ? (y = (0, i.jsx)(S.A, { variant: S.c.SUBSCRIBER_HOME }))
              : l
                ? (y = (0, i.jsx)(w.A, {}))
                : c && (y = (0, i.jsx)(M.S, {}));
        let k = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            G = null != k && k.status === z.Dmq.CANCELED && null != h,
            X = (0, T.V)(),
            Z = (0, E.O)(),
            $ = (0, D.U9)(Z, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            Q = null != k && k.status !== z.Dmq.ACCOUNT_HOLD && k.hasAnyPremiumNitro,
            J = (0, A.A)(),
            ee = J.isFractionalPremiumActive && !Q && null == y && !G,
            et = (0, o.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: en, visibilityPercentage: ei } = (0, B.U)(!et);
        return l
            ? (0, i.jsx)(K, { fpEndsAt: J.currentEntitlementEndsAt, className: t, buttonVisibilityRef: R })
            : (0, i.jsx)("div", {
                  className: a()(Y.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: R,
                  children: (0, i.jsxs)("div", {
                      className: Y.Qs,
                      ref: en,
                      children: [
                          f && g,
                          (0, i.jsxs)("div", {
                              className: Y.N1,
                              children: [
                                  (0, i.jsx)(V.A, { containerVisibilityPercentage: ei }),
                                  G &&
                                      null != h.expires_at &&
                                      (0, i.jsx)(L.A, { expiresAt: h.expires_at, className: Y.IZ }),
                                  (0, i.jsx)(H.A, {
                                      children: G ? W.intl.format(W.t["3yZP0G"], { percent: h.discount.amount }) : p,
                                  }),
                                  G &&
                                      null != b &&
                                      (0, i.jsx)(d.Text, {
                                          className: Y.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: W.intl.format(W.t["3Q4wCy"], {
                                              discountedPrice: b,
                                              billingPeriod: (0, C.Ke)(h.discount.user_usage_limit_interval),
                                              numMonths: h.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: ee || G ? Y.UJ : void 0,
                              children: [
                                  ee &&
                                      (0, i.jsx)(P.A, {
                                          size: "md",
                                          hasActivePromotion: !!r,
                                          subscriptionTier: X?.subscription_trial?.sku_id ?? $,
                                      }),
                                  G &&
                                      (0, i.jsx)(d.Button, {
                                          variant: "expressive",
                                          icon: d.tvc,
                                          size: "md",
                                          text: W.intl.string(W.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = U.g.CONFIRM_DISCOUNT),
                                                  void (0, d.mMO)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("41353"),
                                                              n.e("35432"),
                                                              n.e("72946"),
                                                          ]).then(n.bind(n, 281439));
                                                      return (n) =>
                                                          (0, i.jsx)(t, {
                                                              ...n,
                                                              analyticsLocations: N,
                                                              initialStep: e,
                                                              premiumSubscription: k,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, i.jsx)(O.A, {
                                      variant: ee || G ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: W.intl.string(W.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          y,
                      ],
                  }),
              });
    },
    [Z, q] = (0, h.A)(),
    $ = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: r, discountedPrice: a } = e,
            { analyticsLocations: s } = (0, m.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, v.ds)(),
            o = (0, R.cg)(),
            d = (0, N.QQ)(),
            u = W.intl.string(W.t.qYKftX),
            g = (0, y.m)(),
            f = W.intl.string(W.t.ifwQZb),
            { fractionalState: x, endsAt: h } = (0, A.A)(),
            C = (0, p.Ay)(h, p.yE.CREDITS_ENDS_IN),
            E = null;
        if (x === F.xc.NONE || l) E = (0, i.jsx)(k.A, { text: u });
        else {
            d = !0;
            let e = W.intl.format(W.t["yR+oDD"], { helpCenterLink: b.A.getArticleURL(z.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            E = (0, i.jsx)(c.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: Y.YL,
                position: "right",
                children: (e) =>
                    (0, i.jsx)("div", {
                        ...e,
                        className: Y.V_,
                        children: (0, i.jsx)("div", { className: Y.eL, children: (0, i.jsx)(k.A, { text: C }) }),
                    }),
            });
        }
        return (0, i.jsx)(m.f5, {
            value: s,
            children: (0, i.jsx)(Z.Provider, {
                value: {
                    headingText: f,
                    headingTop: E,
                    showPill: d,
                    userDiscountOffer: r,
                    discountedPrice: a,
                    buttonVisibilityRef: n,
                },
                children: (0, i.jsx)(X, {
                    className: t,
                    isEligibleForBogoPromotion: o,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: g,
                }),
            }),
        });
    };
