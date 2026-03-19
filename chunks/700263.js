l.d(t, { A: () => a });
var r = l(627968),
    n = l(64700),
    i = l(718841);
let o = () => (0, r.jsx)("div", { className: i.iM }),
    a = (e) => {
        let { children: t } = e,
            l = n.useMemo(
                () =>
                    n.Children.map(t, (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", { className: i.jf, children: e }), (0, r.jsx)(o, {})],
                        }),
                    ),
                [t],
            );
        return (0, r.jsx)("div", { className: i.qV, children: (0, r.jsx)("div", { className: i.Y_, children: l }) });
    };
