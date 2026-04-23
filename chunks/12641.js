"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(646862);
function o(e) {
    let { keybind: t, separator: n = "+", className: l } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, o) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)("span", { className: a()(r.E, l), children: e }),
                        o === t.length - 1 ? void 0 : n,
                    ],
                },
                o,
            ),
        ),
    });
}
