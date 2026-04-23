"use strict";
n.d(t, { A: () => o });
var r = n(499702),
    i = n(140851),
    s = n(528346),
    a = n(559751);
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
        E = h.filter(function (e) {
            return f.indexOf(e) >= 0;
        });
    0 === E.length && (E = h);
    var m = E.reduce(function (t, n) {
        return (t[n] = (0, s.A)(e, { placement: n, boundary: l, rootBoundary: u, padding: c })[(0, a.A)(n)]), t;
    }, {});
    return Object.keys(m).sort(function (e, t) {
        return m[e] - m[t];
    });
}
