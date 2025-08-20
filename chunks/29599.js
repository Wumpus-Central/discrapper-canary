n.d(t, { Z: () => B }), n(388685);
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
    p = n(37234),
    h = n(230711),
    m = n(410030),
    g = n(454585),
    E = n(163684),
    b = n(178100),
    y = n(518638),
    O = n(725727),
    v = n(454982),
    I = n(767714),
    T = n(504983),
    S = n(703656),
    A = n(594174),
    C = n(580130),
    N = n(669079),
    R = n(74538),
    P = n(317941),
    w = n(981631),
    D = n(474936),
    x = n(388032),
    L = n(666707);
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
function M(e) {
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
function k(e, t) {
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
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let t,
        { outboundPromotion: n, code: a, addClaimedOutboundPromotionCode: s, disabled: l } = e,
        [c, f] = i.useState(!1),
        [_, p] = i.useState(!1),
        h = () => f((e) => !e),
        E = (0, m.ZP)(),
        O = (0, y.Pz)(n.id, E),
        I = null != a,
        T = (0, b.Z)(n, I);
    I && c
        ? (t = x.intl.format(x.t.pkxVx8, {
              endDate: T,
              onClickDetails: h,
          }))
        : I && !c
          ? (t = x.intl.format(x.t["4sFeoa"], {
                endDate: T,
                onClickDetails: h,
            }))
          : !I && c
            ? (t = x.intl.format(x.t["RBnE+v"], {
                  endDate: T,
                  onClickDetails: h,
              }))
            : I ||
              c ||
              (t = x.intl.format(x.t["57+7Qk"], {
                  endDate: T,
                  onClickDetails: h,
              }));
    let S = I ? x.intl.string(x.t["2cHUtr"]) : x.intl.string(x.t.O13yh4),
        A = i.useCallback(() => p(!1), []),
        { outboundTitle: C, outboundTermsAndConditions: N } = n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(L.skuCard, L.promotionCard),
                children: [
                    (0, r.jsxs)("div", {
                        className: L.mainPromotionCardContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.promotionCardLeftContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: L.promotionIcon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: O,
                                            className: L.promotionIconImage,
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(d.X6q, {
                                                variant: "heading-md/semibold",
                                                children: C,
                                            }),
                                            (0, r.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: L.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !l &&
                                (0, r.jsx)(u.zx, {
                                    className: L.promotionCardButton,
                                    color: u.zx.Colors.BRAND,
                                    size: u.zx.Sizes.SMALL,
                                    onClick: () => p(!0),
                                    disabled: l,
                                    children: S,
                                }),
                        ],
                    }),
                    c &&
                        (0, r.jsx)(d.Text, {
                            className: L.promotionLegalese,
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: g.Z.parse(N, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            _ &&
                (0, r.jsx)(d.u_l, {
                    renderModal: (e) =>
                        (0, r.jsx)(
                            v.Z,
                            U(M({}, e), {
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
let B = function () {
    let e = (0, c.Wu)([C.Z], () => C.Z.getGiftable()),
        [t, n] = l().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        a = (0, c.e7)([A.default], () => R.ZP.isPremiumExactly(A.default.getCurrentUser(), D.p9.TIER_2)),
        s = l().groupBy(t, (e) => (0, N.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [u, m] = i.useState(!1);
    i.useEffect(() => {
        f.Z.wait(() => {
            (0, _.Qv)().then(() => m(!0));
        });
    }, []);
    let {
            promotionsLoaded: g,
            activeOutboundPromotions: b,
            claimedEndedOutboundPromotions: y,
            claimedOutboundPromotionCodeMap: v,
            addClaimedOutboundPromotionCode: j,
        } = (0, O.lG)(),
        M = b.length + y.length > 0,
        k =
            E.g.useExperiment(
                { location: "EntitlementGifts" },
                {
                    autoTrackExposure: !1,
                    disable: a,
                },
            ).enabled && M;
    function U() {
        h.Z.open(w.oAB.PREMIUM);
    }
    function B() {
        var e;
        let t = n.find((e) => e.giftCodeBatchId === D.m8 && !e.consumed),
            i = null != (e = n.filter((e) => e.giftCodeBatchId === D.rX && !e.consumed)) ? e : [],
            [s, c] = l().partition(i, (e) => {
                let { subscriptionPlanId: t } = e;
                return t === D.Xh.PREMIUM_YEAR_TIER_2;
            }),
            u = (0, r.jsx)(d.X6q, {
                variant: "heading-md/semibold",
                children: M ? x.intl.string(x.t.wFsj3N) : void 0,
            }),
            f = k
                ? (0, r.jsxs)("div", {
                      className: L.promoHeaderContainer,
                      children: [
                          (0, r.jsx)(d.SrA, {
                              size: "md",
                              color: d.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: L.premiumIcon,
                          }),
                          (0, r.jsx)(d.Text, {
                              variant: "text-md/normal",
                              className: L.promoDescription,
                              children: x.intl.format(x.t.G4fwxM, {
                                  onClick: () => {
                                      (0, p.xf)(), (0, S.uL)(w.Z5c.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, r.jsx)(I.Z, {
                              showGradient: !0,
                              className: L.promoNitroButton,
                              subscriptionTier: D.Si.TIER_2,
                              textOptions: { textOverride: x.intl.string(x.t.mr4K7O) },
                          }),
                      ],
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: L.marginContainer,
            children: [
                u,
                M ? (0, r.jsx)(d.$i$, { className: L.divider }) : null,
                (0, r.jsx)(T.Z, {
                    className: L.gradientContainer,
                    isShown: k,
                    type: T.Y.PREMIUM,
                    hasBackground: !0,
                    children: (0, r.jsxs)(d.hjN, {
                        className: o()({ [L.marginContainer]: !k }),
                        children: [
                            f,
                            y.map((e) => {
                                let { code: t, promotion: n } = e;
                                return (0, r.jsx)(
                                    G,
                                    {
                                        outboundPromotion: n,
                                        code: t,
                                        addClaimedOutboundPromotionCode: j,
                                        disabled: !a,
                                    },
                                    n.id,
                                );
                            }),
                            b.map((e) =>
                                (0, r.jsx)(
                                    G,
                                    {
                                        outboundPromotion: e,
                                        code: v[e.id],
                                        addClaimedOutboundPromotionCode: j,
                                        disabled: !a,
                                    },
                                    e.id,
                                ),
                            ),
                            null != t
                                ? (0, r.jsx)(
                                      P.Z,
                                      {
                                          className: L.skuCard,
                                          skuId: t.skuId,
                                          subscriptionPlanId: t.subscriptionPlanId,
                                          entitlements: [t],
                                          giftCodeBatchId: D.m8,
                                      },
                                      (0, N.Bg)(t.skuId, t.subscriptionPlanId),
                                  )
                                : null,
                            s.length > 0
                                ? (0, r.jsx)(
                                      P.Z,
                                      {
                                          className: L.skuCard,
                                          skuId: s[0].skuId,
                                          subscriptionPlanId: s[0].subscriptionPlanId,
                                          entitlements: s,
                                          giftCodeBatchId: D.rX,
                                      },
                                      (0, N.Bg)(s[0].skuId, s[0].subscriptionPlanId),
                                  )
                                : null,
                            c.length > 0
                                ? (0, r.jsx)(
                                      P.Z,
                                      {
                                          className: L.skuCard,
                                          skuId: c[0].skuId,
                                          subscriptionPlanId: c[0].subscriptionPlanId,
                                          entitlements: c,
                                          giftCodeBatchId: D.rX,
                                      },
                                      (0, N.Bg)(c[0].skuId, c[0].subscriptionPlanId),
                                  )
                                : null,
                        ],
                    }),
                }),
            ],
        });
    }
    function Z() {
        return (0, r.jsxs)("div", {
            className: L.emptyState,
            children: [
                (0, r.jsx)("div", { className: L.emptyStateImage }),
                (0, r.jsx)(d.H, {
                    className: L.emptyStateHeader,
                    children: x.intl.string(x.t.B1qgZm),
                }),
                (0, r.jsx)("p", {
                    className: L.emptyStateSubtext,
                    children: x.intl.format(x.t.HezvJy, { onClick: U }),
                }),
            ],
        });
    }
    return u && g
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  B(),
                  (0, r.jsx)(d.hjN, {
                      className: L.marginContainer,
                      children: (0, r.jsxs)(d.y5t, {
                          component: (0, r.jsx)(d.X6q, {
                              variant: "heading-md/semibold",
                              children: x.intl.string(x.t["9KeUbW"]),
                          }),
                          children: [
                              (0, r.jsx)(d.$i$, { className: L.divider }),
                              0 === Object.keys(s).length
                                  ? Z()
                                  : l()
                                        .keys(s)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, N.Z0)(e);
                                            return (0, r.jsx)(
                                                P.Z,
                                                {
                                                    className: L.skuCard,
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
        : (0, r.jsx)(d.$jN, { className: L.loading });
};
