var r = a(425561),
    n = a(393531),
    o = a(208529);
t.exports = function (t, e, a, _, i, c) {
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
        if (_) var T = s ? _(p, f, R, e, t, c) : _(f, p, R, t, e, c);
        if (void 0 !== T) {
            if (T) continue;
            d = !1;
            break;
        }
        if (A) {
            if (
                !n(e, function (t, e) {
                    if (!o(A, e) && (f === t || i(f, t, a, _, c))) return A.push(e);
                })
            ) {
                d = !1;
                break;
            }
        } else if (!(f === p || i(f, p, a, _, c))) {
            d = !1;
            break;
        }
    }
    return c.delete(t), c.delete(e), d;
};
