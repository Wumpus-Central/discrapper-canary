n.d(t, { T: () => p }), n(415506);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(215569),
    a = n(481060),
    s = n(924052),
    c = n(700425),
    u = n(670304),
    d = n(764516);
function f(e) {
    let { notice: t, children: n } = e,
        { showNotice: c, handleStoreUpdate: u } = (0, s.Cu)(),
        f = null == t ? void 0 : t.stores;
    l.useEffect(() => {
        if (null != f) {
            let e = new i.Fh(f, () => {
                u(f);
            });
            return (
                e.attach("SettingPanelNotice"),
                u(f),
                () => {
                    e.detach();
                }
            );
        }
    }, [f, u]);
    let p = l.useMemo(() => {
        if (null == t || !c) return null;
        let { element: e } = t;
        return (0, r.jsx)(a.oXn, {
            className: d.notice,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n,
            (0, r.jsx)(o.W, {
                component: "div",
                children: p,
            }),
        ],
    });
}
function p(e) {
    let { node: t } = e,
        n = l.useRef(null),
        i = l.useRef(null);
    if (1 !== t.layout.length) throw Error("Panels do not currently support multiple panes");
    return (
        (0, c.i)(t, i),
        (0, r.jsx)(f, {
            notice: t.notice,
            children: (0, r.jsx)(
                a.w0Z,
                {
                    "data-settings-panel-scroller": !0,
                    className: d.scroller,
                    ref: i,
                    children: (0, r.jsx)("div", {
                        className: d.panel,
                        ref: n,
                        children: (0, r.jsx)(a.JcV, {
                            containerRef: n,
                            children: (0, r.jsx)(u.Z, { node: t.layout[0] }),
                        }),
                    }),
                },
                t.key,
            ),
        })
    );
}
