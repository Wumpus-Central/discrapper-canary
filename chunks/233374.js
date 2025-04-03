n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    o = n(237561);
let s = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: a, className: s } = e;
    return (0, r.jsx)(l.njP, {
        type: 'top-pill',
        selectedItem: a,
        onItemSelect: n,
        className: s,
        children: t.map((e, t) => {
            let { id: n, label: a, count: s } = e;
            return (0, r.jsx)(
                l.njP.Item,
                {
                    id: n,
                    className: i()(o.tabItem, { [o.firstChildSpacingFix]: 0 === t }),
                    'aria-label': a,
                    children: null != s && s > 0 ? ''.concat(a, ' (').concat(s, ')') : a
                },
                n
            );
        })
    });
};
