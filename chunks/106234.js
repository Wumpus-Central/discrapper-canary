var r = n(102074),
    i = n(251064),
    a = n(464880),
    o = n(803607),
    s = n(879893),
    l = n(82075),
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
