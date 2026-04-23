"use strict";
var r = n(557939),
    i = n(250594),
    s = n(503199),
    a = n(496538),
    o = n(732376);
r(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
            n(503628)(function () {
                return 0x100000001 !== [].push.call({ length: 0x100000000 }, 1);
            }) ||
            !(function () {
                try {
                    Object.defineProperty([], "length", { writable: !1 }).push();
                } catch (e) {
                    return e instanceof TypeError;
                }
            })(),
    },
    {
        push: function (e) {
            var t = i(this),
                n = s(t),
                r = arguments.length;
            o(n + r);
            for (var l = 0; l < r; l++) (t[n] = arguments[l]), n++;
            return a(t, n), n;
        },
    },
);
