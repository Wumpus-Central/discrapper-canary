a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(761508),
    r = a(759057);
let o = function (e) {
    let { tabs: t, onTabSelect: a, selectedTab: l, className: o } = e;
    return (0, n.jsx)(s.V, {
        type: "top-pill",
        selectedItem: l,
        onItemSelect: a,
        className: o,
        children: t.map((e, t) => {
            let { id: a, label: l, count: o } = e;
            return (0, n.jsx)(
                s.V.Item,
                {
                    id: a,
                    className: i()(r.V, { [r.r]: 0 === t }),
                    "aria-label": l,
                    children: null != o && o > 0 ? `${l} (${o})` : l,
                },
                a,
            );
        }),
    });
};
