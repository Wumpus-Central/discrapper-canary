"use strict";
var r = n(834647),
    a = n(673162).findIndex,
    o = n(299632),
    i = "findIndex",
    s = !0;
i in [] &&
    [,][i](function () {
        s = !1;
    }),
    r(
        { target: "Array", proto: !0, forced: s },
        {
            findIndex: function (e) {
                return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        },
    ),
    o(i);
