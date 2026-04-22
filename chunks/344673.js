a.d(t, { A: () => O });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(91871),
    o = a.n(r),
    d = a(989349),
    c = a.n(d),
    u = a(311907),
    m = a(990078),
    h = a(555704),
    p = a(408278),
    x = a(113494),
    g = a(782134),
    v = a(892547),
    b = a(241326),
    _ = a(73153),
    f = a(58736),
    j = a(405269),
    A = a(967954),
    y = a(538064),
    C = a(708403),
    E = a(260880),
    S = a(303054),
    N = a(231643),
    k = a(985018),
    I = a(733657),
    D = a(505206);
let T = [
        {
            key: "id",
            cellClassName: I.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: I.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: I.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    w = [
        {
            id: "details",
            name: "Details",
            group: N.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: l,
                            excluded: i,
                            timestamp: r,
                            location: o,
                            previouslyTracked: d,
                        },
                    } = e,
                    u = c()(r);
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(f.Ay, {
                            className: s()(D.jr, I.nZ),
                            children: [
                                (0, n.jsx)(f.Ay.Icon, { icon: h.U, tooltip: t }),
                                (0, n.jsx)(f.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, n.jsxs)(C.OA, {
                            className: I.ZK,
                            children: [
                                (0, n.jsx)(C.mA, {
                                    name: "Timestamp (local)",
                                    children: (0, n.jsx)("time", {
                                        dateTime: r.toISOString(),
                                        title: (0, j.i$)(u, "LLLL"),
                                        children: (0, j.mk)(u),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, n.jsx)(C.mA, {
                                        name: "Guild ID",
                                        children: (0, n.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, n.jsx)(C.mA, {
                                    name: "Bucket",
                                    children: (0, n.jsx)("code", { children: a.bucket }),
                                }),
                                (0, n.jsx)(C.mA, {
                                    name: "Revision",
                                    children: (0, n.jsx)("code", { children: a.revision }),
                                }),
                                (0, n.jsx)(C.mA, {
                                    name: "Override",
                                    children: (0, n.jsx)(C.HY, { value: a.override }),
                                }),
                                (0, n.jsx)(C.mA, {
                                    name: "Exposure type",
                                    children: (0, n.jsx)("code", { children: l }),
                                }),
                                (0, n.jsx)(C.mA, { name: "Excluded", children: (0, n.jsx)(C.HY, { value: i }) }),
                                (0, n.jsx)(C.mA, {
                                    name: "Previously tracked",
                                    children: (0, n.jsx)(C.HY, { value: d }),
                                }),
                                (0, n.jsx)(C.mA, { name: "Location", children: (0, n.jsx)("code", { children: o }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function O() {
    let [e, t] = l.useState(""),
        a = l.useRef(null),
        i = (0, u.yK)([A.A], () => A.A.loggedTriggers),
        r = l.useMemo(
            () =>
                i
                    .filter((t) => 0 === e.length || o()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [i, e],
        ),
        [d, c] = l.useState(void 0),
        h = r.find((e) => e.key === d),
        { TabBar: f, renderSelectedTab: j } = (0, N.Ay)({ tabs: w }, []),
        C = (0, u.bG)([A.A], () => A.A.trackTriggers),
        O = l.useCallback((e) => {
            _.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        R = C ? "Stop Tracking" : "Start Tracking";
    return (0, n.jsxs)("div", {
        ref: a,
        className: s()(D.nd, I.nd),
        children: [
            (0, n.jsxs)("div", {
                className: I.rh,
                children: [
                    (0, n.jsx)(m.m, {
                        text: R,
                        children: (0, n.jsx)(p.K, {
                            size: "sm",
                            variant: C ? "active" : "primary",
                            icon: C ? x.E : g.u,
                            "aria-label": R,
                            onClick: () => O(!C),
                        }),
                    }),
                    (0, n.jsx)(v.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, n.jsx)(p.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": k.intl.string(k.t.VkKicb),
                        icon: b.u,
                        onClick: y.eY,
                    }),
                ],
            }),
            (0, n.jsx)(S.A, { columns: T, data: r, selectedRowKey: d, onClickRow: (e) => c(e.key) }),
            null != h &&
                (0, n.jsxs)(E.A, {
                    className: I.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, n.jsx)(f, {}), j({ loggedTrigger: h })],
                }),
        ],
    });
}
