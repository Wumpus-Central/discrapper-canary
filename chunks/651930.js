(a.d(t, { default: () => D, i: () => T }), a(321073));
var n = a(477900),
    i = a(582128),
    l = a(562708),
    s = a(17928),
    r = a(189213),
    o = a(890497),
    u = a(834730),
    c = a(144228),
    d = a(103557),
    m = a(587895),
    g = a(429913),
    p = a(952818),
    h = a(769015),
    x = a(409626),
    v = a(168017),
    b = a(778747),
    _ = a(471677),
    f = a(569926),
    A = a(106191),
    C = a(404277),
    j = a(379078),
    k = a(704554),
    I = a(174459),
    E = a(21241),
    w = a(652215),
    N = a(375708),
    S = a(614958);
let y = i.memo(function (e) {
        let { game: t } = e,
            a = (0, s.bG)([m.A], () => m.A.getApplicationByName(t.name) ?? m.A.getApplication(t.id), [t.id, t.name]),
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
                        let e = m.A.getApplicationByName(t.name);
                        if (null != e) return e.id;
                    }
                    if (null != i) return i.id;
                })(),
            ]),
            r = l ?? a,
            { data: o } = (0, f.I)(null == r ? t.id : void 0);
        return (0, n.jsx)(h.A, { pid: i?.pid, game: r ?? o, size: h.M.XSMALL, className: S.Gt });
    }),
    G = {
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
    M = [],
    T = i.memo(function (e) {
        let { games: t, selectedGame: a, onGameSelected: l, onGameSearchQueryChange: s, placeholder: r } = e,
            [u, c] = i.useState(""),
            d = i.useCallback(
                (e) => {
                    (c(e), s?.(e));
                },
                [s],
            ),
            m = i.useMemo(() => {
                let e = [];
                for (let i of (null != a &&
                    e.push({ id: a.id, value: a.id, label: a.name, game: a, leading: (0, n.jsx)(y, { game: a }) }),
                t))
                    (null == a || (a.id !== i.id && a.name.toLowerCase() !== i.name.toLowerCase())) &&
                        e.push({ id: i.id, value: i.id, label: i.name, game: i, leading: (0, n.jsx)(y, { game: i }) });
                return e;
            }, [t, a]),
            g = i.useMemo(() => m.reduce((e, t) => (null != e[t.value] || (e[t.value] = t), e), {}), [m]),
            [p, h] = i.useState(m),
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
            (0, k.RT)(u, m, x, G),
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
function D(e) {
    let { onClose: t, transitionState: a, onSubmitted: g, detected: p, defaultStep: j = "issue_selection" } = e,
        [k, y] = i.useState(j),
        [G, T] = i.useState(null),
        [D, L] = i.useState(""),
        [O, R] = i.useState(null),
        [Z, F] = i.useState(""),
        K = i.useMemo(() => (0, x.generateViewId)(), []),
        { results: P, onSelect: Q } = (0, _.J$)(D, { surface: b.K.DETECTION_REPORT }),
        J = P ?? M,
        { extraChromeEnabled: V } = v.A.useConfig({ location: "game_detection_report" }),
        Y = i.useMemo(
            () =>
                J.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(A.A, { game: e, iconClassName: S.Gt }),
                    trailing: V ? (0, n.jsx)(C.A, { platforms: e.platformAvailability }) : void 0,
                })),
            [J, V],
        ),
        z = i.useCallback(
            (e) => {
                let t = J.find((t) => {
                    let { id: a } = t;
                    return a === e;
                });
                (null != t && Q(t.id), R(t ?? null), L(t?.name ?? ""));
            },
            [J, Q],
        ),
        B = i.useCallback(
            (e) => {
                let t = e.target.value;
                (L(t), null != O && t !== O.name && R(null));
            },
            [O],
        ),
        X = i.useCallback((e) => e, []),
        q = (function (e) {
            let t = e?.applicationId,
                a = (0, s.bG)([m.A], () => m.A.getApplication(t), [t]),
                { data: n } = (0, f.I)(e?.gameId);
            return null == e
                ? null
                : {
                      name: ("" === e.name ? void 0 : e.name) ?? n?.name ?? a?.name ?? "",
                      icon: n ?? a,
                      analyticsId: e.applicationId ?? e.gameId ?? "",
                  };
        })(p),
        H = null != q;
    function U() {
        ((0, x.trackGameProfileFeedback)({
            viewId: K,
            applicationId: q?.analyticsId ?? "",
            suggestedGameName: "" !== D.trim() ? D.trim() : void 0,
            suggestedGameApplicationId: O?.id ?? null,
            feedback: "" !== Z.trim() ? Z.trim() : void 0,
            submitted: !0,
        }),
            g?.(O ?? null),
            t());
    }
    let $ = (function () {
        switch (k) {
            case "issue_selection":
                return { title: N.intl.string(N.t["6tnjbD"]), actions: [] };
            case "game_search":
                return {
                    title: H ? N.intl.string(N.t.TZgkxY) : N.intl.string(N.t["+ie+wX"]),
                    actions: [
                        { text: N.intl.string(N.t.geKm7t), onClick: U, variant: "primary", disabled: "" === D.trim() },
                    ],
                };
            case "other_feedback":
                return {
                    title: N.intl.string(N.t.tdDpJj),
                    actions: [
                        { text: N.intl.string(N.t.geKm7t), onClick: U, variant: "primary", disabled: "" === Z.trim() },
                    ],
                };
            default:
                return { title: "", actions: [] };
        }
    })();
    return (0, n.jsx)(r.a, {
        ...$,
        transitionState: a,
        onClose: t,
        trackingProps: { impression: { impressionName: l.ImpressionNames.GAME_DETECTION_REPORT_MODAL } },
        children: (function () {
            switch (k) {
                case "issue_selection":
                    return (0, n.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(N.t.IQHicr),
                            }),
                            (0, n.jsx)("div", {
                                className: S.R$,
                                children: (0, n.jsx)(c.z, {
                                    value: G ?? void 0,
                                    onChange: (e) => {
                                        (T(e),
                                            I.default.track(w.HAw.GAME_DETECTION_FEEDBACK_MODAL, {
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
                            (0, n.jsx)(u.E, {
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
                                                (0, n.jsx)(h.A, {
                                                    game: q?.icon,
                                                    size: h.M.MEDIUM_LARGE,
                                                    className: S.q_,
                                                }),
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    children: q?.name,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(E.A, {}),
                                    ],
                                }),
                            (0, n.jsx)(o.Z, {
                                options: Y,
                                selectionMode: "single",
                                value: O?.id,
                                onSelectionChange: z,
                                onQueryChange: B,
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
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(N.t.IblYEw),
                            }),
                            (0, n.jsx)(d.f, {
                                value: Z,
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
}
