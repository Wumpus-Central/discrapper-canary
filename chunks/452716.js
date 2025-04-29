var r = n(745872)('%Array.prototype%'),
    i = n(333567),
    o = n(429675),
    a = n(815329),
    s = n(637255),
    l = n(163951),
    c = n(371486);
e.exports = function (e) {
    if (!s(e) || e < 0) throw new a('Assertion failed: `length` must be an integer Number >= 0');
    if (e > l) throw new i('length is greater than (2**32 - 1)');
    var t = arguments.length > 1 ? arguments[1] : r,
        n = [];
    if (t !== r) {
        if (!c) throw new o('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
        c(n, t);
    }
    return 0 !== e && (n.length = e), n;
};
