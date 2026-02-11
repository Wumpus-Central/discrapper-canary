"use strict";
var r = n(834647),
    a = n(683570),
    o = n(421236),
    i = n(929965),
    s = n(258855),
    l = n(155084),
    c = n(407057),
    u = n(991207),
    d = n(486816),
    p = a("Reflect", "construct"),
    h = Object.prototype,
    f = [].push,
    m = d(function () {
        function e() {}
        return !(p(function () {}, [], e) instanceof e);
    }),
    y = !d(function () {
        p(function () {});
    }),
    v = m || y;
r(
    { target: "Reflect", stat: !0, forced: v, sham: v },
    {
        construct: function (e, t) {
            s(e), l(t);
            var n = arguments.length < 3 ? e : s(arguments[2]);
            if (y && !m) return p(e, t, n);
            if (e === n) {
                switch (t.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                }
                var r = [null];
                return o(f, r, t), new (o(i, e, r))();
            }
            var a = n.prototype,
                d = u(c(a) ? a : h),
                v = o(e, d, t);
            return c(v) ? v : d;
        },
    },
);
