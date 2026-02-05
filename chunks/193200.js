"use strict";
var r = n(834647),
    a = n(654272).includes,
    o = n(486816),
    i = n(299632);
r(
    {
        target: "Array",
        proto: !0,
        forced: o(function () {
            return ![,].includes();
        }),
    },
    {
        includes: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
),
    i("includes");
