n.d(t, {
    Z: () => f,
    z: () => d,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(230711),
    c = n(528084),
    u = n(9352);
let d = (e) => {
        let { tabs: t, panelClassName: n, defaultTab: a, onTabChange: l, orientation: c = "horizontal" } = e,
            d = null != a ? a : t[0],
            [f, _] = i.useState(null != d ? d : t[0]);
        i.useEffect(() => {
            _(d);
        }, [d]);
        let p = (e) => {
                let t = e.component;
                return "function" == typeof t ? (0, r.jsx)(t, {}) : t;
            },
            h = (e) => {
                var n;
                _(null != (n = t.find((t) => t.setting === e)) ? n : t[0]), null == l || l(e);
            };
        return (0, r.jsxs)("div", {
            className: o()(u.tabbedSettingsContainer, { [u.vertical]: "vertical" === c }),
            children: [
                (0, r.jsx)(s.njP, {
                    className: o()(u.tabBar, { [u.vertical]: "vertical" === c }),
                    selectedItem: f.setting,
                    onItemSelect: h,
                    orientation: c,
                    type: "vertical" === c ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, r.jsx)(
                            s.njP.Item,
                            {
                                className: o()(u.tab, {
                                    [u.vertical]: "vertical" === c,
                                    [u.selected]: e.setting === f.setting,
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
                    id: f.setting,
                    "aria-labelledby": f.title,
                    className: o()(u.tabBarPanel, n, { [u.vertical]: "vertical" === c }),
                    children: p(f),
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
                panelClassName: o,
                defaultTabIndex: s,
                onTabChange: u,
                orientation: f = "horizontal",
            } = e,
            { viewableTabs: _, filteredTab: p } = (0, c.a)(n, a),
            h = null != s ? n[s] : null,
            m = null != (t = null != h ? h : p) ? t : _[0],
            g = (e) => {
                l.Z.setSection(i, e), null == u || u(e);
            };
        return (0, r.jsx)(d, {
            tabs: _,
            orientation: f,
            defaultTab: m,
            onTabChange: g,
            panelClassName: o,
        });
    };
