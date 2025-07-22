n.d(t, { f: () => a });
var r = n(695170),
    i = n(686942);
function a(e, t, n, a, o, s) {
    for (var l = [], c = 0; c < e.length; c++) {
        var u = void 0,
            d = void 0,
            _ = e[c];
        _ < 0 ? ((u = Math.floor(_ / t.length)), (d = (0, i.Vy)(_, t.length))) : ((u = Math.floor((_ - 1) / t.length)), (d = (0, i.Vy)(_ - 1, t.length)));
        for (var f = [], p = n; p < a; p++) {
            var h = s[p];
            (0, i.EN)(h) && f.push(h);
        }
        var m = void 0;
        m = u < 0 ? f.slice(u)[0] : f[u];
        var g = t[d],
            E = (0, r.zU)(o.yearordinal + m),
            b = (0, r.$e)(E, g);
        (0, i.q9)(l, b) || l.push(b);
    }
    return ((0, r.DY)(l), l);
}
