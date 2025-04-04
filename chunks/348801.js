var r = n(220159),
    o = n(517522),
    a = n(829575),
    i = n(921413),
    s = n(735569),
    c = n(378105),
    l = n(709583);
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
