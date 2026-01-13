n.d(t, {
    Z: () => f,
    z: () => d,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(230711),
    c = n(528084),
    u = n(964694);
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
        let m = i.useMemo(() => {
                let e = p.component;
                return (0, r.jsx)(e, {});
            }, [p]),
            h = (e) => {
                var n;
                _(null != (n = t.find((t) => t.setting === e)) ? n : t[0]), null == c || c(e);
            };
        return (0, r.jsxs)("div", {
            className: o()(u.tabbedSettingsContainer, { [u.vertical]: "vertical" === d }),
            children: [
                (0, r.jsx)(s.njP, {
                    className: o()(u.tabBar, { [u.vertical]: "vertical" === d }, a),
                    selectedItem: p.setting,
                    onItemSelect: h,
                    orientation: d,
                    type: "vertical" === d ? "side" : "top",
                    look: "brand",
                    children: t.map((e) =>
                        (0, r.jsx)(
                            s.njP.Item,
                            {
                                className: o()(u.tab, {
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
                    className: o()(u.tabBarPanel, n, { [u.vertical]: "vertical" === d }),
                    children: m,
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
            { viewableTabs: p, filteredTab: _ } = (0, c.a)(n, a),
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
            panelClassName: o,
        });
    };
