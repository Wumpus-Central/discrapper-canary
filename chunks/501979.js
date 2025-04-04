var r = a(425561),
    n = a(393531),
    _ = a(208529);
t.exports = function (t, e, a, o, i, c) {
    var s = 1 & a,
        E = t.length,
        l = e.length;
    if (E != l && !(s && l > E)) return !1;
    var u = c.get(t),
        I = c.get(e);
    if (u && I) return u == e && I == t;
    var R = -1,
        d = !0,
        A = 2 & a ? new r() : void 0;
    for (c.set(t, e), c.set(e, t); ++R < E; ) {
        var f = t[R],
            p = e[R];
        if (o) var N = s ? o(p, f, R, e, t, c) : o(f, p, R, t, e, c);
        if (void 0 !== N) {
            if (N) continue;
            d = !1;
            break;
        }
        if (A) {
            if (
                !n(e, function (t, e) {
                    if (!_(A, e) && (f === t || i(f, t, a, o, c))) return A.push(e);
                })
            ) {
                d = !1;
                break;
            }
        } else if (!(f === p || i(f, p, a, o, c))) {
            d = !1;
            break;
        }
    }
    return c.delete(t), c.delete(e), d;
};
