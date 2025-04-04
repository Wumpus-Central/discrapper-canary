var e = n(181794),
    o = n(764908),
    i = n(517522),
    u = n(779688),
    s = n(61824),
    c = n(880887),
    f = n(75411),
    a = n(475424),
    p = n(562690),
    l = Object.assign,
    v = Object.defineProperty,
    y = o([].concat);
t.exports =
    !l ||
    u(function () {
        if (
            e &&
            1 !==
                l(
                    { b: 1 },
                    l(
                        v({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                v(this, 'b', {
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
            7 !== l({}, t)[n] || s(l({}, r)).join('') !== o
        );
    })
        ? function (t, r) {
              for (var n = a(t), o = arguments.length, u = 1, l = c.f, v = f.f; o > u; ) for (var h, x = p(arguments[u++]), d = l ? y(s(x), l(x)) : s(x), g = d.length, b = 0; g > b; ) (h = d[b++]), (!e || i(v, x, h)) && (n[h] = x[h]);
              return n;
          }
        : l;
