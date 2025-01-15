var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(230711),
    o = n(528084),
    c = n(243824);
t.Z = (e) => {
    var t;
    let { tabs: n, settingsSection: s, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: g } = e,
        { viewableTabs: h, filteredTab: p } = (0, o.a)(n, d),
        x = null != m ? n[m] : null,
        f = null !== (t = null != x ? x : p) && void 0 !== t ? t : h[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.TabBar, {
                className: c.tabBar,
                selectedItem: f.setting,
                onItemSelect: (e) => {
                    l.Z.setSection(s, e), null == g || g(e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: h.map((e) =>
                    (0, i.jsx)(
                        a.TabBar.Item,
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
            (0, i.jsx)(a.TabBar.Panel, {
                id: f.setting,
                'aria-labelledby': f.title,
                className: r()(c.tabBarPanel, u),
                children: ((e) => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, i.jsx)(t, {}) : t;
                })(f)
            })
        ]
    });
};
