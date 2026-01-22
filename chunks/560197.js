var r = n(557939),
    i = n(633228),
    a = n(732376),
    s = n(503199),
    o = n(273761),
    l = n(581390),
    c = n(120394),
    u = Array,
    d = Math.max,
    f = Math.min;
r(
    {
        target: "Array",
        proto: !0,
    },
    {
        toSpliced: function (e, t) {
            var n,
                r,
                i,
                p,
                _ = l(this),
                h = s(_),
                m = o(e, h),
                g = arguments.length,
                E = 0;
            for (
                0 === g ? (n = r = 0) : 1 === g ? ((n = 0), (r = h - m)) : ((n = g - 2), (r = f(d(c(t), 0), h - m))),
                    p = u((i = a(h + n - r)));
                E < m;
                E++
            )
                p[E] = _[E];
            for (; E < m + n; E++) p[E] = arguments[E - m + 2];
            for (; E < i; E++) p[E] = _[E + r - n];
            return p;
        },
    },
),
    i("toSpliced");
