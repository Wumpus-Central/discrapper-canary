n.d(t, { Z: () => a });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    o = n.n(s),
    l = n(728557);
function a(e) {
    let { keybind: t, separator: n = '+', className: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: o()(l.key, s),
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
