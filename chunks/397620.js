n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(65125);
let d = function (e) {
    let {
            tabs: t,
            panelClassName: n,
            tabsClassName: l,
            defaultTab: d,
            onTabChange: c,
            orientation: u = "horizontal",
        } = e,
        m = d ?? t[0],
        [_, g] = s.useState(m ?? t[0]);
    s.useEffect(() => {
        g(m);
    }, [m]);
    let x = s.useMemo(() => {
        let e = _.component;
        return (0, i.jsx)(e, {});
    }, [_]);
    return (0, i.jsxs)("div", {
        className: a()(o.P5, { [o.Vd]: "vertical" === u }),
        children: [
            (0, i.jsx)(r.VQ0, {
                className: a()(o.$H, { [o.Vd]: "vertical" === u }, l),
                selectedItem: _.id,
                onItemSelect: (e) => {
                    g(t.find((t) => t.id === e) ?? t[0]), c?.(e);
                },
                orientation: u,
                type: "vertical" === u ? "side" : "top",
                look: "brand",
                children: t.map((e) =>
                    (0, i.jsx)(
                        r.VQ0.Item,
                        {
                            className: a()(o.Mf, { [o.Vd]: "vertical" === u, [o.wH]: e.id === _.id }),
                            id: e.id,
                            "aria-label": e.title,
                            children: e.title,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(r.VQ0.Panel, {
                id: _.id,
                "aria-labelledby": _.title,
                className: a()(o.NM, n, { [o.Vd]: "vertical" === u }),
                children: x,
            }),
        ],
    });
};
