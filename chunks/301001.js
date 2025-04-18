o.r(e), o.d(e, { default: () => u });
var n = o(200651),
    t = o(120356),
    c = o.n(t),
    i = o(512969),
    l = o(726542),
    a = o(656649),
    r = o(388032),
    d = o(554500);
function u() {
    let { type: s } = (0, i.UO)(),
        e = (0, a.vJ)(s);
    if (null == e) return null;
    let o = l.Z.get(e);
    return (0, n.jsxs)(a.UV, {
        platformType: e,
        children: [
            (0, n.jsx)('div', {
                className: d.message,
                children: r.NW.format(r.t.RzEB5u, { name: o.name })
            }),
            (0, n.jsx)('div', {
                className: c()(d.message, d.details),
                children: r.NW.string(r.t['Q+lNwc'])
            })
        ]
    });
}
