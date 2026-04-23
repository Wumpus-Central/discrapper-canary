n.d(t, { default: () => j, i: () => G }), n(321073);
var a = n(627968),
    l = n(64700),
    r = n(110259),
    i = n(189213),
    s = n(17928),
    o = n(783878),
    u = n(834730),
    d = n(144228),
    c = n(260598),
    m = n(587895),
    g = n(429913),
    f = n(328153),
    p = n(137177),
    h = n(409626),
    v = n(379078),
    y = n(704554),
    x = n(760751),
    b = n(954571),
    _ = n(486020),
    A = n(21241),
    N = n(652215),
    I = n(985018),
    w = n(247947);
let S = l.memo(function (e) {
        let { game: t } = e,
            n = (0, s.bG)([m.A], () => m.A.getApplicationByName(t.name) ?? m.A.getApplication(t.id), [t.id, t.name]),
            l = (0, s.bG)([f.Ay], () => {
                let e = f.Ay.getVisibleGame(),
                    n = null != e ? f.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return n?.name?.toLowerCase() === t.name.toLowerCase() ? n : f.Ay.getGameForName(t.name);
            }, [t]),
            [r] = (0, g.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = m.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != l) return l.id;
                })(),
            ]);
        return (0, a.jsx)(p.A, { pid: l?.pid, game: r ?? n ?? t, size: p.M.XSMALL, className: w.Gt });
    }),
    E = {
        searchType: v.n.FUZZY,
        sortType: v.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: n } = e,
                a = [t.name, n, t.id.toString()];
            if (
                (t.aliases.length > 0 && a.push(...t.aliases),
                null != t.description && a.push(t.description),
                null != t.linkedApplications)
            )
                for (let e of t.linkedApplications) {
                    let t = m.A.getApplication(e.application_id);
                    null != t && a.push(t.name);
                }
            return a;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    G = l.memo(function (e) {
        let { games: t, selectedGame: n, onGameSelected: r, onGameSearchQueryChange: i, placeholder: s } = e,
            [u, d] = l.useState(""),
            c = l.useCallback(
                (e) => {
                    d(e), i?.(e);
                },
                [i],
            ),
            m = l.useMemo(() => {
                let e = [];
                for (let l of (null != n &&
                    e.push({ id: n.id, value: n.id, label: n.name, game: n, leading: (0, a.jsx)(S, { game: n }) }),
                t))
                    (null == n || (n.id !== l.id && n.name.toLowerCase() !== l.name.toLowerCase())) &&
                        e.push({ id: l.id, value: l.id, label: l.name, game: l, leading: (0, a.jsx)(S, { game: l }) });
                return e;
            }, [t, n]),
            g = l.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [f, p] = l.useState(m),
            h = l.useCallback((e) => {
                p(e);
            }, []),
            v = l.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return;
                    let n = t.game;
                    r(n ?? null), c(n?.name ?? "");
                },
                [g, r, c],
            ),
            x = l.useCallback(
                (e) => {
                    let t = e.target.value;
                    c(t), null != n && t !== n.name && r(null);
                },
                [n, r, c],
            );
        return (
            (0, y.RT)(u, m, h, E),
            (0, a.jsx)(o.Z, {
                options: f,
                selectionMode: "single",
                value: n?.id ?? void 0,
                onSelectionChange: v,
                onQueryChange: x,
                placeholder: s,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function j(e) {
    let { onClose: t, transitionState: n, onSubmitted: o, detectedActivity: g, defaultStep: f = "issue_selection" } = e,
        [p, v] = l.useState(f),
        [y, S] = l.useState(null),
        [E, j] = l.useState(""),
        [k, C] = l.useState(null),
        [M, D] = l.useState(""),
        T = l.useMemo(() => (0, h.u9)(), []),
        P = (0, s.bG)([x.A], () => x.A.games),
        L = null != g,
        O = (0, s.bG)([m.A], () => (g?.application_id != null ? m.A.getApplication(g.application_id) : null)),
        R = () => {
            (0, h.K6)({
                viewId: T,
                applicationId: g?.application_id ?? "",
                suggestedGameName: "" !== E.trim() ? E.trim() : void 0,
                suggestedGameApplicationId: k?.id ?? null,
                feedback: "" !== M.trim() ? M.trim() : void 0,
                submitted: !0,
            }),
                o?.(k ?? null),
                t();
        },
        F = (() => {
            switch (p) {
                case "issue_selection":
                    return { title: I.intl.string(I.t["6tnjbD"]), actions: [] };
                case "game_search":
                    return {
                        title: L ? I.intl.string(I.t.TZgkxY) : I.intl.string(I.t["+ie+wX"]),
                        actions: [
                            {
                                text: I.intl.string(I.t.geKm7t),
                                onClick: R,
                                variant: "primary",
                                disabled: "" === E.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: I.intl.string(I.t.tdDpJj),
                        actions: [
                            {
                                text: I.intl.string(I.t.geKm7t),
                                onClick: R,
                                variant: "primary",
                                disabled: "" === M.trim(),
                            },
                        ],
                    };
                default:
                    return { title: "", actions: [] };
            }
        })();
    return (0, a.jsx)(i.Modal, {
        ...F,
        transitionState: n,
        onClose: t,
        trackingProps: { impression: { impressionName: r.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (() => {
            switch (p) {
                case "issue_selection":
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: I.intl.string(I.t.IQHicr),
                            }),
                            (0, a.jsx)("div", {
                                className: w.R$,
                                children: (0, a.jsx)(d.z, {
                                    value: y ?? void 0,
                                    onChange: (e) => {
                                        S(e),
                                            b.default.track(N.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: g?.application_id ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? v("game_search")
                                                    : v("other_feedback");
                                            }, 100);
                                    },
                                    options: L
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
                    let e;
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: L ? I.intl.string(I.t["79o/iq"]) : I.intl.string(I.t["r/2pZy"]),
                            }),
                            L &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: w.Gr,
                                            children: [
                                                null !=
                                                (e = _.Ay.getApplicationIconURL({
                                                    id: g.application_id ?? "",
                                                    icon: O?.icon ?? null,
                                                }))
                                                    ? (0, a.jsx)("img", {
                                                          src: e,
                                                          alt:
                                                              null != g.name && "" !== g.name
                                                                  ? g.name
                                                                  : (O?.name ?? ""),
                                                          className: w.q_,
                                                      })
                                                    : (0, a.jsx)("div", {
                                                          className: `${w.q_} ${w.x_}`,
                                                          children: (0, a.jsx)("div", {
                                                              style: {
                                                                  fontSize: "28px",
                                                                  fontWeight: "bold",
                                                                  color: "var(--text-muted)",
                                                                  userSelect: "none",
                                                              },
                                                              children: "?",
                                                          }),
                                                      }),
                                                (0, a.jsx)(u.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: null != g.name && "" !== g.name ? g.name : O?.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(A.A, {}),
                                    ],
                                }),
                            (0, a.jsx)(G, {
                                games: P,
                                selectedGame: k,
                                onGameSelected: C,
                                onGameSearchQueryChange: j,
                                placeholder: L ? I.intl.string(I.t["/SGi7v"]) : I.intl.string(I.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: I.intl.string(I.t.IblYEw),
                            }),
                            (0, a.jsx)(c.f, {
                                value: M,
                                onChange: D,
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
