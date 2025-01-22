n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(665149),
    d = n(428530),
    u = n(484036),
    h = n(681619),
    m = n(621060),
    x = n(941469),
    f = n(668055);
function p(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function b(e) {
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
        (0, a.jsx)(s.ScrollerThin, {
            className: f.inspectorContainer,
            children: (0, a.jsx)(d.Z, { data: l })
        })
    );
}
let g = [
        {
            key: 'name',
            cellClassName: f.__invalid_eventColumn,
            render(e) {
                let { store: t } = e;
                return t.getName();
            }
        }
    ],
    v = [
        {
            id: 'local',
            name: 'Local Variables',
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, a.jsxs)('div', {
                          className: f.inspectorContainer,
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
function j(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: r, renderSelectedTab: l } = (0, m.Z)({ tabs: v }, []);
    return (0, a.jsxs)(u.Z, {
        className: f.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(c.ZP, {
                className: i()(x.headerBar, f.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(c.ZP.Icon, {
                        icon: s.TagIcon,
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
        l = o.yh.getAll(),
        c = r
            .useMemo(
                () =>
                    l
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e
                        }))
                        .sort(p),
                [l]
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t)
            ),
        [d, u] = r.useState(),
        m = l.find((e) => e._dispatchToken === d);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(x.panel, f.panel),
        children: [
            (0, a.jsx)('div', {
                className: f.toolbar,
                children: (0, a.jsx)(s.SearchBar, {
                    className: f.searchBar,
                    size: s.SearchBar.Sizes.SMALL,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search stores',
                    'aria-label': 'Search stores'
                })
            }),
            (0, a.jsx)(h.Z, {
                columns: g,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key)
            }),
            null != m &&
                (0, a.jsx)(j, {
                    store: m,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
