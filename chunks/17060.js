n.d(t, { default: () => z }), n(415506), n(388685), n(539854), n(642613), n(49124);
var l = n(54381),
    r = n(473749),
    a = n(348327),
    i = n.n(a),
    u = n(793030),
    o = n(442837),
    d = n(379649),
    s = n(199849),
    c = n(481060),
    m = n(13245),
    g = n(593472),
    f = n(493773),
    v = n(579806),
    p = n(353926),
    y = n(594190),
    h = n(953848),
    x = n(77498),
    _ = n(19780),
    b = n(808506),
    N = n(626135),
    S = n(499533),
    E = n(709054),
    I = n(145597),
    P = n(837268),
    O = n(307149),
    Z = n(475866),
    G = n(371651),
    w = n(610394),
    k = n(338949),
    j = n(509140),
    T = n(388627),
    D = n(981631),
    C = n(388032),
    M = n(714367);
function R(e, t) {
    return i()(e, t);
}
let J = new E.SnowflakeSequence(),
    L = {},
    F = new Set([
        g.Jx.BORDERLESS_FULLSCREEN,
        g.Jx.FULLSCREEN,
        g.Jx.WINDOWED,
        g.Jx.MAXIMIZED,
        g.Jx.MINIMIZED,
        g.Jx.UNKNOWN,
    ]);
function U(e) {
    for (let t of Object.values(G.default.getClosedTrackedGamesHistory()))
        if (t.applicationId === e.id || t.gameName === e.name) return t;
    return null;
}
function W(e) {
    var t, n, l;
    let r = U(e);
    return {
        gameId: e.id,
        gameName: e.name,
        gamePid: null != (t = null == r ? void 0 : r.pid) ? t : void 0,
        fullscreenType: null != (n = null == r ? void 0 : r.fullscreenType) ? n : void 0,
        trackedGame: null != r ? r : void 0,
        persistentGame: e,
        runningGame: null != e.name && null != (l = y.ZP.getGameForName(e.name)) ? l : void 0,
    };
}
function B(e) {
    var t, n;
    let [l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [x.Z];
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
                      J.willOverflowNext() && J.reset(), (n = E.default.fromTimestampWithSequence(t, J));
                  } catch (e) {
                      J.reset(), (n = E.default.fromTimestampWithSequence(t, J));
                  }
                  if (null == n) throw Error("Failed to generate snowflake id");
                  return (L[e] = n), n;
              })(e.gameName);
    return {
        id: E.default.cast(a),
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
        r = (0, o.Wu)([x.Z, y.ZP], () => {
            let e = x.Z.games,
                t = e.reduce((e, t) => ((e[t.id] = t), e), {});
            return [
                ...e,
                ...y.ZP.getGamesSeen(!1).reduce((e, n) => {
                    let l = n.id;
                    if (null != l && null != t[l]) return e;
                    let r = B(W(n), void 0);
                    if (null != r) {
                        if (null != t[r.id]) return e;
                        e.push(r);
                    }
                    return e;
                }, []),
            ];
        }, []),
        a = (0, o.e7)([x.Z], () => B(t, [x.Z]), [t]);
    return (0, l.jsx)(h.g, {
        games: r,
        selectedGame: null != a ? a : null,
        onGameSelected: (e) => {
            null != e
                ? n(
                      (function (e) {
                          var t, n, l;
                          let r = U(e);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: null != (t = null == r ? void 0 : r.pid) ? t : void 0,
                              fullscreenType: null != (n = null == r ? void 0 : r.fullscreenType) ? n : void 0,
                              trackedGame: null != r ? r : void 0,
                              runningGame: null != e.name && null != (l = y.ZP.getGameForName(e.name)) ? l : void 0,
                          };
                      })(e),
                  )
                : n(null);
        },
        placeholder: C.intl.string(C.t.b1IW2e),
    });
}
let K = {
    HandleFocusChanged: (e, t) => {
        var n;
        if (!(0, O._R)(e, "HandleFocusChanged")) return !0;
        let l = null != t && null != (n = w.Z.getKnownWindowHandlesForPID(t)) ? n : new Set(),
            { focusedPid: r, focusedWindowHandle: a } = e.data;
        return null != a && null != r && r !== I.UNSET_PID && !!l.has(a) && r === t;
    },
    EventHook: (e, t) => {
        var n;
        if (!(0, O._R)(e, "EventHook")) return !0;
        let l = null != t && null != (n = w.Z.getKnownWindowHandlesForPID(t)) ? n : new Set();
        try {
            let { receivedWindow: n, targetPid: r } = e.data;
            if (null != n && l.has(n)) return null != r && r === t;
        } finally {
            return !1;
        }
    },
};
function z(e) {
    var t, a;
    let { onClose: i, transitionState: h, location: x, appContext: E } = e,
        J = (0, o.e7)([b.default], () => b.default.getFocusedPID()),
        L = null != J ? J : (0, I.getPID)(),
        B = (0, o.e7)([G.default], () => G.default.getTrackedGameByPid(L), [L]),
        [z, H] = r.useState(null),
        [q, X] = r.useState(""),
        V = (function () {
            let e = (0, T.II)(),
                t = (0, o.e7)([b.default], () => b.default.getFocusedPID()),
                n = null != t ? t : (0, I.getPID)(),
                l = (0, o.e7)([G.default], () => G.default.getTrackedGameByPid(n), [n]),
                r = (0, o.e7)([y.ZP], () => y.ZP.getVisibleGame()),
                a = (0, o.e7)([y.ZP], () => y.ZP.getGamesSeen(!1)[0]);
            switch (!0) {
                case null != l:
                    return {
                        gameId: null != (u = l.applicationId) ? u : void 0,
                        gameName: null != (d = l.gameName) ? d : void 0,
                        gamePid: l.pid,
                        fullscreenType: l.fullscreenType,
                        trackedGame: l,
                        runningGame: null != l.gameName && null != (s = y.ZP.getGameForName(l.gameName)) ? s : void 0,
                    };
                case null != e:
                    var i, u, d, s, c, m;
                    let g = y.ZP.getGameForName(e.name),
                        f = null == g ? void 0 : g.pid;
                    return {
                        gameId: e.id,
                        gameName: e.name,
                        gamePid: null == g ? void 0 : g.pid,
                        fullscreenType: null != (c = null == g ? void 0 : g.fullscreenType) ? c : void 0,
                        runningGame: null != g ? g : void 0,
                        trackedGame: null != f && null != (m = G.default.getTrackedGameByPid(f)) ? m : void 0,
                    };
                case null != r:
                    return {
                        gameId: r.id,
                        gameName: r.name,
                        gamePid: r.pid,
                        fullscreenType: r.fullscreenType,
                        trackedGame: null != (i = U(r)) ? i : void 0,
                        runningGame: r,
                    };
                default:
                    return null != a ? W(a) : null;
            }
        })(),
        [Y, Q] = r.useState(
            null !=
                (a = null != (t = null == V ? void 0 : V.fullscreenType) ? t : null == B ? void 0 : B.fullscreenType)
                ? a
                : null,
        ),
        [$, ee] = r.useState(V),
        [et, en] = r.useState(!1),
        [el, er] = r.useState(!1),
        [ea, ei] = r.useState(!1),
        {
            nativeState: eu,
            breadcrumbs: [eo],
        } =
            ((0, f.ZP)(
                () => (
                    m.Z.setModuleLogging(!0),
                    m.Z.setStateDebugging(!0),
                    () => {
                        m.Z.setModuleLogging(!1), m.Z.setStateDebugging(!1);
                    }
                ),
            ),
            (0, o.e7)(
                [k.Z],
                () => ({
                    nativeState: k.Z.getDebuggingState(),
                    breadcrumbs: k.Z.getOverlayLoggingBreadcrumbs(),
                }),
                [],
                R,
            )),
        ed = r.useMemo(() => {
            let e = {
                game_crashes_occurred: C.t["1UWmCV"],
                poor_performance: C.t["4owu+4"],
                overlay_unresponsive: C.t.Q8Z0xo,
                keybindings_not_working: C.t.UnzaZs,
                alt_tabbing_issues: C.t["/sG9Sf"],
                game_not_interactable: C.t["+18gq6"],
                game_forced_minimized: C.t.dabM8C,
                other: C.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({
                label: C.intl.string(e[t]),
                value: t,
            }));
        }, []),
        es = r.useMemo(() => {
            let e = {
                [g.Jx.FULLSCREEN]: C.t.AjBsPe,
                [g.Jx.WINDOWED]: C.t["0oYq2i"],
                [g.Jx.BORDERLESS_FULLSCREEN]: C.t.NwNvjf,
                [g.Jx.MINIMIZED]: C.t.Wypflu,
                [g.Jx.MAXIMIZED]: C.t["MUX2+G"],
                [g.Jx.UNKNOWN]: C.t.QPOep8,
            };
            return [...F].map((t) => ({
                label: C.intl.string(e[t]),
                value: t,
            }));
        }, []),
        ec = async () => {
            er(!0), await (0, d._v)(500), er(!1);
        },
        em = async () => {
            var e, t, r, a, u;
            if (null === z && 0 === q.length) {
                ei(!0), ec();
                return;
            }
            en(!0);
            let o = null != (r = b.default.getFocusedPID()) ? r : (0, I.getPID)(),
                s = G.default.getTrackedGameByPid(o),
                m = w.Z.getPopoutInitializationStages(),
                f = (null == s ? void 0 : s.overlayMethod) != null ? P.gl[s.overlayMethod] : null,
                y = null != (a = null == s ? void 0 : s.fullscreenType) ? a : g.Jx.UNKNOWN,
                h = (0, O.y2)(eo, (e) => {
                    for (let t of Object.values(K))
                        try {
                            if (!t(e, o)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                k = Z.Z.getRecentActions(10),
                T = S.Z.getRecentExperimentBuckets(
                    p.Z.getAllExperimentAssignments(),
                    new Date(Date.now() - 7776000000),
                ),
                C =
                    (null == s ? void 0 : s.fullscreenHistory) == null
                        ? null
                        : Object.entries(s.fullscreenHistory)
                              .sort((e, t) => {
                                  let [n] = e,
                                      [l] = t;
                                  return Number(l) - Number(n);
                              })
                              .map((e) => {
                                  let [t, n] = e;
                                  return "".concat(t, ":").concat(g.Jx[n]);
                              }),
                M = {
                    issue_category: z,
                    details: q,
                    overlay_render_method: f,
                    hardware_display_count:
                        null !=
                        (u = await (null === v.Z ||
                        void 0 === v.Z ||
                        null == (t = v.Z.hardware) ||
                        null == (e = t.getDisplayCount)
                            ? void 0
                            : e.call(t)))
                            ? u
                            : null,
                    detected_fullscreen_type: g.Jx[y],
                    application_id: null == s ? void 0 : s.applicationId,
                    application_name: null == s ? void 0 : s.gameName,
                    game_pid: null == s ? void 0 : s.pid,
                    recent_overlay_flux_actions: k,
                    overlay_module_state: null == s ? void 0 : s.state,
                    overlay_native_state: JSON.stringify(eu),
                    overlay_module_oop_initialization_state: JSON.stringify(m),
                    overlay_module_error_message: j.Z.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(h),
                    fullscreen_history_for_pid: C,
                    media_session_id: _.Z.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(T),
                    location: x,
                };
            await N.default.track(D.rMx.OVERLAY_BUG_REPORT, M),
                await (0, d._v)(1000),
                en(!1),
                null == i || i(),
                (0, c.ZDy)(
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
                    { contextKey: (0, c.VnL)(E) },
                );
        };
    return (
        (0, f.ZP)(() => {
            N.default.track(D.rMx.OPEN_MODAL, {
                type: "overlay_bug_reporter_modal",
                location: x,
            });
        }),
        (0, l.jsx)(u.Modal, {
            transitionState: h,
            title: C.intl.string(C.t.OKmenM),
            actions: [
                {
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: i,
                    variant: "secondary",
                    disabled: et,
                },
                {
                    text: C.intl.string(C.t.geKm7t),
                    onClick: em,
                    variant: "primary",
                    loading: et,
                },
            ],
            onClose: i,
            children: (0, l.jsxs)("div", {
                className: M.modalContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.itemContainer,
                        children: [
                            (0, l.jsx)(c.UkV, {
                                isShaking: el,
                                intensity: 1.5,
                                children: (0, l.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: ea ? "text-feedback-critical" : "text-strong",
                                    children: C.intl.string(C.t.Trx7eJ),
                                }),
                            }),
                            (0, l.jsx)(s.B6, {
                                placeholder: C.intl.string(C.t.mKTzjI),
                                options: ed,
                                isSelected: (e) => e === z,
                                select: (e) => {
                                    H(e), ei(!1), er(!1);
                                },
                                serialize: (e) => e,
                            }),
                            ea &&
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: C.intl.string(C.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: M.itemContainer,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: C.intl.string(C.t.iZufAY),
                            }),
                            (0, l.jsx)(c.Kx8, {
                                autosize: !0,
                                value: q,
                                maxLength: 1000,
                                showCharacterCount: !1,
                                placeholder: C.intl.string(C.t["68mJXW"]),
                                onChange: X,
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: M.hr }),
                    (0, l.jsxs)("div", {
                        className: M.itemContainer,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: C.intl.string(C.t["8+SU+a"]),
                            }),
                            (0, l.jsx)(A, {
                                selectedGame: $,
                                setSelectedGame: ee,
                            }),
                            (0, l.jsx)(s.B6, {
                                placeholder: C.intl.string(C.t.IjlqrF),
                                options: es,
                                isSelected: (e) => e === Y,
                                select: Q,
                                serialize: (e) => "".concat(e),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
