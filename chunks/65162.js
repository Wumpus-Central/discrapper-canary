"use strict";
var i = n(710821),
    r = n(739305),
    s = n(464046),
    a = n(120394),
    o = n(900923),
    l = r.aTypedArray,
    u = r.getTypedArrayConstructor;
(0, r.exportTypedArrayMethod)(
    "with",
    {
        with: function (e, t) {
            var n = l(this),
                r = a(e),
                c = s(n) ? o(t) : +t;
            return i(n, u(n), r, c);
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
