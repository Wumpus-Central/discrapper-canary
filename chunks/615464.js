"use strict";
r.d(t, { A: () => i });
var n = r(722242),
    o = r(826479),
    a = r(656446);
let i = function (e, t, r, i, l, s) {
    var u = 1 & r,
        c = e.length,
        p = t.length;
    if (c != p && !(u && p > c)) return !1;
    var d = s.get(e),
        f = s.get(t);
    if (d && f) return d == t && f == e;
    var h = -1,
        b = !0,
        v = 2 & r ? new n.A() : void 0;
    for (s.set(e, t), s.set(t, e); ++h < c; ) {
        var g = e[h],
            x = t[h];
        if (i) var y = u ? i(x, g, h, t, e, s) : i(g, x, h, e, t, s);
        if (void 0 !== y) {
            if (y) continue;
            b = !1;
            break;
        }
        if (v) {
            if (
                !(0, o.A)(t, function (e, t) {
                    if (!(0, a.A)(v, t) && (g === e || l(g, e, r, i, s))) return v.push(t);
                })
            ) {
                b = !1;
                break;
            }
        } else if (!(g === x || l(g, x, r, i, s))) {
            b = !1;
            break;
        }
    }
    return s.delete(e), s.delete(t), b;
};
