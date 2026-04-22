"use strict";
n(249759)();
var r = n(120858),
    i = n(325473),
    s = n(136411),
    a = n(225314),
    o = n(439619),
    l = n(142896),
    u = l(o("%Promise.all%")),
    d = l(o("%Promise.reject%"));
e.exports = function (e) {
    var t = this;
    if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
    return u(
        t,
        a(s(e), function (e) {
            var n = r(t, e);
            try {
                return n.then(
                    function (e) {
                        return { status: "fulfilled", value: e };
                    },
                    function (e) {
                        return { status: "rejected", reason: e };
                    },
                );
            } catch (e) {
                return d(t, e);
            }
        }),
    );
};
