n.d(t, { Z: () => et }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(927359),
    f = n(975298),
    _ = n(125529),
    p = n(78839),
    h = n(975104),
    m = n(63063),
    g = n(367074),
    E = n(775412),
    b = n(695349),
    y = n(47280),
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
    x = n(306066),
    L = n(123274),
    j = n(543581),
    M = n(184176),
    k = n(386733),
    U = n(474936),
    G = n(981631),
    B = n(388032),
    Z = n(644219),
    V = n(526980),
    F = n(872905),
    H = n(578478);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: l, shouldShowReferralProgressBar: c } = e,
            { headingText: u, headingTop: d, showPill: _ } = ee(),
            h = null;
        s
            ? (h = (0, r.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME }))
            : l
              ? (h = (0, r.jsx)(M.Z, {}))
              : c && (h = (0, r.jsx)(A._, {}));
        let m = (0, o.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
            g = (0, I.N)(),
            E = (0, v.Ng)(),
            b = (0, v.Wp)(E, U.Si.TIER_2) ? U.Si.TIER_2 : void 0,
            y = null != m && m.status !== G.O0b.ACCOUNT_HOLD && m.hasAnyPremiumNitro,
            O = (0, f.Z)().isFractionalPremiumActive && !y && null == h;
        return (0, r.jsxs)("div", {
            className: a()(V.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, r.jsx)(x.Z, { className: V.gradientBackground }),
                (0, r.jsxs)("div", {
                    className: V.content,
                    children: [
                        _ && d,
                        (0, r.jsx)("div", {
                            className: V.headerContainer,
                            children: (0, r.jsx)(L.Z, { children: u }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O ? V.twoButtonContainer : void 0,
                            children: [
                                O &&
                                    (0, r.jsx)(P.Z, {
                                        size: "md",
                                        hasActivePromotion: !!s,
                                        subscriptionTier:
                                            null !=
                                            (n = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : b,
                                    }),
                                (0, r.jsx)(R.Z, {
                                    variant: O ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: B.intl.string(B.t["3KomGR"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        });
    },
    X = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: c, headingTop: u } = ee(),
            d = (0, o.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
            _ = (0, I.N)(),
            h = (0, v.Ng)(),
            m = (0, v.Wp)(h, U.Si.TIER_2) ? U.Si.TIER_2 : void 0,
            g = null != d && d.status !== G.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
            E = (0, f.Z)().isFractionalPremiumActive && !g;
        return (0, r.jsxs)("div", {
            className: a()(Z.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, r.jsx)("img", {
                    src: F,
                    alt: "",
                    className: Z.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: Z.content,
                    children: [
                        u,
                        (0, r.jsx)(l.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: Z.header,
                            children: c,
                        }),
                        (0, r.jsxs)("div", {
                            className: Z.heroHeadingOriginalButtonContainer,
                            children: [
                                E &&
                                    (0, r.jsx)(N.Z, {
                                        color: s.Tt.BRAND,
                                        className: a()(Z.button, Z.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == _ || null == (t = _.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : m,
                                    }),
                                (0, r.jsx)("div", {
                                    className: Z.premiumSubscribeButton,
                                    children: (0, r.jsx)(C.Z, {
                                        look: s.iL.FILLED,
                                        color: s.Tt.BRAND,
                                        textOptions: { textOverride: B.intl.string(B.t["3KomGR"]) },
                                        className: Z.button,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    Q = () => {
        let { headingText: e, headingTop: t } = ee(),
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
                                  text: B.intl.string(B.t["3KomGR"]),
                                  icon: l.OgN,
                                  onClick: t,
                              });
                          },
                      })
                    : (0, r.jsx)(C.Z, {
                          look: s.iL.FILLED,
                          color: s.Tt.BRAND,
                          textOptions: { textOverride: B.intl.string(B.t["3KomGR"]) },
                          className: Z.button,
                      });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: H,
                    alt: "",
                    className: Z.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: Z.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: Z.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(l.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: Z.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: Z.premiumSubscribeButton,
                                children: i(),
                            }),
                            n.cohort === O.S$.Control
                                ? (0, r.jsx)(k.Z, {})
                                : (0, r.jsx)(A._, { className: Z.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    J = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = ee();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: H,
                    alt: "",
                    className: Z.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: Z.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: Z.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(l.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: Z.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Z.premiumSubscribeButton,
                            children: (0, r.jsx)(C.Z, {
                                look: s.iL.FILLED,
                                color: s.Tt.BRAND,
                                textOptions: { textOverride: B.intl.string(B.t["3KomGR"]) },
                                className: Z.button,
                            }),
                        }),
                        !t && (0, r.jsx)(M.Z, {}),
                        t && (0, r.jsx)(T.Z, { variant: T.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [$, ee] = (0, h.Z)(),
    et = (e) => {
        let { className: t, location: n } = e,
            i = (0, y.ZP)({ location: "HeroHeading" }),
            { analyticsLocations: o } = (0, u.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            s = (0, b.W)(),
            p = (0, g.Vi)(),
            h = (0, E._O)(),
            O = B.intl.string(B.t.qYKftb),
            v = (0, S.b)(n),
            I = (0, r.jsx)(X, { className: t }),
            T = B.intl.string(B.t.ifwQZW),
            { fractionalState: A, endsAt: C } = (0, f.Z)(),
            N = (0, d.ZP)(C, d.aj.CREDITS_ENDS_IN);
        s || p
            ? (I = (0, r.jsx)(J, { isEligibleForBogoPromotion: p }))
            : v && ((O = B.intl.string(B.t.qYKftb)), (I = (0, r.jsx)(Q, {})));
        let R = null;
        if (A === U.a$.NONE || s)
            R = i
                ? (0, r.jsx)(j.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: O,
                  })
                : (0, r.jsx)(D.Cy, {
                      className: a()(Z.trialPill, { [Z.hidden]: !h }),
                      text: O,
                      colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, r.jsx)("div", {
                    className: Z.pillIcon,
                    children: (0, r.jsx)(l.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = B.intl.format(B.t["yR+oDA"], { helpCenterLink: m.Z.getArticleURL(G.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            R = (0, r.jsx)(_.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: Z.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        z(W({}, t), {
                            className: Z.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: Z.flexCentered,
                                children: i
                                    ? (0, r.jsx)(j.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: N,
                                      })
                                    : (0, r.jsx)(D.mn, {
                                          className: a()(Z.trialPill, { [Z.hidden]: !h }),
                                          text: N,
                                          colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                                          icon: e,
                                          gap: !1,
                                      }),
                            }),
                        }),
                    ),
            });
        }
        return (0, r.jsx)(u.Gt, {
            value: o,
            children: (0, r.jsx)($.Provider, {
                value: {
                    headingText: T,
                    headingTop: R,
                    showPill: h,
                },
                children: i
                    ? (0, r.jsx)(q, {
                          isEligibleForBogoPromotion: p,
                          isInReverseTrial: s,
                          shouldShowReferralProgressBar: v,
                      })
                    : I,
            }),
        });
    };
