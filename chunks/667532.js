"use strict";
var r = n(557939),
    i = n(250594),
    s = n(503199),
    a = n(496538),
    o = n(762503),
    l = n(732376),
    u = 1 !== [].unshift(0),
    c = function () {
        try {
            Object.defineProperty([], "length", { writable: !1 }).unshift();
        } catch (e) {
            return e instanceof TypeError;
        }
    };
r(
    { target: "Array", proto: !0, arity: 1, forced: u || !c() },
    {
        unshift: function (e) {
            var t = i(this),
                n = s(t),
                r = arguments.length;
            if (r) {
                l(n + r);
                for (var u = n; u--; ) {
                    var c = u + r;
                    u in t ? (t[c] = t[u]) : o(t, c);
                }
                for (var d = 0; d < r; d++) t[d] = arguments[d];
            }
            return a(t, n + r);
        },
    },
);
