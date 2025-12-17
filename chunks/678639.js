n.d(t, { Z: () => y }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(665149),
    d = n(428530),
    u = n(975775),
    m = n(681619),
    p = n(621060),
    h = n(663618),
    f = n(850409);
function x(e, t) {
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
        (0, a.jsx)(o.zJl, {
            className: f.inspectorContainer,
            children: (0, a.jsx)(d.Z, { data: l }),
        })
    );
}
let g = [
        {
            key: "name",
            cellClassName: f.__invalid_eventColumn,
            render(e) {
                let { store: t } = e;
                return t.getName();
            },
        },
    ],
    v = [
        {
            id: "local",
            name: "Local Variables",
            group: p.v0.NONE,
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, a.jsxs)("div", {
                          className: f.inspectorContainer,
                          children: [
                              "Store is missing ",
                              (0, a.jsx)("code", { children: "__getLocalVars" }),
                              " method.",
                          ],
                      })
                    : (0, a.jsx)(b, {
                          store: t,
                          dataGetter: (e) => e.__getLocalVars(),
                      });
            },
        },
        {
            id: "instance",
            name: "Store Instance",
            group: p.v0.NONE,
            render(e) {
                let { store: t } = e;
                return (0, a.jsx)(b, {
                    store: t,
                    dataGetter: (e) => e,
                });
            },
        },
    ];
function j(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: r, renderSelectedTab: l } = (0, p.ZP)({ tabs: v }, []);
    return (0, a.jsxs)(u.Z, {
        className: f.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(c.ZP, {
                className: i()(h.headerBar, f.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(c.ZP.Icon, {
                        icon: o.lO_,
                        tooltip: t.getName(),
                    }),
                    (0, a.jsx)(c.ZP.Title, { children: t.getName() }),
                ],
            }),
            l({ store: t }),
        ],
    });
}
function y() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        l = s.yh.getAll(),
        c = r
            .useMemo(
                () =>
                    l
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e,
                        }))
                        .sort(x),
                [l],
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [d, u] = r.useState(),
        p = l.find((e) => e._dispatchToken === d);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(h.panel, f.panel),
        children: [
            (0, a.jsx)("div", {
                className: f.toolbar,
                children: (0, a.jsx)(o.E1j, {
                    size: "sm",
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, a.jsx)(m.Z, {
                columns: g,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key),
            }),
            null != p &&
                (0, a.jsx)(j, {
                    store: p,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
