var n = r(507604),
    i = r(46015),
    s = r(580983),
    a = r(621523),
    o = r(673451),
    u = r(245),
    h = r(822635),
    c = r(527160),
    f = r(79275),
    l = Object.assign,
    p = Object.defineProperty,
    v = i([].concat);
t.exports =
    !l ||
    a(function () {
        if (
            n &&
            1 !==
                l(
                    { b: 1 },
                    l(
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
        var t = {},
            e = {},
            r = Symbol('assign detection'),
            i = 'abcdefghijklmnopqrst';
        return (
            (t[r] = 7),
            i.split('').forEach(function (t) {
                e[t] = t;
            }),
            7 !== l({}, t)[r] || o(l({}, e)).join('') !== i
        );
    })
        ? function (t, e) {
              for (var r = c(t), i = arguments.length, a = 1, l = u.f, p = h.f; i > a; ) for (var g, d = f(arguments[a++]), m = l ? v(o(d), l(d)) : o(d), y = m.length, b = 0; y > b; ) (g = m[b++]), (!n || s(p, d, g)) && (r[g] = d[g]);
              return r;
          }
        : l;
