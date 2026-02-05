"use strict";
r.d(t, { A: () => a });
var n = r(634502),
    o = r(329513);
let a = function (e, t, r, a) {
    var i = r.length,
        l = i,
        s = !a;
    if (null == e) return !l;
    for (e = Object(e); i--; ) {
        var u = r[i];
        if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
    }
    for (; ++i < l; ) {
        var c = (u = r[i])[0],
            p = e[c],
            d = u[1];
        if (s && u[2]) {
            if (void 0 === p && !(c in e)) return !1;
        } else {
            var f = new n.A();
            if (a) var h = a(p, d, c, e, t, f);
            if (!(void 0 === h ? (0, o.A)(d, p, 3, a, f) : h)) return !1;
        }
    }
    return !0;
};
