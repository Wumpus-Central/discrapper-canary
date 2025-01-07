n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
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
    f = n(55935),
    p = n(120816),
    b = n(31336),
    g = n(257785),
    v = n(484036),
    j = n(681619),
    C = n(621060),
    T = n(388032),
    _ = n(931933),
    S = n(941469);
let N = [
        {
            key: 'id',
            cellClassName: _.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: _.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: _.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            }
        }
    ],
    y = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: t, descriptor: n, exposureType: a, excluded: l, timestamp: o, location: s, previouslyTracked: c }
                    } = e,
                    u = d()(o);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(x.ZP, {
                            className: i()(S.headerBar, _.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(x.ZP.Icon, {
                                    icon: h.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(x.ZP.Title, { children: t })
                            ]
                        }),
                        (0, r.jsxs)(g.E, {
                            className: _.commonProperties,
                            children: [
                                (0, r.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: o.toISOString(),
                                        title: (0, f.vc)(u, 'LLLL'),
                                        children: (0, f.Y4)(u)
                                    })
                                }),
                                'guild' === n.type &&
                                    (0, r.jsx)(g.Z9, {
                                        name: 'Guild ID',
                                        children: (0, r.jsx)('code', { children: n.guildId })
                                    }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Bucket',
                                    children: (0, r.jsx)('code', { children: n.bucket })
                                }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Revision',
                                    children: (0, r.jsx)('code', { children: n.revision })
                                }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Override',
                                    children: (0, r.jsx)(g.wl, { value: n.override })
                                }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Exposure type',
                                    children: (0, r.jsx)('code', { children: a })
                                }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Excluded',
                                    children: (0, r.jsx)(g.wl, { value: l })
                                }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, r.jsx)(g.wl, { value: c })
                                }),
                                (0, r.jsx)(g.Z9, {
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
function k() {
    let [e, t] = a.useState(''),
        n = a.useRef(null),
        l = (0, u.Wu)([p.Z], () => p.Z.loggedTriggers),
        o = a.useMemo(() => l.filter((t) => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]),
        [c, d] = a.useState(void 0),
        x = o.find((e) => e.key === c),
        { TabBar: f, renderSelectedTab: g } = (0, C.Z)({ tabs: y }, []),
        k = (0, u.e7)([p.Z], () => p.Z.trackTriggers),
        I = a.useCallback((e) => {
            m.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, r.jsxs)('div', {
        ref: n,
        className: i()(S.panel, _.panel),
        children: [
            (0, r.jsxs)('div', {
                className: _.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: _.triggersEnable,
                        children: (0, r.jsx)(h.Switch, {
                            checked: k,
                            onChange: I,
                            className: _.__invalid_toolbarSwitch
                        })
                    }),
                    (0, r.jsx)(h.Button, {
                        className: _.toolbarButton,
                        look: h.Button.Looks.BLANK,
                        size: h.Button.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, r.jsx)('span', {
                            title: T.intl.string(T.t.VkKicX),
                            children: (0, r.jsx)(h.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': T.intl.string(T.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)(h.SearchBar, {
                        className: _.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, r.jsx)(j.Z, {
                columns: N,
                data: o,
                selectedRowKey: c,
                onClickRow: (e) => d(e.key)
            }),
            null != x &&
                (0, r.jsxs)(v.Z, {
                    className: _.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(f, {}), g({ loggedTrigger: x })]
                })
        ]
    });
}
