n.d(t, { A: () => E });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(91871),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(311907),
    m = n(435371),
    h = n(397927),
    x = n(73153),
    p = n(58736),
    g = n(405269),
    _ = n(967954),
    f = n(538064),
    v = n(708403),
    b = n(260880),
    j = n(303054),
    A = n(231643),
    C = n(985018),
    S = n(76584),
    T = n(661251);
let y = [
        {
            key: "id",
            cellClassName: S.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: S.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: S.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    N = [
        {
            id: "details",
            name: "Details",
            group: A.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: n,
                            exposureType: s,
                            excluded: i,
                            timestamp: r,
                            location: o,
                            previouslyTracked: d,
                        },
                    } = e,
                    u = c()(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(p.Ay, {
                            className: l()(T.jr, S.nZ),
                            children: [
                                (0, a.jsx)(p.Ay.Icon, { icon: h.Uy2, tooltip: t }),
                                (0, a.jsx)(p.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, a.jsxs)(v.OA, {
                            className: S.ZK,
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
                                    children: (0, a.jsx)("code", { children: s }),
                                }),
                                (0, a.jsx)(v.mA, { name: "Excluded", children: (0, a.jsx)(v.HY, { value: i }) }),
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
function E() {
    let [e, t] = s.useState(""),
        n = s.useRef(null),
        i = (0, u.yK)([_.A], () => _.A.loggedTriggers),
        r = s.useMemo(
            () =>
                i
                    .filter((t) => 0 === e.length || o()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [i, e],
        ),
        [d, c] = s.useState(void 0),
        p = r.find((e) => e.key === d),
        { TabBar: g, renderSelectedTab: v } = (0, A.Ay)({ tabs: N }, []),
        E = (0, u.bG)([_.A], () => _.A.trackTriggers),
        I = s.useCallback((e) => {
            x.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        k = E ? "Stop Tracking" : "Start Tracking";
    return (0, a.jsxs)("div", {
        ref: n,
        className: l()(T.nd, S.nd),
        children: [
            (0, a.jsxs)("div", {
                className: S.rh,
                children: [
                    (0, a.jsx)(m.m_, {
                        text: k,
                        children: (0, a.jsx)(h.K0, {
                            size: "sm",
                            variant: E ? "active" : "primary",
                            icon: E ? h.E$n : h.udU,
                            "aria-label": k,
                            onClick: () => I(!E),
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
            (0, a.jsx)(j.A, { columns: y, data: r, selectedRowKey: d, onClickRow: (e) => c(e.key) }),
            null != p &&
                (0, a.jsxs)(b.A, {
                    className: S.rf,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(g, {}), v({ loggedTrigger: p })],
                }),
        ],
    });
}
