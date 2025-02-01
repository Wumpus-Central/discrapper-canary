var i = n(952256),
    r = n(474883),
    a = n(741674),
    s = n(476508),
    o = function (e, t, n, l, u, c, d, f) {
        for (var _, p, h = u, m = 0, g = !!d && s(d, f); m < l; ) m in n && ((_ = g ? g(n[m], m, t) : n[m]), c > 0 && i(_) ? ((p = r(_)), (h = o(e, t, _, p, h, c - 1) - 1)) : (a(h + 1), (e[h] = _)), h++), m++;
        return h;
    };
e.exports = o;
