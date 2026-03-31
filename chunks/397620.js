n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(304384);
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
        [g, _] = s.useState(m ?? t[0]);
    s.useEffect(() => {
        _(m);
    }, [m]);
    let A = s.useMemo(() => {
        let e = g.component;
        return (0, i.jsx)(e, {});
    }, [g]);
    return (0, i.jsxs)("div", {
        className: a()(o.P5, { [o.Vd]: "vertical" === u }),
        children: [
            (0, i.jsx)(r.VQ0, {
                className: a()(o.$H, { [o.Vd]: "vertical" === u }, l),
                selectedItem: g.id,
                onItemSelect: (e) => {
                    _(t.find((t) => t.id === e) ?? t[0]), c?.(e);
                },
                orientation: u,
                type: "vertical" === u ? "side" : "top",
                look: "brand",
                children: t.map((e) =>
                    (0, i.jsx)(
                        r.VQ0.Item,
                        {
                            className: a()(o.Mf, { [o.Vd]: "vertical" === u, [o.wH]: e.id === g.id }),
                            id: e.id,
                            "aria-label": e.title,
                            children: e.title,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(r.VQ0.Panel, {
                id: g.id,
                "aria-labelledby": g.title,
                className: a()(o.NM, n, { [o.Vd]: "vertical" === u }),
                children: A,
            }),
        ],
    });
};
