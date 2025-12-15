n.d(t, {
    C: () => em,
    Z: () => eg,
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
    C = n(89057),
    A = n(406128),
    N = n(703656),
    P = n(313789),
    R = n(342386),
    w = n(518596),
    D = n(246946),
    x = n(594174),
    L = n(78839),
    j = n(483444),
    M = n(626135),
    k = n(63063),
    U = n(74538),
    G = n(140465),
    Z = n(695349),
    F = n(46062),
    B = n(347896),
    V = n(717401),
    H = n(533525),
    Y = n(232076),
    W = n(736519),
    K = n(117791),
    z = n(740594),
    q = n(382791),
    Q = n(823188),
    X = n(504865),
    J = n(179984),
    $ = n(386733),
    ee = n(474936),
    et = n(282793),
    en = n(981631),
    er = n(388032),
    ei = n(434113),
    ea = n(881188),
    eo = n(434691);
let es = "to_subscriptions_button",
    el = "subscriptions settings",
    ec = "to_premium_home_button",
    eu = "premium home page",
    ed = "gifting_button",
    ef = "payment modal";
function ep(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: a } = e,
        o = t.hasActiveTrial,
        s = t.planIdFromItems === ee.Xh.PREMIUM_YEAR_TIER_2,
        c = n || o,
        u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0,
        d = ee.GP[t.planIdFromItems],
        p = U.ZP.formatPriceString(U.ZP.getDefaultPrice(d.id), d.interval),
        { enabled: m } = F.T.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        h = () => {
            var e, t, n;
            return m
                ? ""
                : o
                  ? er.intl.format(er.t["2CGBri"], {
                        remainingTime: u,
                        price: p,
                    })
                  : s
                    ? er.intl.format(er.t["+qqh6g"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : ee.Bo,
                          regularPrice: p,
                      })
                    : er.intl.formatToPlainString(er.t["3ZiutU"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : ee.M_,
                          regularPrice: p,
                          numMonths: null != (n = null == i ? void 0 : i.duration) ? n : ee.rt,
                      });
        };
    return c
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (o || !s) &&
                      (0, r.jsx)(q.Cy, {
                          text: o ? er.intl.string(er.t.qYKftX) : er.intl.string(er.t.EyjDRE),
                          className: ei.topRimPillWithSparkles,
                          colorOptions: (0, f.wj)(a)
                              ? q.VE.PREMIUM_TIER_2_WHITE_FILL
                              : q.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (o || !s) && (0, r.jsx)("div", { className: ei.rimGlowTier2 }),
                  (0, r.jsx)(_.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: ei.trialHeader,
                      children: h(),
                  }),
              ],
          })
        : m
          ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
          : (0, r.jsx)(X.Z, {
                variant: void 0,
                subscriptionTier: ee.Si.TIER_2,
                interval: d.interval,
            });
}
function e_() {
    let e = (0, G.t7)(),
        t = (0, G.lr)(),
        n = (0, b.ZP)(),
        i = (0, c.e7)([L.Z], () => L.Z.getPremiumTypeSubscription()),
        a = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        s = null == a ? void 0 : a.isPremiumWithPremiumGroup(),
        l = (0, I.Z)(),
        u = (0, Z.W)(),
        p = null !== i && null !== i.planIdFromItems;
    if (!p && !l.isFractionalPremiumActive && !s) return null;
    let m = l.isFractionalPremiumActive,
        h = null !== i && i.hasActiveTrial,
        g = e || h,
        E = () =>
            (null == a ? void 0 : a.isPremiumGroupPrimary())
                ? Q.uZ.PREMIUM_GROUP_PRIMARY
                : (null == a ? void 0 : a.isPremiumGroupMember())
                  ? Q.uZ.PREMIUM_GROUP_MEMBER
                  : m
                    ? Q.uZ.FRACTIONAL_PREMIUM
                    : Q.uZ.DEFAULT,
        y = () =>
            s
                ? (0, r.jsx)(_.Heading, {
                      variant: "display-md",
                      color: "always-white",
                      className: ei.premiumGroupHeader,
                      children: (0, et.sO)(),
                  })
                : (0, r.jsx)(j.Z, { className: ei.tierTitle }),
        O = () =>
            s
                ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
                : m && !u
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(q.mn, {
                                text: er.intl.string(er.t.uXF4c4),
                                className: ei.fractionalPremiumTopRimPill,
                                colorOptions: q.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                            }),
                            (0, r.jsx)(_.Heading, {
                                variant: "heading-md/normal",
                                color: "always-white",
                                className: ei.fractionalPremiumSubheader,
                                children: er.intl.format(er.t.sK7fGl, {
                                    helpCenterLink: k.Z.getArticleURL(en.BhN.FRACTIONAL_PREMIUM_ABOUT),
                                }),
                            }),
                        ],
                    })
                  : p
                    ? (0, r.jsx)(ep, {
                          premiumSubscription: i,
                          isDiscountApplied: e,
                          activeDiscountInfo: t,
                          theme: n,
                      })
                    : u
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(q.Cy, {
                                    text: er.intl.string(er.t.qYKftX),
                                    className: ei.topRimPillWithSparkles,
                                    colorOptions: (0, f.wj)(n)
                                        ? q.VE.PREMIUM_TIER_2_WHITE_FILL
                                        : q.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                }),
                                (0, r.jsx)(_.Heading, {
                                    variant: "heading-md/normal",
                                    color: "always-white",
                                    className: ei.trialHeader,
                                    children: er.intl.format(er.t["/SfHwl"], { weeks: 1 }),
                                }),
                            ],
                        })
                      : null,
        v = () =>
            m && !p
                ? (0, r.jsxs)(d.hE2, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(z.Z, {
                              defaultTextOverride: u ? er.intl.string(er.t.YScQSF) : er.intl.string(er.t["0b3YRn"]),
                          }),
                          (0, r.jsx)(d.zxk, {
                              onClick: () => {
                                  M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ec,
                                      target: eu,
                                  }),
                                      (0, R.default)(),
                                      (0, N.uL)(en.Z5c.APPLICATION_STORE);
                              },
                              variant: "overlay-secondary",
                              fullWidth: !0,
                              size: "md",
                              text: u ? er.intl.string(er.t.VR2iVB) : er.intl.string(er.t.T1aUAX),
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
                                  M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ec,
                                      target: eu,
                                  }),
                                      (0, R.default)(),
                                      (0, N.uL)(en.Z5c.APPLICATION_STORE);
                              },
                              text: er.intl.string(er.t.VR2iVB),
                              size: "md",
                          }),
                          (0, r.jsx)(d.zxk, {
                              variant: "overlay-secondary",
                              onClick: () => {
                                  M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: es,
                                      target: el,
                                  }),
                                      (0, w.openUserSettings)(P.n.SUBSCRIPTIONS_PANEL, {
                                          section: en.oAB.SUBSCRIPTIONS,
                                      });
                              },
                              text: er.intl.string(er.t["9uDy6C"]),
                              fullWidth: !0,
                              size: "md",
                          }),
                      ],
                  });
    return (0, r.jsxs)("div", {
        className: o()(ei.tierCard, { [ei.withTier2Rim]: g }),
        children: [
            (0, r.jsxs)("div", {
                className: ei.tierInfo,
                children: [y(), O(), (0, r.jsx)(Q.nT, { featureSet: E() }), v()],
            }),
            (0, r.jsx)("div", {
                className: ei.tierImage,
                children: (0, r.jsx)("img", {
                    className: ei.tierImage,
                    alt: "",
                    src: ea,
                }),
            }),
        ],
    });
}
function em(e) {
    var t, n;
    let { className: i, config: a } = e,
        s = (0, c.e7)([y.Z], () => y.Z.useReducedMotion),
        l = a.getImageUrl(s),
        u = null == (t = a.getBackgroundImageUrl) ? void 0 : t.call(a),
        d = (0, V.Yr)(u),
        f = (0, V.Tl)(a.gradientConfig),
        p = (0, V.$q)(d, f),
        m = { color: null != (n = a.textColor) ? n : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: o()(ei.giftCardPromotion, i),
        style: p,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: ei.giftImagePromotion,
                "aria-hidden": !0,
                src: l,
            }),
            (0, r.jsxs)("div", {
                className: ei.giftInfoPromotion,
                children: [
                    (0, r.jsx)(_.Heading, {
                        className: ei.giftInfoTitlePromotion,
                        style: m,
                        variant: "heading-lg/extrabold",
                        children: a.title(),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: ei.giftText,
                        style: m,
                        variant: "text-xs/medium",
                        children: a.body(),
                    }),
                    null != a.additionalTerm &&
                        (0, r.jsx)(_.Text, {
                            className: ei.giftAdditionalTerm,
                            style: m,
                            variant: "text-xxs/normal",
                            children: a.additionalTerm(),
                        }),
                    (0, r.jsx)(K.Z, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ed,
                                target: ef,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
function eh() {
    return (0, r.jsxs)("div", {
        className: ei.giftCard,
        children: [
            (0, r.jsx)("img", {
                className: ei.giftImage,
                alt: "",
                src: eo,
            }),
            (0, r.jsxs)("div", {
                className: ei.giftInfo,
                children: [
                    (0, r.jsx)(_.Heading, {
                        className: ei.giftTitle,
                        variant: "heading-xl/extrabold",
                        children: er.intl.string(er.t["3KomGa"]),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: ei.giftText,
                        variant: "text-sm/normal",
                        children: er.intl.string(er.t.yQ06u1),
                    }),
                    (0, r.jsx)(W.Z, {
                        className: o()(ei.giftCardButton, ei.giftCardButtonColor),
                        textOptions: {
                            textOverride: er.intl.string(er.t.Ve9Ge6),
                            textClassName: ei.giftButtonCTA,
                        },
                        color: p.zx.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(en.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ed,
                                target: ef,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eg = function () {
    var e;
    let t = (0, S.Q)(),
        { analyticsLocations: n } = (0, v.ZP)(O.Z.PREMIUM_SETTINGS),
        a = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        o = (0, c.e7)([L.Z], () => L.Z.getPremiumTypeSubscription()),
        s = (0, c.e7)([L.Z], () => L.Z.hasFetchedSubscriptions()),
        l = (0, T.V)(ee.nS),
        [d, f] = i.useState(!0),
        p = (0, I.Z)({ forceFetch: !0 }),
        b = null == (e = (0, B.Z)()) ? void 0 : e.billingSettingsMarketingBanner,
        y = (0, c.e7)([D.Z], () => D.Z.enabled),
        N = i.useRef(null);
    (0, Y.B)();
    let P = (0, H.b)();
    i.useEffect(() => {
        m.Z.wait(async () => {
            y || t || (await Promise.all([h.jg(), h.tZ(), (0, g.Y2)(null, null, en.JjL.DISCOVERY)])), f(!1);
        });
    }, [y, t]);
    let [R, w] = i.useState(!1);
    if (y) return (0, r.jsx)(E.Z, {});
    if (t) return (0, r.jsx)(C.c8, {});
    let j = s && null !== o && l,
        k = p.fetched && p.isFractionalPremiumActive,
        U = null == a ? void 0 : a.isPremiumWithPremiumGroup();
    if (!j && !k && !d && !U)
        return (0, r.jsx)(A.Z, {
            title: er.intl.string(er.t.dyq9TR),
            note: null,
        });
    if ((!j && !k && !U) || d) return (0, r.jsx)(_.$jN, {});
    let G = !!(null == o ? void 0 : o.hasActiveTrial);
    return (0, r.jsx)(v.Gt, {
        value: n,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != b && (0, r.jsx)(em, { config: b }),
                        (0, r.jsx)(e_, {}),
                        P && (0, r.jsx)($.Z, { isInSettings: !0 }),
                        null == b && (0, r.jsx)(eh, {}),
                        (0, r.jsx)(J.Z, {
                            hideCTAs: !0,
                            headingOverride: er.intl.string(er.t.dnVvQS),
                            hidePill: !G,
                            selectedPlanColumnClassName: ei.tier2PlanComparisonTableBackground,
                            selectedPlanTier: ee.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    innerRef: N,
                    onChange: (e) => {
                        e &&
                            !R &&
                            (M.default.track(en.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            w(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: N,
                        className: ei.bottomOfPageVisibilitySensor,
                    }),
                }),
            ],
        }),
    });
};
