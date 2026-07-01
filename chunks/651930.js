n.d(t, { default: () => y, i: () => N }), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(562708),
    s = n(189213),
    r = n(17928),
    o = n(783878),
    c = n(834730),
    u = n(773812),
    d = n(260598),
    m = n(587895),
    g = n(429913),
    p = n(952818),
    h = n(769015),
    x = n(409626),
    _ = n(379078),
    v = n(704554),
    b = n(760751),
    A = n(174459),
    f = n(486020),
    j = n(21241),
    k = n(652215),
    C = n(375708),
    w = n(247947);
let G = i.memo(function (e) {
        let { game: t } = e,
            n = (0, r.bG)([m.A], () => m.A.getApplicationByName(t.name) ?? m.A.getApplication(t.id), [t.id, t.name]),
            i = (0, r.bG)([p.Ay], () => {
                let e = p.Ay.getVisibleGame(),
                    n = null != e ? p.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return n?.name?.toLowerCase() === t.name.toLowerCase() ? n : p.Ay.getGameForName(t.name);
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
            ]);
        return (0, a.jsx)(h.A, { pid: i?.pid, game: l ?? n ?? t, size: h.M.XSMALL, className: w.Gt });
    }),
    S = {
        searchType: _.n.FUZZY,
        sortType: _.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: n } = e,
                a = [t.name, n, t.id.toString()];
            return t.aliases.length > 0 && a.push(...t.aliases), null != t.description && a.push(t.description), a;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    N = i.memo(function (e) {
        let { games: t, selectedGame: n, onGameSelected: l, onGameSearchQueryChange: s, placeholder: r } = e,
            [c, u] = i.useState(""),
            d = i.useCallback(
                (e) => {
                    u(e), s?.(e);
                },
                [s],
            ),
            m = i.useMemo(() => {
                let e = [];
                for (let i of (null != n &&
                    e.push({ id: n.id, value: n.id, label: n.name, game: n, leading: (0, a.jsx)(G, { game: n }) }),
                t))
                    (null == n || (n.id !== i.id && n.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, a.jsx)(G, { game: i }) });
                return e;
            }, [t, n]),
            g = i.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [p, h] = i.useState(m),
            x = i.useCallback((e) => {
                h(e);
            }, []),
            _ = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return;
                    let n = t.game;
                    l(n ?? null), d(n?.name ?? "");
                },
                [g, l, d],
            ),
            b = i.useCallback(
                (e) => {
                    let t = e.target.value;
                    d(t), null != n && t !== n.name && l(null);
                },
                [n, l, d],
            );
        return (
            (0, v.RT)(c, m, x, S),
            (0, a.jsx)(o.Z, {
                options: p,
                selectionMode: "single",
                value: n?.id ?? void 0,
                onSelectionChange: _,
                onQueryChange: b,
                placeholder: r,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function y(e) {
    let { onClose: t, transitionState: n, onSubmitted: o, detectedActivity: g, defaultStep: p = "issue_selection" } = e,
        [h, _] = i.useState(p),
        [v, G] = i.useState(null),
        [S, y] = i.useState(""),
        [E, M] = i.useState(null),
        [T, I] = i.useState(""),
        L = i.useMemo(() => (0, x.generateViewId)(), []),
        D = (0, r.bG)([b.A], () => b.A.games),
        O = null != g,
        R = (0, r.bG)([m.A], () => (g?.application_id != null ? m.A.getApplication(g.application_id) : null));
    function Z() {
        (0, x.trackGameProfileFeedback)({
            viewId: L,
            applicationId: g?.application_id ?? "",
            suggestedGameName: "" !== S.trim() ? S.trim() : void 0,
            suggestedGameApplicationId: E?.id ?? null,
            feedback: "" !== T.trim() ? T.trim() : void 0,
            submitted: !0,
        }),
            o?.(E ?? null),
            t();
    }
    let F = (function () {
        switch (h) {
            case "issue_selection":
                return { title: C.intl.string(C.t["6tnjbD"]), actions: [] };
            case "game_search":
                return {
                    title: O ? C.intl.string(C.t.TZgkxY) : C.intl.string(C.t["+ie+wX"]),
                    actions: [
                        { text: C.intl.string(C.t.geKm7t), onClick: Z, variant: "primary", disabled: "" === S.trim() },
                    ],
                };
            case "other_feedback":
                return {
                    title: C.intl.string(C.t.tdDpJj),
                    actions: [
                        { text: C.intl.string(C.t.geKm7t), onClick: Z, variant: "primary", disabled: "" === T.trim() },
                    ],
                };
            default:
                return { title: "", actions: [] };
        }
    })();
    return (0, a.jsx)(s.Modal, {
        ...F,
        transitionState: n,
        onClose: t,
        trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (() => {
            switch (h) {
                case "issue_selection":
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.IQHicr),
                            }),
                            (0, a.jsx)("div", {
                                className: w.R$,
                                children: (0, a.jsx)(u.z, {
                                    value: v ?? void 0,
                                    onChange: (e) => {
                                        G(e),
                                            A.default.track(k.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: g?.application_id ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? _("game_search")
                                                    : _("other_feedback");
                                            }, 100);
                                    },
                                    options: O
                                        ? [
                                              { name: C.intl.string(C.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: C.intl.string(C.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: C.intl.string(C.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: C.intl.string(C.t.tdDpJj), value: "other_feedback" },
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
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: O ? C.intl.string(C.t["79o/iq"]) : C.intl.string(C.t["r/2pZy"]),
                            }),
                            O &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: w.Gr,
                                            children: [
                                                null !=
                                                (e = f.Ay.getApplicationIconURL({
                                                    id: g.application_id ?? "",
                                                    icon: R?.icon ?? null,
                                                }))
                                                    ? (0, a.jsx)("img", {
                                                          src: e,
                                                          alt:
                                                              null != g.name && "" !== g.name
                                                                  ? g.name
                                                                  : (R?.name ?? ""),
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
                                                (0, a.jsx)(c.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: null != g.name && "" !== g.name ? g.name : R?.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(j.A, {}),
                                    ],
                                }),
                            (0, a.jsx)(N, {
                                games: D,
                                selectedGame: E,
                                onGameSelected: M,
                                onGameSearchQueryChange: y,
                                placeholder: O ? C.intl.string(C.t["/SGi7v"]) : C.intl.string(C.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, a.jsxs)("div", {
                        className: w.Qs,
                        children: [
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.IblYEw),
                            }),
                            (0, a.jsx)(d.f, {
                                value: T,
                                onChange: I,
                                placeholder: C.intl.string(C.t.aiPKV4),
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
