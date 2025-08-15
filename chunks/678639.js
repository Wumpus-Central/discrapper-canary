a.d(t, { Z: () => _ }), a(388685), a(642613);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(442837),
    o = a(481060),
    c = a(665149),
    d = a(428530),
    u = a(484036),
    m = a(681619),
    x = a(621060),
    h = a(451429),
    p = a(104444);
function b(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function v(e) {
    let { store: t, dataGetter: a } = e,
        [l, i] = r.useState(a(t));
    return (
        r.useEffect(() => {
            let e = () => i(a(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, n.jsx)(o.zJl, {
            className: p.inspectorContainer,
            children: (0, n.jsx)(d.Z, { data: l }),
        })
    );
}
let f = [
        {
            key: "name",
            cellClassName: p.__invalid_eventColumn,
            render(e) {
                let { store: t } = e;
                return t.getName();
            },
        },
    ],
    g = [
        {
            id: "local",
            name: "Local Variables",
            group: x.v0.NONE,
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, n.jsxs)("div", {
                          className: p.inspectorContainer,
                          children: [
                              "Store is missing ",
                              (0, n.jsx)("code", { children: "__getLocalVars" }),
                              " method.",
                          ],
                      })
                    : (0, n.jsx)(v, {
                          store: t,
                          dataGetter: (e) => e.__getLocalVars(),
                      });
            },
        },
        {
            id: "instance",
            name: "Store Instance",
            group: x.v0.NONE,
            render(e) {
                let { store: t } = e;
                return (0, n.jsx)(v, {
                    store: t,
                    dataGetter: (e) => e,
                });
            },
        },
    ];
function j(e) {
    let { store: t, initialHeight: a } = e,
        { TabBar: r, renderSelectedTab: l } = (0, x.ZP)({ tabs: g }, []);
    return (0, n.jsxs)(u.Z, {
        className: p.subPanel,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, n.jsx)(r, {}),
            (0, n.jsxs)(c.ZP, {
                className: i()(h.headerBar, p.subPanelHeaderBar),
                children: [
                    (0, n.jsx)(c.ZP.Icon, {
                        icon: o.lO_,
                        tooltip: t.getName(),
                    }),
                    (0, n.jsx)(c.ZP.Title, { children: t.getName() }),
                ],
            }),
            l({ store: t }),
        ],
    });
}
function _() {
    let e = r.useRef(null),
        [t, a] = r.useState(""),
        l = s.yh.getAll(),
        c = r
            .useMemo(
                () =>
                    l
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e,
                        }))
                        .sort(b),
                [l],
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [d, u] = r.useState(),
        x = l.find((e) => e._dispatchToken === d);
    return (0, n.jsxs)("div", {
        ref: e,
        className: i()(h.panel, p.panel),
        children: [
            (0, n.jsx)("div", {
                className: p.toolbar,
                children: (0, n.jsx)(o.E1j, {
                    className: p.searchBar,
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, n.jsx)(m.Z, {
                columns: f,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key),
            }),
            null != x &&
                (0, n.jsx)(j, {
                    store: x,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
