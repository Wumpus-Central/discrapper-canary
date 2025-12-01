var r = n(507604),
    i = n(46015),
    a = n(580983),
    o = n(621523),
    s = n(673451),
    l = n(245),
    c = n(822635),
    u = n(527160),
    d = n(79275),
    f = Object.assign,
    p = Object.defineProperty,
    _ = i([].concat);
e.exports =
    !f ||
    o(function () {
        if (
            r &&
            1 !==
                f(
                    { b: 1 },
                    f(
                        p({}, "a", {
                            enumerable: !0,
                            get: function () {
                                p(this, "b", {
                                    value: 3,
                                    enumerable: !1,
                                });
                            },
                        }),
                        { b: 2 },
                    ),
                ).b
        )
            return !0;
        var e = {},
            t = {},
            n = Symbol("assign detection"),
            i = "abcdefghijklmnopqrst";
        return (
            (e[n] = 7),
            i.split("").forEach(function (e) {
                t[e] = e;
            }),
            7 !== f({}, e)[n] || s(f({}, t)).join("") !== i
        );
    })
        ? function (e, t) {
              for (var n = u(e), i = arguments.length, o = 1, f = l.f, p = c.f; i > o; )
                  for (var m, h = d(arguments[o++]), g = f ? _(s(h), f(h)) : s(h), E = g.length, b = 0; E > b; )
                      (m = g[b++]), (!r || a(p, h, m)) && (n[m] = h[m]);
              return n;
          }
        : f;
