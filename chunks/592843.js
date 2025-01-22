var i = r(447631),
    a = r(96403),
    o = r(570596),
    s = r(821819),
    l = r(302231),
    u = r(502640),
    c = r(790248),
    d = r(611345),
    f = r(186973),
    p = Object.assign,
    h = Object.defineProperty,
    _ = a([].concat);
e.exports =
    !p ||
    s(function () {
        if (
            i &&
            1 !==
                p(
                    { b: 1 },
                    p(
                        h({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                h(this, 'b', {
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
            n = {},
            r = Symbol('assign detection'),
            a = 'abcdefghijklmnopqrst';
        return (
            (e[r] = 7),
            a.split('').forEach(function (e) {
                n[e] = e;
            }),
            7 !== p({}, e)[r] || l(p({}, n)).join('') !== a
        );
    })
        ? function (e, n) {
              for (var r = d(e), a = arguments.length, s = 1, p = u.f, h = c.f; a > s; ) {
                  for (var m, g = f(arguments[s++]), E = p ? _(l(g), p(g)) : l(g), v = E.length, y = 0; v > y; ) (m = E[y++]), (!i || o(h, g, m)) && (r[m] = g[m]);
              }
              return r;
          }
        : p;
