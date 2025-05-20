n.d(t, {
    C: () => eo,
    Z: () => ed
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
    g = n(481060),
    m = n(570140),
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
    U = n(286961),
    V = n(91802),
    G = n(533525),
    F = n(232076),
    H = n(767714),
    z = n(382791),
    W = n(823188),
    Y = n(504865),
    K = n(179984),
    q = n(386733),
    X = n(474936),
    Q = n(981631),
    J = n(388032),
    $ = n(133525),
    ee = n(881188),
    et = n(434691);
let en = 'to_premium_home_button',
    ei = 'premium home page',
    er = 'gifting_button',
    es = 'payment modal';
function el(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        l = t.hasActiveTrial,
        a = t.planIdFromItems === X.Xh.PREMIUM_YEAR_TIER_2,
        c = n || l,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        m = X.GP[t.planIdFromItems],
        p = k.ZP.formatPriceString(k.ZP.getDefaultPrice(m.id), m.interval);
    if (c) {
        var h, f, b;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (l || !a) &&
                    (0, i.jsx)(z.Cy, {
                        text: l ? J.intl.string(J.t.qYKftb) : J.intl.string(J.t.EyjDRE),
                        className: $.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? z.VE.PREMIUM_TIER_2_WHITE_FILL : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (l || !a) && (0, i.jsx)('div', { className: $.rimGlowTier2 }),
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: $.trialHeader,
                    children: l
                        ? J.intl.format(J.t['2CGBrq'], {
                              remainingTime: d,
                              price: p
                          })
                        : a
                          ? J.intl.format(J.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : X.Bo,
                                regularPrice: p
                            })
                          : J.intl.formatToPlainString(J.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : X.M_,
                                regularPrice: p,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : X.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(Y.Z, {
        variant: void 0,
        subscriptionTier: X.Si.TIER_2,
        interval: m.interval
    });
}
function ea() {
    let e = P.default.getCurrentUser(),
        t = (0, L.t7)(),
        n = (0, L.lr)(),
        r = (0, E.ZP)(),
        s = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        a = (0, v.Z)(),
        o = (0, B.W)().isInReverseTrial,
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !a.isFractionalPremiumActive) return null;
    let m = a.isFractionalPremiumActive,
        p = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)('div', {
        className: l()($.tierCard, { [$.withTier2Rim]: t || p }),
        children: [
            (0, i.jsxs)('div', {
                className: $.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: $.tierTitle }),
                    m && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(z.mn, {
                                      text: J.intl.string(J.t.uXF4c3),
                                      className: $.fractionalPremiumTopRimPill,
                                      colorOptions: z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(g.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: $.fractionalPremiumSubheader,
                                      children: J.intl.format(J.t.sK7fGh, { helpCenterLink: w.Z.getArticleURL(Q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
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
                                      (0, i.jsx)(z.Cy, {
                                          text: J.intl.string(J.t.qYKftb),
                                          className: $.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? z.VE.PREMIUM_TIER_2_WHITE_FILL : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(g.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: $.trialHeader,
                                          children: J.intl.format(J.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(W.nT, { featureSet: m ? W.uZ.FRACTIONAL_PREMIUM : W.uZ.DEFAULT }),
                    m && !d && (0, M.C)('nitro-settings-hero', e)
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(H.Z, {
                                      textOptions: {
                                          textOverride: o ? J.intl.string(J.t.YScQSE) : J.intl.string(J.t['0b3YRk']),
                                          textClassName: $.tierCardButtonCTA
                                      },
                                      className: $.tierCardButton,
                                      color: g.zxk.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(g.zxk, {
                                      className: $.managePlanButton,
                                      look: g.zxk.Looks.OUTLINED,
                                      color: g.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: en,
                                              target: ei
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)(Q.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(g.Text, {
                                          className: $.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: o ? J.intl.string(J.t.VR2iVF) : J.intl.string(J.t.T1aUAQ)
                                      })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(g.zxk, {
                                      className: $.tierCardButton,
                                      color: g.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: en,
                                              target: ei
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)(Q.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(g.Text, {
                                          className: $.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: J.intl.string(J.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(g.zxk, {
                                      className: $.managePlanButton,
                                      look: g.zxk.Looks.OUTLINED,
                                      color: g.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              b.Z.open(Q.oAB.SUBSCRIPTIONS);
                                      },
                                      children: (0, i.jsx)(g.Text, {
                                          className: $.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: J.intl.string(J.t['9uDy6O'])
                                      })
                                  })
                              ]
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: $.tierImage,
                children: (0, i.jsx)('img', {
                    className: $.tierImage,
                    alt: '',
                    src: ee
                })
            })
        ]
    });
}
function eo(e) {
    let { className: t, config: n } = e,
        r = (0, c.e7)([C.Z], () => C.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: l()($.giftCardPromotion, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: $.giftImagePromotion,
                'aria-hidden': !0,
                src: r
            }),
            (0, i.jsxs)('div', {
                className: $.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: $.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(g.X6q, {
                        className: $.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(g.Text, {
                        className: $.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(H.Z, {
                        isGift: !0,
                        className: l()($.giftCardButton, $.halloweenColor),
                        look: g.zxk.Looks.OUTLINED,
                        textOptions: {
                            textOverride: J.intl.string(J.t.Ve9Ge3),
                            textClassName: $.giftButtonCTA
                        },
                        color: g.zxk.Colors.CUSTOM,
                        onClick: () => {
                            Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: er,
                                target: es
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function ec() {
    var e;
    let t = null == (e = (0, U.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(eo, { config: t })
        : (0, i.jsxs)('div', {
              className: $.giftCard,
              children: [
                  (0, i.jsx)('img', {
                      className: $.giftImage,
                      alt: '',
                      src: et
                  }),
                  (0, i.jsxs)('div', {
                      className: $.giftInfo,
                      children: [
                          (0, i.jsx)(g.X6q, {
                              className: $.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: J.intl.string(J.t['3KomGR'])
                          }),
                          (0, i.jsx)(g.Text, {
                              className: $.giftText,
                              variant: 'text-sm/normal',
                              children: J.intl.string(J.t.yQ06u7)
                          }),
                          (0, i.jsx)(H.Z, {
                              isGift: !0,
                              className: l()($.giftCardButton, $.giftCardButtonColor),
                              look: g.zxk.Looks.OUTLINED,
                              textOptions: {
                                  textOverride: J.intl.string(J.t.Ve9Ge3),
                                  textClassName: $.giftButtonCTA
                              },
                              color: g.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: er,
                                      target: es
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let ed = function () {
    let e = (0, S.Q)(),
        { analyticsLocations: t } = (0, O.ZP)(j.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        l = (0, T.V)(),
        [a, o] = r.useState(!0),
        u = (0, v.Z)({ forceFetch: !0 }),
        h = (0, V.n)(),
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
        (0, F.B)(y);
    let P = (0, G.b)(y);
    r.useEffect(() => {
        m.Z.wait(async () => {
            E || e || (await Promise.all([p.jg(), p.tZ(), (0, f.Y2)(b, null, Q.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, E, e]);
    let [D, w] = r.useState(!1);
    if (E) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(I.c8, {});
    let k = s && null !== n && l,
        L = u.fetched && u.isFractionalPremiumActive;
    if (!k && !L && !a)
        return (0, i.jsx)(N.Z, {
            title: J.intl.string(J.t.dyq9TU),
            note: null
        });
    if ((!k && !L) || a) return (0, i.jsx)(g.$jN, {});
    let B = !!(null == n ? void 0 : n.hasActiveTrial);
    return (0, i.jsx)(O.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: $.__invalid_container,
                    children: [
                        (0, i.jsx)(ea, {}),
                        P && (0, i.jsx)(q.Z, { isInSettings: !0 }),
                        (0, i.jsx)(ec, {}),
                        (0, i.jsx)(K.Z, {
                            className: $.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: J.intl.string(J.t.dnVvQU),
                            hidePill: !B,
                            selectedPlanColumnClassName: $.tier2PlanComparisonTableBackground,
                            selectedPlanTier: X.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: C,
                    onChange: (e) => {
                        e && !D && (Z.default.track(Q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: C,
                        className: $.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
