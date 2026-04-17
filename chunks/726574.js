l.d(t, { A: () => m }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(397927),
    d = l(71393),
    o = l(287809),
    c = l(792852),
    u = l(985018);
function m(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: i,
            selectedActivity: m,
            selectedGuildId: h,
            selectedYear: p,
            sortOrder: x,
            toggleUserId: g,
            setSelectedActivity: f,
            setSelectedGuildId: v,
            setSelectedYear: j,
            setSortOrder: b,
            clearFilters: C,
        } = (0, c.P)(),
        y = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = o.default.getUser(e);
                        if (null != t) {
                            let n = t.globalName ?? t.username;
                            l.push({ userId: e, name: n });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        A = a.useMemo(
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
        N = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = d.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        E = a.useMemo(
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
        [k, I] = a.useState(""),
        [S, w] = a.useState(""),
        [L, M] = a.useState(""),
        T = a.useMemo(
            () => (0 === k.trim().length ? y : y.filter((e) => s()(k.toLowerCase(), e.name.toLowerCase()))),
            [y, k],
        ),
        R = a.useMemo(
            () => (0 === S.trim().length ? N : N.filter((e) => s()(S.toLowerCase(), e.name.toLowerCase()))),
            [N, S],
        ),
        D = a.useMemo(
            () => (0 === L.trim().length ? A : A.filter((e) => s()(L.toLowerCase(), e.toLowerCase()))),
            [A, L],
        ),
        O = i.size > 0 || null != m || null != h || null != p,
        P = a.useMemo(() => {
            if (0 !== i.size)
                return y
                    .filter((e) => i.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [i, y]),
        U = a.useMemo(() => {
            if (null == h) return;
            let e = N.find((e) => e.guildId === h);
            return e?.name;
        }, [h, N]),
        G = a.useMemo(() => m ?? void 0, [m]),
        V = a.useMemo(() => (null != p ? String(p) : void 0), [p]);
    return (0, n.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": u.intl.string(u.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, n.jsxs)(r.rXV, {
                label: "Filter",
                children: [
                    y.length > 0 &&
                        (0, n.jsxs)(r.Drp, {
                            id: "participants",
                            label: u.intl.string(u.t.YQ6dJg),
                            subtext: P,
                            children: [
                                y.length > 20 &&
                                    (0, n.jsx)(r.aK1, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(r.VPO, {
                                                ...e,
                                                query: k,
                                                onChange: I,
                                                ref: t,
                                                placeholder: u.intl.string(u.t["5h0QOP"]),
                                            }),
                                    }),
                                T.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, n.jsx)(
                                        r.sLh,
                                        { id: `participant-${t}`, label: l, action: () => g(t), checked: i.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    N.length > 0 &&
                        (0, n.jsxs)(r.Drp, {
                            id: "servers",
                            label: u.intl.string(u.t["5qyruI"]),
                            subtext: U,
                            children: [
                                N.length > 20 &&
                                    (0, n.jsx)(r.aK1, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(r.VPO, {
                                                ...e,
                                                query: S,
                                                onChange: w,
                                                ref: t,
                                                placeholder: u.intl.string(u.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, n.jsx)(r.iDA, {
                                    id: "server-all",
                                    group: "server",
                                    label: u.intl.string(u.t["2/yeUU"]),
                                    action: () => v(null),
                                    checked: null == h,
                                }),
                                R.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, n.jsx)(
                                        r.iDA,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => v(t),
                                            checked: h === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    A.length > 0 &&
                        (0, n.jsxs)(r.Drp, {
                            id: "activities",
                            label: u.intl.string(u.t.agRtPG),
                            subtext: G,
                            children: [
                                A.length > 20 &&
                                    (0, n.jsx)(r.aK1, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(r.VPO, {
                                                ...e,
                                                query: L,
                                                onChange: M,
                                                ref: t,
                                                placeholder: u.intl.string(u.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, n.jsx)(r.iDA, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: u.intl.string(u.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == m,
                                }),
                                D.map((e) =>
                                    (0, n.jsx)(
                                        r.iDA,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => f(e),
                                            checked: m === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    E.length > 0 &&
                        (0, n.jsxs)(r.Drp, {
                            id: "years",
                            label: u.intl.string(u.t.w9zd68),
                            subtext: V,
                            children: [
                                (0, n.jsx)(r.iDA, {
                                    id: "year-all",
                                    group: "year",
                                    label: u.intl.string(u.t["2/yeUU"]),
                                    action: () => j(null),
                                    checked: null == p,
                                }),
                                E.map((e) =>
                                    (0, n.jsx)(
                                        r.iDA,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => j(e),
                                            checked: p === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, n.jsxs)(r.rXV, {
                label: u.intl.string(u.t.XvNMNk),
                children: [
                    (0, n.jsx)(r.iDA, {
                        id: "sort-recent",
                        group: "sort",
                        label: u.intl.string(u.t["4LLKx3"]),
                        action: () => b("descending"),
                        checked: "descending" === x,
                    }),
                    (0, n.jsx)(r.iDA, {
                        id: "sort-oldest",
                        group: "sort",
                        label: u.intl.string(u.t["0gitSE"]),
                        action: () => b("ascending"),
                        checked: "ascending" === x,
                    }),
                ],
            }),
            O &&
                (0, n.jsx)(r.rXV, {
                    children: (0, n.jsx)(r.Drp, { id: "clear-filters", label: u.intl.string(u.t.FbDgiu), action: C }),
                }),
        ],
    });
}
