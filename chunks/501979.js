var r = n(425561),
    i = n(393531),
    o = n(208529),
    a = 1,
    s = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & a,
        f = e.length,
        _ = t.length;
    if (f != _ && !(d && _ > f)) return !1;
    var p = u.get(e),
        h = u.get(t);
    if (p && h) return p == t && h == e;
    var m = -1,
        g = !0,
        E = n & s ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++m < f; ) {
        var b = e[m],
            y = t[m];
        if (l) var O = d ? l(y, b, m, t, e, u) : l(b, y, m, e, t, u);
        if (void 0 !== O) {
            if (O) continue;
            g = !1;
            break;
        }
        if (E) {
            if (
                !i(t, function (e, t) {
                    if (!o(E, t) && (b === e || c(b, e, n, l, u))) return E.push(t);
                })
            ) {
                g = !1;
                break;
            }
        } else if (!(b === y || c(b, y, n, l, u))) {
            g = !1;
            break;
        }
    }
    return u.delete(e), u.delete(t), g;
};
