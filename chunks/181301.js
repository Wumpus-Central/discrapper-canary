var i = n(447631),
    r = n(821819),
    a = n(96403),
    s = n(646948),
    o = n(302231),
    l = n(729605),
    u = a(n(790248).f),
    c = a([].push),
    d =
        i &&
        r(function () {
            var e = Object.create(null);
            return (e[2] = 2), !u(e, 2);
        }),
    f = function (e) {
        return function (t) {
            for (var n, r = l(t), a = o(r), f = d && null === s(r), _ = a.length, p = 0, h = []; _ > p; ) (n = a[p++]), (!i || (f ? n in r : u(r, n))) && c(h, e ? [n, r[n]] : r[n]);
            return h;
        };
    };
e.exports = {
    entries: f(!0),
    values: f(!1)
};
