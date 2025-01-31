var i = n(325008),
    r = n(581031),
    a = n(926515),
    s = n(936940),
    o = n(835884),
    l = n(279129),
    u = n(610067),
    c = n(339718),
    d = n(470592),
    f = Object.assign,
    _ = Object.defineProperty,
    p = r([].concat);
e.exports =
    !f ||
    s(function () {
        if (
            i &&
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
            r = 'abcdefghijklmnopqrst';
        return (
            (e[n] = 7),
            r.split('').forEach(function (e) {
                t[e] = e;
            }),
            7 !== f({}, e)[n] || o(f({}, t)).join('') !== r
        );
    })
        ? function (e, t) {
              for (var n = c(e), r = arguments.length, s = 1, f = l.f, _ = u.f; r > s; ) for (var h, m = d(arguments[s++]), g = f ? p(o(m), f(m)) : o(m), E = g.length, v = 0; E > v; ) (h = g[v++]), (!i || a(_, m, h)) && (n[h] = m[h]);
              return n;
          }
        : f;
