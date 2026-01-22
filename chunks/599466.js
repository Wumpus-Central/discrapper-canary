n.d(t, {
    default: () => H,
}),
    n(65821),
    n(896048),
    n(321073),
    n(638769),
    n(457529);
var l = n(627968),
    r = n(64700),
    a = n(812729),
    i = n.n(a),
    u = n(158954),
    o = n(311907),
    s = n(499979),
    d = n(397927),
    c = n(684013),
    m = n(56562),
    g = n(964486),
    f = n(77729),
    v = n(49463),
    y = n(15285),
    p = n(651930),
    b = n(760751),
    h = n(383501),
    _ = n(242286),
    I = n(954571),
    N = n(220478),
    x = n(661191),
    S = n(9302),
    A = n(41984),
    E = n(181435),
    O = n(78878),
    G = n(833551),
    w = n(395011),
    j = n(127242),
    k = n(680243),
    P = n(243612),
    D = n(652215),
    T = n(985018),
    M = n(345860);

function R(e, t) {
    return i()(e, t);
}
let C = new x.SnowflakeSequence(),
    L = {},
    W = new Set([
        m.aI.BORDERLESS_FULLSCREEN,
        m.aI.FULLSCREEN,
        m.aI.WINDOWED,
        m.aI.MAXIMIZED,
        m.aI.MINIMIZED,
        m.aI.UNKNOWN,
    ]);

function F(e) {
    for (let t of Object.values(G.default.getClosedTrackedGamesHistory()))
        if (t.applicationId === e.id || t.gameName === e.name) return t;
    return null;
}

function U(e) {
    var t, n, l;
    let r = F(e);
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (t = null == r ? void 0 : r.pid) ? t : void 0,
        fullscreenType: null != (n = null == r ? void 0 : r.fullscreenType) ? n : void 0,
        trackedGame: null != r ? r : void 0,
        persistentGame: e,
        runningGame: null != e.name && null != (l = y.Ay.getGameForName(e.name)) ? l : void 0,
    };
}

function B(e) {
    var t, n;
    let [l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [b.A];
    if (null == e) return null;
    if (null != e.gameId) {
        let t = l.getDetectableGame(e.gameId);
        if (null != t) return t;
    }
    let r = null != (t = e.runningGame) ? t : e.persistentGame;
    if (null != r) {
        let e = l.getGameByGameData(r);
        if (null != e) return e;
    }
    if (null != e.gameName) {
        let t = l.getGameByName(e.gameName);
        if (null != t) return t;
    }
    if (null == e || null == e.gameName) return null;
    let a =
        null != (n = e.gameId)
            ? n
            : (function (e) {
                  if (null != L[e]) return L[e];
                  let t = Date.now(),
                      n = null;
                  try {
                      C.willOverflowNext() && C.reset(), (n = x.default.fromTimestampWithSequence(t, C));
                  } catch (e) {
                      C.reset(), (n = x.default.fromTimestampWithSequence(t, C));
                  }
                  if (null == n) throw Error("Failed to generate snowflake id");
                  return (L[e] = n), n;
              })(e.gameName);
    return {
        id: x.default.cast(a),
        name: e.gameName,
        description: void 0,
        icon: void 0,
        icon_hash: void 0,
        cover_image_hash: void 0,
        aliases: [],
        executables: [],
        overlay: !1,
        overlayWarn: !1,
        overlayCompatibilityHook: !1,
        hook: !0,
        supportsOutOfProcessOverlay: !1,
        thirdPartySkus: [],
        themes: [],
        linkedApplications: void 0,
    };
}

function K(e) {
    let { selectedGame: t, setSelectedGame: n } = e,
        r = (0, o.yK)([b.A, y.Ay], () => {
            let e = b.A.games,
                t = e.reduce((e, t) => ((e[t.id] = t), e), {});
            return [
                ...e,
                ...y.Ay.getGamesSeen(!1).reduce((e, n) => {
                    let l = n.id;
                    if (null != l && null != t[l]) return e;
                    let r = B(U(n), void 0);
                    if (null != r) {
                        if (null != t[r.id]) return e;
                        e.push(r);
                    }
                    return e;
                }, []),
            ];
        }, []),
        a = (0, o.bG)([b.A], () => B(t, [b.A]), [t]);
    return (0, l.jsx)(p.i, {
        games: r,
        selectedGame: null != a ? a : null,
        onGameSelected: (e) => {
            if (null != e) {
                var t, l, r;
                let a;
                n(
                    ((a = F(e)),
                    {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: null != (t = null == a ? void 0 : a.pid) ? t : void 0,
                        fullscreenType: null != (l = null == a ? void 0 : a.fullscreenType) ? l : void 0,
                        trackedGame: null != a ? a : void 0,
                        runningGame: null != e.name && null != (r = y.Ay.getGameForName(e.name)) ? r : void 0,
                    }),
                );
            } else n(null);
        },
        placeholder: T.intl.string(T.t.b1IW2e),
    });
}
let q = {
    HandleFocusChanged: (e, t) => {
        var n;
        if (!(0, E.$8)(e, "HandleFocusChanged")) return !0;
        let l = null != t && null != (n = w.A.getKnownWindowHandlesForPID(t)) ? n : new Set(),
            { focusedPid: r, focusedWindowHandle: a } = e.data;
        return null != a && null != r && r !== S.UNSET_PID && !!l.has(a) && r === t;
    },
    EventHook: (e, t) => {
        var n;
        if (!(0, E.$8)(e, "EventHook")) return !0;
        let l = null != t && null != (n = w.A.getKnownWindowHandlesForPID(t)) ? n : new Set();
        try {
            let { receivedWindow: n, targetPid: r } = e.data;
            if (null != n && l.has(n)) return null != r && r === t;
        } finally {
            return !1;
        }
    },
};

function H(e) {
    var t, a;
    let { onClose: i, transitionState: p, location: b, appContext: x } = e,
        C = (0, o.bG)([_.default], () => _.default.getFocusedPID()),
        L = null != C ? C : (0, S.getPID)(),
        B = (0, o.bG)([G.default], () => G.default.getTrackedGameByPid(L), [L]),
        [H, Z] = r.useState(null),
        [z, J] = r.useState(""),
        X = (function () {
            var e, t, n, l, r, a;
            let i = (0, P.b4)(),
                u = (0, o.bG)([_.default], () => _.default.getFocusedPID()),
                s = null != u ? u : (0, S.getPID)(),
                d = (0, o.bG)([G.default], () => G.default.getTrackedGameByPid(s), [s]),
                c = (0, o.bG)([y.Ay], () => y.Ay.getVisibleGame()),
                m = (0, o.bG)([y.Ay], () => y.Ay.getGamesSeen(!1)[0]);
            switch (!0) {
                case null != d:
                    return {
                        gameId: null != (e = d.applicationId) ? e : void 0,
                        gameName: null != (t = d.gameName) ? t : void 0,
                        gamePid: d.pid,
                        fullscreenType: d.fullscreenType,
                        trackedGame: d,
                        runningGame: null != d.gameName && null != (n = y.Ay.getGameForName(d.gameName)) ? n : void 0,
                    };
                case null != i:
                    let g, f;
                    return (
                        (f = null == (g = y.Ay.getGameForName(i.name)) ? void 0 : g.pid),
                        {
                            gameId: i.id,
                            gameName: i.name,
                            gamePid: null == g ? void 0 : g.pid,
                            fullscreenType: null != (l = null == g ? void 0 : g.fullscreenType) ? l : void 0,
                            runningGame: null != g ? g : void 0,
                            trackedGame: null != f && null != (r = G.default.getTrackedGameByPid(f)) ? r : void 0,
                        }
                    );
                case null != c:
                    return {
                        gameId: c.id,
                        gameName: c.name,
                        gamePid: c.pid,
                        fullscreenType: c.fullscreenType,
                        trackedGame: null != (a = F(c)) ? a : void 0,
                        runningGame: c,
                    };
                default:
                    return null != m ? U(m) : null;
            }
        })(),
        [Y, V] = r.useState(
            null !=
                (t = null != (a = null == X ? void 0 : X.fullscreenType) ? a : null == B ? void 0 : B.fullscreenType)
                ? t
                : null,
        ),
        [Q, $] = r.useState(X),
        [ee, et] = r.useState(!1),
        [en, el] = r.useState(!1),
        [er, ea] = r.useState(!1),
        {
            nativeState: ei,
            breadcrumbs: [eu],
        } =
            ((0, g.Ay)(
                () => (
                    c.A.setModuleLogging(!0),
                    c.A.setStateDebugging(!0),
                    () => {
                        c.A.setModuleLogging(!1), c.A.setStateDebugging(!1);
                    }
                ),
            ),
            (0, o.bG)(
                [j.A],
                () => ({
                    nativeState: j.A.getDebuggingState(),
                    breadcrumbs: j.A.getOverlayLoggingBreadcrumbs(),
                }),
                [],
                R,
            )),
        eo = r.useMemo(() => {
            let e = {
                game_crashes_occurred: T.t["1UWmCV"],
                poor_performance: T.t["4owu+4"],
                overlay_unresponsive: T.t.Q8Z0xo,
                keybindings_not_working: T.t.UnzaZs,
                alt_tabbing_issues: T.t["/sG9Sf"],
                game_not_interactable: T.t["+18gq6"],
                game_forced_minimized: T.t.dabM8C,
                other: T.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({
                id: t,
                label: T.intl.string(e[t]),
                value: t,
            }));
        }, []),
        es = r.useMemo(() => {
            let e = {
                [m.aI.FULLSCREEN]: T.t.AjBsPe,
                [m.aI.WINDOWED]: T.t["0oYq2i"],
                [m.aI.BORDERLESS_FULLSCREEN]: T.t.NwNvjf,
                [m.aI.MINIMIZED]: T.t.Wypflu,
                [m.aI.MAXIMIZED]: T.t["MUX2+G"],
                [m.aI.UNKNOWN]: T.t.QPOep8,
            };
            return [...W].map((t) => ({
                id: t.toString(),
                label: T.intl.string(e[t]),
                value: t,
            }));
        }, []),
        ed = async () => {
            el(!0), await (0, s.yy)(500), el(!1);
        },
        ec = async () => {
            var e, t, r, a, u;
            if (null === H && 0 === z.length) {
                ea(!0), ed();
                return;
            }
            et(!0);
            let o = null != (e = _.default.getFocusedPID()) ? e : (0, S.getPID)(),
                c = G.default.getTrackedGameByPid(o),
                g = w.A.getPopoutInitializationStages(),
                y = (null == c ? void 0 : c.overlayMethod) != null ? A.Ue[c.overlayMethod] : null,
                p = null != (t = null == c ? void 0 : c.fullscreenType) ? t : m.aI.UNKNOWN,
                j = (0, E.tn)(eu, (e) => {
                    for (let t of Object.values(q))
                        try {
                            if (!t(e, o)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                P = O.A.getRecentActions(10),
                T = N.A.getRecentExperimentBuckets(v.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
                M =
                    (null == c ? void 0 : c.fullscreenHistory) == null
                        ? null
                        : Object.entries(c.fullscreenHistory)
                              .sort((e, t) => {
                                  let [n] = e,
                                      [l] = t;
                                  return Number(l) - Number(n);
                              })
                              .map((e) => {
                                  let [t, n] = e;
                                  return "".concat(t, ":").concat(m.aI[n]);
                              }),
                R = {
                    issue_category: H,
                    details: z,
                    overlay_render_method: y,
                    hardware_display_count:
                        null !=
                        (r = await (null === f.A ||
                        void 0 === f.A ||
                        null == (u = f.A.hardware) ||
                        null == (a = u.getDisplayCount)
                            ? void 0
                            : a.call(u)))
                            ? r
                            : null,
                    detected_fullscreen_type: m.aI[p],
                    application_id: null == c ? void 0 : c.applicationId,
                    application_name: null == c ? void 0 : c.gameName,
                    game_pid: null == c ? void 0 : c.pid,
                    recent_overlay_flux_actions: P,
                    overlay_module_state: null == c ? void 0 : c.state,
                    overlay_native_state: JSON.stringify(ei),
                    overlay_module_oop_initialization_state: JSON.stringify(g),
                    overlay_module_error_message: k.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(j),
                    fullscreen_history_for_pid: M,
                    media_session_id: h.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(T),
                    location: b,
                };
            await I.default.track(D.HAw.OVERLAY_BUG_REPORT, R),
                await (0, s.yy)(1e3),
                et(!1),
                null == i || i(),
                (0, d.mMO)(
                    async () => {
                        let { default: e } = await n.e("36058").then(n.bind(n, 823777));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, t),
                            );
                    },
                    {
                        contextKey: (0, d.TId)(x),
                    },
                );
        };
    return (
        (0, g.Ay)(() => {
            I.default.track(D.HAw.OPEN_MODAL, {
                type: "overlay_bug_reporter_modal",
                location: b,
            });
        }),
        (0, l.jsx)(u.Modal, {
            transitionState: p,
            title: T.intl.string(T.t.OKmenM),
            actions: [
                {
                    text: T.intl.string(T.t["ETE/oC"]),
                    onClick: i,
                    variant: "secondary",
                    disabled: ee,
                },
                {
                    text: T.intl.string(T.t.geKm7t),
                    onClick: ec,
                    variant: "primary",
                    loading: ee,
                },
            ],
            onClose: i,
            children: (0, l.jsxs)("div", {
                className: M.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.DB,
                        children: [
                            (0, l.jsx)(d.bfh, {
                                isShaking: en,
                                intensity: 1.5,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: er ? "text-feedback-critical" : "text-strong",
                                    children: T.intl.string(T.t.Trx7eJ),
                                }),
                            }),
                            (0, l.jsx)(d.l6P, {
                                label: T.intl.string(T.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: T.intl.string(T.t.mKTzjI),
                                options: eo,
                                value: H,
                                onSelectionChange: (e) => {
                                    Z(e), ea(!1), el(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            er &&
                                (0, l.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: T.intl.string(T.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: M.DB,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: T.intl.string(T.t.iZufAY),
                            }),
                            (0, l.jsx)(d.fs1, {
                                autosize: !0,
                                value: z,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: T.intl.string(T.t["68mJXW"]),
                                onChange: J,
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: T.intl.string(T.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: M.hr,
                    }),
                    (0, l.jsxs)("div", {
                        className: M.DB,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: T.intl.string(T.t["8+SU+a"]),
                            }),
                            (0, l.jsx)(K, {
                                selectedGame: Q,
                                setSelectedGame: $,
                            }),
                            (0, l.jsx)(d.l6P, {
                                label: T.intl.string(T.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: T.intl.string(T.t.IjlqrF),
                                options: es,
                                value: Y,
                                onSelectionChange: V,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
