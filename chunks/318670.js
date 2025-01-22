var i = r(345114),
    a = r(806159),
    o = r(738562),
    s = 1,
    l = 2;
function u(e, n, r, u, c, d) {
    var f = r & s,
        p = e.length,
        h = n.length;
    if (p != h && !(f && h > p)) return !1;
    var _ = d.get(e),
        m = d.get(n);
    if (_ && m) return _ == n && m == e;
    var g = -1,
        E = !0,
        v = r & l ? new i.Z() : void 0;
    for (d.set(e, n), d.set(n, e); ++g < p; ) {
        var y = e[g],
            b = n[g];
        if (u) var I = f ? u(b, y, g, n, e, d) : u(y, b, g, e, n, d);
        if (void 0 !== I) {
            if (I) continue;
            E = !1;
            break;
        }
        if (v) {
            if (
                !(0, a.Z)(n, function (e, n) {
                    if (!(0, o.Z)(v, n) && (y === e || c(y, e, r, u, d))) return v.push(n);
                })
            ) {
                E = !1;
                break;
            }
        } else if (!(y === b || c(y, b, r, u, d))) {
            E = !1;
            break;
        }
    }
    return d.delete(e), d.delete(n), E;
}
n.Z = u;
