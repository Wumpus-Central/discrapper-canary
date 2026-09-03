var n = r(839036)("%Reflect.construct%", !0),
    i = r(173081);
try {
    i({}, "", { "[[Get]]": function () {} });
} catch (e) {
    i = null;
}
if (i && n) {
    var o = {},
        a = {};
    i(a, "length", {
        "[[Get]]": function () {
            throw o;
        },
        "[[Enumerable]]": !0,
    }),
        (e.exports = function (e) {
            try {
                n(e, a);
            } catch (e) {
                return e === o;
            }
        });
} else
    e.exports = function (e) {
        return "function" == typeof e && !!e.prototype;
    };
