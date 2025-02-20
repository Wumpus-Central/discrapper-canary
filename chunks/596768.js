n.d(t, { Z: () => E }), n(47120), n(230036);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(658722),
    s = n.n(o),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    h = n(481060),
    m = n(570140),
    x = n(665149),
    p = n(55935),
    f = n(120816),
    b = n(31336),
    _ = n(257785),
    g = n(484036),
    v = n(681619),
    j = n(621060),
    C = n(388032),
    y = n(414746),
    O = n(841699);
let N = [
        {
            key: 'id',
            cellClassName: y.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: y.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: y.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            }
        }
    ],
    T = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: t, descriptor: n, exposureType: a, excluded: i, timestamp: o, location: s, previouslyTracked: c }
                    } = e,
                    u = d()(o);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(x.ZP, {
                            className: l()(O.headerBar, y.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(x.ZP.Icon, {
                                    icon: h.IeX,
                                    tooltip: t
                                }),
                                (0, r.jsx)(x.ZP.Title, { children: t })
                            ]
                        }),
                        (0, r.jsxs)(_.E, {
                            className: y.commonProperties,
                            children: [
                                (0, r.jsx)(_.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: o.toISOString(),
                                        title: (0, p.vc)(u, 'LLLL'),
                                        children: (0, p.Y4)(u)
                                    })
                                }),
                                'guild' === n.type &&
                                    (0, r.jsx)(_.Z9, {
                                        name: 'Guild ID',
                                        children: (0, r.jsx)('code', { children: n.guildId })
                                    }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Bucket',
                                    children: (0, r.jsx)('code', { children: n.bucket })
                                }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Revision',
                                    children: (0, r.jsx)('code', { children: n.revision })
                                }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Override',
                                    children: (0, r.jsx)(_.wl, { value: n.override })
                                }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Exposure type',
                                    children: (0, r.jsx)('code', { children: a })
                                }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Excluded',
                                    children: (0, r.jsx)(_.wl, { value: i })
                                }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, r.jsx)(_.wl, { value: c })
                                }),
                                (0, r.jsx)(_.Z9, {
                                    name: 'Location',
                                    children: (0, r.jsx)('code', { children: s })
                                })
                            ]
                        })
                    ]
                });
            }
        }
    ];
function E() {
    let [e, t] = a.useState(''),
        n = a.useRef(null),
        i = (0, u.Wu)([f.Z], () => f.Z.loggedTriggers),
        o = a.useMemo(() => i.filter((t) => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [i, e]),
        [c, d] = a.useState(void 0),
        x = o.find((e) => e.key === c),
        { TabBar: p, renderSelectedTab: _ } = (0, j.Z)({ tabs: T }, []),
        E = (0, u.e7)([f.Z], () => f.Z.trackTriggers),
        S = a.useCallback((e) => {
            m.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, r.jsxs)('div', {
        ref: n,
        className: l()(O.panel, y.panel),
        children: [
            (0, r.jsxs)('div', {
                className: y.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: y.triggersEnable,
                        children: (0, r.jsx)(h.rsf, {
                            checked: E,
                            onChange: S,
                            className: y.__invalid_toolbarSwitch
                        })
                    }),
                    (0, r.jsx)(h.zxk, {
                        className: y.toolbarButton,
                        look: h.zxk.Looks.BLANK,
                        size: h.zxk.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, r.jsx)('span', {
                            title: C.NW.string(C.t.VkKicX),
                            children: (0, r.jsx)(h.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': C.NW.string(C.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)(h.E1j, {
                        className: y.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, r.jsx)(v.Z, {
                columns: N,
                data: o,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key)
            }),
            null != x &&
                (0, r.jsxs)(g.Z, {
                    className: y.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), _({ loggedTrigger: x })]
                })
        ]
    });
}
