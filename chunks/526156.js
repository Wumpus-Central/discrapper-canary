var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(230711),
    o = n(528084),
    c = n(317879);
t.Z = (e) => {
    var t;
    let { tabs: n, settingsSection: r, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: g } = e,
        { viewableTabs: h, filteredTab: p } = (0, o.a)(n, d),
        x = null != m ? n[m] : null,
        f = null !== (t = null != x ? x : p) && void 0 !== t ? t : h[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.TabBar, {
                className: c.tabBar,
                selectedItem: f.setting,
                onItemSelect: (e) => {
                    l.Z.setSection(r, e), null == g || g(e);
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
                className: s()(c.tabBarPanel, u),
                children: ((e) => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, i.jsx)(t, {}) : t;
                })(f)
            })
        ]
    });
};
