var r = n(453669),
    a = n(794779),
    o = n(279740),
    i = n(241091),
    s = function (e, t, n, l, c, u, d, p) {
        for (var h, f, m = c, y = 0, v = !!d && i(d, p); y < l; )
            y in n &&
                ((h = v ? v(n[y], y, t) : n[y]),
                u > 0 && r(h) ? ((f = a(h)), (m = s(e, t, h, f, m, u - 1) - 1)) : (o(m + 1), (e[m] = h)),
                m++),
                y++;
        return m;
    };
e.exports = s;
