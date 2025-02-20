n.d(t, { Z: () => l });
var r = n(345114),
    i = n(806159),
    o = n(738562),
    a = 1,
    s = 2;
let l = function (e, t, n, l, c, u) {
    var d = n & a,
        f = e.length,
        p = t.length;
    if (f != p && !(d && p > f)) return !1;
    var _ = u.get(e),
        h = u.get(t);
    if (_ && h) return _ == t && h == e;
    var m = -1,
        g = !0,
        E = n & s ? new r.Z() : void 0;
    for (u.set(e, t), u.set(t, e); ++m < f; ) {
        var v = e[m],
            b = t[m];
        if (l) var y = d ? l(b, v, m, t, e, u) : l(v, b, m, e, t, u);
        if (void 0 !== y) {
            if (y) continue;
            g = !1;
            break;
        }
        if (E) {
            if (
                !(0, i.Z)(t, function (e, t) {
                    if (!(0, o.Z)(E, t) && (v === e || c(v, e, n, l, u))) return E.push(t);
                })
            ) {
                g = !1;
                break;
            }
        } else if (!(v === b || c(v, b, n, l, u))) {
            g = !1;
            break;
        }
    }
    return u.delete(e), u.delete(t), g;
};
