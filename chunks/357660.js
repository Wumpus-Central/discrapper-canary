n.d(t, { T: () => f }), n(415506);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(215569),
    a = n(481060),
    c = n(924052),
    s = n(670304),
    u = n(764516);
function d(e) {
    let { notice: t, children: n } = e,
        { showNotice: s, handleStoreUpdate: d } = (0, c.Cu)(),
        f = null == t ? void 0 : t.stores;
    l.useEffect(() => {
        if (null != f) {
            let e = new i.Fh(f, () => {
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
    let b = l.useMemo(() => {
        if (null == t || !s) return null;
        let { element: e } = t;
        return (0, r.jsx)(a.oXn, {
            className: u.notice,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n,
            (0, r.jsx)(o.W, {
                component: "div",
                children: b,
            }),
        ],
    });
}
function f(e) {
    let { node: t } = e,
        n = l.useRef(null);
    if (1 !== t.layout.length) throw Error("Panels do not currently support multiple panes");
    return (0, r.jsx)(d, {
        notice: t.notice,
        children: (0, r.jsx)(
            a.w0Z,
            {
                className: u.scroller,
                children: (0, r.jsx)("div", {
                    className: u.panel,
                    ref: n,
                    children: (0, r.jsx)(a.JcV, {
                        containerRef: n,
                        children: (0, r.jsx)(s.Z, { node: t.layout[0] }),
                    }),
                }),
            },
            t.key,
        ),
    });
}
