"use strict";
var i = n(557939),
    r = n(250594),
    s = n(503199),
    a = n(496538),
    o = n(762503),
    l = n(732376);
i(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
            1 !== [].unshift(0) ||
            !(function () {
                try {
                    Object.defineProperty([], "length", { writable: !1 }).unshift();
                } catch (e) {
                    return e instanceof TypeError;
                }
            })(),
    },
    {
        unshift: function (e) {
            var t = r(this),
                n = s(t),
                i = arguments.length;
            if (i) {
                l(n + i);
                for (var u = n; u--; ) {
                    var c = u + i;
                    u in t ? (t[c] = t[u]) : o(t, c);
                }
                for (var d = 0; d < i; d++) t[d] = arguments[d];
            }
            return a(t, n + i);
        },
    },
);
