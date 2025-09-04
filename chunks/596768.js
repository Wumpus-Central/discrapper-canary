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
    m = n(755721),
    x = n(481060),
    h = n(570140),
    p = n(665149),
    f = n(55935),
    v = n(120816),
    b = n(31336),
    j = n(257785),
    g = n(484036),
    _ = n(681619),
    y = n(621060),
    C = n(388032),
    N = n(599832),
    E = n(451429);
let O = [
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
                        (0, a.jsxs)(j.E, {
                            className: N.commonProperties,
                            children: [
                                (0, a.jsx)(j.Z9, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, f.vc)(u, "LLLL"),
                                        children: (0, f.Y4)(u),
                                    }),
                                }),
                                "guild" === n.type &&
                                    (0, a.jsx)(j.Z9, {
                                        name: "Guild ID",
                                        children: (0, a.jsx)("code", { children: n.guildId }),
                                    }),
                                (0, a.jsx)(j.Z9, {
                                    name: "Bucket",
                                    children: (0, a.jsx)("code", { children: n.bucket }),
                                }),
                                (0, a.jsx)(j.Z9, {
                                    name: "Revision",
                                    children: (0, a.jsx)("code", { children: n.revision }),
                                }),
                                (0, a.jsx)(j.Z9, {
                                    name: "Override",
                                    children: (0, a.jsx)(j.wl, { value: n.override }),
                                }),
                                (0, a.jsx)(j.Z9, {
                                    name: "Exposure type",
                                    children: (0, a.jsx)("code", { children: r }),
                                }),
                                (0, a.jsx)(j.Z9, {
                                    name: "Excluded",
                                    children: (0, a.jsx)(j.wl, { value: l }),
                                }),
                                (0, a.jsx)(j.Z9, {
                                    name: "Previously tracked",
                                    children: (0, a.jsx)(j.wl, { value: c }),
                                }),
                                (0, a.jsx)(j.Z9, {
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
        { TabBar: f, renderSelectedTab: j } = (0, y.ZP)({ tabs: T }, []),
        S = (0, u.e7)([v.Z], () => v.Z.trackTriggers),
        P = r.useCallback((e) => {
            h.Z.dispatch({
                type: "SET_TRACK_TRIGGERS",
                enabled: e,
            });
        }, []);
    return (0, a.jsxs)("div", {
        ref: n,
        className: i()(E.panel, N.panel),
        children: [
            (0, a.jsxs)("div", {
                className: N.toolbar,
                children: [
                    (0, a.jsx)("div", {
                        title: "Enables tracking of all triggers",
                        className: N.triggersEnable,
                        children: (0, a.jsx)(m.T2, {
                            checked: S,
                            onChange: P,
                            className: N.__invalid_toolbarSwitch,
                        }),
                    }),
                    (0, a.jsx)(m.zx, {
                        className: N.toolbarButton,
                        look: m.zx.Looks.BLANK,
                        size: m.zx.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, a.jsx)("span", {
                            title: C.intl.string(C.t.VkKicX),
                            children: (0, a.jsx)(x.XHJ, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": C.intl.string(C.t.VkKicX),
                            }),
                        }),
                    }),
                    (0, a.jsx)(x.E1j, {
                        size: "sm",
                        className: N.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                ],
            }),
            (0, a.jsx)(_.Z, {
                columns: O,
                data: s,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key),
            }),
            null != p &&
                (0, a.jsxs)(g.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(f, {}), j({ loggedTrigger: p })],
                }),
        ],
    });
}
