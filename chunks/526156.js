n.d(t, {
    Z: () => f,
    z: () => d,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(230711),
    c = n(528084),
    u = n(9352);
let d = (e) => {
        let {
                tabs: t,
                panelClassName: n,
                tabsClassName: o,
                defaultTab: l,
                onTabChange: c,
                orientation: d = "horizontal",
            } = e,
            f = null != l ? l : t[0],
            [p, _] = i.useState(null != f ? f : t[0]);
        i.useEffect(() => {
            _(f);
        }, [f]);
        let m = (e) => {
                let t = e.component;
                return "function" == typeof t ? (0, r.jsx)(t, {}) : t;
            },
            h = (e) => {
                var n;
                _(null != (n = t.find((t) => t.setting === e)) ? n : t[0]), null == c || c(e);
            };
        return (0, r.jsxs)("div", {
            className: a()(u.tabbedSettingsContainer, { [u.vertical]: "vertical" === d }),
            children: [
                (0, r.jsx)(s.njP, {
                    className: a()(u.tabBar, { [u.vertical]: "vertical" === d }, o),
                    selectedItem: p.setting,
                    onItemSelect: h,
                    orientation: d,
                    type: "vertical" === d ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, r.jsx)(
                            s.njP.Item,
                            {
                                className: a()(u.tab, {
                                    [u.vertical]: "vertical" === d,
                                    [u.selected]: e.setting === p.setting,
                                }),
                                id: e.setting,
                                "aria-label": e.title,
                                children: e.title,
                            },
                            e.setting,
                        ),
                    ),
                }),
                (0, r.jsx)(s.njP.Panel, {
                    id: p.setting,
                    "aria-labelledby": p.title,
                    className: a()(u.tabBarPanel, n, { [u.vertical]: "vertical" === d }),
                    children: m(p),
                }),
            ],
        });
    },
    f = (e) => {
        var t;
        let {
                tabs: n,
                settingsSection: i,
                parentSetting: o,
                panelClassName: a,
                defaultTabIndex: s,
                onTabChange: u,
                orientation: f = "horizontal",
            } = e,
            { viewableTabs: p, filteredTab: _ } = (0, c.a)(n, o),
            m = null != s ? n[s] : null,
            h = null != (t = null != m ? m : _) ? t : p[0],
            g = (e) => {
                l.Z.setSection(i, e), null == u || u(e);
            };
        return (0, r.jsx)(d, {
            tabs: p,
            orientation: f,
            defaultTab: h,
            onTabChange: g,
            panelClassName: a,
        });
    };
