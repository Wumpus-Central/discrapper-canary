var r = n(88996),
    i = n(914331),
    a = n(861567),
    o = n(48657),
    s = function (e, t, n, l, c, u, d, f) {
        for (var p, _, m = c, h = 0, g = !!d && o(d, f); h < l; )
            h in n &&
                ((p = g ? g(n[h], h, t) : n[h]),
                u > 0 && r(p) ? ((_ = i(p)), (m = s(e, t, p, _, m, u - 1) - 1)) : (a(m + 1), (e[m] = p)),
                m++),
                h++;
        return m;
    };
e.exports = s;
