n.d(t, { Z: () => Z }), n(388685);
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
    p = n(410030),
    _ = n(454585),
    m = n(163684),
    h = n(178100),
    g = n(518638),
    E = n(725727),
    b = n(454982),
    y = n(767714),
    O = n(504983),
    v = n(703656),
    S = n(594174),
    I = n(580130),
    T = n(669079),
    C = n(74538),
    A = n(313789),
    N = n(317941),
    P = n(342386),
    R = n(518596),
    w = n(981631),
    D = n(474936),
    x = n(388032),
    L = n(785911);
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
        [c, d] = i.useState(!1),
        [f, m] = i.useState(!1),
        E = () => d((e) => !e),
        y = (0, p.ZP)(),
        O = (0, g.Pz)(n.id, y),
        v = null != a,
        S = (0, h.Z)(n, v);
    v && c
        ? (t = x.intl.format(x.t.pkxVx6, {
              endDate: S,
              onClickDetails: E,
          }))
        : v && !c
          ? (t = x.intl.format(x.t["4sFeob"], {
                endDate: S,
                onClickDetails: E,
            }))
          : !v && c
            ? (t = x.intl.format(x.t["RBnE+l"], {
                  endDate: S,
                  onClickDetails: E,
              }))
            : v ||
              c ||
              (t = x.intl.format(x.t["57+7Qn"], {
                  endDate: S,
                  onClickDetails: E,
              }));
    let I = v ? x.intl.string(x.t["2cHUti"]) : x.intl.string(x.t.O13yhz),
        T = i.useCallback(() => m(!1), []),
        { outboundTitle: C, outboundTermsAndConditions: A } = n;
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
                                            (0, r.jsx)(u.Heading, {
                                                variant: "heading-md/semibold",
                                                children: C,
                                            }),
                                            (0, r.jsx)(u.Text, {
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
                                (0, r.jsx)(u.Button, {
                                    text: I,
                                    onClick: () => m(!0),
                                    disabled: l,
                                    size: "sm",
                                }),
                        ],
                    }),
                    c &&
                        (0, r.jsx)(u.Text, {
                            className: L.promotionLegalese,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.Z.parse(A, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            f &&
                (0, r.jsx)(u.u_l, {
                    renderModal: (e) =>
                        (0, r.jsx)(
                            b.Z,
                            U(M({}, e), {
                                onClose: T,
                                onClaim: s,
                                code: a,
                                outboundPromotion: n,
                            }),
                        ),
                    onCloseRequest: T,
                }),
        ],
    });
}
let Z = function (e) {
    let { inOldSettings: t = !1 } = e,
        n = (0, c.Wu)([I.Z], () => I.Z.getGiftable()),
        [a, s] = l().partition(n, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        p = (0, c.e7)([S.default], () => C.ZP.isPremiumExactly(S.default.getCurrentUser(), D.PremiumTypes.TIER_2)),
        _ = l().groupBy(a, (e) => (0, T.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [h, g] = i.useState(!1);
    i.useEffect(() => {
        d.Z.wait(() => {
            (0, f.Qv)().then(() => g(!0));
        });
    }, []);
    let {
            promotionsLoaded: b,
            activeOutboundPromotions: j,
            claimedEndedOutboundPromotions: M,
            claimedOutboundPromotionCodeMap: k,
            addClaimedOutboundPromotionCode: U,
        } = (0, E.lG)(),
        Z = j.length + M.length > 0,
        F =
            m.g.useExperiment(
                { location: "EntitlementGifts" },
                {
                    autoTrackExposure: !1,
                    disable: p,
                },
            ).enabled && Z;
    function B() {
        (0, R.openUserSettings)(A.n.NITRO_PANEL, { section: w.oAB.PREMIUM });
    }
    function V() {
        var e;
        let n = s.find((e) => e.giftCodeBatchId === D.m8 && !e.consumed),
            i = null != (e = s.filter((e) => e.giftCodeBatchId === D.rX && !e.consumed)) ? e : [],
            [a, c] = l().partition(i, (e) => {
                let { subscriptionPlanId: t } = e;
                return t === D.Xh.PREMIUM_YEAR_TIER_2;
            }),
            d = (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: Z ? x.intl.string(x.t.wFsj3B) : void 0,
            }),
            f = F
                ? (0, r.jsxs)("div", {
                      className: L.promoHeaderContainer,
                      children: [
                          (0, r.jsx)(u.SrA, {
                              size: "md",
                              color: u.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: L.premiumIcon,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-md/normal",
                              className: L.promoDescription,
                              children: x.intl.format(x.t.G4fwxK, {
                                  onClick: () => {
                                      (0, P.default)(), (0, v.uL)(w.Z5c.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, r.jsx)(y.Z, {
                              showGradient: !0,
                              className: L.promoNitroButton,
                              subscriptionTier: D.Si.TIER_2,
                              textOptions: { textOverride: x.intl.string(x.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: t ? L.marginContainer : void 0,
            children: [
                d,
                Z ? (0, r.jsx)(u.izJ, { className: L.divider }) : null,
                (0, r.jsx)(O.Z, {
                    className: L.gradientContainer,
                    isShown: F,
                    type: O.Y.PREMIUM,
                    hasBackground: !0,
                    children: (0, r.jsxs)("div", {
                        className: o()({ [L.marginContainer]: !F && t }),
                        children: [
                            f,
                            M.map((e) => {
                                let { code: t, promotion: n } = e;
                                return (0, r.jsx)(
                                    G,
                                    {
                                        outboundPromotion: n,
                                        code: t,
                                        addClaimedOutboundPromotionCode: U,
                                        disabled: !p,
                                    },
                                    n.id,
                                );
                            }),
                            j.map((e) =>
                                (0, r.jsx)(
                                    G,
                                    {
                                        outboundPromotion: e,
                                        code: k[e.id],
                                        addClaimedOutboundPromotionCode: U,
                                        disabled: !p,
                                    },
                                    e.id,
                                ),
                            ),
                            null != n
                                ? (0, r.jsx)(
                                      N.Z,
                                      {
                                          className: L.skuCard,
                                          skuId: n.skuId,
                                          subscriptionPlanId: n.subscriptionPlanId,
                                          entitlements: [n],
                                          giftCodeBatchId: D.m8,
                                      },
                                      (0, T.Bg)(n.skuId, n.subscriptionPlanId),
                                  )
                                : null,
                            a.length > 0
                                ? (0, r.jsx)(
                                      N.Z,
                                      {
                                          className: L.skuCard,
                                          skuId: a[0].skuId,
                                          subscriptionPlanId: a[0].subscriptionPlanId,
                                          entitlements: a,
                                          giftCodeBatchId: D.rX,
                                      },
                                      (0, T.Bg)(a[0].skuId, a[0].subscriptionPlanId),
                                  )
                                : null,
                            c.length > 0
                                ? (0, r.jsx)(
                                      N.Z,
                                      {
                                          className: L.skuCard,
                                          skuId: c[0].skuId,
                                          subscriptionPlanId: c[0].subscriptionPlanId,
                                          entitlements: c,
                                          giftCodeBatchId: D.rX,
                                      },
                                      (0, T.Bg)(c[0].skuId, c[0].subscriptionPlanId),
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
            className: L.emptyState,
            children: [
                (0, r.jsx)("div", { className: L.emptyStateImage }),
                (0, r.jsx)(u.H, {
                    className: L.emptyStateHeader,
                    children: x.intl.string(x.t.B1qgZn),
                }),
                (0, r.jsx)("p", {
                    className: L.emptyStateSubtext,
                    children: x.intl.format(x.t.HezvJ8, { onClick: B }),
                }),
            ],
        });
    }
    return h && b
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  V(),
                  (0, r.jsx)("div", {
                      className: t ? L.marginContainer : void 0,
                      children: (0, r.jsxs)(u.y5t, {
                          component: (0, r.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              children: x.intl.string(x.t["9KeUbY"]),
                          }),
                          children: [
                              (0, r.jsx)(u.izJ, { className: L.divider }),
                              0 === Object.keys(_).length
                                  ? H()
                                  : l()
                                        .keys(_)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, T.Z0)(e);
                                            return (0, r.jsx)(
                                                N.Z,
                                                {
                                                    className: L.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: _[e],
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
        : (0, r.jsx)(u.$jN, { className: L.loading });
};
