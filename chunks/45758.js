n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(397927),
    s = n(650964);
let c = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: a, className: c } = e;
    return (0, l.jsx)(i.VQ0, {
        type: "top-pill",
        selectedItem: a,
        onItemSelect: n,
        className: c,
        children: t.map((e, t) => {
            let { id: n, label: a, count: c } = e;
            return (0, l.jsx)(
                i.VQ0.Item,
                {
                    id: n,
                    className: r()(s.V, { [s.r]: 0 === t }),
                    "aria-label": a,
                    children: null != c && c > 0 ? "".concat(a, " (").concat(c, ")") : a,
                },
                n,
            );
        }),
    });
};
