"use strict";
var i = n(557939),
    r = n(304052).findLastIndex,
    s = n(633228);
i(
    { target: "Array", proto: !0 },
    {
        findLastIndex: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
),
    s("findLastIndex");
