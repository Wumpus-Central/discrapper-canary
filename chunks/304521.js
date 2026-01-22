var r = n(703441),
    i = n(503199),
    a = n(732376),
    s = n(221015),
    o = function (e, t, n, l, c, u, d, f) {
        for (var p, _, h = c, m = 0, g = !!d && s(d, f); m < l; )
            m in n &&
                ((p = g ? g(n[m], m, t) : n[m]),
                u > 0 && r(p) ? ((_ = i(p)), (h = o(e, t, p, _, h, u - 1) - 1)) : (a(h + 1), (e[h] = p)),
                h++),
                m++;
        return h;
    };
e.exports = o;
