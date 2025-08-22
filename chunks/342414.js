n.d(t, { Z: () => en }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(906732),
    f = n(927359),
    _ = n(975298),
    p = n(125529),
    h = n(78839),
    m = n(975104),
    g = n(63063),
    E = n(367074),
    b = n(775412),
    y = n(695349),
    O = n(504692),
    v = n(104494),
    I = n(639119),
    T = n(8647),
    S = n(533525),
    A = n(647277),
    C = n(736519),
    N = n(784238),
    R = n(117791),
    P = n(638212),
    w = n(648613),
    D = n(382791),
    x = n(175418),
    L = n(164662),
    j = n(543581),
    M = n(84804),
    k = n(184176),
    U = n(386733),
    G = n(474936),
    B = n(981631),
    Z = n(388032),
    V = n(644219),
    F = n(526980),
    H = n(872905),
    Y = n(578478);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: l, shouldShowReferralProgressBar: u } = e,
            { headingText: d, headingTop: f, showPill: p } = et(),
            m = O.ZP.useExperiment({ location: "PremiumBrandRefreshHeadingBody" }),
            g = null;
        s
            ? (g = (0, r.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME }))
            : l
              ? (g = (0, r.jsx)(k.Z, {}))
              : u && (g = m.cohort === O.S$.Control ? (0, r.jsx)(U.Z, {}) : (0, r.jsx)(A._, {}));
        let E = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            b = (0, I.N)(),
            y = (0, v.Ng)(),
            S = (0, v.Wp)(y, G.Si.TIER_2) ? G.Si.TIER_2 : void 0,
            C = null != E && E.status !== B.O0b.ACCOUNT_HOLD && E.hasAnyPremiumNitro,
            N = (0, _.Z)().isFractionalPremiumActive && !C && null == g,
            w = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: j } = (0, L.E)(!w);
        return (0, r.jsx)("div", {
            className: a()(F.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: (0, r.jsxs)("div", {
                className: F.content,
                ref: D,
                children: [
                    p && f,
                    (0, r.jsxs)("div", {
                        className: F.headerContainer,
                        children: [
                            (0, r.jsx)(M.Z, { containerVisibilityPercentage: j }),
                            (0, r.jsx)(x.Z, { children: d }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: N ? F.twoButtonContainer : void 0,
                        children: [
                            N &&
                                (0, r.jsx)(P.Z, {
                                    size: "md",
                                    hasActivePromotion: !!s,
                                    subscriptionTier:
                                        null !=
                                        (n = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id)
                                            ? n
                                            : S,
                                }),
                            (0, r.jsx)(R.Z, {
                                variant: N ? "secondary" : "expressive",
                                size: "md",
                                buttonTextOverride: Z.intl.string(Z.t["3KomGR"]),
                            }),
                        ],
                    }),
                    g,
                ],
            }),
        });
    },
    Q = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: c, headingTop: u } = et(),
            d = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            f = (0, I.N)(),
            p = (0, v.Ng)(),
            m = (0, v.Wp)(p, G.Si.TIER_2) ? G.Si.TIER_2 : void 0,
            g = null != d && d.status !== B.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
            E = (0, _.Z)().isFractionalPremiumActive && !g;
        return (0, r.jsxs)("div", {
            className: a()(V.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, r.jsx)("img", {
                    src: H,
                    alt: "",
                    className: V.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: V.content,
                    children: [
                        u,
                        (0, r.jsx)(l.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: V.header,
                            children: c,
                        }),
                        (0, r.jsxs)("div", {
                            className: V.heroHeadingOriginalButtonContainer,
                            children: [
                                E &&
                                    (0, r.jsx)(N.Z, {
                                        color: s.Tt.BRAND,
                                        className: a()(V.button, V.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : m,
                                    }),
                                (0, r.jsx)("div", {
                                    className: V.premiumSubscribeButton,
                                    children: (0, r.jsx)(C.Z, {
                                        look: s.iL.FILLED,
                                        color: s.Tt.BRAND,
                                        textOptions: { textOverride: Z.intl.string(Z.t["3KomGR"]) },
                                        className: V.button,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    J = () => {
        let { headingText: e, headingTop: t } = et(),
            n = O.ZP.useExperiment({ location: "HeroHeadingBodyV2" }),
            i = () =>
                n.cohort === O.S$.Expressive
                    ? (0, r.jsx)(w.Z, {
                          isGift: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(l.zxk, {
                                  variant: "expressive",
                                  size: "md",
                                  text: Z.intl.string(Z.t["3KomGR"]),
                                  icon: l.OgN,
                                  onClick: t,
                              });
                          },
                      })
                    : (0, r.jsx)(C.Z, {
                          look: s.iL.FILLED,
                          color: s.Tt.BRAND,
                          textOptions: { textOverride: Z.intl.string(Z.t["3KomGR"]) },
                          className: V.button,
                      });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: Y,
                    alt: "",
                    className: V.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: V.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: V.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(l.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: V.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: V.premiumSubscribeButton,
                                children: i(),
                            }),
                            n.cohort === O.S$.Control
                                ? (0, r.jsx)(U.Z, {})
                                : (0, r.jsx)(A._, { className: V.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = et();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: Y,
                    alt: "",
                    className: V.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: V.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: V.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(l.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: V.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: V.premiumSubscribeButton,
                            children: (0, r.jsx)(C.Z, {
                                look: s.iL.FILLED,
                                color: s.Tt.BRAND,
                                textOptions: { textOverride: Z.intl.string(Z.t["3KomGR"]) },
                                className: V.button,
                            }),
                        }),
                        !t && (0, r.jsx)(k.Z, {}),
                        t && (0, r.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [ee, et] = (0, m.Z)(),
    en = (e) => {
        let { className: t, location: n, enablePremiumBrandRefresh: i } = e,
            { analyticsLocations: o } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            s = (0, y.W)(),
            c = (0, E.Vi)(),
            h = (0, b._O)(),
            m = Z.intl.string(Z.t.qYKftb),
            O = (0, S.b)(n),
            v = (0, r.jsx)(Q, { className: t }),
            I = Z.intl.string(Z.t.ifwQZW),
            { fractionalState: T, endsAt: A } = (0, _.Z)(),
            C = (0, f.ZP)(A, f.aj.CREDITS_ENDS_IN);
        s || c
            ? (v = (0, r.jsx)($, { isEligibleForBogoPromotion: c }))
            : O && ((m = Z.intl.string(Z.t.qYKftb)), (v = (0, r.jsx)(J, {})));
        let N = null;
        if (T === G.a$.NONE || s)
            N = i
                ? (0, r.jsx)(j.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: m,
                  })
                : (0, r.jsx)(D.Cy, {
                      className: a()(V.trialPill, { [V.hidden]: !h }),
                      text: m,
                      colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, r.jsx)("div", {
                    className: V.pillIcon,
                    children: (0, r.jsx)(l.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = Z.intl.format(Z.t["yR+oDA"], { helpCenterLink: g.Z.getArticleURL(B.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            N = (0, r.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: V.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        q(K({}, t), {
                            className: V.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: V.flexCentered,
                                children: i
                                    ? (0, r.jsx)(j.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: C,
                                      })
                                    : (0, r.jsx)(D.mn, {
                                          className: a()(V.trialPill, { [V.hidden]: !h }),
                                          text: C,
                                          colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(d.Gt, {
            value: o,
            children: (0, r.jsx)(ee.Provider, {
                value: {
                    headingText: I,
                    headingTop: N,
                    showPill: h,
                },
                children: i
                    ? (0, r.jsx)(X, {
                          isEligibleForBogoPromotion: c,
                          isInReverseTrial: s,
                          shouldShowReferralProgressBar: O,
                      })
                    : v,
            }),
        });
    };
