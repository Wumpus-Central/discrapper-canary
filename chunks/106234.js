var i = r(102074),
    a = r(251064),
    o = r(464880),
    s = r(803607),
    l = r(879893),
    u = r(82075),
    c = 200;
function d(e, n, r) {
    var d = -1,
        f = a,
        p = e.length,
        h = !0,
        _ = [],
        m = _;
    if (r) (h = !1), (f = o);
    else if (p >= c) {
        var g = n ? null : l(e);
        if (g) return u(g);
        (h = !1), (f = s), (m = new i());
    } else m = n ? [] : _;
    t: for (; ++d < p; ) {
        var E = e[d],
            v = n ? n(E) : E;
        if (((E = r || 0 !== E ? E : 0), h && v == v)) {
            for (var y = m.length; y--; ) if (m[y] === v) continue t;
            n && m.push(v), _.push(E);
        } else !f(m, v, r) && (m !== _ && m.push(v), _.push(E));
    }
    return _;
}
e.exports = d;
