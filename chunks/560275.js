l.d(t, { A: () => i });
var r = l(627968),
    n = l(64700),
    a = l(352522);
let s = () => (0, r.jsx)("div", { className: a.iM }),
    i = (e) => {
        let { children: t } = e,
            l = n.useMemo(
                () =>
                    n.Children.map(t, (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", { className: a.jf, children: e }), (0, r.jsx)(s, {})],
                        }),
                    ),
                [t],
            );
        return (0, r.jsx)("div", { className: a.qV, children: (0, r.jsx)("div", { className: a.Y_, children: l }) });
    };
