var i = r(687249),
    a = r(779518),
    o = 1,
    s = 2;
function l(e, n, r, l) {
    var u = r.length,
        c = u,
        d = !l;
    if (null == e) return !c;
    for (e = Object(e); u--; ) {
        var f = r[u];
        if (d && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1;
    }
    for (; ++u < c; ) {
        var p = (f = r[u])[0],
            h = e[p],
            _ = f[1];
        if (d && f[2]) {
            if (void 0 === h && !(p in e)) return !1;
        } else {
            var m = new i();
            if (l) var g = l(h, _, p, e, n, m);
            if (!(void 0 === g ? a(_, h, o | s, l, m) : g)) return !1;
        }
    }
    return !0;
}
e.exports = l;
