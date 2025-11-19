n.d(t, { Z: () => N }), n(388685), n(642613);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(658722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(681715),
    p = n(481060),
    h = n(570140),
    x = n(665149),
    g = n(55935),
    f = n(120816),
    b = n(31336),
    v = n(257785),
    j = n(484036),
    _ = n(681619),
    y = n(621060),
    C = n(388032),
    S = n(529554),
    E = n(866403);
let O = [
        {
            key: "id",
            cellClassName: S.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: S.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: S.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    T = [
        {
            id: "details",
            name: "Details",
            group: y.v0.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: n,
                            exposureType: l,
                            excluded: r,
                            timestamp: s,
                            location: o,
                            previouslyTracked: c,
                        },
                    } = e,
                    u = d()(s);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(x.ZP, {
                            className: i()(E.headerBar, S.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(x.ZP.Icon, {
                                    icon: p.IeX,
                                    tooltip: t,
                                }),
                                (0, a.jsx)(x.ZP.Title, { children: t }),
                            ],
                        }),
                        (0, a.jsxs)(v.E, {
                            className: S.commonProperties,
                            children: [
                                (0, a.jsx)(v.Z9, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, g.vc)(u, "LLLL"),
                                        children: (0, g.Y4)(u),
                                    }),
                                }),
                                "guild" === n.type &&
                                    (0, a.jsx)(v.Z9, {
                                        name: "Guild ID",
                                        children: (0, a.jsx)("code", { children: n.guildId }),
                                    }),
                                (0, a.jsx)(v.Z9, {
                                    name: "Bucket",
                                    children: (0, a.jsx)("code", { children: n.bucket }),
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: "Revision",
                                    children: (0, a.jsx)("code", { children: n.revision }),
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: "Override",
                                    children: (0, a.jsx)(v.wl, { value: n.override }),
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: "Exposure type",
                                    children: (0, a.jsx)("code", { children: l }),
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: "Excluded",
                                    children: (0, a.jsx)(v.wl, { value: r }),
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: "Previously tracked",
                                    children: (0, a.jsx)(v.wl, { value: c }),
                                }),
                                (0, a.jsx)(v.Z9, {
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
function N() {
    let [e, t] = l.useState(""),
        n = l.useRef(null),
        r = (0, u.Wu)([f.Z], () => f.Z.loggedTriggers),
        s = l.useMemo(
            () =>
                r
                    .filter((t) => 0 === e.length || o()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [r, e],
        ),
        [c, d] = l.useState(void 0),
        x = s.find((e) => e.key === c),
        { TabBar: g, renderSelectedTab: v } = (0, y.ZP)({ tabs: T }, []),
        N = (0, u.e7)([f.Z], () => f.Z.trackTriggers),
        P = l.useCallback((e) => {
            h.Z.dispatch({
                type: "SET_TRACK_TRIGGERS",
                enabled: e,
            });
        }, []),
        I = N ? "Stop Tracking" : "Start Tracking";
    return (0, a.jsxs)("div", {
        ref: n,
        className: i()(E.panel, S.panel),
        children: [
            (0, a.jsxs)("div", {
                className: S.toolbar,
                children: [
                    (0, a.jsx)(m.u, {
                        text: I,
                        children: (0, a.jsx)(p.hU, {
                            size: "sm",
                            variant: N ? "active" : "primary",
                            icon: N ? p.fpf : p.o1U,
                            "aria-label": I,
                            onClick: () => P(!N),
                        }),
                    }),
                    (0, a.jsx)(p.E1j, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, a.jsx)(p.hU, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": C.intl.string(C.t.VkKicb),
                        icon: p.XHJ,
                        onClick: b.Zw,
                    }),
                ],
            }),
            (0, a.jsx)(_.Z, {
                columns: O,
                data: s,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key),
            }),
            null != x &&
                (0, a.jsxs)(j.Z, {
                    className: S.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(g, {}), v({ loggedTrigger: x })],
                }),
        ],
    });
}
