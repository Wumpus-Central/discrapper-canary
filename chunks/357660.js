n.d(t, { T: () => f }), n(415506);
var l = n(951288),
    i = n(647438),
    r = n(442837),
    s = n(215569),
    u = n(481060),
    o = n(924052),
    a = n(670304),
    c = n(764516);
function d(e) {
    let { notice: t, children: n } = e,
        { showNotice: a, handleStoreUpdate: d } = (0, o.Cu)(),
        f = null == t ? void 0 : t.stores;
    i.useEffect(() => {
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
    let g = i.useMemo(() => {
        if (null == t || !a) return null;
        let { element: e } = t;
        return (0, l.jsx)(u.oXn, {
            className: c.notice,
            children: (0, l.jsx)(e, {}),
        });
    }, [t, a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n,
            (0, l.jsx)(s.W, {
                component: "div",
                children: g,
            }),
        ],
    });
}
function f(e) {
    let { node: t } = e,
        n = t.render;
    if (null != n) return (0, l.jsx)(n, {});
    if (1 !== t.layout.length)
        throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
    return (0, l.jsx)(d, {
        notice: t.notice,
        children: (0, l.jsx)(
            u.w0Z,
            {
                className: c.scroller,
                children: (0, l.jsx)("div", {
                    className: c.panel,
                    children: (0, l.jsx)(a.Z, { node: t.layout[0] }),
                }),
            },
            t.key,
        ),
    });
}
