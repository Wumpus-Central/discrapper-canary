n.d(t, {
    C: () => er,
    Z: () => es
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
    O = n(906732),
    C = n(211242),
    S = n(975298),
    v = n(15640),
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
    z = n(386733),
    Y = n(474936),
    K = n(981631),
    q = n(388032),
    X = n(133525),
    J = n(881188),
    Q = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        a = null != t.trialId,
        l = t.planIdFromItems === Y.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = Y.GP[t.planIdFromItems],
        p = w.ZP.formatPriceString(w.ZP.getDefaultPrice(g.id), g.interval);
    if (c) {
        var h, f, b;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (a || !l) &&
                    (0, r.jsx)(G.Cy, {
                        text: a ? q.NW.string(q.t.qYKftb) : q.NW.string(q.t.EyjDRE),
                        className: X.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (a || !l) && (0, r.jsx)('div', { className: X.rimGlowTier2 }),
                (0, r.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: X.trialHeader,
                    children: a
                        ? q.NW.format(q.t['2CGBrq'], {
                              remainingTime: d,
                              price: p
                          })
                        : l
                          ? q.NW.format(q.t['+qqh6u'], {
                                percent: null != (h = null == i ? void 0 : i.percentage) ? h : Y.Bo,
                                regularPrice: p
                            })
                          : q.NW.formatToPlainString(q.t['3Ziutb'], {
                                percent: null != (f = null == i ? void 0 : i.percentage) ? f : Y.M_,
                                regularPrice: p,
                                numMonths: null != (b = null == i ? void 0 : i.duration) ? b : Y.rt
                            })
                })
            ]
        });
    }
    return (0, r.jsx)(F.Z, {
        variant: void 0,
        subscriptionTier: Y.Si.TIER_2,
        interval: g.interval
    });
}
function en() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, _.ZP)(),
        i = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: s } = (0, S.Z)(),
        l = (0, W.W)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && s === Y.a$.NONE) return null;
    let d = s !== Y.a$.NONE && !l,
        g = null !== i && null != i.trialId;
    return (0, r.jsxs)('div', {
        className: a()(X.tierCard, { [X.withTier2Rim]: e || g }),
        children: [
            (0, r.jsxs)('div', {
                className: X.tierInfo,
                children: [
                    (0, r.jsx)(R.Z, { className: X.tierTitle }),
                    d && !l
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(G.mn, {
                                      text: q.NW.string(q.t.uXF4c3),
                                      className: X.fractionalPremiumTopRimPill,
                                      colorOptions: G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, r.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: X.fractionalPremiumSubheader,
                                      children: q.NW.format(q.t.sK7fGh, { helpCenterLink: Z.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, r.jsx)(et, {
                                premiumSubscription: i,
                                isDiscountApplied: e,
                                activeDiscountInfo: t,
                                theme: n
                            })
                          : l
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(G.Cy, {
                                          text: q.NW.string(q.t.qYKftb),
                                          className: X.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(n) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          variant: 'heading-md/normal',
                                          color: 'always-white',
                                          className: X.trialHeader,
                                          children: q.NW.format(q.t['/SfHws'], { weeks: 1 })
                                      })
                                  ]
                              })
                            : null,
                    (0, r.jsx)(G.nT, { featureSet: d ? G.uZ.FRACTIONAL_PREMIUM : G.uZ.DEFAULT }),
                    (0, r.jsx)(m.zxk, {
                        className: X.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            D.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, h.xf)(),
                                (0, y.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, r.jsx)(m.Text, {
                            className: X.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: q.NW.string(q.t.VR2iVF)
                        })
                    }),
                    !l &&
                        (0, r.jsx)(m.zxk, {
                            className: X.managePlanButton,
                            look: m.zxk.Looks.OUTLINED,
                            color: m.zxk.Colors.WHITE,
                            onClick: () => {
                                D.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: 'to_subscriptions_button',
                                    target: 'subscriptions settings'
                                }),
                                    b.Z.open(K.oAB.SUBSCRIPTIONS);
                            },
                            children: (0, r.jsx)(m.Text, {
                                className: X.__invalid_managePlanButtonCTA,
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: q.NW.string(q.t['9uDy6O'])
                            })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: X.tierImage,
                children: (0, r.jsx)('img', {
                    className: X.tierImage,
                    alt: '',
                    src: J
                })
            })
        ]
    });
}
function er(e) {
    let { className: t, config: n } = e,
        i = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, r.jsxs)('div', {
        className: a()(X.giftCardPromotion, t),
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: X.giftImagePromotion,
                'aria-hidden': !0,
                src: i
            }),
            (0, r.jsxs)('div', {
                className: X.giftInfoPromotion,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: X.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, r.jsx)(m.X6q, {
                        className: X.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, r.jsx)(m.Text, {
                        className: X.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, r.jsx)(V.Z, {
                        isGift: !0,
                        className: a()(X.giftCardButton, X.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: q.NW.string(q.t.Ve9Ge3),
                        buttonTextClassName: X.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            D.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
function ei() {
    var e;
    let t = null == (e = (0, L.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, r.jsx)(er, { config: t })
        : (0, r.jsxs)('div', {
              className: X.giftCard,
              children: [
                  (0, r.jsx)('img', {
                      className: X.giftImage,
                      alt: '',
                      src: Q
                  }),
                  (0, r.jsxs)('div', {
                      className: X.giftInfo,
                      children: [
                          (0, r.jsx)(m.X6q, {
                              className: X.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: q.NW.string(q.t['3KomGR'])
                          }),
                          (0, r.jsx)(m.Text, {
                              className: X.giftText,
                              variant: 'text-sm/normal',
                              children: q.NW.string(q.t.yQ06u7)
                          }),
                          (0, r.jsx)(V.Z, {
                              isGift: !0,
                              className: a()(X.giftCardButton, X.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: q.NW.string(q.t.Ve9Ge3),
                              buttonTextClassName: X.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  D.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
let es = function () {
    let e = (0, C.Q)(),
        { analyticsLocations: t } = (0, O.ZP)(j.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        s = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        a = (0, v.V)(),
        [l, o] = i.useState(!0),
        { fractionalState: u } = (0, S.Z)({ forceFetch: !0 }),
        h = (0, B.n)(),
        b = null == h ? void 0 : h.countryCode,
        _ = (0, c.e7)([A.Z], () => A.Z.enabled),
        E = i.useRef(null),
        y = 'PremiumManagementSettings';
    (0, x.j)({
        location: y + ' auto on',
        autoTrackExposure: !0
    }),
        (0, x.j)({
            location: y + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(y);
    let R = (0, M.b)(y);
    i.useEffect(() => {
        g.Z.wait(async () => {
            _ || e || (await Promise.all([p.jg(), p.tZ(), (0, f.Y2)(b, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [b, _, e]);
    let [Z, w] = i.useState(!1);
    if (_) return (0, r.jsx)(N.Z, {});
    if (e) return (0, r.jsx)(T.c8, {});
    let k = s && null !== n && a,
        W = u !== Y.a$.NONE;
    if (!k && !W && !l)
        return (0, r.jsx)(I.Z, {
            title: q.NW.string(q.t.dyq9TU),
            note: null
        });
    if ((!k && !W) || l) return (0, r.jsx)(m.$jN, {});
    let L = null !== n && null != n.trialId;
    return (0, r.jsx)(O.Gt, {
        value: t,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: X.__invalid_container,
                    children: [
                        (0, r.jsx)(en, {}),
                        R && (0, r.jsx)(z.Z, { isInSettings: !0 }),
                        (0, r.jsx)(ei, {}),
                        (0, r.jsx)(H.Z, {
                            className: X.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: q.NW.string(q.t.dnVvQU),
                            hidePill: !L,
                            selectedPlanColumnClassName: X.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Y.p9.TIER_2
                        })
                    ]
                }),
                (0, r.jsx)(d.$, {
                    innerRef: E,
                    onChange: (e) => {
                        e && !Z && (D.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, r.jsx)('div', {
                        ref: E,
                        className: X.bottomOfPageVisibilitySensor
                    })
                })
            ]
        })
    });
};
