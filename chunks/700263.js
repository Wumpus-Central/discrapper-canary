l.d(t, { A: () => n });
var r = l(627968),
    a = l(64700),
    d = l(10855);
let c = () => (0, r.jsx)("div", { className: d.iM }),
    n = (e) => {
        let { children: t } = e,
            l = a.useMemo(
                () =>
                    a.Children.map(t, (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", { className: d.jf, children: e }), (0, r.jsx)(c, {})],
                        }),
                    ),
                [t],
            );
        return (0, r.jsx)("div", { className: d.qV, children: (0, r.jsx)("div", { className: d.Y_, children: l }) });
    };
