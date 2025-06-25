n.d(t, {
    C: () => ed,
    Z: () => em
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    g = n(570140),
    p = n(355467),
    h = n(37234),
    f = n(821849),
    b = n(230711),
    _ = n(497321),
    x = n(634894),
    E = n(410030),
    j = n(607070),
    C = n(100527),
    O = n(906732),
    S = n(211242),
    v = n(975298),
    T = n(15640),
    I = n(89057),
    N = n(406128),
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
    Y = n(767714),
    W = n(382791),
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
    el = 'gifting_button',
    ea = 'payment modal';
function eo(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        l = t.hasActiveTrial,
        a = t.planIdFromItems === Q.Xh.PREMIUM_YEAR_TIER_2,
        c = n || l,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = Q.GP[t.planIdFromItems],
        p = k.ZP.formatPriceString(k.ZP.getDefaultPrice(g.id), g.interval);
    if (c) {
        var h, f, b;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (l || !a) &&
                    (0, i.jsx)(W.Cy, {
                        text: l ? ee.intl.string(ee.t.qYKftb) : ee.intl.string(ee.t.EyjDRE),
                        className: et.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? W.VE.PREMIUM_TIER_2_WHITE_FILL : W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (l || !a) && (0, i.jsx)('div', { className: et.rimGlowTier2 }),
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: et.trialHeader,
                    children: l
                        ? ee.intl.format(ee.t['2CGBrq'], {
                              remainingTime: d,
                              price: p
                          })
                        : a
                          ? ee.intl.format(ee.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : Q.Bo,
                                regularPrice: p
                            })
                          : ee.intl.formatToPlainString(ee.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : Q.M_,
                                regularPrice: p,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : Q.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(q.Z, {
        variant: void 0,
        subscriptionTier: Q.Si.TIER_2,
        interval: g.interval
    });
}
function ec() {
    let e = P.default.getCurrentUser(),
        t = (0, L.t7)(),
        n = (0, L.lr)(),
        r = (0, E.ZP)(),
        s = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        a = (0, v.Z)(),
        o = (0, B.W)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !a.isFractionalPremiumActive) return null;
    let g = a.isFractionalPremiumActive,
        p = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)('div', {
        className: l()(et.tierCard, { [et.withTier2Rim]: t || p }),
        children: [
            (0, i.jsxs)('div', {
                className: et.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: et.tierTitle }),
                    g && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(W.mn, {
                                      text: ee.intl.string(ee.t.uXF4c3),
                                      className: et.fractionalPremiumTopRimPill,
                                      colorOptions: W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
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
                                      (0, i.jsx)(W.Cy, {
                                          text: ee.intl.string(ee.t.qYKftb),
                                          className: et.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? W.VE.PREMIUM_TIER_2_WHITE_FILL : W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(m.X6q, {
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
                                  (0, i.jsx)(Y.Z, {
                                      textOptions: {
                                          textOverride: o ? ee.intl.string(ee.t.YScQSE) : ee.intl.string(ee.t['0b3YRk']),
                                          textClassName: et.tierCardButtonCTA
                                      },
                                      className: et.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      className: et.managePlanButton,
                                      look: m.zxk.Looks.OUTLINED,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: er,
                                              target: es
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)($.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(m.Text, {
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
                                  (0, i.jsx)(m.zxk, {
                                      className: et.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: er,
                                              target: es
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)($.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(m.Text, {
                                          className: et.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: ee.intl.string(ee.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      className: et.managePlanButton,
                                      look: m.zxk.Looks.OUTLINED,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              b.Z.open($.oAB.SUBSCRIPTIONS);
                                      },
                                      children: (0, i.jsx)(m.Text, {
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
        a = (0, c.e7)([j.Z], () => j.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, U.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : 'var(--always-white)' };
    return (0, i.jsxs)('div', {
        className: l()(et.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: et.giftImagePromotion,
                'aria-hidden': !0,
                src: a
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
                    (0, i.jsx)(m.X6q, {
                        className: et.giftInfoTitlePromotion,
                        style: d,
                        variant: 'text-lg/bold',
                        children: s.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: et.giftText,
                        style: d,
                        variant: 'text-sm/medium',
                        children: s.body()
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(m.Text, {
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
                        color: m.zxk.Colors.BRAND,
                        onClick: () => {
                            Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: el,
                                target: ea
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
                          (0, i.jsx)(m.X6q, {
                              className: et.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: ee.intl.string(ee.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: et.giftText,
                              variant: 'text-sm/normal',
                              children: ee.intl.string(ee.t.yQ06u7)
                          }),
                          (0, i.jsx)(z.Z, {
                              className: l()(et.giftCardButton, et.giftCardButtonColor),
                              textOptions: {
                                  textOverride: ee.intl.string(ee.t.Ve9Ge3),
                                  textClassName: et.giftButtonCTA
                              },
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: el,
                                      target: ea
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let em = function () {
    let e = (0, S.Q)(),
        { analyticsLocations: t } = (0, O.ZP)(C.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        l = (0, T.V)(),
        [a, o] = r.useState(!0),
        u = (0, v.Z)({ forceFetch: !0 }),
        h = (0, G.n)(),
        b = null == h ? void 0 : h.countryCode,
        E = (0, c.e7)([A.Z], () => A.Z.enabled),
        j = r.useRef(null),
        y = 'PremiumManagementSettings';
    (0, x.j)({
        location: y + ' auto on',
        autoTrackExposure: !0
    }),
        (0, x.j)({
            location: y + ' auto off',
            autoTrackExposure: !1
        }),
        (0, H.B)(y);
    let P = (0, F.b)(y);
    r.useEffect(() => {
        g.Z.wait(async () => {
            E || e || (await Promise.all([p.jg(), p.tZ(), (0, f.Y2)(b, null, $.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, E, e]);
    let [D, w] = r.useState(!1);
    if (E) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(I.c8, {});
    let k = s && null !== n && l,
        L = u.fetched && u.isFractionalPremiumActive;
    if (!k && !L && !a)
        return (0, i.jsx)(N.Z, {
            title: ee.intl.string(ee.t.dyq9TU),
            note: null
        });
    if ((!k && !L) || a) return (0, i.jsx)(m.$jN, {});
    let B = !!(null == n ? void 0 : n.hasActiveTrial);
    return (0, i.jsx)(O.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: et.__invalid_container,
                    children: [
                        (0, i.jsx)(ec, {}),
                        P && (0, i.jsx)(J.Z, { isInSettings: !0 }),
                        (0, i.jsx)(eu, {}),
                        (0, i.jsx)(X.Z, {
                            className: et.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: ee.intl.string(ee.t.dnVvQU),
                            hidePill: !B,
                            selectedPlanColumnClassName: et.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Q.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: j,
                    onChange: (e) => {
                        e && !D && (Z.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: j,
                        className: et.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
