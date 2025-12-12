n.d(t, { Z: () => l });
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(50880);
function l(e) {
    let { keybind: t, separator: n = "+", className: a } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, l) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)("span", {
                            className: s()(o.key, a),
                            children: e,
                        }),
                        l === t.length - 1 ? void 0 : n,
                    ],
                },
                l,
            ),
        ),
    });
}
