var n = e(834647),
    o = e(453669),
    s = e(712192),
    i = e(407057),
    u = e(798325),
    c = e(794779),
    a = e(958498),
    f = e(287731),
    p = e(61748),
    l = e(787692),
    v = e(596479),
    y = l("slice"),
    h = p("species"),
    x = Array,
    d = Math.max;
n(
    {
        target: "Array",
        proto: !0,
        forced: !y,
    },
    {
        slice: function (t, r) {
            var e,
                n,
                p,
                l = a(this),
                y = c(l),
                g = u(t, y),
                b = u(void 0 === r ? y : r, y);
            if (
                o(l) &&
                (s((e = l.constructor)) && (e === x || o(e.prototype))
                    ? (e = void 0)
                    : i(e) && null === (e = e[h]) && (e = void 0),
                e === x || void 0 === e)
            )
                return v(l, g, b);
            for (p = 0, n = new (void 0 === e ? x : e)(d(b - g, 0)); g < b; g++, p++) g in l && f(n, p, l[g]);
            return (n.length = p), n;
        },
    },
);
