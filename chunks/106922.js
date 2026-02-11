n.d(t, { A: () => ex, c: () => eg });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(989349),
    o = n.n(r),
    c = n(607399),
    d = n(877624),
    u = n(311907),
    _ = n(230109),
    m = n(732955),
    A = n(582754),
    g = n(421380),
    h = n(397927),
    x = n(73153),
    p = n(384904),
    E = n(73825),
    C = n(974544),
    T = n(736653),
    S = n(793574),
    I = n(688810),
    f = n(86379),
    N = n(531260),
    b = n(160946),
    j = n(459793),
    v = n(721668),
    O = n(976860),
    R = n(780964),
    y = n(12901),
    P = n(840065),
    L = n(351906),
    D = n(287809),
    M = n(166403),
    G = n(224016),
    U = n(954571),
    k = n(975571),
    V = n(927578),
    H = n(526292),
    w = n(637073),
    B = n(411268),
    Y = n(810498),
    F = n(807098),
    z = n(412260),
    W = n(103411),
    K = n(190187),
    Z = n(194509),
    q = n(65470),
    X = n(857586),
    J = n(795269),
    Q = n(501007),
    $ = n(156601),
    ee = n(244778),
    et = n(659533),
    en = n(788868),
    ei = n(88001),
    es = n(652215),
    ea = n(985018),
    el = n(263442),
    er = n(396785),
    eo = n(956537);
let ec = "to_premium_home_button",
    ed = "premium home page",
    eu = "gifting_button",
    e_ = "payment modal";
function em(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: s, theme: a } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === en.gD.PREMIUM_YEAR_TIER_2,
        c = n || l,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        u = en.hd[t.planIdFromItems],
        _ = V.Ay.formatPriceString(V.Ay.getDefaultPrice(u.id), u.interval),
        { enabled: m } = B.K.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" });
    return c
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !r) &&
                      (0, i.jsx)(J.ir, {
                          text: l ? ea.intl.string(ea.t.qYKftX) : ea.intl.string(ea.t.EyjDRE),
                          className: el.uS,
                          colorOptions: (0, A.Mw)(a)
                              ? J.at.PREMIUM_TIER_2_WHITE_FILL
                              : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (l || !r) && (0, i.jsx)("div", { className: el.on }),
                  (0, i.jsx)(h.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: el.KB,
                      children: m
                          ? ""
                          : l
                            ? ea.intl.format(ea.t["2CGBri"], { remainingTime: d, price: _ })
                            : r
                              ? ea.intl.format(ea.t["+qqh6g"], { percent: s?.percentage ?? en.Cq, regularPrice: _ })
                              : ea.intl.formatToPlainString(ea.t["3ZiutU"], {
                                    percent: s?.percentage ?? en._$,
                                    regularPrice: _,
                                    numMonths: s?.duration ?? en.OJ,
                                }),
                  }),
              ],
          })
        : m
          ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
          : (0, i.jsx)($.A, { variant: void 0, subscriptionTier: en.pe.TIER_2, interval: u.interval });
}
function eA() {
    let e = (0, H.k5)(),
        t = (0, H.nf)(),
        n = (0, T.Ay)(),
        s = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        a = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        r = a?.isPremiumWithPremiumGroup(),
        o = (0, N.A)(),
        c = (0, w.d)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !o.isFractionalPremiumActive && !r) return null;
    let _ = o.isFractionalPremiumActive,
        g = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: l()(el.$Y, { [el.J5]: e || g }),
        children: [
            (0, i.jsxs)("div", {
                className: el.jp,
                children: [
                    r
                        ? (0, i.jsx)(h.Heading, {
                              variant: "display-md",
                              color: "always-white",
                              className: el._K,
                              children: (0, ei.DP)(),
                          })
                        : (0, i.jsx)(G.A, { className: el.TJ }),
                    r
                        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
                        : _ && !c
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(J.R, {
                                        text: ea.intl.string(ea.t.uXF4c4),
                                        className: el.rd,
                                        colorOptions: J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, i.jsx)(h.Heading, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: el.sQ,
                                        children: ea.intl.format(ea.t.sK7fGl, {
                                            helpCenterLink: k.A.getArticleURL(es.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : d
                            ? (0, i.jsx)(em, {
                                  premiumSubscription: s,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : c
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(J.ir, {
                                            text: ea.intl.string(ea.t.qYKftX),
                                            className: el.uS,
                                            colorOptions: (0, A.Mw)(n)
                                                ? J.at.PREMIUM_TIER_2_WHITE_FILL
                                                : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, i.jsx)(h.Heading, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: el.KB,
                                            children: ea.intl.format(ea.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, i.jsx)(Q.ZP, {
                        featureSet: a?.isPremiumGroupPrimary()
                            ? Q.Nz.PREMIUM_GROUP_PRIMARY
                            : a?.isPremiumGroupMember()
                              ? Q.Nz.PREMIUM_GROUP_MEMBER
                              : _
                                ? Q.Nz.FRACTIONAL_PREMIUM
                                : Q.Nz.DEFAULT,
                    }),
                    _ && !d
                        ? (0, i.jsxs)(m.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, i.jsx)(X.A, {
                                      defaultTextOverride: c
                                          ? ea.intl.string(ea.t.YScQSF)
                                          : ea.intl.string(ea.t["0b3YRn"]),
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      onClick: () => {
                                          U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, y.default)(),
                                              (0, O.pX)(es.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: c ? ea.intl.string(ea.t.VR2iVB) : ea.intl.string(ea.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(m.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, i.jsx)(m.$nd, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, y.default)(),
                                              (0, O.pX)(es.BVt.APPLICATION_STORE);
                                      },
                                      text: ea.intl.string(ea.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, P.openUserSettings)(R.X.SUBSCRIPTIONS_PANEL, {
                                                  section: es.nc_.SUBSCRIPTIONS,
                                              });
                                      },
                                      text: ea.intl.string(ea.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: el.ah,
                children: (0, i.jsx)("img", { className: el.ah, alt: "", src: er }),
            }),
        ],
    });
}
function eg(e) {
    let { className: t, config: n } = e,
        a = (0, F.T)(n.asset),
        r = (0, F.T)(n.backgroundAsset),
        o = (0, Y.gc)(r),
        c = s.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, Y.K5)({ gradient: e.colors, angle: e.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        d = (0, Y.x)(o, c),
        u = { color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: l()(el.WR, t),
        style: d,
        children: [
            null != a && (0, i.jsx)("img", { alt: "", className: el.TB, "aria-hidden": !0, src: a }),
            (0, i.jsxs)("div", {
                className: el.QT,
                children: [
                    (0, i.jsx)(h.Heading, {
                        className: el.u_,
                        style: u,
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, i.jsx)(h.Text, { className: el.Oi, style: u, variant: "text-xs/medium", children: n.body }),
                    null != n.additionalTerms &&
                        (0, i.jsx)(h.Text, {
                            className: el.KW,
                            style: u,
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, i.jsx)(q.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: eu, target: e_ });
                        },
                    }),
                ],
            }),
        ],
    });
}
function eh() {
    return (0, i.jsxs)("div", {
        className: el.T1,
        children: [
            (0, i.jsx)("img", { className: el.GY, alt: "", src: eo }),
            (0, i.jsxs)("div", {
                className: el.b4,
                children: [
                    (0, i.jsx)(h.Heading, {
                        className: el.Vz,
                        variant: "heading-xl/extrabold",
                        children: ea.intl.string(ea.t["3KomGa"]),
                    }),
                    (0, i.jsx)(h.Text, {
                        className: el.Oi,
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.yQ06u1),
                    }),
                    (0, i.jsx)(Z.A, {
                        className: l()(el.Tp, el._c),
                        textOptions: { textOverride: ea.intl.string(ea.t.Ve9Ge6), textClassName: el.VV },
                        color: g.$n.Colors.CUSTOM,
                        onClick: () => {
                            U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: eu, target: e_ });
                        },
                    }),
                ],
            }),
        ],
    });
}
let ex = function () {
    let e = (0, f.H)(),
        { analyticsLocations: t } = (0, I.Ay)(S.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        l = (0, u.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        r = (0, b.Y)(en.T7),
        [o, m] = s.useState(!0),
        A = (0, N.A)({ forceFetch: !0 }),
        g = (0, u.bG)([z.A], () => {
            let e = z.A.getMarketingComponentByType(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        T = !(c.Fr || c.v1) && null != g,
        O = (0, u.bG)([L.A], () => L.A.enabled),
        R = s.useRef(null);
    (0, K.i)();
    let y = (0, W.m)();
    s.useEffect(() => {
        x.h.wait(async () => {
            O || e || (await Promise.all([p.hP(), p.$o(), (0, E.zS)(null, null, es.tF5.DISCOVERY)])), m(!1);
        });
    }, [O, e]);
    let [P, G] = s.useState(!1);
    if (O) return (0, i.jsx)(C.A, {});
    if (e) return (0, i.jsx)(j.uK, {});
    let k = l && null !== a && r,
        V = A.fetched && A.isFractionalPremiumActive,
        H = n?.isPremiumWithPremiumGroup();
    if (!k && !V && !o && !H) return (0, i.jsx)(v.A, { title: ea.intl.string(ea.t.dyq9TR), note: null });
    if ((!k && !V && !H) || o) return (0, i.jsx)(h.y$y, {});
    let w = !!a?.hasActiveTrial;
    return (0, i.jsx)(I.f5, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        T && (0, i.jsx)(eg, { config: g }),
                        (0, i.jsx)(eA, {}),
                        y && (0, i.jsx)(et.A, { isInSettings: !0 }),
                        !T && (0, i.jsx)(eh, {}),
                        (0, i.jsx)(ee.A, {
                            hideCTAs: !0,
                            headingOverride: ea.intl.string(ea.t.dnVvQS),
                            hidePill: !w,
                            selectedPlanColumnClassName: el.JG,
                            selectedPlanTier: en.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(_.L, {
                    innerRef: R,
                    onChange: (e) => {
                        e &&
                            !P &&
                            (U.default.track(es.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }),
                            G(!0));
                    },
                    children: (0, i.jsx)("div", { ref: R, className: el._Z }),
                }),
            ],
        }),
    });
};
