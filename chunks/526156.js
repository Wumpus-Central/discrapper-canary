n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(230711),
    o = n(528084),
    c = n(44380);
let d = (e) => {
    var t;
    let { tabs: n, settingsSection: r, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: p } = e,
        { viewableTabs: g, filteredTab: h } = (0, o.a)(n, d),
        f = null != m ? n[m] : null,
        b = null != (t = null != f ? f : h) ? t : g[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.njP, {
                className: c.tabBar,
                selectedItem: b.setting,
                onItemSelect: (e) => {
                    a.Z.setSection(r, e), null == p || p(e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: g.map((e) =>
                    (0, i.jsx)(
                        l.njP.Item,
                        {
                            className: c.tab,
                            id: e.setting,
                            'aria-label': e.title,
                            children: e.title
                        },
                        e.setting
                    )
                )
            }),
            (0, i.jsx)(l.njP.Panel, {
                id: b.setting,
                'aria-labelledby': b.title,
                className: s()(c.tabBarPanel, u),
                children: ((e) => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, i.jsx)(t, {}) : t;
                })(b)
            })
        ]
    });
};
