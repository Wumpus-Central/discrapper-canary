var n = e(414123),
    o = e(675879),
    s = e(664886),
    i = e(486816),
    u = e(859911),
    c = e(172574),
    a = e(321762),
    f = e(529030),
    p = e(556598),
    l = Object.assign,
    v = Object.defineProperty,
    y = o([].concat);
t.exports =
    !l ||
    i(function () {
        if (
            n &&
            1 !==
                l(
                    {
                        b: 1,
                    },
                    l(
                        v({}, "a", {
                            enumerable: !0,
                            get: function () {
                                v(this, "b", {
                                    value: 3,
                                    enumerable: !1,
                                });
                            },
                        }),
                        {
                            b: 2,
                        },
                    ),
                ).b
        )
            return !0;
        var t = {},
            r = {},
            e = Symbol("assign detection"),
            o = "abcdefghijklmnopqrst";
        return (
            (t[e] = 7),
            o.split("").forEach(function (t) {
                r[t] = t;
            }),
            7 !== l({}, t)[e] || u(l({}, r)).join("") !== o
        );
    })
        ? function (t, r) {
              for (var e = f(t), o = arguments.length, i = 1, l = c.f, v = a.f; o > i; )
                  for (var h, x = p(arguments[i++]), d = l ? y(u(x), l(x)) : u(x), g = d.length, b = 0; g > b; )
                      (h = d[b++]), (!n || s(v, x, h)) && (e[h] = x[h]);
              return e;
          }
        : l;
