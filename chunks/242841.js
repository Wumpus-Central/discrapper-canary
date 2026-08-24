"use strict";
r(249759)();
var n = r(120858),
    i = r(325473),
    o = r(136411),
    a = r(225314),
    s = r(439619),
    l = r(142896),
    u = l(s("%Promise.all%")),
    c = l(s("%Promise.reject%"));
e.exports = function (e) {
    var t = this;
    if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
    return u(
        t,
        a(o(e), function (e) {
            var r = n(t, e);
            try {
                return r.then(
                    function (e) {
                        return { status: "fulfilled", value: e };
                    },
                    function (e) {
                        return { status: "rejected", reason: e };
                    },
                );
            } catch (e) {
                return c(t, e);
            }
        }),
    );
};
