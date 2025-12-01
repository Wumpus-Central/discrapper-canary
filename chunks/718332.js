var r = n(102074),
    i = n(153027),
    a = n(803607),
    o = 1,
    s = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & o,
        f = e.length,
        p = t.length;
    if (f != p && !(d && p > f)) return !1;
    var _ = u.get(e);
    if (_ && u.get(t)) return _ == t;
    var m = -1,
        h = !0,
        g = n & s ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++m < f; ) {
        var E = e[m],
            b = t[m];
        if (l) var y = d ? l(b, E, m, t, e, u) : l(E, b, m, e, t, u);
        if (void 0 !== y) {
            if (y) continue;
            h = !1;
            break;
        }
        if (g) {
            if (
                !i(t, function (e, t) {
                    if (!a(g, t) && (E === e || c(E, e, n, l, u))) return g.push(t);
                })
            ) {
                h = !1;
                break;
            }
        } else if (!(E === b || c(E, b, n, l, u))) {
            h = !1;
            break;
        }
    }
    return u.delete(e), u.delete(t), h;
};
