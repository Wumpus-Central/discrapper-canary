var r = n(544664),
    i = n(390453),
    s = n(314220);
e.exports = function (e, t, n, a, o, l) {
    var u = 1 & n,
        d = e.length,
        c = t.length;
    if (d != c && !(u && c > d)) return !1;
    var _ = l.get(e);
    if (_ && l.get(t)) return _ == t;
    var f = -1,
        E = !0,
        h = 2 & n ? new r() : void 0;
    for (l.set(e, t), l.set(t, e); ++f < d; ) {
        var p = e[f],
            m = t[f];
        if (a) var g = u ? a(m, p, f, t, e, l) : a(p, m, f, e, t, l);
        if (void 0 !== g) {
            if (g) continue;
            E = !1;
            break;
        }
        if (h) {
            if (
                !i(t, function (e, t) {
                    if (!s(h, t) && (p === e || o(p, e, n, a, l))) return h.push(t);
                })
            ) {
                E = !1;
                break;
            }
        } else if (!(p === m || o(p, m, n, a, l))) {
            E = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), E;
};
