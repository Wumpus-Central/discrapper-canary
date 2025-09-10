n.d(t, {
    C: () => ef,
    Z: () => ep,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(622535),
    d = n(159691),
    f = n(780384),
    _ = n(755721),
    p = n(481060),
    h = n(570140),
    m = n(355467),
    g = n(37234),
    E = n(821849),
    b = n(230711),
    y = n(497321),
    O = n(410030),
    v = n(607070),
    I = n(100527),
    T = n(906732),
    S = n(211242),
    A = n(975298),
    C = n(15640),
    N = n(89057),
    R = n(406128),
    P = n(703656),
    w = n(246946),
    D = n(78839),
    x = n(483444),
    L = n(626135),
    j = n(63063),
    M = n(74538),
    k = n(140465),
    U = n(695349),
    G = n(46062),
    B = n(347896),
    Z = n(717401),
    F = n(533525),
    V = n(232076),
    H = n(736519),
    Y = n(117791),
    W = n(740594),
    K = n(382791),
    z = n(823188),
    q = n(504865),
    X = n(179984),
    Q = n(386733),
    J = n(474936),
    $ = n(981631),
    ee = n(388032),
    et = n(458622),
    en = n(881188),
    er = n(434691);
let ei = "to_subscriptions_button",
    ea = "subscriptions settings",
    eo = "to_premium_home_button",
    es = "premium home page",
    el = "gifting_button",
    ec = "payment modal";
function eu(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: a } = e,
        o = t.hasActiveTrial,
        s = t.planIdFromItems === J.Xh.PREMIUM_YEAR_TIER_2,
        c = n || o,
        u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0,
        d = J.GP[t.planIdFromItems],
        _ = M.ZP.formatPriceString(M.ZP.getDefaultPrice(d.id), d.interval),
        { enabled: h } = G.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        m = () => {
            var e, t, n;
            return h
                ? ""
                : o
                  ? ee.intl.format(ee.t["2CGBrq"], {
                        remainingTime: u,
                        price: _,
                    })
                  : s
                    ? ee.intl.format(ee.t["+qqh6u"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : J.Bo,
                          regularPrice: _,
                      })
                    : ee.intl.formatToPlainString(ee.t["3Ziutb"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : J.M_,
                          regularPrice: _,
                          numMonths: null != (n = null == i ? void 0 : i.duration) ? n : J.rt,
                      });
        };
    return c
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (o || !s) &&
                      (0, r.jsx)(K.Cy, {
                          text: o ? ee.intl.string(ee.t.qYKftb) : ee.intl.string(ee.t.EyjDRE),
                          className: et.topRimPillWithSparkles,
                          colorOptions: (0, f.wj)(a)
                              ? K.VE.PREMIUM_TIER_2_WHITE_FILL
                              : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (o || !s) && (0, r.jsx)("div", { className: et.rimGlowTier2 }),
                  (0, r.jsx)(p.X6q, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: et.trialHeader,
                      children: m(),
                  }),
              ],
          })
        : h
          ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
          : (0, r.jsx)(q.Z, {
                variant: void 0,
                subscriptionTier: J.Si.TIER_2,
                interval: d.interval,
            });
}
function ed() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, O.ZP)(),
        i = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        a = (0, A.Z)(),
        s = (0, U.W)(),
        l = null !== i && null !== i.planIdFromItems;
    if (!l && !a.isFractionalPremiumActive) return null;
    let u = a.isFractionalPremiumActive,
        _ = null !== i && i.hasActiveTrial,
        h = e || _,
        m = () =>
            u && !s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K.mn, {
                              text: ee.intl.string(ee.t.uXF4c3),
                              className: et.fractionalPremiumTopRimPill,
                              colorOptions: K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                          }),
                          (0, r.jsx)(p.X6q, {
                              variant: "heading-md/normal",
                              color: "always-white",
                              className: et.fractionalPremiumSubheader,
                              children: ee.intl.format(ee.t.sK7fGh, {
                                  helpCenterLink: j.Z.getArticleURL($.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  })
                : l
                  ? (0, r.jsx)(eu, {
                        premiumSubscription: i,
                        isDiscountApplied: e,
                        activeDiscountInfo: t,
                        theme: n,
                    })
                  : s
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(K.Cy, {
                                  text: ee.intl.string(ee.t.qYKftb),
                                  className: et.topRimPillWithSparkles,
                                  colorOptions: (0, f.wj)(n)
                                      ? K.VE.PREMIUM_TIER_2_WHITE_FILL
                                      : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                              }),
                              (0, r.jsx)(p.X6q, {
                                  variant: "heading-md/normal",
                                  color: "always-white",
                                  className: et.trialHeader,
                                  children: ee.intl.format(ee.t["/SfHws"], { weeks: 1 }),
                              }),
                          ],
                      })
                    : null,
        E = () =>
            u && !l
                ? (0, r.jsxs)(d.hE, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(W.Z, {
                              defaultTextOverride: s ? ee.intl.string(ee.t.YScQSE) : ee.intl.string(ee.t["0b3YRk"]),
                          }),
                          (0, r.jsx)(d.zx, {
                              onClick: () => {
                                  L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eo,
                                      target: es,
                                  }),
                                      (0, g.xf)(),
                                      (0, P.uL)($.Z5c.APPLICATION_STORE);
                              },
                              variant: "overlay-secondary",
                              fullWidth: !0,
                              size: "md",
                              text: s ? ee.intl.string(ee.t.VR2iVF) : ee.intl.string(ee.t.T1aUAQ),
                          }),
                      ],
                  })
                : (0, r.jsxs)(d.hE, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(d.zx, {
                              variant: "overlay-primary",
                              fullWidth: !0,
                              onClick: () => {
                                  L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eo,
                                      target: es,
                                  }),
                                      (0, g.xf)(),
                                      (0, P.uL)($.Z5c.APPLICATION_STORE);
                              },
                              text: ee.intl.string(ee.t.VR2iVF),
                              size: "md",
                          }),
                          (0, r.jsx)(d.zx, {
                              variant: "overlay-secondary",
                              onClick: () => {
                                  L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ei,
                                      target: ea,
                                  }),
                                      b.Z.open($.oAB.SUBSCRIPTIONS);
                              },
                              text: ee.intl.string(ee.t["9uDy6O"]),
                              fullWidth: !0,
                              size: "md",
                          }),
                      ],
                  });
    return (0, r.jsxs)("div", {
        className: o()(et.tierCard, { [et.withTier2Rim]: h }),
        children: [
            (0, r.jsxs)("div", {
                className: et.tierInfo,
                children: [
                    (0, r.jsx)(x.Z, { className: et.tierTitle }),
                    m(),
                    (0, r.jsx)(z.nT, { featureSet: u ? z.uZ.FRACTIONAL_PREMIUM : z.uZ.DEFAULT }),
                    E(),
                ],
            }),
            (0, r.jsx)("div", {
                className: et.tierImage,
                children: (0, r.jsx)("img", {
                    className: et.tierImage,
                    alt: "",
                    src: en,
                }),
            }),
        ],
    });
}
function ef(e) {
    var t, n, i;
    let { className: a, config: s } = e,
        l = (0, c.e7)([v.Z], () => v.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        u = (0, Z.Yr)(null == (t = s.getBackgroundImageUrl) ? void 0 : t.call(s)),
        d = (0, Z.Tl)(null != (n = s.gradientConfig) ? n : void 0),
        f = { color: null != (i = s.textColor) ? i : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: o()(et.giftCardPromotion, a),
        style: null != u ? u : d,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: et.giftImagePromotion,
                "aria-hidden": !0,
                src: l,
            }),
            (0, r.jsxs)("div", {
                className: et.giftInfoPromotion,
                children: [
                    (0, r.jsx)(p.X6q, {
                        className: et.giftInfoTitlePromotion,
                        style: f,
                        variant: "text-lg/bold",
                        children: s.title(),
                    }),
                    (0, r.jsx)(p.Text, {
                        className: et.giftText,
                        style: f,
                        variant: "text-sm/medium",
                        children: s.body(),
                    }),
                    null != s.additionalTerm &&
                        (0, r.jsx)(p.Text, {
                            className: et.giftAdditionalTerm,
                            style: f,
                            variant: "text-xxs/normal",
                            children: s.additionalTerm(),
                        }),
                    (0, r.jsx)(Y.Z, {
                        variant: "overlay-secondary",
                        size: "md",
                        fullWidth: !0,
                        onClick: () => {
                            L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: el,
                                target: ec,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
function e_() {
    return (0, r.jsxs)("div", {
        className: et.giftCard,
        children: [
            (0, r.jsx)("img", {
                className: et.giftImage,
                alt: "",
                src: er,
            }),
            (0, r.jsxs)("div", {
                className: et.giftInfo,
                children: [
                    (0, r.jsx)(p.X6q, {
                        className: et.giftTitle,
                        variant: "heading-xl/extrabold",
                        children: ee.intl.string(ee.t["3KomGR"]),
                    }),
                    (0, r.jsx)(p.Text, {
                        className: et.giftText,
                        variant: "text-sm/normal",
                        children: ee.intl.string(ee.t.yQ06u7),
                    }),
                    (0, r.jsx)(H.Z, {
                        className: o()(et.giftCardButton, et.giftCardButtonColor),
                        textOptions: {
                            textOverride: ee.intl.string(ee.t.Ve9Ge3),
                            textClassName: et.giftButtonCTA,
                        },
                        color: _.zx.Colors.CUSTOM,
                        onClick: () => {
                            L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: el,
                                target: ec,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let ep = function () {
    var e;
    let t = (0, S.Q)(),
        { analyticsLocations: n } = (0, T.ZP)(I.Z.PREMIUM_SETTINGS),
        a = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        o = (0, c.e7)([D.Z], () => D.Z.hasFetchedSubscriptions()),
        s = (0, C.V)(J.nS),
        [l, d] = i.useState(!0),
        f = (0, A.Z)({ forceFetch: !0 }),
        _ = null == (e = (0, B.Z)()) ? void 0 : e.billingSettingsMarketingBanner,
        g = (0, c.e7)([w.Z], () => w.Z.enabled),
        b = i.useRef(null);
    (0, V.B)();
    let O = (0, F.b)();
    i.useEffect(() => {
        h.Z.wait(async () => {
            g || t || (await Promise.all([m.jg(), m.tZ(), (0, E.Y2)(null, null, $.JjL.DISCOVERY)])), d(!1);
        });
    }, [g, t]);
    let [v, P] = i.useState(!1);
    if (g) return (0, r.jsx)(y.Z, {});
    if (t) return (0, r.jsx)(N.c8, {});
    let x = o && null !== a && s,
        j = f.fetched && f.isFractionalPremiumActive;
    if (!x && !j && !l)
        return (0, r.jsx)(R.Z, {
            title: ee.intl.string(ee.t.dyq9TU),
            note: null,
        });
    if ((!x && !j) || l) return (0, r.jsx)(p.$jN, {});
    let M = !!(null == a ? void 0 : a.hasActiveTrial);
    return (0, r.jsx)(T.Gt, {
        value: n,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != _ && (0, r.jsx)(ef, { config: _ }),
                        (0, r.jsx)(ed, {}),
                        O && (0, r.jsx)(Q.Z, { isInSettings: !0 }),
                        null == _ && (0, r.jsx)(e_, {}),
                        (0, r.jsx)(X.Z, {
                            hideCTAs: !0,
                            headingOverride: ee.intl.string(ee.t.dnVvQU),
                            hidePill: !M,
                            selectedPlanColumnClassName: et.tier2PlanComparisonTableBackground,
                            selectedPlanTier: J.p9.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    innerRef: b,
                    onChange: (e) => {
                        e &&
                            !v &&
                            (L.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            P(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: b,
                        className: et.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
