n.r(s),
    n.d(s, {
        default: function () {
            return d;
        }
    });
var t = n(200651),
    o = n(120356),
    c = n.n(o),
    i = n(512969),
    l = n(726542),
    r = n(656649),
    a = n(388032),
    u = n(743839);
function d() {
    let { type: e } = (0, i.UO)(),
        s = (0, r.vJ)(e);
    if (null == s) return null;
    let n = l.Z.get(s);
    return (0, t.jsxs)(r.UV, {
        platformType: s,
        children: [
            (0, t.jsx)('div', {
                className: u.message,
                children: a.intl.format(a.t.RzEB5u, { name: n.name })
            }),
            (0, t.jsx)('div', {
                className: c()(u.message, u.details),
                children: a.intl.string(a.t['Q+lNwc'])
            })
        ]
    });
}
