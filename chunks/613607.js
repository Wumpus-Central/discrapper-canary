n.d(t, { f: () => o });
var r = n(695170),
    i = n(686942);
function o(e, t, n, o, a, s) {
    for (var l = [], c = 0; c < e.length; c++) {
        var u = void 0,
            d = void 0,
            f = e[c];
        f < 0 ? ((u = Math.floor(f / t.length)), (d = (0, i.Vy)(f, t.length))) : ((u = Math.floor((f - 1) / t.length)), (d = (0, i.Vy)(f - 1, t.length)));
        for (var p = [], _ = n; _ < o; _++) {
            var h = s[_];
            (0, i.EN)(h) && p.push(h);
        }
        var m = void 0;
        m = u < 0 ? p.slice(u)[0] : p[u];
        var g = t[d],
            E = (0, r.zU)(a.yearordinal + m),
            v = (0, r.$e)(E, g);
        (0, i.q9)(l, v) || l.push(v);
    }
    return (0, r.DY)(l), l;
}
