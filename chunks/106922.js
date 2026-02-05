n.d(t, { A: () => eh, c: () => eg });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(989349),
    o = n.n(l),
    c = n(607399),
    d = n(877624),
    u = n(311907),
    _ = n(230109),
    m = n(732955),
    A = n(582754),
    g = n(421380),
    E = n(397927),
    h = n(73153),
    p = n(384904),
    C = n(73825),
    x = n(974544),
    T = n(736653),
    I = n(793574),
    S = n(688810),
    f = n(86379),
    N = n(531260),
    b = n(160946),
    R = n(459793),
    v = n(721668),
    O = n(976860),
    j = n(780964),
    P = n(12901),
    y = n(840065),
    L = n(351906),
    D = n(287809),
    M = n(166403),
    G = n(224016),
    U = n(954571),
    k = n(975571),
    B = n(927578),
    w = n(526292),
    H = n(637073),
    V = n(411268),
    F = n(810498),
    Y = n(807098),
    W = n(412260),
    z = n(103411),
    K = n(190187),
    Z = n(194509),
    X = n(65470),
    q = n(857586),
    J = n(795269),
    Q = n(501007),
    $ = n(156601),
    ee = n(244778),
    et = n(659533),
    en = n(788868),
    ei = n(88001),
    es = n(652215),
    er = n(985018),
    ea = n(95252),
    el = n(396785),
    eo = n(956537);
let ec = "to_premium_home_button",
    ed = "premium home page",
    eu = "gifting_button",
    e_ = "payment modal";
function em(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: s, theme: r } = e,
        a = t.hasActiveTrial,
        l = t.planIdFromItems === en.gD.PREMIUM_YEAR_TIER_2,
        c = n || a,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        u = en.hd[t.planIdFromItems],
        _ = B.Ay.formatPriceString(B.Ay.getDefaultPrice(u.id), u.interval),
        { enabled: m } = V.K.getCurrentConfig({ location: "SubscriptionUserHeroSubheader" });
    return c
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (a || !l) &&
                      (0, i.jsx)(J.ir, {
                          text: a ? er.intl.string(er.t.qYKftX) : er.intl.string(er.t.EyjDRE),
                          className: ea.uS,
                          colorOptions: (0, A.Mw)(r)
                              ? J.at.PREMIUM_TIER_2_WHITE_FILL
                              : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (a || !l) && (0, i.jsx)("div", { className: ea.on }),
                  (0, i.jsx)(E.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: ea.KB,
                      children: m
                          ? ""
                          : a
                            ? er.intl.format(er.t["2CGBri"], { remainingTime: d, price: _ })
                            : l
                              ? er.intl.format(er.t["+qqh6g"], { percent: s?.percentage ?? en.Cq, regularPrice: _ })
                              : er.intl.formatToPlainString(er.t["3ZiutU"], {
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
    let e = (0, w.k5)(),
        t = (0, w.nf)(),
        n = (0, T.Ay)(),
        s = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        r = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        l = r?.isPremiumWithPremiumGroup(),
        o = (0, N.A)(),
        c = (0, H.d)(),
        d = null !== s && null !== s.planIdFromItems;
    if (!d && !o.isFractionalPremiumActive && !l) return null;
    let _ = o.isFractionalPremiumActive,
        g = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: a()(ea.$Y, { [ea.J5]: e || g }),
        children: [
            (0, i.jsxs)("div", {
                className: ea.jp,
                children: [
                    l
                        ? (0, i.jsx)(E.Heading, {
                              variant: "display-md",
                              color: "always-white",
                              className: ea._K,
                              children: (0, ei.DP)(),
                          })
                        : (0, i.jsx)(G.A, { className: ea.TJ }),
                    l
                        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
                        : _ && !c
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(J.R, {
                                        text: er.intl.string(er.t.uXF4c4),
                                        className: ea.rd,
                                        colorOptions: J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, i.jsx)(E.Heading, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: ea.sQ,
                                        children: er.intl.format(er.t.sK7fGl, {
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
                                            text: er.intl.string(er.t.qYKftX),
                                            className: ea.uS,
                                            colorOptions: (0, A.Mw)(n)
                                                ? J.at.PREMIUM_TIER_2_WHITE_FILL
                                                : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, i.jsx)(E.Heading, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: ea.KB,
                                            children: er.intl.format(er.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, i.jsx)(Q.ZP, {
                        featureSet: r?.isPremiumGroupPrimary()
                            ? Q.Nz.PREMIUM_GROUP_PRIMARY
                            : r?.isPremiumGroupMember()
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
                                  (0, i.jsx)(q.A, {
                                      defaultTextOverride: c
                                          ? er.intl.string(er.t.YScQSF)
                                          : er.intl.string(er.t["0b3YRn"]),
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      onClick: () => {
                                          U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, P.default)(),
                                              (0, O.pX)(es.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: c ? er.intl.string(er.t.VR2iVB) : er.intl.string(er.t.T1aUAX),
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
                                              (0, P.default)(),
                                              (0, O.pX)(es.BVt.APPLICATION_STORE);
                                      },
                                      text: er.intl.string(er.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          U.default.track(es.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, y.openUserSettings)(j.X.SUBSCRIPTIONS_PANEL, {
                                                  section: es.nc_.SUBSCRIPTIONS,
                                              });
                                      },
                                      text: er.intl.string(er.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: ea.ah,
                children: (0, i.jsx)("img", { className: ea.ah, alt: "", src: el }),
            }),
        ],
    });
}
function eg(e) {
    let { className: t, config: n } = e,
        r = (0, Y.T)(n.asset),
        l = (0, Y.T)(n.backgroundAsset),
        o = (0, F.gc)(l),
        c = s.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, F.K5)({ gradient: e.colors, angle: e.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        d = (0, F.x)(o, c),
        u = { color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: a()(ea.WR, t),
        style: d,
        children: [
            null != r && (0, i.jsx)("img", { alt: "", className: ea.TB, "aria-hidden": !0, src: r }),
            (0, i.jsxs)("div", {
                className: ea.QT,
                children: [
                    (0, i.jsx)(E.Heading, {
                        className: ea.u_,
                        style: u,
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, i.jsx)(E.Text, { className: ea.Oi, style: u, variant: "text-xs/medium", children: n.body }),
                    null != n.additionalTerms &&
                        (0, i.jsx)(E.Text, {
                            className: ea.KW,
                            style: u,
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, i.jsx)(X.A, {
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
function eE() {
    return (0, i.jsxs)("div", {
        className: ea.T1,
        children: [
            (0, i.jsx)("img", { className: ea.GY, alt: "", src: eo }),
            (0, i.jsxs)("div", {
                className: ea.b4,
                children: [
                    (0, i.jsx)(E.Heading, {
                        className: ea.Vz,
                        variant: "heading-xl/extrabold",
                        children: er.intl.string(er.t["3KomGa"]),
                    }),
                    (0, i.jsx)(E.Text, {
                        className: ea.Oi,
                        variant: "text-sm/normal",
                        children: er.intl.string(er.t.yQ06u1),
                    }),
                    (0, i.jsx)(Z.A, {
                        className: a()(ea.Tp, ea._c),
                        textOptions: { textOverride: er.intl.string(er.t.Ve9Ge6), textClassName: ea.VV },
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
let eh = function () {
    let e = (0, f.H)(),
        { analyticsLocations: t } = (0, S.Ay)(I.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        r = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        a = (0, u.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, b.Y)(en.T7),
        [o, m] = s.useState(!0),
        A = (0, N.A)({ forceFetch: !0 }),
        g = (0, u.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        T = !(c.Fr || c.v1) && null != g,
        O = (0, u.bG)([L.A], () => L.A.enabled),
        j = s.useRef(null);
    (0, K.i)();
    let P = (0, z.m)();
    s.useEffect(() => {
        h.h.wait(async () => {
            O || e || (await Promise.all([p.hP(), p.$o(), (0, C.zS)(null, null, es.tF5.DISCOVERY)])), m(!1);
        });
    }, [O, e]);
    let [y, G] = s.useState(!1);
    if (O) return (0, i.jsx)(x.A, {});
    if (e) return (0, i.jsx)(R.uK, {});
    let k = a && null !== r && l,
        B = A.fetched && A.isFractionalPremiumActive,
        w = n?.isPremiumWithPremiumGroup();
    if (!k && !B && !o && !w) return (0, i.jsx)(v.A, { title: er.intl.string(er.t.dyq9TR), note: null });
    if ((!k && !B && !w) || o) return (0, i.jsx)(E.y$y, {});
    let H = !!r?.hasActiveTrial;
    return (0, i.jsx)(S.f5, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        T && (0, i.jsx)(eg, { config: g }),
                        (0, i.jsx)(eA, {}),
                        P && (0, i.jsx)(et.A, { isInSettings: !0 }),
                        !T && (0, i.jsx)(eE, {}),
                        (0, i.jsx)(ee.A, {
                            hideCTAs: !0,
                            headingOverride: er.intl.string(er.t.dnVvQS),
                            hidePill: !H,
                            selectedPlanColumnClassName: ea.JG,
                            selectedPlanTier: en.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(_.L, {
                    innerRef: j,
                    onChange: (e) => {
                        e &&
                            !y &&
                            (U.default.track(es.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }),
                            G(!0));
                    },
                    children: (0, i.jsx)("div", { ref: j, className: ea._Z }),
                }),
            ],
        }),
    });
};
