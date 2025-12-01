n.d(t, { default: () => K }), n(415506), n(388685), n(539854), n(642613), n(49124);
var l = n(54381),
    r = n(473749),
    a = n(348327),
    i = n.n(a),
    u = n(793030),
    o = n(442837),
    s = n(379649),
    d = n(481060),
    c = n(13245),
    m = n(593472),
    g = n(493773),
    f = n(579806),
    v = n(353926),
    p = n(594190),
    y = n(953848),
    _ = n(77498),
    h = n(19780),
    x = n(808506),
    N = n(626135),
    b = n(499533),
    S = n(709054),
    P = n(145597),
    E = n(837268),
    I = n(307149),
    O = n(475866),
    Z = n(371651),
    G = n(610394),
    w = n(338949),
    k = n(509140),
    j = n(388627),
    T = n(981631),
    D = n(388032),
    C = n(603841);
function M(e, t) {
    return i()(e, t);
}
let R = new S.SnowflakeSequence(),
    J = {},
    F = new Set([
        m.Jx.BORDERLESS_FULLSCREEN,
        m.Jx.FULLSCREEN,
        m.Jx.WINDOWED,
        m.Jx.MAXIMIZED,
        m.Jx.MINIMIZED,
        m.Jx.UNKNOWN,
    ]);
function L(e) {
    for (let t of Object.values(Z.default.getClosedTrackedGamesHistory()))
        if (t.applicationId === e.id || t.gameName === e.name) return t;
    return null;
}
function U(e) {
    var t, n, l;
    let r = L(e);
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (t = null == r ? void 0 : r.pid) ? t : void 0,
        fullscreenType: null != (n = null == r ? void 0 : r.fullscreenType) ? n : void 0,
        trackedGame: null != r ? r : void 0,
        persistentGame: e,
        runningGame: null != e.name && null != (l = p.ZP.getGameForName(e.name)) ? l : void 0,
    };
}
function W(e) {
    var t, n;
    let [l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [_.Z];
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
                  if (null != J[e]) return J[e];
                  let t = Date.now(),
                      n = null;
                  try {
                      R.willOverflowNext() && R.reset(), (n = S.default.fromTimestampWithSequence(t, R));
                  } catch (e) {
                      R.reset(), (n = S.default.fromTimestampWithSequence(t, R));
                  }
                  if (null == n) throw Error("Failed to generate snowflake id");
                  return (J[e] = n), n;
              })(e.gameName);
    return {
        id: S.default.cast(a),
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
function A(e) {
    let { selectedGame: t, setSelectedGame: n } = e,
        r = (0, o.Wu)([_.Z, p.ZP], () => {
            let e = _.Z.games,
                t = e.reduce((e, t) => ((e[t.id] = t), e), {});
            return [
                ...e,
                ...p.ZP.getGamesSeen(!1).reduce((e, n) => {
                    let l = n.id;
                    if (null != l && null != t[l]) return e;
                    let r = W(U(n), void 0);
                    if (null != r) {
                        if (null != t[r.id]) return e;
                        e.push(r);
                    }
                    return e;
                }, []),
            ];
        }, []),
        a = (0, o.e7)([_.Z], () => W(t, [_.Z]), [t]);
    return (0, l.jsx)(y.g, {
        games: r,
        selectedGame: null != a ? a : null,
        onGameSelected: (e) => {
            null != e
                ? n(
                      (function (e) {
                          var t, n, l;
                          let r = L(e);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: null != (t = null == r ? void 0 : r.pid) ? t : void 0,
                              fullscreenType: null != (n = null == r ? void 0 : r.fullscreenType) ? n : void 0,
                              trackedGame: null != r ? r : void 0,
                              runningGame: null != e.name && null != (l = p.ZP.getGameForName(e.name)) ? l : void 0,
                          };
                      })(e),
                  )
                : n(null);
        },
        placeholder: D.intl.string(D.t.b1IW2e),
    });
}
let B = {
    HandleFocusChanged: (e, t) => {
        var n;
        if (!(0, I._R)(e, "HandleFocusChanged")) return !0;
        let l = null != t && null != (n = G.Z.getKnownWindowHandlesForPID(t)) ? n : new Set(),
            { focusedPid: r, focusedWindowHandle: a } = e.data;
        return null != a && null != r && r !== P.UNSET_PID && !!l.has(a) && r === t;
    },
    EventHook: (e, t) => {
        var n;
        if (!(0, I._R)(e, "EventHook")) return !0;
        let l = null != t && null != (n = G.Z.getKnownWindowHandlesForPID(t)) ? n : new Set();
        try {
            let { receivedWindow: n, targetPid: r } = e.data;
            if (null != n && l.has(n)) return null != r && r === t;
        } finally {
            return !1;
        }
    },
};
function K(e) {
    var t, a;
    let { onClose: i, transitionState: y, location: _, appContext: S } = e,
        R = (0, o.e7)([x.default], () => x.default.getFocusedPID()),
        J = null != R ? R : (0, P.getPID)(),
        W = (0, o.e7)([Z.default], () => Z.default.getTrackedGameByPid(J), [J]),
        [K, z] = r.useState(null),
        [H, q] = r.useState(""),
        X = (function () {
            let e = (0, j.II)(),
                t = (0, o.e7)([x.default], () => x.default.getFocusedPID()),
                n = null != t ? t : (0, P.getPID)(),
                l = (0, o.e7)([Z.default], () => Z.default.getTrackedGameByPid(n), [n]),
                r = (0, o.e7)([p.ZP], () => p.ZP.getVisibleGame()),
                a = (0, o.e7)([p.ZP], () => p.ZP.getGamesSeen(!1)[0]);
            switch (!0) {
                case null != l:
                    return {
                        gameId: null != (u = l.applicationId) ? u : void 0,
                        gameName: null != (s = l.gameName) ? s : void 0,
                        gamePid: l.pid,
                        fullscreenType: l.fullscreenType,
                        trackedGame: l,
                        runningGame: null != l.gameName && null != (d = p.ZP.getGameForName(l.gameName)) ? d : void 0,
                    };
                case null != e:
                    var i, u, s, d, c, m;
                    let g = p.ZP.getGameForName(e.name),
                        f = null == g ? void 0 : g.pid;
                    return {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: null == g ? void 0 : g.pid,
                        fullscreenType: null != (c = null == g ? void 0 : g.fullscreenType) ? c : void 0,
                        runningGame: null != g ? g : void 0,
                        trackedGame: null != f && null != (m = Z.default.getTrackedGameByPid(f)) ? m : void 0,
                    };
                case null != r:
                    return {
                        gameId: r.id,
                        gameName: r.name,
                        gamePid: r.pid,
                        fullscreenType: r.fullscreenType,
                        trackedGame: null != (i = L(r)) ? i : void 0,
                        runningGame: r,
                    };
                default:
                    return null != a ? U(a) : null;
            }
        })(),
        [V, Y] = r.useState(
            null !=
                (a = null != (t = null == X ? void 0 : X.fullscreenType) ? t : null == W ? void 0 : W.fullscreenType)
                ? a
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
            ((0, g.ZP)(
                () => (
                    c.Z.setModuleLogging(!0),
                    c.Z.setStateDebugging(!0),
                    () => {
                        c.Z.setModuleLogging(!1), c.Z.setStateDebugging(!1);
                    }
                ),
            ),
            (0, o.e7)(
                [w.Z],
                () => ({
                    nativeState: w.Z.getDebuggingState(),
                    breadcrumbs: w.Z.getOverlayLoggingBreadcrumbs(),
                }),
                [],
                M,
            )),
        eo = r.useMemo(() => {
            let e = {
                game_crashes_occurred: D.t["1UWmCV"],
                poor_performance: D.t["4owu+4"],
                overlay_unresponsive: D.t.Q8Z0xo,
                keybindings_not_working: D.t.UnzaZs,
                alt_tabbing_issues: D.t["/sG9Sf"],
                game_not_interactable: D.t["+18gq6"],
                game_forced_minimized: D.t.dabM8C,
                other: D.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({
                label: D.intl.string(e[t]),
                value: t,
            }));
        }, []),
        es = r.useMemo(() => {
            let e = {
                [m.Jx.FULLSCREEN]: D.t.AjBsPe,
                [m.Jx.WINDOWED]: D.t["0oYq2i"],
                [m.Jx.BORDERLESS_FULLSCREEN]: D.t.NwNvjf,
                [m.Jx.MINIMIZED]: D.t.Wypflu,
                [m.Jx.MAXIMIZED]: D.t["MUX2+G"],
                [m.Jx.UNKNOWN]: D.t.QPOep8,
            };
            return [...F].map((t) => ({
                label: D.intl.string(e[t]),
                value: t,
            }));
        }, []),
        ed = async () => {
            el(!0), await (0, s._v)(500), el(!1);
        },
        ec = async () => {
            var e, t, r, a, u;
            if (null === K && 0 === H.length) {
                ea(!0), ed();
                return;
            }
            et(!0);
            let o = null != (r = x.default.getFocusedPID()) ? r : (0, P.getPID)(),
                c = Z.default.getTrackedGameByPid(o),
                g = G.Z.getPopoutInitializationStages(),
                p = (null == c ? void 0 : c.overlayMethod) != null ? E.gl[c.overlayMethod] : null,
                y = null != (a = null == c ? void 0 : c.fullscreenType) ? a : m.Jx.UNKNOWN,
                w = (0, I.y2)(eu, (e) => {
                    for (let t of Object.values(B))
                        try {
                            if (!t(e, o)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                j = O.Z.getRecentActions(10),
                D = b.Z.getRecentExperimentBuckets(
                    v.Z.getAllExperimentAssignments(),
                    new Date(Date.now() - 7776000000),
                ),
                C =
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
                                  return "".concat(t, ":").concat(m.Jx[n]);
                              }),
                M = {
                    issue_category: K,
                    details: H,
                    overlay_render_method: p,
                    hardware_display_count:
                        null !=
                        (u = await (null === f.Z ||
                        void 0 === f.Z ||
                        null == (t = f.Z.hardware) ||
                        null == (e = t.getDisplayCount)
                            ? void 0
                            : e.call(t)))
                            ? u
                            : null,
                    detected_fullscreen_type: m.Jx[y],
                    application_id: null == c ? void 0 : c.applicationId,
                    application_name: null == c ? void 0 : c.gameName,
                    game_pid: null == c ? void 0 : c.pid,
                    recent_overlay_flux_actions: j,
                    overlay_module_state: null == c ? void 0 : c.state,
                    overlay_native_state: JSON.stringify(ei),
                    overlay_module_oop_initialization_state: JSON.stringify(g),
                    overlay_module_error_message: k.Z.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(w),
                    fullscreen_history_for_pid: C,
                    media_session_id: h.Z.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(D),
                    location: _,
                };
            await N.default.track(T.rMx.OVERLAY_BUG_REPORT, M),
                await (0, s._v)(1000),
                et(!1),
                null == i || i(),
                (0, d.ZDy)(
                    async () => {
                        let { default: e } = await n.e("86974").then(n.bind(n, 251889));
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
                    { contextKey: (0, d.VnL)(S) },
                );
        };
    return (
        (0, g.ZP)(() => {
            N.default.track(T.rMx.OPEN_MODAL, {
                type: "overlay_bug_reporter_modal",
                location: _,
            });
        }),
        (0, l.jsx)(u.Modal, {
            transitionState: y,
            title: D.intl.string(D.t.OKmenM),
            actions: [
                {
                    text: D.intl.string(D.t["ETE/oC"]),
                    onClick: i,
                    variant: "secondary",
                    disabled: ee,
                },
                {
                    text: D.intl.string(D.t.geKm7t),
                    onClick: ec,
                    variant: "primary",
                    loading: ee,
                },
            ],
            onClose: i,
            children: (0, l.jsxs)("div", {
                className: C.modalContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: C.itemContainer,
                        children: [
                            (0, l.jsx)(d.UkV, {
                                isShaking: en,
                                intensity: 1.5,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: er ? "text-danger" : "text-primary",
                                    children: D.intl.string(D.t.Trx7eJ),
                                }),
                            }),
                            (0, l.jsx)(d.PhF, {
                                placeholder: D.intl.string(D.t.mKTzjI),
                                options: eo,
                                isSelected: (e) => e === K,
                                select: (e) => {
                                    z(e), ea(!1), el(!1);
                                },
                                serialize: (e) => e,
                            }),
                            er &&
                                (0, l.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-danger",
                                    children: D.intl.string(D.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: C.itemContainer,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: D.intl.string(D.t.iZufAY),
                            }),
                            (0, l.jsx)(d.Kx8, {
                                autosize: !0,
                                value: H,
                                maxLength: 1000,
                                showCharacterCount: !1,
                                placeholder: D.intl.string(D.t["68mJXW"]),
                                onChange: q,
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: D.intl.string(D.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: C.hr }),
                    (0, l.jsxs)("div", {
                        className: C.itemContainer,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: D.intl.string(D.t["8+SU+a"]),
                            }),
                            (0, l.jsx)(A, {
                                selectedGame: Q,
                                setSelectedGame: $,
                            }),
                            (0, l.jsx)(d.PhF, {
                                placeholder: D.intl.string(D.t.IjlqrF),
                                options: es,
                                isSelected: (e) => e === V,
                                select: Y,
                                serialize: (e) => "".concat(e),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
