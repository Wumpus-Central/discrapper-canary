n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(13941),
    a = n(442837),
    s = n(692547),
    o = n(215569),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    g = n(367907),
    m = n(626135),
    p = n(585483),
    f = n(999382),
    h = n(743475),
    b = n(983135),
    x = n(8426),
    j = n(969632),
    v = n(570961),
    _ = n(208665),
    C = n(359191),
    O = n(84658),
    y = n(142961),
    E = n(232764),
    N = n(729311),
    I = n(966301),
    S = n(976269),
    T = n(981631),
    P = n(388032),
    w = n(982086);
function Z(e) {
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
function R(e, t) {
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
function D() {
    let e = (0, a.e7)([f.Z], () => f.Z.getGuild());
    return null == e ? null : (0, r.jsx)(A, { guild: e });
}
function A(e) {
    let { guild: t } = e,
        f = t.id,
        D = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()),
        A = (0, y.Z)(f),
        {
            hasChanges: L,
            hasConfiguredAnythingForCurrentStep: k,
            hasErrors: G,
        } = (0, a.cj)([C.Z], () => ({
            hasChanges: C.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: C.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: C.Z.hasErrors(),
        })),
        M = (0, a.e7)([C.Z], () => {
            let e = (0, O.lg)(D);
            return null != e && !C.Z.isEducationUpsellDismissed(e);
        }),
        U = (0, u.ZP)(),
        B = i.useRef(null),
        [{ spring: F }, H] = (0, d.q_F)(() => ({ spring: 0 }), "animate-always");
    i.useEffect(() => {
        function e() {
            H({
                spring: 1,
                config: l.config.gentle,
            }),
                H({
                    spring: 0,
                    config: l.config.gentle,
                    delay: 1000,
                });
        }
        return (
            p.S.subscribe(T.CkL.EMPHASIZE_NOTICE, e),
            () => {
                p.S.unsubscribe(T.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [H]);
    let W = (0, d.dQu)(s.Z.colors.BACKGROUND_SURFACE_HIGH).hex(),
        z = (0, d.dQu)(s.Z.unsafe_rawColors.PRIMARY_160).hex(),
        V = (0, c.wj)(U) ? W : z,
        K = F.to({
            range: [0, 1],
            output: [V, (0, d.dQu)(s.Z.colors.STATUS_DANGER).hex()],
        });
    if (A) {
        if (D === O.PG.DEFAULT_CHANNELS) return (0, r.jsx)(N.j, {});
        else if (D === O.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(I.Zm, {});
        else if (D === O.PG.HOME_SETTINGS) return (0, r.jsx)(S.Z, {});
        else if ((D === O.PG.LANDING || D === O.PG.REVIEW) && j.Z.hasChanges()) return (0, r.jsx)(S.Z, {});
    }
    let Y = D === O.xh[O.xh.length - 1],
        q = async () => {
            let e = _.Z.advancedMode;
            if (L)
                try {
                    if (D === O.PG.DEFAULT_CHANNELS)
                        await (0, h.DO)(t).then(() =>
                            e ? (0, v.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve(),
                        );
                    else if (D === O.PG.CUSTOMIZATION_QUESTIONS) await (0, v.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (D === O.PG.HOME_SETTINGS) {
                        let e = j.Z.getSettings();
                        await (0, x.oo)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        X = async () => {
            m.default.track(
                T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                R(Z({}, (0, g.hH)(f)), {
                    step: O.PG[D],
                    back: !1,
                    skip: !L,
                }),
            ),
                (0, b.Nb)((0, O.lg)(D)),
                (await q()) && (0, b.IG)(f, D);
        },
        J = async () => {
            m.default.track(
                T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                R(Z({}, (0, g.hH)(f)), {
                    step: O.PG[D],
                    back: !0,
                    skip: !1,
                }),
            ),
                (await q()) && (0, b.Wy)(f, D);
        },
        Q = null;
    M &&
        (D === O.PG.SAFETY_CHECK
            ? (Q = (0, r.jsx)(E.j7, {}))
            : D === O.PG.DEFAULT_CHANNELS
              ? (Q = (0, r.jsx)(E.Io, {}))
              : D === O.PG.CUSTOMIZATION_QUESTIONS
                ? (Q = (0, r.jsx)(E.cZ, {}))
                : D === O.PG.HOME_SETTINGS && (Q = (0, r.jsx)(E.g6, {})));
    let $ = (0, r.jsx)("div", {
            className: M ? w.hidden : void 0,
            children: (0, r.jsx)(d.Button, {
                size: "sm",
                variant: "secondary",
                text: P.intl.string(P.t["13/7kX"]),
                icon: d.whL,
                iconPosition: "start",
                onClick: J,
                disabled: M || G,
            }),
        }),
        ee = (0, r.jsx)(d.Button, {
            size: "sm",
            variant: k ? "primary" : "secondary",
            text: k ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["5Wxrcd"]),
            icon: d.ZSh,
            iconPosition: "end",
            onClick: X,
            disabled: M || G,
        });
    return (0, r.jsx)(o.W, {
        component: "div",
        children: (0, r.jsx)(d.oXn, {
            className: w.noticeRegion,
            children: (0, r.jsx)(l.animated.div, {
                className: w.container,
                style: { backgroundColor: K },
                children: (0, r.jsxs)("div", {
                    className: w.flexContainer,
                    ref: B,
                    children: [
                        M
                            ? (0, r.jsxs)("div", {
                                  className: w.educationUpsellRoot,
                                  children: [
                                      (0, r.jsx)("img", {
                                          className: w.wumpus,
                                          src: n(33631),
                                          alt: "wumpus",
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: w.educationUpsell,
                                          children: [Q, (0, r.jsx)("div", { className: w.educationUpsellArrow })],
                                      }),
                                  ],
                              })
                            : null,
                        (0, r.jsx)(d.JcV, {
                            containerRef: B,
                            children: (0, r.jsxs)("div", {
                                className: w.actions,
                                children: [
                                    $,
                                    (0, r.jsxs)("div", {
                                        className: w.next,
                                        children: [
                                            G
                                                ? (0, r.jsx)(d.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "status-warning",
                                                      children: P.intl.string(P.t.DhYsPL),
                                                  })
                                                : null,
                                            Y ? null : ee,
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
