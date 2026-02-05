"use strict";
var r = n(414123),
    a = n(486816),
    o = n(675879),
    i = n(517480),
    s = n(859911),
    l = n(958498),
    c = o(n(321762).f),
    u = o([].push),
    d =
        r &&
        a(function () {
            var e = Object.create(null);
            return (e[2] = 2), !c(e, 2);
        }),
    p = function (e) {
        return function (t) {
            for (var n, a = l(t), o = s(a), p = d && null === i(a), h = o.length, f = 0, m = []; h > f; )
                (n = o[f++]), (!r || (p ? n in a : c(a, n))) && u(m, e ? [n, a[n]] : a[n]);
            return m;
        };
    };
e.exports = { entries: p(!0), values: p(!1) };
