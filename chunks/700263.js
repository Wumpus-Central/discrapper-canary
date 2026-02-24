r.d(t, { A: () => n });
var l = r(627968),
    d = r(64700),
    c = r(718841);
let a = () => (0, l.jsx)("div", { className: c.iM }),
    n = (e) => {
        let { children: t } = e,
            r = d.useMemo(
                () =>
                    d.Children.map(t, (e) =>
                        (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", { className: c.jf, children: e }), (0, l.jsx)(a, {})],
                        }),
                    ),
                [t],
            );
        return (0, l.jsx)("div", { className: c.qV, children: (0, l.jsx)("div", { className: c.Y_, children: r }) });
    };
