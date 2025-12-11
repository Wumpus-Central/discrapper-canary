n.r(s), n.d(s, { default: () => u });
var o = n(54381),
    a = n(120356),
    l = n.n(a),
    d = n(828700),
    i = n(726542),
    t = n(656649),
    c = n(388032),
    r = n(58558);
function u() {
    let { type: e } = (0, d.UO)(),
        s = (0, t.vJ)(e);
    if (null == s) return null;
    let n = i.Z.get(s);
    return (0, o.jsxs)(t.UV, {
        platformType: s,
        children: [
            (0, o.jsx)("div", {
                className: r.message,
                children: c.intl.format(c.t.RzEB5v, { name: n.name }),
            }),
            (0, o.jsx)("div", {
                className: l()(r.message, r.details),
                children: c.intl.string(c.t["Q+lNwZ"]),
            }),
        ],
    });
}
