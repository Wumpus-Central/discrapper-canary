n.d(t, { A: () => h, _: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(252452),
    d = n(55029),
    c = n(847568);
let u = (e) => {
        let {
                tabs: t,
                panelClassName: n,
                tabsClassName: s,
                defaultTab: o,
                onTabChange: d,
                orientation: u = "horizontal",
            } = e,
            h = o ?? t[0],
            [A, g] = l.useState(h ?? t[0]);
        l.useEffect(() => {
            g(h);
        }, [h]);
        let m = l.useMemo(() => {
            let e = A.component;
            return (0, i.jsx)(e, {});
        }, [A]);
        return (0, i.jsxs)("div", {
            className: a()(c.P5, { [c.Vd]: "vertical" === u }),
            children: [
                (0, i.jsx)(r.VQ0, {
                    className: a()(c.$H, { [c.Vd]: "vertical" === u }, s),
                    selectedItem: A.setting,
                    onItemSelect: (e) => {
                        g(t.find((t) => t.setting === e) ?? t[0]), d?.(e);
                    },
                    orientation: u,
                    type: "vertical" === u ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, i.jsx)(
                            r.VQ0.Item,
                            {
                                className: a()(c.Mf, { [c.Vd]: "vertical" === u, [c.wH]: e.setting === A.setting }),
                                id: e.setting,
                                "aria-label": e.title,
                                children: e.title,
                            },
                            e.setting,
                        ),
                    ),
                }),
                (0, i.jsx)(r.VQ0.Panel, {
                    id: A.setting,
                    "aria-labelledby": A.title,
                    className: a()(c.NM, n, { [c.Vd]: "vertical" === u }),
                    children: m,
                }),
            ],
        });
    },
    h = (e) => {
        let {
                tabs: t,
                settingsSection: n,
                parentSetting: l,
                panelClassName: s,
                defaultTabIndex: a,
                onTabChange: r,
                orientation: c = "horizontal",
            } = e,
            { viewableTabs: h, filteredTab: A } = (0, d.A)(t, l),
            g = (null != a ? t[a] : null) ?? A ?? h[0];
        return (0, i.jsx)(u, {
            tabs: h,
            orientation: c,
            defaultTab: g,
            onTabChange: (e) => {
                o.A.setSection(n, e), r?.(e);
            },
            panelClassName: s,
        });
    };
