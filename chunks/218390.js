n.d(t, {
    C: () => es,
    Z: () => el
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    g = n(570140),
    h = n(355467),
    x = n(37234),
    _ = n(821849),
    p = n(230711),
    E = n(497321),
    C = n(634894),
    f = n(410030),
    T = n(607070),
    N = n(100527),
    S = n(906732),
    I = n(211242),
    b = n(975298),
    v = n(15640),
    j = n(89057),
    A = n(406128),
    O = n(703656),
    R = n(246946),
    P = n(78839),
    D = n(483444),
    y = n(626135),
    Z = n(63063),
    k = n(74538),
    L = n(140465),
    B = n(695349),
    M = n(286961),
    w = n(91802),
    V = n(533525),
    U = n(232076),
    G = n(197115),
    F = n(823188),
    H = n(504865),
    z = n(179984),
    Y = n(938736),
    W = n(386733),
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
        l = null != t.trialId,
        a = t.planIdFromItems === K.Xh.PREMIUM_YEAR_TIER_2,
        c = n || l,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = K.GP[t.planIdFromItems],
        h = k.ZP.formatPriceString(k.ZP.getDefaultPrice(g.id), g.interval);
    if (c) {
        var x, _, p;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (l || !a) &&
                    (0, i.jsx)(F.Cy, {
                        text: l ? X.intl.string(X.t.qYKftb) : X.intl.string(X.t.EyjDRE),
                        className: J.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(r) ? F.VE.PREMIUM_TIER_2_WHITE_FILL : F.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (l || !a) && (0, i.jsx)('div', { className: J.rimGlowTier2 }),
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: J.trialHeader,
                    children: l
                        ? X.intl.format(X.t['2CGBrq'], {
                              remainingTime: d,
                              price: h
                          })
                        : a
                          ? X.intl.format(X.t['+qqh6u'], {
                                percent: null !== (x = null == s ? void 0 : s.percentage) && void 0 !== x ? x : K.Bo,
                                regularPrice: h
                            })
                          : X.intl.formatToPlainString(X.t['3Ziutb'], {
                                percent: null !== (_ = null == s ? void 0 : s.percentage) && void 0 !== _ ? _ : K.M_,
                                regularPrice: h,
                                numMonths: null !== (p = null == s ? void 0 : s.duration) && void 0 !== p ? p : K.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(H.Z, {
        variant: void 0,
        subscriptionTier: K.Si.TIER_2,
        interval: g.interval
    });
}
function ei() {
    let e = (0, L.t7)(),
        t = (0, L.lr)(),
        n = (0, f.ZP)(),
        s = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: r } = (0, b.Z)(),
        a = (0, B.W)(),
        o = null !== s && null !== s.planIdFromItems;
    if (!o && r === K.a$.NONE) return null;
    let d = r !== K.a$.NONE && !a,
        u = null !== s && null != s.trialId;
    return (0, i.jsxs)('div', {
        className: l()(J.tierCard, { [J.withTier2Rim]: e || u }),
        children: [
            (0, i.jsxs)('div', {
                className: J.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: J.tierTitle }),
                    d && !a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(F.mn, {
                                      text: X.intl.string(X.t.uXF4c3),
                                      className: J.fractionalPremiumTopRimPill,
                                      colorOptions: F.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: J.fractionalPremiumSubheader,
                                      children: X.intl.format(X.t.sK7fGh, { helpCenterLink: Z.Z.getArticleURL(q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
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
                          : a
                            ? (0, i.jsx)(m.X6q, {
                                  variant: 'heading-md/normal',
                                  color: 'always-white',
                                  className: J.trialHeader,
                                  children: X.intl.format(X.t['/SfHws'], { weeks: 1 })
                              })
                            : null,
                    (0, i.jsx)(F.nT, { featureSet: d ? F.uZ.FRACTIONAL_PREMIUM : F.uZ.DEFAULT }),
                    (0, i.jsx)(m.zxk, {
                        className: J.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            y.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, x.xf)(),
                                (0, O.uL)(q.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: J.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: X.intl.string(X.t.VR2iVF)
                        })
                    }),
                    !a &&
                        (0, i.jsx)(m.zxk, {
                            className: J.managePlanButton,
                            look: m.zxk.Looks.OUTLINED,
                            color: m.zxk.Colors.WHITE,
                            onClick: () => {
                                y.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: 'to_subscriptions_button',
                                    target: 'subscriptions settings'
                                }),
                                    p.Z.open(q.oAB.SUBSCRIPTIONS);
                            },
                            children: (0, i.jsx)(m.Text, {
                                className: J.__invalid_managePlanButtonCTA,
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: X.intl.string(X.t['9uDy6O'])
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
        s = (0, c.e7)([T.Z], () => T.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: l()(J.giftCardPromotion, t),
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
                    (0, i.jsx)(G.Z, {
                        isGift: !0,
                        className: l()(J.giftCardButton, J.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: X.intl.string(X.t.Ve9Ge3),
                        buttonTextClassName: J.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            y.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
    let t = null === (e = (0, M.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(es, { config: t })
        : (0, i.jsxs)('div', {
              className: l()(J.giftCard),
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
                              children: X.intl.string(X.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: J.giftText,
                              variant: 'text-sm/normal',
                              children: X.intl.string(X.t.yQ06u7)
                          }),
                          (0, i.jsx)(G.Z, {
                              isGift: !0,
                              className: l()(J.giftCardButton, J.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: X.intl.string(X.t.Ve9Ge3),
                              buttonTextClassName: J.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  y.default.track(q.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
let el = function () {
    let e = (0, I.Q)(),
        { analyticsLocations: t } = (0, S.ZP)(N.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        r = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        l = (0, v.V)(),
        [a, o] = s.useState(!0),
        { fractionalState: u } = (0, b.Z)({ forceFetch: !0 }),
        x = (0, w.n)(),
        p = null == x ? void 0 : x.countryCode,
        f = (0, c.e7)([R.Z], () => R.Z.enabled),
        T = 'PremiumManagementSettings';
    (0, C.j)({
        location: T + ' auto on',
        autoTrackExposure: !0
    }),
        (0, C.j)({
            location: T + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(T);
    let O = (0, V.b)(T),
        D = (0, Y.pn)(T);
    s.useEffect(() => {
        g.Z.wait(async () => {
            f || e || (await Promise.all([h.jg(), h.tZ(), (0, _.Y2)(p, null, q.JjL.DISCOVERY)])), o(!1);
        });
    }, [p, f, e]);
    let [Z, k] = s.useState(!1);
    if (f) return (0, i.jsx)(E.Z, {});
    if (e) return (0, i.jsx)(j.c8, {});
    let L = r && null !== n && l,
        B = u !== K.a$.NONE;
    if (!L && !B && !a)
        return (0, i.jsx)(A.Z, {
            title: X.intl.string(X.t.dyq9TU),
            note: null
        });
    if ((!L && !B) || a) return (0, i.jsx)(m.$jN, {});
    let M = null !== n && null != n.trialId;
    return (0, i.jsx)(S.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: J.__invalid_container,
                    children: [
                        (0, i.jsx)(ei, {}),
                        (O || D) && (0, i.jsx)(W.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(z.Z, {
                            className: J.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: X.intl.string(X.t.dnVvQU),
                            hidePill: !M,
                            selectedPlanColumnClassName: J.tier2PlanComparisonTableBackground,
                            selectedPlanTier: K.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !Z && (y.default.track(q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), k(!0));
                    },
                    children: (0, i.jsx)('div', { className: J.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
