var r = n(556585),
    i = n(46015),
    a = n(382698),
    o = n(338045),
    s = URLSearchParams,
    l = s.prototype,
    c = i(l.append),
    u = i(l.delete),
    d = i(l.forEach),
    _ = i([].push),
    f = new s('a=1&a=2&b=3');
f.delete('a', 1),
    f.delete('b', void 0),
    f + '' != 'a=2' &&
        r(
            l,
            'delete',
            function (e) {
                var t,
                    n = arguments.length,
                    r = n < 2 ? void 0 : arguments[1];
                if (n && void 0 === r) return u(this, e);
                var i = [];
                d(this, function (e, t) {
                    _(i, {
                        key: t,
                        value: e
                    });
                }),
                    o(n, 1);
                for (var s = a(e), l = a(r), f = 0, p = 0, h = !1, m = i.length; f < m; ) (t = i[f++]), h || t.key === s ? ((h = !0), u(this, t.key)) : p++;
                for (; p < m; ) ((t = i[p++]).key !== s || t.value !== l) && c(this, t.key, t.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
