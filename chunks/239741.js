n.d(t, {
    A: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(108531),
    s = n(311907),
    a = n(827734),
    c = n(73939),
    o = n(582754),
    d = n(397927),
    u = n(736653),
    f = n(58149),
    g = n(954571),
    b = n(203982),
    m = n(555337),
    p = n(418448),
    x = n(527678),
    h = n(199940),
    j = n(132514),
    O = n(107795),
    y = n(655943),
    v = n(287479),
    A = n(400812),
    E = n(72533),
    N = n(246282),
    _ = n(729984),
    S = n(692453),
    T = n(360827),
    I = n(133154),
    C = n(652215),
    P = n(985018),
    w = n(484729);

function R(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function G() {
    let e = (0, s.bG)([m.A], () => m.A.getGuild());
    return null == e
        ? null
        : (0, r.jsx)(L, {
              guild: e,
          });
}

function L(e) {
    let { guild: t } = e,
        m = t.id,
        G = (0, s.bG)([v.A], () => v.A.getCurrentPage()),
        L = (0, E.A)(m),
        {
            hasChanges: k,
            hasConfiguredAnythingForCurrentStep: M,
            hasErrors: U,
        } = (0, s.cf)([v.A], () => ({
            hasChanges: v.A.hasChanges(),
            hasConfiguredAnythingForCurrentStep: v.A.hasConfiguredAnythingForCurrentStep(),
            hasErrors: v.A.hasErrors(),
        })),
        F = (0, s.bG)([v.A], () => {
            let e = (0, A.ql)(G);
            return null != e && !v.A.isEducationUpsellDismissed(e);
        }),
        B = (0, u.Ay)(),
        H = i.useRef(null),
        [{ spring: V }, K] = (0, d.zhh)(
            () => ({
                spring: 0,
            }),
            "animate-always",
        );
    i.useEffect(() => {
        function e() {
            K({
                spring: 1,
                config: l.config.gentle,
            }),
                K({
                    spring: 0,
                    config: l.config.gentle,
                    delay: 1e3,
                });
        }
        return (
            b._.subscribe(C.jej.EMPHASIZE_NOTICE, e),
            () => {
                b._.unsubscribe(C.jej.EMPHASIZE_NOTICE, e);
            }
        );
    }, [K]);
    let z = (0, d.rdh)(a.A.colors.BACKGROUND_SURFACE_HIGH).hex(),
        Y = (0, d.rdh)(a.A.unsafe_rawColors.PRIMARY_160).hex(),
        W = (0, o.Mw)(B) ? z : Y,
        X = V.to({
            range: [0, 1],
            output: [W, (0, d.rdh)(a.A.colors.BACKGROUND_FEEDBACK_CRITICAL).hex()],
        });
    if (L) {
        if (G === A.Hy.DEFAULT_CHANNELS) return (0, r.jsx)(_.G, {});
        else if (G === A.Hy.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(T.fO, {});
        else if (G === A.Hy.HOME_SETTINGS) return (0, r.jsx)(I.A, {});
        else if (G === A.Hy.CONNECTIONS) return (0, r.jsx)(S.R, {});
        else if ((G === A.Hy.LANDING || G === A.Hy.REVIEW) && j.A.hasChanges()) return (0, r.jsx)(I.A, {});
    }
    let J = G === A.kd[A.kd.length - 1],
        Z = async () => {
            let e = y.A.advancedMode;
            if (k)
                try {
                    if (G === A.Hy.DEFAULT_CHANNELS)
                        await (0, p.jr)(t).then(() =>
                            e
                                ? (0, O.dm)(t, {
                                      ignoreDefaultPrompt: !0,
                                  })
                                : Promise.resolve(),
                        );
                    else if (G === A.Hy.CUSTOMIZATION_QUESTIONS)
                        await (0, O.dm)(t, {
                            ignoreDefaultPrompt: !0,
                        });
                    else if (G === A.Hy.HOME_SETTINGS) {
                        let e = j.A.getSettings();
                        await (0, h.W5)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        Q = async () => {
            g.default.track(
                C.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                D(R({}, (0, f.H$)(m)), {
                    step: A.Hy[G],
                    back: !1,
                    skip: !k,
                }),
            ),
                (0, x.Ay)((0, A.ql)(G)),
                (await Z()) && (0, x._k)(m, G);
        },
        q = async () => {
            g.default.track(
                C.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                D(R({}, (0, f.H$)(m)), {
                    step: A.Hy[G],
                    back: !0,
                    skip: !1,
                }),
            ),
                (await Z()) && (0, x.kP)(m, G);
        },
        $ = null;
    F &&
        (G === A.Hy.SAFETY_CHECK
            ? ($ = (0, r.jsx)(N.Et, {}))
            : G === A.Hy.DEFAULT_CHANNELS
              ? ($ = (0, r.jsx)(N.hz, {}))
              : G === A.Hy.CUSTOMIZATION_QUESTIONS
                ? ($ = (0, r.jsx)(N.yP, {}))
                : G === A.Hy.HOME_SETTINGS && ($ = (0, r.jsx)(N.QS, {})));
    let ee = (0, r.jsx)("div", {
            className: F ? w.R : void 0,
            children: (0, r.jsx)(d.Button, {
                size: "sm",
                variant: "secondary",
                text: P.intl.string(P.t["13/7kX"]),
                icon: d.rJJ,
                iconPosition: "start",
                onClick: q,
                disabled: F || U,
            }),
        }),
        et = (0, r.jsx)(d.Button, {
            size: "sm",
            variant: M ? "primary" : "secondary",
            text: M ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["5Wxrcd"]),
            icon: d.EdP,
            iconPosition: "end",
            onClick: Q,
            disabled: F || U,
        });
    return (0, r.jsx)(c.F, {
        component: "div",
        children: (0, r.jsx)(d.FQk, {
            className: w.hE,
            children: (0, r.jsx)(l.animated.div, {
                className: w.kL,
                style: {
                    backgroundColor: X,
                },
                children: (0, r.jsxs)("div", {
                    className: w.nP,
                    ref: H,
                    children: [
                        F
                            ? (0, r.jsxs)("div", {
                                  className: w.cZ,
                                  children: [
                                      (0, r.jsx)("img", {
                                          className: w.kX,
                                          src: n(903702),
                                          alt: "wumpus",
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: w.C0,
                                          children: [
                                              $,
                                              (0, r.jsx)("div", {
                                                  className: w.JM,
                                              }),
                                          ],
                                      }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(d.xpW, {
                            containerRef: H,
                            children: (0, r.jsxs)("div", {
                                className: w.o1,
                                children: [
                                    ee,
                                    (0, r.jsxs)("div", {
                                        className: w.K2,
                                        children: [
                                            U
                                                ? (0, r.jsx)(d.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "status-warning",
                                                      children: P.intl.string(P.t.DhYsPL),
                                                  })
                                                : null,
                                            J ? null : et,
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
