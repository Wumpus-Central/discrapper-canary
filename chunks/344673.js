n.d(t, { A: () => N });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(91871),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(311907),
    m = n(435371),
    h = n(397927),
    p = n(73153),
    x = n(58736),
    g = n(405269),
    _ = n(967954),
    f = n(538064),
    v = n(708403),
    b = n(260880),
    j = n(303054),
    A = n(231643),
    C = n(985018),
    T = n(76584),
    y = n(661251);
let S = [
        {
            key: "id",
            cellClassName: T.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: T.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: T.QN,
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
            group: A.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: n,
                            exposureType: i,
                            excluded: s,
                            timestamp: r,
                            location: o,
                            previouslyTracked: d,
                        },
                    } = e,
                    u = c()(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(x.Ay, {
                            className: l()(y.jr, T.nZ),
                            children: [
                                (0, a.jsx)(x.Ay.Icon, { icon: h.Uy2, tooltip: t }),
                                (0, a.jsx)(x.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, a.jsxs)(v.OA, {
                            className: T.ZK,
                            children: [
                                (0, a.jsx)(v.mA, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: r.toISOString(),
                                        title: (0, g.i$)(u, "LLLL"),
                                        children: (0, g.mk)(u),
                                    }),
                                }),
                                "guild" === n.type &&
                                    (0, a.jsx)(v.mA, {
                                        name: "Guild ID",
                                        children: (0, a.jsx)("code", { children: n.guildId }),
                                    }),
                                (0, a.jsx)(v.mA, {
                                    name: "Bucket",
                                    children: (0, a.jsx)("code", { children: n.bucket }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Revision",
                                    children: (0, a.jsx)("code", { children: n.revision }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Override",
                                    children: (0, a.jsx)(v.HY, { value: n.override }),
                                }),
                                (0, a.jsx)(v.mA, {
                                    name: "Exposure type",
                                    children: (0, a.jsx)("code", { children: i }),
                                }),
                                (0, a.jsx)(v.mA, { name: "Excluded", children: (0, a.jsx)(v.HY, { value: s }) }),
                                (0, a.jsx)(v.mA, {
                                    name: "Previously tracked",
                                    children: (0, a.jsx)(v.HY, { value: d }),
                                }),
                                (0, a.jsx)(v.mA, { name: "Location", children: (0, a.jsx)("code", { children: o }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function N() {
    let [e, t] = i.useState(""),
        n = i.useRef(null),
        s = (0, u.yK)([_.A], () => _.A.loggedTriggers),
        r = i.useMemo(
            () =>
                s
                    .filter((t) => 0 === e.length || o()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [s, e],
        ),
        [d, c] = i.useState(void 0),
        x = r.find((e) => e.key === d),
        { TabBar: g, renderSelectedTab: v } = (0, A.Ay)({ tabs: E }, []),
        N = (0, u.bG)([_.A], () => _.A.trackTriggers),
        I = i.useCallback((e) => {
            p.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        R = N ? "Stop Tracking" : "Start Tracking";
    return (0, a.jsxs)("div", {
        ref: n,
        className: l()(y.nd, T.nd),
        children: [
            (0, a.jsxs)("div", {
                className: T.rh,
                children: [
                    (0, a.jsx)(m.m_, {
                        text: R,
                        children: (0, a.jsx)(h.K0, {
                            size: "sm",
                            variant: N ? "active" : "primary",
                            icon: N ? h.E$n : h.udU,
                            "aria-label": R,
                            onClick: () => I(!N),
                        }),
                    }),
                    (0, a.jsx)(h.IWV, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, a.jsx)(h.K0, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": C.intl.string(C.t.VkKicb),
                        icon: h.ucK,
                        onClick: f.eY,
                    }),
                ],
            }),
            (0, a.jsx)(j.A, { columns: S, data: r, selectedRowKey: d, onClickRow: (e) => c(e.key) }),
            null != x &&
                (0, a.jsxs)(b.A, {
                    className: T.rf,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(g, {}), v({ loggedTrigger: x })],
                }),
        ],
    });
}
