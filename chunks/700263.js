t.d(l, { A: () => a });
var r = t(627968),
    n = t(64700),
    o = t(10855);
let i = () => (0, r.jsx)("div", { className: o.iM }),
    a = (e) => {
        let { children: l } = e,
            t = n.useMemo(
                () =>
                    n.Children.map(l, (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", { className: o.jf, children: e }), (0, r.jsx)(i, {})],
                        }),
                    ),
                [l],
            );
        return (0, r.jsx)("div", { className: o.qV, children: (0, r.jsx)("div", { className: o.Y_, children: t }) });
    };
