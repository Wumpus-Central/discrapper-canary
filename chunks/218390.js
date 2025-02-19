n.d(t, {
    C: () => es,
    Z: () => ea
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    h = n(570140),
    g = n(355467),
    N = n(37234),
    x = n(821849),
    p = n(230711),
    _ = n(497321),
    E = n(634894),
    C = n(410030),
    f = n(607070),
    T = n(100527),
    S = n(906732),
    I = n(211242),
    b = n(975298),
    v = n(15640),
    j = n(89057),
    A = n(406128),
    O = n(703656),
    R = n(246946),
    P = n(78839),
    Z = n(483444),
    D = n(626135),
    y = n(63063),
    W = n(74538),
    k = n(140465),
    L = n(695349),
    B = n(286961),
    M = n(91802),
    w = n(533525),
    U = n(232076),
    V = n(197115),
    G = n(823188),
    F = n(504865),
    H = n(179984),
    z = n(938736),
    Y = n(386733),
    K = n(474936),
    q = n(981631),
    X = n(388032),
    J = n(542597),
    Q = n(881188),
    $ = n(434691);
let ee = 'gifting_button',
    et = 'payment modal';
function en(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: s, theme: r } = e,
        a = null != t.trialId,
        l = t.planIdFromItems === K.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        h = K.GP[t.planIdFromItems],
        g = W.ZP.formatPriceString(W.ZP.getDefaultPrice(h.id), h.interval);
    if (c) {
        var N, x, p;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (a || !l) &&
                    (0, i.jsx)(G.Cy, {
                        text: a ? X.NW.string(X.t.qYKftb) : X.NW.string(X.t.EyjDRE),
                        className: J.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(r) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, i.jsx)('div', { className: J.rimGlowTier2 }),
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: J.trialHeader,
                    children: a
                        ? X.NW.format(X.t['2CGBrq'], {
                              remainingTime: d,
                              price: g
                          })
                        : l
                          ? X.NW.format(X.t['+qqh6u'], {
                                percent: null !== (N = null == s ? void 0 : s.percentage) && void 0 !== N ? N : K.Bo,
                                regularPrice: g
                            })
                          : X.NW.formatToPlainString(X.t['3Ziutb'], {
                                percent: null !== (x = null == s ? void 0 : s.percentage) && void 0 !== x ? x : K.M_,
                                regularPrice: g,
                                numMonths: null !== (p = null == s ? void 0 : s.duration) && void 0 !== p ? p : K.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(F.Z, {
        variant: void 0,
        subscriptionTier: K.Si.TIER_2,
        interval: h.interval
    });
}
function ei() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, C.ZP)(),
        s = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: r } = (0, b.Z)(),
        l = (0, L.W)(),
        o = null !== s && null !== s.planIdFromItems;
    if (!o && r === K.a$.NONE) return null;
    let d = r !== K.a$.NONE && !l,
        h = null !== s && null != s.trialId;
    return (0, i.jsxs)('div', {
        className: a()(J.tierCard, { [J.withTier2Rim]: e || h }),
        children: [
            (0, i.jsxs)('div', {
                className: J.tierInfo,
                children: [
                    (0, i.jsx)(Z.Z, { className: J.tierTitle }),
                    d && !l
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(G.mn, {
                                      text: X.NW.string(X.t.uXF4c3),
                                      className: J.fractionalPremiumTopRimPill,
                                      colorOptions: G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: J.fractionalPremiumSubheader,
                                      children: X.NW.format(X.t.sK7fGh, { helpCenterLink: y.Z.getArticleURL(q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(en, {
                                premiumSubscription: s,
                                isDiscountApplied: e,
                                activeDiscountInfo: t,
                                theme: n
                            })
                          : l
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(G.Cy, {
                                          text: X.NW.string(X.t.qYKftb),
                                          className: J.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(n) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, i.jsx)(m.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: J.trialHeader,
                                          children: X.NW.format(X.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, i.jsx)(G.nT, { featureSet: d ? G.uZ.FRACTIONAL_PREMIUM : G.uZ.DEFAULT }),
                    (0, i.jsx)(m.zxk, {
                        className: J.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            D.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, N.xf)(),
                                (0, O.uL)(q.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: J.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: X.NW.string(X.t.VR2iVF)
                        })
                    }),
                    !l &&
                        (0, i.jsx)(m.zxk, {
                            className: J.managePlanButton,
                            look: m.zxk.Looks.OUTLINED,
                            color: m.zxk.Colors.WHITE,
                            onClick: () => {
                                D.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: 'to_subscriptions_button',
                                    target: 'subscriptions settings'
                                }),
                                    p.Z.open(q.oAB.SUBSCRIPTIONS);
                            },
                            children: (0, i.jsx)(m.Text, {
                                className: J.__invalid_managePlanButtonCTA,
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: X.NW.string(X.t['9uDy6O'])
                            })
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: J.tierImage,
                children: (0, i.jsx)('img', {
                    className: J.tierImage,
                    alt: '',
                    src: Q
                })
            })
        ]
    });
}
function es(e) {
    let { className: t, config: n } = e,
        s = (0, c.e7)([f.Z], () => f.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: a()(J.giftCardPromotion, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: J.giftImagePromotion,
                'aria-hidden': !0,
                src: s
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
                    (0, i.jsx)(V.Z, {
                        isGift: !0,
                        className: a()(J.giftCardButton, J.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: X.NW.string(X.t.Ve9Ge3),
                        buttonTextClassName: J.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            D.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ee,
                                target: et
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
    let t = null === (e = (0, B.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(es, { config: t })
        : (0, i.jsxs)('div', {
              className: a()(J.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: J.giftImage,
                      alt: '',
                      src: $
                  }),
                  (0, i.jsxs)('div', {
                      className: J.giftInfo,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              className: J.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: X.NW.string(X.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: J.giftText,
                              variant: 'text-sm/normal',
                              children: X.NW.string(X.t.yQ06u7)
                          }),
                          (0, i.jsx)(V.Z, {
                              isGift: !0,
                              className: a()(J.giftCardButton, J.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: X.NW.string(X.t.Ve9Ge3),
                              buttonTextClassName: J.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  D.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ee,
                                      target: et
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
let ea = function () {
    let e = (0, I.Q)(),
        { analyticsLocations: t } = (0, S.ZP)(T.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        r = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        a = (0, v.V)(),
        [l, o] = s.useState(!0),
        { fractionalState: u } = (0, b.Z)({ forceFetch: !0 }),
        N = (0, M.n)(),
        p = null == N ? void 0 : N.countryCode,
        C = (0, c.e7)([R.Z], () => R.Z.enabled),
        f = 'PremiumManagementSettings';
    (0, E.j)({
        location: f + ' auto on',
        autoTrackExposure: !0
    }),
        (0, E.j)({
            location: f + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(f);
    let O = (0, w.b)(f),
        Z = (0, z.pn)(f);
    s.useEffect(() => {
        h.Z.wait(async () => {
            C || e || (await Promise.all([g.jg(), g.tZ(), (0, x.Y2)(p, null, q.JjL.DISCOVERY)])), o(!1);
        });
    }, [p, C, e]);
    let [y, W] = s.useState(!1);
    if (C) return (0, i.jsx)(_.Z, {});
    if (e) return (0, i.jsx)(j.c8, {});
    let k = r && null !== n && a,
        L = u !== K.a$.NONE;
    if (!k && !L && !l)
        return (0, i.jsx)(A.Z, {
            title: X.NW.string(X.t.dyq9TU),
            note: null
        });
    if ((!k && !L) || l) return (0, i.jsx)(m.$jN, {});
    let B = null !== n && null != n.trialId;
    return (0, i.jsx)(S.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: J.__invalid_container,
                    children: [
                        (0, i.jsx)(ei, {}),
                        (O || Z) && (0, i.jsx)(Y.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(H.Z, {
                            className: J.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: X.NW.string(X.t.dnVvQU),
                            hidePill: !B,
                            selectedPlanColumnClassName: J.tier2PlanComparisonTableBackground,
                            selectedPlanTier: K.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !y && (D.default.track(q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), W(!0));
                    },
                    children: (0, i.jsx)('div', { className: J.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
