var i = n(690244),
    r = i('%Array.prototype%'),
    a = i('%RangeError%'),
    s = i('%SyntaxError%'),
    o = i('%TypeError%'),
    l = n(73871),
    u = 4294967295,
    c = n(79536)(),
    d =
        i('%Object.setPrototypeOf%', !0) ||
        (c
            ? function (e, t) {
                  return (e.__proto__ = t), e;
              }
            : null);
e.exports = function (e) {
    if (!l(e) || e < 0) throw new o('Assertion failed: `length` must be an integer Number >= 0');
    if (e > u) throw new a('length is greater than (2**32 - 1)');
    var t = arguments.length > 1 ? arguments[1] : r,
        n = [];
    if (t !== r) {
        if (!d) throw new s('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
        d(n, t);
    }
    return 0 !== e && (n.length = e), n;
};
