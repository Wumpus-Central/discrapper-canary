(n.d(t, {
    C: () => ec,
    Z: () => eu
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
    G = n(533525),
    F = n(232076),
    H = n(736519),
    z = n(767714),
    W = n(382791),
    Y = n(823188),
    K = n(504865),
    q = n(179984),
    X = n(386733),
    J = n(474936),
    Q = n(981631),
    $ = n(388032),
    ee = n(133525),
    et = n(881188),
    en = n(434691);
let ei = 'to_premium_home_button',
    er = 'premium home page',
    es = 'gifting_button',
    ea = 'payment modal';
function el(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        a = t.hasActiveTrial,
        l = t.planIdFromItems === J.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        m = J.GP[t.planIdFromItems],
        g = k.ZP.formatPriceString(k.ZP.getDefaultPrice(m.id), m.interval);
    if (c) {
        var h, f, b;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (a || !l) &&
                    (0, i.jsx)(W.Cy, {
                        text: a ? $.intl.string($.t.qYKftb) : $.intl.string($.t.EyjDRE),
                        className: ee.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? W.VE.PREMIUM_TIER_2_WHITE_FILL : W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, i.jsx)('div', { className: ee.rimGlowTier2 }),
                (0, i.jsx)(p.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: ee.trialHeader,
                    children: a
                        ? $.intl.format($.t['2CGBrq'], {
                              remainingTime: d,
                              price: g
                          })
                        : l
                          ? $.intl.format($.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : J.Bo,
                                regularPrice: g
                            })
                          : $.intl.formatToPlainString($.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : J.M_,
                                regularPrice: g,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : J.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(K.Z, {
        variant: void 0,
        subscriptionTier: J.Si.TIER_2,
        interval: m.interval
    });
}
function eo() {
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
        className: a()(ee.tierCard, { [ee.withTier2Rim]: t || h }),
        children: [
            (0, i.jsxs)('div', {
                className: ee.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: ee.tierTitle }),
                    g && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(W.mn, {
                                      text: $.intl.string($.t.uXF4c3),
                                      className: ee.fractionalPremiumTopRimPill,
                                      colorOptions: W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(p.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: ee.fractionalPremiumSubheader,
                                      children: $.intl.format($.t.sK7fGh, { helpCenterLink: w.Z.getArticleURL(Q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : d
                          ? (0, i.jsx)(el, {
                                premiumSubscription: s,
                                isDiscountApplied: t,
                                activeDiscountInfo: n,
                                theme: r
                            })
                          : o
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(W.Cy, {
                                          text: $.intl.string($.t.qYKftb),
                                          className: ee.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? W.VE.PREMIUM_TIER_2_WHITE_FILL : W.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(p.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: ee.trialHeader,
                                          children: $.intl.format($.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(Y.nT, { featureSet: g ? Y.uZ.FRACTIONAL_PREMIUM : Y.uZ.DEFAULT }),
                    g && !d && (0, M.C)('nitro-settings-hero', e)
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(z.Z, {
                                      textOptions: {
                                          textOverride: o ? $.intl.string($.t.YScQSE) : $.intl.string($.t['0b3YRk']),
                                          textClassName: ee.tierCardButtonCTA
                                      },
                                      className: ee.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: ee.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ei,
                                              target: er
                                          }),
                                              (0, f.xf)(),
                                              (0, y.uL)(Q.Z5c.APPLICATION_STORE));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: ee.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: o ? $.intl.string($.t.VR2iVF) : $.intl.string($.t.T1aUAQ)
                                      })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.zx, {
                                      className: ee.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ei,
                                              target: er
                                          }),
                                              (0, f.xf)(),
                                              (0, y.uL)(Q.Z5c.APPLICATION_STORE));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: ee.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: $.intl.string($.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: ee.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          (Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              x.Z.open(Q.oAB.SUBSCRIPTIONS));
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: ee.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: $.intl.string($.t['9uDy6O'])
                                      })
                                  })
                              ]
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: ee.tierImage,
                children: (0, i.jsx)('img', {
                    className: ee.tierImage,
                    alt: '',
                    src: et
                })
            })
        ]
    });
}
function ec(e) {
    var t, n;
    let { className: r, config: s } = e,
        l = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, U.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : 'var(--always-white)' };
    return (0, i.jsxs)('div', {
        className: a()(ee.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: ee.giftImagePromotion,
                'aria-hidden': !0,
                src: l
            }),
            (0, i.jsxs)('div', {
                className: ee.giftInfoPromotion,
                children: [
                    null != s.getBackgroundImageUrl &&
                        (0, i.jsx)('img', {
                            alt: '',
                            'aria-hidden': !0,
                            className: ee.giftCardPromotionBannerImage,
                            src: s.getBackgroundImageUrl()
                        }),
                    (0, i.jsx)(p.X6q, {
                        className: ee.giftInfoTitlePromotion,
                        style: d,
                        variant: 'text-lg/bold',
                        children: s.title()
                    }),
                    (0, i.jsx)(p.Text, {
                        className: ee.giftText,
                        style: d,
                        variant: 'text-sm/medium',
                        children: s.body()
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(p.Text, {
                            className: ee.giftAdditionalTerm,
                            style: d,
                            variant: 'text-xxs/normal',
                            children: s.additionalTerm()
                        }),
                    (0, i.jsx)(H.Z, {
                        className: ee.giftCardButton,
                        textOptions: {
                            textOverride: $.intl.string($.t.Ve9Ge3),
                            textClassName: ee.giftButtonCTA
                        },
                        color: m.zx.Colors.BRAND,
                        onClick: () => {
                            Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: es,
                                target: ea
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function ed() {
    var e;
    let t = null == (e = (0, V.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ec, { config: t })
        : (0, i.jsxs)('div', {
              className: ee.giftCard,
              children: [
                  (0, i.jsx)('img', {
                      className: ee.giftImage,
                      alt: '',
                      src: en
                  }),
                  (0, i.jsxs)('div', {
                      className: ee.giftInfo,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: ee.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: $.intl.string($.t['3KomGR'])
                          }),
                          (0, i.jsx)(p.Text, {
                              className: ee.giftText,
                              variant: 'text-sm/normal',
                              children: $.intl.string($.t.yQ06u7)
                          }),
                          (0, i.jsx)(H.Z, {
                              className: a()(ee.giftCardButton, ee.giftCardButtonColor),
                              textOptions: {
                                  textOverride: $.intl.string($.t.Ve9Ge3),
                                  textClassName: ee.giftButtonCTA
                              },
                              color: m.zx.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: ea
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let eu = function () {
    let e = 'PremiumManagementSettings',
        t = (0, v.Q)(),
        { analyticsLocations: n } = (0, C.ZP)(O.Z.PREMIUM_SETTINGS),
        s = (0, c.e7)([R.Z], () => R.Z.getPremiumTypeSubscription()),
        a = (0, c.e7)([R.Z], () => R.Z.hasFetchedSubscriptions()),
        l = (0, T.V)(),
        [o, u] = r.useState(!0),
        m = (0, S.Z)({ forceFetch: !0 }),
        f = (0, c.e7)([A.Z], () => A.Z.enabled),
        x = r.useRef(null);
    (0, F.B)(e);
    let j = (0, G.b)(e);
    r.useEffect(() => {
        g.Z.wait(async () => {
            (f || t || (await Promise.all([h.jg(), h.tZ(), (0, b.Y2)(null, null, Q.JjL.DISCOVERY)])), u(!1));
        });
    }, [f, t]);
    let [E, y] = r.useState(!1);
    if (f) return (0, i.jsx)(_.Z, {});
    if (t) return (0, i.jsx)(N.c8, {});
    let P = a && null !== s && l,
        D = m.fetched && m.isFractionalPremiumActive;
    if (!P && !D && !o)
        return (0, i.jsx)(I.Z, {
            title: $.intl.string($.t.dyq9TU),
            note: null
        });
    if ((!P && !D) || o) return (0, i.jsx)(p.$jN, {});
    let w = !!(null == s ? void 0 : s.hasActiveTrial);
    return (0, i.jsx)(C.Gt, {
        value: n,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: ee.__invalid_container,
                    children: [
                        (0, i.jsx)(eo, {}),
                        j && (0, i.jsx)(X.Z, { isInSettings: !0 }),
                        (0, i.jsx)(ed, {}),
                        (0, i.jsx)(q.Z, {
                            className: ee.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: $.intl.string($.t.dnVvQU),
                            hidePill: !w,
                            selectedPlanColumnClassName: ee.tier2PlanComparisonTableBackground,
                            selectedPlanTier: J.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: x,
                    onChange: (e) => {
                        e && !E && (Z.default.track(Q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }), y(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: x,
                        className: ee.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
