var r = n(687249),
    i = n(779518),
    a = 1,
    o = 2;
e.exports = function (e, t, n, s) {
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
            var m = new r();
            if (s) var h = s(p, _, f, e, t, m);
            if (!(void 0 === h ? i(_, p, a | o, s, m) : h)) return !1;
        }
    }
    return !0;
};
