n.d(t, {
    C: () => ec,
    Z: () => eu
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
    C = n(607070),
    j = n(100527),
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
    z = n(767714),
    Y = n(382791),
    W = n(823188),
    K = n(504865),
    q = n(179984),
    X = n(386733),
    Q = n(474936),
    J = n(981631),
    $ = n(388032),
    ee = n(133525),
    et = n(881188),
    en = n(434691);
let ei = 'to_premium_home_button',
    er = 'premium home page',
    es = 'gifting_button',
    el = 'payment modal';
function ea(e) {
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
                    (0, i.jsx)(Y.Cy, {
                        text: l ? $.intl.string($.t.qYKftb) : $.intl.string($.t.EyjDRE),
                        className: ee.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? Y.VE.PREMIUM_TIER_2_WHITE_FILL : Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (l || !a) && (0, i.jsx)('div', { className: ee.rimGlowTier2 }),
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: ee.trialHeader,
                    children: l
                        ? $.intl.format($.t['2CGBrq'], {
                              remainingTime: d,
                              price: p
                          })
                        : a
                          ? $.intl.format($.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : Q.Bo,
                                regularPrice: p
                            })
                          : $.intl.formatToPlainString($.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : Q.M_,
                                regularPrice: p,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : Q.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(K.Z, {
        variant: void 0,
        subscriptionTier: Q.Si.TIER_2,
        interval: g.interval
    });
}
function eo() {
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
        className: l()(ee.tierCard, { [ee.withTier2Rim]: t || p }),
        children: [
            (0, i.jsxs)('div', {
                className: ee.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: ee.tierTitle }),
                    g && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(Y.mn, {
                                      text: $.intl.string($.t.uXF4c3),
                                      className: ee.fractionalPremiumTopRimPill,
                                      colorOptions: Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: ee.fractionalPremiumSubheader,
                                      children: $.intl.format($.t.sK7fGh, { helpCenterLink: w.Z.getArticleURL(J.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : d
                          ? (0, i.jsx)(ea, {
                                premiumSubscription: s,
                                isDiscountApplied: t,
                                activeDiscountInfo: n,
                                theme: r
                            })
                          : o
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(Y.Cy, {
                                          text: $.intl.string($.t.qYKftb),
                                          className: ee.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? Y.VE.PREMIUM_TIER_2_WHITE_FILL : Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(m.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: ee.trialHeader,
                                          children: $.intl.format($.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(W.nT, { featureSet: g ? W.uZ.FRACTIONAL_PREMIUM : W.uZ.DEFAULT }),
                    g && !d && (0, M.C)('nitro-settings-hero', e)
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(z.Z, {
                                      textOptions: {
                                          textOverride: o ? $.intl.string($.t.YScQSE) : $.intl.string($.t['0b3YRk']),
                                          textClassName: ee.tierCardButtonCTA
                                      },
                                      className: ee.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      className: ee.managePlanButton,
                                      look: m.zxk.Looks.OUTLINED,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ei,
                                              target: er
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)(J.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(m.Text, {
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
                                  (0, i.jsx)(m.zxk, {
                                      className: ee.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ei,
                                              target: er
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)(J.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(m.Text, {
                                          className: ee.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: $.intl.string($.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      className: ee.managePlanButton,
                                      look: m.zxk.Looks.OUTLINED,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              b.Z.open(J.oAB.SUBSCRIPTIONS);
                                      },
                                      children: (0, i.jsx)(m.Text, {
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
        a = (0, c.e7)([C.Z], () => C.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, U.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : 'var(--always-white)' };
    return (0, i.jsxs)('div', {
        className: l()(ee.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: ee.giftImagePromotion,
                'aria-hidden': !0,
                src: a
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
                    (0, i.jsx)(m.X6q, {
                        className: ee.giftInfoTitlePromotion,
                        style: d,
                        variant: 'text-lg/bold',
                        children: s.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: ee.giftText,
                        style: d,
                        variant: 'text-sm/medium',
                        children: s.body()
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(m.Text, {
                            className: ee.giftAdditionalTerm,
                            style: d,
                            variant: 'text-xxs/normal',
                            children: s.additionalTerm()
                        }),
                    (0, i.jsx)(z.Z, {
                        isGift: !0,
                        className: ee.giftCardButton,
                        textOptions: {
                            textOverride: $.intl.string($.t.Ve9Ge3),
                            textClassName: ee.giftButtonCTA
                        },
                        color: m.zxk.Colors.BRAND,
                        onClick: () => {
                            Z.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: es,
                                target: el
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
                          (0, i.jsx)(m.X6q, {
                              className: ee.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: $.intl.string($.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: ee.giftText,
                              variant: 'text-sm/normal',
                              children: $.intl.string($.t.yQ06u7)
                          }),
                          (0, i.jsx)(z.Z, {
                              isGift: !0,
                              className: l()(ee.giftCardButton, ee.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              textOptions: {
                                  textOverride: $.intl.string($.t.Ve9Ge3),
                                  textClassName: ee.giftButtonCTA
                              },
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: el
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let eu = function () {
    let e = (0, S.Q)(),
        { analyticsLocations: t } = (0, O.ZP)(j.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        l = (0, T.V)(),
        [a, o] = r.useState(!0),
        u = (0, v.Z)({ forceFetch: !0 }),
        h = (0, G.n)(),
        b = null == h ? void 0 : h.countryCode,
        E = (0, c.e7)([A.Z], () => A.Z.enabled),
        C = r.useRef(null),
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
            E || e || (await Promise.all([p.jg(), p.tZ(), (0, f.Y2)(b, null, J.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, E, e]);
    let [D, w] = r.useState(!1);
    if (E) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(I.c8, {});
    let k = s && null !== n && l,
        L = u.fetched && u.isFractionalPremiumActive;
    if (!k && !L && !a)
        return (0, i.jsx)(N.Z, {
            title: $.intl.string($.t.dyq9TU),
            note: null
        });
    if ((!k && !L) || a) return (0, i.jsx)(m.$jN, {});
    let B = !!(null == n ? void 0 : n.hasActiveTrial);
    return (0, i.jsx)(O.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: ee.__invalid_container,
                    children: [
                        (0, i.jsx)(eo, {}),
                        P && (0, i.jsx)(X.Z, { isInSettings: !0 }),
                        (0, i.jsx)(ed, {}),
                        (0, i.jsx)(q.Z, {
                            className: ee.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: $.intl.string($.t.dnVvQU),
                            hidePill: !B,
                            selectedPlanColumnClassName: ee.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Q.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: C,
                    onChange: (e) => {
                        e && !D && (Z.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: C,
                        className: ee.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
