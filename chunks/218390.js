(n.d(t, {
    C: () => eu,
    Z: () => ep
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
    j = n(634894),
    E = n(410030),
    O = n(607070),
    C = n(100527),
    v = n(906732),
    S = n(211242),
    T = n(975298),
    N = n(15640),
    I = n(89057),
    y = n(406128),
    A = n(703656),
    P = n(246946),
    R = n(594174),
    D = n(78839),
    Z = n(483444),
    w = n(626135),
    k = n(63063),
    L = n(74538),
    B = n(140465),
    M = n(695349),
    U = n(249689),
    V = n(717401),
    G = n(286961),
    F = n(91802),
    H = n(533525),
    z = n(232076),
    W = n(736519),
    Y = n(767714),
    K = n(382791),
    q = n(823188),
    X = n(504865),
    Q = n(179984),
    J = n(386733),
    $ = n(474936),
    ee = n(981631),
    et = n(388032),
    en = n(133525),
    ei = n(881188),
    er = n(434691);
let es = 'to_premium_home_button',
    ea = 'premium home page',
    el = 'gifting_button',
    eo = 'payment modal';
function ec(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        a = t.hasActiveTrial,
        l = t.planIdFromItems === $.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        m = $.GP[t.planIdFromItems],
        g = L.ZP.formatPriceString(L.ZP.getDefaultPrice(m.id), m.interval);
    if (c) {
        var h, f, b;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (a || !l) &&
                    (0, i.jsx)(K.Cy, {
                        text: a ? et.intl.string(et.t.qYKftb) : et.intl.string(et.t.EyjDRE),
                        className: en.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? K.VE.PREMIUM_TIER_2_WHITE_FILL : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, i.jsx)('div', { className: en.rimGlowTier2 }),
                (0, i.jsx)(p.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: en.trialHeader,
                    children: a
                        ? et.intl.format(et.t['2CGBrq'], {
                              remainingTime: d,
                              price: g
                          })
                        : l
                          ? et.intl.format(et.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : $.Bo,
                                regularPrice: g
                            })
                          : et.intl.formatToPlainString(et.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : $.M_,
                                regularPrice: g,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : $.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(X.Z, {
        variant: void 0,
        subscriptionTier: $.Si.TIER_2,
        interval: m.interval
    });
}
function ed() {
    let e = R.default.getCurrentUser(),
        t = (0, B.t7)(),
        n = (0, B.lr)(),
        r = (0, E.ZP)(),
        s = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        l = (0, T.Z)(),
        o = (0, M.W)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !l.isFractionalPremiumActive) return null;
    let g = l.isFractionalPremiumActive,
        h = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)('div', {
        className: a()(en.tierCard, { [en.withTier2Rim]: t || h }),
        children: [
            (0, i.jsxs)('div', {
                className: en.tierInfo,
                children: [
                    (0, i.jsx)(Z.Z, { className: en.tierTitle }),
                    g && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(K.mn, {
                                      text: et.intl.string(et.t.uXF4c3),
                                      className: en.fractionalPremiumTopRimPill,
                                      colorOptions: K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(p.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: en.fractionalPremiumSubheader,
                                      children: et.intl.format(et.t.sK7fGh, { helpCenterLink: k.Z.getArticleURL(ee.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : d
                          ? (0, i.jsx)(ec, {
                                premiumSubscription: s,
                                isDiscountApplied: t,
                                activeDiscountInfo: n,
                                theme: r
                            })
                          : o
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(K.Cy, {
                                          text: et.intl.string(et.t.qYKftb),
                                          className: en.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? K.VE.PREMIUM_TIER_2_WHITE_FILL : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(p.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: en.trialHeader,
                                          children: et.intl.format(et.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(q.nT, { featureSet: g ? q.uZ.FRACTIONAL_PREMIUM : q.uZ.DEFAULT }),
                    g && !d && (0, U.C)('nitro-settings-hero', e)
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(Y.Z, {
                                      textOptions: {
                                          textOverride: o ? et.intl.string(et.t.YScQSE) : et.intl.string(et.t['0b3YRk']),
                                          textClassName: en.tierCardButtonCTA
                                      },
                                      className: en.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: en.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (w.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: es,
                                              target: ea
                                          }),
                                              (0, f.xf)(),
                                              (0, A.uL)(ee.Z5c.APPLICATION_STORE));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: en.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: o ? et.intl.string(et.t.VR2iVF) : et.intl.string(et.t.T1aUAQ)
                                      })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.zx, {
                                      className: en.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (w.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: es,
                                              target: ea
                                          }),
                                              (0, f.xf)(),
                                              (0, A.uL)(ee.Z5c.APPLICATION_STORE));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: en.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: et.intl.string(et.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: en.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (w.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              x.Z.open(ee.oAB.SUBSCRIPTIONS));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: en.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: et.intl.string(et.t['9uDy6O'])
                                      })
                                  })
                              ]
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: en.tierImage,
                children: (0, i.jsx)('img', {
                    className: en.tierImage,
                    alt: '',
                    src: ei
                })
            })
        ]
    });
}
function eu(e) {
    var t, n;
    let { className: r, config: s } = e,
        l = (0, c.e7)([O.Z], () => O.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, V.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : 'var(--always-white)' };
    return (0, i.jsxs)('div', {
        className: a()(en.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: en.giftImagePromotion,
                'aria-hidden': !0,
                src: l
            }),
            (0, i.jsxs)('div', {
                className: en.giftInfoPromotion,
                children: [
                    null != s.getBackgroundImageUrl &&
                        (0, i.jsx)('img', {
                            alt: '',
                            'aria-hidden': !0,
                            className: en.giftCardPromotionBannerImage,
                            src: s.getBackgroundImageUrl()
                        }),
                    (0, i.jsx)(p.X6q, {
                        className: en.giftInfoTitlePromotion,
                        style: d,
                        variant: 'text-lg/bold',
                        children: s.title()
                    }),
                    (0, i.jsx)(p.Text, {
                        className: en.giftText,
                        style: d,
                        variant: 'text-sm/medium',
                        children: s.body()
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(p.Text, {
                            className: en.giftAdditionalTerm,
                            style: d,
                            variant: 'text-xxs/normal',
                            children: s.additionalTerm()
                        }),
                    (0, i.jsx)(W.Z, {
                        className: en.giftCardButton,
                        textOptions: {
                            textOverride: et.intl.string(et.t.Ve9Ge3),
                            textClassName: en.giftButtonCTA
                        },
                        color: m.zx.Colors.BRAND,
                        onClick: () => {
                            w.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: el,
                                target: eo
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function em() {
    var e;
    let t = null == (e = (0, G.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(eu, { config: t })
        : (0, i.jsxs)('div', {
              className: en.giftCard,
              children: [
                  (0, i.jsx)('img', {
                      className: en.giftImage,
                      alt: '',
                      src: er
                  }),
                  (0, i.jsxs)('div', {
                      className: en.giftInfo,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: en.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: et.intl.string(et.t['3KomGR'])
                          }),
                          (0, i.jsx)(p.Text, {
                              className: en.giftText,
                              variant: 'text-sm/normal',
                              children: et.intl.string(et.t.yQ06u7)
                          }),
                          (0, i.jsx)(W.Z, {
                              className: a()(en.giftCardButton, en.giftCardButtonColor),
                              textOptions: {
                                  textOverride: et.intl.string(et.t.Ve9Ge3),
                                  textClassName: en.giftButtonCTA
                              },
                              color: m.zx.Colors.CUSTOM,
                              onClick: () => {
                                  w.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: el,
                                      target: eo
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let ep = function () {
    let e = (0, S.Q)(),
        { analyticsLocations: t } = (0, v.ZP)(C.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        s = (0, c.e7)([D.Z], () => D.Z.hasFetchedSubscriptions()),
        a = (0, N.V)(),
        [l, o] = r.useState(!0),
        u = (0, T.Z)({ forceFetch: !0 }),
        m = (0, F.n)(),
        f = null == m ? void 0 : m.countryCode,
        x = (0, c.e7)([P.Z], () => P.Z.enabled),
        E = r.useRef(null),
        O = 'PremiumManagementSettings';
    ((0, j.j)({
        location: O + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: O + ' auto off',
            autoTrackExposure: !1
        }),
        (0, z.B)(O));
    let A = (0, H.b)(O);
    r.useEffect(() => {
        g.Z.wait(async () => {
            (x || e || (await Promise.all([h.jg(), h.tZ(), (0, b.Y2)(f, null, ee.JjL.DISCOVERY)])), o(!1));
        });
    }, [f, x, e]);
    let [R, Z] = r.useState(!1);
    if (x) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(I.c8, {});
    let k = s && null !== n && a,
        L = u.fetched && u.isFractionalPremiumActive;
    if (!k && !L && !l)
        return (0, i.jsx)(y.Z, {
            title: et.intl.string(et.t.dyq9TU),
            note: null
        });
    if ((!k && !L) || l) return (0, i.jsx)(p.$jN, {});
    let B = !!(null == n ? void 0 : n.hasActiveTrial);
    return (0, i.jsx)(v.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: en.__invalid_container,
                    children: [
                        (0, i.jsx)(ed, {}),
                        A && (0, i.jsx)(J.Z, { isInSettings: !0 }),
                        (0, i.jsx)(em, {}),
                        (0, i.jsx)(Q.Z, {
                            className: en.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: et.intl.string(et.t.dnVvQU),
                            hidePill: !B,
                            selectedPlanColumnClassName: en.tier2PlanComparisonTableBackground,
                            selectedPlanTier: $.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: E,
                    onChange: (e) => {
                        e && !R && (w.default.track(ee.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), Z(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: E,
                        className: en.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
