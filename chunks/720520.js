"use strict";
n.d(t, { B: () => s });
var r = n(222367),
    i = n(391898);
function s(e, t, n, s, a, o) {
    for (var l = [], u = 0; u < e.length; u++) {
        var c = void 0,
            d = void 0,
            _ = e[u];
        _ < 0
            ? ((c = Math.floor(_ / t.length)), (d = (0, i._D)(_, t.length)))
            : ((c = Math.floor((_ - 1) / t.length)), (d = (0, i._D)(_ - 1, t.length)));
        for (var f = [], p = n; p < s; p++) {
            var h = o[p];
            (0, i.Wo)(h) && f.push(h);
        }
        var E = void 0;
        E = c < 0 ? f.slice(c)[0] : f[c];
        var m = t[d],
            g = (0, r.Y_)(a.yearordinal + E),
            A = (0, r.kg)(g, m);
        (0, i.mK)(l, A) || l.push(A);
    }
    return (0, r.di)(l), l;
}
