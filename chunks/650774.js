"use strict";
var r = n(834647),
    a = n(675879),
    o = n(798325),
    i = RangeError,
    s = String.fromCharCode,
    l = String.fromCodePoint,
    c = a([].join);
r(
    { target: "String", stat: !0, arity: 1, forced: !!l && 1 !== l.length },
    {
        fromCodePoint: function (e) {
            for (var t, n = [], r = arguments.length, a = 0; r > a; ) {
                if (((t = +arguments[a++]), o(t, 1114111) !== t)) throw new i(t + " is not a valid code point");
                n[a] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, (t % 1024) + 56320);
            }
            return c(n, "");
        },
    },
);
