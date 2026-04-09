r.d(t, { A: () => c });
var l = r(627968),
    n = r(64700),
    a = r(16466);
let s = () => (0, l.jsx)("div", { className: a.iM }),
    c = (e) => {
        let { children: t } = e,
            r = n.useMemo(
                () =>
                    n.Children.map(t, (e) =>
                        (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", { className: a.jf, children: e }), (0, l.jsx)(s, {})],
                        }),
                    ),
                [t],
            );
        return (0, l.jsx)("div", { className: a.qV, children: (0, l.jsx)("div", { className: a.Y_, children: r }) });
    };
