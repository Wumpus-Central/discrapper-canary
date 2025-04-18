n.d(t, { Z: () => T }), n(388685), n(642613);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(658722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(481060),
    x = n(570140),
    h = n(665149),
    p = n(55935),
    b = n(120816),
    f = n(31336),
    v = n(257785),
    j = n(484036),
    g = n(681619),
    _ = n(621060),
    y = n(388032),
    C = n(683229),
    O = n(482479);
let N = [
        {
            key: 'id',
            cellClassName: C.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: C.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: C.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            }
        }
    ],
    E = [
        {
            id: 'details',
            name: 'Details',
            group: _.v0.NONE,
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: t, descriptor: n, exposureType: r, excluded: l, timestamp: s, location: o, previouslyTracked: c }
                    } = e,
                    u = d()(s);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(h.ZP, {
                            className: i()(O.headerBar, C.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(h.ZP.Icon, {
                                    icon: m.IeX,
                                    tooltip: t
                                }),
                                (0, a.jsx)(h.ZP.Title, { children: t })
                            ]
                        }),
                        (0, a.jsxs)(v.E, {
                            className: C.commonProperties,
                            children: [
                                (0, a.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsx)('time', {
                                        dateTime: s.toISOString(),
                                        title: (0, p.vc)(u, 'LLLL'),
                                        children: (0, p.Y4)(u)
                                    })
                                }),
                                'guild' === n.type &&
                                    (0, a.jsx)(v.Z9, {
                                        name: 'Guild ID',
                                        children: (0, a.jsx)('code', { children: n.guildId })
                                    }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Bucket',
                                    children: (0, a.jsx)('code', { children: n.bucket })
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Revision',
                                    children: (0, a.jsx)('code', { children: n.revision })
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Override',
                                    children: (0, a.jsx)(v.wl, { value: n.override })
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Exposure type',
                                    children: (0, a.jsx)('code', { children: r })
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Excluded',
                                    children: (0, a.jsx)(v.wl, { value: l })
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, a.jsx)(v.wl, { value: c })
                                }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Location',
                                    children: (0, a.jsx)('code', { children: o })
                                })
                            ]
                        })
                    ]
                });
            }
        }
    ];
function T() {
    let [e, t] = r.useState(''),
        n = r.useRef(null),
        l = (0, u.Wu)([b.Z], () => b.Z.loggedTriggers),
        s = r.useMemo(() => l.filter((t) => 0 === e.length || o()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]),
        [c, d] = r.useState(void 0),
        h = s.find((e) => e.key === c),
        { TabBar: p, renderSelectedTab: v } = (0, _.ZP)({ tabs: E }, []),
        T = (0, u.e7)([b.Z], () => b.Z.trackTriggers),
        S = r.useCallback((e) => {
            x.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, a.jsxs)('div', {
        ref: n,
        className: i()(O.panel, C.panel),
        children: [
            (0, a.jsxs)('div', {
                className: C.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: C.triggersEnable,
                        children: (0, a.jsx)(m.rsf, {
                            checked: T,
                            onChange: S,
                            className: C.__invalid_toolbarSwitch
                        })
                    }),
                    (0, a.jsx)(m.zxk, {
                        className: C.toolbarButton,
                        look: m.zxk.Looks.BLANK,
                        size: m.zxk.Sizes.ICON,
                        onClick: f.Zw,
                        children: (0, a.jsx)('span', {
                            title: y.NW.string(y.t.VkKicX),
                            children: (0, a.jsx)(m.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': y.NW.string(y.t.VkKicX)
                            })
                        })
                    }),
                    (0, a.jsx)(m.E1j, {
                        className: C.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, a.jsx)(g.Z, {
                columns: N,
                data: s,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key)
            }),
            null != h &&
                (0, a.jsxs)(j.Z, {
                    className: C.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(p, {}), v({ loggedTrigger: h })]
                })
        ]
    });
}
