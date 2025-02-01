var i = n(67867),
    r = n(821819),
    a = n(952256),
    s = n(982665),
    o = n(611345),
    l = n(474883),
    u = n(741674),
    c = n(256110),
    d = n(15507),
    f = n(469624),
    _ = n(360518),
    p = n(882708),
    h = _('isConcatSpreadable'),
    m =
        p >= 51 ||
        !r(function () {
            var e = [];
            return (e[h] = !1), e.concat()[0] !== e;
        }),
    g = function (e) {
        if (!s(e)) return !1;
        var t = e[h];
        return void 0 !== t ? !!t : a(e);
    };
i(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: !m || !f('concat')
    },
    {
        concat: function (e) {
            var t,
                n,
                i,
                r,
                a,
                s = o(this),
                f = d(s, 0),
                _ = 0;
            for (t = -1, i = arguments.length; t < i; t++)
                if (((a = -1 === t ? s : arguments[t]), g(a))) for (u(_ + (r = l(a))), n = 0; n < r; n++, _++) n in a && c(f, _, a[n]);
                else u(_ + 1), c(f, _++, a);
            return (f.length = _), f;
        }
    }
);
