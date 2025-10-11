n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(570140),
    _ = n(496929),
    p = n(410030),
    h = n(454585),
    m = n(163684),
    g = n(178100),
    E = n(518638),
    b = n(725727),
    y = n(454982),
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
    w = n(947889),
    D = n(981631),
    L = n(474936),
    x = n(388032),
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
        [c, f] = i.useState(!1),
        [_, m] = i.useState(!1),
        b = () => f((e) => !e),
        O = (0, p.ZP)(),
        v = (0, E.Pz)(n.id, O),
        I = null != a,
        T = (0, g.Z)(n, I);
    I && c
        ? (t = x.intl.format(x.t.pkxVx8, {
              endDate: T,
              onClickDetails: b,
          }))
        : I && !c
          ? (t = x.intl.format(x.t["4sFeoa"], {
                endDate: T,
                onClickDetails: b,
            }))
          : !I && c
            ? (t = x.intl.format(x.t["RBnE+v"], {
                  endDate: T,
                  onClickDetails: b,
              }))
            : I ||
              c ||
              (t = x.intl.format(x.t["57+7Qk"], {
                  endDate: T,
                  onClickDetails: b,
              }));
    let S = I ? x.intl.string(x.t["2cHUtr"]) : x.intl.string(x.t.O13yh4),
        A = i.useCallback(() => m(!1), []),
        { outboundTitle: C, outboundTermsAndConditions: N } = n;
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
                                            src: v,
                                            className: M.promotionIconImage,
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(d.Heading, {
                                                variant: "heading-md/semibold",
                                                children: C,
                                            }),
                                            (0, r.jsx)(d.Text, {
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
                                (0, r.jsx)(u.zx, {
                                    className: M.promotionCardButton,
                                    color: u.zx.Colors.BRAND,
                                    size: u.zx.Sizes.SMALL,
                                    onClick: () => m(!0),
                                    disabled: l,
                                    children: S,
                                }),
                        ],
                    }),
                    c &&
                        (0, r.jsx)(d.Text, {
                            className: M.promotionLegalese,
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: h.Z.parse(N, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            _ &&
                (0, r.jsx)(d.u_l, {
                    renderModal: (e) =>
                        (0, r.jsx)(
                            y.Z,
                            G(k({}, e), {
                                onClose: A,
                                onClaim: s,
                                code: a,
                                outboundPromotion: n,
                            }),
                        ),
                    onCloseRequest: A,
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
        a = (0, c.e7)([T.default], () => C.ZP.isPremiumExactly(T.default.getCurrentUser(), L.PremiumTypes.TIER_2)),
        s = l().groupBy(t, (e) => (0, A.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [u, p] = i.useState(!1);
    i.useEffect(() => {
        f.Z.wait(() => {
            (0, _.Qv)().then(() => p(!0));
        });
    }, []);
    let {
            promotionsLoaded: h,
            activeOutboundPromotions: g,
            claimedEndedOutboundPromotions: E,
            claimedOutboundPromotionCodeMap: y,
            addClaimedOutboundPromotionCode: j,
        } = (0, b.lG)(),
        k = g.length + E.length > 0,
        U =
            m.g.useExperiment(
                { location: "EntitlementGifts" },
                {
                    autoTrackExposure: !1,
                    disable: a,
                },
            ).enabled && k,
        G = (0, w.Z)();
    function Z() {
        G(N.n.NITRO_PANEL, { section: D.oAB.PREMIUM });
    }
    function F() {
        var e;
        let t = n.find((e) => e.giftCodeBatchId === L.m8 && !e.consumed),
            i = null != (e = n.filter((e) => e.giftCodeBatchId === L.rX && !e.consumed)) ? e : [],
            [s, c] = l().partition(i, (e) => {
                let { subscriptionPlanId: t } = e;
                return t === L.Xh.PREMIUM_YEAR_TIER_2;
            }),
            u = (0, r.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: k ? x.intl.string(x.t.wFsj3N) : void 0,
            }),
            f = U
                ? (0, r.jsxs)("div", {
                      className: M.promoHeaderContainer,
                      children: [
                          (0, r.jsx)(d.SrA, {
                              size: "md",
                              color: d.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: M.premiumIcon,
                          }),
                          (0, r.jsx)(d.Text, {
                              variant: "text-md/normal",
                              className: M.promoDescription,
                              children: x.intl.format(x.t.G4fwxM, {
                                  onClick: () => {
                                      (0, P.default)(), (0, I.uL)(D.Z5c.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, r.jsx)(O.Z, {
                              showGradient: !0,
                              className: M.promoNitroButton,
                              subscriptionTier: L.Si.TIER_2,
                              textOptions: { textOverride: x.intl.string(x.t.mr4K7O) },
                          }),
                      ],
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: M.marginContainer,
            children: [
                u,
                k ? (0, r.jsx)(d.izJ, { className: M.divider }) : null,
                (0, r.jsx)(v.Z, {
                    className: M.gradientContainer,
                    isShown: U,
                    type: v.Y.PREMIUM,
                    hasBackground: !0,
                    children: (0, r.jsxs)("div", {
                        className: o()({ [M.marginContainer]: !U }),
                        children: [
                            f,
                            E.map((e) => {
                                let { code: t, promotion: n } = e;
                                return (0, r.jsx)(
                                    B,
                                    {
                                        outboundPromotion: n,
                                        code: t,
                                        addClaimedOutboundPromotionCode: j,
                                        disabled: !a,
                                    },
                                    n.id,
                                );
                            }),
                            g.map((e) =>
                                (0, r.jsx)(
                                    B,
                                    {
                                        outboundPromotion: e,
                                        code: y[e.id],
                                        addClaimedOutboundPromotionCode: j,
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
                                          giftCodeBatchId: L.m8,
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
                                          giftCodeBatchId: L.rX,
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
                                          giftCodeBatchId: L.rX,
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
    function V() {
        return (0, r.jsxs)("div", {
            className: M.emptyState,
            children: [
                (0, r.jsx)("div", { className: M.emptyStateImage }),
                (0, r.jsx)(d.H, {
                    className: M.emptyStateHeader,
                    children: x.intl.string(x.t.B1qgZm),
                }),
                (0, r.jsx)("p", {
                    className: M.emptyStateSubtext,
                    children: x.intl.format(x.t.HezvJy, { onClick: Z }),
                }),
            ],
        });
    }
    return u && h
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  F(),
                  (0, r.jsx)("div", {
                      className: M.marginContainer,
                      children: (0, r.jsxs)(d.y5t, {
                          component: (0, r.jsx)(d.Heading, {
                              variant: "heading-md/semibold",
                              children: x.intl.string(x.t["9KeUbW"]),
                          }),
                          children: [
                              (0, r.jsx)(d.izJ, { className: M.divider }),
                              0 === Object.keys(s).length
                                  ? V()
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
        : (0, r.jsx)(d.$jN, { className: M.loading });
};
