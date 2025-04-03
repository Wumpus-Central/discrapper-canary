n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(496929),
    g = n(37234),
    p = n(230711),
    h = n(410030),
    f = n(454585),
    b = n(163684),
    N = n(178100),
    x = n(518638),
    _ = n(725727),
    E = n(454982),
    j = n(197115),
    O = n(504983),
    C = n(703656),
    S = n(594174),
    v = n(580130),
    T = n(669079),
    I = n(74538),
    y = n(317941),
    A = n(981631),
    P = n(474936),
    R = n(388032),
    D = n(923756);
function Z(e) {
    let t,
        { outboundPromotion: n, code: s, addClaimedOutboundPromotionCode: l, disabled: o } = e,
        [c, u] = i.useState(!1),
        [m, g] = i.useState(!1),
        p = () => u((e) => !e),
        b = (0, h.ZP)(),
        _ = (0, x.Pz)(n.id, b),
        j = null != s,
        O = (0, N.Z)(n, j);
    j && c
        ? (t = R.NW.format(R.t.pkxVx8, {
              endDate: O,
              onClickDetails: p
          }))
        : j && !c
          ? (t = R.NW.format(R.t['4sFeoa'], {
                endDate: O,
                onClickDetails: p
            }))
          : !j && c
            ? (t = R.NW.format(R.t['RBnE+v'], {
                  endDate: O,
                  onClickDetails: p
              }))
            : j ||
              c ||
              (t = R.NW.format(R.t['57+7Qk'], {
                  endDate: O,
                  onClickDetails: p
              }));
    let C = j ? R.NW.string(R.t['2cHUtr']) : R.NW.string(R.t.O13yh4),
        S = i.useCallback(() => g(!1), []),
        { outboundTitle: v, outboundTermsAndConditions: T } = n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(D.skuCard, D.promotionCard),
                children: [
                    (0, r.jsxs)('div', {
                        className: D.mainPromotionCardContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: D.promotionCardLeftContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: D.promotionIcon,
                                        children: (0, r.jsx)('img', {
                                            alt: '',
                                            src: _,
                                            className: D.promotionIconImage
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(d.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: v
                                            }),
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                className: D.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(d.zxk, {
                                className: D.promotionCardButton,
                                color: d.zxk.Colors.BRAND,
                                size: d.zxk.Sizes.SMALL,
                                onClick: () => g(!0),
                                disabled: !0 === o,
                                children: C
                            })
                        ]
                    }),
                    c &&
                        (0, r.jsx)(d.Text, {
                            className: D.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: f.Z.parse(T, !1, { allowLinks: !0 })
                        })
                ]
            }),
            m &&
                (0, r.jsx)(d.u_l, {
                    renderModal: (e) => {
                        var t, i;
                        return (0, r.jsx)(
                            E.Z,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (i = i =
                                {
                                    onClose: S,
                                    onClaim: l,
                                    code: s,
                                    outboundPromotion: n
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            t)
                        );
                    },
                    onCloseRequest: S
                })
        ]
    });
}
let w = function () {
    let e = (0, c.Wu)([v.Z], () => v.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = (0, c.e7)([S.default], () => I.ZP.isPremiumExactly(S.default.getCurrentUser(), P.p9.TIER_2)),
        l = o().groupBy(t, (e) => (0, T.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [h, f] = i.useState(!1);
    i.useEffect(() => {
        u.Z.wait(() => {
            (0, m.Qv)().then(() => f(!0));
        });
    }, []);
    let { promotionsLoaded: N, activeOutboundPromotions: x, claimedEndedOutboundPromotions: E, claimedOutboundPromotionCodeMap: w, addClaimedOutboundPromotionCode: k } = (0, _.lG)(),
        W = x.length + E.length > 0,
        L =
            b.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: s
                }
            ).enabled && W;
    return h && N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === P.m8 && !e.consumed),
                          i = null != (e = n.filter((e) => e.giftCodeBatchId === P.rX && !e.consumed)) ? e : [],
                          [l, c] = o().partition(i, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === P.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          u = L
                              ? (0, r.jsxs)('div', {
                                    className: D.promoHeaderContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)(d.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    children: W ? R.NW.string(R.t.wFsj3N) : void 0
                                                }),
                                                (0, r.jsx)(d.X6q, {
                                                    variant: 'text-sm/normal',
                                                    className: D.promoDescription,
                                                    children: R.NW.format(R.t.G4fwxM, {
                                                        onClick: () => {
                                                            (0, g.xf)(), (0, C.uL)(A.Z5c.APPLICATION_STORE);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            showGradient: !0,
                                            className: D.promoNitroButton,
                                            subscriptionTier: P.Si.TIER_2,
                                            buttonText: R.NW.string(R.t.mr4K7O)
                                        })
                                    ]
                                })
                              : (0, r.jsx)(d.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: W ? R.NW.string(R.t.wFsj3N) : void 0
                                });
                      return (0, r.jsx)(O.Z, {
                          className: D.containerWithMargin,
                          isShown: L,
                          type: O.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, r.jsxs)(d.hjN, {
                              className: a()({ [D.containerWithMargin]: !L }),
                              children: [
                                  u,
                                  W ? (0, r.jsx)(d.$i$, { className: D.divider }) : null,
                                  E.map((e) => {
                                      let { code: t, promotion: n } = e;
                                      return (0, r.jsx)(
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
                                      (0, r.jsx)(
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
                                      ? (0, r.jsx)(
                                            y.Z,
                                            {
                                                className: D.skuCard,
                                                skuId: t.skuId,
                                                subscriptionPlanId: t.subscriptionPlanId,
                                                entitlements: [t],
                                                giftCodeBatchId: P.m8
                                            },
                                            (0, T.Bg)(t.skuId, t.subscriptionPlanId)
                                        )
                                      : null,
                                  l.length > 0
                                      ? (0, r.jsx)(
                                            y.Z,
                                            {
                                                className: D.skuCard,
                                                skuId: l[0].skuId,
                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                entitlements: l,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, T.Bg)(l[0].skuId, l[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, r.jsx)(
                                            y.Z,
                                            {
                                                className: D.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, T.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, r.jsx)(d.hjN, {
                      className: D.containerWithMargin,
                      children: (0, r.jsxs)(d.y5t, {
                          component: (0, r.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              children: R.NW.string(R.t['9KeUbW'])
                          }),
                          children: [
                              (0, r.jsx)(d.$i$, { className: D.divider }),
                              0 === Object.keys(l).length
                                  ? (0, r.jsxs)('div', {
                                        className: D.emptyState,
                                        children: [
                                            (0, r.jsx)('div', { className: D.emptyStateImage }),
                                            (0, r.jsx)(d.H, {
                                                className: D.emptyStateHeader,
                                                children: R.NW.string(R.t.B1qgZm)
                                            }),
                                            (0, r.jsx)('p', {
                                                className: D.emptyStateSubtext,
                                                children: R.NW.format(R.t.HezvJy, {
                                                    onClick: function () {
                                                        p.Z.open(A.oAB.PREMIUM);
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                  : o()
                                        .keys(l)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, T.Z0)(e);
                                            return (0, r.jsx)(
                                                y.Z,
                                                {
                                                    className: D.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: l[e],
                                                    giftStyle: i
                                                },
                                                e
                                            );
                                        })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsx)(d.$jN, { className: D.loading });
};
