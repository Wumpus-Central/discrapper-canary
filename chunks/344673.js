n.d(t, {
    A: () => N,
}),
    n(896048),
    n(638769);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(91871),
    o = n.n(s),
    c = n(989349),
    d = n.n(c),
    u = n(311907),
    m = n(435371),
    p = n(397927),
    h = n(73153),
    f = n(58736),
    x = n(405269),
    b = n(967954),
    g = n(538064),
    v = n(708403),
    j = n(260880),
    y = n(303054),
    _ = n(231643),
    A = n(985018),
    C = n(76584),
    S = n(661251);
let O = [
        {
            key: "id",
            cellClassName: C.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: C.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: C.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    E = [
        {
            id: "details",
            name: "Details",
            group: _.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: n,
                            exposureType: l,
                            excluded: i,
                            timestamp: s,
                            location: o,
                            previouslyTracked: c,
                        },
                    } = e,
                    u = d()(s);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(f.Ay, {
                            className: r()(S.jr, C.nZ),
                            children: [
                                (0, a.jsx)(f.Ay.Icon, {
                                    icon: p.Uy2,
                                    tooltip: t,
                                }),
                                (0, a.jsx)(f.Ay.Title, {
                                    children: t,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(v.OA, {
                            className: C.ZK,
                            children: [
                                (0, a.jsx)(v.mA, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, x.i$)(u, "LLLL"),
                                        children: (0, x.mk)(u),
                                    }),
                                }),
                                "guild" === n.type &&
                                    (0, a.jsx)(v.mA, {
                                        name: "Guild ID",
                                        children: (0, a.jsx)("code", {
                                            children: n.guildId,
                                        }),
                                    }),
                                (0, a.jsx)(v.mA, {
                                    name: "Bucket",
                                    children: (0, a.jsx)("code", {
                                        children: n.bucket,
                                    }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Revision",
                                    children: (0, a.jsx)("code", {
                                        children: n.revision,
                                    }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Override",
                                    children: (0, a.jsx)(v.HY, {
                                        value: n.override,
                                    }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Exposure type",
                                    children: (0, a.jsx)("code", {
                                        children: l,
                                    }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Excluded",
                                    children: (0, a.jsx)(v.HY, {
                                        value: i,
                                    }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Previously tracked",
                                    children: (0, a.jsx)(v.HY, {
                                        value: c,
                                    }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Location",
                                    children: (0, a.jsx)("code", {
                                        children: o,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];

function N() {
    let [e, t] = l.useState(""),
        n = l.useRef(null),
        i = (0, u.yK)([b.A], () => b.A.loggedTriggers),
        s = l.useMemo(
            () =>
                i
                    .filter((t) => 0 === e.length || o()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [i, e],
        ),
        [c, d] = l.useState(void 0),
        f = s.find((e) => e.key === c),
        { TabBar: x, renderSelectedTab: v } = (0, _.Ay)(
            {
                tabs: E,
            },
            [],
        ),
        N = (0, u.bG)([b.A], () => b.A.trackTriggers),
        T = l.useCallback((e) => {
            h.h.dispatch({
                type: "SET_TRACK_TRIGGERS",
                enabled: e,
            });
        }, []),
        I = N ? "Stop Tracking" : "Start Tracking";
    return (0, a.jsxs)("div", {
        ref: n,
        className: r()(S.nd, C.nd),
        children: [
            (0, a.jsxs)("div", {
                className: C.rh,
                children: [
                    (0, a.jsx)(m.m_, {
                        text: I,
                        children: (0, a.jsx)(p.K0, {
                            size: "sm",
                            variant: N ? "active" : "primary",
                            icon: N ? p.E$n : p.udU,
                            "aria-label": I,
                            onClick: () => T(!N),
                        }),
                    }),
                    (0, a.jsx)(p.IWV, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, a.jsx)(p.K0, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": A.intl.string(A.t.VkKicb),
                        icon: p.ucK,
                        onClick: g.eY,
                    }),
                ],
            }),
            (0, a.jsx)(y.A, {
                columns: O,
                data: s,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key),
            }),
            null != f &&
                (0, a.jsxs)(j.A, {
                    className: C.rf,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(x, {}),
                        v({
                            loggedTrigger: f,
                        }),
                    ],
                }),
        ],
    });
}
