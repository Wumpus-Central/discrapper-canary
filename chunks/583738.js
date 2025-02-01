n.d(t, { Z: () => o });
var i = n(421896),
    r = n(533778),
    a = 1,
    s = 2;
let o = function (e, t, n, o) {
    var l = n.length,
        u = l,
        c = !o;
    if (null == e) return !u;
    for (e = Object(e); l--; ) {
        var d = n[l];
        if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
    }
    for (; ++l < u; ) {
        var f = (d = n[l])[0],
            _ = e[f],
            p = d[1];
        if (c && d[2]) {
            if (void 0 === _ && !(f in e)) return !1;
        } else {
            var h = new i.Z();
            if (o) var m = o(_, p, f, e, t, h);
            if (!(void 0 === m ? (0, r.Z)(p, _, a | s, o, h) : m)) return !1;
        }
    }
    return !0;
};
