var r = n(102074),
    i = n(153027),
    o = n(803607),
    a = 1,
    s = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & a,
        f = e.length,
        _ = t.length;
    if (f != _ && !(d && _ > f)) return !1;
    var p = u.get(e);
    if (p && u.get(t)) return p == t;
    var h = -1,
        m = !0,
        g = n & s ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++h < f; ) {
        var E = e[h],
            b = t[h];
        if (l) var y = d ? l(b, E, h, t, e, u) : l(E, b, h, e, t, u);
        if (void 0 !== y) {
            if (y) continue;
            m = !1;
            break;
        }
        if (g) {
            if (
                !i(t, function (e, t) {
                    if (!o(g, t) && (E === e || c(E, e, n, l, u))) return g.push(t);
                })
            ) {
                m = !1;
                break;
            }
        } else if (!(E === b || c(E, b, n, l, u))) {
            m = !1;
            break;
        }
    }
    return u.delete(e), u.delete(t), m;
};
