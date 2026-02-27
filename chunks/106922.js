n.d(t, { A: () => eh, c: () => eA });
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
    B = n(810498),
    Y = n(807098),
    F = n(412260),
    z = n(103411),
    W = n(190187),
    K = n(194509),
    Z = n(65470),
    q = n(857586),
    X = n(795269),
    Q = n(501007),
    J = n(156601),
    $ = n(244778),
    ee = n(659533),
    et = n(788868),
    en = n(88001),
    ei = n(652215),
    es = n(985018),
    ea = n(95252),
    el = n(396785),
    er = n(956537);
let eo = "to_premium_home_button",
    ec = "premium home page",
    ed = "gifting_button",
    eu = "payment modal";
function e_(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: s, theme: a } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2,
        c = n || l,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        u = et.hd[t.planIdFromItems],
        _ = V.Ay.formatPriceString(V.Ay.getDefaultPrice(u.id), u.interval);
    return c
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !r) &&
                      (0, i.jsx)(X.ir, {
                          text: l ? es.intl.string(es.t.qYKftX) : es.intl.string(es.t.EyjDRE),
                          className: ea.uS,
                          colorOptions: (0, A.Mw)(a)
                              ? X.at.PREMIUM_TIER_2_WHITE_FILL
                              : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (l || !r) && (0, i.jsx)("div", { className: ea.on }),
                  (0, i.jsx)(h.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: ea.KB,
                      children: l
                          ? es.intl.format(es.t["2CGBri"], { remainingTime: d, price: _ })
                          : r
                            ? es.intl.format(es.t["+qqh6g"], { percent: s?.percentage ?? et.Cq, regularPrice: _ })
                            : es.intl.formatToPlainString(es.t["3ZiutU"], {
                                  percent: s?.percentage ?? et._$,
                                  regularPrice: _,
                                  numMonths: s?.duration ?? et.OJ,
                              }),
                  }),
              ],
          })
        : (0, i.jsx)(J.A, { variant: void 0, subscriptionTier: et.pe.TIER_2, interval: u.interval });
}
function em() {
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
        className: l()(ea.$Y, { [ea.J5]: e || g }),
        children: [
            (0, i.jsxs)("div", {
                className: ea.jp,
                children: [
                    r
                        ? (0, i.jsx)(h.Heading, {
                              variant: "display-md",
                              color: "always-white",
                              className: ea._K,
                              children: (0, en.DP)(),
                          })
                        : (0, i.jsx)(G.A, { className: ea.TJ }),
                    r
                        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
                        : _ && !c
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(X.R, {
                                        text: es.intl.string(es.t.uXF4c4),
                                        className: ea.rd,
                                        colorOptions: X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, i.jsx)(h.Heading, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: ea.sQ,
                                        children: es.intl.format(es.t.sK7fGl, {
                                            helpCenterLink: k.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : d
                            ? (0, i.jsx)(e_, {
                                  premiumSubscription: s,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : c
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(X.ir, {
                                            text: es.intl.string(es.t.qYKftX),
                                            className: ea.uS,
                                            colorOptions: (0, A.Mw)(n)
                                                ? X.at.PREMIUM_TIER_2_WHITE_FILL
                                                : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, i.jsx)(h.Heading, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: ea.KB,
                                            children: es.intl.format(es.t["/SfHwl"], { weeks: 1 }),
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
                                  (0, i.jsx)(q.A, {
                                      defaultTextOverride: c
                                          ? es.intl.string(es.t.YScQSF)
                                          : es.intl.string(es.t["0b3YRn"]),
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      onClick: () => {
                                          U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: eo,
                                              target: ec,
                                          }),
                                              (0, y.default)(),
                                              (0, O.pX)(ei.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: c ? es.intl.string(es.t.VR2iVB) : es.intl.string(es.t.T1aUAX),
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
                                          U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: eo,
                                              target: ec,
                                          }),
                                              (0, y.default)(),
                                              (0, O.pX)(ei.BVt.APPLICATION_STORE);
                                      },
                                      text: es.intl.string(es.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, P.openUserSettings)(R.X.SUBSCRIPTIONS_PANEL, {
                                                  section: ei.nc_.SUBSCRIPTIONS,
                                              });
                                      },
                                      text: es.intl.string(es.t["9uDy6C"]),
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
function eA(e) {
    let { className: t, config: n } = e,
        a = (0, Y.T)(n.asset),
        r = (0, Y.T)(n.backgroundAsset),
        o = (0, B.gc)(r),
        c = s.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, B.K5)({ gradient: e.colors, angle: e.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        d = (0, B.x)(o, c),
        u = { color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: l()(ea.WR, t),
        style: d,
        children: [
            null != a && (0, i.jsx)("img", { alt: "", className: ea.TB, "aria-hidden": !0, src: a }),
            (0, i.jsxs)("div", {
                className: ea.QT,
                children: [
                    (0, i.jsx)(h.Heading, {
                        className: ea.u_,
                        style: u,
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, i.jsx)(h.Text, { className: ea.Oi, style: u, variant: "text-xs/medium", children: n.body }),
                    null != n.additionalTerms &&
                        (0, i.jsx)(h.Text, {
                            className: ea.KW,
                            style: u,
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, i.jsx)(Z.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: ed, target: eu });
                        },
                    }),
                ],
            }),
        ],
    });
}
function eg() {
    return (0, i.jsxs)("div", {
        className: ea.T1,
        children: [
            (0, i.jsx)("img", { className: ea.GY, alt: "", src: er }),
            (0, i.jsxs)("div", {
                className: ea.b4,
                children: [
                    (0, i.jsx)(h.Heading, {
                        className: ea.Vz,
                        variant: "heading-xl/extrabold",
                        children: es.intl.string(es.t["3KomGa"]),
                    }),
                    (0, i.jsx)(h.Text, {
                        className: ea.Oi,
                        variant: "text-sm/normal",
                        children: es.intl.string(es.t.yQ06u1),
                    }),
                    (0, i.jsx)(K.A, {
                        className: l()(ea.Tp, ea._c),
                        textOptions: { textOverride: es.intl.string(es.t.Ve9Ge6), textClassName: ea.VV },
                        color: g.$n.Colors.CUSTOM,
                        onClick: () => {
                            U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: ed, target: eu });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eh = function () {
    let e = (0, f.H)(),
        { analyticsLocations: t } = (0, I.Ay)(S.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        l = (0, u.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        r = (0, b.Y)(et.T7),
        [o, m] = s.useState(!0),
        A = (0, N.A)({ forceFetch: !0 }),
        g = (0, u.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        T = !(c.Fr || c.v1) && null != g,
        O = (0, u.bG)([L.A], () => L.A.enabled),
        R = s.useRef(null);
    (0, W.i)();
    let y = (0, z.m)();
    s.useEffect(() => {
        x.h.wait(async () => {
            O || e || (await Promise.all([p.hP(), p.$o(), (0, E.zS)(null, null, ei.tF5.DISCOVERY)])), m(!1);
        });
    }, [O, e]);
    let [P, G] = s.useState(!1);
    if (O) return (0, i.jsx)(C.A, {});
    if (e) return (0, i.jsx)(j.uK, {});
    let k = l && null !== a && r,
        V = A.fetched && A.isFractionalPremiumActive,
        H = n?.isPremiumWithPremiumGroup();
    if (!k && !V && !o && !H) return (0, i.jsx)(v.A, { title: es.intl.string(es.t.dyq9TR), note: null });
    if ((!k && !V && !H) || o) return (0, i.jsx)(h.y$y, {});
    let w = !!a?.hasActiveTrial;
    return (0, i.jsx)(I.f5, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        T && (0, i.jsx)(eA, { config: g }),
                        (0, i.jsx)(em, {}),
                        y && (0, i.jsx)(ee.A, { isInSettings: !0 }),
                        !T && (0, i.jsx)(eg, {}),
                        (0, i.jsx)($.A, {
                            hideCTAs: !0,
                            headingOverride: es.intl.string(es.t.dnVvQS),
                            hidePill: !w,
                            selectedPlanColumnClassName: ea.JG,
                            selectedPlanTier: et.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(_.L, {
                    innerRef: R,
                    onChange: (e) => {
                        e &&
                            !P &&
                            (U.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }),
                            G(!0));
                    },
                    children: (0, i.jsx)("div", { ref: R, className: ea._Z }),
                }),
            ],
        }),
    });
};
