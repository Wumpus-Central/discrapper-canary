var n = r(556585),
    i = r(46015),
    s = r(382698),
    a = r(338045),
    o = URLSearchParams,
    u = o.prototype,
    h = i(u.append),
    c = i(u.delete),
    f = i(u.forEach),
    l = i([].push),
    p = new o('a=1&a=2&b=3');
(p.delete('a', 1),
    p.delete('b', void 0),
    p + '' != 'a=2' &&
        n(
            u,
            'delete',
            function (t) {
                var e,
                    r = arguments.length,
                    n = r < 2 ? void 0 : arguments[1];
                if (r && void 0 === n) return c(this, t);
                var i = [];
                (f(this, function (t, e) {
                    l(i, {
                        key: e,
                        value: t
                    });
                }),
                    a(r, 1));
                for (var o = s(t), u = s(n), p = 0, v = 0, g = !1, d = i.length; p < d; ) ((e = i[p++]), g || e.key === o ? ((g = !0), c(this, e.key)) : v++);
                for (; v < d; ) ((e = i[v++]).key !== o || e.value !== u) && h(this, e.key, e.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        ));
