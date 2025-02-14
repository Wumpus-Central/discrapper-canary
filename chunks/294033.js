n.d(t, { Z: () => r });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(968623);
function r(e) {
    let { keybind: t, separator: n = '+', className: l } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, r) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: a()(o.key, l),
                            children: e
                        }),
                        r === t.length - 1 ? void 0 : n
                    ]
                },
                r
            )
        )
    });
}
