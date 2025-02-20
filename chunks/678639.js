n.d(t, { Z: () => j }), n(47120), n(230036);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(665149),
    d = n(428530),
    u = n(484036),
    h = n(681619),
    m = n(621060),
    x = n(841699),
    p = n(843777);
function f(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function b(e) {
    let { store: t, dataGetter: n } = e,
        [i, l] = a.useState(n(t));
    return (
        a.useEffect(() => {
            let e = () => l(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, r.jsx)(s.zJl, {
            className: p.inspectorContainer,
            children: (0, r.jsx)(d.Z, { data: i })
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
                    ? (0, r.jsxs)('div', {
                          className: p.inspectorContainer,
                          children: ['Store is missing ', (0, r.jsx)('code', { children: '__getLocalVars' }), ' method.']
                      })
                    : (0, r.jsx)(b, {
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
                return (0, r.jsx)(b, {
                    store: t,
                    dataGetter: (e) => e
                });
            }
        }
    ];
function v(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: a, renderSelectedTab: i } = (0, m.Z)({ tabs: g }, []);
    return (0, r.jsxs)(u.Z, {
        className: p.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(a, {}),
            (0, r.jsxs)(c.ZP, {
                className: l()(x.headerBar, p.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: s.lO_,
                        tooltip: t.getName()
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: t.getName() })
                ]
            }),
            i({ store: t })
        ]
    });
}
function j() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        i = o.yh.getAll(),
        c = a
            .useMemo(
                () =>
                    i
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e
                        }))
                        .sort(f),
                [i]
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t)
            ),
        [d, u] = a.useState(),
        m = i.find((e) => e._dispatchToken === d);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(x.panel, p.panel),
        children: [
            (0, r.jsx)('div', {
                className: p.toolbar,
                children: (0, r.jsx)(s.E1j, {
                    className: p.searchBar,
                    size: s.E1j.Sizes.SMALL,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search stores',
                    'aria-label': 'Search stores'
                })
            }),
            (0, r.jsx)(h.Z, {
                columns: _,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key)
            }),
            null != m &&
                (0, r.jsx)(v, {
                    store: m,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
