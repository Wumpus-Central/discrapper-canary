var r = n(507604),
    i = n(46015),
    o = n(580983),
    a = n(621523),
    s = n(673451),
    l = n(245),
    c = n(822635),
    u = n(527160),
    d = n(79275),
    f = Object.assign,
    _ = Object.defineProperty,
    p = i([].concat);
e.exports =
    !f ||
    a(function () {
        if (
            r &&
            1 !==
                f(
                    { b: 1 },
                    f(
                        _({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                _(this, 'b', {
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
              for (var n = u(e), i = arguments.length, a = 1, f = l.f, _ = c.f; i > a; ) for (var h, m = d(arguments[a++]), g = f ? p(s(m), f(m)) : s(m), E = g.length, b = 0; E > b; ) (h = g[b++]), (!r || o(_, m, h)) && (n[h] = m[h]);
              return n;
          }
        : f;
