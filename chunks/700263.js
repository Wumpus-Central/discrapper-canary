"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    a = n(718841);
let s = () => (0, r.jsx)("div", { className: a.iM }),
    o = (e) => {
        let { children: t } = e,
            n = i.useMemo(
                () =>
                    i.Children.map(t, (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", { className: a.jf, children: e }), (0, r.jsx)(s, {})],
                        }),
                    ),
                [t],
            );
        return (0, r.jsx)("div", { className: a.qV, children: (0, r.jsx)("div", { className: a.Y_, children: n }) });
    };
