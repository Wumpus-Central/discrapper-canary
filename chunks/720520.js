n.d(t, { B: () => a });
var r = n(222367),
    i = n(391898);
function a(e, t, n, a, s, o) {
    for (var l = [], c = 0; c < e.length; c++) {
        var u = void 0,
            d = void 0,
            f = e[c];
        f < 0
            ? ((u = Math.floor(f / t.length)), (d = (0, i._D)(f, t.length)))
            : ((u = Math.floor((f - 1) / t.length)), (d = (0, i._D)(f - 1, t.length)));
        for (var p = [], _ = n; _ < a; _++) {
            var h = o[_];
            (0, i.Wo)(h) && p.push(h);
        }
        var m = void 0;
        m = u < 0 ? p.slice(u)[0] : p[u];
        var g = t[d],
            E = (0, r.Y_)(s.yearordinal + m),
            b = (0, r.kg)(E, g);
        (0, i.mK)(l, b) || l.push(b);
    }
    return (0, r.di)(l), l;
}
