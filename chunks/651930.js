n.d(t, { default: () => S, i: () => G }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(110259),
    r = n(158954),
    s = n(311907),
    u = n(397927),
    o = n(587895),
    d = n(429913),
    c = n(15285),
    m = n(769015),
    g = n(409626),
    f = n(379078),
    p = n(704554),
    h = n(760751),
    v = n(954571),
    _ = n(486020),
    y = n(21241),
    x = n(652215),
    A = n(985018),
    b = n(936944);
let N = l.memo(function (e) {
        let { game: t } = e,
            n = (0, s.bG)([o.A], () => o.A.getApplicationByName(t.name) ?? o.A.getApplication(t.id), [t.id, t.name]),
            l = (0, s.bG)([c.Ay], () => {
                let e = c.Ay.getVisibleGame(),
                    n = null != e ? c.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return n?.name?.toLowerCase() === t.name.toLowerCase() ? n : c.Ay.getGameForName(t.name);
            }, [t]),
            [i] = (0, d.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = o.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != l) return l.id;
                })(),
            ]);
        return (0, a.jsx)(m.A, { pid: l?.pid, game: i ?? n ?? t, size: m.M.XSMALL, className: b.Gt });
    }),
    I = {
        searchType: f.n.FUZZY,
        sortType: f.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: n } = e,
                a = [t.name, n, t.id.toString()];
            if (
                (t.aliases.length > 0 && a.push(...t.aliases),
                null != t.description && a.push(t.description),
                null != t.linkedApplications)
            )
                for (let e of t.linkedApplications) {
                    let t = o.A.getApplication(e.application_id);
                    null != t && a.push(t.name);
                }
            return a;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    G = l.memo(function (e) {
        let { games: t, selectedGame: n, onGameSelected: i, onGameSearchQueryChange: r, placeholder: s } = e,
            [o, d] = l.useState(""),
            c = l.useCallback(
                (e) => {
                    d(e), r?.(e);
                },
                [r],
            ),
            m = l.useMemo(() => {
                let e = [];
                for (let l of (null != n &&
                    e.push({ id: n.id, value: n.id, label: n.name, game: n, leading: (0, a.jsx)(N, { game: n }) }),
                t))
                    (null == n || (n.id !== l.id && n.name.toLowerCase() !== l.name.toLowerCase())) &&
                        e.push({ id: l.id, value: l.id, label: l.name, game: l, leading: (0, a.jsx)(N, { game: l }) });
                return e;
            }, [t, n]),
            g = l.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [f, h] = l.useState(m),
            v = l.useCallback((e) => {
                h(e);
            }, []),
            _ = l.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return;
                    let n = t.game;
                    i(n ?? null), c(n?.name ?? "");
                },
                [g, i, c],
            ),
            y = l.useCallback(
                (e) => {
                    let t = e.target.value;
                    c(t), null != n && t !== n.name && i(null);
                },
                [n, i, c],
            );
        return (
            (0, p.RT)(o, m, v, I),
            (0, a.jsx)(u.ZiE, {
                options: f,
                selectionMode: "single",
                value: n?.id ?? void 0,
                onSelectionChange: _,
                onQueryChange: y,
                placeholder: s,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function S(e) {
    let { onClose: t, transitionState: n, onSubmitted: d, detectedActivity: c, defaultStep: m = "issue_selection" } = e,
        [f, p] = l.useState(m),
        [N, I] = l.useState(null),
        [S, E] = l.useState(""),
        [j, k] = l.useState(null),
        [w, T] = l.useState(""),
        C = l.useMemo(() => (0, g.u9)(), []),
        D = (0, s.bG)([h.A], () => h.A.games),
        M = null != c,
        O = (0, s.bG)([o.A], () => (c?.application_id != null ? o.A.getApplication(c.application_id) : null)),
        L = () => {
            (0, g.K6)({
                viewId: C,
                applicationId: c?.application_id ?? "",
                suggestedGameName: "" !== S.trim() ? S.trim() : void 0,
                suggestedGameApplicationId: j?.id ?? null,
                feedback: "" !== w.trim() ? w.trim() : void 0,
                submitted: !0,
            }),
                d?.(j ?? null),
                t();
        },
        P = (() => {
            switch (f) {
                case "issue_selection":
                    return { title: A.intl.string(A.t["6tnjbD"]), actions: [] };
                case "game_search":
                    return {
                        title: M ? A.intl.string(A.t.TZgkxY) : A.intl.string(A.t["+ie+wX"]),
                        actions: [
                            {
                                text: A.intl.string(A.t.geKm7t),
                                onClick: L,
                                variant: "primary",
                                disabled: "" === S.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: A.intl.string(A.t.tdDpJj),
                        actions: [
                            {
                                text: A.intl.string(A.t.geKm7t),
                                onClick: L,
                                variant: "primary",
                                disabled: "" === w.trim(),
                            },
                        ],
                    };
                default:
                    return { title: "", actions: [] };
            }
        })();
    return (0, a.jsx)(r.Modal, {
        ...P,
        transitionState: n,
        onClose: t,
        trackingProps: { impression: { impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (() => {
            switch (f) {
                case "issue_selection":
                    return (0, a.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: A.intl.string(A.t.IQHicr),
                            }),
                            (0, a.jsx)("div", {
                                className: b.R$,
                                children: (0, a.jsx)(u.z6M, {
                                    value: N ?? void 0,
                                    onChange: (e) => {
                                        I(e),
                                            v.default.track(x.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: c?.application_id ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? p("game_search")
                                                    : p("other_feedback");
                                            }, 100);
                                    },
                                    options: M
                                        ? [
                                              { name: A.intl.string(A.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: A.intl.string(A.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: A.intl.string(A.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: A.intl.string(A.t.tdDpJj), value: "other_feedback" },
                                          ],
                                }),
                            }),
                        ],
                    });
                case "game_search":
                    let e;
                    return (0, a.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: M ? A.intl.string(A.t["79o/iq"]) : A.intl.string(A.t["r/2pZy"]),
                            }),
                            M &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: b.Gr,
                                            children: [
                                                null !=
                                                (e = _.Ay.getApplicationIconURL({
                                                    id: c.application_id ?? "",
                                                    icon: O?.icon ?? null,
                                                }))
                                                    ? (0, a.jsx)("img", {
                                                          src: e,
                                                          alt:
                                                              null != c.name && "" !== c.name
                                                                  ? c.name
                                                                  : (O?.name ?? ""),
                                                          className: b.q_,
                                                      })
                                                    : (0, a.jsx)("div", {
                                                          className: `${b.q_} ${b.x_}`,
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
                                                (0, a.jsx)(u.Text, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: null != c.name && "" !== c.name ? c.name : O?.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(y.A, {}),
                                    ],
                                }),
                            (0, a.jsx)(G, {
                                games: D,
                                selectedGame: j,
                                onGameSelected: k,
                                onGameSearchQueryChange: E,
                                placeholder: M ? A.intl.string(A.t["/SGi7v"]) : A.intl.string(A.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, a.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: A.intl.string(A.t.IblYEw),
                            }),
                            (0, a.jsx)(u.fs1, {
                                value: w,
                                onChange: T,
                                placeholder: A.intl.string(A.t.aiPKV4),
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
