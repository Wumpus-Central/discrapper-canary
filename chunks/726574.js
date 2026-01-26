r.d(t, {
    default: () => b,
}),
    r(896048),
    r(321073),
    r(638769),
    r(733351);
var l = r(627968),
    n = r(64700),
    i = r(91871),
    a = r.n(i),
    o = r(397927),
    s = r(442433),
    c = r(71393),
    u = r(287809),
    d = r(661191),
    g = r(792852),
    p = r(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, l);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}

function b(e) {
    let { onSelect: t, allClips: r } = e,
        {
            selectedUserIds: i,
            selectedActivity: b,
            selectedGuildId: m,
            selectedYear: y,
            sortOrder: j,
            toggleUserId: v,
            setSelectedActivity: x,
            setSelectedGuildId: O,
            setSelectedYear: w,
            setSortOrder: D,
            clearFilters: C,
        } = (0, g.P)(),
        P = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let r of e) r.users.forEach((e) => t.add(e));
                    let r = [];
                    for (let e of t) {
                        let t = u.default.getUser(e);
                        if (null != t) {
                            var l;
                            let n = null != (l = t.globalName) ? l : t.username;
                            r.push({
                                userId: e,
                                name: n,
                            });
                        }
                    }
                    return r.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), r;
                })(r),
            [r],
        ),
        k = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let n of e) {
                        var r, l;
                        (null == (r = n.activity) ? void 0 : r.state) != null && t.add(n.activity.state),
                            (null == (l = n.activity) ? void 0 : l.details) != null && t.add(n.activity.details);
                    }
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(r),
            [r],
        ),
        S = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let r of e) null != r.guildId && t.add(r.guildId);
                    let r = [];
                    for (let e of t) {
                        let t = c.A.getGuild(e);
                        null != t &&
                            r.push({
                                guildId: e,
                                name: t.name,
                            });
                    }
                    return r.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), r;
                })(r),
            [r],
        ),
        L = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let r of e) {
                        let e = new Date(d.default.extractTimestamp(r.id)).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(r),
            [r],
        ),
        [M, A] = n.useState(""),
        [U, I] = n.useState(""),
        [V, X] = n.useState(""),
        q = n.useMemo(
            () => (0 === M.trim().length ? P : P.filter((e) => a()(M.toLowerCase(), e.name.toLowerCase()))),
            [P, M],
        ),
        E = n.useMemo(
            () => (0 === U.trim().length ? S : S.filter((e) => a()(U.toLowerCase(), e.name.toLowerCase()))),
            [S, U],
        ),
        K = n.useMemo(
            () => (0 === V.trim().length ? k : k.filter((e) => a()(V.toLowerCase(), e.toLowerCase()))),
            [k, V],
        ),
        Q = i.size > 0 || null != b || null != m || null != y,
        z = n.useMemo(() => {
            if (0 !== i.size)
                return P.filter((e) => i.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [i, P]),
        F = n.useMemo(() => {
            if (null == m) return;
            let e = S.find((e) => e.guildId === m);
            return null == e ? void 0 : e.name;
        }, [m, S]),
        N = n.useMemo(() => (null != b ? b : void 0), [b]),
        _ = n.useMemo(() => (null != y ? String(y) : void 0), [y]);
    return (0, l.jsxs)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": p.intl.string(p.t.X7yRDm),
        onClose: s.Z_,
        variant: "fixed",
        onSelect: t,
        children: [
            (0, l.jsxs)(o.rXV, {
                label: "Filter",
                children: [
                    P.length > 0 &&
                        (0, l.jsxs)(o.Drp, {
                            id: "participants",
                            label: p.intl.string(p.t.YQ6dJg),
                            subtext: z,
                            children: [
                                P.length > 20 &&
                                    (0, l.jsx)(o.aK1, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, l.jsx)(
                                                o.VPO,
                                                h(f({}, e), {
                                                    query: M,
                                                    onChange: A,
                                                    ref: t,
                                                    placeholder: p.intl.string(p.t["5h0QOP"]),
                                                }),
                                            ),
                                    }),
                                q.map((e) => {
                                    let { userId: t, name: r } = e;
                                    return (0, l.jsx)(
                                        o.sLh,
                                        {
                                            id: "participant-".concat(t),
                                            label: r,
                                            action: () => v(t),
                                            checked: i.has(t),
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    S.length > 0 &&
                        (0, l.jsxs)(o.Drp, {
                            id: "servers",
                            label: p.intl.string(p.t["5qyruI"]),
                            subtext: F,
                            children: [
                                S.length > 20 &&
                                    (0, l.jsx)(o.aK1, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, l.jsx)(
                                                o.VPO,
                                                h(f({}, e), {
                                                    query: U,
                                                    onChange: I,
                                                    ref: t,
                                                    placeholder: p.intl.string(p.t["5h0QOP"]),
                                                }),
                                            ),
                                    }),
                                (0, l.jsx)(o.iDA, {
                                    id: "server-all",
                                    group: "server",
                                    label: p.intl.string(p.t["2/yeUU"]),
                                    action: () => O(null),
                                    checked: null == m,
                                }),
                                E.map((e) => {
                                    let { guildId: t, name: r } = e;
                                    return (0, l.jsx)(
                                        o.iDA,
                                        {
                                            id: "server-".concat(t),
                                            group: "server",
                                            label: r,
                                            action: () => O(t),
                                            checked: m === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    k.length > 0 &&
                        (0, l.jsxs)(o.Drp, {
                            id: "activities",
                            label: p.intl.string(p.t.agRtPG),
                            subtext: N,
                            children: [
                                k.length > 20 &&
                                    (0, l.jsx)(o.aK1, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, l.jsx)(
                                                o.VPO,
                                                h(f({}, e), {
                                                    query: V,
                                                    onChange: X,
                                                    ref: t,
                                                    placeholder: p.intl.string(p.t["5h0QOP"]),
                                                }),
                                            ),
                                    }),
                                (0, l.jsx)(o.iDA, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: p.intl.string(p.t["2/yeUU"]),
                                    action: () => x(null),
                                    checked: null == b,
                                }),
                                K.map((e) =>
                                    (0, l.jsx)(
                                        o.iDA,
                                        {
                                            id: "activity-".concat(e),
                                            group: "activity",
                                            label: e,
                                            action: () => x(e),
                                            checked: b === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    L.length > 0 &&
                        (0, l.jsxs)(o.Drp, {
                            id: "years",
                            label: p.intl.string(p.t.w9zd68),
                            subtext: _,
                            children: [
                                (0, l.jsx)(o.iDA, {
                                    id: "year-all",
                                    group: "year",
                                    label: p.intl.string(p.t["2/yeUU"]),
                                    action: () => w(null),
                                    checked: null == y,
                                }),
                                L.map((e) =>
                                    (0, l.jsx)(
                                        o.iDA,
                                        {
                                            id: "year-".concat(e),
                                            group: "year",
                                            label: String(e),
                                            action: () => w(e),
                                            checked: y === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(o.rXV, {
                label: p.intl.string(p.t.XvNMNk),
                children: [
                    (0, l.jsx)(o.iDA, {
                        id: "sort-recent",
                        group: "sort",
                        label: p.intl.string(p.t["4LLKx3"]),
                        action: () => D("descending"),
                        checked: "descending" === j,
                    }),
                    (0, l.jsx)(o.iDA, {
                        id: "sort-oldest",
                        group: "sort",
                        label: p.intl.string(p.t["0gitSE"]),
                        action: () => D("ascending"),
                        checked: "ascending" === j,
                    }),
                ],
            }),
            Q &&
                (0, l.jsx)(o.rXV, {
                    children: (0, l.jsx)(o.Drp, {
                        id: "clear-filters",
                        label: p.intl.string(p.t.FbDgiu),
                        action: C,
                    }),
                }),
        ],
    });
}
