n.d(t, {
    C: () => el,
    Z: () => ec
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(913527),
    o = n.n(l),
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
    N = n(634894),
    x = n(410030),
    E = n(607070),
    j = n(100527),
    C = n(906732),
    O = n(211242),
    S = n(975298),
    v = n(15640),
    T = n(89057),
    I = n(406128),
    y = n(703656),
    A = n(246946),
    P = n(594174),
    R = n(78839),
    D = n(483444),
    Z = n(626135),
    w = n(63063),
    k = n(74538),
    W = n(140465),
    L = n(695349),
    B = n(249689),
    M = n(286961),
    U = n(91802),
    V = n(533525),
    G = n(232076),
    F = n(197115),
    H = n(823188),
    z = n(504865),
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
    er = 'gifting_button',
    ei = 'payment modal';
function es(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        a = null != t.trialId,
        l = t.planIdFromItems === q.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = q.GP[t.planIdFromItems],
        p = k.ZP.formatPriceString(k.ZP.getDefaultPrice(g.id), g.interval);
    if (c) {
        var h, f, b;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (a || !l) &&
                    (0, r.jsx)(H.Cy, {
                        text: a ? Q.NW.string(Q.t.qYKftb) : Q.NW.string(Q.t.EyjDRE),
                        className: J.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? H.VE.PREMIUM_TIER_2_WHITE_FILL : H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, r.jsx)('div', { className: J.rimGlowTier2 }),
                (0, r.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: J.trialHeader,
                    children: a
                        ? Q.NW.format(Q.t['2CGBrq'], {
                              remainingTime: d,
                              price: p
                          })
                        : l
                          ? Q.NW.format(Q.t['+qqh6u'], {
                                percent: null != (h = null == i ? void 0 : i.percentage) ? h : q.Bo,
                                regularPrice: p
                            })
                          : Q.NW.formatToPlainString(Q.t['3Ziutb'], {
                                percent: null != (f = null == i ? void 0 : i.percentage) ? f : q.M_,
                                regularPrice: p,
                                numMonths: null != (b = null == i ? void 0 : i.duration) ? b : q.rt
                            })
                })
            ]
        });
    }
    return (0, r.jsx)(z.Z, {
        variant: void 0,
        subscriptionTier: q.Si.TIER_2,
        interval: g.interval
    });
}
function ea() {
    let e = P.default.getCurrentUser(),
        t = (0, W.t7)(),
        n = (0, W.lr)(),
        i = (0, x.ZP)(),
        s = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        l = (0, S.Z)(),
        o = (0, L.W)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !l.isFractionalPremiumActive) return null;
    let g = l.isFractionalPremiumActive && !o,
        p = null !== s && null != s.trialId;
    return (0, r.jsxs)('div', {
        className: a()(J.tierCard, { [J.withTier2Rim]: t || p }),
        children: [
            (0, r.jsxs)('div', {
                className: J.tierInfo,
                children: [
                    (0, r.jsx)(D.Z, { className: J.tierTitle }),
                    g && !o
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(H.mn, {
                                      text: Q.NW.string(Q.t.uXF4c3),
                                      className: J.fractionalPremiumTopRimPill,
                                      colorOptions: H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, r.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: J.fractionalPremiumSubheader,
                                      children: Q.NW.format(Q.t.sK7fGh, { helpCenterLink: w.Z.getArticleURL(X.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : d
                          ? (0, r.jsx)(es, {
                                premiumSubscription: s,
                                isDiscountApplied: t,
                                activeDiscountInfo: n,
                                theme: i
                            })
                          : o
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(H.Cy, {
                                          text: Q.NW.string(Q.t.qYKftb),
                                          className: J.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(i) ? H.VE.PREMIUM_TIER_2_WHITE_FILL : H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: J.trialHeader,
                                          children: Q.NW.format(Q.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, r.jsx)(H.nT, { featureSet: g ? H.uZ.FRACTIONAL_PREMIUM : H.uZ.DEFAULT }),
                    g && !d && (0, B.$)('nitro-settings-hero', e)
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(F.Z, {
                                      buttonText: Q.NW.string(Q.t['0b3YRk']),
                                      buttonTextClassName: J.tierCardButtonCTA,
                                      className: J.tierCardButton,
                                      color: m.zxk.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1
                                  }),
                                  (0, r.jsx)(m.zxk, {
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
                                      children: (0, r.jsx)(m.Text, {
                                          className: J.__invalid_managePlanButtonCTA,
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: Q.NW.string(Q.t.T1aUAQ)
                                      })
                                  })
                              ]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(m.zxk, {
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
                                      children: (0, r.jsx)(m.Text, {
                                          className: J.tierCardButtonCTA,
                                          variant: 'text-sm/medium',
                                          children: Q.NW.string(Q.t.VR2iVF)
                                      })
                                  }),
                                  !o &&
                                      (0, r.jsx)(m.zxk, {
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
                                          children: (0, r.jsx)(m.Text, {
                                              className: J.__invalid_managePlanButtonCTA,
                                              variant: 'text-sm/medium',
                                              color: 'always-white',
                                              children: Q.NW.string(Q.t['9uDy6O'])
                                          })
                                      })
                              ]
                          })
                ]
            }),
            (0, r.jsx)('div', {
                className: J.tierImage,
                children: (0, r.jsx)('img', {
                    className: J.tierImage,
                    alt: '',
                    src: $
                })
            })
        ]
    });
}
function el(e) {
    let { className: t, config: n } = e,
        i = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, r.jsxs)('div', {
        className: a()(J.giftCardPromotion, t),
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: J.giftImagePromotion,
                'aria-hidden': !0,
                src: i
            }),
            (0, r.jsxs)('div', {
                className: J.giftInfoPromotion,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: J.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, r.jsx)(m.X6q, {
                        className: J.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, r.jsx)(m.Text, {
                        className: J.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, r.jsx)(F.Z, {
                        isGift: !0,
                        className: a()(J.giftCardButton, J.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: Q.NW.string(Q.t.Ve9Ge3),
                        buttonTextClassName: J.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: er,
                                target: ei
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
    let t = null == (e = (0, M.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, r.jsx)(el, { config: t })
        : (0, r.jsxs)('div', {
              className: J.giftCard,
              children: [
                  (0, r.jsx)('img', {
                      className: J.giftImage,
                      alt: '',
                      src: ee
                  }),
                  (0, r.jsxs)('div', {
                      className: J.giftInfo,
                      children: [
                          (0, r.jsx)(m.X6q, {
                              className: J.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Q.NW.string(Q.t['3KomGR'])
                          }),
                          (0, r.jsx)(m.Text, {
                              className: J.giftText,
                              variant: 'text-sm/normal',
                              children: Q.NW.string(Q.t.yQ06u7)
                          }),
                          (0, r.jsx)(F.Z, {
                              isGift: !0,
                              className: a()(J.giftCardButton, J.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: Q.NW.string(Q.t.Ve9Ge3),
                              buttonTextClassName: J.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track(X.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: er,
                                      target: ei
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let ec = function () {
    let e = (0, O.Q)(),
        { analyticsLocations: t } = (0, C.ZP)(j.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        a = (0, v.V)(),
        [l, o] = i.useState(!0),
        u = (0, S.Z)({ forceFetch: !0 }),
        h = (0, U.n)(),
        b = null == h ? void 0 : h.countryCode,
        x = (0, c.e7)([A.Z], () => A.Z.enabled),
        E = i.useRef(null),
        y = 'PremiumManagementSettings';
    (0, N.j)({
        location: y + ' auto on',
        autoTrackExposure: !0
    }),
        (0, N.j)({
            location: y + ' auto off',
            autoTrackExposure: !1
        }),
        (0, G.B)(y);
    let P = (0, V.b)(y);
    i.useEffect(() => {
        g.Z.wait(async () => {
            x || e || (await Promise.all([p.jg(), p.tZ(), (0, f.Y2)(b, null, X.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, x, e]);
    let [D, w] = i.useState(!1);
    if (x) return (0, r.jsx)(_.Z, {});
    if (e) return (0, r.jsx)(T.c8, {});
    let k = s && null !== n && a,
        W = u.fetched && u.isFractionalPremiumActive;
    if (!k && !W && !l)
        return (0, r.jsx)(I.Z, {
            title: Q.NW.string(Q.t.dyq9TU),
            note: null
        });
    if ((!k && !W) || l) return (0, r.jsx)(m.$jN, {});
    let L = null !== n && null != n.trialId;
    return (0, r.jsx)(C.Gt, {
        value: t,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: J.__invalid_container,
                    children: [
                        (0, r.jsx)(ea, {}),
                        P && (0, r.jsx)(K.Z, { isInSettings: !0 }),
                        (0, r.jsx)(eo, {}),
                        (0, r.jsx)(Y.Z, {
                            className: J.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Q.NW.string(Q.t.dnVvQU),
                            hidePill: !L,
                            selectedPlanColumnClassName: J.tier2PlanComparisonTableBackground,
                            selectedPlanTier: q.p9.TIER_2
                        })
                    ]
                }),
                (0, r.jsx)(d.$, {
                    innerRef: E,
                    onChange: (e) => {
                        e && !D && (Z.default.track(X.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, r.jsx)('div', {
                        ref: E,
                        className: J.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
