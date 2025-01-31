n.d(t, { f: () => a });
var i = n(695170),
    r = n(686942);
function a(e, t, n, a, s, o) {
    for (var l = [], u = 0; u < e.length; u++) {
        var c = void 0,
            d = void 0,
            f = e[u];
        f < 0 ? ((c = Math.floor(f / t.length)), (d = (0, r.Vy)(f, t.length))) : ((c = Math.floor((f - 1) / t.length)), (d = (0, r.Vy)(f - 1, t.length)));
        for (var _ = [], p = n; p < a; p++) {
            var h = o[p];
            (0, r.EN)(h) && _.push(h);
        }
        var m = void 0;
        m = c < 0 ? _.slice(c)[0] : _[c];
        var g = t[d],
            E = (0, i.zU)(s.yearordinal + m),
            v = (0, i.$e)(E, g);
        (0, r.q9)(l, v) || l.push(v);
    }
    return (0, i.DY)(l), l;
}
