var r = n(425561),
    i = n(834598),
    a = n(460510),
    o = n(208529),
    s = n(833295),
    l = n(433005),
    c = 200;
e.exports = function (e, t, n) {
    var u = -1,
        d = i,
        f = e.length,
        p = !0,
        _ = [],
        m = _;
    if (n) (p = !1), (d = a);
    else if (f >= c) {
        var h = t ? null : s(e);
        if (h) return l(h);
        (p = !1), (d = o), (m = new r());
    } else m = t ? [] : _;
    n: for (; ++u < f; ) {
        var g = e[u],
            E = t ? t(g) : g;
        if (((g = n || 0 !== g ? g : 0), p && E == E)) {
            for (var b = m.length; b--; ) if (m[b] === E) continue n;
            t && m.push(E), _.push(g);
        } else d(m, E, n) || (m !== _ && m.push(E), _.push(g));
    }
    return _;
};
