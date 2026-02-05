"use strict";
var r = n(257943),
    i = n(410323),
    a = n(485155),
    s = URLSearchParams.prototype,
    o = i(s.forEach);
!r ||
    "size" in s ||
    a(s, "size", {
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
