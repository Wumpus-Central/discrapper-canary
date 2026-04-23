n.d(t, { default: () => W });
var a = n(627968),
    l = n(64700),
    r = n(812729),
    i = n.n(r),
    s = n(189213),
    o = n(311907),
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
    x = n(49463),
    b = n(383501),
    _ = n(242286),
    A = n(954571),
    N = n(220478),
    I = n(9302),
    w = n(41984),
    S = n(181435),
    E = n(78878),
    G = n(729292),
    j = n(833551),
    k = n(395011),
    C = n(127242),
    M = n(680243),
    D = n(554311),
    T = n(652215),
    P = n(985018),
    L = n(988787);
function O(e, t) {
    return i()(e, t);
}
let R = new Set([
        h.aI.BORDERLESS_FULLSCREEN,
        h.aI.FULLSCREEN,
        h.aI.WINDOWED,
        h.aI.MAXIMIZED,
        h.aI.MINIMIZED,
        h.aI.UNKNOWN,
    ]),
    F = {
        HandleFocusChanged: (e, t) => {
            if (!(0, S.$8)(e, "HandleFocusChanged")) return !0;
            let n = null != t ? (k.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set(),
                { focusedPid: a, focusedWindowHandle: l } = e.data;
            return null != l && null != a && a !== I.UNSET_PID && !!n.has(l) && a === t;
        },
        EventHook: (e, t) => {
            if (!(0, S.$8)(e, "EventHook")) return !0;
            let n = null != t ? (k.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set();
            try {
                let { receivedWindow: a, targetPid: l } = e.data;
                if (null != a && n.has(a)) return null != l && l === t;
            } finally {
                return !1;
            }
        },
    };
function W(e) {
    let { onClose: t, transitionState: r, location: i, appContext: W } = e,
        U = (0, o.bG)([_.default], () => _.default.getFocusedPID()) ?? (0, I.getPID)(),
        z = (0, o.bG)([j.default], () => j.default.getTrackedGameByPid(U), [U]),
        [B, K] = l.useState(null),
        [q, Z] = l.useState(""),
        H = (0, D.tX)(),
        [V, J] = l.useState(H?.fullscreenType ?? z?.fullscreenType ?? null),
        [X, $] = l.useState(H),
        [Y, Q] = l.useState(!1),
        [ee, et] = l.useState(!1),
        [en, ea] = l.useState(!1),
        {
            nativeState: el,
            breadcrumbs: [er],
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
                [C.A],
                () => ({ nativeState: C.A.getDebuggingState(), breadcrumbs: C.A.getOverlayLoggingBreadcrumbs() }),
                [],
                O,
            )),
        ei = l.useMemo(() => {
            let e = {
                game_crashes_occurred: P.t["1UWmCV"],
                poor_performance: P.t["4owu+4"],
                overlay_unresponsive: P.t.Q8Z0xo,
                keybindings_not_working: P.t.UnzaZs,
                alt_tabbing_issues: P.t["/sG9Sf"],
                game_not_interactable: P.t["+18gq6"],
                game_forced_minimized: P.t.dabM8C,
                other: P.t["UhbPA+"],
            };
            return Object.keys(e).map((t) => ({ id: t, label: P.intl.string(e[t]), value: t }));
        }, []),
        es = l.useMemo(() => {
            let e = {
                [h.aI.FULLSCREEN]: P.t.AjBsPe,
                [h.aI.WINDOWED]: P.t["0oYq2i"],
                [h.aI.BORDERLESS_FULLSCREEN]: P.t.NwNvjf,
                [h.aI.MINIMIZED]: P.t.Wypflu,
                [h.aI.MAXIMIZED]: P.t["MUX2+G"],
                [h.aI.UNKNOWN]: P.t.QPOep8,
            };
            return [...R].map((t) => ({ id: t.toString(), label: P.intl.string(e[t]), value: t }));
        }, []),
        eo = async () => {
            et(!0), await (0, u.yy)(500), et(!1);
        },
        eu = async () => {
            if (null === B && 0 === q.length) {
                ea(!0), eo();
                return;
            }
            Q(!0);
            let e = _.default.getFocusedPID() ?? (0, I.getPID)(),
                l = j.default.getTrackedGameByPid(e),
                r = k.A.getPopoutInitializationStages(),
                s = l?.overlayMethod != null ? w.Ue[l.overlayMethod] : null,
                o = l?.fullscreenType ?? h.aI.UNKNOWN,
                c = (0, S.tn)(er, (t) => {
                    for (let n of Object.values(F))
                        try {
                            if (!n(t, e)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                m = E.A.getRecentActions(10),
                g = N.A.getRecentExperimentBuckets(x.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
                f =
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
                                  return `${t}:${h.aI[n]}`;
                              }),
                p = {
                    issue_category: B,
                    details: q,
                    overlay_render_method: s,
                    hardware_display_count: (await y.A?.hardware?.getDisplayCount?.()) ?? null,
                    detected_fullscreen_type: h.aI[o],
                    application_id: l?.applicationId,
                    application_name: l?.gameName,
                    game_pid: l?.pid,
                    recent_overlay_flux_actions: m,
                    overlay_module_state: l?.state,
                    overlay_native_state: JSON.stringify(el),
                    overlay_module_oop_initialization_state: JSON.stringify(r),
                    overlay_module_error_message: M.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(c),
                    fullscreen_history_for_pid: f,
                    media_session_id: b.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(g),
                    location: i,
                };
            await A.default.track(T.HAw.OVERLAY_BUG_REPORT, p),
                await (0, u.yy)(1e3),
                Q(!1),
                t?.(),
                (0, d.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("36058").then(n.bind(n, 823777));
                        return (t) => (0, a.jsx)(e, { ...t });
                    },
                    { contextKey: (0, d.modalContextFromAppContext)(W) },
                );
        };
    return (
        (0, v.Ay)(() => {
            A.default.track(T.HAw.OPEN_MODAL, { type: "overlay_bug_reporter_modal", location: i });
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: r,
            title: P.intl.string(P.t.OKmenM),
            actions: [
                { text: P.intl.string(P.t["ETE/oC"]), onClick: t, variant: "secondary", disabled: Y },
                { text: P.intl.string(P.t.geKm7t), onClick: eu, variant: "primary", loading: Y },
            ],
            onClose: t,
            children: (0, a.jsxs)("div", {
                className: L.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: L.DB,
                        children: [
                            (0, a.jsx)(c.b, {
                                isShaking: ee,
                                intensity: 1.5,
                                children: (0, a.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: en ? "text-feedback-critical" : "text-strong",
                                    children: P.intl.string(P.t.Trx7eJ),
                                }),
                            }),
                            (0, a.jsx)(g.l, {
                                label: P.intl.string(P.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: P.intl.string(P.t.mKTzjI),
                                options: ei,
                                value: B,
                                onSelectionChange: (e) => {
                                    K(e), ea(!1), et(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            en &&
                                (0, a.jsx)(m.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: P.intl.string(P.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: L.DB,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: P.intl.string(P.t.iZufAY),
                            }),
                            (0, a.jsx)(f.f, {
                                autosize: !0,
                                value: q,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: P.intl.string(P.t["68mJXW"]),
                                onChange: Z,
                            }),
                            (0, a.jsx)(m.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: P.intl.string(P.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: L.hr }),
                    (0, a.jsxs)("div", {
                        className: L.DB,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: P.intl.string(P.t["8+SU+a"]),
                            }),
                            (0, a.jsx)(G.A, {
                                selectedGame: X,
                                setSelectedGame: $,
                                placeholder: P.intl.string(P.t.b1IW2e),
                            }),
                            (0, a.jsx)(g.l, {
                                label: P.intl.string(P.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: P.intl.string(P.t.IjlqrF),
                                options: es,
                                value: V,
                                onSelectionChange: J,
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
