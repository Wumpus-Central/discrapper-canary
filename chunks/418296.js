var r = n(425561),
    i = n(834598),
    o = n(460510),
    a = n(208529),
    s = n(833295),
    l = n(433005),
    c = 200;
function u(e, t, n) {
    var u = -1,
        d = i,
        f = e.length,
        p = !0,
        _ = [],
        h = _;
    if (n) (p = !1), (d = o);
    else if (f >= c) {
        var m = t ? null : s(e);
        if (m) return l(m);
        (p = !1), (d = a), (h = new r());
    } else h = t ? [] : _;
    t: for (; ++u < f; ) {
        var g = e[u],
            E = t ? t(g) : g;
        if (((g = n || 0 !== g ? g : 0), p && E == E)) {
            for (var v = h.length; v--; ) if (h[v] === E) continue t;
            t && h.push(E), _.push(g);
        } else d(h, E, n) || (h !== _ && h.push(E), _.push(g));
    }
    return _;
}
e.exports = u;
