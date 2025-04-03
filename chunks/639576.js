var r = n(147018),
    i = n(345374),
    o = n(886960),
    a = n(49693),
    c = n(980855),
    u = n(299623),
    s = n(959318),
    f = Array,
    l = Math.max,
    d = Math.min;
r(
    {
        target: 'Array',
        proto: !0
    },
    {
        toSpliced: function (e, t) {
            var n,
                r,
                i,
                p,
                h = u(this),
                v = a(h),
                g = c(e, v),
                w = arguments.length,
                y = 0;
            for (0 === w ? (n = r = 0) : 1 === w ? ((n = 0), (r = v - g)) : ((n = w - 2), (r = d(l(s(t), 0), v - g))), p = f((i = o(v + n - r))); y < g; y++) p[y] = h[y];
            for (; y < g + n; y++) p[y] = arguments[y - g + 2];
            for (; y < i; y++) p[y] = h[y + r - n];
            return p;
        }
    }
),
    i('toSpliced');
