var r = n(952256),
    o = n(474883),
    a = n(741674),
    i = n(476508),
    s = function (e, t, n, c, l, u, d, p) {
        for (var h, f, m = l, y = 0, v = !!d && i(d, p); y < c; ) y in n && ((h = v ? v(n[y], y, t) : n[y]), u > 0 && r(h) ? ((f = o(h)), (m = s(e, t, h, f, m, u - 1) - 1)) : (a(m + 1), (e[m] = h)), m++), y++;
        return m;
    };
e.exports = s;
