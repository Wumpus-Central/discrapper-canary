n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(496929),
    h = n(37234),
    g = n(230711),
    _ = n(410030),
    x = n(454585),
    p = n(163684),
    E = n(178100),
    C = n(518638),
    f = n(725727),
    T = n(454982),
    N = n(197115),
    I = n(504983),
    S = n(703656),
    b = n(594174),
    v = n(580130),
    j = n(669079),
    A = n(74538),
    O = n(317941),
    R = n(981631),
    P = n(474936),
    D = n(388032),
    Z = n(426614);
function y(e) {
    let t,
        { outboundPromotion: n, code: r, addClaimedOutboundPromotionCode: a, disabled: o } = e,
        [c, u] = s.useState(!1),
        [m, h] = s.useState(!1),
        g = () => u((e) => !e),
        p = (0, _.ZP)(),
        f = (0, C.Pz)(n.id, p),
        N = null != r,
        I = (0, E.Z)(n, N);
    N && c
        ? (t = D.intl.format(D.t.pkxVx8, {
              endDate: I,
              onClickDetails: g
          }))
        : N && !c
          ? (t = D.intl.format(D.t['4sFeoa'], {
                endDate: I,
                onClickDetails: g
            }))
          : !N && c
            ? (t = D.intl.format(D.t['RBnE+v'], {
                  endDate: I,
                  onClickDetails: g
              }))
            : N ||
              c ||
              (t = D.intl.format(D.t['57+7Qk'], {
                  endDate: I,
                  onClickDetails: g
              }));
    let S = N ? D.intl.string(D.t['2cHUtr']) : D.intl.string(D.t.O13yh4),
        b = s.useCallback(() => h(!1), []),
        { outboundTitle: v, outboundTermsAndConditions: j } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(Z.skuCard, Z.promotionCard),
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.mainPromotionCardContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: Z.promotionCardLeftContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: Z.promotionIcon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: f,
                                            className: Z.promotionIconImage
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(d.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: v
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                className: Z.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.zxk, {
                                className: Z.promotionCardButton,
                                color: d.zxk.Colors.BRAND,
                                size: d.zxk.Sizes.SMALL,
                                onClick: () => h(!0),
                                disabled: !0 === o,
                                children: S
                            })
                        ]
                    }),
                    c &&
                        (0, i.jsx)(d.Text, {
                            className: Z.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.Z.parse(j, !1, { allowLinks: !0 })
                        })
                ]
            }),
            m &&
                (0, i.jsx)(d.u_l, {
                    renderModal: (e) =>
                        (0, i.jsx)(T.Z, {
                            ...e,
                            onClose: b,
                            onClaim: a,
                            code: r,
                            outboundPromotion: n
                        }),
                    onCloseRequest: b
                })
        ]
    });
}
let k = function () {
    let e = (0, c.Wu)([v.Z], () => v.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        r = (0, c.e7)([b.default], () => A.ZP.isPremiumExactly(b.default.getCurrentUser(), P.p9.TIER_2)),
        a = o().groupBy(t, (e) => (0, j.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [_, x] = s.useState(!1);
    s.useEffect(() => {
        u.Z.wait(() => {
            (0, m.Qv)().then(() => x(!0));
        });
    }, []);
    let { promotionsLoaded: E, activeOutboundPromotions: C, claimedEndedOutboundPromotions: T, claimedOutboundPromotionCodeMap: k, addClaimedOutboundPromotionCode: L } = (0, f.lG)(),
        B = C.length + T.length > 0,
        M =
            p.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: r
                }
            ).enabled && B;
    return _ && E
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === P.m8 && !e.consumed),
                          s = null !== (e = n.filter((e) => e.giftCodeBatchId === P.rX && !e.consumed)) && void 0 !== e ? e : [],
                          [a, c] = o().partition(s, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === P.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          u = M
                              ? (0, i.jsxs)('div', {
                                    className: Z.promoHeaderContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(d.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    children: B ? D.intl.string(D.t.wFsj3N) : void 0
                                                }),
                                                (0, i.jsx)(d.X6q, {
                                                    variant: 'text-sm/normal',
                                                    className: Z.promoDescription,
                                                    children: D.intl.format(D.t.G4fwxM, {
                                                        onClick: () => {
                                                            (0, h.xf)(), (0, S.uL)(R.Z5c.APPLICATION_STORE);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(N.Z, {
                                            showGradient: !0,
                                            className: Z.promoNitroButton,
                                            subscriptionTier: P.Si.TIER_2,
                                            buttonText: D.intl.string(D.t.mr4K7O)
                                        })
                                    ]
                                })
                              : (0, i.jsx)(d.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: B ? D.intl.string(D.t.wFsj3N) : void 0
                                });
                      return (0, i.jsx)(I.Z, {
                          className: Z.containerWithMargin,
                          isShown: M,
                          type: I.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, i.jsxs)(d.hjN, {
                              className: l()({ [Z.containerWithMargin]: !M }),
                              children: [
                                  u,
                                  B ? (0, i.jsx)(d.$i$, { className: Z.divider }) : null,
                                  T.map((e) => {
                                      let { code: t, promotion: n } = e;
                                      return (0, i.jsx)(
                                          y,
                                          {
                                              outboundPromotion: n,
                                              code: t,
                                              addClaimedOutboundPromotionCode: L,
                                              disabled: !r
                                          },
                                          n.id
                                      );
                                  }),
                                  C.map((e) =>
                                      (0, i.jsx)(
                                          y,
                                          {
                                              outboundPromotion: e,
                                              code: k[e.id],
                                              addClaimedOutboundPromotionCode: L,
                                              disabled: !r
                                          },
                                          e.id
                                      )
                                  ),
                                  null != t
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: Z.skuCard,
                                                skuId: t.skuId,
                                                subscriptionPlanId: t.subscriptionPlanId,
                                                entitlements: [t],
                                                giftCodeBatchId: P.m8
                                            },
                                            (0, j.Bg)(t.skuId, t.subscriptionPlanId)
                                        )
                                      : null,
                                  a.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: Z.skuCard,
                                                skuId: a[0].skuId,
                                                subscriptionPlanId: a[0].subscriptionPlanId,
                                                entitlements: a,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, j.Bg)(a[0].skuId, a[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: Z.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, j.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, i.jsx)(d.hjN, {
                      className: Z.containerWithMargin,
                      children: (0, i.jsxs)(d.y5t, {
                          component: (0, i.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              children: D.intl.string(D.t['9KeUbW'])
                          }),
                          children: [
                              (0, i.jsx)(d.$i$, { className: Z.divider }),
                              0 === Object.keys(a).length
                                  ? (0, i.jsxs)('div', {
                                        className: Z.emptyState,
                                        children: [
                                            (0, i.jsx)('div', { className: Z.emptyStateImage }),
                                            (0, i.jsx)(d.H, {
                                                className: Z.emptyStateHeader,
                                                children: D.intl.string(D.t.B1qgZm)
                                            }),
                                            (0, i.jsx)('p', {
                                                className: Z.emptyStateSubtext,
                                                children: D.intl.format(D.t.HezvJy, {
                                                    onClick: function () {
                                                        g.Z.open(R.oAB.PREMIUM);
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                  : o()
                                        .keys(a)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: s } = (0, j.Z0)(e);
                                            return (0, i.jsx)(
                                                O.Z,
                                                {
                                                    className: Z.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: a[e],
                                                    giftStyle: s
                                                },
                                                e
                                            );
                                        })
                          ]
                      })
                  })
              ]
          })
        : (0, i.jsx)(d.$jN, { className: Z.loading });
};
