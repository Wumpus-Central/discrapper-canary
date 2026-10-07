(a.d(t, { default: () => L, i: () => D }), a(321073));
var n = a(477900),
    i = a(582128),
    l = a(562708),
    s = a(651188),
    r = a(17928),
    o = a(189213),
    u = a(890497),
    m = a(834730),
    c = a(144228),
    d = a(103557),
    g = a(587895),
    p = a(429913),
    h = a(952818),
    x = a(769015),
    v = a(409626),
    b = a(168017),
    _ = a(778747),
    f = a(471677),
    A = a(569926),
    C = a(106191),
    j = a(404277),
    k = a(379078),
    E = a(704554),
    I = a(174459),
    w = a(21241),
    G = a(652215),
    N = a(375708),
    S = a(614958);
let y = i.memo(function (e) {
        let { game: t } = e,
            a = (0, r.bG)([g.A], () => g.A.getApplicationByName(t.name) ?? g.A.getApplication(t.id), [t.id, t.name]),
            i = (0, r.bG)(
                [h.Ay],
                () => {
                    let e = h.Ay.getVisibleGame(),
                        a = null != e ? h.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
                    return a?.name?.toLowerCase() === t.name.toLowerCase() ? a : h.Ay.getGameForName(t.name);
                },
                [t],
            ),
            [l] = (0, p.A)([
                (function () {
                    if (null != t.id) return t.id;
                    if (null != t.name) {
                        let e = g.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != i) return i.id;
                })(),
            ]),
            s = l ?? a,
            { data: o } = (0, A.I)(null == s ? t.id : void 0);
        return (0, n.jsx)(x.A, { pid: i?.pid, game: s ?? o, size: x.M.XSMALL, className: S.Gt });
    }),
    M = {
        searchType: k.n.FUZZY,
        sortType: k.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { game: t, label: a } = e,
                n = [t.name, a, t.id.toString()];
            return (t.aliases.length > 0 && n.push(...t.aliases), n);
        },
        throttleMs: 100,
        maxSearchResults: 20,
    },
    T = [],
    D = i.memo(function (e) {
        let { games: t, selectedGame: a, onGameSelected: l, onGameSearchQueryChange: s, placeholder: r } = e,
            [o, m] = i.useState(""),
            c = i.useCallback(
                (e) => {
                    (m(e), s?.(e));
                },
                [s],
            ),
            d = i.useMemo(() => {
                let e = [];
                for (let i of (null != a &&
                    e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, n.jsx)(y, { game: a }) }),
                t))
                    (null == a || (a.id !== i.id && a.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, n.jsx)(y, { game: i }) });
                return e;
            }, [t, a]),
            g = i.useMemo(() => d.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [d]),
            [p, h] = i.useState(d),
            x = i.useCallback((e) => {
                h(e);
            }, []),
            v = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return;
                    let a = t.game;
                    (l(a ?? null), c(a?.name ?? ""));
                },
                [g, l, c],
            ),
            b = i.useCallback(
                (e) => {
                    let t = e.target.value;
                    (c(t), null != a && t !== a.name && l(null));
                },
                [a, l, c],
            );
        return (
            (0, E.RT)(o, d, x, M),
            (0, n.jsx)(u.Z, {
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
function L(e) {
    let { onClose: t, transitionState: a, onSubmitted: p, detected: h, defaultStep: k = "issue_selection" } = e,
        [E, y] = i.useState(k),
        [M, D] = i.useState(null),
        [L, O] = i.useState(""),
        [R, Z] = i.useState(null),
        [F, K] = i.useState(""),
        P = i.useMemo(() => (0, v.generateViewId)(), []),
        { results: Q, onSelect: J } = (0, f.J$)(L, { surface: _.K.DETECTION_REPORT, filterGroup: s.m.DEFAULT }),
        V = Q ?? T,
        { extraChromeEnabled: Y } = b.A.useConfig({ location: "game_detection_report" }),
        z = i.useMemo(
            () =>
                V.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(C.A, { game: e, iconClassName: S.Gt }),
                    trailing: Y ? (0, n.jsx)(j.A, { platforms: e.platformAvailability }) : void 0,
                })),
            [V, Y],
        ),
        B = i.useCallback(
            (e) => {
                let t = V.find((t) => {
                    let { id: a } = t;
                    return a === e;
                });
                (null != t && J(t.id), Z(t ?? null), O(t?.name ?? ""));
            },
            [V, J],
        ),
        U = i.useCallback(
            (e) => {
                let t = e.target.value;
                (O(t), null != R && t !== R.name && Z(null));
            },
            [R],
        ),
        X = i.useCallback((e) => e, []),
        q = (function (e) {
            let t = e?.applicationId,
                a = (0, r.bG)([g.A], () => g.A.getApplication(t), [t]),
                { data: n } = (0, A.I)(e?.gameId);
            return null == e
                ? null
                : {
                      name: ("" === e.name ? void 0 : e.name) ?? n?.name ?? a?.name ?? "",
                      icon: n ?? a,
                      analyticsId: e.applicationId ?? e.gameId ?? "",
                  };
        })(h),
        H = null != q;
    function $() {
        ((0, v.trackGameProfileFeedback)({
            viewId: P,
            applicationId: q?.analyticsId ?? "",
            suggestedGameName: "" !== L.trim() ? L.trim() : void 0,
            suggestedGameApplicationId: R?.id ?? null,
            feedback: "" !== F.trim() ? F.trim() : void 0,
            submitted: !0,
        }),
            p?.(R ?? null),
            t());
    }
    let W = (function () {
        switch (E) {
            case "issue_selection":
                return { title: N.intl.string(N.t["6tnjbD"]), actions: [] };
            case "game_search":
                return {
                    title: H ? N.intl.string(N.t.TZgkxY) : N.intl.string(N.t["+ie+wX"]),
                    actions: [
                        { text: N.intl.string(N.t.geKm7t), onClick: $, variant: "primary", disabled: "" === L.trim() },
                    ],
                };
            case "other_feedback":
                return {
                    title: N.intl.string(N.t.tdDpJj),
                    actions: [
                        { text: N.intl.string(N.t.geKm7t), onClick: $, variant: "primary", disabled: "" === F.trim() },
                    ],
                };
            default:
                return { title: "", actions: [] };
        }
    })();
    return (0, n.jsx)(o.a, {
        ...W,
        transitionState: a,
        onClose: t,
        trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (function () {
            switch (E) {
                case "issue_selection":
                    return (0, n.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, n.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(N.t.IQHicr),
                            }),
                            (0, n.jsx)("div", {
                                className: S.R$,
                                children: (0, n.jsx)(c.z, {
                                    value: M ?? void 0,
                                    onChange: (e) => {
                                        (D(e),
                                            I.default.track(G.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: q?.analyticsId ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? y("game_search")
                                                    : y("other_feedback");
                                            }, 100));
                                    },
                                    options: H
                                        ? [
                                              { name: N.intl.string(N.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: N.intl.string(N.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: N.intl.string(N.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: N.intl.string(N.t.tdDpJj), value: "other_feedback" },
                                          ],
                                }),
                            }),
                        ],
                    });
                case "game_search":
                    return (0, n.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, n.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: H ? N.intl.string(N.t["79o/iq"]) : N.intl.string(N.t["r/2pZy"]),
                            }),
                            H &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: S.Gr,
                                            children: [
                                                (0, n.jsx)(x.A, {
                                                    game: q?.icon,
                                                    size: x.M.MEDIUM_LARGE,
                                                    className: S.q_,
                                                }),
                                                (0, n.jsx)(m.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: q?.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(w.A, {}),
                                    ],
                                }),
                            (0, n.jsx)(u.Z, {
                                options: z,
                                selectionMode: "single",
                                value: R?.id,
                                onSelectionChange: B,
                                onQueryChange: U,
                                customMatchSorter: X,
                                clearable: !0,
                                maxOptionsVisible: 5,
                                placeholder: H ? N.intl.string(N.t["/SGi7v"]) : N.intl.string(N.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, n.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, n.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(N.t.IblYEw),
                            }),
                            (0, n.jsx)(d.f, {
                                value: F,
                                onChange: K,
                                placeholder: N.intl.string(N.t.aiPKV4),
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
