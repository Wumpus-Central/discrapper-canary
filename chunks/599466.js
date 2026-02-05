n.d(t, { default: () => L });
var a = n(627968),
    l = n(64700),
    i = n(812729),
    r = n.n(i),
    s = n(158954),
    u = n(311907),
    o = n(499979),
    d = n(397927),
    c = n(684013),
    m = n(56562),
    g = n(964486),
    f = n(77729),
    p = n(49463),
    h = n(383501),
    v = n(242286),
    _ = n(954571),
    y = n(220478),
    x = n(9302),
    A = n(41984),
    b = n(181435),
    N = n(78878),
    I = n(729292),
    G = n(833551),
    S = n(395011),
    E = n(127242),
    j = n(680243),
    k = n(554311),
    w = n(652215),
    T = n(985018),
    C = n(345860);
function D(e, t) {
    return r()(e, t);
}
let M = new Set([
        m.aI.BORDERLESS_FULLSCREEN,
        m.aI.FULLSCREEN,
        m.aI.WINDOWED,
        m.aI.MAXIMIZED,
        m.aI.MINIMIZED,
        m.aI.UNKNOWN,
    ]),
    O = {
        HandleFocusChanged: (e, t) => {
            if (!(0, b.$8)(e, "HandleFocusChanged")) return !0;
            let n = null != t ? (S.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set(),
                { focusedPid: a, focusedWindowHandle: l } = e.data;
            return null != l && null != a && a !== x.UNSET_PID && !!n.has(l) && a === t;
        },
        EventHook: (e, t) => {
            if (!(0, b.$8)(e, "EventHook")) return !0;
            let n = null != t ? (S.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set();
            try {
                let { receivedWindow: a, targetPid: l } = e.data;
                if (null != a && n.has(a)) return null != l && l === t;
            } finally {
                return !1;
            }
        },
    };
function L(e) {
    let { onClose: t, transitionState: i, location: r, appContext: L } = e,
        P = (0, u.bG)([v.default], () => v.default.getFocusedPID()) ?? (0, x.getPID)(),
        R = (0, u.bG)([G.default], () => G.default.getTrackedGameByPid(P), [P]),
        [F, U] = l.useState(null),
        [W, B] = l.useState(""),
        K = (0, k.tX)(),
        [Z, q] = l.useState(K?.fullscreenType ?? R?.fullscreenType ?? null),
        [H, z] = l.useState(K),
        [J, X] = l.useState(!1),
        [Q, Y] = l.useState(!1),
        [$, V] = l.useState(!1),
        {
            nativeState: ee,
            breadcrumbs: [et],
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
            (0, u.bG)(
                [E.A],
                () => ({ nativeState: E.A.getDebuggingState(), breadcrumbs: E.A.getOverlayLoggingBreadcrumbs() }),
                [],
                D,
            )),
        en = l.useMemo(() => {
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
            return Object.keys(e).map((t) => ({ id: t, label: T.intl.string(e[t]), value: t }));
        }, []),
        ea = l.useMemo(() => {
            let e = {
                [m.aI.FULLSCREEN]: T.t.AjBsPe,
                [m.aI.WINDOWED]: T.t["0oYq2i"],
                [m.aI.BORDERLESS_FULLSCREEN]: T.t.NwNvjf,
                [m.aI.MINIMIZED]: T.t.Wypflu,
                [m.aI.MAXIMIZED]: T.t["MUX2+G"],
                [m.aI.UNKNOWN]: T.t.QPOep8,
            };
            return [...M].map((t) => ({ id: t.toString(), label: T.intl.string(e[t]), value: t }));
        }, []),
        el = async () => {
            Y(!0), await (0, o.yy)(500), Y(!1);
        },
        ei = async () => {
            if (null === F && 0 === W.length) {
                V(!0), el();
                return;
            }
            X(!0);
            let e = v.default.getFocusedPID() ?? (0, x.getPID)(),
                l = G.default.getTrackedGameByPid(e),
                i = S.A.getPopoutInitializationStages(),
                s = l?.overlayMethod != null ? A.Ue[l.overlayMethod] : null,
                u = l?.fullscreenType ?? m.aI.UNKNOWN,
                c = (0, b.tn)(et, (t) => {
                    for (let n of Object.values(O))
                        try {
                            if (!n(t, e)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                g = N.A.getRecentActions(10),
                I = y.A.getRecentExperimentBuckets(p.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
                E =
                    l?.fullscreenHistory == null
                        ? null
                        : Object.entries(l.fullscreenHistory)
                              .sort((e, t) => {
                                  let [n] = e,
                                      [a] = t;
                                  return Number(a) - Number(n);
                              })
                              .map((e) => {
                                  let [t, n] = e;
                                  return `${t}:${m.aI[n]}`;
                              }),
                k = {
                    issue_category: F,
                    details: W,
                    overlay_render_method: s,
                    hardware_display_count: (await f.A?.hardware?.getDisplayCount?.()) ?? null,
                    detected_fullscreen_type: m.aI[u],
                    application_id: l?.applicationId,
                    application_name: l?.gameName,
                    game_pid: l?.pid,
                    recent_overlay_flux_actions: g,
                    overlay_module_state: l?.state,
                    overlay_native_state: JSON.stringify(ee),
                    overlay_module_oop_initialization_state: JSON.stringify(i),
                    overlay_module_error_message: j.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(c),
                    fullscreen_history_for_pid: E,
                    media_session_id: h.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(I),
                    location: r,
                };
            await _.default.track(w.HAw.OVERLAY_BUG_REPORT, k),
                await (0, o.yy)(1e3),
                X(!1),
                t?.(),
                (0, d.mMO)(
                    async () => {
                        let { default: e } = await n.e("36058").then(n.bind(n, 823777));
                        return (t) => (0, a.jsx)(e, { ...t });
                    },
                    { contextKey: (0, d.TId)(L) },
                );
        };
    return (
        (0, g.Ay)(() => {
            _.default.track(w.HAw.OPEN_MODAL, { type: "overlay_bug_reporter_modal", location: r });
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: i,
            title: T.intl.string(T.t.OKmenM),
            actions: [
                { text: T.intl.string(T.t["ETE/oC"]), onClick: t, variant: "secondary", disabled: J },
                { text: T.intl.string(T.t.geKm7t), onClick: ei, variant: "primary", loading: J },
            ],
            onClose: t,
            children: (0, a.jsxs)("div", {
                className: C.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: C.DB,
                        children: [
                            (0, a.jsx)(d.bfh, {
                                isShaking: Q,
                                intensity: 1.5,
                                children: (0, a.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: $ ? "text-feedback-critical" : "text-strong",
                                    children: T.intl.string(T.t.Trx7eJ),
                                }),
                            }),
                            (0, a.jsx)(d.l6P, {
                                label: T.intl.string(T.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: T.intl.string(T.t.mKTzjI),
                                options: en,
                                value: F,
                                onSelectionChange: (e) => {
                                    U(e), V(!1), Y(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            $ &&
                                (0, a.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: T.intl.string(T.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: C.DB,
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: T.intl.string(T.t.iZufAY),
                            }),
                            (0, a.jsx)(d.fs1, {
                                autosize: !0,
                                value: W,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: T.intl.string(T.t["68mJXW"]),
                                onChange: B,
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: T.intl.string(T.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: C.hr }),
                    (0, a.jsxs)("div", {
                        className: C.DB,
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: T.intl.string(T.t["8+SU+a"]),
                            }),
                            (0, a.jsx)(I.A, {
                                selectedGame: H,
                                setSelectedGame: z,
                                placeholder: T.intl.string(T.t.b1IW2e),
                            }),
                            (0, a.jsx)(d.l6P, {
                                label: T.intl.string(T.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: T.intl.string(T.t.IjlqrF),
                                options: ea,
                                value: Z,
                                onSelectionChange: q,
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
