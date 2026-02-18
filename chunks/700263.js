t.d(r, { A: () => a });
var d = t(627968),
    l = t(64700),
    c = t(10855);
let o = () => (0, d.jsx)("div", { className: c.iM }),
    a = (e) => {
        let { children: r } = e,
            t = l.useMemo(
                () =>
                    l.Children.map(r, (e) =>
                        (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)("div", { className: c.jf, children: e }), (0, d.jsx)(o, {})],
                        }),
                    ),
                [r],
            );
        return (0, d.jsx)("div", { className: c.qV, children: (0, d.jsx)("div", { className: c.Y_, children: t }) });
    };
