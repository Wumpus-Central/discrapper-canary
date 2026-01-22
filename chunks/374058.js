n.d(t, { A: () => D }), n(896048), n(457529);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(311907),
    d = n(421380),
    u = n(397927),
    m = n(297413),
    p = n(58736),
    h = n(379078),
    f = n(704554),
    x = n(287809),
    b = n(957565),
    g = n(405269),
    v = n(967954),
    j = n(538064),
    y = n(708403),
    _ = n(260880),
    A = n(303054),
    C = n(231643),
    S = n(985018),
    O = n(76584),
    E = n(661251);
let N = [
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
function T(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.IpV, {
        className: O._D,
        children: (0, a.jsx)("dl", { children: t }),
    });
}
function I(e) {
    let { name: t, children: n, copyValue: i } = e,
        [r, s] = l.useState(!1);
    return (
        l.useEffect(() => {
            if (r) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [r]),
        (0, a.jsxs)("div", {
            className: O.fY,
            children: [
                (0, a.jsx)("dt", {
                    className: O.m2,
                    children: t,
                }),
                (0, a.jsx)("dd", { children: n }),
                (0, a.jsx)(u.DUT, {
                    tag: "span",
                    className: O.nH,
                    onClick: () => (0, b.C)(JSON.stringify(i), () => s(!0)),
                    children: r
                        ? (0, a.jsx)(u.Uzd, {
                              color: "currentColor",
                              size: "sm",
                          })
                        : (0, a.jsx)(u.TdU, {
                              color: "currentColor",
                              size: "sm",
                          }),
                }),
            ],
        })
    );
}
let w = new Set(["client_performance_cpu", "client_performance_memory"]),
    k = [
        {
            id: "details",
            name: "Details",
            group: C.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: l, fingerprint: i },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = x.default.getUser(i),
                    h = o()(l);
                return (0, a.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, a.jsxs)(p.Ay, {
                            className: r()(E.jr, O.nZ),
                            children: [
                                (0, a.jsx)(p.Ay.Icon, {
                                    icon: u.Uy2,
                                    tooltip: t,
                                }),
                                (0, a.jsxs)(p.Ay.Title, {
                                    wrapperClassName: O.qd,
                                    children: [
                                        t,
                                        (0, a.jsx)(u.DUT, {
                                            tag: "span",
                                            className: O.KE,
                                            onClick: () => (0, b.C)(t),
                                            children: (0, a.jsx)(u.TdU, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.Ay.Icon, {
                                    icon: u.TdU,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, b.C)(
                                            JSON.stringify(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            a = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (a = a.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            a.forEach(function (t) {
                                                                var a;
                                                                (a = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: a,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = a);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        event: t,
                                                        timestamp: l,
                                                        fingerprint: i,
                                                        user: null == d ? void 0 : d.id,
                                                    },
                                                    n,
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, a.jsx)(p.Ay.Icon, {
                                    icon: u.aXh,
                                    tooltip: "Close",
                                    onClick: s,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(y.OA, {
                            className: O.ZK,
                            children: [
                                (0, a.jsx)(y.mA, {
                                    name: "Timestamp (local)",
                                    copyValue: l.toISOString(),
                                    children: (0, a.jsxs)("time", {
                                        dateTime: l.toISOString(),
                                        title: (0, g.i$)(h, "LLLL"),
                                        children: ["(", o().locale(), ") ", (0, g.mk)(h)],
                                    }),
                                }),
                                null != d &&
                                    (0, a.jsx)(y.mA, {
                                        name: "User",
                                        copyValue: d.id,
                                        children: (0, a.jsx)(m.A, { user: d }),
                                    }),
                                (0, a.jsx)(y.mA, {
                                    name: "Fingerprint",
                                    copyValue: i,
                                    children: (0, a.jsx)("code", { children: i }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(T, {
                            children: Object.entries(n).map((e) => {
                                let [n, l] = e,
                                    i = w.has(n)
                                        ? ((e, t, n) => {
                                              let a = e.filter((e) => e.event === t);
                                              if (0 === a.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let l = null,
                                                  i = 0;
                                              for (let e of a) {
                                                  let t = e.properties[n];
                                                  "number" == typeof t && ((i += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return {
                                                  average: null !== l ? l / a.length : null,
                                                  count: i,
                                              };
                                          })(c, t, n)
                                        : null;
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, a.jsx)(
                                                I,
                                                {
                                                    name: "".concat(n, ":"),
                                                    copyValue: { [n]: l || null },
                                                    children:
                                                        null != l
                                                            ? (0, a.jsx)("code", { children: JSON.stringify(l) })
                                                            : (0, a.jsx)("code", {
                                                                  className: O.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                n,
                                            ),
                                            null !== i &&
                                                null !== i.average &&
                                                (0, a.jsx)(
                                                    I,
                                                    {
                                                        name: "".concat(n, "_avg:"),
                                                        copyValue: { [n]: l || null },
                                                        children: (0, a.jsxs)("code", {
                                                            children: [i.average.toFixed(3), " (", i.count, ")"],
                                                        }),
                                                    },
                                                    "".concat(n, "_avg"),
                                                ),
                                        ],
                                    },
                                    "".concat(n, "_container"),
                                );
                            }),
                        }),
                    ],
                });
            },
        },
    ],
    P = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(P)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [n, { filter: a }] = t;
                        return !a(e);
                    })
                    .every((e) => e),
        },
        experiments: {
            label: "Experiments",
            filter: (e) => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event),
        },
        impressions: {
            label: "Impressions",
            filter: (e) => e.event.startsWith("impression_"),
        },
        networkActions: {
            label: "Network",
            filter: (e) => e.event.startsWith("network_action"),
        },
    },
    R = {
        searchType: h.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        },
        throttleMs: 100,
    };
function D() {
    let e = l.useRef(null),
        [t, n] = l.useState(""),
        i = (0, c.bG)([v.A], () => v.A.loggedEventsVersion),
        [s, o] = l.useState(() => Object.keys(P)),
        [m, p] = l.useState(v.A.loggedEvents),
        h = l.useCallback((e) => {
            p(e);
        }, []);
    (0, f.RT)(t, v.A.loggedEvents, h, R, [i]);
    let x = m.filter((e) => {
            for (let t of s) if (P[t].filter(e)) return !0;
            return !1;
        }),
        [b, g] = l.useState(void 0),
        y = x.find((e) => e.key === b),
        { TabBar: T, renderSelectedTab: I } = (0, C.Ay)({ tabs: k }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: r()(E.nd, O.nd),
        children: [
            (0, a.jsxs)("div", {
                className: O.rh,
                children: [
                    (0, a.jsx)(d.$n, {
                        className: O.Q$,
                        look: d.$n.Looks.BLANK,
                        size: d.$n.Sizes.ICON,
                        onClick: j.eY,
                        children: (0, a.jsx)("span", {
                            title: S.intl.string(S.t.VkKicb),
                            children: (0, a.jsx)(u.ucK, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": S.intl.string(S.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", { className: O.Bi }),
                    (0, a.jsx)("div", {
                        className: O.uW,
                        children: Object.entries(P).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.DUT,
                                {
                                    className: r()(O.pb, s.includes(t) && O.bx),
                                    onClick: () => {
                                        o((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: n.label,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: O.rh,
                children: (0, a.jsx)(u.IWV, {
                    size: "sm",
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, a.jsx)(A.A, {
                columns: N,
                data: x,
                selectedRowKey: b,
                onClickRow: (e) => g(e.key),
            }),
            null != y &&
                (0, a.jsxs)(_.A, {
                    className: O.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(T, {}),
                        I({
                            loggedEvent: y,
                            onClose: () => g(void 0),
                            filteredEvents: x,
                        }),
                    ],
                }),
        ],
    });
}
