n.d(t, { Z: () => s });
var r = n(421896),
    i = n(533778),
    o = 1,
    a = 2;
let s = function (e, t, n, s) {
    var l = n.length,
        c = l,
        u = !s;
    if (null == e) return !c;
    for (e = Object(e); l--; ) {
        var d = n[l];
        if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
    }
    for (; ++l < c; ) {
        var f = (d = n[l])[0],
            p = e[f],
            _ = d[1];
        if (u && d[2]) {
            if (void 0 === p && !(f in e)) return !1;
        } else {
            var h = new r.Z();
            if (s) var m = s(p, _, f, e, t, h);
            if (!(void 0 === m ? (0, i.Z)(_, p, o | a, s, h) : m)) return !1;
        }
    }
    return !0;
};
