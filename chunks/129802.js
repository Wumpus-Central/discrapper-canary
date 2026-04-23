n.d(t, { default: () => J });
var a = n(627968),
    l = n(64700),
    r = n(812729),
    i = n.n(r),
    s = n(189213),
    o = n(17928),
    u = n(499979),
    d = n(192308),
    c = n(568602),
    m = n(834730),
    g = n(691885),
    f = n(260598),
    p = n(684013),
    h = n(56562),
    v = n(964486),
    y = n(77729),
    x = n(736056),
    b = n(763827),
    _ = n(773371),
    A = n(954571),
    N = n(220478),
    I = n(9302),
    w = n(41984),
    S = n(181435),
    E = n(78878),
    G = n(651930);
n(321073);
var j = n(328153),
    k = n(760751),
    C = n(935208),
    M = n(833551),
    D = n(243612);
let T = new C.SnowflakeSequence(),
    P = {};
function L(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [M.default];
    for (let n of Object.values(t.getClosedTrackedGamesHistory()))
        if (n.applicationId === e.id || n.gameName === e.name) return n;
    return null;
}
function O(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [j.Ay, M.default],
        a = L(e, [n]),
        l = null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0;
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: l?.pid ?? a?.pid ?? void 0,
        fullscreenType: l?.fullscreenType ?? a?.fullscreenType ?? void 0,
        trackedGame: a ?? void 0,
        persistentGame: e,
        runningGame: l,
    };
}
function R(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [k.A];
    if (null != e.gameId) {
        let n = t.getDetectableGame(e.gameId);
        if (null != n) return n;
    }
    let n = e.runningGame ?? e.persistentGame;
    if (null != n) {
        let e = t.findGame(n);
        if (null != e) return e;
    }
    if (null != e.gameName) {
        let n = t.searchGamesByName(e.gameName);
        if (1 === n.length) return t.getDetectableGame(n[0]) ?? null;
    }
    if (null == e.gameName) return null;
    let a =
        e.gameId ??
        (function (e) {
            if (null != P[e]) return P[e];
            let t = Date.now(),
                n = null;
            try {
                T.willOverflowNext() && T.reset(), (n = C.default.fromTimestampWithSequence(t, T));
            } catch {
                T.reset(), (n = C.default.fromTimestampWithSequence(t, T));
            }
            if (null == n) throw Error("Failed to generate snowflake id");
            return (P[e] = n), n;
        })(e.gameName);
    return {
        id: C.default.cast(a),
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
function F(e) {
    let { selectedGame: t, setSelectedGame: n, placeholder: l } = e,
        r = (0, o.yK)([k.A, j.Ay, M.default], () => {
            let e = k.A.games,
                t = e.reduce((e, t) => ((e[t.id] = t), e), {});
            return [
                ...e,
                ...j.Ay.getGamesSeen(!1).reduce((e, n) => {
                    let a = n.id;
                    if (null != a && null != t[a]) return e;
                    let l = R(O(n, [j.Ay, M.default]), [k.A]);
                    if (null != l) {
                        if (null != t[l.id]) return e;
                        e.push(l);
                    }
                    return e;
                }, []),
            ];
        }, []),
        i = (0, o.bG)([k.A], () => (null == t ? null : R(t, [k.A])), [t]);
    return (0, a.jsx)(G.i, {
        games: r,
        selectedGame: i ?? null,
        onGameSelected: (e) => {
            null != e
                ? n(
                      (function (e) {
                          let [t, n] =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [j.Ay, M.default],
                              a = L(e, [n]);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: a?.pid ?? void 0,
                              fullscreenType: a?.fullscreenType ?? void 0,
                              trackedGame: a ?? void 0,
                              runningGame: null != e.name ? (t.getGameForName(e.name) ?? void 0) : void 0,
                          };
                      })(e),
                  )
                : n(null);
        },
        placeholder: l,
    });
}
var W = n(489277),
    z = n(127242),
    U = n(680243),
    B = n(652215),
    K = n(985018),
    Z = n(988787);
function H(e, t) {
    return i()(e, t);
}
let q = new Set([
        h.aI.BORDERLESS_FULLSCREEN,
        h.aI.FULLSCREEN,
        h.aI.WINDOWED,
        h.aI.MAXIMIZED,
        h.aI.MINIMIZED,
        h.aI.UNKNOWN,
    ]),
    V = {
        HandleFocusChanged: (e, t) => {
            if (!(0, S.$8)(e, "HandleFocusChanged")) return !0;
            let n = null != t ? (W.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set(),
                { focusedPid: a, focusedWindowHandle: l } = e.data;
            return null != l && null != a && a !== I.UNSET_PID && !!n.has(l) && a === t;
        },
        EventHook: (e, t) => {
            if (!(0, S.$8)(e, "EventHook")) return !0;
            let n = null != t ? (W.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set();
            try {
                let { receivedWindow: a, targetPid: l } = e.data;
                if (null != a && n.has(a)) return null != l && l === t;
            } finally {
                return !1;
            }
        },
    };
function J(e) {
    let t,
        r,
        i,
        G,
        k,
        { onClose: C, transitionState: T, location: P, appContext: R } = e,
        J = (0, o.bG)([_.default], () => _.default.getFocusedPID()) ?? (0, I.getPID)(),
        $ = (0, o.bG)([M.default], () => M.default.getTrackedGameByPid(J), [J]),
        [Y, Q] = l.useState(null),
        [X, ee] = l.useState(""),
        et =
            ((t = (0, D.b4)()),
            (r = (0, o.bG)([_.default], () => _.default.getFocusedPID()) ?? (0, I.getPID)()),
            (i = (0, o.bG)([M.default], () => M.default.getTrackedGameByPid(r), [r])),
            (G = (0, o.bG)([j.Ay], () => j.Ay.getVisibleGame())),
            (k = (0, o.bG)([j.Ay], () => j.Ay.getGamesSeen(!1)[0])),
            (0, o.bG)([j.Ay, M.default], () => {
                switch (!0) {
                    case null != i:
                        return (function (e) {
                            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [j.Ay];
                            return {
                                gameId: e.applicationId ?? void 0,
                                gameName: e.gameName ?? void 0,
                                gamePid: e.pid,
                                fullscreenType: e.fullscreenType,
                                trackedGame: e,
                                runningGame: null != e.gameName ? (t.getGameForName(e.gameName) ?? void 0) : void 0,
                            };
                        })(i, [j.Ay]);
                    case null != t:
                        return (function (e) {
                            let [t, n] =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [j.Ay, M.default],
                                a = t.getGameForName(e.name),
                                l = a?.pid;
                            return {
                                gameId: e.id,
                                gameName: e.name,
                                gamePid: a?.pid,
                                fullscreenType: a?.fullscreenType ?? void 0,
                                runningGame: a ?? void 0,
                                trackedGame: null != l ? (n.getTrackedGameByPid(l) ?? void 0) : void 0,
                            };
                        })(t, [j.Ay, M.default]);
                    case null != G:
                        return (function (e) {
                            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [M.default];
                            return {
                                gameId: e.id,
                                gameName: e.name,
                                gamePid: e.pid,
                                fullscreenType: e.fullscreenType,
                                trackedGame: L(e, [t]) ?? void 0,
                                runningGame: e,
                            };
                        })(G, [M.default]);
                    case null != k:
                        return O(k, [j.Ay, M.default]);
                    default:
                        return null;
                }
            }, [t, i, G, k])),
        [en, ea] = l.useState(et?.fullscreenType ?? $?.fullscreenType ?? null),
        [el, er] = l.useState(et),
        [ei, es] = l.useState(!1),
        [eo, eu] = l.useState(!1),
        [ed, ec] = l.useState(!1),
        {
            nativeState: em,
            breadcrumbs: [eg],
        } =
            ((0, v.Ay)(
                () => (
                    p.A.setModuleLogging(!0),
                    p.A.setStateDebugging(!0),
                    () => {
                        p.A.setModuleLogging(!1), p.A.setStateDebugging(!1);
                    }
                ),
            ),
            (0, o.bG)(
                [z.A],
                () => ({ nativeState: z.A.getDebuggingState(), breadcrumbs: z.A.getOverlayLoggingBreadcrumbs() }),
                [],
                H,
            )),
        ef = l.useMemo(() => {
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
        ep = l.useMemo(() => {
            let e = {
                [h.aI.FULLSCREEN]: K.t.AjBsPe,
                [h.aI.WINDOWED]: K.t["0oYq2i"],
                [h.aI.BORDERLESS_FULLSCREEN]: K.t.NwNvjf,
                [h.aI.MINIMIZED]: K.t.Wypflu,
                [h.aI.MAXIMIZED]: K.t["MUX2+G"],
                [h.aI.UNKNOWN]: K.t.QPOep8,
            };
            return [...q].map((t) => ({ id: t.toString(), label: K.intl.string(e[t]), value: t }));
        }, []),
        eh = async () => {
            eu(!0), await (0, u.yy)(500), eu(!1);
        },
        ev = async () => {
            if (null === Y && 0 === X.length) {
                ec(!0), eh();
                return;
            }
            es(!0);
            let e = _.default.getFocusedPID() ?? (0, I.getPID)(),
                t = M.default.getTrackedGameByPid(e),
                l = W.A.getPopoutInitializationStages(),
                r = t?.overlayMethod != null ? w.Ue[t.overlayMethod] : null,
                i = t?.fullscreenType ?? h.aI.UNKNOWN,
                s = (0, S.tn)(eg, (t) => {
                    for (let n of Object.values(V))
                        try {
                            if (!n(t, e)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                o = E.A.getRecentActions(10),
                c = N.A.getRecentExperimentBuckets(x.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
                m =
                    t?.fullscreenHistory == null
                        ? null
                        : Object.entries(t.fullscreenHistory)
                              .sort((e, t) => {
                                  let [n] = e,
                                      [a] = t;
                                  return Number(a) - Number(n);
                              })
                              .map((e) => {
                                  let [t, n] = e;
                                  return `${t}:${h.aI[n]}`;
                              }),
                g = {
                    issue_category: Y,
                    details: X,
                    overlay_render_method: r,
                    hardware_display_count: (await y.A?.hardware?.getDisplayCount?.()) ?? null,
                    detected_fullscreen_type: h.aI[i],
                    application_id: t?.applicationId,
                    application_name: t?.gameName,
                    game_pid: t?.pid,
                    recent_overlay_flux_actions: o,
                    overlay_module_state: t?.state,
                    overlay_native_state: JSON.stringify(em),
                    overlay_module_oop_initialization_state: JSON.stringify(l),
                    overlay_module_error_message: U.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(s),
                    fullscreen_history_for_pid: m,
                    media_session_id: b.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(c),
                    location: P,
                };
            await A.default.track(B.HAw.OVERLAY_BUG_REPORT, g),
                await (0, u.yy)(1e3),
                es(!1),
                C?.(),
                (0, d.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("36058").then(n.bind(n, 823777));
                        return (t) => (0, a.jsx)(e, { ...t });
                    },
                    { contextKey: (0, d.modalContextFromAppContext)(R) },
                );
        };
    return (
        (0, v.Ay)(() => {
            A.default.track(B.HAw.OPEN_MODAL, { type: "overlay_bug_reporter_modal", location: P });
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: T,
            title: K.intl.string(K.t.OKmenM),
            actions: [
                { text: K.intl.string(K.t["ETE/oC"]), onClick: C, variant: "secondary", disabled: ei },
                { text: K.intl.string(K.t.geKm7t), onClick: ev, variant: "primary", loading: ei },
            ],
            onClose: C,
            children: (0, a.jsxs)("div", {
                className: Z.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: Z.DB,
                        children: [
                            (0, a.jsx)(c.b, {
                                isShaking: eo,
                                intensity: 1.5,
                                children: (0, a.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: ed ? "text-feedback-critical" : "text-strong",
                                    children: K.intl.string(K.t.Trx7eJ),
                                }),
                            }),
                            (0, a.jsx)(g.l, {
                                label: K.intl.string(K.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: K.intl.string(K.t.mKTzjI),
                                options: ef,
                                value: Y,
                                onSelectionChange: (e) => {
                                    Q(e), ec(!1), eu(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            ed &&
                                (0, a.jsx)(m.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: K.intl.string(K.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: Z.DB,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: K.intl.string(K.t.iZufAY),
                            }),
                            (0, a.jsx)(f.f, {
                                autosize: !0,
                                value: X,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: K.intl.string(K.t["68mJXW"]),
                                onChange: ee,
                            }),
                            (0, a.jsx)(m.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: K.intl.string(K.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: Z.hr }),
                    (0, a.jsxs)("div", {
                        className: Z.DB,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: K.intl.string(K.t["8+SU+a"]),
                            }),
                            (0, a.jsx)(F, {
                                selectedGame: el,
                                setSelectedGame: er,
                                placeholder: K.intl.string(K.t.b1IW2e),
                            }),
                            (0, a.jsx)(g.l, {
                                label: K.intl.string(K.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: K.intl.string(K.t.IjlqrF),
                                options: ep,
                                value: en,
                                onSelectionChange: ea,
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
