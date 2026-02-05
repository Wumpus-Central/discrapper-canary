"use strict";
var n = r(557939),
    o = r(633228),
    i = r(732376),
    a = r(503199),
    s = r(273761),
    c = r(581390),
    u = r(120394),
    d = Array,
    p = Math.max,
    f = Math.min;
n(
    { target: "Array", proto: !0 },
    {
        toSpliced: function (e, t) {
            var r,
                n,
                o,
                l,
                h = c(this),
                v = a(h),
                y = s(e, v),
                g = arguments.length,
                b = 0;
            for (
                0 === g ? (r = n = 0) : 1 === g ? ((r = 0), (n = v - y)) : ((r = g - 2), (n = f(p(u(t), 0), v - y))),
                    l = d((o = i(v + r - n)));
                b < y;
                b++
            )
                l[b] = h[b];
            for (; b < y + r; b++) l[b] = arguments[b - y + 2];
            for (; b < o; b++) l[b] = h[b + n - r];
            return l;
        },
    },
),
    o("toSpliced");
