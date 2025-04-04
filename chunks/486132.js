var r = n(181794),
    o = n(779688),
    a = n(764908),
    i = n(709583),
    s = n(61824),
    c = n(658971),
    l = a(n(75411).f),
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
