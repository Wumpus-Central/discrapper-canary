var r = n(447631),
    i = n(821819),
    o = n(96403),
    a = n(646948),
    s = n(302231),
    l = n(729605),
    c = o(n(790248).f),
    u = o([].push),
    d =
        r &&
        i(function () {
            var e = Object.create(null);
            return (e[2] = 2), !c(e, 2);
        }),
    f = function (e) {
        return function (t) {
            for (var n, i = l(t), o = s(i), f = d && null === a(i), p = o.length, _ = 0, h = []; p > _; ) (n = o[_++]), (!r || (f ? n in i : c(i, n))) && u(h, e ? [n, i[n]] : i[n]);
            return h;
        };
    };
e.exports = {
    entries: f(!0),
    values: f(!1)
};
