n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(131478);
function l(e) {
    let { keybind: t, separator: n = '+', className: r } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, l) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: a()(o.key, r),
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
