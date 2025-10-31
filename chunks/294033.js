n.d(t, { Z: () => a });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(778234);
function a(e) {
    let { keybind: t, separator: n = "+", className: l } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)("span", {
                            className: o()(s.key, l),
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
