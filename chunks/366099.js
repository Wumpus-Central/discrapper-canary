var r = n(88996),
    i = n(914331),
    a = n(861567),
    o = n(48657),
    s = function (e, t, n, l, c, u, d, _) {
        for (var f, p, h = c, m = 0, g = !!d && o(d, _); m < l; ) (m in n && ((f = g ? g(n[m], m, t) : n[m]), u > 0 && r(f) ? ((p = i(f)), (h = s(e, t, f, p, h, u - 1) - 1)) : (a(h + 1), (e[h] = f)), h++), m++);
        return h;
    };
e.exports = s;
