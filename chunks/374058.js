a.d(t, { A: () => V });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(989349),
    o = a.n(r),
    d = a(311907),
    c = a(862482),
    u = a(573613),
    m = a(939249),
    h = a(478016),
    p = a(624479),
    x = a(555704),
    g = a(285796),
    v = a(241326),
    b = a(892547),
    _ = a(297413),
    f = a(58736),
    j = a(379078),
    A = a(704554),
    y = a(287809),
    C = a(957565),
    E = a(405269),
    S = a(967954),
    N = a(538064),
    k = a(708403),
    I = a(260880),
    D = a(303054),
    T = a(231643),
    w = a(985018),
    O = a(733657),
    R = a(505206);
let L = [
    {
        key: "event",
        cellClassName: O.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: O.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function M(e) {
    let { children: t } = e;
    return (0, n.jsx)(u.Ip, { className: O._D, children: (0, n.jsx)("dl", { children: t }) });
}
function P(e) {
    let { name: t, children: a, copyValue: i } = e,
        [s, r] = l.useState(!1);
    return (
        l.useEffect(() => {
            if (s) {
                let e = setTimeout(() => r(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [s]),
        (0, n.jsxs)("div", {
            className: O.fY,
            children: [
                (0, n.jsx)("dt", { className: O.m2, children: t }),
                (0, n.jsx)("dd", { children: a }),
                (0, n.jsx)(m.D, {
                    tag: "span",
                    className: O.nH,
                    onClick: () => (0, C.C)(JSON.stringify(i), () => r(!0)),
                    children: s
                        ? (0, n.jsx)(h.U, { color: "currentColor", size: "sm" })
                        : (0, n.jsx)(p.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let U = new Set(["client_performance_cpu", "client_performance_memory"]),
    B = [
        {
            id: "details",
            name: "Details",
            group: T.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: l, fingerprint: i },
                        onClose: r,
                        filteredEvents: d,
                    } = e,
                    c = y.default.getUser(i),
                    u = o()(l);
                return (0, n.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, n.jsxs)(f.Ay, {
                            className: s()(R.jr, O.nZ),
                            children: [
                                (0, n.jsx)(f.Ay.Icon, { icon: x.U, tooltip: t }),
                                (0, n.jsxs)(f.Ay.Title, {
                                    wrapperClassName: O.qd,
                                    children: [
                                        t,
                                        (0, n.jsx)(m.D, {
                                            tag: "span",
                                            className: O.KE,
                                            onClick: () => (0, C.C)(t),
                                            children: (0, n.jsx)(p.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(f.Ay.Icon, {
                                    icon: p.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, C.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: l, fingerprint: i, user: c?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, n.jsx)(f.Ay.Icon, { icon: g.a, tooltip: "Close", onClick: r }),
                            ],
                        }),
                        (0, n.jsxs)(k.OA, {
                            className: O.ZK,
                            children: [
                                (0, n.jsx)(k.mA, {
                                    name: "Timestamp (local)",
                                    copyValue: l.toISOString(),
                                    children: (0, n.jsxs)("time", {
                                        dateTime: l.toISOString(),
                                        title: (0, E.i$)(u, "LLLL"),
                                        children: ["(", o().locale(), ") ", (0, E.mk)(u)],
                                    }),
                                }),
                                null != c &&
                                    (0, n.jsx)(k.mA, {
                                        name: "User",
                                        copyValue: c.id,
                                        children: (0, n.jsx)(_.A, { user: c }),
                                    }),
                                (0, n.jsx)(k.mA, {
                                    name: "Fingerprint",
                                    copyValue: i,
                                    children: (0, n.jsx)("code", { children: i }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(M, {
                            children: Object.entries(a).map((e) => {
                                let [a, l] = e,
                                    i = U.has(a)
                                        ? ((e, t, a) => {
                                              let n = e.filter((e) => e.event === t);
                                              if (0 === n.length) return { average: null, count: 0 };
                                              let l = null,
                                                  i = 0;
                                              for (let e of n) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((i += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return { average: null !== l ? l / n.length : null, count: i };
                                          })(d, t, a)
                                        : null;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, n.jsx)(
                                                P,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: l || null },
                                                    children:
                                                        null != l
                                                            ? (0, n.jsx)("code", { children: JSON.stringify(l) })
                                                            : (0, n.jsx)("code", { className: O.HO, children: "null" }),
                                                },
                                                a,
                                            ),
                                            null !== i &&
                                                null !== i.average &&
                                                (0, n.jsx)(
                                                    P,
                                                    {
                                                        name: `${a}_avg:`,
                                                        copyValue: { [a]: l || null },
                                                        children: (0, n.jsxs)("code", {
                                                            children: [i.average.toFixed(3), " (", i.count, ")"],
                                                        }),
                                                    },
                                                    `${a}_avg`,
                                                ),
                                        ],
                                    },
                                    `${a}_container`,
                                );
                            }),
                        }),
                    ],
                });
            },
        },
    ],
    G = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(G)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [a, { filter: n }] = t;
                        return !n(e);
                    })
                    .every((e) => e),
        },
        experiments: {
            label: "Experiments",
            filter: (e) => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event),
        },
        impressions: { label: "Impressions", filter: (e) => e.event.startsWith("impression_") },
        networkActions: { label: "Network", filter: (e) => e.event.startsWith("network_action") },
    },
    F = {
        searchType: j.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function V() {
    let e = l.useRef(null),
        [t, a] = l.useState(""),
        i = (0, d.bG)([S.A], () => S.A.loggedEventsVersion),
        [r, o] = l.useState(() => Object.keys(G)),
        [u, h] = l.useState(S.A.loggedEvents),
        p = l.useCallback((e) => {
            h(e);
        }, []);
    (0, A.RT)(t, S.A.loggedEvents, p, F, [i]);
    let x = u.filter((e) => {
            for (let t of r) if (G[t].filter(e)) return !0;
            return !1;
        }),
        [g, _] = l.useState(void 0),
        f = x.find((e) => e.key === g),
        { TabBar: j, renderSelectedTab: y } = (0, T.Ay)({ tabs: B }, []);
    return (0, n.jsxs)("div", {
        ref: e,
        className: s()(R.nd, O.nd),
        children: [
            (0, n.jsxs)("div", {
                className: O.rh,
                children: [
                    (0, n.jsx)(c.$n, {
                        className: O.Q$,
                        look: c.$n.Looks.BLANK,
                        size: c.$n.Sizes.ICON,
                        onClick: N.eY,
                        children: (0, n.jsx)("span", {
                            title: w.intl.string(w.t.VkKicb),
                            children: (0, n.jsx)(v.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": w.intl.string(w.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, n.jsx)("div", { className: O.Bi }),
                    (0, n.jsx)("div", {
                        className: O.uW,
                        children: Object.entries(G).map((e) => {
                            let [t, a] = e;
                            return (0, n.jsx)(
                                m.D,
                                {
                                    className: s()(O.pb, r.includes(t) && O.bx),
                                    onClick: () => {
                                        o((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: a.label,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: O.rh,
                children: (0, n.jsx)(b.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, n.jsx)(D.A, { columns: L, data: x, selectedRowKey: g, onClickRow: (e) => _(e.key) }),
            null != f &&
                (0, n.jsxs)(I.A, {
                    className: O.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, n.jsx)(j, {}), y({ loggedEvent: f, onClose: () => _(void 0), filteredEvents: x })],
                }),
        ],
    });
}
