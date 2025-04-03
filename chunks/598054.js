var r = n(67867),
    o = n(570596),
    a = n(982665),
    i = n(28886),
    s = n(453556),
    c = n(65007),
    l = n(646948);
r(
    {
        target: 'Reflect',
        stat: !0
    },
    {
        get: function e(t, n) {
            var r,
                u,
                d = arguments.length < 3 ? t : arguments[2];
            return i(t) === d ? t[n] : (r = c.f(t, n)) ? (s(r) ? r.value : void 0 === r.get ? void 0 : o(r.get, d)) : a((u = l(t))) ? e(u, n, d) : void 0;
        }
    }
);
