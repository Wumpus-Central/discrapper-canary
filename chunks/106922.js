s.d(t, { A: () => eh, c: () => ep });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(989349),
    o = s.n(l),
    c = s(607399),
    d = s(877624),
    m = s(311907),
    u = s(230109),
    _ = s(825484),
    x = s(821609),
    p = s(462887),
    g = s(862482),
    h = s(534514),
    f = s(834730),
    C = s(289873),
    b = s(73153),
    j = s(73825),
    A = s(736653),
    N = s(793574),
    I = s(688810),
    T = s(323082),
    v = s(86379),
    E = s(531260),
    R = s(160946),
    M = s(459793),
    S = s(721668),
    y = s(976860),
    P = s(780964),
    k = s(779733),
    B = s(858897),
    w = s(287809),
    G = s(166403),
    O = s(224016),
    D = s(954571),
    L = s(975571),
    H = s(927578),
    U = s(526292),
    F = s(881489),
    W = s(810498),
    z = s(807098),
    V = s(412260),
    K = s(103411),
    Q = s(190187),
    Z = s(263747),
    Y = s(194509),
    J = s(65470),
    X = s(465794),
    q = s(774774),
    $ = s(559606),
    ee = s(156601),
    et = s(244778),
    es = s(788868),
    er = s(88001),
    ea = s(652215),
    ei = s(985018),
    en = s(613741),
    el = s(396785),
    eo = s(956537);
let ec = "to_premium_home_button",
    ed = "premium home page",
    em = "gifting_button",
    eu = "payment modal";
function e_(e) {
    let { premiumSubscription: t, isDiscountApplied: s, activeDiscountInfo: a, theme: i } = e,
        n = t.hasActiveTrial,
        l = t.planIdFromItems === es.gD.PREMIUM_YEAR_TIER_2,
        c = s || n,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        m = es.hd[t.planIdFromItems],
        u = H.Ay.formatPriceString(H.Ay.getDefaultPrice(m.id), m.interval);
    return c
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (n || !l) &&
                      (0, r.jsx)(q.HU, {
                          text: n ? ei.intl.string(ei.t.qYKftX) : ei.intl.string(ei.t.EyjDRE),
                          className: en.uS,
                          colorOptions: (0, p.M)(i)
                              ? q.at.PREMIUM_TIER_2_WHITE_FILL
                              : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (n || !l) && (0, r.jsx)("div", { className: en.on }),
                  (0, r.jsx)(h.D, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: en.KB,
                      children: n
                          ? ei.intl.format(ei.t["2CGBri"], { remainingTime: d, price: u })
                          : l
                            ? ei.intl.format(ei.t["+qqh6g"], { percent: a?.percentage ?? es.Cq, regularPrice: u })
                            : ei.intl.formatToPlainString(ei.t["3ZiutU"], {
                                  percent: a?.percentage ?? es._$,
                                  regularPrice: u,
                                  numMonths: a?.duration ?? es.OJ,
                              }),
                  }),
              ],
          })
        : (0, r.jsx)(ee.A, { variant: void 0, subscriptionTier: es.pe.TIER_2, interval: m.interval });
}
function ex() {
    let e = (0, U.k5)(),
        t = (0, U.nf)(),
        s = (0, A.Ay)(),
        a = (0, m.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        i = (0, m.bG)([w.default], () => w.default.getCurrentUser()),
        l = i?.isPremiumWithPremiumGroup(),
        o = (0, E.A)(),
        c = (0, F.ds)(),
        d = null !== a && null !== a.planIdFromItems;
    if (!d && !o.isFractionalPremiumActive && !l) return null;
    let u = o.isFractionalPremiumActive,
        g = null !== a && a.hasActiveTrial;
    return (0, r.jsxs)("div", {
        className: n()(en.$Y, { [en.J5]: e || g }),
        children: [
            (0, r.jsxs)("div", {
                className: en.jp,
                children: [
                    l
                        ? (0, r.jsx)(h.D, {
                              variant: "display-md",
                              color: "always-white",
                              className: en._K,
                              children: (0, er.DP)(),
                          })
                        : (0, r.jsx)(O.A, { className: en.TJ }),
                    l
                        ? (0, r.jsx)("div", { style: { marginBottom: "18px" } })
                        : u && !c
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(q.e4, {
                                        text: ei.intl.string(ei.t.uXF4c4),
                                        className: en.rd,
                                        colorOptions: q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, r.jsx)(h.D, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: en.sQ,
                                        children: ei.intl.format(ei.t.sK7fGl, {
                                            helpCenterLink: L.A.getArticleURL(ea.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : d
                            ? (0, r.jsx)(e_, {
                                  premiumSubscription: a,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: s,
                              })
                            : c
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(q.HU, {
                                            text: ei.intl.string(ei.t.qYKftX),
                                            className: en.uS,
                                            colorOptions: (0, p.M)(s)
                                                ? q.at.PREMIUM_TIER_2_WHITE_FILL
                                                : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, r.jsx)(h.D, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: en.KB,
                                            children: ei.intl.format(ei.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, r.jsx)($.ZP, {
                        featureSet: i?.isPremiumGroupPrimary()
                            ? $.Nz.PREMIUM_GROUP_PRIMARY
                            : i?.isPremiumGroupMember()
                              ? $.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? $.Nz.FRACTIONAL_PREMIUM
                                : $.Nz.DEFAULT,
                    }),
                    u && !d
                        ? (0, r.jsxs)(_.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, r.jsx)(X.A, {
                                      defaultTextOverride: c
                                          ? ei.intl.string(ei.t.YScQSF)
                                          : ei.intl.string(ei.t["0b3YRn"]),
                                  }),
                                  (0, r.jsx)(x.$, {
                                      onClick: () => {
                                          D.default.track(ea.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, k.default)(),
                                              (0, y.pX)(ea.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: c ? ei.intl.string(ei.t.VR2iVB) : ei.intl.string(ei.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)(_.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, r.jsx)(x.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          D.default.track(ea.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, k.default)(),
                                              (0, y.pX)(ea.BVt.APPLICATION_STORE);
                                      },
                                      text: ei.intl.string(ei.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, r.jsx)(x.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          D.default.track(ea.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, B.openUserSettings)(P.X.SUBSCRIPTIONS_PANEL);
                                      },
                                      text: ei.intl.string(ei.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)("div", {
                className: en.ah,
                children: (0, r.jsx)("img", { className: en.ah, alt: "", src: el }),
            }),
        ],
    });
}
function ep(e) {
    let { className: t, config: s } = e,
        i = (0, z.T)(s.asset),
        l = (0, z.T)(s.backgroundAsset),
        o = (0, W.gc)(l),
        c = a.useMemo(() => {
            let e = s.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, W.K5)({ gradient: e.colors, angle: e.angle }, { defaultAngle: 180 });
        }, [s.gradient]),
        d = (0, W.x)(o, c),
        m = { color: null != s.textColor && "" !== s.textColor ? s.textColor : "var(--always-white)" };
    return (0, r.jsxs)("div", {
        className: n()(en.WR, t),
        style: d,
        children: [
            null != i && (0, r.jsx)("img", { alt: "", className: en.TB, "aria-hidden": !0, src: i }),
            (0, r.jsxs)("div", {
                className: en.QT,
                children: [
                    (0, r.jsx)(h.D, {
                        className: en.u_,
                        style: m,
                        variant: "heading-lg/extrabold",
                        children: s.header,
                    }),
                    (0, r.jsx)(f.E, { className: en.Oi, style: m, variant: "text-xs/medium", children: s.body }),
                    null != s.additionalTerms &&
                        (0, r.jsx)(f.E, {
                            className: en.KW,
                            style: m,
                            variant: "text-xxs/normal",
                            children: s.additionalTerms,
                        }),
                    (0, r.jsx)(J.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            D.default.track(ea.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: em, target: eu });
                        },
                    }),
                ],
            }),
        ],
    });
}
function eg() {
    return (0, r.jsxs)("div", {
        className: en.T1,
        children: [
            (0, r.jsx)("img", { className: en.GY, alt: "", src: eo }),
            (0, r.jsxs)("div", {
                className: en.b4,
                children: [
                    (0, r.jsx)(h.D, {
                        className: en.Vz,
                        variant: "heading-xl/extrabold",
                        children: ei.intl.string(ei.t["3KomGa"]),
                    }),
                    (0, r.jsx)(f.E, {
                        className: en.Oi,
                        variant: "text-sm/normal",
                        children: ei.intl.string(ei.t.yQ06u1),
                    }),
                    (0, r.jsx)(Y.A, {
                        className: n()(en.Tp, en._c),
                        textOptions: { textOverride: ei.intl.string(ei.t.Ve9Ge6), textClassName: en.VV },
                        color: g.$n.Colors.CUSTOM,
                        onClick: () => {
                            D.default.track(ea.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: em, target: eu });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eh = function () {
    let e = (0, v.Hp)(),
        { analyticsLocations: t } = (0, I.Ay)(N.A.PREMIUM_SETTINGS),
        s = (0, m.bG)([w.default], () => w.default.getCurrentUser()),
        i = (0, m.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        n = (0, m.bG)([G.A], () => G.A.hasFetchedSubscriptions()),
        l = (0, R.Y)(es.T7),
        [o, _] = a.useState(!0),
        x = (0, E.A)({ forceFetch: !0 }),
        p = (0, m.bG)([V.A], () => {
            let e = V.A.getMarketingComponentByType(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        g = !(c.Fr || c.v1) && null != p,
        h = a.useRef(null);
    (0, Q.i)();
    let f = (0, K.m)();
    a.useEffect(() => {
        b.h.wait(async () => {
            e || (await Promise.all([T.hP(), T.$o(), (0, j.zS)(null, null, ea.tF5.DISCOVERY)])), _(!1);
        });
    }, [e]);
    let [A, y] = a.useState(!1);
    if (e) return (0, r.jsx)(M.uK, {});
    let P = n && null !== i && l,
        k = x.fetched && x.isFractionalPremiumActive,
        B = s?.isPremiumWithPremiumGroup();
    if (!P && !k && !o && !B) return (0, r.jsx)(S.A, { title: ei.intl.string(ei.t.dyq9TR), note: null });
    if ((!P && !k && !B) || o) return (0, r.jsx)(C.y, {});
    let O = !!i?.hasActiveTrial;
    return (0, r.jsx)(I.f5, {
        value: t,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        g && (0, r.jsx)(ep, { config: p }),
                        (0, r.jsx)(ex, {}),
                        f && (0, r.jsx)(Z.A, { isInSettings: !0 }),
                        !g && (0, r.jsx)(eg, {}),
                        (0, r.jsx)(et.A, {
                            hideCTAs: !0,
                            headingOverride: ei.intl.string(ei.t.dnVvQS),
                            hidePill: !O,
                            selectedPlanColumnClassName: en.JG,
                            selectedPlanTier: es.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(u.L, {
                    innerRef: h,
                    onChange: (e) => {
                        e &&
                            !A &&
                            (D.default.track(ea.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }),
                            y(!0));
                    },
                    children: (0, r.jsx)("div", { ref: h, className: en._Z }),
                }),
            ],
        }),
    });
};
