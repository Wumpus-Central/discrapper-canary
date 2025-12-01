n.d(t, { f: () => a });
var r = n(695170),
    i = n(686942);
function a(e, t, n, a, o, s) {
    for (var l = [], c = 0; c < e.length; c++) {
        var u = void 0,
            d = void 0,
            f = e[c];
        f < 0
            ? ((u = Math.floor(f / t.length)), (d = (0, i.Vy)(f, t.length)))
            : ((u = Math.floor((f - 1) / t.length)), (d = (0, i.Vy)(f - 1, t.length)));
        for (var p = [], _ = n; _ < a; _++) {
            var m = s[_];
            (0, i.EN)(m) && p.push(m);
        }
        var h = void 0;
        h = u < 0 ? p.slice(u)[0] : p[u];
        var g = t[d],
            E = (0, r.zU)(o.yearordinal + h),
            b = (0, r.$e)(E, g);
        (0, i.q9)(l, b) || l.push(b);
    }
    return (0, r.DY)(l), l;
}
