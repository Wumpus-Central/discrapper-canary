n.d(t, { Z: () => l });
var i = n(345114),
    r = n(806159),
    a = n(738562),
    s = 1,
    o = 2;
let l = function (e, t, n, l, u, c) {
    var d = n & s,
        f = e.length,
        _ = t.length;
    if (f != _ && !(d && _ > f)) return !1;
    var p = c.get(e),
        h = c.get(t);
    if (p && h) return p == t && h == e;
    var m = -1,
        g = !0,
        E = n & o ? new i.Z() : void 0;
    for (c.set(e, t), c.set(t, e); ++m < f; ) {
        var v = e[m],
            y = t[m];
        if (l) var I = d ? l(y, v, m, t, e, c) : l(v, y, m, e, t, c);
        if (void 0 !== I) {
            if (I) continue;
            g = !1;
            break;
        }
        if (E) {
            if (
                !(0, r.Z)(t, function (e, t) {
                    if (!(0, a.Z)(E, t) && (v === e || u(v, e, n, l, c))) return E.push(t);
                })
            ) {
                g = !1;
                break;
            }
        } else if (!(v === y || u(v, y, n, l, c))) {
            g = !1;
            break;
        }
    }
    return c.delete(e), c.delete(t), g;
};
