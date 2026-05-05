n.d(t, { default: () => M, i: () => N }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(111956),
    s = n.n(i),
    r = n(562708),
    o = n(189213),
    u = n(17928),
    c = n(783878),
    m = n(834730),
    d = n(773812),
    g = n(260598),
    p = n(587895),
    h = n(429913),
    _ = n(952818),
    x = n(137177),
    A = n(409626),
    v = n(379078),
    b = n(704554),
    f = n(760751),
    j = n(174459),
    C = n(486020),
    E = n(21241),
    k = n(652215),
    S = n(375708),
    w = n(247947);
let G = l.memo(function (e) {
        let { game: t } = e,
            n = (0, u.bG)([p.A], () => p.A.getApplicationByName(t.name) ?? p.A.getApplication(t.id), [t.id, t.name]),
            l = (0, u.bG)([_.Ay], () => {
                let e = _.Ay.getVisibleGame(),
                    n = null != e ? _.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return n?.name?.toLowerCase() === t.name.toLowerCase() ? n : _.Ay.getGameForName(t.name);
            }, [t]),
            [i] = (0, h.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = p.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != l) return l.id;
                })(),
            ]);
        return (0, a.jsx)(x.A, { pid: l?.pid, game: i ?? n ?? t, size: x.M.XSMALL, className: w.Gt });
    }),
    y = {
        searchType: v.n.FUZZY,
        sortType: v.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: n } = e,
                a = [t.name, n, t.id.toString()];
            return t.aliases.length > 0 && a.push(...t.aliases), null != t.description && a.push(t.description), a;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    N = l.memo(function (e) {
        let {
                games: t,
                selectedGame: n,
                onGameSelected: i,
                onGameSearchQueryChange: r,
                placeholder: o,
                analyticsSurface: u,
            } = e,
            [m, d] = l.useState(""),
            g = l.useCallback(
                (e) => {
                    d(e), r?.(e);
                },
                [r],
            ),
            p = l.useMemo(() => {
                let e = [];
                for (let l of (null != n &&
                    e.push({ id: n.id, value: n.id, label: n.name, game: n, leading: (0, a.jsx)(G, { game: n }) }),
                t))
                    (null == n || (n.id !== l.id && n.name.toLowerCase() !== l.name.toLowerCase())) &&
                        e.push({ id: l.id, value: l.id, label: l.name, game: l, leading: (0, a.jsx)(G, { game: l }) });
                return e;
            }, [t, n]),
            h = l.useMemo(() => p.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [p]),
            [_, x] = l.useState(p),
            A = l.useCallback((e) => {
                x(e);
            }, []),
            v = l.useMemo(
                () =>
                    s()((e, t, n) => {
                        let a = e.trim();
                        0 !== a.length &&
                            j.default.track(k.HAw.DETECTABLE_GAME_SEARCHED, {
                                surface: n,
                                query_length: a.length,
                                result_count: t,
                            });
                    }, 1e3),
                [],
            );
        l.useEffect(() => () => v.cancel(), [v]);
        let f = l.useCallback(
                (e) => {
                    let t = h[e];
                    if (null == t) return;
                    let n = t.game;
                    i(n ?? null), g(n?.name ?? "");
                },
                [h, i, g],
            ),
            C = l.useCallback(
                (e) => {
                    let t = e.target.value;
                    g(t), null != n && t !== n.name && i(null), null != u && v(t, _.length, u);
                },
                [n, i, g, u, _, v],
            );
        return (
            (0, b.RT)(m, p, A, y),
            (0, a.jsx)(c.Z, {
                options: _,
                selectionMode: "single",
                value: n?.id ?? void 0,
                onSelectionChange: f,
                onQueryChange: C,
                placeholder: o,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function M(e) {
    let { onClose: t, transitionState: n, onSubmitted: i, detectedActivity: s, defaultStep: c = "issue_selection" } = e,
        [h, _] = l.useState(c),
        [x, v] = l.useState(null),
        [b, G] = l.useState(""),
        [y, M] = l.useState(null),
        [T, D] = l.useState(""),
        L = l.useMemo(() => (0, A.u9)(), []),
        I = (0, u.bG)([f.A], () => f.A.games),
        R = null != s,
        O = (0, u.bG)([p.A], () => (s?.application_id != null ? p.A.getApplication(s.application_id) : null)),
        Z = () => {
            (0, A.K6)({
                viewId: L,
                applicationId: s?.application_id ?? "",
                suggestedGameName: "" !== b.trim() ? b.trim() : void 0,
                suggestedGameApplicationId: y?.id ?? null,
                feedback: "" !== T.trim() ? T.trim() : void 0,
                submitted: !0,
            }),
                i?.(y ?? null),
                t();
        },
        K = (() => {
            switch (h) {
                case "issue_selection":
                    return { title: S.intl.string(S.t["6tnjbD"]), actions: [] };
                case "game_search":
                    return {
                        title: R ? S.intl.string(S.t.TZgkxY) : S.intl.string(S.t["+ie+wX"]),
                        actions: [
                            {
                                text: S.intl.string(S.t.geKm7t),
                                onClick: Z,
                                variant: "primary",
                                disabled: "" === b.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: S.intl.string(S.t.tdDpJj),
                        actions: [
                            {
                                text: S.intl.string(S.t.geKm7t),
                                onClick: Z,
                                variant: "primary",
                                disabled: "" === T.trim(),
                            },
                        ],
                    };
                default:
                    return { title: "", actions: [] };
            }
        })();
    return (0, a.jsx)(o.Modal, {
        ...K,
        transitionState: n,
        onClose: t,
        trackingProps: { impression: { impressionName: r.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (() => {
            switch (h) {
                case "issue_selection":
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: S.intl.string(S.t.IQHicr),
                            }),
                            (0, a.jsx)("div", {
                                className: w.R$,
                                children: (0, a.jsx)(d.z, {
                                    value: x ?? void 0,
                                    onChange: (e) => {
                                        v(e),
                                            j.default.track(k.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: s?.application_id ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? _("game_search")
                                                    : _("other_feedback");
                                            }, 100);
                                    },
                                    options: R
                                        ? [
                                              { name: S.intl.string(S.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: S.intl.string(S.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: S.intl.string(S.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: S.intl.string(S.t.tdDpJj), value: "other_feedback" },
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
                            (0, a.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: R ? S.intl.string(S.t["79o/iq"]) : S.intl.string(S.t["r/2pZy"]),
                            }),
                            R &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: w.Gr,
                                            children: [
                                                null !=
                                                (e = C.Ay.getApplicationIconURL({
                                                    id: s.application_id ?? "",
                                                    icon: O?.icon ?? null,
                                                }))
                                                    ? (0, a.jsx)("img", {
                                                          src: e,
                                                          alt:
                                                              null != s.name && "" !== s.name
                                                                  ? s.name
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
                                                (0, a.jsx)(m.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: null != s.name && "" !== s.name ? s.name : O?.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(E.A, {}),
                                    ],
                                }),
                            (0, a.jsx)(N, {
                                games: I,
                                selectedGame: y,
                                onGameSelected: M,
                                onGameSearchQueryChange: G,
                                placeholder: R ? S.intl.string(S.t["/SGi7v"]) : S.intl.string(S.t.ss9Zwa),
                                analyticsSurface: "game_detection_report",
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: S.intl.string(S.t.IblYEw),
                            }),
                            (0, a.jsx)(g.f, {
                                value: T,
                                onChange: D,
                                placeholder: S.intl.string(S.t.aiPKV4),
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
