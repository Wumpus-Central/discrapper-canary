"use strict";
var i = n(557939),
    r = n(250594),
    s = n(503199),
    a = n(496538),
    o = n(732376);
i(
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
            var t = r(this),
                n = s(t),
                i = arguments.length;
            o(n + i);
            for (var l = 0; l < i; l++) (t[n] = arguments[l]), n++;
            return a(t, n), n;
        },
    },
);
