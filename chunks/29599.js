n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(469165),
    O = n(767714),
    v = n(504983),
    I = n(703656),
    T = n(594174),
    S = n(580130),
    A = n(669079),
    C = n(74538),
    N = n(313789),
    R = n(317941),
    P = n(342386),
    w = n(518596),
    D = n(981631),
    x = n(474936),
    L = n(388032),
    M = n(666707);
function j(e, t, n) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
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
                className: o()(M.skuCard, M.promotionCard),
                children: [
                    (0, r.jsxs)("div", {
                        className: M.mainPromotionCardContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: M.promotionCardLeftContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: M.promotionIcon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: O,
                                            className: M.promotionIconImage,
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
                                                className: M.__invalid_promotionText,
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
                            className: M.promotionLegalese,
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
                            G(k({}, e), {
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
let Z = function () {
    let e = (0, c.Wu)([S.Z], () => S.Z.getGiftable()),
        [t, n] = l().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        a = (0, c.e7)([T.default], () => C.ZP.isPremiumExactly(T.default.getCurrentUser(), x.PremiumTypes.TIER_2)),
        s = l().groupBy(t, (e) => (0, A.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
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
            claimedOutboundPromotionCodeMap: j,
            addClaimedOutboundPromotionCode: k,
        } = (0, E.lG)(),
        U = g.filter((e) => null == (0, y.EA)({ promotion: e })),
        G = U.length + b.length > 0,
        Z =
            h.g.useExperiment(
                { location: "EntitlementGifts" },
                {
                    autoTrackExposure: !1,
                    disable: a,
                },
            ).enabled && G;
    function F() {
        (0, w.openUserSettings)(N.n.NITRO_PANEL, { section: D.oAB.PREMIUM });
    }
    function V() {
        var e;
        let t = n.find((e) => e.giftCodeBatchId === x.m8 && !e.consumed),
            i = null != (e = n.filter((e) => e.giftCodeBatchId === x.rX && !e.consumed)) ? e : [],
            [s, c] = l().partition(i, (e) => {
                let { subscriptionPlanId: t } = e;
                return t === x.Xh.PREMIUM_YEAR_TIER_2;
            }),
            d = (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: G ? L.intl.string(L.t.wFsj3B) : void 0,
            }),
            f = Z
                ? (0, r.jsxs)("div", {
                      className: M.promoHeaderContainer,
                      children: [
                          (0, r.jsx)(u.SrA, {
                              size: "md",
                              color: u.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: M.premiumIcon,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-md/normal",
                              className: M.promoDescription,
                              children: L.intl.format(L.t.G4fwxK, {
                                  onClick: () => {
                                      (0, P.default)(), (0, I.uL)(D.Z5c.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, r.jsx)(O.Z, {
                              showGradient: !0,
                              className: M.promoNitroButton,
                              subscriptionTier: x.Si.TIER_2,
                              textOptions: { textOverride: L.intl.string(L.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: M.marginContainer,
            children: [
                d,
                G ? (0, r.jsx)(u.izJ, { className: M.divider }) : null,
                (0, r.jsx)(v.Z, {
                    className: M.gradientContainer,
                    isShown: Z,
                    type: v.Y.PREMIUM,
                    hasBackground: !0,
                    children: (0, r.jsxs)("div", {
                        className: o()({ [M.marginContainer]: !Z }),
                        children: [
                            f,
                            b.map((e) => {
                                let { code: t, promotion: n } = e;
                                return (0, r.jsx)(
                                    B,
                                    {
                                        outboundPromotion: n,
                                        code: t,
                                        addClaimedOutboundPromotionCode: k,
                                        disabled: !a,
                                    },
                                    n.id,
                                );
                            }),
                            U.map((e) =>
                                (0, r.jsx)(
                                    B,
                                    {
                                        outboundPromotion: e,
                                        code: j[e.id],
                                        addClaimedOutboundPromotionCode: k,
                                        disabled: !a,
                                    },
                                    e.id,
                                ),
                            ),
                            null != t
                                ? (0, r.jsx)(
                                      R.Z,
                                      {
                                          className: M.skuCard,
                                          skuId: t.skuId,
                                          subscriptionPlanId: t.subscriptionPlanId,
                                          entitlements: [t],
                                          giftCodeBatchId: x.m8,
                                      },
                                      (0, A.Bg)(t.skuId, t.subscriptionPlanId),
                                  )
                                : null,
                            s.length > 0
                                ? (0, r.jsx)(
                                      R.Z,
                                      {
                                          className: M.skuCard,
                                          skuId: s[0].skuId,
                                          subscriptionPlanId: s[0].subscriptionPlanId,
                                          entitlements: s,
                                          giftCodeBatchId: x.rX,
                                      },
                                      (0, A.Bg)(s[0].skuId, s[0].subscriptionPlanId),
                                  )
                                : null,
                            c.length > 0
                                ? (0, r.jsx)(
                                      R.Z,
                                      {
                                          className: M.skuCard,
                                          skuId: c[0].skuId,
                                          subscriptionPlanId: c[0].subscriptionPlanId,
                                          entitlements: c,
                                          giftCodeBatchId: x.rX,
                                      },
                                      (0, A.Bg)(c[0].skuId, c[0].subscriptionPlanId),
                                  )
                                : null,
                        ],
                    }),
                }),
            ],
        });
    }
    function H() {
        return (0, r.jsxs)("div", {
            className: M.emptyState,
            children: [
                (0, r.jsx)("div", { className: M.emptyStateImage }),
                (0, r.jsx)(u.H, {
                    className: M.emptyStateHeader,
                    children: L.intl.string(L.t.B1qgZn),
                }),
                (0, r.jsx)("p", {
                    className: M.emptyStateSubtext,
                    children: L.intl.format(L.t.HezvJ8, { onClick: F }),
                }),
            ],
        });
    }
    return _ && m
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  V(),
                  (0, r.jsx)("div", {
                      className: M.marginContainer,
                      children: (0, r.jsxs)(u.y5t, {
                          component: (0, r.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              children: L.intl.string(L.t["9KeUbY"]),
                          }),
                          children: [
                              (0, r.jsx)(u.izJ, { className: M.divider }),
                              0 === Object.keys(s).length
                                  ? H()
                                  : l()
                                        .keys(s)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, A.Z0)(e);
                                            return (0, r.jsx)(
                                                R.Z,
                                                {
                                                    className: M.skuCard,
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
        : (0, r.jsx)(u.$jN, { className: M.loading });
};
