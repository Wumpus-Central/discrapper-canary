n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    f = n(496929),
    _ = n(410030),
    p = n(454585),
    h = n(163684),
    m = n(178100),
    g = n(518638),
    E = n(725727),
    b = n(454982),
    y = n(767714),
    O = n(504983),
    v = n(703656),
    I = n(594174),
    T = n(580130),
    S = n(669079),
    A = n(74538),
    C = n(313789),
    N = n(317941),
    R = n(342386),
    P = n(518596),
    D = n(981631),
    w = n(474936),
    L = n(388032),
    x = n(666707);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let t,
        { outboundPromotion: n, code: a, addClaimedOutboundPromotionCode: s, disabled: l } = e,
        [c, d] = i.useState(!1),
        [f, h] = i.useState(!1),
        E = () => d((e) => !e),
        y = (0, _.ZP)(),
        O = (0, g.Pz)(n.id, y),
        v = null != a,
        I = (0, m.Z)(n, v);
    v && c
        ? (t = L.intl.format(L.t.pkxVx6, {
              endDate: I,
              onClickDetails: E,
          }))
        : v && !c
          ? (t = L.intl.format(L.t["4sFeob"], {
                endDate: I,
                onClickDetails: E,
            }))
          : !v && c
            ? (t = L.intl.format(L.t["RBnE+l"], {
                  endDate: I,
                  onClickDetails: E,
              }))
            : v ||
              c ||
              (t = L.intl.format(L.t["57+7Qn"], {
                  endDate: I,
                  onClickDetails: E,
              }));
    let T = v ? L.intl.string(L.t["2cHUti"]) : L.intl.string(L.t.O13yhz),
        S = i.useCallback(() => h(!1), []),
        { outboundTitle: A, outboundTermsAndConditions: C } = n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(x.skuCard, x.promotionCard),
                children: [
                    (0, r.jsxs)("div", {
                        className: x.mainPromotionCardContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.promotionCardLeftContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: x.promotionIcon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: O,
                                            className: x.promotionIconImage,
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                variant: "heading-md/semibold",
                                                children: A,
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: x.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !l &&
                                (0, r.jsx)(u.Button, {
                                    text: T,
                                    onClick: () => h(!0),
                                    disabled: l,
                                    size: "sm",
                                }),
                        ],
                    }),
                    c &&
                        (0, r.jsx)(u.Text, {
                            className: x.promotionLegalese,
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: p.Z.parse(C, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            f &&
                (0, r.jsx)(u.u_l, {
                    renderModal: (e) =>
                        (0, r.jsx)(
                            b.Z,
                            U(k({}, e), {
                                onClose: S,
                                onClaim: s,
                                code: a,
                                outboundPromotion: n,
                            }),
                        ),
                    onCloseRequest: S,
                }),
        ],
    });
}
let B = function () {
    let e = (0, c.Wu)([T.Z], () => T.Z.getGiftable()),
        [t, n] = l().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        a = (0, c.e7)([I.default], () => A.ZP.isPremiumExactly(I.default.getCurrentUser(), w.PremiumTypes.TIER_2)),
        s = l().groupBy(t, (e) => (0, S.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [_, p] = i.useState(!1);
    i.useEffect(() => {
        d.Z.wait(() => {
            (0, f.Qv)().then(() => p(!0));
        });
    }, []);
    let {
            promotionsLoaded: m,
            activeOutboundPromotions: g,
            claimedEndedOutboundPromotions: b,
            claimedOutboundPromotionCodeMap: M,
            addClaimedOutboundPromotionCode: k,
        } = (0, E.lG)(),
        j = g.length + b.length > 0,
        U =
            h.g.useExperiment(
                { location: "EntitlementGifts" },
                {
                    autoTrackExposure: !1,
                    disable: a,
                },
            ).enabled && j;
    function B() {
        (0, P.openUserSettings)(C.n.NITRO_PANEL, { section: D.oAB.PREMIUM });
    }
    function Z() {
        var e;
        let t = n.find((e) => e.giftCodeBatchId === w.m8 && !e.consumed),
            i = null != (e = n.filter((e) => e.giftCodeBatchId === w.rX && !e.consumed)) ? e : [],
            [s, c] = l().partition(i, (e) => {
                let { subscriptionPlanId: t } = e;
                return t === w.Xh.PREMIUM_YEAR_TIER_2;
            }),
            d = (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: j ? L.intl.string(L.t.wFsj3B) : void 0,
            }),
            f = U
                ? (0, r.jsxs)("div", {
                      className: x.promoHeaderContainer,
                      children: [
                          (0, r.jsx)(u.SrA, {
                              size: "md",
                              color: u.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: x.premiumIcon,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-md/normal",
                              className: x.promoDescription,
                              children: L.intl.format(L.t.G4fwxK, {
                                  onClick: () => {
                                      (0, R.default)(), (0, v.uL)(D.Z5c.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, r.jsx)(y.Z, {
                              showGradient: !0,
                              className: x.promoNitroButton,
                              subscriptionTier: w.Si.TIER_2,
                              textOptions: { textOverride: L.intl.string(L.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: x.marginContainer,
            children: [
                d,
                j ? (0, r.jsx)(u.izJ, { className: x.divider }) : null,
                (0, r.jsx)(O.Z, {
                    className: x.gradientContainer,
                    isShown: U,
                    type: O.Y.PREMIUM,
                    hasBackground: !0,
                    children: (0, r.jsxs)("div", {
                        className: o()({ [x.marginContainer]: !U }),
                        children: [
                            f,
                            b.map((e) => {
                                let { code: t, promotion: n } = e;
                                return (0, r.jsx)(
                                    G,
                                    {
                                        outboundPromotion: n,
                                        code: t,
                                        addClaimedOutboundPromotionCode: k,
                                        disabled: !a,
                                    },
                                    n.id,
                                );
                            }),
                            g.map((e) =>
                                (0, r.jsx)(
                                    G,
                                    {
                                        outboundPromotion: e,
                                        code: M[e.id],
                                        addClaimedOutboundPromotionCode: k,
                                        disabled: !a,
                                    },
                                    e.id,
                                ),
                            ),
                            null != t
                                ? (0, r.jsx)(
                                      N.Z,
                                      {
                                          className: x.skuCard,
                                          skuId: t.skuId,
                                          subscriptionPlanId: t.subscriptionPlanId,
                                          entitlements: [t],
                                          giftCodeBatchId: w.m8,
                                      },
                                      (0, S.Bg)(t.skuId, t.subscriptionPlanId),
                                  )
                                : null,
                            s.length > 0
                                ? (0, r.jsx)(
                                      N.Z,
                                      {
                                          className: x.skuCard,
                                          skuId: s[0].skuId,
                                          subscriptionPlanId: s[0].subscriptionPlanId,
                                          entitlements: s,
                                          giftCodeBatchId: w.rX,
                                      },
                                      (0, S.Bg)(s[0].skuId, s[0].subscriptionPlanId),
                                  )
                                : null,
                            c.length > 0
                                ? (0, r.jsx)(
                                      N.Z,
                                      {
                                          className: x.skuCard,
                                          skuId: c[0].skuId,
                                          subscriptionPlanId: c[0].subscriptionPlanId,
                                          entitlements: c,
                                          giftCodeBatchId: w.rX,
                                      },
                                      (0, S.Bg)(c[0].skuId, c[0].subscriptionPlanId),
                                  )
                                : null,
                        ],
                    }),
                }),
            ],
        });
    }
    function F() {
        return (0, r.jsxs)("div", {
            className: x.emptyState,
            children: [
                (0, r.jsx)("div", { className: x.emptyStateImage }),
                (0, r.jsx)(u.H, {
                    className: x.emptyStateHeader,
                    children: L.intl.string(L.t.B1qgZn),
                }),
                (0, r.jsx)("p", {
                    className: x.emptyStateSubtext,
                    children: L.intl.format(L.t.HezvJ8, { onClick: B }),
                }),
            ],
        });
    }
    return _ && m
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Z(),
                  (0, r.jsx)("div", {
                      className: x.marginContainer,
                      children: (0, r.jsxs)(u.y5t, {
                          component: (0, r.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              children: L.intl.string(L.t["9KeUbY"]),
                          }),
                          children: [
                              (0, r.jsx)(u.izJ, { className: x.divider }),
                              0 === Object.keys(s).length
                                  ? F()
                                  : l()
                                        .keys(s)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, S.Z0)(e);
                                            return (0, r.jsx)(
                                                N.Z,
                                                {
                                                    className: x.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: s[e],
                                                    giftStyle: i,
                                                },
                                                e,
                                            );
                                        }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, r.jsx)(u.$jN, { className: x.loading });
};
