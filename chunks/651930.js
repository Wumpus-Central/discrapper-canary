n.d(t, { default: () => G, i: () => w }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(110259),
    r = n(189213),
    s = n(311907),
    o = n(783878),
    u = n(834730),
    d = n(954197),
    c = n(260598),
    m = n(587895),
    g = n(429913),
    f = n(15285),
    p = n(769015),
    h = n(409626),
    _ = n(379078),
    v = n(704554),
    b = n(760751),
    A = n(954571),
    y = n(486020),
    x = n(21241),
    S = n(652215),
    k = n(985018),
    E = n(247947);
let L = l.memo(function (e) {
        let { game: t } = e,
            n = (0, s.bG)([m.A], () => m.A.getApplicationByName(t.name) ?? m.A.getApplication(t.id), [t.id, t.name]),
            l = (0, s.bG)([f.Ay], () => {
                let e = f.Ay.getVisibleGame(),
                    n = null != e ? f.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                return n?.name?.toLowerCase() === t.name.toLowerCase() ? n : f.Ay.getGameForName(t.name);
            }, [t]),
            [i] = (0, g.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = m.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != l) return l.id;
                })(),
            ]);
        return (0, a.jsx)(p.A, { pid: l?.pid, game: i ?? n ?? t, size: p.M.XSMALL, className: E.Gt });
    }),
    I = {
        searchType: _.n.FUZZY,
        sortType: _.r.JARO_WINKLER,
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
    w = l.memo(function (e) {
        let { games: t, selectedGame: n, onGameSelected: i, onGameSearchQueryChange: r, placeholder: s } = e,
            [u, d] = l.useState(""),
            c = l.useCallback(
                (e) => {
                    d(e), r?.(e);
                },
                [r],
            ),
            m = l.useMemo(() => {
                let e = [];
                for (let l of (null != n &&
                    e.push({ id: n.id, value: n.id, label: n.name, game: n, leading: (0, a.jsx)(L, { game: n }) }),
                t))
                    (null == n || (n.id !== l.id && n.name.toLowerCase() !== l.name.toLowerCase())) &&
                        e.push({ id: l.id, value: l.id, label: l.name, game: l, leading: (0, a.jsx)(L, { game: l }) });
                return e;
            }, [t, n]),
            g = l.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [f, p] = l.useState(m),
            h = l.useCallback((e) => {
                p(e);
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
            b = l.useCallback(
                (e) => {
                    let t = e.target.value;
                    c(t), null != n && t !== n.name && i(null);
                },
                [n, i, c],
            );
        return (
            (0, v.RT)(u, m, h, I),
            (0, a.jsx)(o.Z, {
                options: f,
                selectionMode: "single",
                value: n?.id ?? void 0,
                onSelectionChange: _,
                onQueryChange: b,
                placeholder: s,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function G(e) {
    let { onClose: t, transitionState: n, onSubmitted: o, detectedActivity: g, defaultStep: f = "issue_selection" } = e,
        [p, _] = l.useState(f),
        [v, L] = l.useState(null),
        [I, G] = l.useState(""),
        [M, C] = l.useState(null),
        [N, R] = l.useState(""),
        j = l.useMemo(() => (0, h.u9)(), []),
        D = (0, s.bG)([b.A], () => b.A.games),
        F = null != g,
        T = (0, s.bG)([m.A], () => (g?.application_id != null ? m.A.getApplication(g.application_id) : null)),
        P = () => {
            (0, h.K6)({
                viewId: j,
                applicationId: g?.application_id ?? "",
                suggestedGameName: "" !== I.trim() ? I.trim() : void 0,
                suggestedGameApplicationId: M?.id ?? null,
                feedback: "" !== N.trim() ? N.trim() : void 0,
                submitted: !0,
            }),
                o?.(M ?? null),
                t();
        },
        O = (() => {
            switch (p) {
                case "issue_selection":
                    return { title: k.intl.string(k.t["6tnjbD"]), actions: [] };
                case "game_search":
                    return {
                        title: F ? k.intl.string(k.t.TZgkxY) : k.intl.string(k.t["+ie+wX"]),
                        actions: [
                            {
                                text: k.intl.string(k.t.geKm7t),
                                onClick: P,
                                variant: "primary",
                                disabled: "" === I.trim(),
                            },
                        ],
                    };
                case "other_feedback":
                    return {
                        title: k.intl.string(k.t.tdDpJj),
                        actions: [
                            {
                                text: k.intl.string(k.t.geKm7t),
                                onClick: P,
                                variant: "primary",
                                disabled: "" === N.trim(),
                            },
                        ],
                    };
                default:
                    return { title: "", actions: [] };
            }
        })();
    return (0, a.jsx)(r.Modal, {
        ...O,
        transitionState: n,
        onClose: t,
        trackingProps: { impression: { impressionName: i.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (() => {
            switch (p) {
                case "issue_selection":
                    return (0, a.jsxs)("div", {
                        className: E.Qs,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: k.intl.string(k.t.IQHicr),
                            }),
                            (0, a.jsx)("div", {
                                className: E.R$,
                                children: (0, a.jsx)(d.z, {
                                    value: v ?? void 0,
                                    onChange: (e) => {
                                        L(e),
                                            A.default.track(S.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: g?.application_id ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? _("game_search")
                                                    : _("other_feedback");
                                            }, 100);
                                    },
                                    options: F
                                        ? [
                                              { name: k.intl.string(k.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: k.intl.string(k.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: k.intl.string(k.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: k.intl.string(k.t.tdDpJj), value: "other_feedback" },
                                          ],
                                }),
                            }),
                        ],
                    });
                case "game_search":
                    let e;
                    return (0, a.jsxs)("div", {
                        className: E.Qs,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: F ? k.intl.string(k.t["79o/iq"]) : k.intl.string(k.t["r/2pZy"]),
                            }),
                            F &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: E.Gr,
                                            children: [
                                                null !=
                                                (e = y.Ay.getApplicationIconURL({
                                                    id: g.application_id ?? "",
                                                    icon: T?.icon ?? null,
                                                }))
                                                    ? (0, a.jsx)("img", {
                                                          src: e,
                                                          alt:
                                                              null != g.name && "" !== g.name
                                                                  ? g.name
                                                                  : (T?.name ?? ""),
                                                          className: E.q_,
                                                      })
                                                    : (0, a.jsx)("div", {
                                                          className: `${E.q_} ${E.x_}`,
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
                                                    children: null != g.name && "" !== g.name ? g.name : T?.name,
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(x.A, {}),
                                    ],
                                }),
                            (0, a.jsx)(w, {
                                games: D,
                                selectedGame: M,
                                onGameSelected: C,
                                onGameSearchQueryChange: G,
                                placeholder: F ? k.intl.string(k.t["/SGi7v"]) : k.intl.string(k.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, a.jsxs)("div", {
                        className: E.Qs,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: k.intl.string(k.t.IblYEw),
                            }),
                            (0, a.jsx)(c.f, {
                                value: N,
                                onChange: R,
                                placeholder: k.intl.string(k.t.aiPKV4),
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
