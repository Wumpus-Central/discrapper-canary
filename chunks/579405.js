"use strict";
var n = r(439619)("%Array.prototype%"),
    o = r(333654),
    i = r(870064),
    a = r(741623),
    s = r(358073),
    l = r(568898),
    u = r(528574);
e.exports = function (e) {
    if (!s(e) || e < 0) throw new a("Assertion failed: `length` must be an integer Number >= 0");
    if (e > l) throw new o("length is greater than (2**32 - 1)");
    var t = arguments.length > 1 ? arguments[1] : n,
        r = [];
    if (t !== n) {
        if (!u)
            throw new i(
                "ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]",
            );
        u(r, t);
    }
    return 0 !== e && (r.length = e), r;
};
