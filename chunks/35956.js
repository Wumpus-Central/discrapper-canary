"use strict";
var r = n(257943),
    a = n(410323),
    i = n(485155),
    o = URLSearchParams.prototype,
    s = a(o.forEach);
!r ||
    "size" in o ||
    i(o, "size", {
        get: function () {
            var e = 0;
            return (
                s(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0,
    });
