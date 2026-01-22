var r = n(127375),
    i = n(378777),
    a = n(826509),
    s = n(360087),
    o = n(704193),
    l = n(514035),
    c = 200;
e.exports = function (e, t, n) {
    var u = -1,
        d = i,
        f = e.length,
        p = !0,
        _ = [],
        h = _;
    if (n) (p = !1), (d = a);
    else if (f >= c) {
        var m = t ? null : o(e);
        if (m) return l(m);
        (p = !1), (d = s), (h = new r());
    } else h = t ? [] : _;
    n: for (; ++u < f; ) {
        var g = e[u],
            E = t ? t(g) : g;
        if (((g = n || 0 !== g ? g : 0), p && E == E)) {
            for (var b = h.length; b--; ) if (h[b] === E) continue n;
            t && h.push(E), _.push(g);
        } else d(h, E, n) || (h !== _ && h.push(E), _.push(g));
    }
    return _;
};
