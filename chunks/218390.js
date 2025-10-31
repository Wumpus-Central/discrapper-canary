n.d(t, {
    C: () => e_,
    Z: () => eh,
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
    g = n(821849),
    E = n(497321),
    b = n(410030),
    y = n(607070),
    O = n(100527),
    v = n(906732),
    I = n(211242),
    T = n(975298),
    S = n(15640),
    A = n(89057),
    C = n(406128),
    N = n(703656),
    R = n(313789),
    P = n(342386),
    w = n(518596),
    D = n(246946),
    x = n(78839),
    L = n(483444),
    M = n(626135),
    j = n(63063),
    k = n(74538),
    U = n(140465),
    G = n(695349),
    B = n(46062),
    Z = n(347896),
    F = n(717401),
    V = n(533525),
    H = n(232076),
    Y = n(736519),
    W = n(117791),
    K = n(740594),
    z = n(382791),
    q = n(823188),
    X = n(504865),
    Q = n(179984),
    J = n(386733),
    $ = n(474936),
    ee = n(981631),
    et = n(388032),
    en = n(458622),
    er = n(881188),
    ei = n(434691);
let ea = "to_subscriptions_button",
    eo = "subscriptions settings",
    es = "to_premium_home_button",
    el = "premium home page",
    ec = "gifting_button",
    eu = "payment modal";
function ed(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: a } = e,
        o = t.hasActiveTrial,
        s = t.planIdFromItems === $.Xh.PREMIUM_YEAR_TIER_2,
        c = n || o,
        u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0,
        d = $.GP[t.planIdFromItems],
        _ = k.ZP.formatPriceString(k.ZP.getDefaultPrice(d.id), d.interval),
        { enabled: h } = B.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        m = () => {
            var e, t, n;
            return h
                ? ""
                : o
                  ? et.intl.format(et.t["2CGBri"], {
                        remainingTime: u,
                        price: _,
                    })
                  : s
                    ? et.intl.format(et.t["+qqh6g"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : $.Bo,
                          regularPrice: _,
                      })
                    : et.intl.formatToPlainString(et.t["3ZiutU"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : $.M_,
                          regularPrice: _,
                          numMonths: null != (n = null == i ? void 0 : i.duration) ? n : $.rt,
                      });
        };
    return c
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (o || !s) &&
                      (0, r.jsx)(z.Cy, {
                          text: o ? et.intl.string(et.t.qYKftX) : et.intl.string(et.t.EyjDRE),
                          className: en.topRimPillWithSparkles,
                          colorOptions: (0, f.wj)(a)
                              ? z.VE.PREMIUM_TIER_2_WHITE_FILL
                              : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (o || !s) && (0, r.jsx)("div", { className: en.rimGlowTier2 }),
                  (0, r.jsx)(p.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: en.trialHeader,
                      children: m(),
                  }),
              ],
          })
        : h
          ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
          : (0, r.jsx)(X.Z, {
                variant: void 0,
                subscriptionTier: $.Si.TIER_2,
                interval: d.interval,
            });
}
function ef() {
    let e = (0, U.t7)(),
        t = (0, U.lr)(),
        n = (0, b.ZP)(),
        i = (0, c.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        a = (0, T.Z)(),
        s = (0, G.W)(),
        l = null !== i && null !== i.planIdFromItems;
    if (!l && !a.isFractionalPremiumActive) return null;
    let u = a.isFractionalPremiumActive,
        _ = null !== i && i.hasActiveTrial,
        h = e || _,
        m = () =>
            u && !s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(z.mn, {
                              text: et.intl.string(et.t.uXF4c4),
                              className: en.fractionalPremiumTopRimPill,
                              colorOptions: z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                          }),
                          (0, r.jsx)(p.Heading, {
                              variant: "heading-md/normal",
                              color: "always-white",
                              className: en.fractionalPremiumSubheader,
                              children: et.intl.format(et.t.sK7fGl, {
                                  helpCenterLink: j.Z.getArticleURL(ee.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  })
                : l
                  ? (0, r.jsx)(ed, {
                        premiumSubscription: i,
                        isDiscountApplied: e,
                        activeDiscountInfo: t,
                        theme: n,
                    })
                  : s
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(z.Cy, {
                                  text: et.intl.string(et.t.qYKftX),
                                  className: en.topRimPillWithSparkles,
                                  colorOptions: (0, f.wj)(n)
                                      ? z.VE.PREMIUM_TIER_2_WHITE_FILL
                                      : z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                              }),
                              (0, r.jsx)(p.Heading, {
                                  variant: "heading-md/normal",
                                  color: "always-white",
                                  className: en.trialHeader,
                                  children: et.intl.format(et.t["/SfHwl"], { weeks: 1 }),
                              }),
                          ],
                      })
                    : null,
        g = () =>
            u && !l
                ? (0, r.jsxs)(d.hE2, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(K.Z, {
                              defaultTextOverride: s ? et.intl.string(et.t.YScQSF) : et.intl.string(et.t["0b3YRn"]),
                          }),
                          (0, r.jsx)(d.zxk, {
                              onClick: () => {
                                  M.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: el,
                                  }),
                                      (0, P.default)(),
                                      (0, N.uL)(ee.Z5c.APPLICATION_STORE);
                              },
                              variant: "overlay-secondary",
                              fullWidth: !0,
                              size: "md",
                              text: s ? et.intl.string(et.t.VR2iVB) : et.intl.string(et.t.T1aUAX),
                          }),
                      ],
                  })
                : (0, r.jsxs)(d.hE2, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(d.zxk, {
                              variant: "overlay-primary",
                              fullWidth: !0,
                              onClick: () => {
                                  M.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: el,
                                  }),
                                      (0, P.default)(),
                                      (0, N.uL)(ee.Z5c.APPLICATION_STORE);
                              },
                              text: et.intl.string(et.t.VR2iVB),
                              size: "md",
                          }),
                          (0, r.jsx)(d.zxk, {
                              variant: "overlay-secondary",
                              onClick: () => {
                                  M.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ea,
                                      target: eo,
                                  }),
                                      (0, w.openUserSettings)(R.n.SUBSCRIPTIONS_PANEL, {
                                          section: ee.oAB.SUBSCRIPTIONS,
                                      });
                              },
                              text: et.intl.string(et.t["9uDy6C"]),
                              fullWidth: !0,
                              size: "md",
                          }),
                      ],
                  });
    return (0, r.jsxs)("div", {
        className: o()(en.tierCard, { [en.withTier2Rim]: h }),
        children: [
            (0, r.jsxs)("div", {
                className: en.tierInfo,
                children: [
                    (0, r.jsx)(L.Z, { className: en.tierTitle }),
                    m(),
                    (0, r.jsx)(q.nT, { featureSet: u ? q.uZ.FRACTIONAL_PREMIUM : q.uZ.DEFAULT }),
                    g(),
                ],
            }),
            (0, r.jsx)("div", {
                className: en.tierImage,
                children: (0, r.jsx)("img", {
                    className: en.tierImage,
                    alt: "",
                    src: er,
                }),
            }),
        ],
    });
}
function e_(e) {
    var t, n, i;
    let { className: a, config: s } = e,
        l = (0, c.e7)([y.Z], () => y.Z.useReducedMotion),
        u = s.getImageUrl(l),
        d = (0, F.Yr)(null == (t = s.getBackgroundImageUrl) ? void 0 : t.call(s)),
        f = (0, F.Tl)(null != (n = s.gradientConfig) ? n : void 0),
        _ = { color: null != (i = s.textColor) ? i : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: o()(en.giftCardPromotion, a),
        style: null != d ? d : f,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: en.giftImagePromotion,
                "aria-hidden": !0,
                src: u,
            }),
            (0, r.jsxs)("div", {
                className: en.giftInfoPromotion,
                children: [
                    (0, r.jsx)(p.Heading, {
                        className: en.giftInfoTitlePromotion,
                        style: _,
                        variant: "text-lg/bold",
                        children: s.title(),
                    }),
                    (0, r.jsx)(p.Text, {
                        className: en.giftText,
                        style: _,
                        variant: "text-sm/medium",
                        children: s.body(),
                    }),
                    null != s.additionalTerm &&
                        (0, r.jsx)(p.Text, {
                            className: en.giftAdditionalTerm,
                            style: _,
                            variant: "text-xxs/normal",
                            children: s.additionalTerm(),
                        }),
                    (0, r.jsx)(W.Z, {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        onClick: () => {
                            M.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ec,
                                target: eu,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
function ep() {
    return (0, r.jsxs)("div", {
        className: en.giftCard,
        children: [
            (0, r.jsx)("img", {
                className: en.giftImage,
                alt: "",
                src: ei,
            }),
            (0, r.jsxs)("div", {
                className: en.giftInfo,
                children: [
                    (0, r.jsx)(p.Heading, {
                        className: en.giftTitle,
                        variant: "heading-xl/extrabold",
                        children: et.intl.string(et.t["3KomGa"]),
                    }),
                    (0, r.jsx)(p.Text, {
                        className: en.giftText,
                        variant: "text-sm/normal",
                        children: et.intl.string(et.t.yQ06u1),
                    }),
                    (0, r.jsx)(Y.Z, {
                        className: o()(en.giftCardButton, en.giftCardButtonColor),
                        textOptions: {
                            textOverride: et.intl.string(et.t.Ve9Ge6),
                            textClassName: en.giftButtonCTA,
                        },
                        color: _.zx.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ec,
                                target: eu,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eh = function () {
    var e;
    let t = (0, I.Q)(),
        { analyticsLocations: n } = (0, v.ZP)(O.Z.PREMIUM_SETTINGS),
        a = (0, c.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        o = (0, c.e7)([x.Z], () => x.Z.hasFetchedSubscriptions()),
        s = (0, S.V)($.nS),
        [l, d] = i.useState(!0),
        f = (0, T.Z)({ forceFetch: !0 }),
        _ = null == (e = (0, Z.Z)()) ? void 0 : e.billingSettingsMarketingBanner,
        b = (0, c.e7)([D.Z], () => D.Z.enabled),
        y = i.useRef(null);
    (0, H.B)();
    let N = (0, V.b)();
    i.useEffect(() => {
        h.Z.wait(async () => {
            b || t || (await Promise.all([m.jg(), m.tZ(), (0, g.Y2)(null, null, ee.JjL.DISCOVERY)])), d(!1);
        });
    }, [b, t]);
    let [R, P] = i.useState(!1);
    if (b) return (0, r.jsx)(E.Z, {});
    if (t) return (0, r.jsx)(A.c8, {});
    let w = o && null !== a && s,
        L = f.fetched && f.isFractionalPremiumActive;
    if (!w && !L && !l)
        return (0, r.jsx)(C.Z, {
            title: et.intl.string(et.t.dyq9TR),
            note: null,
        });
    if ((!w && !L) || l) return (0, r.jsx)(p.$jN, {});
    let j = !!(null == a ? void 0 : a.hasActiveTrial);
    return (0, r.jsx)(v.Gt, {
        value: n,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != _ && (0, r.jsx)(e_, { config: _ }),
                        (0, r.jsx)(ef, {}),
                        N && (0, r.jsx)(J.Z, { isInSettings: !0 }),
                        null == _ && (0, r.jsx)(ep, {}),
                        (0, r.jsx)(Q.Z, {
                            hideCTAs: !0,
                            headingOverride: et.intl.string(et.t.dnVvQS),
                            hidePill: !j,
                            selectedPlanColumnClassName: en.tier2PlanComparisonTableBackground,
                            selectedPlanTier: $.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    innerRef: y,
                    onChange: (e) => {
                        e &&
                            !R &&
                            (M.default.track(ee.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            P(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: y,
                        className: en.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
