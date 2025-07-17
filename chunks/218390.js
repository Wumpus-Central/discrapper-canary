(n.d(t, {
    C: () => ed,
    Z: () => em
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(755721),
    p = n(481060),
    g = n(570140),
    h = n(355467),
    f = n(37234),
    b = n(821849),
    x = n(230711),
    _ = n(497321),
    j = n(410030),
    E = n(607070),
    O = n(100527),
    C = n(906732),
    v = n(211242),
    S = n(975298),
    T = n(15640),
    N = n(89057),
    I = n(406128),
    y = n(703656),
    A = n(246946),
    P = n(594174),
    R = n(78839),
    D = n(483444),
    Z = n(626135),
    w = n(63063),
    k = n(74538),
    L = n(140465),
    B = n(695349),
    M = n(249689),
    U = n(717401),
    V = n(286961),
    G = n(91802),
    F = n(533525),
    H = n(232076),
    z = n(736519),
    W = n(767714),
    Y = n(382791),
    K = n(823188),
    q = n(504865),
    X = n(179984),
    J = n(386733),
    Q = n(474936),
    $ = n(981631),
    ee = n(388032),
    et = n(133525),
    en = n(881188),
    ei = n(434691);
let er = 'to_premium_home_button',
    es = 'premium home page',
    ea = 'gifting_button',
    el = 'payment modal';
function eo(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        a = t.hasActiveTrial,
        l = t.planIdFromItems === Q.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        m = Q.GP[t.planIdFromItems],
        g = k.ZP.formatPriceString(k.ZP.getDefaultPrice(m.id), m.interval);
    if (c) {
        var h, f, b;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (a || !l) &&
                    (0, i.jsx)(Y.Cy, {
                        text: a ? ee.intl.string(ee.t.qYKftb) : ee.intl.string(ee.t.EyjDRE),
                        className: et.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? Y.VE.PREMIUM_TIER_2_WHITE_FILL : Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, i.jsx)('div', { className: et.rimGlowTier2 }),
                (0, i.jsx)(p.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: et.trialHeader,
                    children: a
                        ? ee.intl.format(ee.t['2CGBrq'], {
                              remainingTime: d,
                              price: g
                          })
                        : l
                          ? ee.intl.format(ee.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : Q.Bo,
                                regularPrice: g
                            })
                          : ee.intl.formatToPlainString(ee.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : Q.M_,
                                regularPrice: g,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : Q.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(q.Z, {
        variant: void 0,
        subscriptionTier: Q.Si.TIER_2,
        interval: m.interval
    });
}
function ec() {
    let e = P.default.getCurrentUser(),
        t = (0, L.t7)(),
        n = (0, L.lr)(),
        r = (0, j.ZP)(),
        s = (0, c.e7)([R.Z], () => R.Z.getPremiumTypeSubscription()),
        l = (0, S.Z)(),
        o = (0, B.W)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !l.isFractionalPremiumActive) return null;
    let g = l.isFractionalPremiumActive,
        h = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)('div', {
        className: a()(et.tierCard, { [et.withTier2Rim]: t || h }),
        children: [
            (0, i.jsxs)('div', {
                className: et.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: et.tierTitle }),
                    g && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(Y.mn, {
                                      text: ee.intl.string(ee.t.uXF4c3),
                                      className: et.fractionalPremiumTopRimPill,
                                      colorOptions: Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(p.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: et.fractionalPremiumSubheader,
                                      children: ee.intl.format(ee.t.sK7fGh, { helpCenterLink: w.Z.getArticleURL($.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : d
                          ? (0, i.jsx)(eo, {
                                premiumSubscription: s,
                                isDiscountApplied: t,
                                activeDiscountInfo: n,
                                theme: r
                            })
                          : o
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(Y.Cy, {
                                          text: ee.intl.string(ee.t.qYKftb),
                                          className: et.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? Y.VE.PREMIUM_TIER_2_WHITE_FILL : Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(p.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: et.trialHeader,
                                          children: ee.intl.format(ee.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(K.nT, { featureSet: g ? K.uZ.FRACTIONAL_PREMIUM : K.uZ.DEFAULT }),
                    g && !d && (0, M.C)('nitro-settings-hero', e)
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(W.Z, {
                                      textOptions: {
                                          textOverride: o ? ee.intl.string(ee.t.YScQSE) : ee.intl.string(ee.t['0b3YRk']),
                                          textClassName: et.tierCardButtonCTA
                                      },
                                      className: et.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: et.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: er,
                                              target: es
                                          }),
                                              (0, f.xf)(),
                                              (0, y.uL)($.Z5c.APPLICATION_STORE));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: et.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: o ? ee.intl.string(ee.t.VR2iVF) : ee.intl.string(ee.t.T1aUAQ)
                                      })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.zx, {
                                      className: et.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: er,
                                              target: es
                                          }),
                                              (0, f.xf)(),
                                              (0, y.uL)($.Z5c.APPLICATION_STORE));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: et.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: ee.intl.string(ee.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: et.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              x.Z.open($.oAB.SUBSCRIPTIONS));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: et.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: ee.intl.string(ee.t['9uDy6O'])
                                      })
                                  })
                              ]
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: et.tierImage,
                children: (0, i.jsx)('img', {
                    className: et.tierImage,
                    alt: '',
                    src: en
                })
            })
        ]
    });
}
function ed(e) {
    var t, n;
    let { className: r, config: s } = e,
        l = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, U.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : 'var(--always-white)' };
    return (0, i.jsxs)('div', {
        className: a()(et.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: et.giftImagePromotion,
                'aria-hidden': !0,
                src: l
            }),
            (0, i.jsxs)('div', {
                className: et.giftInfoPromotion,
                children: [
                    null != s.getBackgroundImageUrl &&
                        (0, i.jsx)('img', {
                            alt: '',
                            'aria-hidden': !0,
                            className: et.giftCardPromotionBannerImage,
                            src: s.getBackgroundImageUrl()
                        }),
                    (0, i.jsx)(p.X6q, {
                        className: et.giftInfoTitlePromotion,
                        style: d,
                        variant: 'text-lg/bold',
                        children: s.title()
                    }),
                    (0, i.jsx)(p.Text, {
                        className: et.giftText,
                        style: d,
                        variant: 'text-sm/medium',
                        children: s.body()
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(p.Text, {
                            className: et.giftAdditionalTerm,
                            style: d,
                            variant: 'text-xxs/normal',
                            children: s.additionalTerm()
                        }),
                    (0, i.jsx)(z.Z, {
                        className: et.giftCardButton,
                        textOptions: {
                            textOverride: ee.intl.string(ee.t.Ve9Ge3),
                            textClassName: et.giftButtonCTA
                        },
                        color: m.zx.Colors.BRAND,
                        onClick: () => {
                            Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ea,
                                target: el
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function eu() {
    var e;
    let t = null == (e = (0, V.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ed, { config: t })
        : (0, i.jsxs)('div', {
              className: et.giftCard,
              children: [
                  (0, i.jsx)('img', {
                      className: et.giftImage,
                      alt: '',
                      src: ei
                  }),
                  (0, i.jsxs)('div', {
                      className: et.giftInfo,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: et.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: ee.intl.string(ee.t['3KomGR'])
                          }),
                          (0, i.jsx)(p.Text, {
                              className: et.giftText,
                              variant: 'text-sm/normal',
                              children: ee.intl.string(ee.t.yQ06u7)
                          }),
                          (0, i.jsx)(z.Z, {
                              className: a()(et.giftCardButton, et.giftCardButtonColor),
                              textOptions: {
                                  textOverride: ee.intl.string(ee.t.Ve9Ge3),
                                  textClassName: et.giftButtonCTA
                              },
                              color: m.zx.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ea,
                                      target: el
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let em = function () {
    let e = 'PremiumManagementSettings',
        t = (0, v.Q)(),
        { analyticsLocations: n } = (0, C.ZP)(O.Z.PREMIUM_SETTINGS),
        s = (0, c.e7)([R.Z], () => R.Z.getPremiumTypeSubscription()),
        a = (0, c.e7)([R.Z], () => R.Z.hasFetchedSubscriptions()),
        l = (0, T.V)(),
        [o, u] = r.useState(!0),
        m = (0, S.Z)({ forceFetch: !0 }),
        f = (0, G.n)(),
        x = null == f ? void 0 : f.countryCode,
        j = (0, c.e7)([A.Z], () => A.Z.enabled),
        E = r.useRef(null);
    (0, H.B)(e);
    let y = (0, F.b)(e);
    r.useEffect(() => {
        g.Z.wait(async () => {
            (j || t || (await Promise.all([h.jg(), h.tZ(), (0, b.Y2)(x, null, $.JjL.DISCOVERY)])), u(!1));
        });
    }, [x, j, t]);
    let [P, D] = r.useState(!1);
    if (j) return (0, i.jsx)(_.Z, {});
    if (t) return (0, i.jsx)(N.c8, {});
    let w = a && null !== s && l,
        k = m.fetched && m.isFractionalPremiumActive;
    if (!w && !k && !o)
        return (0, i.jsx)(I.Z, {
            title: ee.intl.string(ee.t.dyq9TU),
            note: null
        });
    if ((!w && !k) || o) return (0, i.jsx)(p.$jN, {});
    let L = !!(null == s ? void 0 : s.hasActiveTrial);
    return (0, i.jsx)(C.Gt, {
        value: n,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: et.__invalid_container,
                    children: [
                        (0, i.jsx)(ec, {}),
                        y && (0, i.jsx)(J.Z, { isInSettings: !0 }),
                        (0, i.jsx)(eu, {}),
                        (0, i.jsx)(X.Z, {
                            className: et.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: ee.intl.string(ee.t.dnVvQU),
                            hidePill: !L,
                            selectedPlanColumnClassName: et.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Q.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: E,
                    onChange: (e) => {
                        e && !P && (Z.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }), D(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: E,
                        className: et.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
