"use strict";
var r = n(557939),
    i = n(304052).findLast,
    a = n(633228);
r(
    { target: "Array", proto: !0 },
    {
        findLast: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
),
    a("findLast");
