n.d(t, { Z: () => o });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(753078);
let o = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: r, className: o } = e;
    return (0, a.jsx)(l.njP, {
        type: "top-pill",
        selectedItem: r,
        onItemSelect: n,
        className: o,
        children: t.map((e, t) => {
            let { id: n, label: r, count: o } = e;
            return (0, a.jsx)(
                l.njP.Item,
                {
                    id: n,
                    className: i()(s.tabItem, { [s.firstChildSpacingFix]: 0 === t }),
                    "aria-label": r,
                    children: null != o && o > 0 ? "".concat(r, " (").concat(o, ")") : r,
                },
                n,
            );
        }),
    });
};
