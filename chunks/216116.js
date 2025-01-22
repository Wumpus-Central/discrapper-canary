var i = r(859209),
    a = r(581031),
    o = r(714050),
    s = r(202934),
    l = URLSearchParams,
    u = l.prototype,
    c = a(u.append),
    d = a(u.delete),
    f = a(u.forEach),
    p = a([].push),
    h = new l('a=1&a=2&b=3');
h.delete('a', 1),
    h.delete('b', void 0),
    h + '' != 'a=2' &&
        i(
            u,
            'delete',
            function (e) {
                var n,
                    r = arguments.length,
                    i = r < 2 ? void 0 : arguments[1];
                if (r && void 0 === i) return d(this, e);
                var a = [];
                f(this, function (e, n) {
                    p(a, {
                        key: n,
                        value: e
                    });
                }),
                    s(r, 1);
                for (var l = o(e), u = o(i), h = 0, _ = 0, m = !1, g = a.length; h < g; ) (n = a[h++]), m || n.key === l ? ((m = !0), d(this, n.key)) : _++;
                for (; _ < g; ) !((n = a[_++]).key === l && n.value === u) && c(this, n.key, n.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
