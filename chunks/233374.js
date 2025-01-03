var a = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    l = t(481060),
    o = t(578451);
n.Z = function (e) {
    let { tabs: n, onTabSelect: t, selectedTab: i, className: s } = e;
    return (0, a.jsx)(l.TabBar, {
        type: 'top-pill',
        selectedItem: i,
        onItemSelect: t,
        className: s,
        children: n.map((e, n) => {
            let { id: t, label: i, count: s } = e;
            return (0, a.jsx)(
                l.TabBar.Item,
                {
                    id: t,
                    className: r()(o.tabItem, { [o.firstChildSpacingFix]: 0 === n }),
                    'aria-label': i,
                    children: null != s && s > 0 ? ''.concat(i, ' (').concat(s, ')') : i
                },
                t
            );
        })
    });
};
