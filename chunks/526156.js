n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(230711),
    o = n(528084),
    c = n(944109);
let d = (e) => {
    var t;
    let { tabs: n, settingsSection: s, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: g } = e,
        { viewableTabs: h, filteredTab: x } = (0, o.a)(n, d),
        _ = null != m ? n[m] : null,
        p = null !== (t = null != _ ? _ : x) && void 0 !== t ? t : h[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.njP, {
                className: c.tabBar,
                selectedItem: p.setting,
                onItemSelect: (e) => {
                    a.Z.setSection(s, e), null == g || g(e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: h.map((e) =>
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
