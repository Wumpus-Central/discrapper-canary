n.d(t, {
    C: () => eo,
    Z: () => ed,
}),
    n(388685);
var i = n(255367),
    r = n(73800),
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
    I = n(89057),
    N = n(406128),
    y = n(703656),
    A = n(246946),
    P = n(78839),
    R = n(483444),
    D = n(626135),
    Z = n(63063),
    w = n(74538),
    k = n(140465),
    L = n(695349),
    M = n(46062),
    B = n(717401),
    U = n(286961),
    V = n(533525),
    G = n(232076),
    F = n(736519),
    H = n(767714),
    z = n(382791),
    W = n(823188),
    Y = n(504865),
    K = n(179984),
    q = n(386733),
    X = n(474936),
    J = n(981631),
    Q = n(388032),
    $ = n(133525),
    ee = n(881188),
    et = n(434691);
let en = "to_premium_home_button",
    ei = "premium home page",
    er = "gifting_button",
    es = "payment modal";
function ea(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: r, theme: s } = e,
        a = t.hasActiveTrial,
        l = t.planIdFromItems === X.Xh.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        m = X.GP[t.planIdFromItems],
        g = w.ZP.formatPriceString(w.ZP.getDefaultPrice(m.id), m.interval),
        { enabled: h } = M.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" });
    if (c) {
        var f, b, x;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (a || !l) &&
                    (0, i.jsx)(z.Cy, {
                        text: a ? Q.intl.string(Q.t.qYKftb) : Q.intl.string(Q.t.EyjDRE),
                        className: $.topRimPillWithSparkles,
                        colorOptions: (0, u.wj)(s)
                            ? z.VE.PREMIUM_TIER_2_WHITE_FILL
                            : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                    }),
                (a || !l) && (0, i.jsx)("div", { className: $.rimGlowTier2 }),
                (0, i.jsx)(p.X6q, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: $.trialHeader,
                    children: h
                        ? ""
                        : a
                          ? Q.intl.format(Q.t["2CGBrq"], {
                                remainingTime: d,
                                price: g,
                            })
                          : l
                            ? Q.intl.format(Q.t["+qqh6u"], {
                                  percent: null != (f = null == r ? void 0 : r.percentage) ? f : X.Bo,
                                  regularPrice: g,
                              })
                            : Q.intl.formatToPlainString(Q.t["3Ziutb"], {
                                  percent: null != (b = null == r ? void 0 : r.percentage) ? b : X.M_,
                                  regularPrice: g,
                                  numMonths: null != (x = null == r ? void 0 : r.duration) ? x : X.rt,
                              }),
                }),
            ],
        });
    }
    return h
        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
        : (0, i.jsx)(Y.Z, {
              variant: void 0,
              subscriptionTier: X.Si.TIER_2,
              interval: m.interval,
          });
}
function el() {
    let e = (0, k.t7)(),
        t = (0, k.lr)(),
        n = (0, j.ZP)(),
        r = (0, c.e7)([P.Z], () => P.Z.getPremiumTypeSubscription()),
        s = (0, S.Z)(),
        l = (0, L.W)(),
        o = null !== r && null !== r.planIdFromItems;
    if (!o && !s.isFractionalPremiumActive) return null;
    let d = s.isFractionalPremiumActive,
        g = null !== r && r.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: a()($.tierCard, { [$.withTier2Rim]: e || g }),
        children: [
            (0, i.jsxs)("div", {
                className: $.tierInfo,
                children: [
                    (0, i.jsx)(R.Z, { className: $.tierTitle }),
                    d && !l
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(z.mn, {
                                      text: Q.intl.string(Q.t.uXF4c3),
                                      className: $.fractionalPremiumTopRimPill,
                                      colorOptions: z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                  }),
                                  (0, i.jsx)(p.X6q, {
                                      variant: "heading-md/normal",
                                      color: "always-white",
                                      className: $.fractionalPremiumSubheader,
                                      children: Q.intl.format(Q.t.sK7fGh, {
                                          helpCenterLink: Z.Z.getArticleURL(J.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                      }),
                                  }),
                              ],
                          })
                        : o
                          ? (0, i.jsx)(ea, {
                                premiumSubscription: r,
                                isDiscountApplied: e,
                                activeDiscountInfo: t,
                                theme: n,
                            })
                          : l
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(z.Cy, {
                                          text: Q.intl.string(Q.t.qYKftb),
                                          className: $.topRimPillWithSparkles,
                                          colorOptions: (0, u.wj)(n)
                                              ? z.VE.PREMIUM_TIER_2_WHITE_FILL
                                              : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                      }),
                                      (0, i.jsx)(p.X6q, {
                                          variant: "heading-md/normal",
                                          color: "always-white",
                                          className: $.trialHeader,
                                          children: Q.intl.format(Q.t["/SfHws"], { weeks: 1 }),
                                      }),
                                  ],
                              })
                            : null,
                    (0, i.jsx)(W.nT, { featureSet: d ? W.uZ.FRACTIONAL_PREMIUM : W.uZ.DEFAULT }),
                    d && !o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(H.Z, {
                                      textOptions: {
                                          textOverride: l ? Q.intl.string(Q.t.YScQSE) : Q.intl.string(Q.t["0b3YRk"]),
                                          textClassName: $.tierCardButtonCTA,
                                      },
                                      className: $.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      disableShine: !0,
                                      showIcon: !1,
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: $.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          D.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: en,
                                              target: ei,
                                          }),
                                              (0, f.xf)(),
                                              (0, y.uL)(J.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: $.__invalid_managePlanButtonCTA,
                                          variant: "text-sm/medium",
                                          color: "always-white",
                                          children: l ? Q.intl.string(Q.t.VR2iVF) : Q.intl.string(Q.t.T1aUAQ),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.zx, {
                                      className: $.tierCardButton,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          D.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: en,
                                              target: ei,
                                          }),
                                              (0, f.xf)(),
                                              (0, y.uL)(J.Z5c.APPLICATION_STORE);
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: $.tierCardButtonCTA,
                                          variant: "text-sm/medium",
                                          children: Q.intl.string(Q.t.VR2iVF),
                                      }),
                                  }),
                                  (0, i.jsx)(m.zx, {
                                      className: $.managePlanButton,
                                      look: m.zx.Looks.OUTLINED,
                                      color: m.zx.Colors.WHITE,
                                      onClick: () => {
                                          D.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              x.Z.open(J.oAB.SUBSCRIPTIONS);
                                      },
                                      children: (0, i.jsx)(p.Text, {
                                          className: $.__invalid_managePlanButtonCTA,
                                          variant: "text-sm/medium",
                                          color: "always-white",
                                          children: Q.intl.string(Q.t["9uDy6O"]),
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: $.tierImage,
                children: (0, i.jsx)("img", {
                    className: $.tierImage,
                    alt: "",
                    src: ee,
                }),
            }),
        ],
    });
}
function eo(e) {
    var t, n;
    let { className: r, config: s } = e,
        l = (0, c.e7)([E.Z], () => E.Z.useReducedMotion) ? s.getStaticImageUrl() : s.getAnimatedImageUrl(),
        o = (0, B.Tl)(null != (t = s.gradientConfig) ? t : void 0),
        d = { color: null != (n = s.textColor) ? n : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: a()($.giftCardPromotion, r),
        style: o,
        children: [
            (0, i.jsx)("img", {
                alt: "",
                className: $.giftImagePromotion,
                "aria-hidden": !0,
                src: l,
            }),
            (0, i.jsxs)("div", {
                className: $.giftInfoPromotion,
                children: [
                    null != s.getBackgroundImageUrl &&
                        (0, i.jsx)("img", {
                            alt: "",
                            "aria-hidden": !0,
                            className: $.giftCardPromotionBannerImage,
                            src: s.getBackgroundImageUrl(),
                        }),
                    (0, i.jsx)(p.X6q, {
                        className: $.giftInfoTitlePromotion,
                        style: d,
                        variant: "text-lg/bold",
                        children: s.title(),
                    }),
                    (0, i.jsx)(p.Text, {
                        className: $.giftText,
                        style: d,
                        variant: "text-sm/medium",
                        children: s.body(),
                    }),
                    null != s.additionalTerm &&
                        (0, i.jsx)(p.Text, {
                            className: $.giftAdditionalTerm,
                            style: d,
                            variant: "text-xxs/normal",
                            children: s.additionalTerm(),
                        }),
                    (0, i.jsx)(F.Z, {
                        className: $.giftCardButton,
                        textOptions: {
                            textOverride: Q.intl.string(Q.t.Ve9Ge3),
                            textClassName: $.giftButtonCTA,
                        },
                        color: m.zx.Colors.BRAND,
                        onClick: () => {
                            D.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: er,
                                target: es,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
function ec() {
    var e;
    let t = null == (e = (0, U.Z)()) ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(eo, { config: t })
        : (0, i.jsxs)("div", {
              className: $.giftCard,
              children: [
                  (0, i.jsx)("img", {
                      className: $.giftImage,
                      alt: "",
                      src: et,
                  }),
                  (0, i.jsxs)("div", {
                      className: $.giftInfo,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: $.giftTitle,
                              variant: "heading-xl/extrabold",
                              children: Q.intl.string(Q.t["3KomGR"]),
                          }),
                          (0, i.jsx)(p.Text, {
                              className: $.giftText,
                              variant: "text-sm/normal",
                              children: Q.intl.string(Q.t.yQ06u7),
                          }),
                          (0, i.jsx)(F.Z, {
                              className: a()($.giftCardButton, $.giftCardButtonColor),
                              textOptions: {
                                  textOverride: Q.intl.string(Q.t.Ve9Ge3),
                                  textClassName: $.giftButtonCTA,
                              },
                              color: m.zx.Colors.CUSTOM,
                              onClick: () => {
                                  D.default.track(J.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: er,
                                      target: es,
                                  });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
let ed = function () {
    let e = "PremiumManagementSettings",
        t = (0, v.Q)(),
        { analyticsLocations: n } = (0, O.ZP)(C.Z.PREMIUM_SETTINGS),
        s = (0, c.e7)([P.Z], () => P.Z.getPremiumTypeSubscription()),
        a = (0, c.e7)([P.Z], () => P.Z.hasFetchedSubscriptions()),
        l = (0, T.V)(X.nS),
        [o, u] = r.useState(!0),
        m = (0, S.Z)({ forceFetch: !0 }),
        f = (0, c.e7)([A.Z], () => A.Z.enabled),
        x = r.useRef(null);
    (0, G.B)(e);
    let j = (0, V.b)(e);
    r.useEffect(() => {
        g.Z.wait(async () => {
            f || t || (await Promise.all([h.jg(), h.tZ(), (0, b.Y2)(null, null, J.JjL.DISCOVERY)])), u(!1);
        });
    }, [f, t]);
    let [E, y] = r.useState(!1);
    if (f) return (0, i.jsx)(_.Z, {});
    if (t) return (0, i.jsx)(I.c8, {});
    let R = a && null !== s && l,
        Z = m.fetched && m.isFractionalPremiumActive;
    if (!R && !Z && !o)
        return (0, i.jsx)(N.Z, {
            title: Q.intl.string(Q.t.dyq9TU),
            note: null,
        });
    if ((!R && !Z) || o) return (0, i.jsx)(p.$jN, {});
    let w = !!(null == s ? void 0 : s.hasActiveTrial);
    return (0, i.jsx)(O.Gt, {
        value: n,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: $.__invalid_container,
                    children: [
                        (0, i.jsx)(el, {}),
                        j && (0, i.jsx)(q.Z, { isInSettings: !0 }),
                        (0, i.jsx)(ec, {}),
                        (0, i.jsx)(K.Z, {
                            className: $.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Q.intl.string(Q.t.dnVvQU),
                            hidePill: !w,
                            selectedPlanColumnClassName: $.tier2PlanComparisonTableBackground,
                            selectedPlanTier: X.p9.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(d.$, {
                    innerRef: x,
                    onChange: (e) => {
                        e &&
                            !E &&
                            (D.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            y(!0));
                    },
                    children: (0, i.jsx)("div", {
                        ref: x,
                        className: $.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
