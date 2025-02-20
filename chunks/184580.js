var r = n(952256),
    i = n(474883),
    o = n(741674),
    a = n(476508),
    s = function (e, t, n, l, c, u, d, f) {
        for (var p, _, h = c, m = 0, g = !!d && a(d, f); m < l; ) m in n && ((p = g ? g(n[m], m, t) : n[m]), u > 0 && r(p) ? ((_ = i(p)), (h = s(e, t, p, _, h, u - 1) - 1)) : (o(h + 1), (e[h] = p)), h++), m++;
        return h;
    };
e.exports = s;
