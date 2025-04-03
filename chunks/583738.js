r.d(t, { Z: () => a });
var n = r(421896),
    o = r(533778);
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
            f = u[1];
        if (s && u[2]) {
            if (void 0 === p && !(c in e)) return !1;
        } else {
            var d = new n.Z();
            if (a) var h = a(p, f, c, e, t, d);
            if (!(void 0 === h ? (0, o.Z)(f, p, 3, a, d) : h)) return !1;
        }
    }
    return !0;
};
