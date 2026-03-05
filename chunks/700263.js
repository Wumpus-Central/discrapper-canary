t.d(l, { A: () => i });
var r = t(627968),
    o = t(64700),
    n = t(718841);
let a = () => (0, r.jsx)("div", { className: n.iM }),
    i = (e) => {
        let { children: l } = e,
            t = o.useMemo(
                () =>
                    o.Children.map(l, (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", { className: n.jf, children: e }), (0, r.jsx)(a, {})],
                        }),
                    ),
                [l],
            );
        return (0, r.jsx)("div", { className: n.qV, children: (0, r.jsx)("div", { className: n.Y_, children: t }) });
    };
