(a.d(t, { default: () => L, i: () => D }), a(321073));
var n = a(477900),
    i = a(582128),
    l = a(131937),
    s = a(651188),
    r = a(17928),
    o = a(189213),
    u = a(890497),
    d = a(834730),
    c = a(144228),
    m = a(103557),
    g = a(587895),
    p = a(429913),
    h = a(952818),
    b = a(769015),
    v = a(409626),
    _ = a(168017),
    f = a(778747),
    x = a(471677),
    A = a(454908),
    C = a(106191),
    k = a(404277),
    j = a(379078),
    w = a(704554),
    y = a(174459),
    E = a(21241),
    I = a(652215),
    G = a(105292),
    N = a(614958);
let S = i.memo(function (e) {
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
        return (0, n.jsx)(b.A, { pid: i?.pid, game: s ?? o, size: b.M.XSMALL, className: N.Gt });
    }),
    M = {
        searchType: j.n.FUZZY,
        sortType: j.r.JARO_WINKLER,
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
            [o, d] = i.useState(""),
            c = i.useCallback(
                (e) => {
                    (d(e), s?.(e));
                },
                [s],
            ),
            m = i.useMemo(() => {
                let e = [];
                for (let i of (null != a &&
                    e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, n.jsx)(S, { game: a }) }),
                t))
                    (null == a || (a.id !== i.id && a.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, n.jsx)(S, { game: i }) });
                return e;
            }, [t, a]),
            g = i.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [p, h] = i.useState(m),
            b = i.useCallback((e) => {
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
            _ = i.useCallback(
                (e) => {
                    let t = e.target.value;
                    (c(t), null != a && t !== a.name && l(null));
                },
                [a, l, c],
            );
        return (
            (0, w.RT)(o, m, b, M),
            (0, n.jsx)(u.Z, {
                options: p,
                selectionMode: "single",
                value: a?.id ?? void 0,
                onSelectionChange: v,
                onQueryChange: _,
                placeholder: r,
                clearable: !0,
                maxOptionsVisible: 5,
            })
        );
    });
function L(e) {
    let { onClose: t, transitionState: a, onSubmitted: p, detected: h, defaultStep: j = "issue_selection" } = e,
        [w, S] = i.useState(j),
        [M, D] = i.useState(null),
        [L, O] = i.useState(""),
        [R, Z] = i.useState(null),
        [F, K] = i.useState(""),
        P = i.useMemo(() => (0, v.generateViewId)(), []),
        { results: Q, onSelect: B } = (0, x.J$)(L, { surface: f.K.DETECTION_REPORT, filterGroup: s.m.DEFAULT }),
        J = Q ?? T,
        { extraChromeEnabled: V } = _.A.useConfig({ location: "game_detection_report" }),
        Y = i.useMemo(
            () =>
                J.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(C.A, { game: e, iconClassName: N.Gt, withBackground: V }),
                    trailing: V ? (0, n.jsx)(k.A, { platforms: e.platformAvailability }) : void 0,
                })),
            [J, V],
        ),
        z = i.useCallback(
            (e) => {
                let t = J.find((t) => {
                    let { id: a } = t;
                    return a === e;
                });
                (null != t && B(t.id), Z(t ?? null), O(t?.name ?? ""));
            },
            [J, B],
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
        switch (w) {
            case "issue_selection":
                return { title: G.intl.string(G.t["6tnjbD"]), actions: [] };
            case "game_search":
                return {
                    title: H ? G.intl.string(G.t.TZgkxY) : G.intl.string(G.t["+ie+wX"]),
                    actions: [
                        { text: G.intl.string(G.t.geKm7t), onClick: $, variant: "primary", disabled: "" === L.trim() },
                    ],
                };
            case "other_feedback":
                return {
                    title: G.intl.string(G.t.tdDpJj),
                    actions: [
                        { text: G.intl.string(G.t.geKm7t), onClick: $, variant: "primary", disabled: "" === F.trim() },
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
            switch (w) {
                case "issue_selection":
                    return (0, n.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, n.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: G.intl.string(G.t.IQHicr),
                            }),
                            (0, n.jsx)("div", {
                                className: N.R$,
                                children: (0, n.jsx)(c.z, {
                                    value: M ?? void 0,
                                    onChange: (e) => {
                                        (D(e),
                                            y.default.track(I.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                selected_option: e,
                                                application_id: q?.analyticsId ?? null,
                                            }),
                                            setTimeout(() => {
                                                "game_not_detected" === e || "wrong_game_shown" === e
                                                    ? S("game_search")
                                                    : S("other_feedback");
                                            }, 100));
                                    },
                                    options: H
                                        ? [
                                              { name: G.intl.string(G.t.TZgkxY), value: "wrong_game_shown" },
                                              { name: G.intl.string(G.t.tdDpJj), value: "other_feedback" },
                                          ]
                                        : [
                                              { name: G.intl.string(G.t["+ie+wX"]), value: "game_not_detected" },
                                              { name: G.intl.string(G.t.tdDpJj), value: "other_feedback" },
                                          ],
                                }),
                            }),
                        ],
                    });
                case "game_search":
                    return (0, n.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, n.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: H ? G.intl.string(G.t["79o/iq"]) : G.intl.string(G.t["r/2pZy"]),
                            }),
                            H &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: N.Gr,
                                            children: [
                                                (0, n.jsx)(b.A, {
                                                    game: q?.icon,
                                                    size: b.M.MEDIUM_LARGE,
                                                    className: N.q_,
                                                    withBackground: V,
                                                }),
                                                (0, n.jsx)(d.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-strong",
                                                    children: q?.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(E.A, {}),
                                    ],
                                }),
                            (0, n.jsx)(u.Z, {
                                options: Y,
                                selectionMode: "single",
                                value: R?.id,
                                onSelectionChange: z,
                                onQueryChange: U,
                                customMatchSorter: X,
                                clearable: !0,
                                maxOptionsVisible: 5,
                                placeholder: H ? G.intl.string(G.t["/SGi7v"]) : G.intl.string(G.t.ss9Zwa),
                            }),
                        ],
                    });
                case "other_feedback":
                    return (0, n.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, n.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: G.intl.string(G.t.IblYEw),
                            }),
                            (0, n.jsx)(m.f, {
                                value: F,
                                onChange: K,
                                placeholder: G.intl.string(G.t.aiPKV4),
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
