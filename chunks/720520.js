"use strict";
n.d(t, { B: () => a });
var r = n(222367),
    i = n(391898);
function a(e, t, n, a, s, o) {
    for (var l = [], u = 0; u < e.length; u++) {
        var c = void 0,
            d = void 0,
            _ = e[u];
        _ < 0
            ? ((c = Math.floor(_ / t.length)), (d = (0, i._D)(_, t.length)))
            : ((c = Math.floor((_ - 1) / t.length)), (d = (0, i._D)(_ - 1, t.length)));
        for (var f = [], p = n; p < a; p++) {
            var h = o[p];
            (0, i.Wo)(h) && f.push(h);
        }
        var m = void 0;
        m = c < 0 ? f.slice(c)[0] : f[c];
        var g = t[d],
            E = (0, r.Y_)(s.yearordinal + m),
            A = (0, r.kg)(E, g);
        (0, i.mK)(l, A) || l.push(A);
    }
    return (0, r.di)(l), l;
}
