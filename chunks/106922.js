n.d(t, {
    A: () => ef,
    c: () => eg,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(607399),
    d = n(877624),
    u = n(311907),
    _ = n(230109),
    p = n(732955),
    m = n(582754),
    g = n(421380),
    A = n(397927),
    f = n(73153),
    b = n(384904),
    h = n(73825),
    E = n(974544),
    O = n(736653),
    C = n(793574),
    x = n(688810),
    S = n(86379),
    T = n(531260),
    I = n(160946),
    y = n(459793),
    N = n(721668),
    j = n(976860),
    v = n(780964),
    P = n(12901),
    R = n(840065),
    D = n(351906),
    L = n(287809),
    w = n(166403),
    M = n(224016),
    G = n(954571),
    U = n(975571),
    k = n(927578),
    B = n(526292),
    H = n(637073),
    V = n(411268),
    F = n(810498),
    Y = n(807098),
    W = n(412260),
    K = n(103411),
    z = n(190187),
    Z = n(194509),
    X = n(65470),
    q = n(857586),
    J = n(795269),
    Q = n(501007),
    $ = n(156601),
    ee = n(244778),
    et = n(659533),
    en = n(788868),
    er = n(88001),
    ei = n(652215),
    el = n(985018),
    es = n(95252),
    ea = n(396785),
    eo = n(956537);
let ec = "to_premium_home_button",
    ed = "premium home page",
    eu = "gifting_button",
    e_ = "payment modal";

function ep(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        s = t.hasActiveTrial,
        a = t.planIdFromItems === en.gD.PREMIUM_YEAR_TIER_2,
        c = n || s,
        d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0,
        u = en.hd[t.planIdFromItems],
        _ = k.Ay.formatPriceString(k.Ay.getDefaultPrice(u.id), u.interval),
        { enabled: p } = V.K.getCurrentConfig({
            location: "SubscriptionUserHeroSubheader",
        });
    if (c) {
        var g, f, b;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (s || !a) &&
                    (0, r.jsx)(J.ir, {
                        text: s ? el.intl.string(el.t.qYKftX) : el.intl.string(el.t.EyjDRE),
                        className: es.uS,
                        colorOptions: (0, m.Mw)(l)
                            ? J.at.PREMIUM_TIER_2_WHITE_FILL
                            : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                    }),
                (s || !a) &&
                    (0, r.jsx)("div", {
                        className: es.on,
                    }),
                (0, r.jsx)(A.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: es.KB,
                    children: p
                        ? ""
                        : s
                          ? el.intl.format(el.t["2CGBri"], {
                                remainingTime: d,
                                price: _,
                            })
                          : a
                            ? el.intl.format(el.t["+qqh6g"], {
                                  percent: null != (g = null == i ? void 0 : i.percentage) ? g : en.Cq,
                                  regularPrice: _,
                              })
                            : el.intl.formatToPlainString(el.t["3ZiutU"], {
                                  percent: null != (f = null == i ? void 0 : i.percentage) ? f : en._$,
                                  regularPrice: _,
                                  numMonths: null != (b = null == i ? void 0 : i.duration) ? b : en.OJ,
                              }),
                }),
            ],
        });
    }
    return p
        ? (0, r.jsx)("div", {
              style: {
                  marginBottom: "18px",
              },
          })
        : (0, r.jsx)($.A, {
              variant: void 0,
              subscriptionTier: en.pe.TIER_2,
              interval: u.interval,
          });
}

function em() {
    let e = (0, B.k5)(),
        t = (0, B.nf)(),
        n = (0, O.Ay)(),
        i = (0, u.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
        l = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        a = null == l ? void 0 : l.isPremiumWithPremiumGroup(),
        o = (0, T.A)(),
        c = (0, H.d)(),
        d = null !== i && null !== i.planIdFromItems;
    if (!d && !o.isFractionalPremiumActive && !a) return null;
    let _ = o.isFractionalPremiumActive,
        g = null !== i && i.hasActiveTrial;
    return (0, r.jsxs)("div", {
        className: s()(es.$Y, {
            [es.J5]: e || g,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: es.jp,
                children: [
                    a
                        ? (0, r.jsx)(A.Heading, {
                              variant: "display-md",
                              color: "always-white",
                              className: es._K,
                              children: (0, er.DP)(),
                          })
                        : (0, r.jsx)(M.A, {
                              className: es.TJ,
                          }),
                    a
                        ? (0, r.jsx)("div", {
                              style: {
                                  marginBottom: "18px",
                              },
                          })
                        : _ && !c
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(J.R, {
                                        text: el.intl.string(el.t.uXF4c4),
                                        className: es.rd,
                                        colorOptions: J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, r.jsx)(A.Heading, {
                                        variant: "heading-md/normal",
                                        color: "always-white",
                                        className: es.sQ,
                                        children: el.intl.format(el.t.sK7fGl, {
                                            helpCenterLink: U.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : d
                            ? (0, r.jsx)(ep, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : c
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(J.ir, {
                                            text: el.intl.string(el.t.qYKftX),
                                            className: es.uS,
                                            colorOptions: (0, m.Mw)(n)
                                                ? J.at.PREMIUM_TIER_2_WHITE_FILL
                                                : J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, r.jsx)(A.Heading, {
                                            variant: "heading-md/normal",
                                            color: "always-white",
                                            className: es.KB,
                                            children: el.intl.format(el.t["/SfHwl"], {
                                                weeks: 1,
                                            }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, r.jsx)(Q.ZP, {
                        featureSet: (null == l ? void 0 : l.isPremiumGroupPrimary())
                            ? Q.Nz.PREMIUM_GROUP_PRIMARY
                            : (null == l ? void 0 : l.isPremiumGroupMember())
                              ? Q.Nz.PREMIUM_GROUP_MEMBER
                              : _
                                ? Q.Nz.FRACTIONAL_PREMIUM
                                : Q.Nz.DEFAULT,
                    }),
                    _ && !d
                        ? (0, r.jsxs)(p.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, r.jsx)(q.A, {
                                      defaultTextOverride: c
                                          ? el.intl.string(el.t.YScQSF)
                                          : el.intl.string(el.t["0b3YRn"]),
                                  }),
                                  (0, r.jsx)(p.$nd, {
                                      onClick: () => {
                                          G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, P.default)(),
                                              (0, j.pX)(ei.BVt.APPLICATION_STORE);
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: c ? el.intl.string(el.t.VR2iVB) : el.intl.string(el.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)(p.e2v, {
                              fullWidth: !0,
                              direction: "vertical",
                              children: [
                                  (0, r.jsx)(p.$nd, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ec,
                                              target: ed,
                                          }),
                                              (0, P.default)(),
                                              (0, j.pX)(ei.BVt.APPLICATION_STORE);
                                      },
                                      text: el.intl.string(el.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, r.jsx)(p.$nd, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, R.openUserSettings)(v.X.SUBSCRIPTIONS_PANEL, {
                                                  section: ei.nc_.SUBSCRIPTIONS,
                                              });
                                      },
                                      text: el.intl.string(el.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)("div", {
                className: es.ah,
                children: (0, r.jsx)("img", {
                    className: es.ah,
                    alt: "",
                    src: ea,
                }),
            }),
        ],
    });
}

function eg(e) {
    let { className: t, config: n } = e,
        l = (0, Y.T)(n.asset),
        a = (0, Y.T)(n.backgroundAsset),
        o = (0, F.gc)(null != a ? a : void 0),
        c = i.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, F.K5)(
                    {
                        gradient: e.colors,
                        angle: e.angle,
                    },
                    {
                        defaultAngle: 180,
                    },
                );
        }, [n.gradient]),
        d = (0, F.x)(o, c),
        u = {
            color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)",
        };
    return (0, r.jsxs)("div", {
        className: s()(es.WR, t),
        style: d,
        children: [
            null != l &&
                (0, r.jsx)("img", {
                    alt: "",
                    className: es.TB,
                    "aria-hidden": !0,
                    src: l,
                }),
            (0, r.jsxs)("div", {
                className: es.QT,
                children: [
                    (0, r.jsx)(A.Heading, {
                        className: es.u_,
                        style: u,
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, r.jsx)(A.Text, {
                        className: es.Oi,
                        style: u,
                        variant: "text-xs/medium",
                        children: n.body,
                    }),
                    null != n.additionalTerms &&
                        (0, r.jsx)(A.Text, {
                            className: es.KW,
                            style: u,
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, r.jsx)(X.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: eu,
                                target: e_,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}

function eA() {
    return (0, r.jsxs)("div", {
        className: es.T1,
        children: [
            (0, r.jsx)("img", {
                className: es.GY,
                alt: "",
                src: eo,
            }),
            (0, r.jsxs)("div", {
                className: es.b4,
                children: [
                    (0, r.jsx)(A.Heading, {
                        className: es.Vz,
                        variant: "heading-xl/extrabold",
                        children: el.intl.string(el.t["3KomGa"]),
                    }),
                    (0, r.jsx)(A.Text, {
                        className: es.Oi,
                        variant: "text-sm/normal",
                        children: el.intl.string(el.t.yQ06u1),
                    }),
                    (0, r.jsx)(Z.A, {
                        className: s()(es.Tp, es._c),
                        textOptions: {
                            textOverride: el.intl.string(el.t.Ve9Ge6),
                            textClassName: es.VV,
                        },
                        color: g.$n.Colors.CUSTOM,
                        onClick: () => {
                            G.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: eu,
                                target: e_,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let ef = function () {
    let e = (0, S.H)(),
        { analyticsLocations: t } = (0, x.Ay)(C.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        l = (0, u.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
        s = (0, u.bG)([w.A], () => w.A.hasFetchedSubscriptions()),
        a = (0, I.Y)(en.T7),
        [o, p] = i.useState(!0),
        m = (0, T.A)({
            forceFetch: !0,
        }),
        g = (0, u.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        O = !(c.Fr || c.v1) && null != g,
        j = (0, u.bG)([D.A], () => D.A.enabled),
        v = i.useRef(null);
    (0, z.i)();
    let P = (0, K.m)();
    i.useEffect(() => {
        f.h.wait(async () => {
            j || e || (await Promise.all([b.hP(), b.$o(), (0, h.zS)(null, null, ei.tF5.DISCOVERY)])), p(!1);
        });
    }, [j, e]);
    let [R, M] = i.useState(!1);
    if (j) return (0, r.jsx)(E.A, {});
    if (e) return (0, r.jsx)(y.uK, {});
    let U = s && null !== l && a,
        k = m.fetched && m.isFractionalPremiumActive,
        B = null == n ? void 0 : n.isPremiumWithPremiumGroup();
    if (!U && !k && !o && !B)
        return (0, r.jsx)(N.A, {
            title: el.intl.string(el.t.dyq9TR),
            note: null,
        });
    if ((!U && !k && !B) || o) return (0, r.jsx)(A.y$y, {});
    let H = !!(null == l ? void 0 : l.hasActiveTrial);
    return (0, r.jsx)(x.f5, {
        value: t,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        O &&
                            (0, r.jsx)(eg, {
                                config: g,
                            }),
                        (0, r.jsx)(em, {}),
                        P &&
                            (0, r.jsx)(et.A, {
                                isInSettings: !0,
                            }),
                        !O && (0, r.jsx)(eA, {}),
                        (0, r.jsx)(ee.A, {
                            hideCTAs: !0,
                            headingOverride: el.intl.string(el.t.dnVvQS),
                            hidePill: !H,
                            selectedPlanColumnClassName: es.JG,
                            selectedPlanTier: en.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(_.L, {
                    innerRef: v,
                    onChange: (e) => {
                        e &&
                            !R &&
                            (G.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: t,
                            }),
                            M(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: v,
                        className: es._Z,
                    }),
                }),
            ],
        }),
    });
};
