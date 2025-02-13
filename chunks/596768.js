n.d(t, { Z: () => y }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(658722),
    s = n.n(o),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    h = n(481060),
    m = n(570140),
    x = n(665149),
    _ = n(55935),
    p = n(120816),
    f = n(31336),
    b = n(257785),
    g = n(484036),
    v = n(681619),
    j = n(621060),
    C = n(388032),
    N = n(822295),
    T = n(658951);
let E = [
        {
            key: 'id',
            cellClassName: N.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: N.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: N.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            }
        }
    ],
    S = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: t, descriptor: n, exposureType: r, excluded: l, timestamp: o, location: s, previouslyTracked: c }
                    } = e,
                    u = d()(o);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(x.ZP, {
                            className: i()(T.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(x.ZP.Icon, {
                                    icon: h.IeX,
                                    tooltip: t
                                }),
                                (0, a.jsx)(x.ZP.Title, { children: t })
                            ]
                        }),
                        (0, a.jsxs)(b.E, {
                            className: N.commonProperties,
                            children: [
                                (0, a.jsx)(b.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsx)('time', {
                                        dateTime: o.toISOString(),
                                        title: (0, _.vc)(u, 'LLLL'),
                                        children: (0, _.Y4)(u)
                                    })
                                }),
                                'guild' === n.type &&
                                    (0, a.jsx)(b.Z9, {
                                        name: 'Guild ID',
                                        children: (0, a.jsx)('code', { children: n.guildId })
                                    }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Bucket',
                                    children: (0, a.jsx)('code', { children: n.bucket })
                                }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Revision',
                                    children: (0, a.jsx)('code', { children: n.revision })
                                }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Override',
                                    children: (0, a.jsx)(b.wl, { value: n.override })
                                }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Exposure type',
                                    children: (0, a.jsx)('code', { children: r })
                                }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Excluded',
                                    children: (0, a.jsx)(b.wl, { value: l })
                                }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, a.jsx)(b.wl, { value: c })
                                }),
                                (0, a.jsx)(b.Z9, {
                                    name: 'Location',
                                    children: (0, a.jsx)('code', { children: s })
                                })
                            ]
                        })
                    ]
                });
            }
        }
    ];
function y() {
    let [e, t] = r.useState(''),
        n = r.useRef(null),
        l = (0, u.Wu)([p.Z], () => p.Z.loggedTriggers),
        o = r.useMemo(() => l.filter((t) => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]),
        [c, d] = r.useState(void 0),
        x = o.find((e) => e.key === c),
        { TabBar: _, renderSelectedTab: b } = (0, j.Z)({ tabs: S }, []),
        y = (0, u.e7)([p.Z], () => p.Z.trackTriggers),
        k = r.useCallback((e) => {
            m.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, a.jsxs)('div', {
        ref: n,
        className: i()(T.panel, N.panel),
        children: [
            (0, a.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: N.triggersEnable,
                        children: (0, a.jsx)(h.rsf, {
                            checked: y,
                            onChange: k,
                            className: N.__invalid_toolbarSwitch
                        })
                    }),
                    (0, a.jsx)(h.zxk, {
                        className: N.toolbarButton,
                        look: h.zxk.Looks.BLANK,
                        size: h.zxk.Sizes.ICON,
                        onClick: f.Zw,
                        children: (0, a.jsx)('span', {
                            title: C.intl.string(C.t.VkKicX),
                            children: (0, a.jsx)(h.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': C.intl.string(C.t.VkKicX)
                            })
                        })
                    }),
                    (0, a.jsx)(h.E1j, {
                        className: N.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, a.jsx)(v.Z, {
                columns: E,
                data: o,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key)
            }),
            null != x &&
                (0, a.jsxs)(g.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(_, {}), b({ loggedTrigger: x })]
                })
        ]
    });
}
