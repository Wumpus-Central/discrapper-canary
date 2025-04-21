n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(230711),
    o = n(528084),
    c = n(44380);
let d = (e) => {
    var t;
    let { tabs: n, settingsSection: r, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: g } = e,
        { viewableTabs: p, filteredTab: h } = (0, o.a)(n, d),
        f = null != m ? n[m] : null,
        b = null != (t = null != f ? f : h) ? t : p[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.njP, {
                className: c.tabBar,
                selectedItem: b.setting,
                onItemSelect: (e) => {
                    a.Z.setSection(r, e), null == g || g(e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: p.map((e) =>
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
