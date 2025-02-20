var r = n(447631),
    i = n(96403),
    o = n(570596),
    a = n(821819),
    s = n(302231),
    l = n(502640),
    c = n(790248),
    u = n(611345),
    d = n(186973),
    f = Object.assign,
    p = Object.defineProperty,
    _ = i([].concat);
e.exports =
    !f ||
    a(function () {
        if (
            r &&
            1 !==
                f(
                    { b: 1 },
                    f(
                        p({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                p(this, 'b', {
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
        var e = {},
            t = {},
            n = Symbol('assign detection'),
            i = 'abcdefghijklmnopqrst';
        return (
            (e[n] = 7),
            i.split('').forEach(function (e) {
                t[e] = e;
            }),
            7 !== f({}, e)[n] || s(f({}, t)).join('') !== i
        );
    })
        ? function (e, t) {
              for (var n = u(e), i = arguments.length, a = 1, f = l.f, p = c.f; i > a; ) for (var h, m = d(arguments[a++]), g = f ? _(s(m), f(m)) : s(m), E = g.length, v = 0; E > v; ) (h = g[v++]), (!r || o(p, m, h)) && (n[h] = m[h]);
              return n;
          }
        : f;
