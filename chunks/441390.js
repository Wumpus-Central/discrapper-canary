var i = r(325008),
    a = r(581031),
    o = r(926515),
    s = r(936940),
    l = r(835884),
    u = r(279129),
    c = r(610067),
    d = r(339718),
    f = r(470592),
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
