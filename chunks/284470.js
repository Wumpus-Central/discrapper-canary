var e = n(67867),
    o = n(821819),
    i = n(952256),
    u = n(982665),
    s = n(611345),
    c = n(474883),
    f = n(741674),
    a = n(256110),
    p = n(15507),
    v = n(469624),
    l = n(360518),
    y = n(882708),
    h = l('isConcatSpreadable'),
    x =
        y >= 51 ||
        !o(function () {
            var t = [];
            return (t[h] = !1), t.concat()[0] !== t;
        }),
    d = function (t) {
        if (!u(t)) return !1;
        var r = t[h];
        return void 0 !== r ? !!r : i(t);
    };
e(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: !x || !v('concat')
    },
    {
        concat: function (t) {
            var r,
                n,
                e,
                o,
                i,
                u = s(this),
                v = p(u, 0),
                l = 0;
            for (r = -1, e = arguments.length; r < e; r++)
                if (((i = -1 === r ? u : arguments[r]), d(i))) for (f(l + (o = c(i))), n = 0; n < o; n++, l++) n in i && a(v, l, i[n]);
                else f(l + 1), a(v, l++, i);
            return (v.length = l), v;
        }
    }
);
