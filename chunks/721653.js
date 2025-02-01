var i = n(687249),
    r = n(779518),
    a = 1,
    s = 2;
function o(e, t, n, o) {
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
            var h = new i();
            if (o) var m = o(_, p, f, e, t, h);
            if (!(void 0 === m ? r(p, _, a | s, o, h) : m)) return !1;
        }
    }
    return !0;
}
e.exports = o;
