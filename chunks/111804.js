var r = n(556585),
    i = n(46015),
    o = n(382698),
    a = n(338045),
    s = URLSearchParams,
    l = s.prototype,
    c = i(l.append),
    u = i(l.delete),
    d = i(l.forEach),
    f = i([].push),
    _ = new s('a=1&a=2&b=3');
_.delete('a', 1),
    _.delete('b', void 0),
    _ + '' != 'a=2' &&
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
                    f(i, {
                        key: t,
                        value: e
                    });
                }),
                    a(n, 1);
                for (var s = o(e), l = o(r), _ = 0, p = 0, h = !1, m = i.length; _ < m; ) (t = i[_++]), h || t.key === s ? ((h = !0), u(this, t.key)) : p++;
                for (; p < m; ) ((t = i[p++]).key !== s || t.value !== l) && c(this, t.key, t.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
