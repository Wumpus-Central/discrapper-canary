"use strict";
var r = n(710821),
    i = n(739305),
    a = n(464046),
    s = n(120394),
    o = n(900923),
    l = i.aTypedArray,
    u = i.getTypedArrayConstructor;
(0, i.exportTypedArrayMethod)(
    "with",
    {
        with: function (e, t) {
            var n = l(this),
                i = s(e),
                c = a(n) ? o(t) : +t;
            return r(n, u(n), i, c);
        },
    }.with,
    !(function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8;
                },
            });
        } catch (e) {
            return 8 === e;
        }
    })(),
);
