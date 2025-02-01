var i = n(859209),
    r = n(581031),
    a = n(714050),
    s = n(202934),
    o = URLSearchParams,
    l = o.prototype,
    u = r(l.append),
    c = r(l.delete),
    d = r(l.forEach),
    f = r([].push),
    _ = new o('a=1&a=2&b=3');
_.delete('a', 1),
    _.delete('b', void 0),
    _ + '' != 'a=2' &&
        i(
            l,
            'delete',
            function (e) {
                var t,
                    n = arguments.length,
                    i = n < 2 ? void 0 : arguments[1];
                if (n && void 0 === i) return c(this, e);
                var r = [];
                d(this, function (e, t) {
                    f(r, {
                        key: t,
                        value: e
                    });
                }),
                    s(n, 1);
                for (var o = a(e), l = a(i), _ = 0, p = 0, h = !1, m = r.length; _ < m; ) (t = r[_++]), h || t.key === o ? ((h = !0), c(this, t.key)) : p++;
                for (; p < m; ) ((t = r[p++]).key === o && t.value === l) || u(this, t.key, t.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
