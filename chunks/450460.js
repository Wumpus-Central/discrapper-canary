"use strict";
var n = r(839036)("%Reflect.construct%", !0),
    o = r(173081);
try {
    o({}, "", { "[[Get]]": function () {} });
} catch (e) {
    o = null;
}
if (o && n) {
    var i = {},
        a = {};
    o(a, "length", {
        "[[Get]]": function () {
            throw i;
        },
        "[[Enumerable]]": !0,
    }),
        (e.exports = function (e) {
            try {
                n(e, a);
            } catch (e) {
                return e === i;
            }
        });
} else
    e.exports = function (e) {
        return "function" == typeof e && !!e.prototype;
    };
