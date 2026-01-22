var r = n(439619)("%Array.prototype%"),
    i = n(333654),
    a = n(870064),
    s = n(741623),
    o = n(358073),
    l = n(568898),
    c = n(528574);
e.exports = function (e) {
    if (!o(e) || e < 0) throw new s("Assertion failed: `length` must be an integer Number >= 0");
    if (e > l) throw new i("length is greater than (2**32 - 1)");
    var t = arguments.length > 1 ? arguments[1] : r,
        n = [];
    if (t !== r) {
        if (!c)
            throw new a(
                "ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]",
            );
        c(n, t);
    }
    return 0 !== e && (n.length = e), n;
};
