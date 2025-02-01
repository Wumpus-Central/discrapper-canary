var i = n(102074),
    r = n(153027),
    a = n(803607),
    s = 1,
    o = 2;
function l(e, t, n, l, u, c) {
    var d = n & s,
        f = e.length,
        _ = t.length;
    if (f != _ && !(d && _ > f)) return !1;
    var p = c.get(e);
    if (p && c.get(t)) return p == t;
    var h = -1,
        m = !0,
        g = n & o ? new i() : void 0;
    for (c.set(e, t), c.set(t, e); ++h < f; ) {
        var E = e[h],
            v = t[h];
        if (l) var y = d ? l(v, E, h, t, e, c) : l(E, v, h, e, t, c);
        if (void 0 !== y) {
            if (y) continue;
            m = !1;
            break;
        }
        if (g) {
            if (
                !r(t, function (e, t) {
                    if (!a(g, t) && (E === e || u(E, e, n, l, c))) return g.push(t);
                })
            ) {
                m = !1;
                break;
            }
        } else if (!(E === v || u(E, v, n, l, c))) {
            m = !1;
            break;
        }
    }
    return c.delete(e), c.delete(t), m;
}
e.exports = l;
