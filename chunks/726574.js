l.d(t, { A: () => p }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(861672),
    d = l(477782),
    o = l(583650),
    c = l(71393),
    u = l(287809),
    m = l(792852),
    h = l(985018);
function p(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: i,
            selectedActivity: p,
            selectedGuildId: f,
            selectedYear: v,
            sortOrder: g,
            toggleUserId: x,
            setSelectedActivity: j,
            setSelectedGuildId: b,
            setSelectedYear: C,
            setSortOrder: y,
            clearFilters: A,
        } = (0, m.P)(),
        N = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = u.default.getUser(e);
                        if (null != t) {
                            let n = t.globalName ?? t.username;
                            l.push({ userId: e, name: n });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        E = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e)
                        l.activity?.state != null && t.add(l.activity.state),
                            l.activity?.details != null && t.add(l.activity.details);
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(l),
            [l],
        ),
        w = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = c.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        k = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(l.createdAt).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [I, S] = a.useState(""),
        [L, M] = a.useState(""),
        [R, T] = a.useState(""),
        D = a.useMemo(
            () => (0 === I.trim().length ? N : N.filter((e) => s()(I.toLowerCase(), e.name.toLowerCase()))),
            [N, I],
        ),
        O = a.useMemo(
            () => (0 === L.trim().length ? w : w.filter((e) => s()(L.toLowerCase(), e.name.toLowerCase()))),
            [w, L],
        ),
        P = a.useMemo(
            () => (0 === R.trim().length ? E : E.filter((e) => s()(R.toLowerCase(), e.toLowerCase()))),
            [E, R],
        ),
        U = i.size > 0 || null != p || null != f || null != v,
        G = a.useMemo(() => {
            if (0 !== i.size)
                return N.filter((e) => i.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [i, N]),
        z = a.useMemo(() => {
            if (null == f) return;
            let e = w.find((e) => e.guildId === f);
            return e?.name;
        }, [f, w]),
        V = a.useMemo(() => p ?? void 0, [p]),
        _ = a.useMemo(() => (null != v ? String(v) : void 0), [v]);
    return (0, n.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": h.intl.string(h.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, n.jsxs)(d.rX, {
                label: "Filter",
                children: [
                    N.length > 0 &&
                        (0, n.jsxs)(d.Dr, {
                            id: "participants",
                            label: h.intl.string(h.t.YQ6dJg),
                            subtext: G,
                            children: [
                                N.length > 20 &&
                                    (0, n.jsx)(d.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(o.V, {
                                                ...e,
                                                query: I,
                                                onChange: S,
                                                ref: t,
                                                placeholder: h.intl.string(h.t["5h0QOP"]),
                                            }),
                                    }),
                                D.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, n.jsx)(
                                        d.sL,
                                        { id: `participant-${t}`, label: l, action: () => x(t), checked: i.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    w.length > 0 &&
                        (0, n.jsxs)(d.Dr, {
                            id: "servers",
                            label: h.intl.string(h.t["5qyruI"]),
                            subtext: z,
                            children: [
                                w.length > 20 &&
                                    (0, n.jsx)(d.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(o.V, {
                                                ...e,
                                                query: L,
                                                onChange: M,
                                                ref: t,
                                                placeholder: h.intl.string(h.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, n.jsx)(d.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => b(null),
                                    checked: null == f,
                                }),
                                O.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, n.jsx)(
                                        d.iD,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => b(t),
                                            checked: f === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    E.length > 0 &&
                        (0, n.jsxs)(d.Dr, {
                            id: "activities",
                            label: h.intl.string(h.t.agRtPG),
                            subtext: V,
                            children: [
                                E.length > 20 &&
                                    (0, n.jsx)(d.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(o.V, {
                                                ...e,
                                                query: R,
                                                onChange: T,
                                                ref: t,
                                                placeholder: h.intl.string(h.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, n.jsx)(d.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => j(null),
                                    checked: null == p,
                                }),
                                P.map((e) =>
                                    (0, n.jsx)(
                                        d.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => j(e),
                                            checked: p === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    k.length > 0 &&
                        (0, n.jsxs)(d.Dr, {
                            id: "years",
                            label: h.intl.string(h.t.w9zd68),
                            subtext: _,
                            children: [
                                (0, n.jsx)(d.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => C(null),
                                    checked: null == v,
                                }),
                                k.map((e) =>
                                    (0, n.jsx)(
                                        d.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => C(e),
                                            checked: v === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, n.jsxs)(d.rX, {
                label: h.intl.string(h.t.XvNMNk),
                children: [
                    (0, n.jsx)(d.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: h.intl.string(h.t["4LLKx3"]),
                        action: () => y("descending"),
                        checked: "descending" === g,
                    }),
                    (0, n.jsx)(d.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: h.intl.string(h.t["0gitSE"]),
                        action: () => y("ascending"),
                        checked: "ascending" === g,
                    }),
                ],
            }),
            U &&
                (0, n.jsx)(d.rX, {
                    children: (0, n.jsx)(d.Dr, { id: "clear-filters", label: h.intl.string(h.t.FbDgiu), action: A }),
                }),
        ],
    });
}
