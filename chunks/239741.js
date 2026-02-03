n.d(t, {
    A: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(92674),
    s = n(311907),
    a = n(827734),
    o = n(73939),
    c = n(582754),
    d = n(397927),
    u = n(736653),
    g = n(58149),
    m = n(954571),
    p = n(203982),
    f = n(555337),
    h = n(418448),
    b = n(527678),
    x = n(199940),
    j = n(132514),
    _ = n(107795),
    O = n(655943),
    v = n(287479),
    y = n(400812),
    A = n(72533),
    E = n(246282),
    N = n(729984),
    S = n(692453),
    I = n(360827),
    C = n(133154),
    T = n(652215),
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
    let e = (0, s.bG)([f.A], () => f.A.getGuild());
    return null == e
        ? null
        : (0, r.jsx)(L, {
              guild: e,
          });
}

function L(e) {
    let { guild: t } = e,
        f = t.id,
        G = (0, s.bG)([v.A], () => v.A.getCurrentPage()),
        L = (0, A.A)(f),
        {
            hasChanges: k,
            hasConfiguredAnythingForCurrentStep: M,
            hasErrors: U,
        } = (0, s.cf)([v.A], () => ({
            hasChanges: v.A.hasChanges(),
            hasConfiguredAnythingForCurrentStep: v.A.hasConfiguredAnythingForCurrentStep(),
            hasErrors: v.A.hasErrors(),
        })),
        B = (0, s.bG)([v.A], () => {
            let e = (0, y.ql)(G);
            return null != e && !v.A.isEducationUpsellDismissed(e);
        }),
        F = (0, u.Ay)(),
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
            p._.subscribe(T.jej.EMPHASIZE_NOTICE, e),
            () => {
                p._.unsubscribe(T.jej.EMPHASIZE_NOTICE, e);
            }
        );
    }, [K]);
    let z = (0, d.rdh)(a.A.colors.BACKGROUND_SURFACE_HIGH).hex(),
        W = (0, d.rdh)(a.A.unsafe_rawColors.PRIMARY_160).hex(),
        Y = (0, c.Mw)(F) ? z : W,
        X = V.to({
            range: [0, 1],
            output: [Y, (0, d.rdh)(a.A.colors.BACKGROUND_FEEDBACK_CRITICAL).hex()],
        });
    if (L) {
        if (G === y.Hy.DEFAULT_CHANNELS) return (0, r.jsx)(N.G, {});
        else if (G === y.Hy.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(I.fO, {});
        else if (G === y.Hy.HOME_SETTINGS) return (0, r.jsx)(C.A, {});
        else if (G === y.Hy.CONNECTIONS) return (0, r.jsx)(S.R, {});
        else if ((G === y.Hy.LANDING || G === y.Hy.REVIEW) && j.A.hasChanges()) return (0, r.jsx)(C.A, {});
    }
    let J = G === y.kd[y.kd.length - 1],
        Z = async () => {
            let e = O.A.advancedMode;
            if (k)
                try {
                    if (G === y.Hy.DEFAULT_CHANNELS)
                        await (0, h.jr)(t).then(() =>
                            e
                                ? (0, _.dm)(t, {
                                      ignoreDefaultPrompt: !0,
                                  })
                                : Promise.resolve(),
                        );
                    else if (G === y.Hy.CUSTOMIZATION_QUESTIONS)
                        await (0, _.dm)(t, {
                            ignoreDefaultPrompt: !0,
                        });
                    else if (G === y.Hy.HOME_SETTINGS) {
                        let e = j.A.getSettings();
                        await (0, x.W5)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        Q = async () => {
            m.default.track(
                T.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                D(R({}, (0, g.H$)(f)), {
                    step: y.Hy[G],
                    back: !1,
                    skip: !k,
                }),
            ),
                (0, b.Ay)((0, y.ql)(G)),
                (await Z()) && (0, b._k)(f, G);
        },
        q = async () => {
            m.default.track(
                T.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                D(R({}, (0, g.H$)(f)), {
                    step: y.Hy[G],
                    back: !0,
                    skip: !1,
                }),
            ),
                (await Z()) && (0, b.kP)(f, G);
        },
        $ = null;
    B &&
        (G === y.Hy.SAFETY_CHECK
            ? ($ = (0, r.jsx)(E.Et, {}))
            : G === y.Hy.DEFAULT_CHANNELS
              ? ($ = (0, r.jsx)(E.hz, {}))
              : G === y.Hy.CUSTOMIZATION_QUESTIONS
                ? ($ = (0, r.jsx)(E.yP, {}))
                : G === y.Hy.HOME_SETTINGS && ($ = (0, r.jsx)(E.QS, {})));
    let ee = (0, r.jsx)("div", {
            className: B ? w.R : void 0,
            children: (0, r.jsx)(d.Button, {
                size: "sm",
                variant: "secondary",
                text: P.intl.string(P.t["13/7kX"]),
                icon: d.rJJ,
                iconPosition: "start",
                onClick: q,
                disabled: B || U,
            }),
        }),
        et = (0, r.jsx)(d.Button, {
            size: "sm",
            variant: M ? "primary" : "secondary",
            text: M ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["5Wxrcd"]),
            icon: d.EdP,
            iconPosition: "end",
            onClick: Q,
            disabled: B || U,
        });
    return (0, r.jsx)(o.F, {
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
                        B
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
