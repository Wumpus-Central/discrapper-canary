n.d(t, { default: () => y, i: () => N }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(110259),
    s = n(189213),
    r = n(17928),
    o = n(783878),
    c = n(834730),
    u = n(144228),
    d = n(260598),
    m = n(587895),
    p = n(429913),
    g = n(328153),
    h = n(137177),
    x = n(409626),
    _ = n(379078),
    A = n(704554),
    v = n(760751),
    b = n(954571),
    f = n(486020),
    j = n(21241),
    k = n(652215),
    C = n(985018),
    S = n(247947);
let w = a.memo(function (e) {
        let { game: t } = e,
            n = (0, r.bG)([m.A], () => m.A.getApplicationByName(t.name) ?? m.A.getApplication(t.id), [t.id, t.name]),
            a = (0, r.bG)([g.Ay], () => {
                let e = g.Ay.getVisibleGame(),
                    n = null != e ? g.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return n?.name?.toLowerCase() === t.name.toLowerCase() ? n : g.Ay.getGameForName(t.name);
            }, [t]),
            [l] = (0, p.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = m.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != a) return a.id;
                })(),
            ]);
        return (0, i.jsx)(h.A, { pid: a?.pid, game: l ?? n ?? t, size: h.M.XSMALL, className: S.Gt });
    }),
    G = {
        searchType: _.n.FUZZY,
        sortType: _.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: n } = e,
                i = [t.name, n, t.id.toString()];
            if (
                (t.aliases.length > 0 && i.push(...t.aliases),
                null != t.description && i.push(t.description),
                null != t.linkedApplications)
            )
                for (let e of t.linkedApplications) {
                    let t = m.A.getApplication(e.application_id);
                    null != t && i.push(t.name);
                }
            return i;
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    N = a.memo(function (e) {
        let { games: t, selectedGame: n, onGameSelected: l, onGameSearchQueryChange: s, placeholder: r } = e,
            [c, u] = a.useState(""),
            d = a.useCallback(
                (e) => {
                    u(e), s?.(e);
                },
                [s],
            ),
            m = a.useMemo(() => {
                let e = [];
                for (let a of (null != n &&
                    e.push({ id: n.id, value: n.id, label: n.name, game: n, leading: (0, i.jsx)(w, { game: n }) }),
                t))
                    (null == n || (n.id !== a.id && n.name.toLowerCase() !== a.name.toLowerCase())) &&
                        e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, i.jsx)(w, { game: a }) });
                return e;
            }, [t, n]),
            p = a.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [g, h] = a.useState(m),
            x = a.useCallback((e) => {
                h(e);
            }, []),
            _ = a.useCallback(
                (e) => {
                    let t = p[e];
                    if (null == t) return;
                    let n = t.game;
                    l(n ?? null), d(n?.name ?? "");
                },
                [p, l, d],
            ),
            v = a.useCallback(
                (e) => {
                    let t = e.target.value;
                    d(t), null != n && t !== n.name && l(null);
                },
                [n, l, d],
            );
        return (
            (0, A.RT)(c, m, x, G),
            (0, i.jsx)(o.Z, {
                options: g,
                selectionMode: "single",
                value: n?.id ?? void 0,
                onSelectionChange: _,
                onQueryChange: v,
                placeholder: r,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function y(e) {
    let { onClose: t, transitionState: n, onSubmitted: o, detectedActivity: p, defaultStep: g = "issue_selection" } = e,
        [h, _] = a.useState(g),
        [A, w] = a.useState(null),
        [G, y] = a.useState(""),
        [E, M] = a.useState(null),
        [T, L] = a.useState(""),
        D = a.useMemo(() => (0, x.u9)(), []),
        I = (0, r.bG)([v.A], () => v.A.games),
        O = null != p,
        R = (0, r.bG)([m.A], () => (p?.application_id != null ? m.A.getApplication(p.application_id) : null)),
        Z = () => {
            (0, x.K6)({
                viewId: D,
                applicationId: p?.application_id ?? "",
                suggestedGameName: "" !== G.trim() ? G.trim() : void 0,
                suggestedGameApplicationId: E?.id ?? null,
                feedback: "" !== T.trim() ? T.trim() : void 0,
                submitted: !0,
            }),
                o?.(E ?? null),
                t();
        },
        K = (() => {
            switch (h) {
                case "issue_selection":
                    return { title: C.intl.string(C.t["6tnjbD"]), actions: [] };
                case "game_search":
                    return {
                        title: O ? C.intl.string(C.t.TZgkxY) : C.intl.string(C.t["+ie+wX"]),
                        actions: [
                            {
                                text: C.intl.string(C.t.geKm7t),
                                onClick: Z,
                                variant: "primary",
                                disabled: "" === G.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: C.intl.string(C.t.tdDpJj),
                        actions: [
                            {
                                text: C.intl.string(C.t.geKm7t),
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
    return (0, i.jsx)(s.Modal, {
        ...K,
        transitionState: n,
        onClose: t,
        trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (() => {
            switch (h) {
                case "issue_selection":
                    return (0, i.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.IQHicr),
                            }),
                            (0, i.jsx)("div", {
                                className: S.R$,
                                children: (0, i.jsx)(u.z, {
                                    value: A ?? void 0,
                                    onChange: (e) => {
                                        w(e),
                                            b.default.track(k.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: p?.application_id ?? null,
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
                    return (0, i.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: O ? C.intl.string(C.t["79o/iq"]) : C.intl.string(C.t["r/2pZy"]),
                            }),
                            O &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: S.Gr,
                                            children: [
                                                null !=
                                                (e = f.Ay.getApplicationIconURL({
                                                    id: p.application_id ?? "",
                                                    icon: R?.icon ?? null,
                                                }))
                                                    ? (0, i.jsx)("img", {
                                                          src: e,
                                                          alt:
                                                              null != p.name && "" !== p.name
                                                                  ? p.name
                                                                  : (R?.name ?? ""),
                                                          className: S.q_,
                                                      })
                                                    : (0, i.jsx)("div", {
                                                          className: `${S.q_} ${S.x_}`,
                                                          children: (0, i.jsx)("div", {
                                                              style: {
                                                                  fontSize: "28px",
                                                                  fontWeight: "bold",
                                                                  color: "var(--text-muted)",
                                                                  userSelect: "none",
                                                              },
                                                              children: "?",
                                                          }),
                                                      }),
                                                (0, i.jsx)(c.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: null != p.name && "" !== p.name ? p.name : R?.name,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(j.A, {}),
                                    ],
                                }),
                            (0, i.jsx)(N, {
                                games: I,
                                selectedGame: E,
                                onGameSelected: M,
                                onGameSearchQueryChange: y,
                                placeholder: O ? C.intl.string(C.t["/SGi7v"]) : C.intl.string(C.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, i.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.IblYEw),
                            }),
                            (0, i.jsx)(d.f, {
                                value: T,
                                onChange: L,
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
