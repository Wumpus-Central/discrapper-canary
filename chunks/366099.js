var r = n(88996),
    i = n(914331),
    o = n(861567),
    a = n(48657),
    s = function (e, t, n, l, c, u, d, f) {
        for (var _, p, h = c, m = 0, g = !!d && a(d, f); m < l; ) m in n && ((_ = g ? g(n[m], m, t) : n[m]), u > 0 && r(_) ? ((p = i(_)), (h = s(e, t, _, p, h, u - 1) - 1)) : (o(h + 1), (e[h] = _)), h++), m++;
        return h;
    };
e.exports = s;
