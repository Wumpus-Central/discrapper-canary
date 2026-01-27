n.d(t, {
    A: () => g,
    _: () => u,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(252452),
    c = n(55029),
    d = n(847568);
let u = (e) => {
        let {
                tabs: t,
                panelClassName: n,
                tabsClassName: l,
                defaultTab: o,
                onTabChange: c,
                orientation: u = "horizontal",
            } = e,
            g = null != o ? o : t[0],
            [h, x] = s.useState(null != g ? g : t[0]);
        s.useEffect(() => {
            x(g);
        }, [g]);
        let A = s.useMemo(() => {
            let e = h.component;
            return (0, i.jsx)(e, {});
        }, [h]);
        return (0, i.jsxs)("div", {
            className: r()(d.P5, {
                [d.Vd]: "vertical" === u,
            }),
            children: [
                (0, i.jsx)(a.VQ0, {
                    className: r()(
                        d.$H,
                        {
                            [d.Vd]: "vertical" === u,
                        },
                        l,
                    ),
                    selectedItem: h.setting,
                    onItemSelect: (e) => {
                        var n;
                        x(null != (n = t.find((t) => t.setting === e)) ? n : t[0]), null == c || c(e);
                    },
                    orientation: u,
                    type: "vertical" === u ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, i.jsx)(
                            a.VQ0.Item,
                            {
                                className: r()(d.Mf, {
                                    [d.Vd]: "vertical" === u,
                                    [d.wH]: e.setting === h.setting,
                                }),
                                id: e.setting,
                                "aria-label": e.title,
                                children: e.title,
                            },
                            e.setting,
                        ),
                    ),
                }),
                (0, i.jsx)(a.VQ0.Panel, {
                    id: h.setting,
                    "aria-labelledby": h.title,
                    className: r()(d.NM, n, {
                        [d.Vd]: "vertical" === u,
                    }),
                    children: A,
                }),
            ],
        });
    },
    g = (e) => {
        var t;
        let {
                tabs: n,
                settingsSection: s,
                parentSetting: l,
                panelClassName: r,
                defaultTabIndex: a,
                onTabChange: d,
                orientation: g = "horizontal",
            } = e,
            { viewableTabs: h, filteredTab: x } = (0, c.A)(n, l),
            A = null != a ? n[a] : null,
            p = null != (t = null != A ? A : x) ? t : h[0];
        return (0, i.jsx)(u, {
            tabs: h,
            orientation: g,
            defaultTab: p,
            onTabChange: (e) => {
                o.A.setSection(s, e), null == d || d(e);
            },
            panelClassName: r,
        });
    };
