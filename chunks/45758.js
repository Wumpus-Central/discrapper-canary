a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    l = a(397927),
    r = a(41214);
let o = function (e) {
    let { tabs: t, onTabSelect: a, selectedTab: i, className: o } = e;
    return (0, n.jsx)(l.VQ0, {
        type: "top-pill",
        selectedItem: i,
        onItemSelect: a,
        className: o,
        children: t.map((e, t) => {
            let { id: a, label: i, count: o } = e;
            return (0, n.jsx)(
                l.VQ0.Item,
                {
                    id: a,
                    className: s()(r.V, { [r.r]: 0 === t }),
                    "aria-label": i,
                    children: null != o && o > 0 ? `${i} (${o})` : i,
                },
                a,
            );
        }),
    });
};
