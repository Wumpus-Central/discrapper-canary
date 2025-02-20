var r = n(102074),
    i = n(153027),
    o = n(803607),
    a = 1,
    s = 2;
function l(e, t, n, l, c, u) {
    var d = n & a,
        f = e.length,
        p = t.length;
    if (f != p && !(d && p > f)) return !1;
    var _ = u.get(e);
    if (_ && u.get(t)) return _ == t;
    var h = -1,
        m = !0,
        g = n & s ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++h < f; ) {
        var E = e[h],
            v = t[h];
        if (l) var b = d ? l(v, E, h, t, e, u) : l(E, v, h, e, t, u);
        if (void 0 !== b) {
            if (b) continue;
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
        } else if (!(E === v || c(E, v, n, l, u))) {
            m = !1;
            break;
        }
    }
    return u.delete(e), u.delete(t), m;
}
e.exports = l;
