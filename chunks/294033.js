n.d(t, { Z: () => o });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(251871);
function o(e) {
    let { keybind: t, separator: n = '+', className: l } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, o) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: a()(r.key, l),
                            children: e
                        }),
                        o === t.length - 1 ? void 0 : n
                    ]
                },
                o
            )
        )
    });
}
