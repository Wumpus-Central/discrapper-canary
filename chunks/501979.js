var r = n(425561),
    i = n(393531),
    a = n(208529),
    o = 1,
    s = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & o,
        _ = e.length,
        f = t.length;
    if (_ != f && !(d && f > _)) return !1;
    var p = u.get(e),
        h = u.get(t);
    if (p && h) return p == t && h == e;
    var m = -1,
        g = !0,
        E = n & s ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++m < _; ) {
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
                    if (!a(E, t) && (b === e || c(b, e, n, l, u))) return E.push(t);
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
    return (u.delete(e), u.delete(t), g);
};
