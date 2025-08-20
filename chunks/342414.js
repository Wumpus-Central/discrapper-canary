n.d(t, { Z: () => ei }), n(388685);
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
    O = n(47280),
    v = n(504692),
    I = n(104494),
    T = n(639119),
    S = n(8647),
    A = n(533525),
    C = n(647277),
    N = n(736519),
    R = n(784238),
    P = n(117791),
    w = n(638212),
    D = n(648613),
    x = n(382791),
    L = n(164662),
    j = n(306066),
    M = n(123274),
    k = n(543581),
    U = n(84804),
    G = n(184176),
    B = n(386733),
    Z = n(474936),
    V = n(981631),
    F = n(388032),
    H = n(644219),
    Y = n(526980),
    W = n(872905),
    K = n(578478);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = (e) => {
        var t, n;
        let { className: i, isEligibleForBogoPromotion: s, isInReverseTrial: l, shouldShowReferralProgressBar: u } = e,
            { headingText: d, headingTop: f, showPill: p } = er(),
            m = v.ZP.useExperiment({ location: "PremiumBrandRefreshHeadingBody" }),
            g = null;
        s
            ? (g = (0, r.jsx)(S.Z, { variant: S.C.SUBSCRIBER_HOME }))
            : l
              ? (g = (0, r.jsx)(G.Z, {}))
              : u && (g = m.cohort === v.S$.Control ? (0, r.jsx)(B.Z, {}) : (0, r.jsx)(C._, {}));
        let E = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            b = (0, T.N)(),
            y = (0, I.Ng)(),
            O = (0, I.Wp)(y, Z.Si.TIER_2) ? Z.Si.TIER_2 : void 0,
            A = null != E && E.status !== V.O0b.ACCOUNT_HOLD && E.hasAnyPremiumNitro,
            N = (0, _.Z)().isFractionalPremiumActive && !A && null == g,
            R = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: x } = (0, L.E)(!R);
        return (0, r.jsxs)("div", {
            className: a()(Y.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, r.jsx)(j.Z, { className: Y.gradientBackground }),
                (0, r.jsxs)("div", {
                    className: Y.content,
                    ref: D,
                    children: [
                        p && f,
                        (0, r.jsxs)("div", {
                            className: Y.headerContainer,
                            children: [
                                (0, r.jsx)(U.Z, { containerVisibilityPercentage: x }),
                                (0, r.jsx)(M.Z, { children: d }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: N ? Y.twoButtonContainer : void 0,
                            children: [
                                N &&
                                    (0, r.jsx)(w.Z, {
                                        size: "md",
                                        hasActivePromotion: !!s,
                                        subscriptionTier:
                                            null !=
                                            (n = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : O,
                                    }),
                                (0, r.jsx)(P.Z, {
                                    variant: N ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: F.intl.string(F.t["3KomGR"]),
                                }),
                            ],
                        }),
                        g,
                    ],
                }),
            ],
        });
    },
    $ = (e) => {
        var t, n;
        let { className: i } = e,
            { headingText: c, headingTop: u } = er(),
            d = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            f = (0, T.N)(),
            p = (0, I.Ng)(),
            m = (0, I.Wp)(p, Z.Si.TIER_2) ? Z.Si.TIER_2 : void 0,
            g = null != d && d.status !== V.O0b.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
            E = (0, _.Z)().isFractionalPremiumActive && !g;
        return (0, r.jsxs)("div", {
            className: a()(H.container, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, r.jsx)("img", {
                    src: W,
                    alt: "",
                    className: H.headerArt,
                }),
                (0, r.jsxs)("div", {
                    className: H.content,
                    children: [
                        u,
                        (0, r.jsx)(l.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: H.header,
                            children: c,
                        }),
                        (0, r.jsxs)("div", {
                            className: H.heroHeadingOriginalButtonContainer,
                            children: [
                                E &&
                                    (0, r.jsx)(R.Z, {
                                        color: s.Tt.BRAND,
                                        className: a()(H.button, H.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == f || null == (t = f.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : m,
                                    }),
                                (0, r.jsx)("div", {
                                    className: H.premiumSubscribeButton,
                                    children: (0, r.jsx)(N.Z, {
                                        look: s.iL.FILLED,
                                        color: s.Tt.BRAND,
                                        textOptions: { textOverride: F.intl.string(F.t["3KomGR"]) },
                                        className: H.button,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    ee = () => {
        let { headingText: e, headingTop: t } = er(),
            n = v.ZP.useExperiment({ location: "HeroHeadingBodyV2" }),
            i = () =>
                n.cohort === v.S$.Expressive
                    ? (0, r.jsx)(D.Z, {
                          isGift: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(l.zxk, {
                                  variant: "expressive",
                                  size: "md",
                                  text: F.intl.string(F.t["3KomGR"]),
                                  icon: l.OgN,
                                  onClick: t,
                              });
                          },
                      })
                    : (0, r.jsx)(N.Z, {
                          look: s.iL.FILLED,
                          color: s.Tt.BRAND,
                          textOptions: { textOverride: F.intl.string(F.t["3KomGR"]) },
                          className: H.button,
                      });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: K,
                    alt: "",
                    className: H.headerArtV2,
                }),
                (0, r.jsx)("div", {
                    className: H.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, r.jsxs)("div", {
                        className: H.contentV2,
                        children: [
                            t,
                            (0, r.jsx)(l.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: H.header,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: H.premiumSubscribeButton,
                                children: i(),
                            }),
                            n.cohort === v.S$.Control
                                ? (0, r.jsx)(B.Z, {})
                                : (0, r.jsx)(C._, { className: H.referralBanner }),
                        ],
                    }),
                }),
            ],
        });
    },
    et = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: i } = er();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    src: K,
                    alt: "",
                    className: H.headerArtV2,
                }),
                (0, r.jsxs)("div", {
                    className: H.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.reverseTrialHomeHeader,
                            children: [
                                i,
                                (0, r.jsx)(l.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: H.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: H.premiumSubscribeButton,
                            children: (0, r.jsx)(N.Z, {
                                look: s.iL.FILLED,
                                color: s.Tt.BRAND,
                                textOptions: { textOverride: F.intl.string(F.t["3KomGR"]) },
                                className: H.button,
                            }),
                        }),
                        !t && (0, r.jsx)(G.Z, {}),
                        t && (0, r.jsx)(S.Z, { variant: S.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [en, er] = (0, m.Z)(),
    ei = (e) => {
        let { className: t, location: n } = e,
            i = (0, O.ZP)({ location: "HeroHeading" }),
            { analyticsLocations: o } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            s = (0, y.W)(),
            c = (0, E.Vi)(),
            h = (0, b._O)(),
            m = F.intl.string(F.t.qYKftb),
            v = (0, A.b)(n),
            I = (0, r.jsx)($, { className: t }),
            T = F.intl.string(F.t.ifwQZW),
            { fractionalState: S, endsAt: C } = (0, _.Z)(),
            N = (0, f.ZP)(C, f.aj.CREDITS_ENDS_IN);
        s || c
            ? (I = (0, r.jsx)(et, { isEligibleForBogoPromotion: c }))
            : v && ((m = F.intl.string(F.t.qYKftb)), (I = (0, r.jsx)(ee, {})));
        let R = null;
        if (S === Z.a$.NONE || s)
            R = i
                ? (0, r.jsx)(k.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: m,
                  })
                : (0, r.jsx)(x.Cy, {
                      className: a()(H.trialPill, { [H.hidden]: !h }),
                      text: m,
                      colorOptions: x.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, r.jsx)("div", {
                    className: H.pillIcon,
                    children: (0, r.jsx)(l.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = F.intl.format(F.t["yR+oDA"], { helpCenterLink: g.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            R = (0, r.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: H.tooltip,
                position: "right",
                children: (t) =>
                    (0, r.jsx)(
                        "div",
                        Q(q({}, t), {
                            className: H.pillContainer,
                            children: (0, r.jsx)("div", {
                                className: H.flexCentered,
                                children: i
                                    ? (0, r.jsx)(k.Z, {
                                          enablePremiumBrandRefresh: !0,
                                          text: N,
                                      })
                                    : (0, r.jsx)(x.mn, {
                                          className: a()(H.trialPill, { [H.hidden]: !h }),
                                          text: N,
                                          colorOptions: x.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            children: (0, r.jsx)(en.Provider, {
                value: {
                    headingText: T,
                    headingTop: R,
                    showPill: h,
                },
                children: i
                    ? (0, r.jsx)(J, {
                          isEligibleForBogoPromotion: c,
                          isInReverseTrial: s,
                          shouldShowReferralProgressBar: v,
                      })
                    : I,
            }),
        });
    };
