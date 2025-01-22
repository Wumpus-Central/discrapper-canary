var i = r(67867),
    a = r(821819),
    o = r(952256),
    s = r(982665),
    l = r(611345),
    u = r(474883),
    c = r(741674),
    d = r(256110),
    f = r(15507),
    p = r(469624),
    h = r(360518),
    _ = r(882708),
    m = h('isConcatSpreadable'),
    g =
        _ >= 51 ||
        !a(function () {
            var e = [];
            return (e[m] = !1), e.concat()[0] !== e;
        }),
    E = function (e) {
        if (!s(e)) return !1;
        var n = e[m];
        return void 0 !== n ? !!n : o(e);
    };
i(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: !g || !p('concat')
    },
    {
        concat: function (e) {
            var n,
                r,
                i,
                a,
                o,
                s = l(this),
                p = f(s, 0),
                h = 0;
            for (n = -1, i = arguments.length; n < i; n++)
                if (((o = -1 === n ? s : arguments[n]), E(o))) for (c(h + (a = u(o))), r = 0; r < a; r++, h++) r in o && d(p, h, o[r]);
                else c(h + 1), d(p, h++, o);
            return (p.length = h), p;
        }
    }
);
