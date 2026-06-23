n.d(t, { A: () => i });
var r = n(627968),
    l = n(64700),
    a = n(352522);
function s() {
    return (0, r.jsx)("div", { className: a.iM });
}
let i = function (e) {
    let { children: t } = e,
        n = l.useMemo(
            () =>
                l.Children.map(t, (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", { className: a.jf, children: e }), (0, r.jsx)(s, {})],
                    }),
                ),
            [t],
        );
    return (0, r.jsx)("div", { className: a.qV, children: (0, r.jsx)("div", { className: a.Y_, children: n }) });
};
