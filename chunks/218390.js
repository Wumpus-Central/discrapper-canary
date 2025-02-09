n.d(t, {
    C: () => ei,
    Z: () => ea
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    g = n(570140),
    _ = n(355467),
    p = n(37234),
    f = n(821849),
    h = n(230711),
    x = n(497321),
    E = n(634894),
    C = n(410030),
    b = n(607070),
    v = n(100527),
    T = n(906732),
    N = n(211242),
    I = n(975298),
    R = n(15640),
    j = n(89057),
    S = n(406128),
    A = n(703656),
    P = n(246946),
    Z = n(78839),
    w = n(483444),
    M = n(626135),
    B = n(63063),
    y = n(74538),
    k = n(140465),
    O = n(286961),
    L = n(91802),
    D = n(533525),
    U = n(232076),
    G = n(197115),
    V = n(823188),
    H = n(504865),
    F = n(179984),
    W = n(938736),
    z = n(386733),
    Y = n(474936),
    q = n(981631),
    Q = n(388032),
    K = n(242695),
    X = n(881188),
    J = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: r, activeDiscountInfo: a, theme: s } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === Y.Xh.PREMIUM_YEAR_TIER_2,
        d = n || l,
        g = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        _ = Y.GP[t.planIdFromItems],
        p = y.ZP.formatPriceString(y.ZP.getDefaultPrice(_.id), _.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !c) &&
                      (0, i.jsx)(V.Cy, {
                          text: l ? Q.intl.string(Q.t.qYKftb) : Q.intl.string(Q.t.EyjDRE),
                          className: K.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(s) ? V.VE.PREMIUM_TIER_2_WHITE_FILL : V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, i.jsx)('div', { className: K.rimGlowTier2 }),
                  (0, i.jsx)(m.X6q, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: K.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (l) {
                              if (r) {
                                  let e = y.ZP.getReverseTrialWeeks(t.trialId);
                                  return Q.intl.format(Q.t.jLglur, { weeks: e });
                              }
                              return Q.intl.format(Q.t['2CGBrq'], {
                                  remainingTime: g,
                                  price: p
                              });
                          }
                          return c
                              ? Q.intl.format(Q.t['+qqh6u'], {
                                    percent: null !== (e = null == a ? void 0 : a.percentage) && void 0 !== e ? e : Y.Bo,
                                    regularPrice: p
                                })
                              : Q.intl.formatToPlainString(Q.t['3Ziutb'], {
                                    percent: null !== (n = null == a ? void 0 : a.percentage) && void 0 !== n ? n : Y.M_,
                                    regularPrice: p,
                                    numMonths: null !== (i = null == a ? void 0 : a.duration) && void 0 !== i ? i : Y.rt
                                });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(H.Z, {
              variant: void 0,
              subscriptionTier: Y.Si.TIER_2,
              interval: _.interval
          });
}
function en() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, c.e7)([Z.ZP], () => Z.ZP.inReverseTrial()),
        r = (0, C.ZP)(),
        a = (0, c.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, I.Z)(),
        o = null !== a && null !== a.planIdFromItems;
    if (!o && l === Y.a$.NONE) return null;
    let d = l !== Y.a$.NONE,
        u = null !== a && null != a.trialId,
        g = e || u;
    return (0, i.jsxs)('div', {
        className: s()(K.tierCard, { [K.withTier2Rim]: g }),
        children: [
            (0, i.jsxs)('div', {
                className: K.tierInfo,
                children: [
                    (0, i.jsx)(w.Z, { className: K.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.mn, {
                                      text: Q.intl.string(Q.t.uXF4c3),
                                      className: K.fractionalPremiumTopRimPill,
                                      colorOptions: V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: K.fractionalPremiumSubheader,
                                      children: Q.intl.format(Q.t.sK7fGh, { helpCenterLink: B.Z.getArticleURL(q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(et, {
                                premiumSubscription: a,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: r
                            })
                          : null,
                    (0, i.jsx)(V.nT, { featureSet: d ? V.uZ.FRACTIONAL_PREMIUM : V.uZ.DEFAULT }),
                    (0, i.jsx)(m.zxk, {
                        className: K.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            M.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, A.uL)(q.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: K.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: Q.intl.string(Q.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(m.zxk, {
                        className: K.managePlanButton,
                        look: m.zxk.Looks.OUTLINED,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            M.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                h.Z.open(q.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: K.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: Q.intl.string(Q.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: K.tierImage,
                children: (0, i.jsx)('img', {
                    className: K.tierImage,
                    alt: '',
                    src: X
                })
            })
        ]
    });
}
function ei(e) {
    let { className: t, config: n } = e,
        r = (0, c.e7)([b.Z], () => b.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: s()(K.giftCardPromotion, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: K.giftImagePromotion,
                'aria-hidden': !0,
                src: r
            }),
            (0, i.jsxs)('div', {
                className: K.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: K.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.X6q, {
                        className: K.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: K.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(G.Z, {
                        isGift: !0,
                        className: s()(K.giftCardButton, K.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: Q.intl.string(Q.t.Ve9Ge3),
                        buttonTextClassName: K.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
    let t = null === (e = (0, O.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ei, { config: t })
        : (0, i.jsxs)('div', {
              className: s()(K.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: K.giftImage,
                      alt: '',
                      src: J
                  }),
                  (0, i.jsxs)('div', {
                      className: K.giftInfo,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              className: K.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Q.intl.string(Q.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: K.giftText,
                              variant: 'text-sm/normal',
                              children: Q.intl.string(Q.t.yQ06u7)
                          }),
                          (0, i.jsx)(G.Z, {
                              isGift: !0,
                              className: s()(K.giftCardButton, K.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: Q.intl.string(Q.t.Ve9Ge3),
                              buttonTextClassName: K.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  M.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
let ea = function () {
    let e = (0, N.Q)(),
        { analyticsLocations: t } = (0, T.ZP)(v.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        a = (0, c.e7)([Z.ZP], () => Z.ZP.hasFetchedSubscriptions()),
        s = (0, R.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, I.Z)({ forceFetch: !0 }),
        p = (0, L.n)(),
        h = null == p ? void 0 : p.countryCode,
        C = (0, c.e7)([P.Z], () => P.Z.enabled),
        b = 'PremiumManagementSettings';
    (0, E.j)({
        location: b + ' auto on',
        autoTrackExposure: !0
    }),
        (0, E.j)({
            location: b + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(b);
    let A = (0, D.b)(b),
        w = (0, W.pn)(b);
    r.useEffect(() => {
        g.Z.wait(async () => {
            C || e || (await Promise.all([_.jg(), _.tZ(), (0, f.Y2)(h, null, q.JjL.DISCOVERY)])), o(!1);
        });
    }, [h, C, e]);
    let [B, y] = r.useState(!1);
    if (C) return (0, i.jsx)(x.Z, {});
    if (e) return (0, i.jsx)(j.c8, {});
    let k = a && null !== n && s,
        O = u !== Y.a$.NONE;
    if (!k && !O && !l)
        return (0, i.jsx)(S.Z, {
            title: Q.intl.string(Q.t.dyq9TU),
            note: null
        });
    if ((!k && !O) || l) return (0, i.jsx)(m.$jN, {});
    let G = null !== n && null != n.trialId;
    return (0, i.jsx)(T.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: K.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (A || w) && (0, i.jsx)(z.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(F.Z, {
                            className: K.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Q.intl.string(Q.t.dnVvQU),
                            hidePill: !G,
                            selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Y.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !B && (M.default.track(q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), y(!0));
                    },
                    children: (0, i.jsx)('div', { className: K.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
