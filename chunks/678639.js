n.d(t, { Z: () => j }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(665149),
    d = n(428530),
    u = n(484036),
    m = n(681619),
    h = n(621060),
    x = n(941469),
    p = n(668055);
function f(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function b(e) {
    let { store: t, dataGetter: n } = e,
        [r, i] = l.useState(n(t));
    return (
        l.useEffect(() => {
            let e = () => i(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, a.jsx)(s.zJl, {
            className: p.inspectorContainer,
            children: (0, a.jsx)(d.Z, { data: r })
        })
    );
}
let _ = [
        {
            key: 'name',
            cellClassName: p.__invalid_eventColumn,
            render(e) {
                let { store: t } = e;
                return t.getName();
            }
        }
    ],
    g = [
        {
            id: 'local',
            name: 'Local Variables',
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, a.jsxs)('div', {
                          className: p.inspectorContainer,
                          children: ['Store is missing ', (0, a.jsx)('code', { children: '__getLocalVars' }), ' method.']
                      })
                    : (0, a.jsx)(b, {
                          store: t,
                          dataGetter: (e) => e.__getLocalVars()
                      });
            }
        },
        {
            id: 'instance',
            name: 'Store Instance',
            render(e) {
                let { store: t } = e;
                return (0, a.jsx)(b, {
                    store: t,
                    dataGetter: (e) => e
                });
            }
        }
    ];
function v(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: l, renderSelectedTab: r } = (0, h.Z)({ tabs: g }, []);
    return (0, a.jsxs)(u.Z, {
        className: p.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(l, {}),
            (0, a.jsxs)(c.ZP, {
                className: i()(x.headerBar, p.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(c.ZP.Icon, {
                        icon: s.lO_,
                        tooltip: t.getName()
                    }),
                    (0, a.jsx)(c.ZP.Title, { children: t.getName() })
                ]
            }),
            r({ store: t })
        ]
    });
}
function j() {
    let e = l.useRef(null),
        [t, n] = l.useState(''),
        r = o.yh.getAll(),
        c = l
            .useMemo(
                () =>
                    r
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e
                        }))
                        .sort(f),
                [r]
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t)
            ),
        [d, u] = l.useState(),
        h = r.find((e) => e._dispatchToken === d);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(x.panel, p.panel),
        children: [
            (0, a.jsx)('div', {
                className: p.toolbar,
                children: (0, a.jsx)(s.E1j, {
                    className: p.searchBar,
                    size: s.E1j.Sizes.SMALL,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search stores',
                    'aria-label': 'Search stores'
                })
            }),
            (0, a.jsx)(m.Z, {
                columns: _,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key)
            }),
            null != h &&
                (0, a.jsx)(v, {
                    store: h,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
