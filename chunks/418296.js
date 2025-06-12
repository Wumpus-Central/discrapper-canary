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
        _ = e.length,
        f = !0,
        p = [],
        h = p;
    if (n) (f = !1), (d = a);
    else if (_ >= c) {
        var m = t ? null : s(e);
        if (m) return l(m);
        (f = !1), (d = o), (h = new r());
    } else h = t ? [] : p;
    n: for (; ++u < _; ) {
        var g = e[u],
            E = t ? t(g) : g;
        if (((g = n || 0 !== g ? g : 0), f && E == E)) {
            for (var b = h.length; b--; ) if (h[b] === E) continue n;
            t && h.push(E), p.push(g);
        } else d(h, E, n) || (h !== p && h.push(E), p.push(g));
    }
    return p;
};
