var r = n(745872)('%Array.prototype%'),
    i = n(333567),
    a = n(429675),
    o = n(815329),
    s = n(637255),
    l = n(163951),
    c = n(371486);
e.exports = function (e) {
    if (!s(e) || e < 0) throw new o('Assertion failed: `length` must be an integer Number >= 0');
    if (e > l) throw new i('length is greater than (2**32 - 1)');
    var t = arguments.length > 1 ? arguments[1] : r,
        n = [];
    if (t !== r) {
        if (!c) throw new a('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
        c(n, t);
    }
    return 0 !== e && (n.length = e), n;
};
