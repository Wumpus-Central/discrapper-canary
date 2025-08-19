n.d(t, { Z: () => J }), n(388685);
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(755721),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(927359),
    m = n(975298),
    p = n(125529),
    g = n(78839),
    h = n(975104),
    f = n(63063),
    b = n(367074),
    x = n(775412),
    _ = n(695349),
    j = n(47280),
    E = n(504692),
    C = n(104494),
    O = n(639119),
    v = n(8647),
    S = n(533525),
    T = n(647277),
    N = n(736519),
    I = n(784238),
    y = n(117791),
    A = n(638212),
    P = n(648613),
    R = n(382791),
    D = n(306066),
    Z = n(123274),
    w = n(543581),
    k = n(184176),
    L = n(386733),
    B = n(474936),
    M = n(981631),
    U = n(388032),
    V = n(644219),
    G = n(526980),
    F = n(872905),
    H = n(578478);
let z = (e) => {
        var t, n;
        let { className: r, isEligibleForBogoPromotion: l, isInReverseTrial: o, shouldShowReferralProgressBar: c } = e,
            { headingText: d, headingTop: u, showPill: p } = X(),
            h = null;
        l
            ? (h = (0, i.jsx)(v.Z, { variant: v.C.SUBSCRIBER_HOME }))
            : o
              ? (h = (0, i.jsx)(k.Z, {}))
              : c && (h = (0, i.jsx)(L.Z, {}));
        let f = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
            b = (0, O.N)(),
            x = (0, C.Ng)(),
            _ = (0, C.Wp)(x, B.Si.TIER_2) ? B.Si.TIER_2 : void 0,
            j = null != f && f.status !== M.O0b.ACCOUNT_HOLD && f.hasAnyPremiumNitro,
            E = (0, m.Z)().isFractionalPremiumActive && !j && null == h;
        return (0, i.jsxs)("div", {
            className: s()(G.container, r),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, i.jsx)(D.Z, { className: G.gradientBackground }),
                (0, i.jsxs)("div", {
                    className: G.content,
                    children: [
                        p && u,
                        (0, i.jsx)("div", {
                            className: G.headerContainer,
                            children: (0, i.jsx)(Z.Z, { children: d }),
                        }),
                        (0, i.jsxs)("div", {
                            className: E ? G.twoButtonContainer : void 0,
                            children: [
                                E &&
                                    (0, i.jsx)(A.Z, {
                                        size: "md",
                                        hasActivePromotion: !!l,
                                        subscriptionTier:
                                            null !=
                                            (n = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : _,
                                    }),
                                (0, i.jsx)(y.Z, {
                                    variant: E ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: U.intl.string(U.t["3KomGR"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        });
    },
    W = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: c, headingTop: d } = X(),
            u = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
            p = (0, O.N)(),
            h = (0, C.Ng)(),
            f = (0, C.Wp)(h, B.Si.TIER_2) ? B.Si.TIER_2 : void 0,
            b = null != u && u.status !== M.O0b.ACCOUNT_HOLD && u.hasAnyPremiumNitro,
            x = (0, m.Z)().isFractionalPremiumActive && !b;
        return (0, i.jsxs)("div", {
            className: s()(V.container, r),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, i.jsx)("img", {
                    src: F,
                    alt: "",
                    className: V.headerArt,
                }),
                (0, i.jsxs)("div", {
                    className: V.content,
                    children: [
                        d,
                        (0, i.jsx)(o.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: V.header,
                            children: c,
                        }),
                        (0, i.jsxs)("div", {
                            className: V.heroHeadingOriginalButtonContainer,
                            children: [
                                x &&
                                    (0, i.jsx)(I.Z, {
                                        color: l.Tt.BRAND,
                                        className: s()(V.button, V.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : f,
                                    }),
                                (0, i.jsx)("div", {
                                    className: V.premiumSubscribeButton,
                                    children: (0, i.jsx)(N.Z, {
                                        look: l.iL.FILLED,
                                        color: l.Tt.BRAND,
                                        textOptions: { textOverride: U.intl.string(U.t["3KomGR"]) },
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
    Y = () => {
        let { headingText: e, headingTop: t } = X(),
            n = E.ZP.useExperiment({ location: "HeroHeadingBodyV2" });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    src: H,
                    alt: "",
                    className: V.headerArtV2,
                }),
                (0, i.jsx)("div", {
                    className: V.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: V.contentV2,
                        children: [
                            t,
                            (0, i.jsx)(o.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: V.header,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: V.premiumSubscribeButton,
                                children:
                                    n.cohort === E.S$.Expressive
                                        ? (0, i.jsx)(P.Z, {
                                              isGift: !0,
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, i.jsx)(o.zxk, {
                                                      variant: "expressive",
                                                      size: "md",
                                                      text: U.intl.string(U.t["3KomGR"]),
                                                      icon: o.OgN,
                                                      onClick: t,
                                                  });
                                              },
                                          })
                                        : (0, i.jsx)(N.Z, {
                                              look: l.iL.FILLED,
                                              color: l.Tt.BRAND,
                                              textOptions: { textOverride: U.intl.string(U.t["3KomGR"]) },
                                              className: V.button,
                                          }),
                            }),
                            n.cohort === E.S$.Control ? (0, i.jsx)(L.Z, {}) : (0, i.jsx)(T._, {}),
                        ],
                    }),
                }),
            ],
        });
    },
    K = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: r } = X();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    src: H,
                    alt: "",
                    className: V.headerArtV2,
                }),
                (0, i.jsxs)("div", {
                    className: V.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)("div", {
                            className: V.reverseTrialHomeHeader,
                            children: [
                                r,
                                (0, i.jsx)(o.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: V.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: V.premiumSubscribeButton,
                            children: (0, i.jsx)(N.Z, {
                                look: l.iL.FILLED,
                                color: l.Tt.BRAND,
                                textOptions: { textOverride: U.intl.string(U.t["3KomGR"]) },
                                className: V.button,
                            }),
                        }),
                        !t && (0, i.jsx)(k.Z, {}),
                        t && (0, i.jsx)(v.Z, { variant: v.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [q, X] = (0, h.Z)(),
    J = (e) => {
        let { className: t, location: n } = e,
            r = (0, j.ZP)({ location: "HeroHeading" }),
            { analyticsLocations: a } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            g = (0, b.Vi)(),
            h = (0, x._O)(),
            E = U.intl.string(U.t.qYKftb),
            C = (0, S.b)(n),
            O = (0, i.jsx)(W, { className: t }),
            v = U.intl.string(U.t.ifwQZW),
            { fractionalState: T, endsAt: N } = (0, m.Z)(),
            I = (0, u.ZP)(N, u.aj.CREDITS_ENDS_IN);
        l || g
            ? (O = (0, i.jsx)(K, { isEligibleForBogoPromotion: g }))
            : C && ((E = U.intl.string(U.t.qYKftb)), (O = (0, i.jsx)(Y, {})));
        let y = null;
        if (T === B.a$.NONE || l)
            y = r
                ? (0, i.jsx)(w.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: E,
                  })
                : (0, i.jsx)(R.Cy, {
                      className: s()(V.trialPill, { [V.hidden]: !h }),
                      text: E,
                      colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, i.jsx)("div", {
                    className: V.pillIcon,
                    children: (0, i.jsx)(o.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = U.intl.format(U.t["yR+oDA"], { helpCenterLink: f.Z.getArticleURL(M.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            y = (0, i.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: V.tooltip,
                position: "right",
                children: (t) => {
                    var n, a;
                    return (0, i.jsx)(
                        "div",
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (a = a =
                            {
                                className: V.pillContainer,
                                children: (0, i.jsx)("div", {
                                    className: V.flexCentered,
                                    children: r
                                        ? (0, i.jsx)(w.Z, {
                                              enablePremiumBrandRefresh: !0,
                                              text: I,
                                          })
                                        : (0, i.jsx)(R.mn, {
                                              className: s()(V.trialPill, { [V.hidden]: !h }),
                                              text: I,
                                              colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
                                              icon: e,
                                              gap: !1,
                                          }),
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        n),
                    );
                },
            });
        }
        return (0, i.jsx)(d.Gt, {
            value: a,
            children: (0, i.jsx)(q.Provider, {
                value: {
                    headingText: v,
                    headingTop: y,
                    showPill: h,
                },
                children: r
                    ? (0, i.jsx)(z, {
                          isEligibleForBogoPromotion: g,
                          isInReverseTrial: l,
                          shouldShowReferralProgressBar: C,
                      })
                    : O,
            }),
        });
    };
