r.d(t, { default: () => b }), r(388685), r(539854), r(642613), r(781311);
var n = r(54381),
    l = r(473749),
    i = r(658722),
    a = r.n(i),
    s = r(481060),
    o = r(239091),
    c = r(430824),
    u = r(594174),
    d = r(709054),
    g = r(52436),
    h = r(388032);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
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
            setSelectedGuildId: k,
            setSelectedYear: w,
            setSortOrder: O,
            clearFilters: C,
        } = (0, g.f)(),
        S = l.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let r of e) r.users.forEach((e) => t.add(e));
                    let r = [];
                    for (let e of t) {
                        let t = u.default.getUser(e);
                        if (null != t) {
                            var n;
                            let l = null != (n = t.globalName) ? n : t.username;
                            r.push({
                                userId: e,
                                name: l,
                            });
                        }
                    }
                    return r.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), r;
                })(r),
            [r],
        ),
        P = l.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        var r, n;
                        (null == (r = l.activity) ? void 0 : r.state) != null && t.add(l.activity.state),
                            (null == (n = l.activity) ? void 0 : n.details) != null && t.add(l.activity.details);
                    }
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(r),
            [r],
        ),
        I = l.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let r of e) null != r.guildId && t.add(r.guildId);
                    let r = [];
                    for (let e of t) {
                        let t = c.Z.getGuild(e);
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
        L = l.useMemo(
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
        [M, B] = l.useState(""),
        [N, D] = l.useState(""),
        [Q, U] = l.useState(""),
        _ = l.useMemo(
            () => (0 === M.trim().length ? S : S.filter((e) => a()(M.toLowerCase(), e.name.toLowerCase()))),
            [S, M],
        ),
        q = l.useMemo(
            () => (0 === N.trim().length ? I : I.filter((e) => a()(N.toLowerCase(), e.name.toLowerCase()))),
            [I, N],
        ),
        E = l.useMemo(
            () => (0 === Q.trim().length ? P : P.filter((e) => a()(Q.toLowerCase(), e.toLowerCase()))),
            [P, Q],
        ),
        z = i.size > 0 || null != b || null != m || null != y,
        F = l.useMemo(() => {
            if (0 !== i.size)
                return S.filter((e) => i.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [i, S]),
        A = l.useMemo(() => {
            if (null == m) return;
            let e = I.find((e) => e.guildId === m);
            return null == e ? void 0 : e.name;
        }, [m, I]),
        G = l.useMemo(() => (null != b ? b : void 0), [b]),
        R = l.useMemo(() => (null != y ? String(y) : void 0), [y]);
    return (0, n.jsxs)(s.v2r, {
        navId: "clips-filters-context",
        "aria-label": h.intl.string(h.t.X7yRDm),
        onClose: o.Zy,
        variant: "fixed",
        onSelect: t,
        children: [
            (0, n.jsxs)(s.kSQ, {
                label: "Filter",
                children: [
                    S.length > 0 &&
                        (0, n.jsxs)(s.sNh, {
                            id: "participants",
                            label: h.intl.string(h.t.YQ6dJg),
                            subtext: F,
                            children: [
                                S.length > 20 &&
                                    (0, n.jsx)(s.II_, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(
                                                s.ne,
                                                p(f({}, e), {
                                                    query: M,
                                                    onChange: B,
                                                    ref: t,
                                                    placeholder: h.intl.string(h.t["5h0QOP"]),
                                                }),
                                            ),
                                    }),
                                _.map((e) => {
                                    let { userId: t, name: r } = e;
                                    return (0, n.jsx)(
                                        s.S89,
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
                    I.length > 0 &&
                        (0, n.jsxs)(s.sNh, {
                            id: "servers",
                            label: h.intl.string(h.t["5qyruI"]),
                            subtext: A,
                            children: [
                                I.length > 20 &&
                                    (0, n.jsx)(s.II_, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(
                                                s.ne,
                                                p(f({}, e), {
                                                    query: N,
                                                    onChange: D,
                                                    ref: t,
                                                    placeholder: h.intl.string(h.t["5h0QOP"]),
                                                }),
                                            ),
                                    }),
                                (0, n.jsx)(s.k5B, {
                                    id: "server-all",
                                    group: "server",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => k(null),
                                    checked: null == m,
                                }),
                                q.map((e) => {
                                    let { guildId: t, name: r } = e;
                                    return (0, n.jsx)(
                                        s.k5B,
                                        {
                                            id: "server-".concat(t),
                                            group: "server",
                                            label: r,
                                            action: () => k(t),
                                            checked: m === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    P.length > 0 &&
                        (0, n.jsxs)(s.sNh, {
                            id: "activities",
                            label: h.intl.string(h.t.agRtPG),
                            subtext: G,
                            children: [
                                P.length > 20 &&
                                    (0, n.jsx)(s.II_, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, n.jsx)(
                                                s.ne,
                                                p(f({}, e), {
                                                    query: Q,
                                                    onChange: U,
                                                    ref: t,
                                                    placeholder: h.intl.string(h.t["5h0QOP"]),
                                                }),
                                            ),
                                    }),
                                (0, n.jsx)(s.k5B, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => x(null),
                                    checked: null == b,
                                }),
                                E.map((e) =>
                                    (0, n.jsx)(
                                        s.k5B,
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
                        (0, n.jsxs)(s.sNh, {
                            id: "years",
                            label: h.intl.string(h.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, n.jsx)(s.k5B, {
                                    id: "year-all",
                                    group: "year",
                                    label: h.intl.string(h.t["2/yeUU"]),
                                    action: () => w(null),
                                    checked: null == y,
                                }),
                                L.map((e) =>
                                    (0, n.jsx)(
                                        s.k5B,
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
            (0, n.jsxs)(s.kSQ, {
                label: h.intl.string(h.t.XvNMNk),
                children: [
                    (0, n.jsx)(s.k5B, {
                        id: "sort-recent",
                        group: "sort",
                        label: h.intl.string(h.t["4LLKx3"]),
                        action: () => O("descending"),
                        checked: "descending" === j,
                    }),
                    (0, n.jsx)(s.k5B, {
                        id: "sort-oldest",
                        group: "sort",
                        label: h.intl.string(h.t["0gitSE"]),
                        action: () => O("ascending"),
                        checked: "ascending" === j,
                    }),
                ],
            }),
            z &&
                (0, n.jsx)(s.kSQ, {
                    children: (0, n.jsx)(s.sNh, {
                        id: "clear-filters",
                        label: h.intl.string(h.t.FbDgiu),
                        action: C,
                    }),
                }),
        ],
    });
}
