n.d(t, { Z: () => a });
var i = n(255367),
    r = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(728557);
function a(e) {
    let { keybind: t, separator: n = '+', className: o } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: s()(l.key, o),
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
