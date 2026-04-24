"use strict";
r.d(t, { A: () => i });
var l = r(627968),
    s = r(64700),
    n = r(789762);
let a = () => (0, l.jsx)("div", { className: n.iM }),
    i = (e) => {
        let { children: t } = e,
            r = s.useMemo(
                () =>
                    s.Children.map(t, (e) =>
                        (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", { className: n.jf, children: e }), (0, l.jsx)(a, {})],
                        }),
                    ),
                [t],
            );
        return (0, l.jsx)("div", { className: n.qV, children: (0, l.jsx)("div", { className: n.Y_, children: r }) });
    };
