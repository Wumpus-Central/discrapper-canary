n.d(t, { A: () => eh, c: () => eg });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(989349),
    o = n.n(a),
    d = n(607399),
    c = n(877624),
    u = n(311907),
    _ = n(230109),
    m = n(732955),
    g = n(582754),
    A = n(421380),
    h = n(397927),
    x = n(73153),
    p = n(384904),
    T = n(73825),
    E = n(974544),
    C = n(736653),
    S = n(793574),
    f = n(688810),
    N = n(86379),
    b = n(531260),
    I = n(160946),
    v = n(459793),
    j = n(721668),
    O = n(976860),
    y = n(780964),
    R = n(12901),
    P = n(840065),
    D = n(351906),
    L = n(287809),
    M = n(166403),
    G = n(224016),
    U = n(954571),
    k = n(975571),
    V = n(927578),
    w = n(526292),
    B = n(637073),
    H = n(810498),
    F = n(807098),
    Y = n(412260),
    z = n(103411),
    X = n(190187),
    W = n(194509),
    K = n(65470),
    Z = n(857586),
    q = n(795269),
    J = n(501007),
    Q = n(156601),
    $ = n(244778),
    ee = n(659533),
    et = n(788868),
    en = n(88001),
    ei = n(652215),
    es = n(985018),
    el = n(95252),
    er = n(396785),
    ea = n(956537);
let eo = "to_premium_home_button",
    ed = "premium home page",
    ec = "gifting_button",
    eu = "payment modal";
function e_(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: s, theme: l } = e,
        r = t.hasActiveTrial,
        a = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2,
        d = n || r,
        c = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        u = et.hd[t.planIdFromItems],
        _ = V.Ay.formatPriceString(V.Ay.getDefaultPrice(u.id), u.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (r || !a) &&
                      (0, i.jsx)(q.ir, {
                          text: r ? es.intl.string(es.t.qYKftX) : es.intl.string(es.t.EyjDRE),
                          className: el.uS,
                          colorOptions: (0, g.Mw)(l)
                              ? q.at.PREMIUM_TIER_2_WHITE_FILL
                              : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (r || !a) && (0, i.jsx)("div", { className: el.on }),
                  (0, i.jsx)(h.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: el.KB,
                      children: r
                          ? es.intl.format(es.t["2CGBri"], { remainingTime: c, price: _ })
                          : a
                            ? es.intl.format(es.t["+qqh6g"], { percent: s?.percentage ?? et.Cq, regularPrice: _ })
                            : es.intl.formatToPlainString(es.t["3ZiutU"], {
                                  percent: s?.percentage ?? et._$,
                                  regularPrice: _,
                                  numMonths: s?.duration ?? et.OJ,
                              }),
                  }),
              ],
          })
        : (0, i.jsx)(Q.A, { variant: void 0, subscriptionTier: et.pe.TIER_2, interval: u.interval });
}
function em() {
    let e = (0, w.k5)(),
        t = (0, w.nf)(),
        n = (0, C.Ay)(),
        s = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        l = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        a = l?.isPremiumWithPremiumGroup(),
        o = (0, b.A)(),
        d = (0, B.d)(),
        c = null !== s && null !== s.planIdFromItems;
    if (!c && !o.isFractionalPremiumActive && !a) return null;
    let _ = o.isFractionalPremiumActive,
        A = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: r()(el.$Y, { [el.J5]: e || A }),
        children: [
            (0, i.jsxs)("div", {
                className: el.jp,
                children: [
                    a
                        ? (0, i.jsx)(h.Heading, {
                              variant: "display-md",
                              color: "always-white",
                              className: el._K,
                              children: (0, en.DP)(),
                          })
                        : (0, i.jsx)(G.A, { className: el.TJ }),
                    a
                        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
                        : _ && !d
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(q.R, {
                                        text: es.intl.string(es.t.uXF4c4),
                                        className: el.rd,
                                        colorOptions: q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, i.jsx)(h.Heading, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: el.sQ,
                                        children: es.intl.format(es.t.sK7fGl, {
                                            helpCenterLink: k.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : c
                            ? (0, i.jsx)(e_, {
                                  premiumSubscription: s,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : d
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(q.ir, {
                                            text: es.intl.string(es.t.qYKftX),
                                            className: el.uS,
                                            colorOptions: (0, g.Mw)(n)
                                                ? q.at.PREMIUM_TIER_2_WHITE_FILL
                                                : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, i.jsx)(h.Heading, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: el.KB,
                                            children: es.intl.format(es.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, i.jsx)(J.ZP, {
                        featureSet: l?.isPremiumGroupPrimary()
                            ? J.Nz.PREMIUM_GROUP_PRIMARY
                            : l?.isPremiumGroupMember()
                              ? J.Nz.PREMIUM_GROUP_MEMBER
                              : _
                                ? J.Nz.FRACTIONAL_PREMIUM
                                : J.Nz.DEFAULT,
                    }),
                    _ && !c
                        ? (0, i.jsxs)(m.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, i.jsx)(Z.A, {
                                      defaultTextOverride: d
                                          ? es.intl.string(es.t.YScQSF)
                                          : es.intl.string(es.t["0b3YRn"]),
                                  }),
                                  (0, i.jsx)(m.$nd, {
                                      onClick: () => {
                                          U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: eo,
                                              target: ed,
                                          }),
                                              (0, R.default)(),
                                              (0, O.pX)(ei.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: d ? es.intl.string(es.t.VR2iVB) : es.intl.string(es.t.T1aUAX),
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
                                              target: ed,
                                          }),
                                              (0, R.default)(),
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
                                              (0, P.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL, {
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
                className: el.ah,
                children: (0, i.jsx)("img", { className: el.ah, alt: "", src: er }),
            }),
        ],
    });
}
function eg(e) {
    let { className: t, config: n } = e,
        l = (0, F.T)(n.asset),
        a = (0, F.T)(n.backgroundAsset),
        o = (0, H.gc)(a),
        d = s.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, H.K5)({ gradient: e.colors, angle: e.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        c = (0, H.x)(o, d),
        u = { color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: r()(el.WR, t),
        style: c,
        children: [
            null != l && (0, i.jsx)("img", { alt: "", className: el.TB, "aria-hidden": !0, src: l }),
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
                    (0, i.jsx)(K.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: ec, target: eu });
                        },
                    }),
                ],
            }),
        ],
    });
}
function eA() {
    return (0, i.jsxs)("div", {
        className: el.T1,
        children: [
            (0, i.jsx)("img", { className: el.GY, alt: "", src: ea }),
            (0, i.jsxs)("div", {
                className: el.b4,
                children: [
                    (0, i.jsx)(h.Heading, {
                        className: el.Vz,
                        variant: "heading-xl/extrabold",
                        children: es.intl.string(es.t["3KomGa"]),
                    }),
                    (0, i.jsx)(h.Text, {
                        className: el.Oi,
                        variant: "text-sm/normal",
                        children: es.intl.string(es.t.yQ06u1),
                    }),
                    (0, i.jsx)(W.A, {
                        className: r()(el.Tp, el._c),
                        textOptions: { textOverride: es.intl.string(es.t.Ve9Ge6), textClassName: el.VV },
                        color: A.$n.Colors.CUSTOM,
                        onClick: () => {
                            U.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: ec, target: eu });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eh = function () {
    let e = (0, N.H)(),
        { analyticsLocations: t } = (0, f.Ay)(S.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        l = (0, u.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        r = (0, u.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        a = (0, I.Y)(et.T7),
        [o, m] = s.useState(!0),
        g = (0, b.A)({ forceFetch: !0 }),
        A = (0, u.bG)([Y.A], () => {
            let e = Y.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        C = !(d.Fr || d.v1) && null != A,
        O = (0, u.bG)([D.A], () => D.A.enabled),
        y = s.useRef(null);
    (0, X.i)();
    let R = (0, z.m)();
    s.useEffect(() => {
        x.h.wait(async () => {
            O || e || (await Promise.all([p.hP(), p.$o(), (0, T.zS)(null, null, ei.tF5.DISCOVERY)])), m(!1);
        });
    }, [O, e]);
    let [P, G] = s.useState(!1);
    if (O) return (0, i.jsx)(E.A, {});
    if (e) return (0, i.jsx)(v.uK, {});
    let k = r && null !== l && a,
        V = g.fetched && g.isFractionalPremiumActive,
        w = n?.isPremiumWithPremiumGroup();
    if (!k && !V && !o && !w) return (0, i.jsx)(j.A, { title: es.intl.string(es.t.dyq9TR), note: null });
    if ((!k && !V && !w) || o) return (0, i.jsx)(h.y$y, {});
    let B = !!l?.hasActiveTrial;
    return (0, i.jsx)(f.f5, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        C && (0, i.jsx)(eg, { config: A }),
                        (0, i.jsx)(em, {}),
                        R && (0, i.jsx)(ee.A, { isInSettings: !0 }),
                        !C && (0, i.jsx)(eA, {}),
                        (0, i.jsx)($.A, {
                            hideCTAs: !0,
                            headingOverride: es.intl.string(es.t.dnVvQS),
                            hidePill: !B,
                            selectedPlanColumnClassName: el.JG,
                            selectedPlanTier: et.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(_.L, {
                    innerRef: y,
                    onChange: (e) => {
                        e &&
                            !P &&
                            (U.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }),
                            G(!0));
                    },
                    children: (0, i.jsx)("div", { ref: y, className: el._Z }),
                }),
            ],
        }),
    });
};
