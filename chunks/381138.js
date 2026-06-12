var i = n(544664),
    r = n(390453),
    s = n(314220);
e.exports = function (e, t, n, a, o, l) {
    var u = 1 & n,
        c = e.length,
        d = t.length;
    if (c != d && !(u && d > c)) return !1;
    var _ = l.get(e);
    if (_ && l.get(t)) return _ == t;
    var h = -1,
        f = !0,
        p = 2 & n ? new i() : void 0;
    for (l.set(e, t), l.set(t, e); ++h < c; ) {
        var E = e[h],
            m = t[h];
        if (a) var g = u ? a(m, E, h, t, e, l) : a(E, m, h, e, t, l);
        if (void 0 !== g) {
            if (g) continue;
            f = !1;
            break;
        }
        if (p) {
            if (
                !r(t, function (e, t) {
                    if (!s(p, t) && (E === e || o(E, e, n, a, l))) return p.push(t);
                })
            ) {
                f = !1;
                break;
            }
        } else if (!(E === m || o(E, m, n, a, l))) {
            f = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), f;
};
