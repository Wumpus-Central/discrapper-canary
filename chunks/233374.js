var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(578451);
t.Z = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: a, className: s } = e;
    return (0, i.jsx)(l.TabBar, {
        type: 'top-pill',
        selectedItem: a,
        onItemSelect: n,
        className: s,
        children: t.map((e, t) => {
            let { id: n, label: a, count: s } = e;
            return (0, i.jsx)(
                l.TabBar.Item,
                {
                    id: n,
                    className: r()(o.tabItem, { [o.firstChildSpacingFix]: 0 === t }),
                    'aria-label': a,
                    children: null != s && s > 0 ? ''.concat(a, ' (').concat(s, ')') : a
                },
                n
            );
        })
    });
};
