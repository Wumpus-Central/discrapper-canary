n.d(t, { T: () => f }), n(415506);
var r = n(951288),
    o = n(647438),
    l = n(442837),
    i = n(215569),
    a = n(481060),
    s = n(924052),
    c = n(670304),
    u = n(880745);
function d(e) {
    let { notice: t, children: n } = e,
        { showNotice: c, handleStoreUpdate: d } = (0, s.Cu)(),
        f = null == t ? void 0 : t.stores;
    o.useEffect(() => {
        if (null != f) {
            let e = new l.Fh(f, () => {
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
    let b = o.useMemo(() => {
        if (null == t || !c) return null;
        let { element: e } = t;
        return (0, r.jsx)(a.oXn, {
            className: u.notice,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n,
            (0, r.jsx)(i.W, {
                component: "div",
                children: b,
            }),
        ],
    });
}
function f(e) {
    let { node: t } = e,
        n = t.render,
        l = o.useRef(null);
    if (null != n) return (0, r.jsx)(n, {});
    if (1 !== t.layout.length)
        throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
    return (0, r.jsx)(d, {
        notice: t.notice,
        children: (0, r.jsx)(
            a.w0Z,
            {
                className: u.scroller,
                children: (0, r.jsx)("div", {
                    className: u.panel,
                    ref: l,
                    children: (0, r.jsx)(a.JcV, {
                        containerRef: l,
                        children: (0, r.jsx)(c.Z, { node: t.layout[0] }),
                    }),
                }),
            },
            t.key,
        ),
    });
}
