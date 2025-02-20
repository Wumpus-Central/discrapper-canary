n.d(t, {
    C: () => ei,
    Z: () => ea
}),
    n(47120);
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
    N = n(497321),
    x = n(634894),
    _ = n(410030),
    E = n(607070),
    j = n(100527),
    C = n(906732),
    O = n(211242),
    v = n(975298),
    S = n(15640),
    T = n(89057),
    I = n(406128),
    y = n(703656),
    A = n(246946),
    P = n(78839),
    R = n(483444),
    D = n(626135),
    Z = n(63063),
    w = n(74538),
    k = n(140465),
    W = n(695349),
    L = n(286961),
    B = n(91802),
    M = n(533525),
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
    J = n(573225),
    Q = n(881188),
    $ = n(434691);
let ee = 'gifting_button',
    et = 'payment modal';
function en(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        a = null != t.trialId,
        l = t.planIdFromItems === K.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = K.GP[t.planIdFromItems],
        p = w.ZP.formatPriceString(w.ZP.getDefaultPrice(g.id), g.interval);
    if (c) {
        var h, f, b;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (a || !l) &&
                    (0, r.jsx)(G.Cy, {
                        text: a ? X.NW.string(X.t.qYKftb) : X.NW.string(X.t.EyjDRE),
                        className: J.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, r.jsx)('div', { className: J.rimGlowTier2 }),
                (0, r.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: J.trialHeader,
                    children: a
                        ? X.NW.format(X.t['2CGBrq'], {
                              remainingTime: d,
                              price: p
                          })
                        : l
                          ? X.NW.format(X.t['+qqh6u'], {
                                percent: null !== (h = null == i ? void 0 : i.percentage) && void 0 !== h ? h : K.Bo,
                                regularPrice: p
                            })
                          : X.NW.formatToPlainString(X.t['3Ziutb'], {
                                percent: null !== (f = null == i ? void 0 : i.percentage) && void 0 !== f ? f : K.M_,
                                regularPrice: p,
                                numMonths: null !== (b = null == i ? void 0 : i.duration) && void 0 !== b ? b : K.rt
                            })
                })
            ]
        });
    }
    return (0, r.jsx)(F.Z, {
        variant: void 0,
        subscriptionTier: K.Si.TIER_2,
        interval: g.interval
    });
}
function er() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, _.ZP)(),
        i = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: s } = (0, v.Z)(),
        l = (0, W.W)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && s === K.a$.NONE) return null;
    let d = s !== K.a$.NONE && !l,
        g = null !== i && null != i.trialId;
    return (0, r.jsxs)('div', {
        className: a()(J.tierCard, { [J.withTier2Rim]: e || g }),
        children: [
            (0, r.jsxs)('div', {
                className: J.tierInfo,
                children: [
                    (0, r.jsx)(R.Z, { className: J.tierTitle }),
                    d && !l
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(G.mn, {
                                      text: X.NW.string(X.t.uXF4c3),
                                      className: J.fractionalPremiumTopRimPill,
                                      colorOptions: G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, r.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: J.fractionalPremiumSubheader,
                                      children: X.NW.format(X.t.sK7fGh, { helpCenterLink: Z.Z.getArticleURL(q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, r.jsx)(en, {
                                premiumSubscription: i,
                                isDiscountApplied: e,
                                activeDiscountInfo: t,
                                theme: n
                            })
                          : l
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(G.Cy, {
                                          text: X.NW.string(X.t.qYKftb),
                                          className: J.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(n) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: J.trialHeader,
                                          children: X.NW.format(X.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, r.jsx)(G.nT, { featureSet: d ? G.uZ.FRACTIONAL_PREMIUM : G.uZ.DEFAULT }),
                    (0, r.jsx)(m.zxk, {
                        className: J.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            D.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, h.xf)(),
                                (0, y.uL)(q.Z5c.APPLICATION_STORE);
                        },
                        children: (0, r.jsx)(m.Text, {
                            className: J.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: X.NW.string(X.t.VR2iVF)
                        })
                    }),
                    !l &&
                        (0, r.jsx)(m.zxk, {
                            className: J.managePlanButton,
                            look: m.zxk.Looks.OUTLINED,
                            color: m.zxk.Colors.WHITE,
                            onClick: () => {
                                D.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: 'to_subscriptions_button',
                                    target: 'subscriptions settings'
                                }),
                                    b.Z.open(q.oAB.SUBSCRIPTIONS);
                            },
                            children: (0, r.jsx)(m.Text, {
                                className: J.__invalid_managePlanButtonCTA,
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: X.NW.string(X.t['9uDy6O'])
                            })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: J.tierImage,
                children: (0, r.jsx)('img', {
                    className: J.tierImage,
                    alt: '',
                    src: Q
                })
            })
        ]
    });
}
function ei(e) {
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
                    (0, r.jsx)(V.Z, {
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
function es() {
    var e;
    let t = null === (e = (0, L.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, r.jsx)(ei, { config: t })
        : (0, r.jsxs)('div', {
              className: a()(J.giftCard),
              children: [
                  (0, r.jsx)('img', {
                      className: J.giftImage,
                      alt: '',
                      src: $
                  }),
                  (0, r.jsxs)('div', {
                      className: J.giftInfo,
                      children: [
                          (0, r.jsx)(m.X6q, {
                              className: J.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: X.NW.string(X.t['3KomGR'])
                          }),
                          (0, r.jsx)(m.Text, {
                              className: J.giftText,
                              variant: 'text-sm/normal',
                              children: X.NW.string(X.t.yQ06u7)
                          }),
                          (0, r.jsx)(V.Z, {
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
    let e = (0, O.Q)(),
        { analyticsLocations: t } = (0, C.ZP)(j.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        a = (0, S.V)(),
        [l, o] = i.useState(!0),
        { fractionalState: u } = (0, v.Z)({ forceFetch: !0 }),
        h = (0, B.n)(),
        b = null == h ? void 0 : h.countryCode,
        _ = (0, c.e7)([A.Z], () => A.Z.enabled),
        E = 'PremiumManagementSettings';
    (0, x.j)({
        location: E + ' auto on',
        autoTrackExposure: !0
    }),
        (0, x.j)({
            location: E + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(E);
    let y = (0, M.b)(E),
        R = (0, z.pn)(E);
    i.useEffect(() => {
        g.Z.wait(async () => {
            _ || e || (await Promise.all([p.jg(), p.tZ(), (0, f.Y2)(b, null, q.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, _, e]);
    let [Z, w] = i.useState(!1);
    if (_) return (0, r.jsx)(N.Z, {});
    if (e) return (0, r.jsx)(T.c8, {});
    let k = s && null !== n && a,
        W = u !== K.a$.NONE;
    if (!k && !W && !l)
        return (0, r.jsx)(I.Z, {
            title: X.NW.string(X.t.dyq9TU),
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
                        (0, r.jsx)(er, {}),
                        (y || R) && (0, r.jsx)(Y.Z, { isInSettings: !0 }),
                        (0, r.jsx)(es, {}),
                        (0, r.jsx)(H.Z, {
                            className: J.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: X.NW.string(X.t.dnVvQU),
                            hidePill: !L,
                            selectedPlanColumnClassName: J.tier2PlanComparisonTableBackground,
                            selectedPlanTier: K.p9.TIER_2
                        })
                    ]
                }),
                (0, r.jsx)(d.$, {
                    onChange: (e) => {
                        e && !Z && (D.default.track(q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, r.jsx)('div', { className: J.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
