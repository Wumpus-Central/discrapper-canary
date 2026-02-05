"use strict";
var r = n(834647),
    a = n(664886),
    o = n(407057),
    i = n(155084),
    s = n(830150),
    l = n(965746),
    c = n(517480);
r(
    { target: "Reflect", stat: !0 },
    {
        get: function e(t, n) {
            var r,
                u,
                d = arguments.length < 3 ? t : arguments[2];
            return i(t) === d
                ? t[n]
                : (r = l.f(t, n))
                  ? s(r)
                      ? r.value
                      : void 0 === r.get
                        ? void 0
                        : a(r.get, d)
                  : o((u = c(t)))
                    ? e(u, n, d)
                    : void 0;
        },
    },
);
