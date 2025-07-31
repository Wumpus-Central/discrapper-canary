(a.d(t, { Z: () => S }), a(388685), a(642613));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(658722),
    o = a.n(s),
    c = a(913527),
    d = a.n(c),
    u = a(442837),
    m = a(755721),
    x = a(481060),
    p = a(570140),
    h = a(665149),
    b = a(55935),
    f = a(120816),
    v = a(31336),
    g = a(257785),
    j = a(484036),
    _ = a(681619),
    y = a(621060),
    C = a(388032),
    O = a(459100),
    T = a(616257);
let N = [
        {
            key: 'id',
            cellClassName: O.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: O.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: O.locationColumn,
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
            group: y.v0.NONE,
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: t, descriptor: a, exposureType: r, excluded: l, timestamp: s, location: o, previouslyTracked: c }
                    } = e,
                    u = d()(s);
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(h.ZP, {
                            className: i()(T.headerBar, O.subPanelHeaderBar),
                            children: [
                                (0, n.jsx)(h.ZP.Icon, {
                                    icon: x.IeX,
                                    tooltip: t
                                }),
                                (0, n.jsx)(h.ZP.Title, { children: t })
                            ]
                        }),
                        (0, n.jsxs)(g.E, {
                            className: O.commonProperties,
                            children: [
                                (0, n.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, n.jsx)('time', {
                                        dateTime: s.toISOString(),
                                        title: (0, b.vc)(u, 'LLLL'),
                                        children: (0, b.Y4)(u)
                                    })
                                }),
                                'guild' === a.type &&
                                    (0, n.jsx)(g.Z9, {
                                        name: 'Guild ID',
                                        children: (0, n.jsx)('code', { children: a.guildId })
                                    }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Bucket',
                                    children: (0, n.jsx)('code', { children: a.bucket })
                                }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Revision',
                                    children: (0, n.jsx)('code', { children: a.revision })
                                }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Override',
                                    children: (0, n.jsx)(g.wl, { value: a.override })
                                }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Exposure type',
                                    children: (0, n.jsx)('code', { children: r })
                                }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Excluded',
                                    children: (0, n.jsx)(g.wl, { value: l })
                                }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, n.jsx)(g.wl, { value: c })
                                }),
                                (0, n.jsx)(g.Z9, {
                                    name: 'Location',
                                    children: (0, n.jsx)('code', { children: o })
                                })
                            ]
                        })
                    ]
                });
            }
        }
    ];
function S() {
    let [e, t] = r.useState(''),
        a = r.useRef(null),
        l = (0, u.Wu)([f.Z], () => f.Z.loggedTriggers),
        s = r.useMemo(() => l.filter((t) => 0 === e.length || o()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]),
        [c, d] = r.useState(void 0),
        h = s.find((e) => e.key === c),
        { TabBar: b, renderSelectedTab: g } = (0, y.ZP)({ tabs: E }, []),
        S = (0, u.e7)([f.Z], () => f.Z.trackTriggers),
        P = r.useCallback((e) => {
            p.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, n.jsxs)('div', {
        ref: a,
        className: i()(T.panel, O.panel),
        children: [
            (0, n.jsxs)('div', {
                className: O.toolbar,
                children: [
                    (0, n.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: O.triggersEnable,
                        children: (0, n.jsx)(x.rsf, {
                            checked: S,
                            onChange: P,
                            className: O.__invalid_toolbarSwitch
                        })
                    }),
                    (0, n.jsx)(m.zx, {
                        className: O.toolbarButton,
                        look: m.zx.Looks.BLANK,
                        size: m.zx.Sizes.ICON,
                        onClick: v.Zw,
                        children: (0, n.jsx)('span', {
                            title: C.intl.string(C.t.VkKicX),
                            children: (0, n.jsx)(x.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': C.intl.string(C.t.VkKicX)
                            })
                        })
                    }),
                    (0, n.jsx)(x.E1j, {
                        size: 'sm',
                        className: O.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, n.jsx)(_.Z, {
                columns: N,
                data: s,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key)
            }),
            null != h &&
                (0, n.jsxs)(j.Z, {
                    className: O.subPanel,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, n.jsx)(b, {}), g({ loggedTrigger: h })]
                })
        ]
    });
}
