a.d(t, { default: () => S, i: () => N }), a(321073);
var n = a(477900),
    i = a(582128),
    l = a(562708),
    s = a(189213),
    r = a(17928),
    o = a(783878),
    u = a(834730),
    d = a(144228),
    c = a(260598),
    m = a(587895),
    g = a(429913),
    p = a(952818),
    h = a(769015),
    x = a(409626),
    b = a(471677),
    v = a(569926),
    _ = a(106191),
    f = a(379078),
    A = a(704554),
    C = a(174459),
    j = a(21241),
    k = a(652215),
    I = a(375708),
    w = a(520467);
let M = i.memo(function (e) {
        let { game: t } = e,
            a = (0, r.bG)([m.A], () => m.A.getApplicationByName(t.name) ?? m.A.getApplication(t.id), [t.id, t.name]),
            i = (0, r.bG)([p.Ay], () => {
                let e = p.Ay.getVisibleGame(),
                    a = null != e ? p.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return a?.name?.toLowerCase() === t.name.toLowerCase() ? a : p.Ay.getGameForName(t.name);
            }, [t]),
            [l] = (0, g.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = m.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != i) return i.id;
                })(),
            ]),
            s = l ?? a,
            { data: o } = (0, v.I)(null == s ? t.id : void 0);
        return (0, n.jsx)(h.A, { pid: i?.pid, game: s ?? o, size: h.M.XSMALL, className: w.Gt });
    }),
    E = {
        searchType: f.n.FUZZY,
        sortType: f.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: a } = e,
                n = [t.name, a, t.id.toString()];
            return t.aliases.length > 0 && n.push(...t.aliases), null != t.description && n.push(t.description), n;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    G = [],
    N = i.memo(function (e) {
        let { games: t, selectedGame: a, onGameSelected: l, onGameSearchQueryChange: s, placeholder: r } = e,
            [u, d] = i.useState(""),
            c = i.useCallback(
                (e) => {
                    d(e), s?.(e);
                },
                [s],
            ),
            m = i.useMemo(() => {
                let e = [];
                for (let i of (null != a &&
                    e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, n.jsx)(M, { game: a }) }),
                t))
                    (null == a || (a.id !== i.id && a.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, n.jsx)(M, { game: i }) });
                return e;
            }, [t, a]),
            g = i.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [p, h] = i.useState(m),
            x = i.useCallback((e) => {
                h(e);
            }, []),
            b = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return;
                    let a = t.game;
                    l(a ?? null), c(a?.name ?? "");
                },
                [g, l, c],
            ),
            v = i.useCallback(
                (e) => {
                    let t = e.target.value;
                    c(t), null != a && t !== a.name && l(null);
                },
                [a, l, c],
            );
        return (
            (0, A.RT)(u, m, x, E),
            (0, n.jsx)(o.Z, {
                options: p,
                selectionMode: "single",
                value: a?.id ?? void 0,
                onSelectionChange: b,
                onQueryChange: v,
                placeholder: r,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function S(e) {
    let { onClose: t, transitionState: a, onSubmitted: g, detected: p, defaultStep: f = "issue_selection" } = e,
        [A, M] = i.useState(f),
        [E, N] = i.useState(null),
        [S, y] = i.useState(""),
        [T, D] = i.useState(null),
        [L, O] = i.useState(""),
        R = i.useMemo(() => (0, x.generateViewId)(), []),
        Z = (0, b.J$)(S).results ?? G,
        F = i.useMemo(
            () =>
                Z.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(_.A, { game: e, iconClassName: w.Gt }),
                })),
            [Z],
        ),
        Q = i.useCallback(
            (e) => {
                let t = Z.find((t) => {
                    let { id: a } = t;
                    return a === e;
                });
                D(t ?? null), y(t?.name ?? "");
            },
            [Z],
        ),
        J = i.useCallback(
            (e) => {
                let t = e.target.value;
                y(t), null != T && t !== T.name && D(null);
            },
            [T],
        ),
        K = i.useCallback((e) => e, []),
        P = (function (e) {
            let t = e?.applicationId,
                a = (0, r.bG)([m.A], () => m.A.getApplication(t), [t]),
                { data: n } = (0, v.I)(e?.gameId);
            return null == e
                ? null
                : {
                      name: ("" === e.name ? void 0 : e.name) ?? n?.name ?? a?.name ?? "",
                      icon: n ?? a,
                      analyticsId: e.applicationId ?? e.gameId ?? "",
                  };
        })(p),
        V = null != P;
    function Y() {
        (0, x.trackGameProfileFeedback)({
            viewId: R,
            applicationId: P?.analyticsId ?? "",
            suggestedGameName: "" !== S.trim() ? S.trim() : void 0,
            suggestedGameApplicationId: T?.id ?? null,
            feedback: "" !== L.trim() ? L.trim() : void 0,
            submitted: !0,
        }),
            g?.(T ?? null),
            t();
    }
    let z = (function () {
        switch (A) {
            case "issue_selection":
                return { title: I.intl.string(I.t["6tnjbD"]), actions: [] };
            case "game_search":
                return {
                    title: V ? I.intl.string(I.t.TZgkxY) : I.intl.string(I.t["+ie+wX"]),
                    actions: [
                        { text: I.intl.string(I.t.geKm7t), onClick: Y, variant: "primary", disabled: "" === S.trim() },
                    ],
                };
            case "other_feedback":
                return {
                    title: I.intl.string(I.t.tdDpJj),
                    actions: [
                        { text: I.intl.string(I.t.geKm7t), onClick: Y, variant: "primary", disabled: "" === L.trim() },
                    ],
                };
            default:
                return { title: "", actions: [] };
        }
    })();
    return (0, n.jsx)(s.Modal, {
        ...z,
        transitionState: a,
        onClose: t,
        trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (function () {
            switch (A) {
                case "issue_selection":
                    return (0, n.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: I.intl.string(I.t.IQHicr),
                            }),
                            (0, n.jsx)("div", {
                                className: w.R$,
                                children: (0, n.jsx)(d.z, {
                                    value: E ?? void 0,
                                    onChange: (e) => {
                                        N(e),
                                            C.default.track(k.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: P?.analyticsId ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? M("game_search")
                                                    : M("other_feedback");
                                            }, 100);
                                    },
                                    options: V
                                        ? [
                                              { name: I.intl.string(I.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: I.intl.string(I.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: I.intl.string(I.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: I.intl.string(I.t.tdDpJj), value: "other_feedback" },
                                          ],
                                }),
                            }),
                        ],
                    });
                case "game_search":
                    return (0, n.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: V ? I.intl.string(I.t["79o/iq"]) : I.intl.string(I.t["r/2pZy"]),
                            }),
                            V &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: w.Gr,
                                            children: [
                                                (0, n.jsx)(h.A, {
                                                    game: P?.icon,
                                                    size: h.M.MEDIUM_LARGE,
                                                    className: w.q_,
                                                }),
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: P?.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(j.A, {}),
                                    ],
                                }),
                            (0, n.jsx)(o.Z, {
                                options: F,
                                selectionMode: "single",
                                value: T?.id,
                                onSelectionChange: Q,
                                onQueryChange: J,
                                customMatchSorter: K,
                                clearable: !0,
                                maxOptionsVisible: 5,
                                placeholder: V ? I.intl.string(I.t["/SGi7v"]) : I.intl.string(I.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, n.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: I.intl.string(I.t.IblYEw),
                            }),
                            (0, n.jsx)(c.f, {
                                value: L,
                                onChange: O,
                                placeholder: I.intl.string(I.t.aiPKV4),
                                maxLength: 300,
                                rows: 4,
                            }),
                        ],
                    });
                default:
                    return null;
            }
        })(),
    });
}
