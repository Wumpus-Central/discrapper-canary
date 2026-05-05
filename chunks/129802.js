a.d(t, { default: () => X });
var l = a(627968),
    n = a(64700),
    i = a(812729),
    r = a.n(i),
    o = a(189213),
    u = a(17928),
    d = a(499979),
    s = a(192308),
    m = a(568602),
    c = a(834730),
    g = a(691885),
    f = a(260598),
    y = a(684013),
    p = a(56562),
    v = a(964486),
    h = a(77729),
    _ = a(736056),
    b = a(763827),
    I = a(773371),
    N = a(174459),
    A = a(220478),
    S = a(9302),
    x = a(41984),
    G = a(181435),
    E = a(78878),
    k = a(651930);
a(321073);
var w = a(952818),
    D = a(760751),
    j = a(935208),
    T = a(296027),
    P = a(243612);
let O = new j.SnowflakeSequence(),
    M = {};
function C(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [T.default];
    for (let a of Object.values(t.getClosedTrackedGamesHistory()))
        if (a.applicationId === e.id || a.gameName === e.name) return a;
    return null;
}
function F(e) {
    let [t, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [w.Ay, T.default],
        l = C(e, [a]),
        n = null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0;
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: n?.pid ?? l?.pid ?? void 0,
        fullscreenType: n?.fullscreenType ?? l?.fullscreenType ?? void 0,
        trackedGame: l ?? void 0,
        persistentGame: e,
        runningGame: n,
    };
}
function L(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [D.A];
    if (null != e.gameId) {
        let a = t.getDetectableGame(e.gameId);
        if (null != a) return a;
    }
    let a = e.runningGame ?? e.persistentGame;
    if (null != a) {
        let e = t.findGame(a);
        if (null != e) return e;
    }
    if (null != e.gameName) {
        let a = t.searchGamesByName(e.gameName);
        if (1 === a.length) return t.getDetectableGame(a[0]) ?? null;
    }
    if (null == e.gameName) return null;
    let l =
        e.gameId ??
        (function (e) {
            if (null != M[e]) return M[e];
            let t = Date.now(),
                a = null;
            try {
                O.willOverflowNext() && O.reset(), (a = j.default.fromTimestampWithSequence(t, O));
            } catch {
                O.reset(), (a = j.default.fromTimestampWithSequence(t, O));
            }
            if (null == a) throw Error("Failed to generate snowflake id");
            return (M[e] = a), a;
        })(e.gameName);
    return {
        id: j.default.cast(l),
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
    };
}
function W(e) {
    let { selectedGame: t, setSelectedGame: a, placeholder: n } = e,
        i = (0, u.yK)([D.A, w.Ay, T.default], () => {
            let e = D.A.games,
                t = e.reduce((e, t) => ((e[t.id] = t), e), {});
            return [
                ...e,
                ...w.Ay.getGamesSeen(!1).reduce((e, a) => {
                    let l = a.id;
                    if (null != l && null != t[l]) return e;
                    let n = L(F(a, [w.Ay, T.default]), [D.A]);
                    if (null != n) {
                        if (null != t[n.id]) return e;
                        e.push(n);
                    }
                    return e;
                }, []),
            ];
        }, []),
        r = (0, u.bG)([D.A], () => (null == t ? null : L(t, [D.A])), [t]);
    return (0, l.jsx)(k.i, {
        games: i,
        selectedGame: r ?? null,
        onGameSelected: (e) => {
            null != e
                ? a(
                      (function (e) {
                          let [t, a] =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [w.Ay, T.default],
                              l = C(e, [a]);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: l?.pid ?? void 0,
                              fullscreenType: l?.fullscreenType ?? void 0,
                              trackedGame: l ?? void 0,
                              runningGame: null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0,
                          };
                      })(e),
                  )
                : a(null);
        },
        placeholder: n,
        analyticsSurface: "overlay_game_selection",
    });
}
var U = a(489277),
    B = a(127242),
    R = a(614455),
    H = a(652215),
    K = a(375708),
    z = a(988787);
function q(e, t) {
    return r()(e, t);
}
let J = new Set([
        p.aI.BORDERLESS_FULLSCREEN,
        p.aI.FULLSCREEN,
        p.aI.WINDOWED,
        p.aI.MAXIMIZED,
        p.aI.MINIMIZED,
        p.aI.UNKNOWN,
    ]),
    Z = {
        HandleFocusChanged: (e, t) => {
            if (!(0, G.$8)(e, "HandleFocusChanged")) return !0;
            let a = null != t ? (U.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set(),
                { focusedPid: l, focusedWindowHandle: n } = e.data;
            return null != n && null != l && l !== S.UNSET_PID && !!a.has(n) && l === t;
        },
        EventHook: (e, t) => {
            if (!(0, G.$8)(e, "EventHook")) return !0;
            let a = null != t ? (U.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set();
            try {
                let { receivedWindow: l, targetPid: n } = e.data;
                if (null != l && a.has(l)) return null != n && n === t;
            } finally {
                return !1;
            }
        },
    };
function X(e) {
    let t,
        i,
        r,
        k,
        D,
        { onClose: j, transitionState: O, location: M, appContext: L } = e,
        X = (0, u.bG)([I.default], () => I.default.getFocusedPID()) ?? (0, S.getPID)(),
        $ = (0, u.bG)([T.default], () => T.default.getTrackedGameByPid(X), [X]),
        [V, Y] = n.useState(null),
        [Q, ee] = n.useState(""),
        et =
            ((t = (0, P.b4)()),
            (i = (0, u.bG)([I.default], () => I.default.getFocusedPID()) ?? (0, S.getPID)()),
            (r = (0, u.bG)([T.default], () => T.default.getTrackedGameByPid(i), [i])),
            (k = (0, u.bG)([w.Ay], () => w.Ay.getVisibleGame())),
            (D = (0, u.bG)([w.Ay], () => w.Ay.getGamesSeen(!1)[0])),
            (0, u.bG)([w.Ay, T.default], () => {
                switch (!0) {
                    case null != r:
                        return (function (e) {
                            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [w.Ay];
                            return {
                                gameId: e.applicationId ?? void 0,
                                gameName: e.gameName ?? void 0,
                                gamePid: e.pid,
                                fullscreenType: e.fullscreenType,
                                trackedGame: e,
                                runningGame: null != e.gameName ? (t.getGameForName(e.gameName) ?? void 0) : void 0,
                            };
                        })(r, [w.Ay]);
                    case null != t:
                        return (function (e) {
                            let [t, a] =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [w.Ay, T.default],
                                l = t.getGameForName(e.name),
                                n = l?.pid;
                            return {
                                gameId: e.id,
                                gameName: e.name,
                                gamePid: l?.pid,
                                fullscreenType: l?.fullscreenType ?? void 0,
                                runningGame: l ?? void 0,
                                trackedGame: null != n ? (a.getTrackedGameByPid(n) ?? void 0) : void 0,
                            };
                        })(t, [w.Ay, T.default]);
                    case null != k:
                        return (function (e) {
                            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [T.default];
                            return {
                                gameId: e.id,
                                gameName: e.name,
                                gamePid: e.pid,
                                fullscreenType: e.fullscreenType,
                                trackedGame: C(e, [t]) ?? void 0,
                                runningGame: e,
                            };
                        })(k, [T.default]);
                    case null != D:
                        return F(D, [w.Ay, T.default]);
                    default:
                        return null;
                }
            }, [t, r, k, D])),
        [ea, el] = n.useState(et?.fullscreenType ?? $?.fullscreenType ?? null),
        [en, ei] = n.useState(et),
        [er, eo] = n.useState(!1),
        [eu, ed] = n.useState(!1),
        [es, em] = n.useState(!1),
        {
            nativeState: ec,
            breadcrumbs: [eg],
        } =
            ((0, v.Ay)(
                () => (
                    y.A.setModuleLogging(!0),
                    y.A.setStateDebugging(!0),
                    () => {
                        y.A.setModuleLogging(!1), y.A.setStateDebugging(!1);
                    }
                ),
            ),
            (0, u.bG)(
                [B.A],
                () => ({ nativeState: B.A.getDebuggingState(), breadcrumbs: B.A.getOverlayLoggingBreadcrumbs() }),
                [],
                q,
            )),
        ef = n.useMemo(() => {
            let e = {
                game_crashes_occurred: K.t["1UWmCV"],
                poor_performance: K.t["4owu+4"],
                overlay_unresponsive: K.t.Q8Z0xo,
                keybindings_not_working: K.t.UnzaZs,
                alt_tabbing_issues: K.t["/sG9Sf"],
                game_not_interactable: K.t["+18gq6"],
                game_forced_minimized: K.t.dabM8C,
                other: K.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({ id: t, label: K.intl.string(e[t]), value: t }));
        }, []),
        ey = n.useMemo(() => {
            let e = {
                [p.aI.FULLSCREEN]: K.t.AjBsPe,
                [p.aI.WINDOWED]: K.t["0oYq2i"],
                [p.aI.BORDERLESS_FULLSCREEN]: K.t.NwNvjf,
                [p.aI.MINIMIZED]: K.t.Wypflu,
                [p.aI.MAXIMIZED]: K.t["MUX2+G"],
                [p.aI.UNKNOWN]: K.t.QPOep8,
            };
            return [...J].map((t) => ({ id: t.toString(), label: K.intl.string(e[t]), value: t }));
        }, []),
        ep = async () => {
            ed(!0), await (0, d.yy)(500), ed(!1);
        },
        ev = async () => {
            if (null === V && 0 === Q.length) {
                em(!0), ep();
                return;
            }
            eo(!0);
            let e = I.default.getFocusedPID() ?? (0, S.getPID)(),
                t = T.default.getTrackedGameByPid(e),
                n = U.A.getPopoutInitializationStages(),
                i = t?.overlayMethod != null ? x.Ue[t.overlayMethod] : null,
                r = t?.fullscreenType ?? p.aI.UNKNOWN,
                o = (0, G.tn)(eg, (t) => {
                    for (let a of Object.values(Z))
                        try {
                            if (!a(t, e)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                u = E.A.getRecentActions(10),
                m = A.A.getRecentExperimentBuckets(_.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
                c =
                    t?.fullscreenHistory == null
                        ? null
                        : Object.entries(t.fullscreenHistory)
                              .sort((e, t) => {
                                  let [a] = e,
                                      [l] = t;
                                  return Number(l) - Number(a);
                              })
                              .map((e) => {
                                  let [t, a] = e;
                                  return `${t}:${p.aI[a]}`;
                              }),
                g = {
                    issue_category: V,
                    details: Q,
                    overlay_render_method: i,
                    hardware_display_count: (await h.A?.hardware?.getDisplayCount?.()) ?? null,
                    detected_fullscreen_type: p.aI[r],
                    application_id: t?.applicationId,
                    application_name: t?.gameName,
                    game_pid: t?.pid,
                    recent_overlay_flux_actions: u,
                    overlay_module_state: t?.state,
                    overlay_native_state: JSON.stringify(ec),
                    overlay_module_oop_initialization_state: JSON.stringify(n),
                    overlay_module_error_message: R.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(o),
                    fullscreen_history_for_pid: c,
                    media_session_id: b.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(m),
                    location: M,
                };
            await N.default.track(H.HAw.OVERLAY_BUG_REPORT, g),
                await (0, d.yy)(1e3),
                eo(!1),
                j?.(),
                (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([a.e("4701"), a.e("36058")]).then(a.bind(a, 823777));
                        return (t) => (0, l.jsx)(e, { ...t });
                    },
                    { contextKey: (0, s.modalContextFromAppContext)(L) },
                );
        };
    return (
        (0, v.Ay)(() => {
            N.default.track(H.HAw.OPEN_MODAL, { type: "overlay_bug_reporter_modal", location: M });
        }),
        (0, l.jsx)(o.Modal, {
            transitionState: O,
            title: K.intl.string(K.t.OKmenM),
            actions: [
                { text: K.intl.string(K.t["ETE/oC"]), onClick: j, variant: "secondary", disabled: er },
                { text: K.intl.string(K.t.geKm7t), onClick: ev, variant: "primary", loading: er },
            ],
            onClose: j,
            children: (0, l.jsxs)("div", {
                className: z.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: z.DB,
                        children: [
                            (0, l.jsx)(m.b, {
                                isShaking: eu,
                                intensity: 1.5,
                                children: (0, l.jsx)(c.E, {
                                    variant: "text-md/medium",
                                    color: es ? "text-feedback-critical" : "text-strong",
                                    children: K.intl.string(K.t.Trx7eJ),
                                }),
                            }),
                            (0, l.jsx)(g.l, {
                                label: K.intl.string(K.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: K.intl.string(K.t.mKTzjI),
                                options: ef,
                                value: V,
                                onSelectionChange: (e) => {
                                    Y(e), em(!1), ed(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            es &&
                                (0, l.jsx)(c.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: K.intl.string(K.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: z.DB,
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: K.intl.string(K.t.iZufAY),
                            }),
                            (0, l.jsx)(f.f, {
                                autosize: !0,
                                value: Q,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: K.intl.string(K.t["68mJXW"]),
                                onChange: ee,
                            }),
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: K.intl.string(K.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: z.hr }),
                    (0, l.jsxs)("div", {
                        className: z.DB,
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: K.intl.string(K.t["8+SU+a"]),
                            }),
                            (0, l.jsx)(W, {
                                selectedGame: en,
                                setSelectedGame: ei,
                                placeholder: K.intl.string(K.t.b1IW2e),
                            }),
                            (0, l.jsx)(g.l, {
                                label: K.intl.string(K.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: K.intl.string(K.t.IjlqrF),
                                options: ey,
                                value: ea,
                                onSelectionChange: el,
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
