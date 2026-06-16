"use strict";
var n = e(834647),
    o = e(486816),
    s = e(453669),
    i = e(407057),
    u = e(529030),
    c = e(794779),
    a = e(279740),
    f = e(287731),
    p = e(107532),
    l = e(787692),
    v = e(61748),
    y = e(738538),
    h = v("isConcatSpreadable"),
    x =
        y >= 51 ||
        !o(function () {
            var t = [];
            return (t[h] = !1), t.concat()[0] !== t;
        }),
    d = function (t) {
        if (!i(t)) return !1;
        var r = t[h];
        return void 0 !== r ? !!r : s(t);
    };
n(
    { target: "Array", proto: !0, arity: 1, forced: !x || !l("concat") },
    {
        concat: function (t) {
            var r,
                e,
                n,
                o,
                s,
                i = u(this),
                l = p(i, 0),
                v = 0;
            for (r = -1, n = arguments.length; r < n; r++)
                if (((s = -1 === r ? i : arguments[r]), d(s)))
                    for (a(v + (o = c(s))), e = 0; e < o; e++, v++) e in s && f(l, v, s[e]);
                else a(v + 1), f(l, v++, s);
            return (l.length = v), l;
        },
    },
);
