(a.d(t, { default: () => T, i: () => S }), a(321073));
var n = a(477900),
    i = a(582128),
    l = a(562708),
    s = a(17928),
    r = a(189213),
    o = a(890497),
    u = a(834730),
    m = a(144228),
    d = a(103557),
    c = a(587895),
    g = a(429913),
    p = a(952818),
    h = a(769015),
    x = a(409626),
    v = a(168017),
    b = a(471677),
    _ = a(569926),
    f = a(106191),
    A = a(404277),
    C = a(379078),
    j = a(704554),
    k = a(174459),
    I = a(21241),
    w = a(652215),
    y = a(375708),
    E = a(614958);
let G = i.memo(function (e) {
        let { game: t } = e,
            a = (0, s.bG)([c.A], () => c.A.getApplicationByName(t.name) ?? c.A.getApplication(t.id), [t.id, t.name]),
            i = (0, s.bG)(
                [p.Ay],
                () => {
                    let e = p.Ay.getVisibleGame(),
                        a = null != e ? p.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                    return a?.name?.toLowerCase() === t.name.toLowerCase() ? a : p.Ay.getGameForName(t.name);
                },
                [t],
            ),
            [l] = (0, g.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = c.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != i) return i.id;
                })(),
            ]),
            r = l ?? a,
            { data: o } = (0, _.I)(null == r ? t.id : void 0);
        return (0, n.jsx)(h.A, { pid: i?.pid, game: r ?? o, size: h.M.XSMALL, className: E.Gt });
    }),
    M = {
        searchType: C.n.FUZZY,
        sortType: C.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: a } = e,
                n = [t.name, a, t.id.toString()];
            return (t.aliases.length > 0 && n.push(...t.aliases), n);
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    N = [],
    S = i.memo(function (e) {
        let { games: t, selectedGame: a, onGameSelected: l, onGameSearchQueryChange: s, placeholder: r } = e,
            [u, m] = i.useState(""),
            d = i.useCallback(
                (e) => {
                    (m(e), s?.(e));
                },
                [s],
            ),
            c = i.useMemo(() => {
                let e = [];
                for (let i of (null != a &&
                    e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, n.jsx)(G, { game: a }) }),
                t))
                    (null == a || (a.id !== i.id && a.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, n.jsx)(G, { game: i }) });
                return e;
            }, [t, a]),
            g = i.useMemo(() => c.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [c]),
            [p, h] = i.useState(c),
            x = i.useCallback((e) => {
                h(e);
            }, []),
            v = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return;
                    let a = t.game;
                    (l(a ?? null), d(a?.name ?? ""));
                },
                [g, l, d],
            ),
            b = i.useCallback(
                (e) => {
                    let t = e.target.value;
                    (d(t), null != a && t !== a.name && l(null));
                },
                [a, l, d],
            );
        return (
            (0, j.RT)(u, c, x, M),
            (0, n.jsx)(o.Z, {
                options: p,
                selectionMode: "single",
                value: a?.id ?? void 0,
                onSelectionChange: v,
                onQueryChange: b,
                placeholder: r,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function T(e) {
    let { onClose: t, transitionState: a, onSubmitted: g, detected: p, defaultStep: C = "issue_selection" } = e,
        [j, G] = i.useState(C),
        [M, S] = i.useState(null),
        [T, D] = i.useState(""),
        [L, O] = i.useState(null),
        [R, Z] = i.useState(""),
        F = i.useMemo(() => (0, x.generateViewId)(), []),
        Q = (0, b.J$)(T).results ?? N,
        { extraChromeEnabled: J } = v.A.useConfig({ location: "game_detection_report" }),
        K = i.useMemo(
            () =>
                Q.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(f.A, { game: e, iconClassName: E.Gt }),
                    trailing: J ? (0, n.jsx)(A.A, { platforms: e.platformAvailability }) : void 0,
                })),
            [Q, J],
        ),
        P = i.useCallback(
            (e) => {
                let t = Q.find((t) => {
                    let { id: a } = t;
                    return a === e;
                });
                (O(t ?? null), D(t?.name ?? ""));
            },
            [Q],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.target.value;
                (D(t), null != L && t !== L.name && O(null));
            },
            [L],
        ),
        Y = i.useCallback((e) => e, []),
        z = (function (e) {
            let t = e?.applicationId,
                a = (0, s.bG)([c.A], () => c.A.getApplication(t), [t]),
                { data: n } = (0, _.I)(e?.gameId);
            return null == e
                ? null
                : {
                      name: ("" === e.name ? void 0 : e.name) ?? n?.name ?? a?.name ?? "",
                      icon: n ?? a,
                      analyticsId: e.applicationId ?? e.gameId ?? "",
                  };
        })(p),
        B = null != z;
    function X() {
        ((0, x.trackGameProfileFeedback)({
            viewId: F,
            applicationId: z?.analyticsId ?? "",
            suggestedGameName: "" !== T.trim() ? T.trim() : void 0,
            suggestedGameApplicationId: L?.id ?? null,
            feedback: "" !== R.trim() ? R.trim() : void 0,
            submitted: !0,
        }),
            g?.(L ?? null),
            t());
    }
    let q = (function () {
        switch (j) {
            case "issue_selection":
                return { title: y.intl.string(y.t["6tnjbD"]), actions: [] };
            case "game_search":
                return {
                    title: B ? y.intl.string(y.t.TZgkxY) : y.intl.string(y.t["+ie+wX"]),
                    actions: [
                        { text: y.intl.string(y.t.geKm7t), onClick: X, variant: "primary", disabled: "" === T.trim() },
                    ],
                };
            case "other_feedback":
                return {
                    title: y.intl.string(y.t.tdDpJj),
                    actions: [
                        { text: y.intl.string(y.t.geKm7t), onClick: X, variant: "primary", disabled: "" === R.trim() },
                    ],
                };
            default:
                return { title: "", actions: [] };
        }
    })();
    return (0, n.jsx)(r.a, {
        ...q,
        transitionState: a,
        onClose: t,
        trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (function () {
            switch (j) {
                case "issue_selection":
                    return (0, n.jsxs)("div", {
                        className: E.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: y.intl.string(y.t.IQHicr),
                            }),
                            (0, n.jsx)("div", {
                                className: E.R$,
                                children: (0, n.jsx)(m.z, {
                                    value: M ?? void 0,
                                    onChange: (e) => {
                                        (S(e),
                                            k.default.track(w.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: z?.analyticsId ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? G("game_search")
                                                    : G("other_feedback");
                                            }, 100));
                                    },
                                    options: B
                                        ? [
                                              { name: y.intl.string(y.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: y.intl.string(y.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: y.intl.string(y.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: y.intl.string(y.t.tdDpJj), value: "other_feedback" },
                                          ],
                                }),
                            }),
                        ],
                    });
                case "game_search":
                    return (0, n.jsxs)("div", {
                        className: E.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: B ? y.intl.string(y.t["79o/iq"]) : y.intl.string(y.t["r/2pZy"]),
                            }),
                            B &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: E.Gr,
                                            children: [
                                                (0, n.jsx)(h.A, {
                                                    game: z?.icon,
                                                    size: h.M.MEDIUM_LARGE,
                                                    className: E.q_,
                                                }),
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: z?.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(I.A, {}),
                                    ],
                                }),
                            (0, n.jsx)(o.Z, {
                                options: K,
                                selectionMode: "single",
                                value: L?.id,
                                onSelectionChange: P,
                                onQueryChange: V,
                                customMatchSorter: Y,
                                clearable: !0,
                                maxOptionsVisible: 5,
                                placeholder: B ? y.intl.string(y.t["/SGi7v"]) : y.intl.string(y.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, n.jsxs)("div", {
                        className: E.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: y.intl.string(y.t.IblYEw),
                            }),
                            (0, n.jsx)(d.f, {
                                value: R,
                                onChange: Z,
                                placeholder: y.intl.string(y.t.aiPKV4),
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
