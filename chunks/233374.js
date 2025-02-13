n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    s = n(588440);
let o = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: a, className: o } = e;
    return (0, i.jsx)(l.njP, {
        type: 'top-pill',
        selectedItem: a,
        onItemSelect: n,
        className: o,
        children: t.map((e, t) => {
            let { id: n, label: a, count: o } = e;
            return (0, i.jsx)(
                l.njP.Item,
                {
                    id: n,
                    className: r()(s.tabItem, { [s.firstChildSpacingFix]: 0 === t }),
                    'aria-label': a,
                    children: null != o && o > 0 ? ''.concat(a, ' (').concat(o, ')') : a
                },
                n
            );
        })
    });
};
