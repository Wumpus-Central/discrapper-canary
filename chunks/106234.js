var r = n(102074),
    i = n(251064),
    o = n(464880),
    a = n(803607),
    s = n(879893),
    l = n(82075),
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
