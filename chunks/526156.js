n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(230711),
    o = n(528084),
    c = n(243824);
let d = (e) => {
    var t;
    let { tabs: n, settingsSection: s, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: h } = e,
        { viewableTabs: g, filteredTab: _ } = (0, o.a)(n, d),
        x = null != m ? n[m] : null,
        p = null !== (t = null != x ? x : _) && void 0 !== t ? t : g[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.njP, {
                className: c.tabBar,
                selectedItem: p.setting,
                onItemSelect: (e) => {
                    a.Z.setSection(s, e), null == h || h(e);
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
                id: p.setting,
                'aria-labelledby': p.title,
                className: r()(c.tabBarPanel, u),
                children: ((e) => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, i.jsx)(t, {}) : t;
                })(p)
            })
        ]
    });
};
