r.d(n, {
    f: function () {
        return o;
    }
});
var i = r(695170),
    a = r(686942);
function o(e, n, r, o, s, l) {
    for (var u = [], c = 0; c < e.length; c++) {
        var d = void 0,
            f = void 0,
            p = e[c];
        p < 0 ? ((d = Math.floor(p / n.length)), (f = (0, a.Vy)(p, n.length))) : ((d = Math.floor((p - 1) / n.length)), (f = (0, a.Vy)(p - 1, n.length)));
        for (var h = [], _ = r; _ < o; _++) {
            var m = l[_];
            (0, a.EN)(m) && h.push(m);
        }
        var g = void 0;
        g = d < 0 ? h.slice(d)[0] : h[d];
        var E = n[f],
            v = (0, i.zU)(s.yearordinal + g),
            y = (0, i.$e)(v, E);
        !(0, a.q9)(u, y) && u.push(y);
    }
    return (0, i.DY)(u), u;
}
