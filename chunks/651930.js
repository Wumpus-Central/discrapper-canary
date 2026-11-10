a(321073);
var n = a(477900),
    i = a(582128),
    l = a(613412),
    s = a(651188),
    r = a(855986),
    o = a(189213),
    u = a(890497),
    d = a(834730),
    c = a(771871),
    m = a(103557),
    g = a(587895),
    p = a(429913),
    h = a(644727),
    b = a(769015),
    v = a(409626),
    _ = a(168017),
    x = a(778747),
    f = a(518805),
    A = a(454908),
    C = a(106191),
    j = a(404277),
    k = a(379078),
    y = a(704554),
    E = a(129230),
    w = a(21241),
    I = a(652215),
    N = a(792996),
    S = a(614958);
let G = i.memo(function (e) {
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
        return (0, n.jsx)(b.A, { pid: i?.pid, game: s ?? o, size: b.M.XSMALL, className: S.Gt });
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
                    e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, n.jsx)(G, { game: a }) }),
                t))
                    (null == a || (a.id !== i.id && a.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, n.jsx)(G, { game: i }) });
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
            (0, y.RT)(o, m, b, M),
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
a.d(
    t,
    {},
    {
        default: function (e) {
            let { onClose: t, transitionState: a, onSubmitted: p, detected: h, defaultStep: k = "issue_selection" } = e,
                [y, G] = i.useState(k),
                [M, D] = i.useState(null),
                [L, O] = i.useState(""),
                [R, Z] = i.useState(null),
                [K, F] = i.useState(""),
                Q = i.useMemo(() => (0, v.u9)(), []),
                { results: B, onSelect: J } = (0, f.J)(L, { surface: x.K.DETECTION_REPORT, filterGroup: s.m.DEFAULT }),
                P = B ?? T,
                { extraChromeEnabled: V } = _.A.useConfig({ location: "game_detection_report" }),
                Y = i.useMemo(
                    () =>
                        P.map((e) => ({
                            id: e.id,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(C.A, { game: e, iconClassName: S.Gt, withBackground: V }),
                            trailing: V ? (0, n.jsx)(j.A, { platforms: e.platformAvailability }) : void 0,
                        })),
                    [P, V],
                ),
                z = i.useCallback(
                    (e) => {
                        let t = P.find((t) => {
                            let { id: a } = t;
                            return a === e;
                        });
                        (null != t && J(t.id), Z(t ?? null), O(t?.name ?? ""));
                    },
                    [P, J],
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
            function W() {
                ((0, v.K6)({
                    viewId: Q,
                    applicationId: q?.analyticsId ?? "",
                    suggestedGameName: "" !== L.trim() ? L.trim() : void 0,
                    suggestedGameApplicationId: R?.id ?? null,
                    feedback: "" !== K.trim() ? K.trim() : void 0,
                    submitted: !0,
                }),
                    p?.(R ?? null),
                    t());
            }
            let $ = (function () {
                switch (y) {
                    case "issue_selection":
                        return { title: N.intl.string(N.t["6tnjbD"]), actions: [] };
                    case "game_search":
                        return {
                            title: H ? N.intl.string(N.t.TZgkxY) : N.intl.string(N.t["+ie+wX"]),
                            actions: [
                                {
                                    text: N.intl.string(N.t.geKm7t),
                                    onClick: W,
                                    variant: "primary",
                                    disabled: "" === L.trim(),
                                },
                            ],
                        };
                    case "other_feedback":
                        return {
                            title: N.intl.string(N.t.tdDpJj),
                            actions: [
                                {
                                    text: N.intl.string(N.t.geKm7t),
                                    onClick: W,
                                    variant: "primary",
                                    disabled: "" === K.trim(),
                                },
                            ],
                        };
                    default:
                        return { title: "", actions: [] };
                }
            })();
            return (0, n.jsx)(o.a, {
                ...$,
                transitionState: a,
                onClose: t,
                trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
                children: (function () {
                    switch (y) {
                        case "issue_selection":
                            return (0, n.jsxs)("div", {
                                className: S.Qs,
                                children: [
                                    (0, n.jsx)(d.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: N.intl.string(N.t.IQHicr),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: S.R$,
                                        children: (0, n.jsx)(c.z, {
                                            value: M ?? void 0,
                                            onChange: (e) => {
                                                (D(e),
                                                    E.default.track(I.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
                                                        selected_option: e,
                                                        application_id: q?.analyticsId ?? null,
                                                    }),
                                                    setTimeout(() => {
                                                        "game_not_detected" === e || "wrong_game_shown" === e
                                                            ? G("game_search")
                                                            : G("other_feedback");
                                                    }, 100));
                                            },
                                            options: H
                                                ? [
                                                      { name: N.intl.string(N.t.TZgkxY), value: "wrong_game_shown" },
                                                      { name: N.intl.string(N.t.tdDpJj), value: "other_feedback" },
                                                  ]
                                                : [
                                                      {
                                                          name: N.intl.string(N.t["+ie+wX"]),
                                                          value: "game_not_detected",
                                                      },
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
                                    (0, n.jsx)(d.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: H ? N.intl.string(N.t["79o/iq"]) : N.intl.string(N.t["r/2pZy"]),
                                    }),
                                    H &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: S.Gr,
                                                    children: [
                                                        (0, n.jsx)(b.A, {
                                                            game: q?.icon,
                                                            size: b.M.MEDIUM_LARGE,
                                                            className: S.q_,
                                                            withBackground: V,
                                                        }),
                                                        (0, n.jsx)(d.E, {
                                                            variant: "body-md/semibold",
                                                            color: "text-strong",
                                                            children: q?.name,
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(w.A, {}),
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
                                        placeholder: H ? N.intl.string(N.t["/SGi7v"]) : N.intl.string(N.t.ss9Zwa),
                                    }),
                                ],
                            });
                        case "other_feedback":
                            return (0, n.jsxs)("div", {
                                className: S.Qs,
                                children: [
                                    (0, n.jsx)(d.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: N.intl.string(N.t.IblYEw),
                                    }),
                                    (0, n.jsx)(m.f, {
                                        value: K,
                                        onChange: F,
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
        },
        i: D,
    },
);
