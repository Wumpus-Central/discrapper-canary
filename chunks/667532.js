"use strict";
var n = r(557939),
    a = r(250594),
    s = r(503199),
    i = r(496538),
    o = r(762503),
    l = r(732376);
n(
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
            var t = a(this),
                r = s(t),
                n = arguments.length;
            if (n) {
                l(r + n);
                for (var u = r; u--; ) {
                    var c = u + n;
                    u in t ? (t[c] = t[u]) : o(t, c);
                }
                for (var d = 0; d < n; d++) t[d] = arguments[d];
            }
            return i(t, r + n);
        },
    },
);
