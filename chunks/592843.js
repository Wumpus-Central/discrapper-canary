var e = n(447631),
    o = n(96403),
    i = n(570596),
    u = n(821819),
    s = n(302231),
    c = n(502640),
    f = n(790248),
    a = n(611345),
    p = n(186973),
    v = Object.assign,
    l = Object.defineProperty,
    y = o([].concat);
t.exports =
    !v ||
    u(function () {
        if (
            e &&
            1 !==
                v(
                    { b: 1 },
                    v(
                        l({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                l(this, 'b', {
                                    value: 3,
                                    enumerable: !1
                                });
                            }
                        }),
                        { b: 2 }
                    )
                ).b
        )
            return !0;
        var t = {},
            r = {},
            n = Symbol('assign detection'),
            o = 'abcdefghijklmnopqrst';
        return (
            (t[n] = 7),
            o.split('').forEach(function (t) {
                r[t] = t;
            }),
            7 !== v({}, t)[n] || s(v({}, r)).join('') !== o
        );
    })
        ? function (t, r) {
              for (var n = a(t), o = arguments.length, u = 1, v = c.f, l = f.f; o > u; ) for (var h, x = p(arguments[u++]), d = v ? y(s(x), v(x)) : s(x), g = d.length, b = 0; g > b; ) (h = d[b++]), (!e || i(l, x, h)) && (n[h] = x[h]);
              return n;
          }
        : v;
