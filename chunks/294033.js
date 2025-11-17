n.d(t, { Z: () => a });
var i = n(54381),
    r = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(778234);
function a(e) {
    let { keybind: t, separator: n = "+", className: o } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)("span", {
                            className: l()(s.key, o),
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
