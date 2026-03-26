n.d(t, { A: () => eg, c: () => em });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(607399),
    c = n(877624),
    u = n(311907),
    m = n(230109),
    _ = n(732955),
    g = n(582754),
    x = n(421380),
    A = n(397927),
    h = n(73153),
    p = n(384904),
    f = n(73825),
    T = n(736653),
    S = n(793574),
    E = n(688810),
    b = n(86379),
    C = n(531260),
    v = n(160946),
    N = n(459793),
    I = n(721668),
    j = n(976860),
    y = n(780964),
    O = n(12901),
    R = n(840065),
    L = n(287809),
    P = n(166403),
    D = n(224016),
    G = n(954571),
    M = n(975571),
    k = n(927578),
    U = n(526292),
    w = n(637073),
    V = n(810498),
    B = n(807098),
    F = n(412260),
    H = n(103411),
    z = n(190187),
    Y = n(263747),
    X = n(194509),
    K = n(65470),
    W = n(857586),
    Z = n(795269),
    q = n(501007),
    Q = n(156601),
    J = n(244778),
    $ = n(788868),
    ee = n(88001),
    et = n(652215),
    en = n(985018),
    ei = n(699357),
    es = n(396785),
    el = n(956537);
let ea = "to_premium_home_button",
    er = "premium home page",
    eo = "gifting_button",
    ed = "payment modal";
function ec(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: s, theme: l } = e,
        a = t.hasActiveTrial,
        r = t.planIdFromItems === $.gD.PREMIUM_YEAR_TIER_2,
        d = n || a,
        c = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        u = $.hd[t.planIdFromItems],
        m = k.Ay.formatPriceString(k.Ay.getDefaultPrice(u.id), u.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (a || !r) &&
                      (0, i.jsx)(Z.ir, {
                          text: a ? en.intl.string(en.t.qYKftX) : en.intl.string(en.t.EyjDRE),
                          className: ei.uS,
                          colorOptions: (0, g.Mw)(l)
                              ? Z.at.PREMIUM_TIER_2_WHITE_FILL
                              : Z.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (a || !r) && (0, i.jsx)("div", { className: ei.on }),
                  (0, i.jsx)(A.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: ei.KB,
                      children: a
                          ? en.intl.format(en.t["2CGBri"], { remainingTime: c, price: m })
                          : r
                            ? en.intl.format(en.t["+qqh6g"], { percent: s?.percentage ?? $.Cq, regularPrice: m })
                            : en.intl.formatToPlainString(en.t["3ZiutU"], {
                                  percent: s?.percentage ?? $._$,
                                  regularPrice: m,
                                  numMonths: s?.duration ?? $.OJ,
                              }),
                  }),
              ],
          })
        : (0, i.jsx)(Q.A, { variant: void 0, subscriptionTier: $.pe.TIER_2, interval: u.interval });
}
function eu() {
    let e = (0, U.k5)(),
        t = (0, U.nf)(),
        n = (0, T.Ay)(),
        s = (0, u.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        l = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        r = l?.isPremiumWithPremiumGroup(),
        o = (0, C.A)(),
        d = (0, w.ds)(),
        c = null !== s && null !== s.planIdFromItems;
    if (!c && !o.isFractionalPremiumActive && !r) return null;
    let m = o.isFractionalPremiumActive,
        x = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: a()(ei.$Y, { [ei.J5]: e || x }),
        children: [
            (0, i.jsxs)("div", {
                className: ei.jp,
                children: [
                    r
                        ? (0, i.jsx)(A.Heading, {
                              variant: "display-md",
                              color: "always-white",
                              className: ei._K,
                              children: (0, ee.DP)(),
                          })
                        : (0, i.jsx)(D.A, { className: ei.TJ }),
                    r
                        ? (0, i.jsx)("div", { style: { marginBottom: "18px" } })
                        : m && !d
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(Z.R, {
                                        text: en.intl.string(en.t.uXF4c4),
                                        className: ei.rd,
                                        colorOptions: Z.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, i.jsx)(A.Heading, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: ei.sQ,
                                        children: en.intl.format(en.t.sK7fGl, {
                                            helpCenterLink: M.A.getArticleURL(et.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : c
                            ? (0, i.jsx)(ec, {
                                  premiumSubscription: s,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : d
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(Z.ir, {
                                            text: en.intl.string(en.t.qYKftX),
                                            className: ei.uS,
                                            colorOptions: (0, g.Mw)(n)
                                                ? Z.at.PREMIUM_TIER_2_WHITE_FILL
                                                : Z.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, i.jsx)(A.Heading, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: ei.KB,
                                            children: en.intl.format(en.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, i.jsx)(q.ZP, {
                        featureSet: l?.isPremiumGroupPrimary()
                            ? q.Nz.PREMIUM_GROUP_PRIMARY
                            : l?.isPremiumGroupMember()
                              ? q.Nz.PREMIUM_GROUP_MEMBER
                              : m
                                ? q.Nz.FRACTIONAL_PREMIUM
                                : q.Nz.DEFAULT,
                    }),
                    m && !c
                        ? (0, i.jsxs)(_.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, i.jsx)(W.A, {
                                      defaultTextOverride: d
                                          ? en.intl.string(en.t.YScQSF)
                                          : en.intl.string(en.t["0b3YRn"]),
                                  }),
                                  (0, i.jsx)(_.$nd, {
                                      onClick: () => {
                                          G.default.track(et.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ea,
                                              target: er,
                                          }),
                                              (0, O.default)(),
                                              (0, j.pX)(et.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: d ? en.intl.string(en.t.VR2iVB) : en.intl.string(en.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(_.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, i.jsx)(_.$nd, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          G.default.track(et.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ea,
                                              target: er,
                                          }),
                                              (0, O.default)(),
                                              (0, j.pX)(et.BVt.APPLICATION_STORE);
                                      },
                                      text: en.intl.string(en.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, i.jsx)(_.$nd, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          G.default.track(et.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, R.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL);
                                      },
                                      text: en.intl.string(en.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: ei.ah,
                children: (0, i.jsx)("img", { className: ei.ah, alt: "", src: es }),
            }),
        ],
    });
}
function em(e) {
    let { className: t, config: n } = e,
        l = (0, B.T)(n.asset),
        r = (0, B.T)(n.backgroundAsset),
        o = (0, V.gc)(r),
        d = s.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, V.K5)({ gradient: e.colors, angle: e.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        c = (0, V.x)(o, d),
        u = { color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)" };
    return (0, i.jsxs)("div", {
        className: a()(ei.WR, t),
        style: c,
        children: [
            null != l && (0, i.jsx)("img", { alt: "", className: ei.TB, "aria-hidden": !0, src: l }),
            (0, i.jsxs)("div", {
                className: ei.QT,
                children: [
                    (0, i.jsx)(A.Heading, {
                        className: ei.u_,
                        style: u,
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, i.jsx)(A.Text, { className: ei.Oi, style: u, variant: "text-xs/medium", children: n.body }),
                    null != n.additionalTerms &&
                        (0, i.jsx)(A.Text, {
                            className: ei.KW,
                            style: u,
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, i.jsx)(K.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            G.default.track(et.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: eo, target: ed });
                        },
                    }),
                ],
            }),
        ],
    });
}
function e_() {
    return (0, i.jsxs)("div", {
        className: ei.T1,
        children: [
            (0, i.jsx)("img", { className: ei.GY, alt: "", src: el }),
            (0, i.jsxs)("div", {
                className: ei.b4,
                children: [
                    (0, i.jsx)(A.Heading, {
                        className: ei.Vz,
                        variant: "heading-xl/extrabold",
                        children: en.intl.string(en.t["3KomGa"]),
                    }),
                    (0, i.jsx)(A.Text, {
                        className: ei.Oi,
                        variant: "text-sm/normal",
                        children: en.intl.string(en.t.yQ06u1),
                    }),
                    (0, i.jsx)(X.A, {
                        className: a()(ei.Tp, ei._c),
                        textOptions: { textOverride: en.intl.string(en.t.Ve9Ge6), textClassName: ei.VV },
                        color: x.$n.Colors.CUSTOM,
                        onClick: () => {
                            G.default.track(et.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: eo, target: ed });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eg = function () {
    let e = (0, b.Hp)(),
        { analyticsLocations: t } = (0, E.Ay)(S.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        l = (0, u.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        a = (0, u.bG)([P.A], () => P.A.hasFetchedSubscriptions()),
        r = (0, v.Y)($.T7),
        [o, _] = s.useState(!0),
        g = (0, C.A)({ forceFetch: !0 }),
        x = (0, u.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        T = !(d.Fr || d.v1) && null != x,
        j = s.useRef(null);
    (0, z.i)();
    let y = (0, H.m)();
    s.useEffect(() => {
        h.h.wait(async () => {
            e || (await Promise.all([p.hP(), p.$o(), (0, f.zS)(null, null, et.tF5.DISCOVERY)])), _(!1);
        });
    }, [e]);
    let [O, R] = s.useState(!1);
    if (e) return (0, i.jsx)(N.uK, {});
    let D = a && null !== l && r,
        M = g.fetched && g.isFractionalPremiumActive,
        k = n?.isPremiumWithPremiumGroup();
    if (!D && !M && !o && !k) return (0, i.jsx)(I.A, { title: en.intl.string(en.t.dyq9TR), note: null });
    if ((!D && !M && !k) || o) return (0, i.jsx)(A.y$y, {});
    let U = !!l?.hasActiveTrial;
    return (0, i.jsx)(E.f5, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        T && (0, i.jsx)(em, { config: x }),
                        (0, i.jsx)(eu, {}),
                        y && (0, i.jsx)(Y.A, { isInSettings: !0 }),
                        !T && (0, i.jsx)(e_, {}),
                        (0, i.jsx)(J.A, {
                            hideCTAs: !0,
                            headingOverride: en.intl.string(en.t.dnVvQS),
                            hidePill: !U,
                            selectedPlanColumnClassName: ei.JG,
                            selectedPlanTier: $.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, i.jsx)(m.L, {
                    innerRef: j,
                    onChange: (e) => {
                        e &&
                            !O &&
                            (G.default.track(et.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }),
                            R(!0));
                    },
                    children: (0, i.jsx)("div", { ref: j, className: ei._Z }),
                }),
            ],
        }),
    });
};
