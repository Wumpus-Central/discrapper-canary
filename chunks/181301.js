var r = n(447631),
    o = n(821819),
    a = n(96403),
    i = n(646948),
    s = n(302231),
    c = n(729605),
    l = a(n(790248).f),
    u = a([].push),
    d =
        r &&
        o(function () {
            var e = Object.create(null);
            return (e[2] = 2), !l(e, 2);
        }),
    p = function (e) {
        return function (t) {
            for (var n, o = c(t), a = s(o), p = d && null === i(o), h = a.length, f = 0, m = []; h > f; ) (n = a[f++]), (!r || (p ? n in o : l(o, n))) && u(m, e ? [n, o[n]] : o[n]);
            return m;
        };
    };
e.exports = {
    entries: p(!0),
    values: p(!1)
};
