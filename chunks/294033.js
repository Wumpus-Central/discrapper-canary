n.d(t, { Z: () => a });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(131478);
function a(e) {
    let { keybind: t, separator: n = '+', className: l } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, a) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: r()(o.key, l),
                            children: e
                        }),
                        a === t.length - 1 ? void 0 : n
                    ]
                },
                a
            )
        )
    });
}
