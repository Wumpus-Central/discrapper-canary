n.d(t, {
    C: function () {
        return ei;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    g = n(481060),
    m = n(570140),
    f = n(355467),
    p = n(37234),
    _ = n(821849),
    h = n(230711),
    x = n(497321),
    E = n(634894),
    b = n(410030),
    C = n(607070),
    v = n(100527),
    T = n(906732),
    N = n(211242),
    I = n(975298),
    S = n(15640),
    R = n(89057),
    j = n(406128),
    A = n(703656),
    P = n(246946),
    O = n(78839),
    Z = n(483444),
    M = n(626135),
    B = n(63063),
    y = n(74538),
    w = n(140465),
    k = n(286961),
    L = n(91802),
    U = n(533525),
    D = n(232076),
    G = n(197115),
    H = n(823188),
    V = n(504865),
    F = n(179984),
    W = n(938736),
    z = n(386733),
    Y = n(474936),
    K = n(981631),
    Q = n(388032),
    q = n(328572),
    J = n(881188),
    X = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: r, activeDiscountInfo: a, theme: s } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === Y.Xh.PREMIUM_YEAR_TIER_2,
        d = n || l,
        m = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        f = Y.GP[t.planIdFromItems],
        p = y.ZP.formatPriceString(y.ZP.getDefaultPrice(f.id), f.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !c) &&
                      (0, i.jsx)(H.Cy, {
                          text: l ? Q.intl.string(Q.t.qYKftb) : Q.intl.string(Q.t.EyjDRE),
                          className: q.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(s) ? H.VE.PREMIUM_TIER_2_WHITE_FILL : H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, i.jsx)('div', { className: q.rimGlowTier2 }),
                  (0, i.jsx)(g.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: q.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (l) {
                              if (r) {
                                  let e = y.ZP.getReverseTrialWeeks(t.trialId);
                                  return Q.intl.format(Q.t.jLglur, { weeks: e });
                              }
                              return Q.intl.format(Q.t['2CGBrq'], {
                                  remainingTime: m,
                                  price: p
                              });
                          }
                          if (c)
                              return Q.intl.format(Q.t['+qqh6u'], {
                                  percent: null !== (e = null == a ? void 0 : a.percentage) && void 0 !== e ? e : Y.Bo,
                                  regularPrice: p
                              });
                          return Q.intl.formatToPlainString(Q.t['3Ziutb'], {
                              percent: null !== (n = null == a ? void 0 : a.percentage) && void 0 !== n ? n : Y.M_,
                              regularPrice: p,
                              numMonths: null !== (i = null == a ? void 0 : a.duration) && void 0 !== i ? i : Y.rt
                          });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(V.Z, {
              variant: void 0,
              subscriptionTier: Y.Si.TIER_2,
              interval: f.interval
          });
}
function en() {
    let e = (0, w.t7)(),
        t = (0, w.lr)(),
        n = (0, c.e7)([O.ZP], () => O.ZP.inReverseTrial()),
        r = (0, b.ZP)(),
        a = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, I.Z)(),
        o = null !== a && null !== a.planIdFromItems;
    if (!o && l === Y.a$.NONE) return null;
    let d = l !== Y.a$.NONE,
        u = null !== a && null != a.trialId,
        m = e || u;
    return (0, i.jsxs)('div', {
        className: s()(q.tierCard, { [q.withTier2Rim]: m }),
        children: [
            (0, i.jsxs)('div', {
                className: q.tierInfo,
                children: [
                    (0, i.jsx)(Z.Z, { className: q.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(H.mn, {
                                      text: Q.intl.string(Q.t.uXF4c3),
                                      className: q.fractionalPremiumTopRimPill,
                                      colorOptions: H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: q.fractionalPremiumSubheader,
                                      children: Q.intl.format(Q.t.sK7fGh, { helpCenterLink: B.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(et, {
                                premiumSubscription: a,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: r
                            })
                          : null,
                    (0, i.jsx)(H.nT, { featureSet: d ? H.uZ.FRACTIONAL_PREMIUM : H.uZ.DEFAULT }),
                    (0, i.jsx)(g.Button, {
                        className: q.tierCardButton,
                        color: g.Button.Colors.WHITE,
                        onClick: () => {
                            M.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, A.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(g.Text, {
                            className: q.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: Q.intl.string(Q.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(g.Button, {
                        className: q.managePlanButton,
                        look: g.Button.Looks.OUTLINED,
                        color: g.Button.Colors.WHITE,
                        onClick: () => {
                            M.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                h.Z.open(K.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(g.Text, {
                            className: q.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: Q.intl.string(Q.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: q.tierImage,
                children: (0, i.jsx)('img', {
                    className: q.tierImage,
                    alt: '',
                    src: J
                })
            })
        ]
    });
}
function ei(e) {
    let { className: t, config: n } = e,
        r = (0, c.e7)([C.Z], () => C.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: s()(q.giftCardPromotion, t),
        children: [
            r
                ? (0, i.jsx)('img', {
                      alt: '',
                      className: q.giftImagePromotion,
                      'aria-hidden': !0,
                      src: n.getStaticImageUrl()
                  })
                : (0, i.jsx)(g.LottieAnimation, {
                      importData: n.getAnimatedImageData,
                      className: s()(q.giftImageAnimatedPromotion, q.giftImagePromotion)
                  }),
            (0, i.jsxs)('div', {
                className: q.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: q.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(g.Heading, {
                        className: q.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(g.Text, {
                        className: q.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(G.Z, {
                        isGift: !0,
                        className: s()(q.giftCardButton, q.halloweenColor),
                        look: g.Button.Looks.OUTLINED,
                        buttonText: Q.intl.string(Q.t.Ve9Ge3),
                        buttonTextClassName: q.giftButtonCTA,
                        color: g.Button.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: $,
                                target: ee
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function er() {
    var e;
    let t = null === (e = (0, k.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ei, { config: t })
        : (0, i.jsxs)('div', {
              className: s()(q.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: q.giftImage,
                      alt: '',
                      src: X
                  }),
                  (0, i.jsxs)('div', {
                      className: q.giftInfo,
                      children: [
                          (0, i.jsx)(g.Heading, {
                              className: q.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Q.intl.string(Q.t['3KomGR'])
                          }),
                          (0, i.jsx)(g.Text, {
                              className: q.giftText,
                              variant: 'text-sm/normal',
                              children: Q.intl.string(Q.t.yQ06u7)
                          }),
                          (0, i.jsx)(G.Z, {
                              isGift: !0,
                              className: s()(q.giftCardButton, q.giftCardButtonColor),
                              look: g.Button.Looks.OUTLINED,
                              buttonText: Q.intl.string(Q.t.Ve9Ge3),
                              buttonTextClassName: q.giftButtonCTA,
                              color: g.Button.Colors.CUSTOM,
                              onClick: () => {
                                  M.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: $,
                                      target: ee
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
t.Z = function () {
    let e = (0, N.Q)(),
        { analyticsLocations: t } = (0, T.ZP)(v.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        a = (0, c.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
        s = (0, S.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, I.Z)({ forceFetch: !0 }),
        p = (0, L.n)(),
        h = null == p ? void 0 : p.countryCode,
        b = (0, c.e7)([P.Z], () => P.Z.enabled),
        C = 'PremiumManagementSettings';
    (0, E.j)({
        location: C + ' auto on',
        autoTrackExposure: !0
    }),
        (0, E.j)({
            location: C + ' auto off',
            autoTrackExposure: !1
        }),
        (0, D.B)(C);
    let A = (0, U.b)(C),
        Z = (0, W.pn)(C);
    r.useEffect(() => {
        m.Z.wait(async () => {
            !b && !e && (await Promise.all([f.jg(), f.tZ(), (0, _.Y2)(h, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [h, b, e]);
    let [B, y] = r.useState(!1);
    if (b) return (0, i.jsx)(x.Z, {});
    if (e) return (0, i.jsx)(R.c8, {});
    let w = a && null !== n && s,
        k = u !== Y.a$.NONE;
    if (!w && !k && !l)
        return (0, i.jsx)(j.Z, {
            title: Q.intl.string(Q.t.dyq9TU),
            note: null
        });
    if ((!w && !k) || l) return (0, i.jsx)(g.Spinner, {});
    let G = null !== n && null != n.trialId;
    return (0, i.jsx)(T.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: q.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (A || Z) && (0, i.jsx)(z.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(F.Z, {
                            className: q.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Q.intl.string(Q.t.dnVvQU),
                            hidePill: !G,
                            selectedPlanColumnClassName: q.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Y.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !B && (M.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), y(!0));
                    },
                    children: (0, i.jsx)('div', { className: q.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
