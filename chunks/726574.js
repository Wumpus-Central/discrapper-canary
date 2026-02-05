l.d(t, { default: () => m }), l(321073);
var r = l(627968),
    i = l(64700),
    n = l(91871),
    a = l.n(n),
    s = l(397927),
    o = l(442433),
    c = l(71393),
    d = l(287809),
    u = l(661191),
    g = l(792852),
    h = l(985018);
function m(e) {
    let { onSelect: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: m,
            selectedGuildId: p,
            selectedYear: f,
            sortOrder: x,
            toggleUserId: b,
            setSelectedActivity: j,
            setSelectedGuildId: y,
            setSelectedYear: v,
            setSortOrder: C,
            clearFilters: w,
        } = (0, g.P)(),
        D = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = d.default.getUser(e);
                        if (null != t) {
                            let r = t.globalName ?? t.username;
                            l.push({ userId: e, name: r });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        k = i.useMemo(
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
        L = i.useMemo(
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
        M = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(u.default.extractTimestamp(l.id)).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [A, S] = i.useState(""),
        [P, U] = i.useState(""),
        [I, O] = i.useState(""),
        V = i.useMemo(
            () => (0 === A.trim().length ? D : D.filter((e) => a()(A.toLowerCase(), e.name.toLowerCase()))),
            [D, A],
        ),
        X = i.useMemo(
            () => (0 === P.trim().length ? L : L.filter((e) => a()(P.toLowerCase(), e.name.toLowerCase()))),
            [L, P],
        ),
        q = i.useMemo(
            () => (0 === I.trim().length ? k : k.filter((e) => a()(I.toLowerCase(), e.toLowerCase()))),
            [k, I],
        ),
        K = n.size > 0 || null != m || null != p || null != f,
        Q = i.useMemo(() => {
            if (0 !== n.size)
                return D.filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, D]),
        $ = i.useMemo(() => {
            if (null == p) return;
            let e = L.find((e) => e.guildId === p);
            return e?.name;
        }, [p, L]),
        z = i.useMemo(() => m ?? void 0, [m]),
        F = i.useMemo(() => (null != f ? String(f) : void 0), [f]);
    return (0, r.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": h.intl.string(h.t.X7yRDm),
        onClose: o.Z_,
        variant: "fixed",
        onSelect: t,
        children: [
            (0, r.jsxs)(s.rXV, {
                label: "Filter",
                children: [
                    D.length > 0 &&
                        (0, r.jsxs)(s.Drp, {
                            id: "participants",
                            label: h.intl.string(h.t.YQ6dJg),
                            subtext: Q,
                            children: [
                                D.length > 20 &&
                                    (0, r.jsx)(s.aK1, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, r.jsx)(s.VPO, {
                                                ...e,
                                                query: A,
                                                onChange: S,
                                                ref: t,
                                                placeholder: h.intl.string(h.t["5h0QOP"]),
                                            }),
                                    }),
                                V.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, r.jsx)(
                                        s.sLh,
                                        { id: `participant-${t}`, label: l, action: () => b(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    L.length > 0 &&
                        (0, r.jsxs)(s.Drp, {
                            id: "servers",
                            label: h.intl.string(h.t["5qyruI"]),
                            subtext: $,
                            children: [
                                L.length > 20 &&
                                    (0, r.jsx)(s.aK1, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, r.jsx)(s.VPO, {
                                                ...e,
                                                query: P,
                                                onChange: U,
                                                ref: t,
                                                placeholder: h.intl.string(h.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, r.jsx)(s.iDA, {
                                    id: "server-all",
                                    group: "server",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => y(null),
                                    checked: null == p,
                                }),
                                X.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, r.jsx)(
                                        s.iDA,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => y(t),
                                            checked: p === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    k.length > 0 &&
                        (0, r.jsxs)(s.Drp, {
                            id: "activities",
                            label: h.intl.string(h.t.agRtPG),
                            subtext: z,
                            children: [
                                k.length > 20 &&
                                    (0, r.jsx)(s.aK1, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, r.jsx)(s.VPO, {
                                                ...e,
                                                query: I,
                                                onChange: O,
                                                ref: t,
                                                placeholder: h.intl.string(h.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, r.jsx)(s.iDA, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => j(null),
                                    checked: null == m,
                                }),
                                q.map((e) =>
                                    (0, r.jsx)(
                                        s.iDA,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => j(e),
                                            checked: m === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    M.length > 0 &&
                        (0, r.jsxs)(s.Drp, {
                            id: "years",
                            label: h.intl.string(h.t.w9zd68),
                            subtext: F,
                            children: [
                                (0, r.jsx)(s.iDA, {
                                    id: "year-all",
                                    group: "year",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => v(null),
                                    checked: null == f,
                                }),
                                M.map((e) =>
                                    (0, r.jsx)(
                                        s.iDA,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => v(e),
                                            checked: f === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.rXV, {
                label: h.intl.string(h.t.XvNMNk),
                children: [
                    (0, r.jsx)(s.iDA, {
                        id: "sort-recent",
                        group: "sort",
                        label: h.intl.string(h.t["4LLKx3"]),
                        action: () => C("descending"),
                        checked: "descending" === x,
                    }),
                    (0, r.jsx)(s.iDA, {
                        id: "sort-oldest",
                        group: "sort",
                        label: h.intl.string(h.t["0gitSE"]),
                        action: () => C("ascending"),
                        checked: "ascending" === x,
                    }),
                ],
            }),
            K &&
                (0, r.jsx)(s.rXV, {
                    children: (0, r.jsx)(s.Drp, { id: "clear-filters", label: h.intl.string(h.t.FbDgiu), action: w }),
                }),
        ],
    });
}
