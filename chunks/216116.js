var r = n(859209),
    i = n(581031),
    o = n(714050),
    a = n(202934),
    s = URLSearchParams,
    l = s.prototype,
    c = i(l.append),
    u = i(l.delete),
    d = i(l.forEach),
    f = i([].push),
    p = new s('a=1&a=2&b=3');
p.delete('a', 1),
    p.delete('b', void 0),
    p + '' != 'a=2' &&
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
                for (var s = o(e), l = o(r), p = 0, _ = 0, h = !1, m = i.length; p < m; ) (t = i[p++]), h || t.key === s ? ((h = !0), u(this, t.key)) : _++;
                for (; _ < m; ) ((t = i[_++]).key !== s || t.value !== l) && c(this, t.key, t.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
