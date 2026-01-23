n.d(t, {
    A: () => eE,
    c: () => em,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(877624),
    u = n(311907),
    d = n(230109),
    f = n(732955),
    p = n(582754),
    _ = n(421380),
    h = n(397927),
    m = n(73153),
    g = n(384904),
    E = n(73825),
    y = n(974544),
    b = n(736653),
    O = n(793574),
    v = n(688810),
    A = n(86379),
    I = n(531260),
    S = n(160946),
    T = n(459793),
    C = n(721668),
    N = n(976860),
    w = n(780964),
    R = n(12901),
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
    B = n(810498),
    H = n(807098),
    Y = n(412260),
    W = n(103411),
    K = n(190187),
    z = n(194509),
    q = n(65470),
    Z = n(857586),
    X = n(795269),
    Q = n(501007),
    J = n(156601),
    $ = n(244778),
    ee = n(659533),
    et = n(788868),
    en = n(88001),
    er = n(652215),
    ei = n(985018),
    ea = n(95252),
    es = n(396785),
    eo = n(956537);
let el = "to_subscriptions_button",
    ec = "subscriptions settings",
    eu = "to_premium_home_button",
    ed = "premium home page",
    ef = "gifting_button",
    ep = "payment modal";

function e_(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: a } = e,
        s = t.hasActiveTrial,
        o = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2,
        c = n || s,
        u = null != t.trialEndsAt ? l()(t.trialEndsAt).diff(l()(), "d") : 0,
        d = et.hd[t.planIdFromItems],
        f = U.Ay.formatPriceString(U.Ay.getDefaultPrice(d.id), d.interval),
        { enabled: _ } = F.K.getCurrentConfig({
            location: "SubscriptionUserHeroSubheader",
        }),
        m = () => {
            var e, t, n;
            return _
                ? ""
                : s
                  ? ei.intl.format(ei.t["2CGBri"], {
                        remainingTime: u,
                        price: f,
                    })
                  : o
                    ? ei.intl.format(ei.t["+qqh6g"], {
                          percent: null != (e = null == i ? void 0 : i.percentage) ? e : et.Cq,
                          regularPrice: f,
                      })
                    : ei.intl.formatToPlainString(ei.t["3ZiutU"], {
                          percent: null != (t = null == i ? void 0 : i.percentage) ? t : et._$,
                          regularPrice: f,
                          numMonths: null != (n = null == i ? void 0 : i.duration) ? n : et.OJ,
                      });
        };
    return c
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (s || !o) &&
                      (0, r.jsx)(X.ir, {
                          text: s ? ei.intl.string(ei.t.qYKftX) : ei.intl.string(ei.t.EyjDRE),
                          className: ea.uS,
                          colorOptions: (0, p.Mw)(a)
                              ? X.at.PREMIUM_TIER_2_WHITE_FILL
                              : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                      }),
                  (s || !o) &&
                      (0, r.jsx)("div", {
                          className: ea.on,
                      }),
                  (0, r.jsx)(h.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: ea.KB,
                      children: m(),
                  }),
              ],
          })
        : _
          ? (0, r.jsx)("div", {
                style: {
                    marginBottom: "18px",
                },
            })
          : (0, r.jsx)(J.A, {
                variant: void 0,
                subscriptionTier: et.pe.TIER_2,
                interval: d.interval,
            });
}

function eh() {
    let e = (0, G.k5)(),
        t = (0, G.nf)(),
        n = (0, b.Ay)(),
        i = (0, u.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        a = (0, u.bG)([x.default], () => x.default.getCurrentUser()),
        o = null == a ? void 0 : a.isPremiumWithPremiumGroup(),
        l = (0, I.A)(),
        c = (0, V.d)(),
        d = null !== i && null !== i.planIdFromItems;
    if (!d && !l.isFractionalPremiumActive && !o) return null;
    let _ = l.isFractionalPremiumActive,
        m = null !== i && i.hasActiveTrial,
        g = e || m,
        E = () =>
            (null == a ? void 0 : a.isPremiumGroupPrimary())
                ? Q.Nz.PREMIUM_GROUP_PRIMARY
                : (null == a ? void 0 : a.isPremiumGroupMember())
                  ? Q.Nz.PREMIUM_GROUP_MEMBER
                  : _
                    ? Q.Nz.FRACTIONAL_PREMIUM
                    : Q.Nz.DEFAULT,
        y = () =>
            o
                ? (0, r.jsx)(h.Heading, {
                      variant: "display-md",
                      color: "always-white",
                      className: ea._K,
                      children: (0, en.DP)(),
                  })
                : (0, r.jsx)(j.A, {
                      className: ea.TJ,
                  }),
        O = () =>
            o
                ? (0, r.jsx)("div", {
                      style: {
                          marginBottom: "18px",
                      },
                  })
                : _ && !c
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(X.R, {
                                text: ei.intl.string(ei.t.uXF4c4),
                                className: ea.rd,
                                colorOptions: X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                            }),
                            (0, r.jsx)(h.Heading, {
                                variant: "heading-md/normal",
                                color: "always-white",
                                className: ea.sQ,
                                children: ei.intl.format(ei.t.sK7fGl, {
                                    helpCenterLink: k.A.getArticleURL(er.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                }),
                            }),
                        ],
                    })
                  : d
                    ? (0, r.jsx)(e_, {
                          premiumSubscription: i,
                          isDiscountApplied: e,
                          activeDiscountInfo: t,
                          theme: n,
                      })
                    : c
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(X.ir, {
                                    text: ei.intl.string(ei.t.qYKftX),
                                    className: ea.uS,
                                    colorOptions: (0, p.Mw)(n)
                                        ? X.at.PREMIUM_TIER_2_WHITE_FILL
                                        : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                }),
                                (0, r.jsx)(h.Heading, {
                                    variant: "heading-md/normal",
                                    color: "always-white",
                                    className: ea.KB,
                                    children: ei.intl.format(ei.t["/SfHwl"], {
                                        weeks: 1,
                                    }),
                                }),
                            ],
                        })
                      : null,
        v = () =>
            _ && !d
                ? (0, r.jsxs)(f.e2v, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(Z.A, {
                              defaultTextOverride: c ? ei.intl.string(ei.t.YScQSF) : ei.intl.string(ei.t["0b3YRn"]),
                          }),
                          (0, r.jsx)(f.$nd, {
                              onClick: () => {
                                  M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eu,
                                      target: ed,
                                  }),
                                      (0, R.default)(),
                                      (0, N.pX)(er.BVt.APPLICATION_STORE);
                              },
                              variant: "overlay-secondary",
                              fullWidth: !0,
                              size: "md",
                              text: c ? ei.intl.string(ei.t.VR2iVB) : ei.intl.string(ei.t.T1aUAX),
                          }),
                      ],
                  })
                : (0, r.jsxs)(f.e2v, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          (0, r.jsx)(f.$nd, {
                              variant: "overlay-primary",
                              fullWidth: !0,
                              onClick: () => {
                                  M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: eu,
                                      target: ed,
                                  }),
                                      (0, R.default)(),
                                      (0, N.pX)(er.BVt.APPLICATION_STORE);
                              },
                              text: ei.intl.string(ei.t.VR2iVB),
                              size: "md",
                          }),
                          (0, r.jsx)(f.$nd, {
                              variant: "overlay-secondary",
                              onClick: () => {
                                  M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: el,
                                      target: ec,
                                  }),
                                      (0, P.openUserSettings)(w.X.SUBSCRIPTIONS_PANEL, {
                                          section: er.nc_.SUBSCRIPTIONS,
                                      });
                              },
                              text: ei.intl.string(ei.t["9uDy6C"]),
                              fullWidth: !0,
                              size: "md",
                          }),
                      ],
                  });
    return (0, r.jsxs)("div", {
        className: s()(ea.$Y, {
            [ea.J5]: g,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: ea.jp,
                children: [
                    y(),
                    O(),
                    (0, r.jsx)(Q.ZP, {
                        featureSet: E(),
                    }),
                    v(),
                ],
            }),
            (0, r.jsx)("div", {
                className: ea.ah,
                children: (0, r.jsx)("img", {
                    className: ea.ah,
                    alt: "",
                    src: es,
                }),
            }),
        ],
    });
}

function em(e) {
    let { className: t, config: n } = e,
        a = (0, H.T)(n.asset),
        o = (0, H.T)(n.backgroundAsset),
        l = (0, B.gc)(null != o ? o : void 0),
        c = i.useMemo(() => {
            let e = n.gradient;
            if (null != e && null != e.colors && !(e.colors.length < 2))
                return (0, B.K5)(
                    {
                        gradient: e.colors,
                        angle: e.angle,
                    },
                    {
                        defaultAngle: 180,
                    },
                );
        }, [n.gradient]),
        u = (0, B.x)(l, c),
        d = {
            color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)",
        };
    return (0, r.jsxs)("div", {
        className: s()(ea.WR, t),
        style: u,
        children: [
            null != a &&
                (0, r.jsx)("img", {
                    alt: "",
                    className: ea.TB,
                    "aria-hidden": !0,
                    src: a,
                }),
            (0, r.jsxs)("div", {
                className: ea.QT,
                children: [
                    (0, r.jsx)(h.Heading, {
                        className: ea.u_,
                        style: d,
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, r.jsx)(h.Text, {
                        className: ea.Oi,
                        style: d,
                        variant: "text-xs/medium",
                        children: n.body,
                    }),
                    null != n.additionalTerms &&
                        (0, r.jsx)(h.Text, {
                            className: ea.KW,
                            style: d,
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, r.jsx)(q.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ef,
                                target: ep,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}

function eg() {
    return (0, r.jsxs)("div", {
        className: ea.T1,
        children: [
            (0, r.jsx)("img", {
                className: ea.GY,
                alt: "",
                src: eo,
            }),
            (0, r.jsxs)("div", {
                className: ea.b4,
                children: [
                    (0, r.jsx)(h.Heading, {
                        className: ea.Vz,
                        variant: "heading-xl/extrabold",
                        children: ei.intl.string(ei.t["3KomGa"]),
                    }),
                    (0, r.jsx)(h.Text, {
                        className: ea.Oi,
                        variant: "text-sm/normal",
                        children: ei.intl.string(ei.t.yQ06u1),
                    }),
                    (0, r.jsx)(z.A, {
                        className: s()(ea.Tp, ea._c),
                        textOptions: {
                            textOverride: ei.intl.string(ei.t.Ve9Ge6),
                            textClassName: ea.VV,
                        },
                        color: _.$n.Colors.CUSTOM,
                        onClick: () => {
                            M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: ef,
                                target: ep,
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let eE = function () {
    let e = (0, A.H)(),
        { analyticsLocations: t } = (0, v.Ay)(O.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([x.default], () => x.default.getCurrentUser()),
        a = (0, u.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        s = (0, u.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
        o = (0, S.Y)(et.T7),
        [l, f] = i.useState(!0),
        p = (0, I.A)({
            forceFetch: !0,
        }),
        _ = (0, u.bG)([Y.A], () => {
            let e = Y.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.billingSettingsNitroGiftBanner;
        }),
        b = (0, u.bG)([D.A], () => D.A.enabled),
        N = i.useRef(null);
    (0, K.i)();
    let w = (0, W.m)();
    i.useEffect(() => {
        m.h.wait(async () => {
            b || e || (await Promise.all([g.hP(), g.$o(), (0, E.zS)(null, null, er.tF5.DISCOVERY)])), f(!1);
        });
    }, [b, e]);
    let [R, P] = i.useState(!1);
    if (b) return (0, r.jsx)(y.A, {});
    if (e) return (0, r.jsx)(T.uK, {});
    let j = s && null !== a && o,
        k = p.fetched && p.isFractionalPremiumActive,
        U = null == n ? void 0 : n.isPremiumWithPremiumGroup();
    if (!j && !k && !l && !U)
        return (0, r.jsx)(C.A, {
            title: ei.intl.string(ei.t.dyq9TR),
            note: null,
        });
    if ((!j && !k && !U) || l) return (0, r.jsx)(h.y$y, {});
    let G = !!(null == a ? void 0 : a.hasActiveTrial);
    return (0, r.jsx)(v.f5, {
        value: t,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        null != _ &&
                            (0, r.jsx)(em, {
                                config: _,
                            }),
                        (0, r.jsx)(eh, {}),
                        w &&
                            (0, r.jsx)(ee.A, {
                                isInSettings: !0,
                            }),
                        null == _ && (0, r.jsx)(eg, {}),
                        (0, r.jsx)($.A, {
                            hideCTAs: !0,
                            headingOverride: ei.intl.string(ei.t.dnVvQS),
                            hidePill: !G,
                            selectedPlanColumnClassName: ea.JG,
                            selectedPlanTier: et.PremiumTypes.TIER_2,
                        }),
                    ],
                }),
                (0, r.jsx)(d.L, {
                    innerRef: N,
                    onChange: (e) => {
                        e &&
                            !R &&
                            (M.default.track(er.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: t,
                            }),
                            P(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: N,
                        className: ea._Z,
                    }),
                }),
            ],
        }),
    });
};
