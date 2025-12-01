var r = n(425561),
    i = n(393531),
    a = n(208529),
    o = 1,
    s = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & o,
        f = e.length,
        p = t.length;
    if (f != p && !(d && p > f)) return !1;
    var _ = u.get(e),
        m = u.get(t);
    if (_ && m) return _ == t && m == e;
    var h = -1,
        g = !0,
        E = n & s ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++h < f; ) {
        var b = e[h],
            y = t[h];
        if (l) var O = d ? l(y, b, h, t, e, u) : l(b, y, h, e, t, u);
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
    return u.delete(e), u.delete(t), g;
};
