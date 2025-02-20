var r = n(67867),
    i = n(821819),
    o = n(952256),
    a = n(982665),
    s = n(611345),
    l = n(474883),
    c = n(741674),
    u = n(256110),
    d = n(15507),
    f = n(469624),
    p = n(360518),
    _ = n(882708),
    h = p('isConcatSpreadable'),
    m =
        _ >= 51 ||
        !i(function () {
            var e = [];
            return (e[h] = !1), e.concat()[0] !== e;
        }),
    g = function (e) {
        if (!a(e)) return !1;
        var t = e[h];
        return void 0 !== t ? !!t : o(e);
    };
r(
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
                r,
                i,
                o,
                a = s(this),
                f = d(a, 0),
                p = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (((o = -1 === t ? a : arguments[t]), g(o))) for (c(p + (i = l(o))), n = 0; n < i; n++, p++) n in o && u(f, p, o[n]);
                else c(p + 1), u(f, p++, o);
            return (f.length = p), f;
        }
    }
);
