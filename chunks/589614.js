"use strict";
var n = e(834647),
    o = e(673162).find,
    s = e(299632),
    i = "find",
    u = !0;
i in [] &&
    [,][i](function () {
        u = !1;
    }),
    n(
        { target: "Array", proto: !0, forced: u },
        {
            find: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
        },
    ),
    s(i);
