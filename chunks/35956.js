"use strict";
var n = e(257943),
    o = e(410323),
    i = e(485155),
    a = URLSearchParams.prototype,
    c = o(a.forEach);
!n ||
    "size" in a ||
    i(a, "size", {
        get: function () {
            var t = 0;
            return (
                c(this, function () {
                    t++;
                }),
                t
            );
        },
        configurable: !0,
        enumerable: !0,
    });
