n.d(t, {
    C: () => ep,
    Z: () => em,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(622535),
    d = n(159691),
    f = n(780384),
    p = n(755721),
    _ = n(481060),
    m = n(570140),
    h = n(355467),
    g = n(821849),
    E = n(497321),
    b = n(410030),
    y = n(607070),
    O = n(100527),
    v = n(906732),
    S = n(211242),
    I = n(975298),
    T = n(15640),
    A = n(89057),
    C = n(406128),
    N = n(703656),
    P = n(313789),
    R = n(342386),
    w = n(518596),
    D = n(246946),
    x = n(78839),
    L = n(483444),
    j = n(626135),
    M = n(63063),
    k = n(74538),
    U = n(140465),
    G = n(695349),
    Z = n(46062),
    B = n(347896),
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
        p = k.ZP.formatPriceString(k.ZP.getDefaultPrice(d.id), d.interval),
        { enabled: m } = Z.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        h = () => {
            var e, t, n;
            return m
                ? ""
                : o
                  ? et.intl.format(et.t["2CGBri"], {
                        remainingTime: u,
                        price: p,
                    })
                  : s
                    ? et.intl.format(et.t["+qqh6g"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : $.Bo,
                          regularPrice: p,
                      })
                    : et.intl.formatToPlainString(et.t["3ZiutU"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : $.M_,
                          regularPrice: p,
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
                  (0, r.jsx)(_.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: en.trialHeader,
                      children: h(),
                  }),
              ],
          })
        : m
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
        a = (0, I.Z)(),
        s = (0, G.W)(),
        l = null !== i && null !== i.planIdFromItems;
    if (!l && !a.isFractionalPremiumActive) return null;
    let u = a.isFractionalPremiumActive,
        p = null !== i && i.hasActiveTrial,
        m = e || p,
        h = () =>
            u && !s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(z.mn, {
                              text: et.intl.string(et.t.uXF4c4),
                              className: en.fractionalPremiumTopRimPill,
                              colorOptions: z.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                          }),
                          (0, r.jsx)(_.Heading, {
                              variant: "heading-md/normal",
                              color: "always-white",
                              className: en.fractionalPremiumSubheader,
                              children: et.intl.format(et.t.sK7fGl, {
                                  helpCenterLink: M.Z.getArticleURL(ee.BhN.FRACTIONAL_PREMIUM_ABOUT),
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
                              (0, r.jsx)(_.Heading, {
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
                                  j.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: el,
                                  }),
                                      (0, R.default)(),
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
                                  j.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: el,
                                  }),
                                      (0, R.default)(),
                                      (0, N.uL)(ee.Z5c.APPLICATION_STORE);
                              },
                              text: et.intl.string(et.t.VR2iVB),
                              size: "md",
                          }),
                          (0, r.jsx)(d.zxk, {
                              variant: "overlay-secondary",
                              onClick: () => {
                                  j.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ea,
                                      target: eo,
                                  }),
                                      (0, w.openUserSettings)(P.n.SUBSCRIPTIONS_PANEL, {
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
        className: o()(en.tierCard, { [en.withTier2Rim]: m }),
        children: [
            (0, r.jsxs)("div", {
                className: en.tierInfo,
                children: [
                    (0, r.jsx)(L.Z, { className: en.tierTitle }),
                    h(),
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
function ep(e) {
    var t, n;
    let { className: i, config: a } = e,
        s = (0, c.e7)([y.Z], () => y.Z.useReducedMotion),
        l = a.getImageUrl(s),
        u = null == (t = a.getBackgroundImageUrl) ? void 0 : t.call(a),
        d = (0, F.Yr)(u),
        f = (0, F.Tl)(a.gradientConfig),
        p = (0, F.$q)(d, f),
        m = { color: null != (n = a.textColor) ? n : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: o()(en.giftCardPromotion, i),
        style: p,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: en.giftImagePromotion,
                "aria-hidden": !0,
                src: l,
            }),
            (0, r.jsxs)("div", {
                className: en.giftInfoPromotion,
                children: [
                    (0, r.jsx)(_.Heading, {
                        className: en.giftInfoTitlePromotion,
                        style: m,
                        variant: "heading-lg/extrabold",
                        children: a.title(),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: en.giftText,
                        style: m,
                        variant: "text-xs/medium",
                        children: a.body(),
                    }),
                    null != a.additionalTerm &&
                        (0, r.jsx)(_.Text, {
                            className: en.giftAdditionalTerm,
                            style: m,
                            variant: "text-xxs/normal",
                            children: a.additionalTerm(),
                        }),
                    (0, r.jsx)(W.Z, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            j.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
function e_() {
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
                    (0, r.jsx)(_.Heading, {
                        className: en.giftTitle,
                        variant: "heading-xl/extrabold",
                        children: et.intl.string(et.t["3KomGa"]),
                    }),
                    (0, r.jsx)(_.Text, {
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
                        color: p.zx.Colors.CUSTOM,
                        onClick: () => {
                            j.default.track(ee.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
let em = function () {
    var e;
    let t = (0, S.Q)(),
        { analyticsLocations: n } = (0, v.ZP)(O.Z.PREMIUM_SETTINGS),
        a = (0, c.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        o = (0, c.e7)([x.Z], () => x.Z.hasFetchedSubscriptions()),
        s = (0, T.V)($.nS),
        [l, d] = i.useState(!0),
        f = (0, I.Z)({ forceFetch: !0 }),
        p = null == (e = (0, B.Z)()) ? void 0 : e.billingSettingsMarketingBanner,
        b = (0, c.e7)([D.Z], () => D.Z.enabled),
        y = i.useRef(null);
    (0, H.B)();
    let N = (0, V.b)();
    i.useEffect(() => {
        m.Z.wait(async () => {
            b || t || (await Promise.all([h.jg(), h.tZ(), (0, g.Y2)(null, null, ee.JjL.DISCOVERY)])), d(!1);
        });
    }, [b, t]);
    let [P, R] = i.useState(!1);
    if (b) return (0, r.jsx)(E.Z, {});
    if (t) return (0, r.jsx)(A.c8, {});
    let w = o && null !== a && s,
        L = f.fetched && f.isFractionalPremiumActive;
    if (!w && !L && !l)
        return (0, r.jsx)(C.Z, {
            title: et.intl.string(et.t.dyq9TR),
            note: null,
        });
    if ((!w && !L) || l) return (0, r.jsx)(_.$jN, {});
    let M = !!(null == a ? void 0 : a.hasActiveTrial);
    return (0, r.jsx)(v.Gt, {
        value: n,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != p && (0, r.jsx)(ep, { config: p }),
                        (0, r.jsx)(ef, {}),
                        N && (0, r.jsx)(J.Z, { isInSettings: !0 }),
                        null == p && (0, r.jsx)(e_, {}),
                        (0, r.jsx)(Q.Z, {
                            hideCTAs: !0,
                            headingOverride: et.intl.string(et.t.dnVvQS),
                            hidePill: !M,
                            selectedPlanColumnClassName: en.tier2PlanComparisonTableBackground,
                            selectedPlanTier: $.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    innerRef: y,
                    onChange: (e) => {
                        e &&
                            !P &&
                            (j.default.track(ee.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            R(!0));
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
