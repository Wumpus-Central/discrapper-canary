n.d(t, {
    C: () => ea,
    Z: () => ec
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    p = n(570140),
    g = n(355467),
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
    H = n(197115),
    z = n(823188),
    W = n(504865),
    Y = n(179984),
    K = n(386733),
    q = n(474936),
    X = n(981631),
    Q = n(388032),
    J = n(133525),
    $ = n(881188),
    ee = n(434691);
let et = 'to_premium_home_button',
    en = 'premium home page',
    ei = 'gifting_button',
    er = 'payment modal';
function es(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        l = t.hasActiveTrial,
        a = t.planIdFromItems === q.Xh.PREMIUM_YEAR_TIER_2,
        c = n || l,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        p = q.GP[t.planIdFromItems],
        g = k.ZP.formatPriceString(k.ZP.getDefaultPrice(p.id), p.interval);
    if (c) {
        var h, f, b;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (l || !a) &&
                    (0, i.jsx)(z.Cy, {
                        text: l ? Q.intl.string(Q.t.qYKftb) : Q.intl.string(Q.t.EyjDRE),
                        className: J.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? z.VE.PREMIUM_TIER_2_WHITE_FILL : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (l || !a) && (0, i.jsx)('div', { className: J.rimGlowTier2 }),
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: J.trialHeader,
                    children: l
                        ? Q.intl.format(Q.t['2CGBrq'], {
                              remainingTime: d,
                              price: g
                          })
                        : a
                          ? Q.intl.format(Q.t['+qqh6u'], {
                                percent: null != (h = null == r ? void 0 : r.percentage) ? h : q.Bo,
                                regularPrice: g
                            })
                          : Q.intl.formatToPlainString(Q.t['3Ziutb'], {
                                percent: null != (f = null == r ? void 0 : r.percentage) ? f : q.M_,
                                regularPrice: g,
                                numMonths: null != (b = null == r ? void 0 : r.duration) ? b : q.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(W.Z, {
        variant: void 0,
        subscriptionTier: q.Si.TIER_2,
        interval: p.interval
    });
}
function el() {
    let e = P.default.getCurrentUser(),
        t = (0, L.t7)(),
        n = (0, L.lr)(),
        r = (0, E.ZP)(),
        s = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        a = (0, v.Z)(),
        o = (0, B.W)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !a.isFractionalPremiumActive) return null;
    let p = a.isFractionalPremiumActive,
        g = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)('div', {
        className: l()(J.tierCard, { [J.withTier2Rim]: t || g }),
        children: [
            (0, i.jsxs)('div', {
                className: J.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: J.tierTitle }),
                    p && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(z.mn, {
                                      text: Q.intl.string(Q.t.uXF4c3),
                                      className: J.fractionalPremiumTopRimPill,
                                      colorOptions: z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: J.fractionalPremiumSubheader,
                                      children: Q.intl.format(Q.t.sK7fGh, { helpCenterLink: w.Z.getArticleURL(X.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : d
                          ? (0, i.jsx)(es, {
                                premiumSubscription: s,
                                isDiscountApplied: t,
                                activeDiscountInfo: n,
                                theme: r
                            })
                          : o
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(z.Cy, {
                                          text: Q.intl.string(Q.t.qYKftb),
                                          className: J.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(r) ? z.VE.PREMIUM_TIER_2_WHITE_FILL : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(m.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: J.trialHeader,
                                          children: Q.intl.format(Q.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(z.nT, { featureSet: p && !o ? z.uZ.FRACTIONAL_PREMIUM : z.uZ.DEFAULT }),
                    p && !d && (0, M.C)('nitro-settings-hero', e)
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(H.Z, {
                                      buttonText: o ? Q.intl.string(Q.t.YScQSE) : Q.intl.string(Q.t['0b3YRk']),
                                      buttonTextClassName: J.tierCardButtonCTA,
                                      className: J.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      className: J.managePlanButton,
                                      look: m.zxk.Looks.OUTLINED,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: et,
                                              target: en
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)(X.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(m.Text, {
                                          className: J.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: o ? Q.intl.string(Q.t.VR2iVF) : Q.intl.string(Q.t.T1aUAQ)
                                      })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.zxk, {
                                      className: J.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: et,
                                              target: en
                                          }),
                                              (0, h.xf)(),
                                              (0, y.uL)(X.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(m.Text, {
                                          className: J.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: Q.intl.string(Q.t.VR2iVF)
                                      })
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      className: J.managePlanButton,
                                      look: m.zxk.Looks.OUTLINED,
                                      color: m.zxk.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: 'to_subscriptions_button',
                                              target: 'subscriptions settings'
                                          }),
                                              b.Z.open(X.oAB.SUBSCRIPTIONS);
                                      },
                                      children: (0, i.jsx)(m.Text, {
                                          className: J.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: Q.intl.string(Q.t['9uDy6O'])
                                      })
                                  })
                              ]
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: J.tierImage,
                children: (0, i.jsx)('img', {
                    className: J.tierImage,
                    alt: '',
                    src: $
                })
            })
        ]
    });
}
function ea(e) {
    let { className: t, config: n } = e,
        r = (0, c.e7)([C.Z], () => C.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: l()(J.giftCardPromotion, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: J.giftImagePromotion,
                'aria-hidden': !0,
                src: r
            }),
            (0, i.jsxs)('div', {
                className: J.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: J.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.X6q, {
                        className: J.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: J.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(H.Z, {
                        isGift: !0,
                        className: l()(J.giftCardButton, J.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: Q.intl.string(Q.t.Ve9Ge3),
                        buttonTextClassName: J.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ei,
                                target: er
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function eo() {
    var e;
    let t = null == (e = (0, U.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ea, { config: t })
        : (0, i.jsxs)('div', {
              className: J.giftCard,
              children: [
                  (0, i.jsx)('img', {
                      className: J.giftImage,
                      alt: '',
                      src: ee
                  }),
                  (0, i.jsxs)('div', {
                      className: J.giftInfo,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              className: J.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Q.intl.string(Q.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: J.giftText,
                              variant: 'text-sm/normal',
                              children: Q.intl.string(Q.t.yQ06u7)
                          }),
                          (0, i.jsx)(H.Z, {
                              isGift: !0,
                              className: l()(J.giftCardButton, J.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: Q.intl.string(Q.t.Ve9Ge3),
                              buttonTextClassName: J.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ei,
                                      target: er
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let ec = function () {
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
        p.Z.wait(async () => {
            E || e || (await Promise.all([g.jg(), g.tZ(), (0, f.Y2)(b, null, X.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, E, e]);
    let [D, w] = r.useState(!1);
    if (E) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(I.c8, {});
    let k = s && null !== n && l,
        L = u.fetched && u.isFractionalPremiumActive;
    if (!k && !L && !a)
        return (0, i.jsx)(N.Z, {
            title: Q.intl.string(Q.t.dyq9TU),
            note: null
        });
    if ((!k && !L) || a) return (0, i.jsx)(m.$jN, {});
    let B = !!(null == n ? void 0 : n.hasActiveTrial);
    return (0, i.jsx)(O.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: J.__invalid_container,
                    children: [
                        (0, i.jsx)(el, {}),
                        P && (0, i.jsx)(K.Z, { isInSettings: !0 }),
                        (0, i.jsx)(eo, {}),
                        (0, i.jsx)(Y.Z, {
                            className: J.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Q.intl.string(Q.t.dnVvQU),
                            hidePill: !B,
                            selectedPlanColumnClassName: J.tier2PlanComparisonTableBackground,
                            selectedPlanTier: q.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    innerRef: C,
                    onChange: (e) => {
                        e && !D && (Z.default.track(X.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: C,
                        className: J.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
