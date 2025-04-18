n.d(t, { Z: () => l });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(728557);
function l(e) {
    let { keybind: t, separator: n = '+', className: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, l) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: o()(a.key, s),
                            children: e
                        }),
                        l === t.length - 1 ? void 0 : n
                    ]
                },
                l
            )
        )
    });
}
