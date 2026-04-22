n.d(t, { default: () => U });
var a = n(627968),
    l = n(64700),
    i = n(812729),
    r = n.n(i),
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
    _ = n(964486),
    v = n(77729),
    b = n(49463),
    A = n(383501),
    y = n(242286),
    x = n(954571),
    S = n(220478),
    k = n(9302),
    E = n(41984),
    L = n(181435),
    I = n(78878),
    w = n(729292),
    G = n(833551),
    M = n(395011),
    C = n(127242),
    N = n(680243),
    R = n(554311),
    j = n(652215),
    D = n(985018),
    F = n(988787);
function T(e, t) {
    return r()(e, t);
}
let P = new Set([
        h.aI.BORDERLESS_FULLSCREEN,
        h.aI.FULLSCREEN,
        h.aI.WINDOWED,
        h.aI.MAXIMIZED,
        h.aI.MINIMIZED,
        h.aI.UNKNOWN,
    ]),
    O = {
        HandleFocusChanged: (e, t) => {
            if (!(0, L.$8)(e, "HandleFocusChanged")) return !0;
            let n = null != t ? (M.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set(),
                { focusedPid: a, focusedWindowHandle: l } = e.data;
            return null != l && null != a && a !== k.UNSET_PID && !!n.has(l) && a === t;
        },
        EventHook: (e, t) => {
            if (!(0, L.$8)(e, "EventHook")) return !0;
            let n = null != t ? (M.A.getKnownWindowHandlesForPID(t) ?? new Set()) : new Set();
            try {
                let { receivedWindow: a, targetPid: l } = e.data;
                if (null != a && n.has(a)) return null != l && l === t;
            } finally {
                return !1;
            }
        },
    };
function U(e) {
    let { onClose: t, transitionState: i, location: r, appContext: U } = e,
        q = (0, o.bG)([y.default], () => y.default.getFocusedPID()) ?? (0, k.getPID)(),
        W = (0, o.bG)([G.default], () => G.default.getTrackedGameByPid(q), [q]),
        [B, z] = l.useState(null),
        [X, Z] = l.useState(""),
        H = (0, R.tX)(),
        [K, V] = l.useState(H?.fullscreenType ?? W?.fullscreenType ?? null),
        [J, Q] = l.useState(H),
        [Y, $] = l.useState(!1),
        [ee, et] = l.useState(!1),
        [en, ea] = l.useState(!1),
        {
            nativeState: el,
            breadcrumbs: [ei],
        } =
            ((0, _.Ay)(
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
                T,
            )),
        er = l.useMemo(() => {
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
            return Object.keys(e).map((t) => ({ id: t, label: D.intl.string(e[t]), value: t }));
        }, []),
        es = l.useMemo(() => {
            let e = {
                [h.aI.FULLSCREEN]: D.t.AjBsPe,
                [h.aI.WINDOWED]: D.t["0oYq2i"],
                [h.aI.BORDERLESS_FULLSCREEN]: D.t.NwNvjf,
                [h.aI.MINIMIZED]: D.t.Wypflu,
                [h.aI.MAXIMIZED]: D.t["MUX2+G"],
                [h.aI.UNKNOWN]: D.t.QPOep8,
            };
            return [...P].map((t) => ({ id: t.toString(), label: D.intl.string(e[t]), value: t }));
        }, []),
        eo = async () => {
            et(!0), await (0, u.yy)(500), et(!1);
        },
        eu = async () => {
            if (null === B && 0 === X.length) {
                ea(!0), eo();
                return;
            }
            $(!0);
            let e = y.default.getFocusedPID() ?? (0, k.getPID)(),
                l = G.default.getTrackedGameByPid(e),
                i = M.A.getPopoutInitializationStages(),
                s = l?.overlayMethod != null ? E.Ue[l.overlayMethod] : null,
                o = l?.fullscreenType ?? h.aI.UNKNOWN,
                c = (0, L.tn)(ei, (t) => {
                    for (let n of Object.values(O))
                        try {
                            if (!n(t, e)) return !1;
                        } catch (e) {
                            return !1;
                        }
                    return !0;
                }),
                m = I.A.getRecentActions(10),
                g = S.A.getRecentExperimentBuckets(b.A.getAllExperimentAssignments(), new Date(Date.now() - 7776e6)),
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
                    details: X,
                    overlay_render_method: s,
                    hardware_display_count: (await v.A?.hardware?.getDisplayCount?.()) ?? null,
                    detected_fullscreen_type: h.aI[o],
                    application_id: l?.applicationId,
                    application_name: l?.gameName,
                    game_pid: l?.pid,
                    recent_overlay_flux_actions: m,
                    overlay_module_state: l?.state,
                    overlay_native_state: JSON.stringify(el),
                    overlay_module_oop_initialization_state: JSON.stringify(i),
                    overlay_module_error_message: N.A.errorMessage,
                    overlay_module_breadcrumbs: JSON.stringify(c),
                    fullscreen_history_for_pid: f,
                    media_session_id: A.A.getMediaSessionId(),
                    recent_experiment_buckets: JSON.stringify(g),
                    location: r,
                };
            await x.default.track(j.HAw.OVERLAY_BUG_REPORT, p),
                await (0, u.yy)(1e3),
                $(!1),
                t?.(),
                (0, d.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("36058").then(n.bind(n, 823777));
                        return (t) => (0, a.jsx)(e, { ...t });
                    },
                    { contextKey: (0, d.modalContextFromAppContext)(U) },
                );
        };
    return (
        (0, _.Ay)(() => {
            x.default.track(j.HAw.OPEN_MODAL, { type: "overlay_bug_reporter_modal", location: r });
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: i,
            title: D.intl.string(D.t.OKmenM),
            actions: [
                { text: D.intl.string(D.t["ETE/oC"]), onClick: t, variant: "secondary", disabled: Y },
                { text: D.intl.string(D.t.geKm7t), onClick: eu, variant: "primary", loading: Y },
            ],
            onClose: t,
            children: (0, a.jsxs)("div", {
                className: F.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: F.DB,
                        children: [
                            (0, a.jsx)(c.b, {
                                isShaking: ee,
                                intensity: 1.5,
                                children: (0, a.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: en ? "text-feedback-critical" : "text-strong",
                                    children: D.intl.string(D.t.Trx7eJ),
                                }),
                            }),
                            (0, a.jsx)(g.l, {
                                label: D.intl.string(D.t.mKTzjI),
                                hideLabel: !0,
                                placeholder: D.intl.string(D.t.mKTzjI),
                                options: er,
                                value: B,
                                onSelectionChange: (e) => {
                                    z(e), ea(!1), et(!1);
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            en &&
                                (0, a.jsx)(m.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-feedback-critical",
                                    children: D.intl.string(D.t["5cqa9J"]),
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: F.DB,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: D.intl.string(D.t.iZufAY),
                            }),
                            (0, a.jsx)(f.f, {
                                autosize: !0,
                                value: X,
                                maxLength: 1e3,
                                showCharacterCount: !1,
                                placeholder: D.intl.string(D.t["68mJXW"]),
                                onChange: Z,
                            }),
                            (0, a.jsx)(m.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: D.intl.string(D.t.TzkM2a),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: F.hr }),
                    (0, a.jsxs)("div", {
                        className: F.DB,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: D.intl.string(D.t["8+SU+a"]),
                            }),
                            (0, a.jsx)(w.A, {
                                selectedGame: J,
                                setSelectedGame: Q,
                                placeholder: D.intl.string(D.t.b1IW2e),
                            }),
                            (0, a.jsx)(g.l, {
                                label: D.intl.string(D.t.IjlqrF),
                                hideLabel: !0,
                                placeholder: D.intl.string(D.t.IjlqrF),
                                options: es,
                                value: K,
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
