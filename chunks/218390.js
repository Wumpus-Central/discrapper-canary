n.d(t, {
    C: function () {
        return ei;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    g = n(570140),
    h = n(355467),
    p = n(37234),
    x = n(821849),
    f = n(230711),
    _ = n(497321),
    E = n(634894),
    C = n(410030),
    T = n(607070),
    S = n(100527),
    b = n(906732),
    I = n(211242),
    N = n(975298),
    v = n(15640),
    A = n(89057),
    j = n(406128),
    O = n(703656),
    R = n(246946),
    P = n(78839),
    y = n(483444),
    B = n(626135),
    D = n(63063),
    Z = n(74538),
    L = n(140465),
    M = n(286961),
    k = n(91802),
    w = n(533525),
    U = n(232076),
    F = n(197115),
    V = n(823188),
    G = n(504865),
    H = n(179984),
    Y = n(938736),
    W = n(386733),
    z = n(474936),
    K = n(981631),
    q = n(388032),
    Q = n(12094),
    X = n(881188),
    J = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: r, activeDiscountInfo: s, theme: a } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === z.Xh.PREMIUM_YEAR_TIER_2,
        d = n || l,
        g = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        h = z.GP[t.planIdFromItems],
        p = Z.ZP.formatPriceString(Z.ZP.getDefaultPrice(h.id), h.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !c) &&
                      (0, i.jsx)(V.Cy, {
                          text: l ? q.intl.string(q.t.qYKftb) : q.intl.string(q.t.EyjDRE),
                          className: Q.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(a) ? V.VE.PREMIUM_TIER_2_WHITE_FILL : V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, i.jsx)('div', { className: Q.rimGlowTier2 }),
                  (0, i.jsx)(m.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: Q.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (l) {
                              if (r) {
                                  let e = Z.ZP.getReverseTrialWeeks(t.trialId);
                                  return q.intl.format(q.t.jLglur, { weeks: e });
                              }
                              return q.intl.format(q.t['2CGBrq'], {
                                  remainingTime: g,
                                  price: p
                              });
                          }
                          if (c)
                              return q.intl.format(q.t['+qqh6u'], {
                                  percent: null !== (e = null == s ? void 0 : s.percentage) && void 0 !== e ? e : z.Bo,
                                  regularPrice: p
                              });
                          return q.intl.formatToPlainString(q.t['3Ziutb'], {
                              percent: null !== (n = null == s ? void 0 : s.percentage) && void 0 !== n ? n : z.M_,
                              regularPrice: p,
                              numMonths: null !== (i = null == s ? void 0 : s.duration) && void 0 !== i ? i : z.rt
                          });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(G.Z, {
              variant: void 0,
              subscriptionTier: z.Si.TIER_2,
              interval: h.interval
          });
}
function en() {
    let e = (0, L.t7)(),
        t = (0, L.lr)(),
        n = (0, c.e7)([P.ZP], () => P.ZP.inReverseTrial()),
        r = (0, C.ZP)(),
        s = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, N.Z)(),
        o = null !== s && null !== s.planIdFromItems;
    if (!o && l === z.a$.NONE) return null;
    let d = l !== z.a$.NONE,
        u = null !== s && null != s.trialId,
        g = e || u;
    return (0, i.jsxs)('div', {
        className: a()(Q.tierCard, { [Q.withTier2Rim]: g }),
        children: [
            (0, i.jsxs)('div', {
                className: Q.tierInfo,
                children: [
                    (0, i.jsx)(y.Z, { className: Q.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.mn, {
                                      text: q.intl.string(q.t.uXF4c3),
                                      className: Q.fractionalPremiumTopRimPill,
                                      colorOptions: V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: Q.fractionalPremiumSubheader,
                                      children: q.intl.format(q.t.sK7fGh, { helpCenterLink: D.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(et, {
                                premiumSubscription: s,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: r
                            })
                          : null,
                    (0, i.jsx)(V.nT, { featureSet: d ? V.uZ.FRACTIONAL_PREMIUM : V.uZ.DEFAULT }),
                    (0, i.jsx)(m.Button, {
                        className: Q.tierCardButton,
                        color: m.Button.Colors.WHITE,
                        onClick: () => {
                            B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, O.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: Q.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: q.intl.string(q.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(m.Button, {
                        className: Q.managePlanButton,
                        look: m.Button.Looks.OUTLINED,
                        color: m.Button.Colors.WHITE,
                        onClick: () => {
                            B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                f.Z.open(K.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: Q.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: q.intl.string(q.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: Q.tierImage,
                children: (0, i.jsx)('img', {
                    className: Q.tierImage,
                    alt: '',
                    src: X
                })
            })
        ]
    });
}
function ei(e) {
    let { className: t, config: n } = e,
        r = (0, c.e7)([T.Z], () => T.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: a()(Q.giftCardPromotion, t),
        children: [
            r
                ? (0, i.jsx)('img', {
                      alt: '',
                      className: Q.giftImagePromotion,
                      'aria-hidden': !0,
                      src: n.getStaticImageUrl()
                  })
                : (0, i.jsx)(m.LottieAnimation, {
                      importData: n.getAnimatedImageData,
                      className: a()(Q.giftImageAnimatedPromotion, Q.giftImagePromotion)
                  }),
            (0, i.jsxs)('div', {
                className: Q.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: Q.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.Heading, {
                        className: Q.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: Q.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(F.Z, {
                        isGift: !0,
                        className: a()(Q.giftCardButton, Q.halloweenColor),
                        look: m.Button.Looks.OUTLINED,
                        buttonText: q.intl.string(q.t.Ve9Ge3),
                        buttonTextClassName: Q.giftButtonCTA,
                        color: m.Button.Colors.CUSTOM,
                        onClick: () => {
                            B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
    let t = null === (e = (0, M.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ei, { config: t })
        : (0, i.jsxs)('div', {
              className: a()(Q.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: Q.giftImage,
                      alt: '',
                      src: J
                  }),
                  (0, i.jsxs)('div', {
                      className: Q.giftInfo,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              className: Q.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: q.intl.string(q.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: Q.giftText,
                              variant: 'text-sm/normal',
                              children: q.intl.string(q.t.yQ06u7)
                          }),
                          (0, i.jsx)(F.Z, {
                              isGift: !0,
                              className: a()(Q.giftCardButton, Q.giftCardButtonColor),
                              look: m.Button.Looks.OUTLINED,
                              buttonText: q.intl.string(q.t.Ve9Ge3),
                              buttonTextClassName: Q.giftButtonCTA,
                              color: m.Button.Colors.CUSTOM,
                              onClick: () => {
                                  B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
    let e = (0, I.Q)(),
        { analyticsLocations: t } = (0, b.ZP)(S.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        a = (0, v.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, N.Z)({ forceFetch: !0 }),
        p = (0, k.n)(),
        f = null == p ? void 0 : p.countryCode,
        C = (0, c.e7)([R.Z], () => R.Z.enabled),
        T = 'PremiumManagementSettings';
    (0, E.j)({
        location: T + ' auto on',
        autoTrackExposure: !0
    }),
        (0, E.j)({
            location: T + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(T);
    let O = (0, w.b)(T),
        y = (0, Y.pn)(T);
    r.useEffect(() => {
        g.Z.wait(async () => {
            !C && !e && (await Promise.all([h.jg(), h.tZ(), (0, x.Y2)(f, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [f, C, e]);
    let [D, Z] = r.useState(!1);
    if (C) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(A.c8, {});
    let L = s && null !== n && a,
        M = u !== z.a$.NONE;
    if (!L && !M && !l)
        return (0, i.jsx)(j.Z, {
            title: q.intl.string(q.t.dyq9TU),
            note: null
        });
    if ((!L && !M) || l) return (0, i.jsx)(m.Spinner, {});
    let F = null !== n && null != n.trialId;
    return (0, i.jsx)(b.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: Q.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (O || y) && (0, i.jsx)(W.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(H.Z, {
                            className: Q.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: q.intl.string(q.t.dnVvQU),
                            hidePill: !F,
                            selectedPlanColumnClassName: Q.tier2PlanComparisonTableBackground,
                            selectedPlanTier: z.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !D && (B.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), Z(!0));
                    },
                    children: (0, i.jsx)('div', { className: Q.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
