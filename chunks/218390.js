n.d(t, {
    C: () => ed,
    Z: () => em,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(755721),
    p = n(481060),
    g = n(570140),
    h = n(355467),
    f = n(37234),
    b = n(821849),
    x = n(230711),
    _ = n(497321),
    j = n(410030),
    E = n(607070),
    C = n(100527),
    O = n(906732),
    v = n(211242),
    S = n(975298),
    T = n(15640),
    N = n(89057),
    I = n(70097),
    y = n(406128),
    A = n(703656),
    P = n(246946),
    R = n(78839),
    D = n(483444),
    Z = n(626135),
    w = n(63063),
    k = n(74538),
    L = n(140465),
    B = n(695349),
    M = n(46062),
    U = n(347896),
    V = n(717401),
    G = n(533525),
    F = n(232076),
    H = n(736519),
    z = n(117791),
    W = n(767714),
    Y = n(382791),
    K = n(823188),
    q = n(504865),
    X = n(179984),
    J = n(386733),
    Q = n(474936),
    $ = n(981631),
    ee = n(388032),
    et = n(458622),
    en = n(881188),
    ei = n(434691);
let er = "to_premium_home_button",
    es = "premium home page",
    ea = "gifting_button",
    el = "payment modal";
function eo(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        a = t.hasActiveTrial,
        l = t.planIdFromItems === Q.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        m = Q.GP[t.planIdFromItems],
        g = k.ZP.formatPriceString(k.ZP.getDefaultPrice(m.id), m.interval),
        { enabled: h } = M.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" });
    if (c) {
        var f, b, x;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (a || !l) &&
                    (0, i.jsx)(Y.Cy, {
                        text: a ? ee.intl.string(ee.t.qYKftb) : ee.intl.string(ee.t.EyjDRE),
                        className: et.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s)
                            ? Y.VE.PREMIUM_TIER_2_WHITE_FILL
                            : Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                    }),
                (a || !l) && (0, i.jsx)("div", { className: et.rimGlowTier2 }),
                (0, i.jsx)(p.X6q, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: et.trialHeader,
                    children: h
                        ? ""
                        : a
                          ? ee.intl.format(ee.t["2CGBrq"], {
                                remainingTime: d,
                                price: g,
                            })
                          : l
                            ? ee.intl.format(ee.t["+qqh6u"], {
                                  percent: null != (f = null == r ? void 0 : r.percentage) ? f : Q.Bo,
                                  regularPrice: g,
                              })
                            : ee.intl.formatToPlainString(ee.t["3Ziutb"], {
                                  percent: null != (b = null == r ? void 0 : r.percentage) ? b : Q.M_,
                                  regularPrice: g,
                                  numMonths: null != (x = null == r ? void 0 : r.duration) ? x : Q.rt,
                              }),
                }),
            ],
        });
    }
    return h
        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
        : (0, i.jsx)(q.Z, {
              variant: void 0,
              subscriptionTier: Q.Si.TIER_2,
              interval: m.interval,
          });
}
function ec() {
    let e = (0, L.t7)(),
        t = (0, L.lr)(),
        n = (0, j.ZP)(),
        r = (0, c.e7)([R.Z], () => R.Z.getPremiumTypeSubscription()),
        s = (0, S.Z)(),
        l = (0, B.W)(),
        o = null !== r && null !== r.planIdFromItems;
    if (!o && !s.isFractionalPremiumActive) return null;
    let d = s.isFractionalPremiumActive,
        g = null !== r && r.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: a()(et.tierCard, { [et.withTier2Rim]: e || g }),
        children: [
            (0, i.jsxs)("div", {
                className: et.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: et.tierTitle }),
                    d && !l
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(Y.mn, {
                                      text: ee.intl.string(ee.t.uXF4c3),
                                      className: et.fractionalPremiumTopRimPill,
                                      colorOptions: Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                  }),
                                  (0, i.jsx)(p.X6q, {
                                      variant: "heading-md/normal",
                                      color: "always-white",
                                      className: et.fractionalPremiumSubheader,
                                      children: ee.intl.format(ee.t.sK7fGh, {
                                          helpCenterLink: w.Z.getArticleURL($.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                      }),
                                  }),
                              ],
                          })
                        : o
                          ? (0, i.jsx)(eo, {
                                premiumSubscription: r,
                                isDiscountApplied: e,
                                activeDiscountInfo: t,
                                theme: n,
                            })
                          : l
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(Y.Cy, {
                                          text: ee.intl.string(ee.t.qYKftb),
                                          className: et.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(n)
                                              ? Y.VE.PREMIUM_TIER_2_WHITE_FILL
                                              : Y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                      }),
                                      (0, i.jsx)(p.X6q, {
                                          variant: "heading-md/normal",
                                          color: "always-white",
                                          className: et.trialHeader,
                                          children: ee.intl.format(ee.t["/SfHws"], { weeks: 1 }),
                                      }),
                                  ],
                              })
                            : null,
                    (0, i.jsx)(K.nT, { featureSet: d ? K.uZ.FRACTIONAL_PREMIUM : K.uZ.DEFAULT }),
                    d && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(W.Z, {
                                      textOptions: {
                                          textOverride: l
                                              ? ee.intl.string(ee.t.YScQSE)
                                              : ee.intl.string(ee.t["0b3YRk"]),
                                          textClassName: et.tierCardButtonCTA,
                                      },
                                      className: et.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1,
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: et.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: er,
                                              target: es,
                                          }),
                                              (0, f.xf)(),
                                              (0, A.uL)($.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          variant: "text-sm/medium",
                                          color: "always-white",
                                          children: l ? ee.intl.string(ee.t.VR2iVF) : ee.intl.string(ee.t.T1aUAQ),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.zx, {
                                      className: et.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: er,
                                              target: es,
                                          }),
                                              (0, f.xf)(),
                                              (0, A.uL)($.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: et.tierCardButtonCTA,
                                          variant: "text-sm/medium",
                                          children: ee.intl.string(ee.t.VR2iVF),
                                      }),
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: et.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              x.Z.open($.oAB.SUBSCRIPTIONS);
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          variant: "text-sm/medium",
                                          color: "always-white",
                                          children: ee.intl.string(ee.t["9uDy6O"]),
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: et.tierImage,
                children: (0, i.jsx)("img", {
                    className: et.tierImage,
                    alt: "",
                    src: en,
                }),
            }),
        ],
    });
}
function ed(e) {
    var t, n;
    let { className: r, config: s } = e,
        l = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, V.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: a()(et.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)(I.Z, {
                className: et.videoAsset,
                src: l,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
            }),
            (0, i.jsxs)("div", {
                className: et.giftInfoPromotion,
                children: [
                    null != s.getBackgroundImageUrl &&
                        (0, i.jsx)("img", {
                            alt: "",
                            "aria-hidden": !0,
                            className: et.giftCardPromotionBannerImage,
                            src: s.getBackgroundImageUrl(),
                        }),
                    (0, i.jsx)(p.X6q, {
                        className: et.giftInfoTitlePromotion,
                        style: d,
                        variant: "text-lg/bold",
                        children: s.title(),
                    }),
                    (0, i.jsx)(p.Text, {
                        className: et.giftText,
                        style: d,
                        variant: "text-sm/medium",
                        children: s.body(),
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(p.Text, {
                            className: et.giftAdditionalTerm,
                            style: d,
                            variant: "text-xxs/normal",
                            children: s.additionalTerm(),
                        }),
                    (0, i.jsx)(z.Z, {
                        variant: "secondary",
                        size: "md",
                        onClick: () => {
                            Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ea,
                                target: el,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
function eu() {
    var e;
    let t = null == (e = (0, U.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ed, { config: t })
        : (0, i.jsxs)("div", {
              className: et.giftCard,
              children: [
                  (0, i.jsx)("img", {
                      className: et.giftImage,
                      alt: "",
                      src: ei,
                  }),
                  (0, i.jsxs)("div", {
                      className: et.giftInfo,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: et.giftTitle,
                              variant: "heading-xl/extrabold",
                              children: ee.intl.string(ee.t["3KomGR"]),
                          }),
                          (0, i.jsx)(p.Text, {
                              className: et.giftText,
                              variant: "text-sm/normal",
                              children: ee.intl.string(ee.t.yQ06u7),
                          }),
                          (0, i.jsx)(H.Z, {
                              className: a()(et.giftCardButton, et.giftCardButtonColor),
                              textOptions: {
                                  textOverride: ee.intl.string(ee.t.Ve9Ge3),
                                  textClassName: et.giftButtonCTA,
                              },
                              color: m.zx.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ea,
                                      target: el,
                                  });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
let em = function () {
    let e = "PremiumManagementSettings",
        t = (0, v.Q)(),
        { analyticsLocations: n } = (0, O.ZP)(C.Z.PREMIUM_SETTINGS),
        s = (0, c.e7)([R.Z], () => R.Z.getPremiumTypeSubscription()),
        a = (0, c.e7)([R.Z], () => R.Z.hasFetchedSubscriptions()),
        l = (0, T.V)(Q.nS),
        [o, u] = r.useState(!0),
        m = (0, S.Z)({ forceFetch: !0 }),
        f = (0, c.e7)([P.Z], () => P.Z.enabled),
        x = r.useRef(null);
    (0, F.B)(e);
    let j = (0, G.b)(e);
    r.useEffect(() => {
        g.Z.wait(async () => {
            f || t || (await Promise.all([h.jg(), h.tZ(), (0, b.Y2)(null, null, $.JjL.DISCOVERY)])), u(!1);
        });
    }, [f, t]);
    let [E, I] = r.useState(!1);
    if (f) return (0, i.jsx)(_.Z, {});
    if (t) return (0, i.jsx)(N.c8, {});
    let A = a && null !== s && l,
        D = m.fetched && m.isFractionalPremiumActive;
    if (!A && !D && !o)
        return (0, i.jsx)(y.Z, {
            title: ee.intl.string(ee.t.dyq9TU),
            note: null,
        });
    if ((!A && !D) || o) return (0, i.jsx)(p.$jN, {});
    let w = !!(null == s ? void 0 : s.hasActiveTrial);
    return (0, i.jsx)(O.Gt, {
        value: n,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(ec, {}),
                        j && (0, i.jsx)(J.Z, { isInSettings: !0 }),
                        (0, i.jsx)(eu, {}),
                        (0, i.jsx)(X.Z, {
                            hideCTAs: !0,
                            headingOverride: ee.intl.string(ee.t.dnVvQU),
                            hidePill: !w,
                            selectedPlanColumnClassName: et.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Q.p9.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(d.$, {
                    innerRef: x,
                    onChange: (e) => {
                        e &&
                            !E &&
                            (Z.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            I(!0));
                    },
                    children: (0, i.jsx)("div", {
                        ref: x,
                        className: et.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
