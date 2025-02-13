n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(496929),
    m = n(37234),
    g = n(230711),
    x = n(410030),
    _ = n(454585),
    p = n(163684),
    E = n(178100),
    C = n(518638),
    N = n(725727),
    f = n(454982),
    I = n(197115),
    T = n(504983),
    S = n(703656),
    j = n(594174),
    v = n(580130),
    b = n(669079),
    A = n(74538),
    O = n(317941),
    R = n(981631),
    D = n(474936),
    P = n(388032),
    y = n(971983);
function Z(e) {
    let t,
        { outboundPromotion: n, code: l, addClaimedOutboundPromotionCode: a, disabled: o } = e,
        [c, u] = s.useState(!1),
        [h, m] = s.useState(!1),
        g = () => u((e) => !e),
        p = (0, x.ZP)(),
        N = (0, C.Pz)(n.id, p),
        I = null != l,
        T = (0, E.Z)(n, I);
    I && c
        ? (t = P.intl.format(P.t.pkxVx8, {
              endDate: T,
              onClickDetails: g
          }))
        : I && !c
          ? (t = P.intl.format(P.t['4sFeoa'], {
                endDate: T,
                onClickDetails: g
            }))
          : !I && c
            ? (t = P.intl.format(P.t['RBnE+v'], {
                  endDate: T,
                  onClickDetails: g
              }))
            : I ||
              c ||
              (t = P.intl.format(P.t['57+7Qk'], {
                  endDate: T,
                  onClickDetails: g
              }));
    let S = I ? P.intl.string(P.t['2cHUtr']) : P.intl.string(P.t.O13yh4),
        j = s.useCallback(() => m(!1), []),
        { outboundTitle: v, outboundTermsAndConditions: b } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: r()(y.skuCard, y.promotionCard),
                children: [
                    (0, i.jsxs)('div', {
                        className: y.mainPromotionCardContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: y.promotionCardLeftContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: y.promotionIcon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: N,
                                            className: y.promotionIconImage
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
                                                className: y.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.zxk, {
                                className: y.promotionCardButton,
                                color: d.zxk.Colors.BRAND,
                                size: d.zxk.Sizes.SMALL,
                                onClick: () => m(!0),
                                disabled: !0 === o,
                                children: S
                            })
                        ]
                    }),
                    c &&
                        (0, i.jsx)(d.Text, {
                            className: y.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: _.Z.parse(b, !1, { allowLinks: !0 })
                        })
                ]
            }),
            h &&
                (0, i.jsx)(d.u_l, {
                    renderModal: (e) =>
                        (0, i.jsx)(f.Z, {
                            ...e,
                            onClose: j,
                            onClaim: a,
                            code: l,
                            outboundPromotion: n
                        }),
                    onCloseRequest: j
                })
        ]
    });
}
let L = function () {
    let e = (0, c.Wu)([v.Z], () => v.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        l = (0, c.e7)([j.default], () => A.ZP.isPremiumExactly(j.default.getCurrentUser(), D.p9.TIER_2)),
        a = o().groupBy(t, (e) => (0, b.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [x, _] = s.useState(!1);
    s.useEffect(() => {
        u.Z.wait(() => {
            (0, h.Qv)().then(() => _(!0));
        });
    }, []);
    let { promotionsLoaded: E, activeOutboundPromotions: C, claimedEndedOutboundPromotions: f, claimedOutboundPromotionCodeMap: L, addClaimedOutboundPromotionCode: k } = (0, N.lG)(),
        B = C.length + f.length > 0,
        M =
            p.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: l
                }
            ).enabled && B;
    return x && E
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === D.m8 && !e.consumed),
                          s = null !== (e = n.filter((e) => e.giftCodeBatchId === D.rX && !e.consumed)) && void 0 !== e ? e : [],
                          [a, c] = o().partition(s, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === D.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          u = M
                              ? (0, i.jsxs)('div', {
                                    className: y.promoHeaderContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(d.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    children: B ? P.intl.string(P.t.wFsj3N) : void 0
                                                }),
                                                (0, i.jsx)(d.X6q, {
                                                    variant: 'text-sm/normal',
                                                    className: y.promoDescription,
                                                    children: P.intl.format(P.t.G4fwxM, {
                                                        onClick: () => {
                                                            (0, m.xf)(), (0, S.uL)(R.Z5c.APPLICATION_STORE);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            showGradient: !0,
                                            className: y.promoNitroButton,
                                            subscriptionTier: D.Si.TIER_2,
                                            buttonText: P.intl.string(P.t.mr4K7O)
                                        })
                                    ]
                                })
                              : (0, i.jsx)(d.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: B ? P.intl.string(P.t.wFsj3N) : void 0
                                });
                      return (0, i.jsx)(T.Z, {
                          className: y.containerWithMargin,
                          isShown: M,
                          type: T.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, i.jsxs)(d.hjN, {
                              className: r()({ [y.containerWithMargin]: !M }),
                              children: [
                                  u,
                                  B ? (0, i.jsx)(d.$i$, { className: y.divider }) : null,
                                  f.map((e) => {
                                      let { code: t, promotion: n } = e;
                                      return (0, i.jsx)(
                                          Z,
                                          {
                                              outboundPromotion: n,
                                              code: t,
                                              addClaimedOutboundPromotionCode: k,
                                              disabled: !l
                                          },
                                          n.id
                                      );
                                  }),
                                  C.map((e) =>
                                      (0, i.jsx)(
                                          Z,
                                          {
                                              outboundPromotion: e,
                                              code: L[e.id],
                                              addClaimedOutboundPromotionCode: k,
                                              disabled: !l
                                          },
                                          e.id
                                      )
                                  ),
                                  null != t
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: y.skuCard,
                                                skuId: t.skuId,
                                                subscriptionPlanId: t.subscriptionPlanId,
                                                entitlements: [t],
                                                giftCodeBatchId: D.m8
                                            },
                                            (0, b.Bg)(t.skuId, t.subscriptionPlanId)
                                        )
                                      : null,
                                  a.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: y.skuCard,
                                                skuId: a[0].skuId,
                                                subscriptionPlanId: a[0].subscriptionPlanId,
                                                entitlements: a,
                                                giftCodeBatchId: D.rX
                                            },
                                            (0, b.Bg)(a[0].skuId, a[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: y.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: D.rX
                                            },
                                            (0, b.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, i.jsx)(d.hjN, {
                      className: y.containerWithMargin,
                      children: (0, i.jsxs)(d.y5t, {
                          component: (0, i.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              children: P.intl.string(P.t['9KeUbW'])
                          }),
                          children: [
                              (0, i.jsx)(d.$i$, { className: y.divider }),
                              0 === Object.keys(a).length
                                  ? (0, i.jsxs)('div', {
                                        className: y.emptyState,
                                        children: [
                                            (0, i.jsx)('div', { className: y.emptyStateImage }),
                                            (0, i.jsx)(d.H, {
                                                className: y.emptyStateHeader,
                                                children: P.intl.string(P.t.B1qgZm)
                                            }),
                                            (0, i.jsx)('p', {
                                                className: y.emptyStateSubtext,
                                                children: P.intl.format(P.t.HezvJy, {
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
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: s } = (0, b.Z0)(e);
                                            return (0, i.jsx)(
                                                O.Z,
                                                {
                                                    className: y.skuCard,
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
        : (0, i.jsx)(d.$jN, { className: y.loading });
};
