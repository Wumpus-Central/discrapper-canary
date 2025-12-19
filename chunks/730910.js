n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(620792),
    a = n(442837),
    s = n(692547),
    o = n(215569),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    g = n(367907),
    f = n(626135),
    m = n(585483),
    b = n(999382),
    p = n(743475),
    h = n(983135),
    x = n(8426),
    j = n(969632),
    v = n(570961),
    O = n(208665),
    C = n(359191),
    y = n(84658),
    N = n(142961),
    E = n(232764),
    I = n(729311),
    S = n(478777),
    _ = n(966301),
    T = n(976269),
    P = n(981631),
    w = n(388032),
    Z = n(602886);
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
function A() {
    let e = (0, a.e7)([b.Z], () => b.Z.getGuild());
    return null == e ? null : (0, r.jsx)(L, { guild: e });
}
function L(e) {
    let { guild: t } = e,
        b = t.id,
        A = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()),
        L = (0, N.Z)(b),
        {
            hasChanges: k,
            hasConfiguredAnythingForCurrentStep: G,
            hasErrors: M,
        } = (0, a.cj)([C.Z], () => ({
            hasChanges: C.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: C.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: C.Z.hasErrors(),
        })),
        U = (0, a.e7)([C.Z], () => {
            let e = (0, y.lg)(A);
            return null != e && !C.Z.isEducationUpsellDismissed(e);
        }),
        B = (0, u.ZP)(),
        F = i.useRef(null),
        [{ spring: H }, W] = (0, d.q_F)(() => ({ spring: 0 }), "animate-always");
    i.useEffect(() => {
        function e() {
            W({
                spring: 1,
                config: l.config.gentle,
            }),
                W({
                    spring: 0,
                    config: l.config.gentle,
                    delay: 1000,
                });
        }
        return (
            m.S.subscribe(P.CkL.EMPHASIZE_NOTICE, e),
            () => {
                m.S.unsubscribe(P.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [W]);
    let z = (0, d.dQu)(s.Z.colors.BACKGROUND_SURFACE_HIGH).hex(),
        V = (0, d.dQu)(s.Z.unsafe_rawColors.PRIMARY_160).hex(),
        K = (0, c.wj)(B) ? z : V,
        Y = H.to({
            range: [0, 1],
            output: [K, (0, d.dQu)(s.Z.colors.STATUS_DANGER).hex()],
        });
    if (L) {
        if (A === y.PG.DEFAULT_CHANNELS) return (0, r.jsx)(I.j, {});
        else if (A === y.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(_.Zm, {});
        else if (A === y.PG.HOME_SETTINGS) return (0, r.jsx)(T.Z, {});
        else if (A === y.PG.CONNECTIONS) return (0, r.jsx)(S.u, {});
        else if ((A === y.PG.LANDING || A === y.PG.REVIEW) && j.Z.hasChanges()) return (0, r.jsx)(T.Z, {});
    }
    let q = A === y.xh[y.xh.length - 1],
        X = async () => {
            let e = O.Z.advancedMode;
            if (k)
                try {
                    if (A === y.PG.DEFAULT_CHANNELS)
                        await (0, p.DO)(t).then(() =>
                            e ? (0, v.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve(),
                        );
                    else if (A === y.PG.CUSTOMIZATION_QUESTIONS) await (0, v.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (A === y.PG.HOME_SETTINGS) {
                        let e = j.Z.getSettings();
                        await (0, x.oo)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        J = async () => {
            f.default.track(
                P.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                D(R({}, (0, g.hH)(b)), {
                    step: y.PG[A],
                    back: !1,
                    skip: !k,
                }),
            ),
                (0, h.Nb)((0, y.lg)(A)),
                (await X()) && (0, h.IG)(b, A);
        },
        Q = async () => {
            f.default.track(
                P.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                D(R({}, (0, g.hH)(b)), {
                    step: y.PG[A],
                    back: !0,
                    skip: !1,
                }),
            ),
                (await X()) && (0, h.Wy)(b, A);
        },
        $ = null;
    U &&
        (A === y.PG.SAFETY_CHECK
            ? ($ = (0, r.jsx)(E.j7, {}))
            : A === y.PG.DEFAULT_CHANNELS
              ? ($ = (0, r.jsx)(E.Io, {}))
              : A === y.PG.CUSTOMIZATION_QUESTIONS
                ? ($ = (0, r.jsx)(E.cZ, {}))
                : A === y.PG.HOME_SETTINGS && ($ = (0, r.jsx)(E.g6, {})));
    let ee = (0, r.jsx)("div", {
            className: U ? Z.hidden : void 0,
            children: (0, r.jsx)(d.Button, {
                size: "sm",
                variant: "secondary",
                text: w.intl.string(w.t["13/7kX"]),
                icon: d.whL,
                iconPosition: "start",
                onClick: Q,
                disabled: U || M,
            }),
        }),
        et = (0, r.jsx)(d.Button, {
            size: "sm",
            variant: G ? "primary" : "secondary",
            text: G ? w.intl.string(w.t.PDTjLN) : w.intl.string(w.t["5Wxrcd"]),
            icon: d.ZSh,
            iconPosition: "end",
            onClick: J,
            disabled: U || M,
        });
    return (0, r.jsx)(o.W, {
        component: "div",
        children: (0, r.jsx)(d.oXn, {
            className: Z.noticeRegion,
            children: (0, r.jsx)(l.animated.div, {
                className: Z.container,
                style: { backgroundColor: Y },
                children: (0, r.jsxs)("div", {
                    className: Z.flexContainer,
                    ref: F,
                    children: [
                        U
                            ? (0, r.jsxs)("div", {
                                  className: Z.educationUpsellRoot,
                                  children: [
                                      (0, r.jsx)("img", {
                                          className: Z.wumpus,
                                          src: n(33631),
                                          alt: "wumpus",
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Z.educationUpsell,
                                          children: [$, (0, r.jsx)("div", { className: Z.educationUpsellArrow })],
                                      }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(d.JcV, {
                            containerRef: F,
                            children: (0, r.jsxs)("div", {
                                className: Z.actions,
                                children: [
                                    ee,
                                    (0, r.jsxs)("div", {
                                        className: Z.next,
                                        children: [
                                            M
                                                ? (0, r.jsx)(d.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "status-warning",
                                                      children: w.intl.string(w.t.DhYsPL),
                                                  })
                                                : null,
                                            q ? null : et,
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
