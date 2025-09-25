n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(230711),
    l = n(528084),
    c = n(90673);
let u = (e) => {
    var t;
    let {
            tabs: n,
            settingsSection: i,
            parentSetting: u,
            panelClassName: d,
            defaultTabIndex: f,
            onTabChange: _,
            orientation: p = "horizontal",
        } = e,
        { viewableTabs: h, filteredTab: m } = (0, l.a)(n, u),
        g = null != f ? n[f] : null,
        E = null != (t = null != g ? g : m) ? t : h[0],
        b = (e) => {
            let t = e.component;
            return "function" == typeof t ? (0, r.jsx)(t, {}) : t;
        },
        y = (e) => {
            s.Z.setSection(i, e), null == _ || _(e);
        };
    return (0, r.jsxs)("div", {
        className: a()(c.tabbedSettingsContainer, { [c.vertical]: "vertical" === p }),
        children: [
            (0, r.jsx)(o.njP, {
                className: a()(c.tabBar, { [c.vertical]: "vertical" === p }),
                selectedItem: E.setting,
                onItemSelect: y,
                orientation: p,
                type: "vertical" === p ? "side" : "top",
                look: "brand",
                children: h.map((e) =>
                    (0, r.jsx)(
                        o.njP.Item,
                        {
                            className: a()(c.tab, {
                                [c.vertical]: "vertical" === p,
                                [c.selected]: e.setting === E.setting,
                            }),
                            id: e.setting,
                            "aria-label": e.title,
                            children: e.title,
                        },
                        e.setting,
                    ),
                ),
            }),
            (0, r.jsx)(o.njP.Panel, {
                id: E.setting,
                "aria-labelledby": E.title,
                className: a()(c.tabBarPanel, d, { [c.vertical]: "vertical" === p }),
                children: b(E),
            }),
        ],
    });
};
