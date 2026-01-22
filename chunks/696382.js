var r = n(292528),
    i = n(461083),
    a = 1,
    s = 2;
e.exports = function (e, t, n, o) {
    var l = n.length,
        c = l,
        u = !o;
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
            var h = new r();
            if (o) var m = o(p, _, f, e, t, h);
            if (!(void 0 === m ? i(_, p, a | s, o, h) : m)) return !1;
        }
    }
    return !0;
};
