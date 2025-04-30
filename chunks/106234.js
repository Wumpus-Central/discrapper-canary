var r = n(102074),
    i = n(251064),
    o = n(464880),
    a = n(803607),
    s = n(879893),
    l = n(82075),
    c = 200;
e.exports = function (e, t, n) {
    var u = -1,
        d = i,
        f = e.length,
        _ = !0,
        p = [],
        h = p;
    if (n) (_ = !1), (d = o);
    else if (f >= c) {
        var m = t ? null : s(e);
        if (m) return l(m);
        (_ = !1), (d = a), (h = new r());
    } else h = t ? [] : p;
    n: for (; ++u < f; ) {
        var g = e[u],
            E = t ? t(g) : g;
        if (((g = n || 0 !== g ? g : 0), _ && E == E)) {
            for (var b = h.length; b--; ) if (h[b] === E) continue n;
            t && h.push(E), p.push(g);
        } else d(h, E, n) || (h !== p && h.push(E), p.push(g));
    }
    return p;
};
