n.d(t, {
    A: () => f,
    _: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(252452),
    c = n(55029),
    u = n(847568);
let d = (e) => {
        let {
                tabs: t,
                panelClassName: n,
                tabsClassName: a,
                defaultTab: l,
                onTabChange: c,
                orientation: d = "horizontal",
            } = e,
            f = null != l ? l : t[0],
            [p, _] = i.useState(null != f ? f : t[0]);
        i.useEffect(() => {
            _(f);
        }, [f]);
        let h = i.useMemo(() => {
                let e = p.component;
                return (0, r.jsx)(e, {});
            }, [p]),
            m = (e) => {
                var n;
                _(null != (n = t.find((t) => t.setting === e)) ? n : t[0]), null == c || c(e);
            };
        return (0, r.jsxs)("div", {
            className: s()(u.P5, { [u.Vd]: "vertical" === d }),
            children: [
                (0, r.jsx)(o.VQ0, {
                    className: s()(u.$H, { [u.Vd]: "vertical" === d }, a),
                    selectedItem: p.setting,
                    onItemSelect: m,
                    orientation: d,
                    type: "vertical" === d ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, r.jsx)(
                            o.VQ0.Item,
                            {
                                className: s()(u.Mf, {
                                    [u.Vd]: "vertical" === d,
                                    [u.wH]: e.setting === p.setting,
                                }),
                                id: e.setting,
                                "aria-label": e.title,
                                children: e.title,
                            },
                            e.setting,
                        ),
                    ),
                }),
                (0, r.jsx)(o.VQ0.Panel, {
                    id: p.setting,
                    "aria-labelledby": p.title,
                    className: s()(u.NM, n, { [u.Vd]: "vertical" === d }),
                    children: h,
                }),
            ],
        });
    },
    f = (e) => {
        var t;
        let {
                tabs: n,
                settingsSection: i,
                parentSetting: a,
                panelClassName: s,
                defaultTabIndex: o,
                onTabChange: u,
                orientation: f = "horizontal",
            } = e,
            { viewableTabs: p, filteredTab: _ } = (0, c.A)(n, a),
            h = null != o ? n[o] : null,
            m = null != (t = null != h ? h : _) ? t : p[0],
            g = (e) => {
                l.A.setSection(i, e), null == u || u(e);
            };
        return (0, r.jsx)(d, {
            tabs: p,
            orientation: f,
            defaultTab: m,
            onTabChange: g,
            panelClassName: s,
        });
    };
