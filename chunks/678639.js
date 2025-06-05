n.d(t, { Z: () => _ }), n(388685), n(642613);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(665149),
    d = n(428530),
    u = n(484036),
    m = n(681619),
    x = n(621060),
    p = n(616257),
    h = n(564799);
function b(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function f(e) {
    let { store: t, dataGetter: n } = e,
        [l, i] = r.useState(n(t));
    return (
        r.useEffect(() => {
            let e = () => i(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, a.jsx)(o.zJl, {
            className: h.inspectorContainer,
            children: (0, a.jsx)(d.Z, { data: l })
        })
    );
}
let v = [
        {
            key: 'name',
            cellClassName: h.__invalid_eventColumn,
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
            group: x.v0.NONE,
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, a.jsxs)('div', {
                          className: h.inspectorContainer,
                          children: ['Store is missing ', (0, a.jsx)('code', { children: '__getLocalVars' }), ' method.']
                      })
                    : (0, a.jsx)(f, {
                          store: t,
                          dataGetter: (e) => e.__getLocalVars()
                      });
            }
        },
        {
            id: 'instance',
            name: 'Store Instance',
            group: x.v0.NONE,
            render(e) {
                let { store: t } = e;
                return (0, a.jsx)(f, {
                    store: t,
                    dataGetter: (e) => e
                });
            }
        }
    ];
function j(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: r, renderSelectedTab: l } = (0, x.ZP)({ tabs: g }, []);
    return (0, a.jsxs)(u.Z, {
        className: h.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(c.ZP, {
                className: i()(p.headerBar, h.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(c.ZP.Icon, {
                        icon: o.lO_,
                        tooltip: t.getName()
                    }),
                    (0, a.jsx)(c.ZP.Title, { children: t.getName() })
                ]
            }),
            l({ store: t })
        ]
    });
}
function _() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = s.yh.getAll(),
        c = r
            .useMemo(
                () =>
                    l
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e
                        }))
                        .sort(b),
                [l]
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t)
            ),
        [d, u] = r.useState(),
        x = l.find((e) => e._dispatchToken === d);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(p.panel, h.panel),
        children: [
            (0, a.jsx)('div', {
                className: h.toolbar,
                children: (0, a.jsx)(o.E1j, {
                    className: h.searchBar,
                    size: o.E1j.Sizes.SMALL,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search stores',
                    'aria-label': 'Search stores'
                })
            }),
            (0, a.jsx)(m.Z, {
                columns: v,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key)
            }),
            null != x &&
                (0, a.jsx)(j, {
                    store: x,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
