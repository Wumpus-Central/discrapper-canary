n.d(t, {
    default: () => R,
}),
    n(896048),
    n(638769),
    n(457529);
var l = n(627968),
    r = n(64700),
    a = n(812729),
    i = n.n(a),
    u = n(158954),
    o = n(311907),
    d = n(499979),
    s = n(397927),
    c = n(684013),
    m = n(56562),
    g = n(964486),
    f = n(77729),
    v = n(49463),
    y = n(383501),
    p = n(242286),
    h = n(954571),
    _ = n(220478),
    b = n(9302),
    I = n(41984),
    N = n(181435),
    A = n(78878),
    x = n(729292),
    S = n(833551),
    G = n(395011),
    E = n(127242),
    O = n(680243),
    w = n(554311),
    j = n(652215),
    k = n(985018),
    P = n(345860);

function T(e, t) {
    return i()(e, t);
}
let D = new Set([
        m.aI.BORDERLESS_FULLSCREEN,
        m.aI.FULLSCREEN,
        m.aI.WINDOWED,
        m.aI.MAXIMIZED,
        m.aI.MINIMIZED,
        m.aI.UNKNOWN,
    ]),
    M = {
        HandleFocusChanged: (e, t) => {
            var n;
            if (!(0, N.$8)(e, "HandleFocusChanged")) return !0;
            let l = null != t && null != (n = G.A.getKnownWindowHandlesForPID(t)) ? n : new Set(),
                { focusedPid: r, focusedWindowHandle: a } = e.data;
            return null != a && null != r && r !== b.UNSET_PID && !!l.has(a) && r === t;
        },
        EventHook: (e, t) => {
            var n;
            if (!(0, N.$8)(e, "EventHook")) return !0;
            let l = null != t && null != (n = G.A.getKnownWindowHandlesForPID(t)) ? n : new Set();
            try {
                let { receivedWindow: n, targetPid: r } = e.data;
                if (null != n && l.has(n)) return null != r && r === t;
            } finally {
                return !1;
            }
        },
    };

function R(e) {
    var t, a;
    let { onClose: i, transitionState: R, location: C, appContext: L } = e,
        U = (0, o.bG)([p.default], () => p.default.getFocusedPID()),
        F = null != U ? U : (0, b.getPID)(),
        W = (0, o.bG)([S.default], () => S.default.getTrackedGameByPid(F), [F]),
        [B, q] = r.useState(null),
        [K, H] = r.useState(""),
        Z = (0, w.tX)(),
        [z, X] = r.useState(
            null !=
                (t = null != (a = null == Z ? void 0 : Z.fullscreenType) ? a : null == W ? void 0 : W.fullscreenType)
                ? t
                : null,
        ),
        [J, Y] = r.useState(Z),
        [V, Q] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        {
            nativeState: el,
            breadcrumbs: [er],
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
                [E.A],
                () => ({
                    nativeState: E.A.getDebuggingState(),
                    breadcrumbs: E.A.getOverlayLoggingBreadcrumbs(),
                }),
                [],
                T,
            )),
        ea = r.useMemo(() => {
            let e = {
                game_crashes_occurred: k.t["1UWmCV"],
                poor_performance: k.t["4owu+4"],
                overlay_unresponsive: k.t.Q8Z0xo,
                keybindings_not_working: k.t.UnzaZs,
                alt_tabbing_issues: k.t["/sG9Sf"],
                game_not_interactable: k.t["+18gq6"],
                game_forced_minimized: k.t.dabM8C,
                other: k.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({
                id: t,
                label: k.intl.string(e[t]),
                value: t,
            }));
        }, []),
        ei = r.useMemo(() => {
            let e = {
                [m.aI.FULLSCREEN]: k.t.AjBsPe,
                [m.aI.WINDOWED]: k.t["0oYq2i"],
                [m.aI.BORDERLESS_FULLSCREEN]: k.t.NwNvjf,
                [m.aI.MINIMIZED]: k.t.Wypflu,
                [m.aI.MAXIMIZED]: k.t["MUX2+G"],
                [m.aI.UNKNOWN]: k.t.QPOep8,
            };
            return [...D].map((t) => ({
                id: t.toString(),
                label: k.intl.string(e[t]),
                value: t,
            }));
        }, []),
        eu = async () => {
            ee(!0), await (0, d.yy)(500), ee(!1);
        },
        eo = async () => {
            var e, t, r, a, u;
            if (null === B && 0 === K.length) {
                en(!0), eu();
                return;
            }
            Q(!0);
            let o = null != (e = p.default.getFocusedPID()) ? e : (0, b.getPID)(),
                c = S.default.getTrackedGameByPid(o),
                g = G.A.getPopoutInitializationStages(),
                x = (null == c ? void 0 : c.overlayMethod) != null ? I.Ue[c.overlayMethod] : null,
                E = null != (t = null == c ? void 0 : c.fullscreenType) ? t : m.aI.UNKNOWN,
                w = (0, N.tn)(er, (e) => {
                    for (let t of Object.values(M))
                        try {
                            if (!t(e, o)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                k = A.A.getRecentActions(10),
                P = _.A.getRecentExperimentBuckets(v.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
                T =
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
                D = {
                    issue_category: B,
                    details: K,
                    overlay_render_method: x,
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
                    detected_fullscreen_type: m.aI[E],
                    application_id: null == c ? void 0 : c.applicationId,
                    application_name: null == c ? void 0 : c.gameName,
                    game_pid: null == c ? void 0 : c.pid,
                    recent_overlay_flux_actions: k,
                    overlay_module_state: null == c ? void 0 : c.state,
                    overlay_native_state: JSON.stringify(el),
                    overlay_module_oop_initialization_state: JSON.stringify(g),
                    overlay_module_error_message: O.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(w),
                    fullscreen_history_for_pid: T,
                    media_session_id: y.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(P),
                    location: C,
                };
            await h.default.track(j.HAw.OVERLAY_BUG_REPORT, D),
                await (0, d.yy)(1e3),
                Q(!1),
                null == i || i(),
                (0, s.mMO)(
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
                        contextKey: (0, s.TId)(L),
                    },
                );
        };
    return (
        (0, g.Ay)(() => {
            h.default.track(j.HAw.OPEN_MODAL, {
                type: "overlay_bug_reporter_modal",
                location: C,
            });
        }),
        (0, l.jsx)(u.Modal, {
            transitionState: R,
            title: k.intl.string(k.t.OKmenM),
            actions: [
                {
                    text: k.intl.string(k.t["ETE/oC"]),
                    onClick: i,
                    variant: "secondary",
                    disabled: V,
                },
                {
                    text: k.intl.string(k.t.geKm7t),
                    onClick: eo,
                    variant: "primary",
                    loading: V,
                },
            ],
            onClose: i,
            children: (0, l.jsxs)("div", {
                className: P.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.DB,
                        children: [
                            (0, l.jsx)(s.bfh, {
                                isShaking: $,
                                intensity: 1.5,
                                children: (0, l.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: et ? "text-feedback-critical" : "text-strong",
                                    children: k.intl.string(k.t.Trx7eJ),
                                }),
                            }),
                            (0, l.jsx)(s.l6P, {
                                label: k.intl.string(k.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: k.intl.string(k.t.mKTzjI),
                                options: ea,
                                value: B,
                                onSelectionChange: (e) => {
                                    q(e), en(!1), ee(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            et &&
                                (0, l.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: k.intl.string(k.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: P.DB,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: k.intl.string(k.t.iZufAY),
                            }),
                            (0, l.jsx)(s.fs1, {
                                autosize: !0,
                                value: K,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: k.intl.string(k.t["68mJXW"]),
                                onChange: H,
                            }),
                            (0, l.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: k.intl.string(k.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: P.hr,
                    }),
                    (0, l.jsxs)("div", {
                        className: P.DB,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: k.intl.string(k.t["8+SU+a"]),
                            }),
                            (0, l.jsx)(x.A, {
                                selectedGame: J,
                                setSelectedGame: Y,
                                placeholder: k.intl.string(k.t.b1IW2e),
                            }),
                            (0, l.jsx)(s.l6P, {
                                label: k.intl.string(k.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: k.intl.string(k.t.IjlqrF),
                                options: ei,
                                value: z,
                                onSelectionChange: X,
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
