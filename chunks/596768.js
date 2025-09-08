n.d(t, { Z: () => S }), n(388685), n(642613);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(658722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(681715),
    x = n(481060),
    h = n(570140),
    p = n(665149),
    f = n(55935),
    v = n(120816),
    b = n(31336),
    g = n(257785),
    j = n(484036),
    _ = n(681619),
    y = n(621060),
    C = n(388032),
    N = n(599832),
    E = n(451429);
let T = [
        {
            key: "id",
            cellClassName: N.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: N.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: N.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    O = [
        {
            id: "details",
            name: "Details",
            group: y.v0.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: n,
                            exposureType: r,
                            excluded: l,
                            timestamp: s,
                            location: o,
                            previouslyTracked: c,
                        },
                    } = e,
                    u = d()(s);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(p.ZP, {
                            className: i()(E.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(p.ZP.Icon, {
                                    icon: x.IeX,
                                    tooltip: t,
                                }),
                                (0, a.jsx)(p.ZP.Title, { children: t }),
                            ],
                        }),
                        (0, a.jsxs)(g.E, {
                            className: N.commonProperties,
                            children: [
                                (0, a.jsx)(g.Z9, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, f.vc)(u, "LLLL"),
                                        children: (0, f.Y4)(u),
                                    }),
                                }),
                                "guild" === n.type &&
                                    (0, a.jsx)(g.Z9, {
                                        name: "Guild ID",
                                        children: (0, a.jsx)("code", { children: n.guildId }),
                                    }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Bucket",
                                    children: (0, a.jsx)("code", { children: n.bucket }),
                                }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Revision",
                                    children: (0, a.jsx)("code", { children: n.revision }),
                                }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Override",
                                    children: (0, a.jsx)(g.wl, { value: n.override }),
                                }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Exposure type",
                                    children: (0, a.jsx)("code", { children: r }),
                                }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Excluded",
                                    children: (0, a.jsx)(g.wl, { value: l }),
                                }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Previously tracked",
                                    children: (0, a.jsx)(g.wl, { value: c }),
                                }),
                                (0, a.jsx)(g.Z9, {
                                    name: "Location",
                                    children: (0, a.jsx)("code", { children: o }),
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function S() {
    let [e, t] = r.useState(""),
        n = r.useRef(null),
        l = (0, u.Wu)([v.Z], () => v.Z.loggedTriggers),
        s = r.useMemo(
            () =>
                l
                    .filter((t) => 0 === e.length || o()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [l, e],
        ),
        [c, d] = r.useState(void 0),
        p = s.find((e) => e.key === c),
        { TabBar: f, renderSelectedTab: g } = (0, y.ZP)({ tabs: O }, []),
        S = (0, u.e7)([v.Z], () => v.Z.trackTriggers),
        P = r.useCallback((e) => {
            h.Z.dispatch({
                type: "SET_TRACK_TRIGGERS",
                enabled: e,
            });
        }, []),
        I = S ? "Stop Tracking" : "Start Tracking";
    return (0, a.jsxs)("div", {
        ref: n,
        className: i()(E.panel, N.panel),
        children: [
            (0, a.jsxs)("div", {
                className: N.toolbar,
                children: [
                    (0, a.jsx)(m.u, {
                        text: I,
                        children: (0, a.jsx)(x.hU, {
                            size: "sm",
                            variant: S ? "active" : "primary",
                            icon: S ? x.fpf : x.o1U,
                            "aria-label": I,
                            onClick: () => P(!S),
                        }),
                    }),
                    (0, a.jsx)(x.E1j, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, a.jsx)(x.hU, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": C.intl.string(C.t.VkKicX),
                        icon: x.XHJ,
                        onClick: b.Zw,
                    }),
                ],
            }),
            (0, a.jsx)(_.Z, {
                columns: T,
                data: s,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key),
            }),
            null != p &&
                (0, a.jsxs)(j.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(f, {}), g({ loggedTrigger: p })],
                }),
        ],
    });
}
