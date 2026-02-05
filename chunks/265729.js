n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(735438),
    o = n.n(l),
    c = n(311907),
    d = n(397927),
    u = n(73153),
    _ = n(339048),
    m = n(736653),
    A = n(46054),
    g = n(728364),
    E = n(807055),
    h = n(264779),
    p = n(35587),
    C = n(982311),
    x = n(465794),
    T = n(212168),
    I = n(976860),
    S = n(287809),
    f = n(469778),
    N = n(45938),
    b = n(927578),
    R = n(780964),
    v = n(411121),
    O = n(12901),
    j = n(840065),
    P = n(652215),
    y = n(788868),
    L = n(985018),
    D = n(492489);
function M(e) {
    let t,
        { outboundPromotion: n, code: r, addClaimedOutboundPromotionCode: l, disabled: o } = e,
        [c, u] = s.useState(!1),
        [_, g] = s.useState(!1),
        p = () => u((e) => !e),
        x = (0, m.Ay)(),
        T = (0, h.WD)(n.id, x),
        I = null != r,
        S = (0, E.A)(n, I);
    I && c
        ? (t = L.intl.format(L.t.pkxVx6, { endDate: S, onClickDetails: p }))
        : I && !c
          ? (t = L.intl.format(L.t["4sFeob"], { endDate: S, onClickDetails: p }))
          : !I && c
            ? (t = L.intl.format(L.t["RBnE+l"], { endDate: S, onClickDetails: p }))
            : I || c || (t = L.intl.format(L.t["57+7Qn"], { endDate: S, onClickDetails: p }));
    let f = I ? L.intl.string(L.t["2cHUti"]) : L.intl.string(L.t.O13yhz),
        N = s.useCallback(() => g(!1), []),
        { outboundTitle: b, outboundTermsAndConditions: R } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(D.uI, D.AX),
                children: [
                    (0, i.jsxs)("div", {
                        className: D.gE,
                        children: [
                            (0, i.jsxs)("div", {
                                className: D.At,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: D.$G,
                                        children: (0, i.jsx)("img", { alt: "", src: T, className: D.IJ }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(d.Heading, { variant: "heading-md/semibold", children: b }),
                                            (0, i.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: D.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !o && (0, i.jsx)(d.Button, { text: f, onClick: () => g(!0), disabled: o, size: "sm" }),
                        ],
                    }),
                    c &&
                        (0, i.jsx)(d.Text, {
                            className: D.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: A.A.parse(R, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            _ &&
                (0, i.jsx)(d.aFV, {
                    renderModal: (e) =>
                        (0, i.jsx)(C.A, { ...e, onClose: N, onClaim: l, code: r, outboundPromotion: n }),
                    onCloseRequest: N,
                }),
        ],
    });
}
let G = function (e) {
    let { inOldSettings: t = !1 } = e,
        n = (0, c.yK)([f.A], () => f.A.getGiftable()),
        [r, l] = o().partition(n, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        m = (0, c.bG)([S.default], () => b.Ay.isPremiumExactly(S.default.getCurrentUser(), y.PremiumTypes.TIER_2)),
        A = o().groupBy(r, (e) => (0, N.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [E, h] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, _.XJ)().then(() => h(!0));
        });
    }, []);
    let {
            promotionsLoaded: C,
            activeOutboundPromotions: G,
            claimedEndedOutboundPromotions: U,
            claimedOutboundPromotionCodeMap: k,
            addClaimedOutboundPromotionCode: B,
        } = (0, p.y7)(),
        w = G.length + U.length > 0,
        H = g.m.useExperiment({ location: "EntitlementGifts" }, { autoTrackExposure: !1, disable: m }).enabled && w;
    return E && C
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      let e = l.find((e) => e.giftCodeBatchId === y.FB && !e.consumed),
                          n = l.filter((e) => e.giftCodeBatchId === y.Bu && !e.consumed) ?? [],
                          [s, r] = o().partition(n, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === y.gD.PREMIUM_YEAR_TIER_2;
                          }),
                          c = (0, i.jsx)(d.Heading, {
                              variant: "heading-md/semibold",
                              children: w ? L.intl.string(L.t.wFsj3B) : void 0,
                          }),
                          u = H
                              ? (0, i.jsxs)("div", {
                                    className: D.uo,
                                    children: [
                                        (0, i.jsx)(d.tvc, {
                                            size: "md",
                                            color: d.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                            className: D.PC,
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            className: D.Qw,
                                            children: L.intl.format(L.t.G4fwxK, {
                                                onClick: () => {
                                                    (0, O.default)(), (0, I.pX)(P.BVt.APPLICATION_STORE);
                                                },
                                            }),
                                        }),
                                        (0, i.jsx)(x.A, {
                                            showGradient: !0,
                                            className: D.aA,
                                            subscriptionTier: y.pe.TIER_2,
                                            textOptions: { textOverride: L.intl.string(L.t.mr4K7D) },
                                        }),
                                    ],
                                })
                              : null;
                      return (0, i.jsxs)("div", {
                          className: t ? D.sW : void 0,
                          children: [
                              c,
                              w ? (0, i.jsx)(d.cGx, { className: D.yF }) : null,
                              (0, i.jsx)(T.A, {
                                  className: D.Yj,
                                  isShown: H,
                                  type: T.i.PREMIUM,
                                  hasBackground: !0,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [D.sW]: !H }),
                                      children: [
                                          u,
                                          U.map((e) => {
                                              let { code: t, promotion: n } = e;
                                              return (0, i.jsx)(
                                                  M,
                                                  {
                                                      outboundPromotion: n,
                                                      code: t,
                                                      addClaimedOutboundPromotionCode: B,
                                                      disabled: !m,
                                                  },
                                                  n.id,
                                              );
                                          }),
                                          G.map((e) =>
                                              (0, i.jsx)(
                                                  M,
                                                  {
                                                      outboundPromotion: e,
                                                      code: k[e.id],
                                                      addClaimedOutboundPromotionCode: B,
                                                      disabled: !m,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          null != e
                                              ? (0, i.jsx)(
                                                    v.A,
                                                    {
                                                        className: D.uI,
                                                        skuId: e.skuId,
                                                        subscriptionPlanId: e.subscriptionPlanId,
                                                        entitlements: [e],
                                                        giftCodeBatchId: y.FB,
                                                    },
                                                    (0, N.Kx)(e.skuId, e.subscriptionPlanId),
                                                )
                                              : null,
                                          s.length > 0
                                              ? (0, i.jsx)(
                                                    v.A,
                                                    {
                                                        className: D.uI,
                                                        skuId: s[0].skuId,
                                                        subscriptionPlanId: s[0].subscriptionPlanId,
                                                        entitlements: s,
                                                        giftCodeBatchId: y.Bu,
                                                    },
                                                    (0, N.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                )
                                              : null,
                                          r.length > 0
                                              ? (0, i.jsx)(
                                                    v.A,
                                                    {
                                                        className: D.uI,
                                                        skuId: r[0].skuId,
                                                        subscriptionPlanId: r[0].subscriptionPlanId,
                                                        entitlements: r,
                                                        giftCodeBatchId: y.Bu,
                                                    },
                                                    (0, N.Kx)(r[0].skuId, r[0].subscriptionPlanId),
                                                )
                                              : null,
                                      ],
                                  }),
                              }),
                          ],
                      });
                  })(),
                  (0, i.jsx)("div", {
                      className: D.sW,
                      children: (0, i.jsxs)(d.Fmo, {
                          component: (0, i.jsx)(d.Heading, {
                              variant: "heading-md/semibold",
                              children: L.intl.string(L.t["9KeUbY"]),
                          }),
                          children: [
                              (0, i.jsx)(d.cGx, { className: D.yF }),
                              0 === Object.keys(A).length
                                  ? (0, i.jsxs)("div", {
                                        className: D.p$,
                                        children: [
                                            (0, i.jsx)("div", { className: D.QT }),
                                            (0, i.jsx)(d.H, { className: D.ks, children: L.intl.string(L.t.B1qgZn) }),
                                            (0, i.jsx)("p", {
                                                className: D.WO,
                                                children: L.intl.format(L.t.HezvJ8, {
                                                    onClick: function () {
                                                        (0, j.openUserSettings)(R.X.NITRO_PANEL, {
                                                            section: P.nc_.PREMIUM,
                                                        });
                                                    },
                                                }),
                                            }),
                                        ],
                                    })
                                  : o()
                                        .keys(A)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: s } = (0, N.X6)(e);
                                            return (0, i.jsx)(
                                                v.A,
                                                {
                                                    className: D.uI,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: A[e],
                                                    giftStyle: s,
                                                },
                                                e,
                                            );
                                        }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, i.jsx)(d.y$y, { className: D.Lq });
};
