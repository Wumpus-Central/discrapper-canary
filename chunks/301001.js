n.r(e), n.d(e, { default: () => u });
var o = n(255367),
    t = n(120356),
    i = n.n(t),
    c = n(114858),
    l = n(726542),
    a = n(656649),
    r = n(388032),
    d = n(554500);
function u() {
    let { type: s } = (0, c.UO)(),
        e = (0, a.vJ)(s);
    if (null == e) return null;
    let n = l.Z.get(e);
    return (0, o.jsxs)(a.UV, {
        platformType: e,
        children: [
            (0, o.jsx)('div', {
                className: d.message,
                children: r.intl.format(r.t.RzEB5u, { name: n.name })
            }),
            (0, o.jsx)('div', {
                className: i()(d.message, d.details),
                children: r.intl.string(r.t['Q+lNwc'])
            })
        ]
    });
}
