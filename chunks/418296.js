var i = n(425561),
    r = n(834598),
    a = n(460510),
    s = n(208529),
    o = n(833295),
    l = n(433005),
    u = 200;
function c(e, t, n) {
    var c = -1,
        d = r,
        f = e.length,
        _ = !0,
        p = [],
        h = p;
    if (n) (_ = !1), (d = a);
    else if (f >= u) {
        var m = t ? null : o(e);
        if (m) return l(m);
        (_ = !1), (d = s), (h = new i());
    } else h = t ? [] : p;
    t: for (; ++c < f; ) {
        var g = e[c],
            E = t ? t(g) : g;
        if (((g = n || 0 !== g ? g : 0), _ && E == E)) {
            for (var v = h.length; v--; ) if (h[v] === E) continue t;
            t && h.push(E), p.push(g);
        } else d(h, E, n) || (h !== p && h.push(E), p.push(g));
    }
    return p;
}
e.exports = c;
