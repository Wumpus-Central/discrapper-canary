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
    u = n(90673);
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
            [_, p] = i.useState(null != f ? f : t[0]);
        i.useEffect(() => {
            p(f);
        }, [f]);
        let h = (e) => {
                let t = e.component;
                return "function" == typeof t ? (0, r.jsx)(t, {}) : t;
            },
            m = (e) => {
                var n;
                p(null != (n = t.find((t) => t.setting === e)) ? n : t[0]), null == c || c(e);
            };
        return (0, r.jsxs)("div", {
            className: o()(u.tabbedSettingsContainer, { [u.vertical]: "vertical" === d }),
            children: [
                (0, r.jsx)(s.njP, {
                    className: o()(u.tabBar, { [u.vertical]: "vertical" === d }, a),
                    selectedItem: _.setting,
                    onItemSelect: m,
                    orientation: d,
                    type: "vertical" === d ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, r.jsx)(
                            s.njP.Item,
                            {
                                className: o()(u.tab, {
                                    [u.vertical]: "vertical" === d,
                                    [u.selected]: e.setting === _.setting,
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
                    id: _.setting,
                    "aria-labelledby": _.title,
                    className: o()(u.tabBarPanel, n, { [u.vertical]: "vertical" === d }),
                    children: h(_),
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
