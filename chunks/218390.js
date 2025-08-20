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
    d = n(780384),
    f = n(755721),
    _ = n(481060),
    p = n(570140),
    h = n(355467),
    m = n(37234),
    g = n(821849),
    E = n(230711),
    b = n(497321),
    y = n(410030),
    O = n(607070),
    v = n(100527),
    I = n(906732),
    T = n(211242),
    S = n(975298),
    A = n(15640),
    C = n(89057),
    N = n(70097),
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
    V = n(533525),
    F = n(232076),
    H = n(736519),
    Y = n(117791),
    W = n(767714),
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
        f = J.GP[t.planIdFromItems],
        p = M.ZP.formatPriceString(M.ZP.getDefaultPrice(f.id), f.interval),
        { enabled: h } = G.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        m = () => {
            var e, t, n;
            return h
                ? ""
                : o
                  ? ee.intl.format(ee.t["2CGBrq"], {
                        remainingTime: u,
                        price: p,
                    })
                  : s
                    ? ee.intl.format(ee.t["+qqh6u"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : J.Bo,
                          regularPrice: p,
                      })
                    : ee.intl.formatToPlainString(ee.t["3Ziutb"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : J.M_,
                          regularPrice: p,
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
                          colorOptions: (0, d.wj)(a)
                              ? K.VE.PREMIUM_TIER_2_WHITE_FILL
                              : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (o || !s) && (0, r.jsx)("div", { className: et.rimGlowTier2 }),
                  (0, r.jsx)(_.X6q, {
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
                interval: f.interval,
            });
}
function ed() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, y.ZP)(),
        i = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        a = (0, S.Z)(),
        s = (0, U.W)(),
        l = null !== i && null !== i.planIdFromItems;
    if (!l && !a.isFractionalPremiumActive) return null;
    let u = a.isFractionalPremiumActive,
        p = null !== i && i.hasActiveTrial,
        h = e || p,
        g = () =>
            u && !s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K.mn, {
                              text: ee.intl.string(ee.t.uXF4c3),
                              className: et.fractionalPremiumTopRimPill,
                              colorOptions: K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                          }),
                          (0, r.jsx)(_.X6q, {
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
                                  colorOptions: (0, d.wj)(n)
                                      ? K.VE.PREMIUM_TIER_2_WHITE_FILL
                                      : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                              }),
                              (0, r.jsx)(_.X6q, {
                                  variant: "heading-md/normal",
                                  color: "always-white",
                                  className: et.trialHeader,
                                  children: ee.intl.format(ee.t["/SfHws"], { weeks: 1 }),
                              }),
                          ],
                      })
                    : null,
        b = () =>
            u && !l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(W.Z, {
                              textOptions: {
                                  textOverride: s ? ee.intl.string(ee.t.YScQSE) : ee.intl.string(ee.t["0b3YRk"]),
                                  textClassName: et.tierCardButtonCTA,
                              },
                              className: et.tierCardButton,
                              color: f.zx.Colors.WHITE,
                              disableShine: !0,
                              showIcon: !1,
                          }),
                          (0, r.jsx)(f.zx, {
                              className: et.managePlanButton,
                              look: f.zx.Looks.OUTLINED,
                              color: f.zx.Colors.WHITE,
                              onClick: () => {
                                  L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eo,
                                      target: es,
                                  }),
                                      (0, m.xf)(),
                                      (0, P.uL)($.Z5c.APPLICATION_STORE);
                              },
                              children: (0, r.jsx)(_.Text, {
                                  variant: "text-sm/medium",
                                  color: "always-white",
                                  children: s ? ee.intl.string(ee.t.VR2iVF) : ee.intl.string(ee.t.T1aUAQ),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.zx, {
                              className: et.tierCardButton,
                              color: f.zx.Colors.WHITE,
                              onClick: () => {
                                  L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eo,
                                      target: es,
                                  }),
                                      (0, m.xf)(),
                                      (0, P.uL)($.Z5c.APPLICATION_STORE);
                              },
                              children: (0, r.jsx)(_.Text, {
                                  className: et.tierCardButtonCTA,
                                  variant: "text-sm/medium",
                                  children: ee.intl.string(ee.t.VR2iVF),
                              }),
                          }),
                          (0, r.jsx)(f.zx, {
                              className: et.managePlanButton,
                              look: f.zx.Looks.OUTLINED,
                              color: f.zx.Colors.WHITE,
                              onClick: () => {
                                  L.default.track($.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ei,
                                      target: ea,
                                  }),
                                      E.Z.open($.oAB.SUBSCRIPTIONS);
                              },
                              children: (0, r.jsx)(_.Text, {
                                  variant: "text-sm/medium",
                                  color: "always-white",
                                  children: ee.intl.string(ee.t["9uDy6O"]),
                              }),
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
                    g(),
                    (0, r.jsx)(z.nT, { featureSet: u ? z.uZ.FRACTIONAL_PREMIUM : z.uZ.DEFAULT }),
                    b(),
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
    var t, n;
    let { className: i, config: a } = e,
        s = (0, c.e7)([O.Z], () => O.Z.useReducedMotion) ? a.getStaticImageUrl() : a.getAnimatedImageUrl(),
        l = (0, Z.Tl)(null != (t = a.gradientConfig) ? t : void 0),
        u = { color: null != (n = a.textColor) ? n : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: o()(et.giftCardPromotion, i),
        style: l,
        children: [
            (0, r.jsx)(N.Z, {
                className: et.videoAsset,
                src: s,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
            }),
            (0, r.jsxs)("div", {
                className: et.giftInfoPromotion,
                children: [
                    null != a.getBackgroundImageUrl &&
                        (0, r.jsx)("img", {
                            alt: "",
                            "aria-hidden": !0,
                            className: et.giftCardPromotionBannerImage,
                            src: a.getBackgroundImageUrl(),
                        }),
                    (0, r.jsx)(_.X6q, {
                        className: et.giftInfoTitlePromotion,
                        style: u,
                        variant: "text-lg/bold",
                        children: a.title(),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: et.giftText,
                        style: u,
                        variant: "text-sm/medium",
                        children: a.body(),
                    }),
                    null != a.additionalTerm &&
                        (0, r.jsx)(_.Text, {
                            className: et.giftAdditionalTerm,
                            style: u,
                            variant: "text-xxs/normal",
                            children: a.additionalTerm(),
                        }),
                    (0, r.jsx)(Y.Z, {
                        variant: "secondary",
                        size: "md",
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
    var e;
    let t = null == (e = (0, B.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, r.jsx)(ef, { config: t })
        : (0, r.jsxs)("div", {
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
                          (0, r.jsx)(_.X6q, {
                              className: et.giftTitle,
                              variant: "heading-xl/extrabold",
                              children: ee.intl.string(ee.t["3KomGR"]),
                          }),
                          (0, r.jsx)(_.Text, {
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
                              color: f.zx.Colors.CUSTOM,
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
    let e = "PremiumManagementSettings",
        t = (0, T.Q)(),
        { analyticsLocations: n } = (0, I.ZP)(v.Z.PREMIUM_SETTINGS),
        a = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        o = (0, c.e7)([D.Z], () => D.Z.hasFetchedSubscriptions()),
        s = (0, A.V)(J.nS),
        [l, d] = i.useState(!0),
        f = (0, S.Z)({ forceFetch: !0 }),
        m = (0, c.e7)([w.Z], () => w.Z.enabled),
        E = i.useRef(null);
    (0, F.B)(e);
    let y = (0, V.b)(e);
    i.useEffect(() => {
        p.Z.wait(async () => {
            m || t || (await Promise.all([h.jg(), h.tZ(), (0, g.Y2)(null, null, $.JjL.DISCOVERY)])), d(!1);
        });
    }, [m, t]);
    let [O, N] = i.useState(!1);
    if (m) return (0, r.jsx)(b.Z, {});
    if (t) return (0, r.jsx)(C.c8, {});
    let P = o && null !== a && s,
        x = f.fetched && f.isFractionalPremiumActive;
    if (!P && !x && !l)
        return (0, r.jsx)(R.Z, {
            title: ee.intl.string(ee.t.dyq9TU),
            note: null,
        });
    if ((!P && !x) || l) return (0, r.jsx)(_.$jN, {});
    let j = !!(null == a ? void 0 : a.hasActiveTrial);
    return (0, r.jsx)(I.Gt, {
        value: n,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ed, {}),
                        y && (0, r.jsx)(Q.Z, { isInSettings: !0 }),
                        (0, r.jsx)(e_, {}),
                        (0, r.jsx)(X.Z, {
                            hideCTAs: !0,
                            headingOverride: ee.intl.string(ee.t.dnVvQU),
                            hidePill: !j,
                            selectedPlanColumnClassName: et.tier2PlanComparisonTableBackground,
                            selectedPlanTier: J.p9.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    innerRef: E,
                    onChange: (e) => {
                        e &&
                            !O &&
                            (L.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            N(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: E,
                        className: et.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
