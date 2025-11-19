n.r(s), n.d(s, { default: () => u });
var o = n(54381),
    l = n(120356),
    i = n.n(l),
    t = n(828700),
    c = n(726542),
    a = n(656649),
    r = n(388032),
    d = n(436035);
function u() {
    let { type: e } = (0, t.UO)(),
        s = (0, a.vJ)(e);
    if (null == s) return null;
    let n = c.Z.get(s);
    return (0, o.jsxs)(a.UV, {
        platformType: s,
        children: [
            (0, o.jsx)("div", {
                className: d.message,
                children: r.intl.format(r.t.RzEB5v, { name: n.name }),
            }),
            (0, o.jsx)("div", {
                className: i()(d.message, d.details),
                children: r.intl.string(r.t["Q+lNwZ"]),
            }),
        ],
    });
}
