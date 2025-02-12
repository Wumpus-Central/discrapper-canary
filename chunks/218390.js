n.d(t, {
    C: () => er,
    Z: () => es
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
    O = n(695349),
    L = n(286961),
    D = n(91802),
    U = n(533525),
    G = n(232076),
    V = n(197115),
    H = n(823188),
    F = n(504865),
    W = n(179984),
    z = n(938736),
    Y = n(386733),
    q = n(474936),
    Q = n(981631),
    K = n(388032),
    X = n(242695),
    J = n(881188),
    $ = n(434691);
let ee = 'gifting_button',
    et = 'payment modal';
function en(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: a } = e,
        s = null != t.trialId,
        l = t.planIdFromItems === q.Xh.PREMIUM_YEAR_TIER_2,
        c = n || s,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        g = q.GP[t.planIdFromItems],
        _ = y.ZP.formatPriceString(y.ZP.getDefaultPrice(g.id), g.interval);
    if (c) {
        var p, f, h;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (s || !l) &&
                    (0, i.jsx)(H.Cy, {
                        text: s ? K.intl.string(K.t.qYKftb) : K.intl.string(K.t.EyjDRE),
                        className: X.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(a) ? H.VE.PREMIUM_TIER_2_WHITE_FILL : H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                (s || !l) && (0, i.jsx)('div', { className: X.rimGlowTier2 }),
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-md/normal',
                    color: 'always-white',
                    className: X.trialHeader,
                    children: s
                        ? K.intl.format(K.t['2CGBrq'], {
                              remainingTime: d,
                              price: _
                          })
                        : l
                          ? K.intl.format(K.t['+qqh6u'], {
                                percent: null !== (p = null == r ? void 0 : r.percentage) && void 0 !== p ? p : q.Bo,
                                regularPrice: _
                            })
                          : K.intl.formatToPlainString(K.t['3Ziutb'], {
                                percent: null !== (f = null == r ? void 0 : r.percentage) && void 0 !== f ? f : q.M_,
                                regularPrice: _,
                                numMonths: null !== (h = null == r ? void 0 : r.duration) && void 0 !== h ? h : q.rt
                            })
                })
            ]
        });
    }
    return (0, i.jsx)(F.Z, {
        variant: void 0,
        subscriptionTier: q.Si.TIER_2,
        interval: g.interval
    });
}
function ei() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, C.ZP)(),
        r = (0, c.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        { fractionalState: a } = (0, I.Z)(),
        l = (0, O.W)(),
        o = null !== r && null !== r.planIdFromItems;
    if (!o && a === q.a$.NONE) return null;
    let d = a !== q.a$.NONE && !l,
        u = null !== r && null != r.trialId;
    return (0, i.jsxs)('div', {
        className: s()(X.tierCard, { [X.withTier2Rim]: e || u }),
        children: [
            (0, i.jsxs)('div', {
                className: X.tierInfo,
                children: [
                    (0, i.jsx)(w.Z, { className: X.tierTitle }),
                    d && !l
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(H.mn, {
                                      text: K.intl.string(K.t.uXF4c3),
                                      className: X.fractionalPremiumTopRimPill,
                                      colorOptions: H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: X.fractionalPremiumSubheader,
                                      children: K.intl.format(K.t.sK7fGh, { helpCenterLink: B.Z.getArticleURL(Q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(en, {
                                premiumSubscription: r,
                                isDiscountApplied: e,
                                activeDiscountInfo: t,
                                theme: n
                            })
                          : l
                            ? (0, i.jsx)(m.X6q, {
                                  variant: 'heading-md/normal',
                                  color: 'always-white',
                                  className: X.trialHeader,
                                  children: K.intl.format(K.t['/SfHws'], { weeks: 1 })
                              })
                            : null,
                    (0, i.jsx)(H.nT, { featureSet: d ? H.uZ.FRACTIONAL_PREMIUM : H.uZ.DEFAULT }),
                    (0, i.jsx)(m.zxk, {
                        className: X.tierCardButton,
                        color: m.zxk.Colors.WHITE,
                        onClick: () => {
                            M.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, A.uL)(Q.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: X.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: K.intl.string(K.t.VR2iVF)
                        })
                    }),
                    !l &&
                        (0, i.jsx)(m.zxk, {
                            className: X.managePlanButton,
                            look: m.zxk.Looks.OUTLINED,
                            color: m.zxk.Colors.WHITE,
                            onClick: () => {
                                M.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: 'to_subscriptions_button',
                                    target: 'subscriptions settings'
                                }),
                                    h.Z.open(Q.oAB.SUBSCRIPTIONS);
                            },
                            children: (0, i.jsx)(m.Text, {
                                className: X.__invalid_managePlanButtonCTA,
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: K.intl.string(K.t['9uDy6O'])
                            })
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: X.tierImage,
                children: (0, i.jsx)('img', {
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
        r = (0, c.e7)([b.Z], () => b.Z.useReducedMotion) ? n.getStaticImageUrl() : n.getAnimatedImageUrl();
    return (0, i.jsxs)('div', {
        className: s()(X.giftCardPromotion, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: X.giftImagePromotion,
                'aria-hidden': !0,
                src: r
            }),
            (0, i.jsxs)('div', {
                className: X.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: X.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.X6q, {
                        className: X.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: X.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(V.Z, {
                        isGift: !0,
                        className: s()(X.giftCardButton, X.halloweenColor),
                        look: m.zxk.Looks.OUTLINED,
                        buttonText: K.intl.string(K.t.Ve9Ge3),
                        buttonTextClassName: X.giftButtonCTA,
                        color: m.zxk.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
function ea() {
    var e;
    let t = null === (e = (0, L.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(er, { config: t })
        : (0, i.jsxs)('div', {
              className: s()(X.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: X.giftImage,
                      alt: '',
                      src: $
                  }),
                  (0, i.jsxs)('div', {
                      className: X.giftInfo,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              className: X.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: K.intl.string(K.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: X.giftText,
                              variant: 'text-sm/normal',
                              children: K.intl.string(K.t.yQ06u7)
                          }),
                          (0, i.jsx)(V.Z, {
                              isGift: !0,
                              className: s()(X.giftCardButton, X.giftCardButtonColor),
                              look: m.zxk.Looks.OUTLINED,
                              buttonText: K.intl.string(K.t.Ve9Ge3),
                              buttonTextClassName: X.giftButtonCTA,
                              color: m.zxk.Colors.CUSTOM,
                              onClick: () => {
                                  M.default.track(Q.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
let es = function () {
    let e = (0, N.Q)(),
        { analyticsLocations: t } = (0, T.ZP)(v.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        a = (0, c.e7)([Z.ZP], () => Z.ZP.hasFetchedSubscriptions()),
        s = (0, R.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, I.Z)({ forceFetch: !0 }),
        p = (0, D.n)(),
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
        (0, G.B)(b);
    let A = (0, U.b)(b),
        w = (0, z.pn)(b);
    r.useEffect(() => {
        g.Z.wait(async () => {
            C || e || (await Promise.all([_.jg(), _.tZ(), (0, f.Y2)(h, null, Q.JjL.DISCOVERY)])), o(!1);
        });
    }, [h, C, e]);
    let [B, y] = r.useState(!1);
    if (C) return (0, i.jsx)(x.Z, {});
    if (e) return (0, i.jsx)(j.c8, {});
    let k = a && null !== n && s,
        O = u !== q.a$.NONE;
    if (!k && !O && !l)
        return (0, i.jsx)(S.Z, {
            title: K.intl.string(K.t.dyq9TU),
            note: null
        });
    if ((!k && !O) || l) return (0, i.jsx)(m.$jN, {});
    let L = null !== n && null != n.trialId;
    return (0, i.jsx)(T.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: X.__invalid_container,
                    children: [
                        (0, i.jsx)(ei, {}),
                        (A || w) && (0, i.jsx)(Y.Z, { isInSettings: !0 }),
                        (0, i.jsx)(ea, {}),
                        (0, i.jsx)(W.Z, {
                            className: X.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: K.intl.string(K.t.dnVvQU),
                            hidePill: !L,
                            selectedPlanColumnClassName: X.tier2PlanComparisonTableBackground,
                            selectedPlanTier: q.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !B && (M.default.track(Q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), y(!0));
                    },
                    children: (0, i.jsx)('div', { className: X.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
