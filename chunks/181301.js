var i = r(447631),
    a = r(821819),
    o = r(96403),
    s = r(646948),
    l = r(302231),
    u = r(729605),
    c = o(r(790248).f),
    d = o([].push),
    f =
        i &&
        a(function () {
            var e = Object.create(null);
            return (e[2] = 2), !c(e, 2);
        }),
    p = function (e) {
        return function (n) {
            for (var r, a = u(n), o = l(a), p = f && null === s(a), h = o.length, _ = 0, m = []; h > _; ) (r = o[_++]), (!i || (p ? r in a : c(a, r))) && d(m, e ? [r, a[r]] : a[r]);
            return m;
        };
    };
e.exports = {
    entries: p(!0),
    values: p(!1)
};
