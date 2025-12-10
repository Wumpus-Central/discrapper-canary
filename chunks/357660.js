n.d(t, { T: () => g }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(215569),
    s = n(481060),
    l = n(924052),
    c = n(28682),
    u = n(996435),
    d = n(700425),
    f = n(670304),
    p = n(764516);
function _(e) {
    let { notice: t, children: n } = e,
        { showNotice: c, handleStoreUpdate: u } = (0, l.Cu)(),
        d = null == t ? void 0 : t.stores;
    i.useEffect(() => {
        if (null != d) {
            let e = new a.Fh(d, () => {
                u(d);
            });
            return (
                e.attach("SettingPanelNotice"),
                u(d),
                () => {
                    e.detach();
                }
            );
        }
    }, [d, u]);
    let f = i.useMemo(() => {
        if (null == t || !c) return null;
        let { element: e } = t;
        return (0, r.jsx)(s.oXn, {
            className: p.notice,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n,
            (0, r.jsx)(o.W, {
                component: "div",
                children: f,
            }),
        ],
    });
}
function m(e) {
    var t, n;
    let { panelKey: a, layout: o, notice: l } = e,
        c = i.useRef(null),
        d =
            null !=
            (t = u.Z.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(a);
            }))
                ? t
                : o[0].key;
    i.useEffect(() => {
        let e = u.Z.getField("currentTabKeys");
        if (o.some((t) => t.key === e.get(a))) return;
        let t = new Map(e);
        t.set(a, o[0].key), u.Z.setState({ currentTabKeys: t });
    }, [o, a]);
    let m = (e) => {
            let t = new Map(u.Z.getField("currentTabKeys"));
            t.set(a, e), u.Z.setState({ currentTabKeys: t });
        },
        h = null != (n = o.find((e) => e.key === d)) ? n : o[0];
    return (0, r.jsx)(_, {
        notice: l,
        children: (0, r.jsx)(
            s.w0Z,
            {
                className: p.scroller,
                children: (0, r.jsx)("div", {
                    className: p.panel,
                    ref: c,
                    children: (0, r.jsxs)(s.JcV, {
                        containerRef: c,
                        children: [
                            (0, r.jsx)(s.njP, {
                                className: p.tabBar,
                                selectedItem: d,
                                onItemSelect: m,
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: o.map((e) => {
                                    let { key: t, useTitle: n } = e;
                                    return (0, r.jsx)(
                                        s.njP.Item,
                                        {
                                            id: t,
                                            children: n(),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(s.njP.Panel, {
                                id: d,
                                children: (0, r.jsx)(f.Z, { node: h }),
                            }),
                        ],
                    }),
                }),
            },
            a,
        ),
    });
}
function h(e) {
    let { panelKey: t, notice: n, layout: a } = e,
        o = i.useRef(null),
        l = i.useRef(null);
    return (
        (0, d.i)(t, a, o),
        (0, r.jsx)(_, {
            notice: n,
            children: (0, r.jsx)(
                s.w0Z,
                {
                    "data-settings-panel-scroller": !0,
                    className: p.scroller,
                    ref: o,
                    children: (0, r.jsx)("div", {
                        className: p.panel,
                        ref: l,
                        children: (0, r.jsx)(s.JcV, {
                            containerRef: l,
                            children: (0, r.jsx)(f.Z, { node: a[0] }),
                        }),
                    }),
                },
                t,
            ),
        })
    );
}
function g(e) {
    let { node: t } = e,
        { layout: n } = t;
    if ((0, c.sp)(n))
        return (0, r.jsx)(m, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    if ((0, c.iU)(n))
        return (0, r.jsx)(h, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    throw Error("Panels must have a single pane or a list of tabs");
}
