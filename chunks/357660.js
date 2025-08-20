n.d(t, { T: () => f }), n(415506);
var i = n(951288),
    l = n(647438),
    r = n(442837),
    o = n(215569),
    s = n(481060),
    a = n(924052),
    u = n(670304),
    c = n(764516);
function d(e) {
    let { notice: t, children: n } = e,
        { showNotice: u, handleStoreUpdate: d } = (0, a.Cu)(),
        f = null == t ? void 0 : t.stores;
    l.useEffect(() => {
        if (null != f) {
            let e = new r.Fh(f, () => {
                d(f);
            });
            return (
                e.attach("SettingPanelNotice"),
                d(f),
                () => {
                    e.detach();
                }
            );
        }
    }, [f, d]);
    let g = l.useMemo(() => {
        if (null == t || !u) return null;
        let { element: e } = t;
        return (0, i.jsx)(s.oXn, {
            className: c.notice,
            children: (0, i.jsx)(e, {}),
        });
    }, [t, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n,
            (0, i.jsx)(o.W, {
                component: "div",
                children: g,
            }),
        ],
    });
}
function f(e) {
    let { node: t } = e,
        n = t.render;
    if (null != n) return (0, i.jsx)(n, {});
    if (1 !== t.layout.length)
        throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
    return (0, i.jsx)(d, {
        notice: t.notice,
        children: (0, i.jsx)(s.w0Z, {
            className: c.scroller,
            children: (0, i.jsx)("div", {
                className: c.panel,
                children: (0, i.jsx)(u.Z, { node: t.layout[0] }),
            }),
        }),
    });
}
