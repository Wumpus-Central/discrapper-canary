n.d(t, {
    C: () => ei,
    Z: () => er
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    h = n(570140),
    g = n(355467),
    _ = n(37234),
    x = n(821849),
    p = n(230711),
    E = n(497321),
    C = n(634894),
    f = n(410030),
    T = n(607070),
    N = n(100527),
    S = n(906732),
    I = n(211242),
    b = n(975298),
    v = n(15640),
    j = n(89057),
    A = n(406128),
    O = n(703656),
    R = n(246946),
    P = n(78839),
    D = n(483444),
    y = n(626135),
    Z = n(63063),
    k = n(74538),
    L = n(140465),
    B = n(286961),
    M = n(91802),
    w = n(533525),
    V = n(232076),
    U = n(197115),
    G = n(823188),
    F = n(504865),
    H = n(179984),
    z = n(938736),
    Y = n(386733),
    W = n(474936),
    K = n(981631),
    q = n(388032),
    X = n(328572),
    J = n(881188),
    Q = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: s, activeDiscountInfo: r, theme: l } = e,
        a = null != t.trialId,
        c = t.planIdFromItems === W.Xh.PREMIUM_YEAR_TIER_2,
        d = n || a,
        h = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = W.GP[t.planIdFromItems],
        _ = k.ZP.formatPriceString(k.ZP.getDefaultPrice(g.id), g.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (a || !c) &&
                      (0, i.jsx)(G.Cy, {
                          text: a ? q.intl.string(q.t.qYKftb) : q.intl.string(q.t.EyjDRE),
                          className: X.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(l) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (a || !c) && (0, i.jsx)('div', { className: X.rimGlowTier2 }),
                  (0, i.jsx)(m.X6q, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: X.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (a) {
                              if (s) {
                                  let e = k.ZP.getReverseTrialWeeks(t.trialId);
                                  return q.intl.format(q.t.jLglur, { weeks: e });
                              }
                              return q.intl.format(q.t['2CGBrq'], {
                                  remainingTime: h,
                                  price: _
                              });
                          }
                          return c
                              ? q.intl.format(q.t['+qqh6u'], {
                                    percent: null !== (e = null == r ? void 0 : r.percentage) && void 0 !== e ? e : W.Bo,
                                    regularPrice: _
                                })
                              : q.intl.formatToPlainString(q.t['3Ziutb'], {
                                    percent: null !== (n = null == r ? void 0 : r.percentage) && void 0 !== n ? n : W.M_,
                                    regularPrice: _,
                                    numMonths: null !== (i = null == r ? void 0 : r.duration) && void 0 !== i ? i : W.rt
                                });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(F.Z, {
              variant: void 0,
              subscriptionTier: W.Si.TIER_2,
              interval: g.interval
          });
}
function en() {
    let e = (0, L.t7)(),
        t = (0, L.lr)(),
        n = (0, c.e7)([P.ZP], () => P.ZP.inReverseTrial()),
        s = (0, f.ZP)(),
        r = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: a } = (0, b.Z)(),
        o = null !== r && null !== r.planIdFromItems;
    if (!o && a === W.a$.NONE) return null;
    let d = a !== W.a$.NONE,
        u = null !== r && null != r.trialId,
        h = e || u;
    return (0, i.jsxs)('div', {
        className: l()(X.tierCard, { [X.withTier2Rim]: h }),
        children: [
            (0, i.jsxs)('div', {
                className: X.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: X.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(G.mn, {
                                      text: q.intl.string(q.t.uXF4c3),
                                      className: X.fractionalPremiumTopRimPill,
                                      colorOptions: G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: X.fractionalPremiumSubheader,
                                      children: q.intl.format(q.t.sK7fGh, { helpCenterLink: Z.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(et, {
                                premiumSubscription: r,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: s
                            })
                          : null,
                    (0, i.jsx)(G.nT, { featureSet: d ? G.uZ.FRACTIONAL_PREMIUM : G.uZ.DEFAULT }),
                    (0, i.jsx)(m.zxk, {
                        className: X.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, _.xf)(),
                                (0, O.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: X.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: q.intl.string(q.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(m.zxk, {
                        className: X.managePlanButton,
                        look: m.zxk.Looks.OUTLINED,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                p.Z.open(K.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: X.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: q.intl.string(q.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: X.tierImage,
                children: (0, i.jsx)('img', {
                    className: X.tierImage,
                    alt: '',
                    src: J
                })
            })
        ]
    });
}
function ei(e) {
    let { className: t, config: n } = e,
        s = (0, c.e7)([T.Z], () => T.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: l()(X.giftCardPromotion, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: X.giftImagePromotion,
                'aria-hidden': !0,
                src: s
            }),
            (0, i.jsxs)('div', {
                className: X.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: X.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.X6q, {
                        className: X.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: X.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(U.Z, {
                        isGift: !0,
                        className: l()(X.giftCardButton, X.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: q.intl.string(q.t.Ve9Ge3),
                        buttonTextClassName: X.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
function es() {
    var e;
    let t = null === (e = (0, B.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ei, { config: t })
        : (0, i.jsxs)('div', {
              className: l()(X.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: X.giftImage,
                      alt: '',
                      src: Q
                  }),
                  (0, i.jsxs)('div', {
                      className: X.giftInfo,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              className: X.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: q.intl.string(q.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: X.giftText,
                              variant: 'text-sm/normal',
                              children: q.intl.string(q.t.yQ06u7)
                          }),
                          (0, i.jsx)(U.Z, {
                              isGift: !0,
                              className: l()(X.giftCardButton, X.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: q.intl.string(q.t.Ve9Ge3),
                              buttonTextClassName: X.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
let er = function () {
    let e = (0, I.Q)(),
        { analyticsLocations: t } = (0, S.ZP)(N.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        r = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        l = (0, v.V)(),
        [a, o] = s.useState(!0),
        { fractionalState: u } = (0, b.Z)({ forceFetch: !0 }),
        _ = (0, M.n)(),
        p = null == _ ? void 0 : _.countryCode,
        f = (0, c.e7)([R.Z], () => R.Z.enabled),
        T = 'PremiumManagementSettings';
    (0, C.j)({
        location: T + ' auto on',
        autoTrackExposure: !0
    }),
        (0, C.j)({
            location: T + ' auto off',
            autoTrackExposure: !1
        }),
        (0, V.B)(T);
    let O = (0, w.b)(T),
        D = (0, z.pn)(T);
    s.useEffect(() => {
        h.Z.wait(async () => {
            f || e || (await Promise.all([g.jg(), g.tZ(), (0, x.Y2)(p, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [p, f, e]);
    let [Z, k] = s.useState(!1);
    if (f) return (0, i.jsx)(E.Z, {});
    if (e) return (0, i.jsx)(j.c8, {});
    let L = r && null !== n && l,
        B = u !== W.a$.NONE;
    if (!L && !B && !a)
        return (0, i.jsx)(A.Z, {
            title: q.intl.string(q.t.dyq9TU),
            note: null
        });
    if ((!L && !B) || a) return (0, i.jsx)(m.$jN, {});
    let U = null !== n && null != n.trialId;
    return (0, i.jsx)(S.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: X.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (O || D) && (0, i.jsx)(Y.Z, { isInSettings: !0 }),
                        (0, i.jsx)(es, {}),
                        (0, i.jsx)(H.Z, {
                            className: X.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: q.intl.string(q.t.dnVvQU),
                            hidePill: !U,
                            selectedPlanColumnClassName: X.tier2PlanComparisonTableBackground,
                            selectedPlanTier: W.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !Z && (y.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), k(!0));
                    },
                    children: (0, i.jsx)('div', { className: X.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
