"use strict";
var r = n(834647),
    a = n(683570),
    o = n(978887),
    i = n(57284),
    s = n(633555),
    l = a("URL");
r(
    { target: "URL", stat: !0, forced: !s },
    {
        parse: function (e) {
            var t = o(arguments.length, 1),
                n = i(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : i(arguments[1]);
            try {
                return new l(n, r);
            } catch (e) {
                return null;
            }
        },
    },
);
