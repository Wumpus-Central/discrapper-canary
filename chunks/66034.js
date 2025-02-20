var r = n(690244),
    i = r('%Array.prototype%'),
    o = r('%RangeError%'),
    a = r('%SyntaxError%'),
    s = r('%TypeError%'),
    l = n(73871),
    c = 4294967295,
    u = n(79536)(),
    d =
        r('%Object.setPrototypeOf%', !0) ||
        (u
            ? function (e, t) {
                  return (e.__proto__ = t), e;
              }
            : null);
e.exports = function (e) {
    if (!l(e) || e < 0) throw new s('Assertion failed: `length` must be an integer Number >= 0');
    if (e > c) throw new o('length is greater than (2**32 - 1)');
    var t = arguments.length > 1 ? arguments[1] : i,
        n = [];
    if (t !== i) {
        if (!d) throw new a('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
        d(n, t);
    }
    return 0 !== e && (n.length = e), n;
};
