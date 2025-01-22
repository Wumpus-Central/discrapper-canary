var i = r(102074),
    a = r(153027),
    o = r(803607),
    s = 1,
    l = 2;
function u(e, n, r, u, c, d) {
    var f = r & s,
        p = e.length,
        h = n.length;
    if (p != h && !(f && h > p)) return !1;
    var _ = d.get(e);
    if (_ && d.get(n)) return _ == n;
    var m = -1,
        g = !0,
        E = r & l ? new i() : void 0;
    for (d.set(e, n), d.set(n, e); ++m < p; ) {
        var v = e[m],
            y = n[m];
        if (u) var b = f ? u(y, v, m, n, e, d) : u(v, y, m, e, n, d);
        if (void 0 !== b) {
            if (b) continue;
            g = !1;
            break;
        }
        if (E) {
            if (
                !a(n, function (e, n) {
                    if (!o(E, n) && (v === e || c(v, e, r, u, d))) return E.push(n);
                })
            ) {
                g = !1;
                break;
            }
        } else if (!(v === y || c(v, y, r, u, d))) {
            g = !1;
            break;
        }
    }
    return d.delete(e), d.delete(n), g;
}
e.exports = u;
