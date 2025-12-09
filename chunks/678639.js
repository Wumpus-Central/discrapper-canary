n.d(t, { Z: () => _ }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(665149),
    d = n(428530),
    u = n(484036),
    m = n(681619),
    p = n(621060),
    h = n(451429),
    x = n(104444);
function f(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function g(e) {
    let { store: t, dataGetter: n } = e,
        [i, l] = r.useState(n(t));
    return (
        r.useEffect(() => {
            let e = () => l(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, a.jsx)(o.zJl, {
            className: x.inspectorContainer,
            children: (0, a.jsx)(d.Z, { data: i }),
        })
    );
}
let b = [
        {
            key: "name",
            cellClassName: x.__invalid_eventColumn,
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
                          className: x.inspectorContainer,
                          children: [
                              "Store is missing ",
                              (0, a.jsx)("code", { children: "__getLocalVars" }),
                              " method.",
                          ],
                      })
                    : (0, a.jsx)(g, {
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
                return (0, a.jsx)(g, {
                    store: t,
                    dataGetter: (e) => e,
                });
            },
        },
    ];
function j(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: r, renderSelectedTab: i } = (0, p.ZP)({ tabs: v }, []);
    return (0, a.jsxs)(u.Z, {
        className: x.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(c.ZP, {
                className: l()(h.headerBar, x.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(c.ZP.Icon, {
                        icon: o.lO_,
                        tooltip: t.getName(),
                    }),
                    (0, a.jsx)(c.ZP.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function _() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        i = s.yh.getAll(),
        c = r
            .useMemo(
                () =>
                    i
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e,
                        }))
                        .sort(f),
                [i],
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [d, u] = r.useState(),
        p = i.find((e) => e._dispatchToken === d);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(h.panel, x.panel),
        children: [
            (0, a.jsx)("div", {
                className: x.toolbar,
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
                columns: b,
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
