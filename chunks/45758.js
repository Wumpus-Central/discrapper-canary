a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var i = a(503698),
    l = a.n(i),
    s = a(397927),
    r = a(650964);
let o = function (e) {
    let { tabs: t, onTabSelect: a, selectedTab: i, className: o } = e;
    return (0, n.jsx)(s.VQ0, {
        type: "top-pill",
        selectedItem: i,
        onItemSelect: a,
        className: o,
        children: t.map((e, t) => {
            let { id: a, label: i, count: o } = e;
            return (0, n.jsx)(
                s.VQ0.Item,
                {
                    id: a,
                    className: l()(r.V, { [r.r]: 0 === t }),
                    "aria-label": i,
                    children: null != o && o > 0 ? `${i} (${o})` : i,
                },
                a,
            );
        }),
    });
};
