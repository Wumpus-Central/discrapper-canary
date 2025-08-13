n.d(t, { Z: () => U }), n(388685);
var i = n(255367);
n(73800);
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
    j = n(104494),
    E = n(639119),
    C = n(8647),
    O = n(533525),
    v = n(736519),
    S = n(784238),
    T = n(382791),
    I = n(184176),
    N = n(386733),
    y = n(474936),
    A = n(981631),
    P = n(388032),
    R = n(525433),
    D = n(872905),
    Z = n(578478);
let w = (e) => {
        var t, n;
        let { className: r } = e,
            { headingText: c, headingTop: d } = M(),
            u = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
            p = (0, E.N)(),
            h = (0, j.Ng)(),
            f = (0, j.Wp)(h, y.Si.TIER_2) ? y.Si.TIER_2 : void 0,
            b = null != u && u.status !== A.O0b.ACCOUNT_HOLD && u.hasAnyPremiumNitro,
            x = (0, m.Z)().isFractionalPremiumActive && !b;
        return (0, i.jsxs)("div", {
            className: s()(R.container, r),
            "data-testid": "subscriber-nitro-home-hero-header",
            children: [
                (0, i.jsx)("img", {
                    src: D,
                    alt: "",
                    className: R.headerArt,
                }),
                (0, i.jsxs)("div", {
                    className: R.content,
                    children: [
                        d,
                        (0, i.jsx)(o.X6q, {
                            variant: "display-lg",
                            color: "always-white",
                            className: R.header,
                            children: c,
                        }),
                        (0, i.jsxs)("div", {
                            className: R.heroHeadingOriginalButtonContainer,
                            children: [
                                x &&
                                    (0, i.jsx)(S.Z, {
                                        color: l.Tt.BRAND,
                                        className: s()(R.button, R.subscribeButton),
                                        subscriptionTier:
                                            null !=
                                            (n = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id)
                                                ? n
                                                : f,
                                    }),
                                (0, i.jsx)("div", {
                                    className: R.premiumSubscribeButton,
                                    children: (0, i.jsx)(v.Z, {
                                        look: l.iL.FILLED,
                                        color: l.Tt.BRAND,
                                        textOptions: { textOverride: P.intl.string(P.t["3KomGR"]) },
                                        className: R.button,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    k = () => {
        let { headingText: e, headingTop: t } = M();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    src: Z,
                    alt: "",
                    className: R.headerArtV2,
                }),
                (0, i.jsx)("div", {
                    className: R.containerV2,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: (0, i.jsxs)("div", {
                        className: R.contentV2,
                        children: [
                            t,
                            (0, i.jsx)(o.X6q, {
                                variant: "display-lg",
                                color: "always-white",
                                className: R.header,
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: R.premiumSubscribeButton,
                                children: (0, i.jsx)(v.Z, {
                                    look: l.iL.FILLED,
                                    color: l.Tt.BRAND,
                                    textOptions: { textOverride: P.intl.string(P.t["3KomGR"]) },
                                    className: R.button,
                                }),
                            }),
                            (0, i.jsx)(N.Z, {}),
                        ],
                    }),
                }),
            ],
        });
    },
    L = (e) => {
        let { isEligibleForBogoPromotion: t } = e,
            { headingText: n, headingTop: r } = M();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    src: Z,
                    alt: "",
                    className: R.headerArtV2,
                }),
                (0, i.jsxs)("div", {
                    className: R.reverseContainer,
                    "data-testid": "subscriber-nitro-home-hero-header",
                    children: [
                        (0, i.jsxs)("div", {
                            className: R.reverseTrialHomeHeader,
                            children: [
                                r,
                                (0, i.jsx)(o.X6q, {
                                    variant: "display-lg",
                                    color: "always-white",
                                    className: R.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: R.premiumSubscribeButton,
                            children: (0, i.jsx)(v.Z, {
                                look: l.iL.FILLED,
                                color: l.Tt.BRAND,
                                textOptions: { textOverride: P.intl.string(P.t["3KomGR"]) },
                                className: R.button,
                            }),
                        }),
                        !t && (0, i.jsx)(I.Z, {}),
                        t && (0, i.jsx)(C.Z, { variant: C.C.SUBSCRIBER_HOME }),
                    ],
                }),
            ],
        });
    },
    [B, M] = (0, h.Z)(),
    U = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            a = (0, _.W)(),
            l = (0, b.Vi)(),
            g = (0, x._O)(),
            h = P.intl.string(P.t.qYKftb),
            j = (0, O.b)(n),
            E = (0, i.jsx)(w, { className: t }),
            C = P.intl.string(P.t.ifwQZW),
            { fractionalState: v, endsAt: S } = (0, m.Z)(),
            I = (0, u.ZP)(S, u.aj.CREDITS_ENDS_IN);
        a || l
            ? ((C = P.intl.string(P.t.ifwQZW)), (E = (0, i.jsx)(L, { isEligibleForBogoPromotion: l })))
            : j && ((h = P.intl.string(P.t.qYKftb)), (C = P.intl.string(P.t.ifwQZW)), (E = (0, i.jsx)(k, {})));
        let N = null;
        if (v === y.a$.NONE || a)
            N = (0, i.jsx)(T.Cy, {
                className: s()(R.trialPill, { [R.hidden]: !g }),
                text: h,
                colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL,
            });
        else {
            g = !0;
            let e = (0, i.jsx)("div", {
                    className: R.pillIcon,
                    children: (0, i.jsx)(o.d3s, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)",
                    }),
                }),
                t = P.intl.format(P.t["yR+oDA"], { helpCenterLink: f.Z.getArticleURL(A.BhN.FRACTIONAL_PREMIUM_ABOUT) });
            N = (0, i.jsx)(p.Z, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: R.tooltip,
                position: "right",
                children: (t) => {
                    var n, r;
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
                        (r = r =
                            {
                                className: R.pillContainer,
                                children: (0, i.jsx)("div", {
                                    className: R.flexCentered,
                                    children: (0, i.jsx)(T.mn, {
                                        className: s()(R.trialPill, { [R.hidden]: !g }),
                                        text: I,
                                        colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL,
                                        icon: e,
                                        gap: !1,
                                    }),
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    );
                },
            });
        }
        return (0, i.jsx)(d.Gt, {
            value: r,
            children: (0, i.jsx)(B.Provider, {
                value: {
                    headingText: C,
                    headingTop: N,
                },
                children: E,
            }),
        });
    };
