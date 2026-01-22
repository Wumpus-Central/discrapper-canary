n.d(t, {
    A: () => eg,
    c: () => eh,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(311907),
    u = n(230109),
    d = n(732955),
    f = n(582754),
    p = n(421380),
    _ = n(397927),
    h = n(73153),
    m = n(384904),
    g = n(73825),
    E = n(974544),
    b = n(736653),
    y = n(775602),
    O = n(793574),
    A = n(688810),
    v = n(86379),
    S = n(531260),
    I = n(160946),
    T = n(459793),
    C = n(721668),
    N = n(976860),
    R = n(780964),
    w = n(12901),
    P = n(840065),
    D = n(351906),
    x = n(287809),
    L = n(166403),
    j = n(224016),
    M = n(954571),
    k = n(975571),
    U = n(927578),
    G = n(526292),
    V = n(637073),
    F = n(411268),
    B = n(552736),
    H = n(810498),
    Y = n(103411),
    W = n(190187),
    K = n(194509),
    z = n(65470),
    q = n(857586),
    X = n(795269),
    Z = n(501007),
    Q = n(156601),
    $ = n(244778),
    J = n(659533),
    ee = n(788868),
    et = n(88001),
    en = n(652215),
    er = n(985018),
    ei = n(95252),
    ea = n(396785),
    es = n(956537);
let eo = "to_subscriptions_button",
    el = "subscriptions settings",
    ec = "to_premium_home_button",
    eu = "premium home page",
    ed = "gifting_button",
    ef = "payment modal";
function ep(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: a } = e,
        s = t.hasActiveTrial,
        o = t.planIdFromItems === ee.gD.PREMIUM_YEAR_TIER_2,
        c = n || s,
        u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0,
        d = ee.hd[t.planIdFromItems],
        p = U.Ay.formatPriceString(U.Ay.getDefaultPrice(d.id), d.interval),
        { enabled: h } = F.K.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" }),
        m = () => {
            var e, t, n;
            return h
                ? ""
                : s
                  ? er.intl.format(er.t["2CGBri"], {
                        remainingTime: u,
                        price: p,
                    })
                  : o
                    ? er.intl.format(er.t["+qqh6g"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : ee.Cq,
                          regularPrice: p,
                      })
                    : er.intl.formatToPlainString(er.t["3ZiutU"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : ee._$,
                          regularPrice: p,
                          numMonths: null != (n = null == i ? void 0 : i.duration) ? n : ee.OJ,
                      });
        };
    return c
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (s || !o) &&
                      (0, r.jsx)(X.ir, {
                          text: s ? er.intl.string(er.t.qYKftX) : er.intl.string(er.t.EyjDRE),
                          className: ei.uS,
                          colorOptions: (0, f.Mw)(a)
                              ? X.at.PREMIUM_TIER_2_WHITE_FILL
                              : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (s || !o) && (0, r.jsx)("div", { className: ei.on }),
                  (0, r.jsx)(_.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: ei.KB,
                      children: m(),
                  }),
              ],
          })
        : h
          ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
          : (0, r.jsx)(Q.A, {
                variant: void 0,
                subscriptionTier: ee.pe.TIER_2,
                interval: d.interval,
            });
}
function e_() {
    let e = (0, G.k5)(),
        t = (0, G.nf)(),
        n = (0, b.Ay)(),
        i = (0, c.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        a = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        o = null == a ? void 0 : a.isPremiumWithPremiumGroup(),
        l = (0, S.A)(),
        u = (0, V.d)(),
        p = null !== i && null !== i.planIdFromItems;
    if (!p && !l.isFractionalPremiumActive && !o) return null;
    let h = l.isFractionalPremiumActive,
        m = null !== i && i.hasActiveTrial,
        g = e || m,
        E = () =>
            (null == a ? void 0 : a.isPremiumGroupPrimary())
                ? Z.Nz.PREMIUM_GROUP_PRIMARY
                : (null == a ? void 0 : a.isPremiumGroupMember())
                  ? Z.Nz.PREMIUM_GROUP_MEMBER
                  : h
                    ? Z.Nz.FRACTIONAL_PREMIUM
                    : Z.Nz.DEFAULT,
        y = () =>
            o
                ? (0, r.jsx)(_.Heading, {
                      variant: "display-md",
                      color: "always-white",
                      className: ei._K,
                      children: (0, et.DP)(),
                  })
                : (0, r.jsx)(j.A, { className: ei.TJ }),
        O = () =>
            o
                ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
                : h && !u
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(X.R, {
                                text: er.intl.string(er.t.uXF4c4),
                                className: ei.rd,
                                colorOptions: X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                            }),
                            (0, r.jsx)(_.Heading, {
                                variant: "heading-md/normal",
                                color: "always-white",
                                className: ei.sQ,
                                children: er.intl.format(er.t.sK7fGl, {
                                    helpCenterLink: k.A.getArticleURL(en.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
                                (0, r.jsx)(X.ir, {
                                    text: er.intl.string(er.t.qYKftX),
                                    className: ei.uS,
                                    colorOptions: (0, f.Mw)(n)
                                        ? X.at.PREMIUM_TIER_2_WHITE_FILL
                                        : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                }),
                                (0, r.jsx)(_.Heading, {
                                    variant: "heading-md/normal",
                                    color: "always-white",
                                    className: ei.KB,
                                    children: er.intl.format(er.t["/SfHwl"], { weeks: 1 }),
                                }),
                            ],
                        })
                      : null,
        A = () =>
            h && !p
                ? (0, r.jsxs)(d.e2v, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(q.A, {
                              defaultTextOverride: u ? er.intl.string(er.t.YScQSF) : er.intl.string(er.t["0b3YRn"]),
                          }),
                          (0, r.jsx)(d.$nd, {
                              onClick: () => {
                                  M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ec,
                                      target: eu,
                                  }),
                                      (0, w.default)(),
                                      (0, N.pX)(en.BVt.APPLICATION_STORE);
                              },
                              variant: "overlay-secondary",
                              fullWidth: !0,
                              size: "md",
                              text: u ? er.intl.string(er.t.VR2iVB) : er.intl.string(er.t.T1aUAX),
                          }),
                      ],
                  })
                : (0, r.jsxs)(d.e2v, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(d.$nd, {
                              variant: "overlay-primary",
                              fullWidth: !0,
                              onClick: () => {
                                  M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: ec,
                                      target: eu,
                                  }),
                                      (0, w.default)(),
                                      (0, N.pX)(en.BVt.APPLICATION_STORE);
                              },
                              text: er.intl.string(er.t.VR2iVB),
                              size: "md",
                          }),
                          (0, r.jsx)(d.$nd, {
                              variant: "overlay-secondary",
                              onClick: () => {
                                  M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eo,
                                      target: el,
                                  }),
                                      (0, P.openUserSettings)(R.X.SUBSCRIPTIONS_PANEL, {
                                          section: en.nc_.SUBSCRIPTIONS,
                                      });
                              },
                              text: er.intl.string(er.t["9uDy6C"]),
                              fullWidth: !0,
                              size: "md",
                          }),
                      ],
                  });
    return (0, r.jsxs)("div", {
        className: s()(ei.$Y, { [ei.J5]: g }),
        children: [
            (0, r.jsxs)("div", {
                className: ei.jp,
                children: [y(), O(), (0, r.jsx)(Z.ZP, { featureSet: E() }), A()],
            }),
            (0, r.jsx)("div", {
                className: ei.ah,
                children: (0, r.jsx)("img", {
                    className: ei.ah,
                    alt: "",
                    src: ea,
                }),
            }),
        ],
    });
}
function eh(e) {
    var t, n;
    let { className: i, config: a } = e,
        o = (0, c.bG)([y.A], () => y.A.useReducedMotion),
        l = a.getImageUrl(o),
        u = null == (n = a.getBackgroundImageUrl) ? void 0 : n.call(a),
        d = (0, H.gc)(u),
        f = (0, H.K5)(a.gradientConfig),
        p = (0, H.x)(d, f),
        h = { color: null != (t = a.textColor) ? t : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: s()(ei.WR, i),
        style: p,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: ei.TB,
                "aria-hidden": !0,
                src: l,
            }),
            (0, r.jsxs)("div", {
                className: ei.QT,
                children: [
                    (0, r.jsx)(_.Heading, {
                        className: ei.u_,
                        style: h,
                        variant: "heading-lg/extrabold",
                        children: a.title(),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: ei.Oi,
                        style: h,
                        variant: "text-xs/medium",
                        children: a.body(),
                    }),
                    null != a.additionalTerm &&
                        (0, r.jsx)(_.Text, {
                            className: ei.KW,
                            style: h,
                            variant: "text-xxs/normal",
                            children: a.additionalTerm(),
                        }),
                    (0, r.jsx)(z.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
function em() {
    return (0, r.jsxs)("div", {
        className: ei.T1,
        children: [
            (0, r.jsx)("img", {
                className: ei.GY,
                alt: "",
                src: es,
            }),
            (0, r.jsxs)("div", {
                className: ei.b4,
                children: [
                    (0, r.jsx)(_.Heading, {
                        className: ei.Vz,
                        variant: "heading-xl/extrabold",
                        children: er.intl.string(er.t["3KomGa"]),
                    }),
                    (0, r.jsx)(_.Text, {
                        className: ei.Oi,
                        variant: "text-sm/normal",
                        children: er.intl.string(er.t.yQ06u1),
                    }),
                    (0, r.jsx)(K.A, {
                        className: s()(ei.Tp, ei._c),
                        textOptions: {
                            textOverride: er.intl.string(er.t.Ve9Ge6),
                            textClassName: ei.VV,
                        },
                        color: p.$n.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(en.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
    let t = (0, v.H)(),
        { analyticsLocations: n } = (0, A.Ay)(O.A.PREMIUM_SETTINGS),
        a = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        s = (0, c.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        o = (0, c.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
        l = (0, I.Y)(ee.T7),
        [d, f] = i.useState(!0),
        p = (0, S.A)({ forceFetch: !0 }),
        b = null == (e = (0, B.A)()) ? void 0 : e.billingSettingsMarketingBanner,
        y = (0, c.bG)([D.A], () => D.A.enabled),
        N = i.useRef(null);
    (0, W.i)();
    let R = (0, Y.m)();
    i.useEffect(() => {
        h.h.wait(async () => {
            y || t || (await Promise.all([m.hP(), m.$o(), (0, g.zS)(null, null, en.tF5.DISCOVERY)])), f(!1);
        });
    }, [y, t]);
    let [w, P] = i.useState(!1);
    if (y) return (0, r.jsx)(E.A, {});
    if (t) return (0, r.jsx)(T.uK, {});
    let j = o && null !== s && l,
        k = p.fetched && p.isFractionalPremiumActive,
        U = null == a ? void 0 : a.isPremiumWithPremiumGroup();
    if (!j && !k && !d && !U)
        return (0, r.jsx)(C.A, {
            title: er.intl.string(er.t.dyq9TR),
            note: null,
        });
    if ((!j && !k && !U) || d) return (0, r.jsx)(_.y$y, {});
    let G = !!(null == s ? void 0 : s.hasActiveTrial);
    return (0, r.jsx)(A.f5, {
        value: n,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != b && (0, r.jsx)(eh, { config: b }),
                        (0, r.jsx)(e_, {}),
                        R && (0, r.jsx)(J.A, { isInSettings: !0 }),
                        null == b && (0, r.jsx)(em, {}),
                        (0, r.jsx)($.A, {
                            hideCTAs: !0,
                            headingOverride: er.intl.string(er.t.dnVvQS),
                            hidePill: !G,
                            selectedPlanColumnClassName: ei.JG,
                            selectedPlanTier: ee.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.L, {
                    innerRef: N,
                    onChange: (e) => {
                        e &&
                            !w &&
                            (M.default.track(en.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: n }),
                            P(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: N,
                        className: ei._Z,
                    }),
                }),
            ],
        }),
    });
};
