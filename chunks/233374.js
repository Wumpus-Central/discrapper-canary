n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    s = n(538719);
let o = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: i, className: o } = e;
    return (0, r.jsx)(l.njP, {
        type: "top-pill",
        selectedItem: i,
        onItemSelect: n,
        className: o,
        children: t.map((e, t) => {
            let { id: n, label: i, count: o } = e;
            return (0, r.jsx)(
                l.njP.Item,
                {
                    id: n,
                    className: a()(s.tabItem, { [s.firstChildSpacingFix]: 0 === t }),
                    "aria-label": i,
                    children: null != o && o > 0 ? "".concat(i, " (").concat(o, ")") : i,
                },
                n,
            );
        }),
    });
};
