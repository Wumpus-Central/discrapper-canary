n.d(t, { A: () => a });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(690157);
function a(e) {
    let { keybind: t, separator: n = "+", className: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)("span", {
                            className: l()(o.E, s),
                            children: e,
                        }),
                        a === t.length - 1 ? void 0 : n,
                    ],
                },
                a,
            ),
        ),
    });
}
