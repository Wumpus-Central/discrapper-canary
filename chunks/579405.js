"use strict";
var i = n(439619)("%Array.prototype%"),
    r = n(333654),
    s = n(870064),
    a = n(741623),
    o = n(358073),
    l = n(568898),
    u = n(528574);
e.exports = function (e) {
    if (!o(e) || e < 0) throw new a("Assertion failed: `length` must be an integer Number >= 0");
    if (e > l) throw new r("length is greater than (2**32 - 1)");
    var t = arguments.length > 1 ? arguments[1] : i,
        n = [];
    if (t !== i) {
        if (!u)
            throw new s(
                "ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]",
            );
        u(n, t);
    }
    return 0 !== e && (n.length = e), n;
};
