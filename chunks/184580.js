var i = r(952256),
    a = r(474883),
    o = r(741674),
    s = r(476508),
    l = function (e, n, r, u, c, d, f, p) {
        for (var h, _, m = c, g = 0, E = !!f && s(f, p); g < u; ) g in r && ((h = E ? E(r[g], g, n) : r[g]), d > 0 && i(h) ? ((_ = a(h)), (m = l(e, n, h, _, m, d - 1) - 1)) : (o(m + 1), (e[m] = h)), m++), g++;
        return m;
    };
e.exports = l;
