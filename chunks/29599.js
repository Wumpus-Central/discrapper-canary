(n.d(t, { Z: () => k }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(570140),
    p = n(496929),
    g = n(37234),
    h = n(230711),
    f = n(410030),
    b = n(454585),
    x = n(163684),
    _ = n(178100),
    j = n(518638),
    O = n(725727),
    E = n(454982),
    C = n(767714),
    v = n(504983),
    S = n(703656),
    T = n(594174),
    N = n(580130),
    I = n(669079),
    y = n(74538),
    A = n(317941),
    P = n(981631),
    R = n(474936),
    D = n(388032),
    Z = n(923756);
function w(e) {
    let t,
        { outboundPromotion: n, code: s, addClaimedOutboundPromotionCode: l, disabled: o } = e,
        [c, m] = r.useState(!1),
        [p, g] = r.useState(!1),
        h = () => m((e) => !e),
        x = (0, f.ZP)(),
        O = (0, j.Pz)(n.id, x),
        C = null != s,
        v = (0, _.Z)(n, C);
    C && c
        ? (t = D.intl.format(D.t.pkxVx8, {
              endDate: v,
              onClickDetails: h
          }))
        : C && !c
          ? (t = D.intl.format(D.t['4sFeoa'], {
                endDate: v,
                onClickDetails: h
            }))
          : !C && c
            ? (t = D.intl.format(D.t['RBnE+v'], {
                  endDate: v,
                  onClickDetails: h
              }))
            : C ||
              c ||
              (t = D.intl.format(D.t['57+7Qk'], {
                  endDate: v,
                  onClickDetails: h
              }));
    let S = C ? D.intl.string(D.t['2cHUtr']) : D.intl.string(D.t.O13yh4),
        T = r.useCallback(() => g(!1), []),
        { outboundTitle: N, outboundTermsAndConditions: I } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: a()(Z.skuCard, Z.promotionCard),
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
                                            src: O,
                                            className: Z.promotionIconImage
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(u.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: N
                                            }),
                                            (0, i.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-default',
                                                className: Z.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !o &&
                                (0, i.jsx)(d.zx, {
                                    className: Z.promotionCardButton,
                                    color: d.zx.Colors.BRAND,
                                    size: d.zx.Sizes.SMALL,
                                    onClick: () => g(!0),
                                    disabled: o,
                                    children: S
                                })
                        ]
                    }),
                    c &&
                        (0, i.jsx)(u.Text, {
                            className: Z.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: b.Z.parse(I, !1, { allowLinks: !0 })
                        })
                ]
            }),
            p &&
                (0, i.jsx)(u.u_l, {
                    renderModal: (e) => {
                        var t, r;
                        return (0, i.jsx)(
                            E.Z,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            ((i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i));
                                        }));
                                }
                                return e;
                            })({}, e)),
                            (r = r =
                                {
                                    onClose: T,
                                    onClaim: l,
                                    code: s,
                                    outboundPromotion: n
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            t)
                        );
                    },
                    onCloseRequest: T
                })
        ]
    });
}
let k = function () {
    let e = (0, c.Wu)([N.Z], () => N.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = (0, c.e7)([T.default], () => y.ZP.isPremiumExactly(T.default.getCurrentUser(), R.p9.TIER_2)),
        l = o().groupBy(t, (e) => (0, I.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [d, f] = r.useState(!1);
    r.useEffect(() => {
        m.Z.wait(() => {
            (0, p.Qv)().then(() => f(!0));
        });
    }, []);
    let { promotionsLoaded: b, activeOutboundPromotions: _, claimedEndedOutboundPromotions: j, claimedOutboundPromotionCodeMap: E, addClaimedOutboundPromotionCode: k } = (0, O.lG)(),
        L = _.length + j.length > 0,
        B =
            x.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: s
                }
            ).enabled && L;
    return d && b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === R.m8 && !e.consumed),
                          r = null != (e = n.filter((e) => e.giftCodeBatchId === R.rX && !e.consumed)) ? e : [],
                          [l, c] = o().partition(r, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === R.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          d = (0, i.jsx)(u.X6q, {
                              variant: 'heading-md/semibold',
                              children: L ? D.intl.string(D.t.wFsj3N) : void 0
                          }),
                          m = B
                              ? (0, i.jsxs)('div', {
                                    className: Z.promoHeaderContainer,
                                    children: [
                                        (0, i.jsx)(u.SrA, {
                                            size: 'md',
                                            color: u.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                            className: Z.premiumIcon
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/normal',
                                            className: Z.promoDescription,
                                            children: D.intl.format(D.t.G4fwxM, {
                                                onClick: () => {
                                                    ((0, g.xf)(), (0, S.uL)(P.Z5c.APPLICATION_STORE));
                                                }
                                            })
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            showGradient: !0,
                                            className: Z.promoNitroButton,
                                            subscriptionTier: R.Si.TIER_2,
                                            textOptions: { textOverride: D.intl.string(D.t.mr4K7O) }
                                        })
                                    ]
                                })
                              : null;
                      return (0, i.jsxs)('div', {
                          className: Z.marginContainer,
                          children: [
                              d,
                              L ? (0, i.jsx)(u.$i$, { className: Z.divider }) : null,
                              (0, i.jsx)(v.Z, {
                                  className: Z.gradientContainer,
                                  isShown: B,
                                  type: v.Y.PREMIUM,
                                  hasBackground: !0,
                                  children: (0, i.jsxs)(u.hjN, {
                                      className: a()({ [Z.marginContainer]: !B }),
                                      children: [
                                          m,
                                          j.map((e) => {
                                              let { code: t, promotion: n } = e;
                                              return (0, i.jsx)(
                                                  w,
                                                  {
                                                      outboundPromotion: n,
                                                      code: t,
                                                      addClaimedOutboundPromotionCode: k,
                                                      disabled: !s
                                                  },
                                                  n.id
                                              );
                                          }),
                                          _.map((e) =>
                                              (0, i.jsx)(
                                                  w,
                                                  {
                                                      outboundPromotion: e,
                                                      code: E[e.id],
                                                      addClaimedOutboundPromotionCode: k,
                                                      disabled: !s
                                                  },
                                                  e.id
                                              )
                                          ),
                                          null != t
                                              ? (0, i.jsx)(
                                                    A.Z,
                                                    {
                                                        className: Z.skuCard,
                                                        skuId: t.skuId,
                                                        subscriptionPlanId: t.subscriptionPlanId,
                                                        entitlements: [t],
                                                        giftCodeBatchId: R.m8
                                                    },
                                                    (0, I.Bg)(t.skuId, t.subscriptionPlanId)
                                                )
                                              : null,
                                          l.length > 0
                                              ? (0, i.jsx)(
                                                    A.Z,
                                                    {
                                                        className: Z.skuCard,
                                                        skuId: l[0].skuId,
                                                        subscriptionPlanId: l[0].subscriptionPlanId,
                                                        entitlements: l,
                                                        giftCodeBatchId: R.rX
                                                    },
                                                    (0, I.Bg)(l[0].skuId, l[0].subscriptionPlanId)
                                                )
                                              : null,
                                          c.length > 0
                                              ? (0, i.jsx)(
                                                    A.Z,
                                                    {
                                                        className: Z.skuCard,
                                                        skuId: c[0].skuId,
                                                        subscriptionPlanId: c[0].subscriptionPlanId,
                                                        entitlements: c,
                                                        giftCodeBatchId: R.rX
                                                    },
                                                    (0, I.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                                )
                                              : null
                                      ]
                                  })
                              })
                          ]
                      });
                  })(),
                  (0, i.jsx)(u.hjN, {
                      className: Z.marginContainer,
                      children: (0, i.jsxs)(u.y5t, {
                          component: (0, i.jsx)(u.X6q, {
                              variant: 'heading-md/semibold',
                              children: D.intl.string(D.t['9KeUbW'])
                          }),
                          children: [
                              (0, i.jsx)(u.$i$, { className: Z.divider }),
                              0 === Object.keys(l).length
                                  ? (0, i.jsxs)('div', {
                                        className: Z.emptyState,
                                        children: [
                                            (0, i.jsx)('div', { className: Z.emptyStateImage }),
                                            (0, i.jsx)(u.H, {
                                                className: Z.emptyStateHeader,
                                                children: D.intl.string(D.t.B1qgZm)
                                            }),
                                            (0, i.jsx)('p', {
                                                className: Z.emptyStateSubtext,
                                                children: D.intl.format(D.t.HezvJy, {
                                                    onClick: function () {
                                                        h.Z.open(P.oAB.PREMIUM);
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                  : o()
                                        .keys(l)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: r } = (0, I.Z0)(e);
                                            return (0, i.jsx)(
                                                A.Z,
                                                {
                                                    className: Z.skuCard,
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
        : (0, i.jsx)(u.$jN, { className: Z.loading });
};
