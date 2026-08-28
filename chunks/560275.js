n.d(t, { A: () => s });
var r = n(477900),
    l = n(582128),
    a = n(19641);
function i() {
    return (0, r.jsx)("div", { className: a.iM });
}
let s = function (e) {
    let { children: t } = e,
        n = l.useMemo(
            () =>
                l.Children.map(t, (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", { className: a.jf, children: e }), (0, r.jsx)(i, {})],
                    }),
                ),
            [t],
        );
    return (0, r.jsx)("div", { className: a.qV, children: (0, r.jsx)("div", { className: a.Y_, children: n }) });
};
