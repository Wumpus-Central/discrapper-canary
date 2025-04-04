var e = n(220159),
    o = n(779688),
    i = n(884805),
    u = n(829575),
    s = n(475424),
    c = n(174344),
    f = n(297523),
    a = n(641623),
    p = n(84186),
    l = n(536448),
    v = n(394370),
    y = n(306983),
    h = v('isConcatSpreadable'),
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
        forced: !x || !l('concat')
    },
    {
        concat: function (t) {
            var r,
                n,
                e,
                o,
                i,
                u = s(this),
                l = p(u, 0),
                v = 0;
            for (r = -1, e = arguments.length; r < e; r++)
                if (((i = -1 === r ? u : arguments[r]), d(i))) for (f(v + (o = c(i))), n = 0; n < o; n++, v++) n in i && a(l, v, i[n]);
                else f(v + 1), a(l, v++, i);
            return (l.length = v), l;
        }
    }
);
