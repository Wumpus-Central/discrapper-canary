"use strict";
var i = n(257943),
    r = n(410323),
    s = n(485155),
    a = URLSearchParams.prototype,
    o = r(a.forEach);
!i ||
    "size" in a ||
    s(a, "size", {
        get: function () {
            var e = 0;
            return (
                o(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0,
    });
