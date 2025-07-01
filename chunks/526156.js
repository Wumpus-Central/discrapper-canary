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
    let { tabs: n, settingsSection: r, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: g, orientation: p = 'horizontal' } = e,
        { viewableTabs: h, filteredTab: f } = (0, o.a)(n, d),
        b = null != m ? n[m] : null,
        _ = null != (t = null != b ? b : f) ? t : h[0];
    return (0, i.jsxs)('div', {
        className: s()(c.tabbedSettingsContainer, { [c.vertical]: 'vertical' === p }),
        children: [
            (0, i.jsx)(l.njP, {
                className: s()(c.tabBar, { [c.vertical]: 'vertical' === p }),
                selectedItem: _.setting,
                onItemSelect: (e) => {
                    (a.Z.setSection(r, e), null == g || g(e));
                },
                orientation: p,
                type: 'vertical' === p ? 'side' : 'top',
                look: 'brand',
                children: h.map((e) =>
                    (0, i.jsx)(
                        l.njP.Item,
                        {
                            className: s()(c.tab, {
                                [c.vertical]: 'vertical' === p,
                                [c.selected]: e.setting === _.setting
                            }),
                            id: e.setting,
                            'aria-label': e.title,
                            children: e.title
                        },
                        e.setting
                    )
                )
            }),
            (0, i.jsx)(l.njP.Panel, {
                id: _.setting,
                'aria-labelledby': _.title,
                className: s()(c.tabBarPanel, u, { [c.vertical]: 'vertical' === p }),
                children: ((e) => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, i.jsx)(t, {}) : t;
                })(_)
            })
        ]
    });
};
