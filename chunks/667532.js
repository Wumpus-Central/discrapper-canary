"use strict";
var r = n(557939),
    o = n(250594),
    a = n(503199),
    i = n(496538),
    u = n(762503),
    s = n(732376);
r(
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
            var t = o(this),
                n = a(t),
                r = arguments.length;
            if (r) {
                s(n + r);
                for (var l = n; l--; ) {
                    var c = l + r;
                    l in t ? (t[c] = t[l]) : u(t, c);
                }
                for (var f = 0; f < r; f++) t[f] = arguments[f];
            }
            return i(t, n + r);
        },
    },
);
