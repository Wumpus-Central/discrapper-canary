"use strict";
n(249759)();
var r = n(120858),
    i = n(325473),
    a = n(136411),
    s = n(225314),
    o = n(439619),
    l = n(142896),
    u = l(o("%Promise.all%")),
    c = l(o("%Promise.reject%"));
e.exports = function (e) {
    var t = this;
    if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
    return u(
        t,
        s(a(e), function (e) {
            var n = function (e) {
                    return { status: "fulfilled", value: e };
                },
                i = function (e) {
                    return { status: "rejected", reason: e };
                },
                a = r(t, e);
            try {
                return a.then(n, i);
            } catch (e) {
                return c(t, e);
            }
        }),
    );
};
