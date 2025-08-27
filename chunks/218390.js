n.d(t, {
    C: () => ef,
    Z: () => ep,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
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
    F = n(533525),
    V = n(232076),
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
    eo = "subscriptions settings",
    ea = "to_premium_home_button",
    es = "premium home page",
    el = "gifting_button",
    ec = "payment modal";
function eu(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: o } = e,
        a = t.hasActiveTrial,
        s = t.planIdFromItems === J.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0,
        f = J.GP[t.planIdFromItems],
        p = M.ZP.formatPriceString(M.ZP.getDefaultPrice(f.id), f.interval),
        { enabled: h } = G.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        m = () => {
            var e, t, n;
            return h
                ? ""
                : a
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
                  (a || !s) &&
                      (0, r.jsx)(K.Cy, {
                          text: a ? ee.intl.string(ee.t.qYKftb) : ee.intl.string(ee.t.EyjDRE),
                          className: et.topRimPillWithSparkles,
                          colorOptions: (0, d.wj)(o)
                              ? K.VE.PREMIUM_TIER_2_WHITE_FILL
                              : K.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (a || !s) && (0, r.jsx)("div", { className: et.rimGlowTier2 }),
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
        o = (0, S.Z)(),
        s = (0, U.W)(),
        l = null !== i && null !== i.planIdFromItems;
    if (!l && !o.isFractionalPremiumActive) return null;
    let u = o.isFractionalPremiumActive,
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
                                      cta_type: ea,
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
                                      cta_type: ea,
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
                                      target: eo,
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
        className: a()(et.tierCard, { [et.withTier2Rim]: h }),
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
    let { className: i, config: o } = e,
        s = (0, c.e7)([O.Z], () => O.Z.useReducedMotion) ? o.getStaticImageUrl() : o.getAnimatedImageUrl(),
        l = null != o.getBackgroundImageUrl ? o.getBackgroundImageUrl() : void 0,
        u = (0, Z.Tl)(null != (t = o.gradientConfig) ? t : void 0),
        d = { color: null != (n = o.textColor) ? n : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: a()(et.giftCardPromotion, i),
        style: null != l ? { backgroundImage: "url(".concat(l, ")") } : u,
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
                    (0, r.jsx)(_.X6q, {
                        className: et.giftInfoTitlePromotion,
                        style: d,
                        variant: "text-lg/bold",
                        children: o.title(),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: et.giftText,
                        style: d,
                        variant: "text-sm/medium",
                        children: o.body(),
                    }),
                    null != o.additionalTerm &&
                        (0, r.jsx)(_.Text, {
                            className: et.giftAdditionalTerm,
                            style: d,
                            variant: "text-xxs/normal",
                            children: o.additionalTerm(),
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
                        className: a()(et.giftCardButton, et.giftCardButtonColor),
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
    var e;
    let t = "PremiumManagementSettings",
        n = (0, T.Q)(),
        { analyticsLocations: o } = (0, I.ZP)(v.Z.PREMIUM_SETTINGS),
        a = (0, c.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
        s = (0, c.e7)([D.Z], () => D.Z.hasFetchedSubscriptions()),
        l = (0, A.V)(J.nS),
        [d, f] = i.useState(!0),
        m = (0, S.Z)({ forceFetch: !0 }),
        E = null == (e = (0, B.Z)()) ? void 0 : e.billingSettingsMarketingBanner,
        y = (0, c.e7)([w.Z], () => w.Z.enabled),
        O = i.useRef(null);
    (0, V.B)(t);
    let N = (0, F.b)(t);
    i.useEffect(() => {
        p.Z.wait(async () => {
            y || n || (await Promise.all([h.jg(), h.tZ(), (0, g.Y2)(null, null, $.JjL.DISCOVERY)])), f(!1);
        });
    }, [y, n]);
    let [P, x] = i.useState(!1);
    if (y) return (0, r.jsx)(b.Z, {});
    if (n) return (0, r.jsx)(C.c8, {});
    let j = s && null !== a && l,
        M = m.fetched && m.isFractionalPremiumActive;
    if (!j && !M && !d)
        return (0, r.jsx)(R.Z, {
            title: ee.intl.string(ee.t.dyq9TU),
            note: null,
        });
    if ((!j && !M) || d) return (0, r.jsx)(_.$jN, {});
    let k = !!(null == a ? void 0 : a.hasActiveTrial);
    return (0, r.jsx)(I.Gt, {
        value: o,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != E && (0, r.jsx)(ef, { config: E }),
                        (0, r.jsx)(ed, {}),
                        N && (0, r.jsx)(Q.Z, { isInSettings: !0 }),
                        null == E && (0, r.jsx)(e_, {}),
                        (0, r.jsx)(X.Z, {
                            hideCTAs: !0,
                            headingOverride: ee.intl.string(ee.t.dnVvQU),
                            hidePill: !k,
                            selectedPlanColumnClassName: et.tier2PlanComparisonTableBackground,
                            selectedPlanTier: J.p9.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    innerRef: O,
                    onChange: (e) => {
                        e &&
                            !P &&
                            (L.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: o }),
                            x(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: O,
                        className: et.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
