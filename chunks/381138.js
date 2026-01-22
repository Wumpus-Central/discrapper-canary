var r = n(544664),
    i = n(390453),
    a = n(314220),
    s = 1,
    o = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & s,
        f = e.length,
        p = t.length;
    if (f != p && !(d && p > f)) return !1;
    var _ = u.get(e);
    if (_ && u.get(t)) return _ == t;
    var h = -1,
        m = !0,
        g = n & o ? new r() : void 0;
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
                    if (!a(g, t) && (E === e || c(E, e, n, l, u))) return g.push(t);
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
