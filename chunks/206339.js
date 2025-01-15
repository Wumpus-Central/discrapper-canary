n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(496929),
    g = n(37234),
    h = n(230711),
    p = n(410030),
    x = n(454585),
    f = n(163684),
    _ = n(178100),
    E = n(518638),
    C = n(725727),
    T = n(454982),
    S = n(197115),
    b = n(504983),
    I = n(703656),
    N = n(594174),
    v = n(580130),
    A = n(669079),
    j = n(74538),
    O = n(317941),
    R = n(981631),
    P = n(474936),
    y = n(388032),
    B = n(132234);
function D(e) {
    let t,
        { outboundPromotion: n, code: s, addClaimedOutboundPromotionCode: l, disabled: o } = e,
        [c, u] = r.useState(!1),
        [m, g] = r.useState(!1),
        h = () => u((e) => !e),
        f = (0, p.ZP)(),
        C = (0, E.Pz)(n.id, f),
        S = null != s,
        b = (0, _.Z)(n, S);
    S && c
        ? (t = y.intl.format(y.t.pkxVx8, {
              endDate: b,
              onClickDetails: h
          }))
        : S && !c
          ? (t = y.intl.format(y.t['4sFeoa'], {
                endDate: b,
                onClickDetails: h
            }))
          : !S && c
            ? (t = y.intl.format(y.t['RBnE+v'], {
                  endDate: b,
                  onClickDetails: h
              }))
            : !S &&
              !c &&
              (t = y.intl.format(y.t['57+7Qk'], {
                  endDate: b,
                  onClickDetails: h
              }));
    let I = S ? y.intl.string(y.t['2cHUtr']) : y.intl.string(y.t.O13yh4),
        N = r.useCallback(() => g(!1), []),
        { outboundTitle: v, outboundTermsAndConditions: A } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: a()(B.skuCard, B.promotionCard),
                children: [
                    (0, i.jsxs)('div', {
                        className: B.mainPromotionCardContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: B.promotionCardLeftContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: B.promotionIcon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: C,
                                            className: B.promotionIconImage
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(d.Heading, {
                                                variant: 'heading-md/semibold',
                                                children: v
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                className: B.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.Button, {
                                className: B.promotionCardButton,
                                color: d.Button.Colors.BRAND,
                                size: d.Button.Sizes.SMALL,
                                onClick: () => g(!0),
                                disabled: !0 === o,
                                children: I
                            })
                        ]
                    }),
                    c &&
                        (0, i.jsx)(d.Text, {
                            className: B.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.Z.parse(A, !1, { allowLinks: !0 })
                        })
                ]
            }),
            m &&
                (0, i.jsx)(d.Modal, {
                    renderModal: (e) =>
                        (0, i.jsx)(T.Z, {
                            ...e,
                            onClose: N,
                            onClaim: l,
                            code: s,
                            outboundPromotion: n
                        }),
                    onCloseRequest: N
                })
        ]
    });
}
t.Z = function () {
    let e = (0, c.Wu)([v.Z], () => v.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = (0, c.e7)([N.default], () => j.ZP.isPremiumExactly(N.default.getCurrentUser(), P.p9.TIER_2)),
        l = o().groupBy(t, (e) => (0, A.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [p, x] = r.useState(!1);
    r.useEffect(() => {
        u.Z.wait(() => {
            (0, m.Qv)().then(() => x(!0));
        });
    }, []);
    let { promotionsLoaded: _, activeOutboundPromotions: E, claimedEndedOutboundPromotions: T, claimedOutboundPromotionCodeMap: Z, addClaimedOutboundPromotionCode: L } = (0, C.lG)(),
        M = E.length + T.length > 0,
        k =
            f.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: s
                }
            ).enabled && M;
    function w() {
        h.Z.open(R.oAB.PREMIUM);
    }
    return p && _
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === P.m8 && !e.consumed),
                          r = null !== (e = n.filter((e) => e.giftCodeBatchId === P.rX && !e.consumed)) && void 0 !== e ? e : [],
                          [l, c] = o().partition(r, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === P.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          u = k
                              ? (0, i.jsxs)('div', {
                                    className: B.promoHeaderContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    children: M ? y.intl.string(y.t.wFsj3N) : void 0
                                                }),
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'text-sm/normal',
                                                    className: B.promoDescription,
                                                    children: y.intl.format(y.t.G4fwxM, {
                                                        onClick: () => {
                                                            (0, g.xf)(), (0, I.uL)(R.Z5c.APPLICATION_STORE);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(S.Z, {
                                            showGradient: !0,
                                            className: B.promoNitroButton,
                                            subscriptionTier: P.Si.TIER_2,
                                            buttonText: y.intl.string(y.t.mr4K7O)
                                        })
                                    ]
                                })
                              : (0, i.jsx)(d.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: M ? y.intl.string(y.t.wFsj3N) : void 0
                                });
                      return (0, i.jsx)(b.Z, {
                          className: B.containerWithMargin,
                          isShown: k,
                          type: b.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, i.jsxs)(d.FormSection, {
                              className: a()({ [B.containerWithMargin]: !k }),
                              children: [
                                  u,
                                  M ? (0, i.jsx)(d.FormDivider, { className: B.divider }) : null,
                                  T.map((e) => {
                                      let { code: t, promotion: n } = e;
                                      return (0, i.jsx)(
                                          D,
                                          {
                                              outboundPromotion: n,
                                              code: t,
                                              addClaimedOutboundPromotionCode: L,
                                              disabled: !s
                                          },
                                          n.id
                                      );
                                  }),
                                  E.map((e) =>
                                      (0, i.jsx)(
                                          D,
                                          {
                                              outboundPromotion: e,
                                              code: Z[e.id],
                                              addClaimedOutboundPromotionCode: L,
                                              disabled: !s
                                          },
                                          e.id
                                      )
                                  ),
                                  null != t
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: B.skuCard,
                                                skuId: t.skuId,
                                                subscriptionPlanId: t.subscriptionPlanId,
                                                entitlements: [t],
                                                giftCodeBatchId: P.m8
                                            },
                                            (0, A.Bg)(t.skuId, t.subscriptionPlanId)
                                        )
                                      : null,
                                  l.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: B.skuCard,
                                                skuId: l[0].skuId,
                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                entitlements: l,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, A.Bg)(l[0].skuId, l[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: B.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, A.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, i.jsx)(d.FormSection, {
                      className: B.containerWithMargin,
                      children: (0, i.jsxs)(d.HeadingLevel, {
                          component: (0, i.jsx)(d.Heading, {
                              variant: 'heading-md/semibold',
                              children: y.intl.string(y.t['9KeUbW'])
                          }),
                          children: [
                              (0, i.jsx)(d.FormDivider, { className: B.divider }),
                              0 === Object.keys(l).length
                                  ? (0, i.jsxs)('div', {
                                        className: B.emptyState,
                                        children: [
                                            (0, i.jsx)('div', { className: B.emptyStateImage }),
                                            (0, i.jsx)(d.H, {
                                                className: B.emptyStateHeader,
                                                children: y.intl.string(y.t.B1qgZm)
                                            }),
                                            (0, i.jsx)('p', {
                                                className: B.emptyStateSubtext,
                                                children: y.intl.format(y.t.HezvJy, { onClick: w })
                                            })
                                        ]
                                    })
                                  : o()
                                        .keys(l)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: r } = (0, A.Z0)(e);
                                            return (0, i.jsx)(
                                                O.Z,
                                                {
                                                    className: B.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: l[e],
                                                    giftStyle: r
                                                },
                                                e
                                            );
                                        })
                          ]
                      })
                  })
              ]
          })
        : (0, i.jsx)(d.Spinner, { className: B.loading });
};
