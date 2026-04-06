l.d(t, { A: () => h }), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(397927),
    o = l(71393),
    d = l(287809),
    c = l(661191),
    u = l(792852),
    m = l(985018);
function h(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: i,
            selectedActivity: h,
            selectedGuildId: p,
            selectedYear: x,
            sortOrder: f,
            toggleUserId: g,
            setSelectedActivity: v,
            setSelectedGuildId: j,
            setSelectedYear: b,
            setSortOrder: C,
            clearFilters: y,
        } = (0, u.P)(),
        N = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = d.default.getUser(e);
                        if (null != t) {
                            let a = t.globalName ?? t.username;
                            l.push({ userId: e, name: a });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        A = n.useMemo(
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
        E = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = o.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        k = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(c.default.extractTimestamp(l.id)).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [I, S] = n.useState(""),
        [w, L] = n.useState(""),
        [M, T] = n.useState(""),
        R = n.useMemo(
            () => (0 === I.trim().length ? N : N.filter((e) => s()(I.toLowerCase(), e.name.toLowerCase()))),
            [N, I],
        ),
        D = n.useMemo(
            () => (0 === w.trim().length ? E : E.filter((e) => s()(w.toLowerCase(), e.name.toLowerCase()))),
            [E, w],
        ),
        O = n.useMemo(
            () => (0 === M.trim().length ? A : A.filter((e) => s()(M.toLowerCase(), e.toLowerCase()))),
            [A, M],
        ),
        P = i.size > 0 || null != h || null != p || null != x,
        U = n.useMemo(() => {
            if (0 !== i.size)
                return N.filter((e) => i.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [i, N]),
        G = n.useMemo(() => {
            if (null == p) return;
            let e = E.find((e) => e.guildId === p);
            return e?.name;
        }, [p, E]),
        V = n.useMemo(() => h ?? void 0, [h]),
        H = n.useMemo(() => (null != x ? String(x) : void 0), [x]);
    return (0, a.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": m.intl.string(m.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(r.rXV, {
                label: "Filter",
                children: [
                    N.length > 0 &&
                        (0, a.jsxs)(r.Drp, {
                            id: "participants",
                            label: m.intl.string(m.t.YQ6dJg),
                            subtext: U,
                            children: [
                                N.length > 20 &&
                                    (0, a.jsx)(r.aK1, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(r.VPO, {
                                                ...e,
                                                query: I,
                                                onChange: S,
                                                ref: t,
                                                placeholder: m.intl.string(m.t["5h0QOP"]),
                                            }),
                                    }),
                                R.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        r.sLh,
                                        { id: `participant-${t}`, label: l, action: () => g(t), checked: i.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    E.length > 0 &&
                        (0, a.jsxs)(r.Drp, {
                            id: "servers",
                            label: m.intl.string(m.t["5qyruI"]),
                            subtext: G,
                            children: [
                                E.length > 20 &&
                                    (0, a.jsx)(r.aK1, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(r.VPO, {
                                                ...e,
                                                query: w,
                                                onChange: L,
                                                ref: t,
                                                placeholder: m.intl.string(m.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(r.iDA, {
                                    id: "server-all",
                                    group: "server",
                                    label: m.intl.string(m.t["2/yeUU"]),
                                    action: () => j(null),
                                    checked: null == p,
                                }),
                                D.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        r.iDA,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => j(t),
                                            checked: p === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    A.length > 0 &&
                        (0, a.jsxs)(r.Drp, {
                            id: "activities",
                            label: m.intl.string(m.t.agRtPG),
                            subtext: V,
                            children: [
                                A.length > 20 &&
                                    (0, a.jsx)(r.aK1, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(r.VPO, {
                                                ...e,
                                                query: M,
                                                onChange: T,
                                                ref: t,
                                                placeholder: m.intl.string(m.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(r.iDA, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: m.intl.string(m.t["2/yeUU"]),
                                    action: () => v(null),
                                    checked: null == h,
                                }),
                                O.map((e) =>
                                    (0, a.jsx)(
                                        r.iDA,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => v(e),
                                            checked: h === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    k.length > 0 &&
                        (0, a.jsxs)(r.Drp, {
                            id: "years",
                            label: m.intl.string(m.t.w9zd68),
                            subtext: H,
                            children: [
                                (0, a.jsx)(r.iDA, {
                                    id: "year-all",
                                    group: "year",
                                    label: m.intl.string(m.t["2/yeUU"]),
                                    action: () => b(null),
                                    checked: null == x,
                                }),
                                k.map((e) =>
                                    (0, a.jsx)(
                                        r.iDA,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => b(e),
                                            checked: x === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsxs)(r.rXV, {
                label: m.intl.string(m.t.XvNMNk),
                children: [
                    (0, a.jsx)(r.iDA, {
                        id: "sort-recent",
                        group: "sort",
                        label: m.intl.string(m.t["4LLKx3"]),
                        action: () => C("descending"),
                        checked: "descending" === f,
                    }),
                    (0, a.jsx)(r.iDA, {
                        id: "sort-oldest",
                        group: "sort",
                        label: m.intl.string(m.t["0gitSE"]),
                        action: () => C("ascending"),
                        checked: "ascending" === f,
                    }),
                ],
            }),
            P &&
                (0, a.jsx)(r.rXV, {
                    children: (0, a.jsx)(r.Drp, { id: "clear-filters", label: m.intl.string(m.t.FbDgiu), action: y }),
                }),
        ],
    });
}
