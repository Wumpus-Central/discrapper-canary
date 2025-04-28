n.d(t, { Z: () => w }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(496929),
    p = n(37234),
    g = n(230711),
    h = n(410030),
    f = n(454585),
    b = n(163684),
    _ = n(178100),
    x = n(518638),
    E = n(725727),
    j = n(454982),
    C = n(197115),
    O = n(504983),
    S = n(703656),
    v = n(594174),
    T = n(580130),
    N = n(669079),
    I = n(74538),
    y = n(317941),
    A = n(981631),
    P = n(474936),
    R = n(388032),
    D = n(923756);
function Z(e) {
    let t,
        { outboundPromotion: n, code: s, addClaimedOutboundPromotionCode: a, disabled: o } = e,
        [c, u] = r.useState(!1),
        [m, p] = r.useState(!1),
        g = () => u((e) => !e),
        b = (0, h.ZP)(),
        E = (0, x.Pz)(n.id, b),
        C = null != s,
        O = (0, _.Z)(n, C);
    C && c
        ? (t = R.intl.format(R.t.pkxVx8, {
              endDate: O,
              onClickDetails: g
          }))
        : C && !c
          ? (t = R.intl.format(R.t['4sFeoa'], {
                endDate: O,
                onClickDetails: g
            }))
          : !C && c
            ? (t = R.intl.format(R.t['RBnE+v'], {
                  endDate: O,
                  onClickDetails: g
              }))
            : C ||
              c ||
              (t = R.intl.format(R.t['57+7Qk'], {
                  endDate: O,
                  onClickDetails: g
              }));
    let S = C ? R.intl.string(R.t['2cHUtr']) : R.intl.string(R.t.O13yh4),
        v = r.useCallback(() => p(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: N } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(D.skuCard, D.promotionCard),
                children: [
                    (0, i.jsxs)('div', {
                        className: D.mainPromotionCardContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.promotionCardLeftContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: D.promotionIcon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: E,
                                            className: D.promotionIconImage
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(d.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: T
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                className: D.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !o &&
                                (0, i.jsx)(d.zxk, {
                                    className: D.promotionCardButton,
                                    color: d.zxk.Colors.BRAND,
                                    size: d.zxk.Sizes.SMALL,
                                    onClick: () => p(!0),
                                    disabled: o,
                                    children: S
                                })
                        ]
                    }),
                    c &&
                        (0, i.jsx)(d.Text, {
                            className: D.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: f.Z.parse(N, !1, { allowLinks: !0 })
                        })
                ]
            }),
            m &&
                (0, i.jsx)(d.u_l, {
                    renderModal: (e) => {
                        var t, r;
                        return (0, i.jsx)(
                            j.Z,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (r = r =
                                {
                                    onClose: v,
                                    onClaim: a,
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
                    onCloseRequest: v
                })
        ]
    });
}
let w = function () {
    let e = (0, c.Wu)([T.Z], () => T.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = (0, c.e7)([v.default], () => I.ZP.isPremiumExactly(v.default.getCurrentUser(), P.p9.TIER_2)),
        a = o().groupBy(t, (e) => (0, N.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [h, f] = r.useState(!1);
    r.useEffect(() => {
        u.Z.wait(() => {
            (0, m.Qv)().then(() => f(!0));
        });
    }, []);
    let { promotionsLoaded: _, activeOutboundPromotions: x, claimedEndedOutboundPromotions: j, claimedOutboundPromotionCodeMap: w, addClaimedOutboundPromotionCode: k } = (0, E.lG)(),
        L = x.length + j.length > 0,
        M =
            b.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: s
                }
            ).enabled && L;
    return h && _
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === P.m8 && !e.consumed),
                          r = null != (e = n.filter((e) => e.giftCodeBatchId === P.rX && !e.consumed)) ? e : [],
                          [a, c] = o().partition(r, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === P.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          u = (0, i.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              children: L ? R.intl.string(R.t.wFsj3N) : void 0
                          }),
                          m = M
                              ? (0, i.jsxs)('div', {
                                    className: D.promoHeaderContainer,
                                    children: [
                                        (0, i.jsx)(d.SrA, {
                                            size: 'md',
                                            color: d.TVs.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                            className: D.premiumIcon
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-md/normal',
                                            className: D.promoDescription,
                                            children: R.intl.format(R.t.G4fwxM, {
                                                onClick: () => {
                                                    (0, p.xf)(), (0, S.uL)(A.Z5c.APPLICATION_STORE);
                                                }
                                            })
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            showGradient: !0,
                                            className: D.promoNitroButton,
                                            subscriptionTier: P.Si.TIER_2,
                                            buttonText: R.intl.string(R.t.mr4K7O)
                                        })
                                    ]
                                })
                              : null;
                      return (0, i.jsxs)('div', {
                          className: D.marginContainer,
                          children: [
                              u,
                              L ? (0, i.jsx)(d.$i$, { className: D.divider }) : null,
                              (0, i.jsx)(O.Z, {
                                  className: D.gradientContainer,
                                  isShown: M,
                                  type: O.Y.PREMIUM,
                                  hasBackground: !0,
                                  children: (0, i.jsxs)(d.hjN, {
                                      className: l()({ [D.marginContainer]: !M }),
                                      children: [
                                          m,
                                          j.map((e) => {
                                              let { code: t, promotion: n } = e;
                                              return (0, i.jsx)(
                                                  Z,
                                                  {
                                                      outboundPromotion: n,
                                                      code: t,
                                                      addClaimedOutboundPromotionCode: k,
                                                      disabled: !s
                                                  },
                                                  n.id
                                              );
                                          }),
                                          x.map((e) =>
                                              (0, i.jsx)(
                                                  Z,
                                                  {
                                                      outboundPromotion: e,
                                                      code: w[e.id],
                                                      addClaimedOutboundPromotionCode: k,
                                                      disabled: !s
                                                  },
                                                  e.id
                                              )
                                          ),
                                          null != t
                                              ? (0, i.jsx)(
                                                    y.Z,
                                                    {
                                                        className: D.skuCard,
                                                        skuId: t.skuId,
                                                        subscriptionPlanId: t.subscriptionPlanId,
                                                        entitlements: [t],
                                                        giftCodeBatchId: P.m8
                                                    },
                                                    (0, N.Bg)(t.skuId, t.subscriptionPlanId)
                                                )
                                              : null,
                                          a.length > 0
                                              ? (0, i.jsx)(
                                                    y.Z,
                                                    {
                                                        className: D.skuCard,
                                                        skuId: a[0].skuId,
                                                        subscriptionPlanId: a[0].subscriptionPlanId,
                                                        entitlements: a,
                                                        giftCodeBatchId: P.rX
                                                    },
                                                    (0, N.Bg)(a[0].skuId, a[0].subscriptionPlanId)
                                                )
                                              : null,
                                          c.length > 0
                                              ? (0, i.jsx)(
                                                    y.Z,
                                                    {
                                                        className: D.skuCard,
                                                        skuId: c[0].skuId,
                                                        subscriptionPlanId: c[0].subscriptionPlanId,
                                                        entitlements: c,
                                                        giftCodeBatchId: P.rX
                                                    },
                                                    (0, N.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                                )
                                              : null
                                      ]
                                  })
                              })
                          ]
                      });
                  })(),
                  (0, i.jsx)(d.hjN, {
                      className: D.marginContainer,
                      children: (0, i.jsxs)(d.y5t, {
                          component: (0, i.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              children: R.intl.string(R.t['9KeUbW'])
                          }),
                          children: [
                              (0, i.jsx)(d.$i$, { className: D.divider }),
                              0 === Object.keys(a).length
                                  ? (0, i.jsxs)('div', {
                                        className: D.emptyState,
                                        children: [
                                            (0, i.jsx)('div', { className: D.emptyStateImage }),
                                            (0, i.jsx)(d.H, {
                                                className: D.emptyStateHeader,
                                                children: R.intl.string(R.t.B1qgZm)
                                            }),
                                            (0, i.jsx)('p', {
                                                className: D.emptyStateSubtext,
                                                children: R.intl.format(R.t.HezvJy, {
                                                    onClick: function () {
                                                        g.Z.open(A.oAB.PREMIUM);
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                  : o()
                                        .keys(a)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: r } = (0, N.Z0)(e);
                                            return (0, i.jsx)(
                                                y.Z,
                                                {
                                                    className: D.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: a[e],
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
        : (0, i.jsx)(d.$jN, { className: D.loading });
};
