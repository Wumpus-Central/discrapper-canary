"use strict";
n.d(t, { A: () => o });
var r = n(499702),
    i = n(140851),
    a = n(528346),
    s = n(559751);
function o(e, t) {
    void 0 === t && (t = {});
    var n = t,
        o = n.placement,
        l = n.boundary,
        u = n.rootBoundary,
        c = n.padding,
        d = n.flipVariations,
        _ = n.allowedAutoPlacements,
        f = void 0 === _ ? i.DD : _,
        p = (0, r.A)(o),
        h = p
            ? d
                ? i.Ol
                : i.Ol.filter(function (e) {
                      return (0, r.A)(e) === p;
                  })
            : i.OM,
        m = h.filter(function (e) {
            return f.indexOf(e) >= 0;
        });
    0 === m.length && (m = h);
    var g = m.reduce(function (t, n) {
        return (t[n] = (0, a.A)(e, { placement: n, boundary: l, rootBoundary: u, padding: c })[(0, s.A)(n)]), t;
    }, {});
    return Object.keys(g).sort(function (e, t) {
        return g[e] - g[t];
    });
}
