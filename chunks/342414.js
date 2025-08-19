n.d(t, { Z: () => K }), n(388685);
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
    E = n(104494),
    C = n(639119),
    O = n(8647),
    v = n(533525),
    S = n(736519),
    T = n(784238),
    N = n(117791),
    I = n(638212),
    y = n(382791),
    A = n(306066),
    P = n(123274),
    R = n(543581),
    D = n(184176),
    Z = n(386733),
    w = n(474936),
    k = n(981631),
    L = n(388032),
    B = n(644219),
    M = n(526980),
    U = n(872905),
    V = n(578478);
let G = (e) => {
        var t, n;
        let { className: r, isEligibleForBogoPromotion: l, isInReverseTrial: o, shouldShowReferralProgressBar: c } = e,
            { headingText: d, headingTop: u, showPill: p } = Y(),
            h = null;
        l
            ? (h = (0, i.jsx)(O.Z, { variant: O.C.SUBSCRIBER_HOME }))
            : o
              ? (h = (0, i.jsx)(D.Z, {}))
              : c && (h = (0, i.jsx)(Z.Z, {}));
        let f = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
            b = (0, C.N)(),
            x = (0, E.Ng)(),
            _ = (0, E.Wp)(x, w.Si.TIER_2) ? w.Si.TIER_2 : void 0,
            j = null != f && f.status !== k.O0b.ACCOUNT_HOLD && f.hasAnyPremiumNitro,
            v = (0, m.Z)().isFractionalPremiumActive && !j && null == h;
        return (0, i.jsxs)("div", {
            className: s()(M.container, r),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, i.jsx)(A.Z, { className: M.gradientBackground }),
                (0, i.jsxs)("div", {
                    className: M.content,
                    children: [
                        p && u,
                        (0, i.jsx)("div", {
                            className: M.headerContainer,
                            children: (0, i.jsx)(P.Z, { children: d }),
                        }),
                        (0, i.jsxs)("div", {
                            className: v ? M.twoButtonContainer : void 0,
                            children: [
                                v &&
                                    (0, i.jsx)(I.Z, {
                                        size: "md",
                                        hasActivePromotion: !!l,
                                        subscriptionTier:
                                            null !=
                                            (n = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : _,
                                    }),
                                (0, i.jsx)(N.Z, {
                                    variant: v ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: L.intl.string(L.t["3KomGR"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        });
    },
    F = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: c, headingTop: d } = Y(),
            u = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
            p = (0, C.N)(),
            h = (0, E.Ng)(),
            f = (0, E.Wp)(h, w.Si.TIER_2) ? w.Si.TIER_2 : void 0,
            b = null != u && u.status !== k.O0b.ACCOUNT_HOLD && u.hasAnyPremiumNitro,
            x = (0, m.Z)().isFractionalPremiumActive && !b;
        return (0, i.jsxs)("div", {
            className: s()(B.container, r),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, i.jsx)("img", {
                    src: U,
                    alt: "",
                    className: B.headerArt,
                }),
                (0, i.jsxs)("div", {
                    className: B.content,
                    children: [
                        d,
                        (0, i.jsx)(o.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: B.header,
                            children: c,
                        }),
                        (0, i.jsxs)("div", {
                            className: B.heroHeadingOriginalButtonContainer,
                            children: [
                                x &&
                                    (0, i.jsx)(T.Z, {
                                        color: l.Tt.BRAND,
                                        className: s()(B.button, B.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : f,
                                    }),
                                (0, i.jsx)("div", {
                                    className: B.premiumSubscribeButton,
                                    children: (0, i.jsx)(S.Z, {
                                        look: l.iL.FILLED,
                                        color: l.Tt.BRAND,
                                        textOptions: { textOverride: L.intl.string(L.t["3KomGR"]) },
                                        className: B.button,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    H = () => {
        let { headingText: e, headingTop: t } = Y();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    src: V,
                    alt: "",
                    className: B.headerArtV2,
                }),
                (0, i.jsx)("div", {
                    className: B.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: B.contentV2,
                        children: [
                            t,
                            (0, i.jsx)(o.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: B.header,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: B.premiumSubscribeButton,
                                children: (0, i.jsx)(S.Z, {
                                    look: l.iL.FILLED,
                                    color: l.Tt.BRAND,
                                    textOptions: { textOverride: L.intl.string(L.t["3KomGR"]) },
                                    className: B.button,
                                }),
                            }),
                            (0, i.jsx)(Z.Z, {}),
                        ],
                    }),
                }),
            ],
        });
    },
    z = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: r } = Y();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    src: V,
                    alt: "",
                    className: B.headerArtV2,
                }),
                (0, i.jsxs)("div", {
                    className: B.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)("div", {
                            className: B.reverseTrialHomeHeader,
                            children: [
                                r,
                                (0, i.jsx)(o.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: B.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: B.premiumSubscribeButton,
                            children: (0, i.jsx)(S.Z, {
                                look: l.iL.FILLED,
                                color: l.Tt.BRAND,
                                textOptions: { textOverride: L.intl.string(L.t["3KomGR"]) },
                                className: B.button,
                            }),
                        }),
                        !t && (0, i.jsx)(D.Z, {}),
                        t && (0, i.jsx)(O.Z, { variant: O.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [W, Y] = (0, h.Z)(),
    K = (e) => {
        let { className: t, location: n } = e,
            r = (0, j.ZP)({ location: "HeroHeading" }),
            { analyticsLocations: a } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            l = (0, _.W)(),
            g = (0, b.Vi)(),
            h = (0, x._O)(),
            E = L.intl.string(L.t.qYKftb),
            C = (0, v.b)(n),
            O = (0, i.jsx)(F, { className: t }),
            S = L.intl.string(L.t.ifwQZW),
            { fractionalState: T, endsAt: N } = (0, m.Z)(),
            I = (0, u.ZP)(N, u.aj.CREDITS_ENDS_IN);
        l || g
            ? (O = (0, i.jsx)(z, { isEligibleForBogoPromotion: g }))
            : C && ((E = L.intl.string(L.t.qYKftb)), (O = (0, i.jsx)(H, {})));
        let A = null;
        if (T === w.a$.NONE || l)
            A = r
                ? (0, i.jsx)(R.Z, {
                      enablePremiumBrandRefresh: !0,
                      text: E,
                  })
                : (0, i.jsx)(y.Cy, {
                      className: s()(B.trialPill, { [B.hidden]: !h }),
                      text: E,
                      colorOptions: y.VE.PREMIUM_TIER_2_WHITE_FILL,
                  });
        else {
            h = !0;
            let e = (0, i.jsx)("div", {
                    className: B.pillIcon,
                    children: (0, i.jsx)(o.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = L.intl.format(L.t["yR+oDA"], { helpCenterLink: f.Z.getArticleURL(k.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            A = (0, i.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: B.tooltip,
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
                                className: B.pillContainer,
                                children: (0, i.jsx)("div", {
                                    className: B.flexCentered,
                                    children: r
                                        ? (0, i.jsx)(R.Z, {
                                              enablePremiumBrandRefresh: !0,
                                              text: I,
                                          })
                                        : (0, i.jsx)(y.mn, {
                                              className: s()(B.trialPill, { [B.hidden]: !h }),
                                              text: I,
                                              colorOptions: y.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            children: (0, i.jsx)(W.Provider, {
                value: {
                    headingText: S,
                    headingTop: A,
                    showPill: h,
                },
                children: r
                    ? (0, i.jsx)(G, {
                          isEligibleForBogoPromotion: g,
                          isInReverseTrial: l,
                          shouldShowReferralProgressBar: C,
                      })
                    : O,
            }),
        });
    };
