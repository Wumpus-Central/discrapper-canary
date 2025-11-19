n.d(t, { default: () => F }), n(388685), n(642613), n(49124);
var l = n(54381),
    a = n(473749),
    i = n(348327),
    r = n.n(i),
    o = n(793030),
    s = n(442837),
    u = n(379649),
    d = n(481060),
    c = n(13245),
    m = n(593472),
    g = n(493773),
    p = n(579806),
    f = n(835473),
    v = n(353926),
    x = n(594190),
    y = n(925329),
    _ = n(19780),
    b = n(808506),
    h = n(626135),
    O = n(499533),
    S = n(145597),
    N = n(427860),
    j = n(837268),
    T = n(475866),
    I = n(371651),
    P = n(610394),
    C = n(338949),
    E = n(509140),
    Z = n(981631),
    w = n(388032),
    D = n(603841);
function k(e, t) {
    return r()(e, t);
}
let M = new Set([
    m.Jx.BORDERLESS_FULLSCREEN,
    m.Jx.FULLSCREEN,
    m.Jx.WINDOWED,
    m.Jx.MAXIMIZED,
    m.Jx.MINIMIZED,
    m.Jx.UNKNOWN,
]);
function J(e) {
    var t, n;
    let { game: a } = e,
        i = (null == a ? void 0 : a.gameId) != null ? [a.gameId] : [],
        [r] = (0, f.Z)(i);
    return null == a
        ? (0, l.jsxs)("div", {
              className: D.gameSelectionOption,
              children: [
                  (0, l.jsx)(d.Text, {
                      variant: "text-md/medium",
                      color: "text-primary",
                      className: D.gameSelectionOptionText,
                      children: w.intl.string(w.t.b1IW2e),
                  }),
                  (0, l.jsx)(d.Fbu, {
                      color: d.TVs.colors.INTERACTIVE_NORMAL,
                      size: "sm",
                      className: D.gameSelectionOptionChevron,
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: D.gameSelectionOption,
              children: [
                  (0, l.jsx)(y.Z, {
                      game: r,
                      size: y.A.XSMALL,
                  }),
                  (0, l.jsx)(d.Text, {
                      variant: "text-md/medium",
                      color: "text-primary",
                      className: D.gameSelectionOptionText,
                      children:
                          null != (t = null == r ? void 0 : r.name)
                              ? t
                              : null != (n = a.gameName)
                                ? n
                                : w.intl.string(w.t.kYpwDv),
                  }),
                  (0, l.jsx)(d.Fbu, {
                      color: d.TVs.colors.INTERACTIVE_NORMAL,
                      size: "sm",
                      className: D.gameSelectionOptionChevron,
                  }),
              ],
          });
}
function L(e) {
    for (let t of Object.values(I.default.getClosedTrackedGamesHistory()))
        if (t.applicationId === e.id || t.gameName === e.name) return t;
    return null;
}
function R(e) {
    let { selectedGame: t, setSelectedGame: a } = e,
        i = (e) => {
            null != e
                ? a(
                      (function (e) {
                          var t, n;
                          let l = L(e);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: null != (t = null == l ? void 0 : l.pid) ? t : void 0,
                              fullscreenType: null != (n = null == l ? void 0 : l.fullscreenType) ? n : void 0,
                              trackedGame: null != l ? l : void 0,
                          };
                      })(e),
                  )
                : a(null);
        };
    return (0, l.jsx)(d.kL8, {
        "aria-label": w.intl.string(w.t.b1IW2e),
        onClick: () => {
            (0, d.ZDy)(async () => {
                let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                return (n) => {
                    var a, r, o, s;
                    return (0, l.jsx)(
                        e,
                        ((o = (function (e) {
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
                        })({}, n)),
                        (s = s =
                            {
                                defaultStep: "game_search",
                                detectedActivity:
                                    null != t
                                        ? {
                                              application_id: null != (a = t.gameId) ? a : void 0,
                                              name: null != (r = t.gameName) ? r : "",
                                          }
                                        : void 0,
                                onSubmitted: i,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        o),
                    );
                };
            });
        },
        children: (0, l.jsx)(J, { game: t }),
    });
}
let A = {
    HandleFocusChanged: (e, t) => {
        var n;
        if (!(0, N._R)(e, "HandleFocusChanged")) return !0;
        let l = null != t && null != (n = P.Z.getKnownWindowHandlesForPID(t)) ? n : new Set(),
            { focusedPid: a, focusedWindowHandle: i } = e.data;
        return null == i && null == a && !!l.has(i) && a === t;
    },
    EventHook: (e, t) => {
        var n;
        if (!(0, N._R)(e, "EventHook")) return !0;
        let l = null != t && null != (n = P.Z.getKnownWindowHandlesForPID(t)) ? n : new Set();
        try {
            let { receivedWindow: n, targetPid: a } = e.data;
            if (null != n && l.has(n)) return null != a && a === t;
        } finally {
            return !1;
        }
    },
};
function F(e) {
    var t, n;
    let { onClose: i, transitionState: r, location: f, appContext: y } = e,
        J = (0, s.e7)([b.default], () => {
            var e;
            return null != (e = b.default.getFocusedPID()) ? e : (0, S.getPID)();
        }),
        F = (0, s.e7)([I.default], () => I.default.getTrackedGameByPid(J)),
        [G, U] = a.useState(null),
        [W, z] = a.useState(""),
        B = (function () {
            var e, t;
            let n = (0, s.e7)([b.default], () => {
                    var e;
                    return null != (e = b.default.getFocusedPID()) ? e : (0, S.getPID)();
                }),
                l = (0, s.e7)([I.default], () => I.default.getTrackedGameByPid(n)),
                a = (0, s.e7)([x.ZP], () => x.ZP.getVisibleGame()),
                i = (0, s.e7)([x.ZP], () => x.ZP.getGamesSeen(!1)[0]);
            return null != l
                ? {
                      gameId: null != (e = l.applicationId) ? e : void 0,
                      gameName: null != (t = l.gameName) ? t : void 0,
                      gamePid: l.pid,
                      fullscreenType: l.fullscreenType,
                      trackedGame: l,
                  }
                : null != a
                  ? {
                        gameId: a.id,
                        gameName: a.name,
                        gamePid: a.pid,
                        fullscreenType: a.fullscreenType,
                        runningGame: a,
                    }
                  : null != i
                    ? (function (e) {
                          var t, n;
                          let l = L(e);
                          return {
                              gameId: e.id,
                              gameName: e.name,
                              gamePid: null != (t = null == l ? void 0 : l.pid) ? t : void 0,
                              fullscreenType: null != (n = null == l ? void 0 : l.fullscreenType) ? n : void 0,
                              trackedGame: null != l ? l : void 0,
                              persistentGame: e,
                          };
                      })(i)
                    : null;
        })(),
        [H, K] = a.useState(
            null !=
                (n = null != (t = null == B ? void 0 : B.fullscreenType) ? t : null == F ? void 0 : F.fullscreenType)
                ? n
                : null,
        ),
        [V, q] = a.useState(B),
        [X, Y] = a.useState(!1),
        [Q, $] = a.useState(!1),
        [ee, et] = a.useState(!1),
        {
            nativeState: en,
            breadcrumbs: [el],
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
            (0, s.e7)(
                [C.Z],
                () => ({
                    nativeState: C.Z.getDebuggingState(),
                    breadcrumbs: C.Z.getOverlayLoggingBreadcrumbs(),
                }),
                [],
                k,
            )),
        ea = a.useMemo(() => {
            let e = {
                game_crashes_occurred: w.t["1UWmCV"],
                poor_performance: w.t["4owu+4"],
                overlay_unresponsive: w.t.Q8Z0xo,
                keybindings_not_working: w.t.UnzaZs,
                alt_tabbing_issues: w.t["/sG9Sf"],
                game_not_interactable: w.t["+18gq6"],
                game_forced_minimized: w.t.dabM8C,
                other: w.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({
                label: w.intl.string(e[t]),
                value: t,
            }));
        }, []),
        ei = a.useMemo(() => {
            let e = {
                [m.Jx.FULLSCREEN]: w.t.AjBsPe,
                [m.Jx.WINDOWED]: w.t["0oYq2i"],
                [m.Jx.BORDERLESS_FULLSCREEN]: w.t.NwNvjf,
                [m.Jx.MINIMIZED]: w.t.Wypflu,
                [m.Jx.MAXIMIZED]: w.t["MUX2+G"],
                [m.Jx.UNKNOWN]: w.t.QPOep8,
            };
            return [...M].map((t) => ({
                label: w.intl.string(e[t]),
                value: t,
            }));
        }, []),
        er = async () => {
            $(!0), await (0, u._v)(500), $(!1);
        },
        eo = async () => {
            var e, t, n, l, a;
            if (null === G && 0 === W.length) {
                et(!0), er();
                return;
            }
            Y(!0);
            let r = null != (n = b.default.getFocusedPID()) ? n : (0, S.getPID)(),
                o = I.default.getTrackedGameByPid(r),
                s = P.Z.getPopoutInitializationStages(),
                c = (null == o ? void 0 : o.overlayMethod) != null ? j.gl[o.overlayMethod] : null,
                g = null != (l = null == o ? void 0 : o.fullscreenType) ? l : m.Jx.UNKNOWN,
                x = (0, N.y2)(el, (e) => {
                    for (let t of Object.values(A))
                        try {
                            if (!t(e, r)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                C = T.Z.getRecentActions(10),
                D = O.Z.getRecentExperimentBuckets(
                    v.Z.getAllExperimentAssignments(),
                    new Date(Date.now() - 7776000000),
                ),
                k =
                    (null == o ? void 0 : o.fullscreenHistory) == null
                        ? null
                        : Object.entries(o.fullscreenHistory)
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
                    issue_category: G,
                    details: W,
                    overlay_render_method: c,
                    hardware_display_count:
                        null !=
                        (a = await (null === p.Z ||
                        void 0 === p.Z ||
                        null == (t = p.Z.hardware) ||
                        null == (e = t.getDisplayCount)
                            ? void 0
                            : e.call(t)))
                            ? a
                            : null,
                    detected_fullscreen_type: m.Jx[g],
                    application_id: null == o ? void 0 : o.applicationId,
                    application_name: null == o ? void 0 : o.gameName,
                    game_pid: null == o ? void 0 : o.pid,
                    recent_overlay_flux_actions: C,
                    overlay_module_state: null == o ? void 0 : o.state,
                    overlay_native_state: JSON.stringify(en),
                    overlay_module_oop_initialization_state: JSON.stringify(s),
                    overlay_module_error_message: E.Z.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(x),
                    fullscreen_history_for_pid: k,
                    media_session_id: _.Z.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(D),
                    location: f,
                };
            await h.default.track(Z.rMx.OVERLAY_BUG_REPORT, M),
                await (0, u._v)(1000),
                Y(!1),
                (0, d.showToast)((0, d.createToast)(w.intl.string(w.t.eQRpgV), d.ToastType.SUCCESS, { appContext: y })),
                i();
        };
    return (
        (0, g.ZP)(() => {
            h.default.track(Z.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
        }),
        (0, l.jsx)(o.Modal, {
            transitionState: r,
            title: w.intl.string(w.t.OKmenM),
            actions: [
                {
                    text: w.intl.string(w.t["ETE/oC"]),
                    onClick: i,
                    variant: "secondary",
                    disabled: X,
                },
                {
                    text: w.intl.string(w.t.geKm7t),
                    onClick: eo,
                    variant: "primary",
                    loading: X,
                },
            ],
            onClose: i,
            children: (0, l.jsxs)("div", {
                className: D.modalContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: D.itemContainer,
                        children: [
                            (0, l.jsx)(d.UkV, {
                                isShaking: Q,
                                intensity: 1.5,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: ee ? "text-danger" : "text-primary",
                                    children: w.intl.string(w.t.Trx7eJ),
                                }),
                            }),
                            (0, l.jsx)(d.PhF, {
                                placeholder: w.intl.string(w.t.mKTzjI),
                                options: ea,
                                isSelected: (e) => e === G,
                                select: (e) => {
                                    U(e), et(!1), $(!1);
                                },
                                serialize: (e) => e,
                            }),
                            ee &&
                                (0, l.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-danger",
                                    children: w.intl.string(w.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: D.itemContainer,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: w.intl.string(w.t.iZufAY),
                            }),
                            (0, l.jsx)(d.Kx8, {
                                autosize: !0,
                                value: W,
                                maxLength: 1000,
                                showCharacterCount: !1,
                                placeholder: w.intl.string(w.t["68mJXW"]),
                                onChange: z,
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: w.intl.string(w.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: D.hr }),
                    (0, l.jsxs)("div", {
                        className: D.itemContainer,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: w.intl.string(w.t["8+SU+a"]),
                            }),
                            (0, l.jsx)(R, {
                                selectedGame: V,
                                setSelectedGame: q,
                            }),
                            (0, l.jsx)(d.PhF, {
                                placeholder: w.intl.string(w.t.IjlqrF),
                                options: ei,
                                isSelected: (e) => e === H,
                                select: K,
                                serialize: (e) => "".concat(e),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
